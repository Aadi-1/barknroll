// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

// Simple in-memory store for rate limiting (keyed by IP)
let submissionStore: { [ip: string]: number[] } = {};

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const now = Date.now();

    // 30 minutes (in ms)
    const windowTime = 30 * 60 * 1000;
    const maxSubmissions = 3;

    if (!submissionStore[ip]) submissionStore[ip] = [];
    submissionStore[ip] = submissionStore[ip].filter(
      (timestamp) => now - timestamp < windowTime
    );

    if (submissionStore[ip].length >= maxSubmissions) {
      return NextResponse.json(
        {
          message:
            "Too many attempts! Please call 805-404-9981 or email barknrollpetcare@gmail.com.",
        },
        { status: 429 }
      );
    }

    // Record this submission
    submissionStore[ip].push(now);

    const body = await request.json();
    const { name, email, phone, service, message, newsletter } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY!,
      domain: process.env.MAILGUN_DOMAIN!,
    });

    // You can move this to an env var if you like:
    const NOTIFY_TO =
      process.env.BNR_NOTIFICATIONS_TO || "barknrollpetcare@gmail.com";
    const FROM_ADDR = `postmaster@${process.env.MAILGUN_DOMAIN}`;

    // 1) Email to YOU with the lead details
    const ownerEmail = {
      from: `NEW INQUIRY <${FROM_ADDR}>`,
      to: NOTIFY_TO,
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interested In: ${service || "N/A"}
Email Notifications: ${newsletter ? "Yes" : "No"}
Message: ${message || "No message provided"}
      `.trim(),
    };

    // 2) Auto-reply to the CLIENT
    const clientEmail = {
      from: `Bark n' Roll Pet Care <${FROM_ADDR}>`,
      to: email,
      subject: "We received your request — Bark n' Roll Pet Care",
      // "Reply-To" so replies go to your inbox:
      "h:Reply-To": NOTIFY_TO,
      text: `Hi ${name},\n\nThank you for your interest — we will be in contact with you soon.\n\nIf this is urgent, call (805) 404-9981 or reply to this email.\n\n— Bark n' Roll Pet Care`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest — we will be in contact with you soon.</p>
        <p>If this is urgent, call <strong>(805) 404-9981</strong> or reply to this email.</p>
        <p>— Bark n' Roll Pet Care</p>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      mg.messages().send(ownerEmail),
      mg.messages().send(clientEmail),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
