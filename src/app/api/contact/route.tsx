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

    // Change windowTime to 30 minutes:
    // 30 * 60 * 1000 = 1,800,000 ms
    const windowTime = 30 * 60 * 1000;

    // Maximum submissions allowed per IP within the window
    const maxSubmissions = 3;

    // Initialize or clean up old timestamps
    if (!submissionStore[ip]) {
      submissionStore[ip] = [];
    }
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

    // Record this submission timestamp
    submissionStore[ip].push(now);

    const body = await request.json();
    const { name, email, phone, service, message } = body;

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

    const emailData = {
      from: `Bark n' Roll <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: "aadithrowacct@gmail.com", // For testing, change as needed
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Interested In: ${service || "N/A"}
        Message: ${message || "No message provided"}
      `,
    };

    await mg.messages().send(emailData);

    return NextResponse.json(
      { message: "Email sent successfully" },
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
