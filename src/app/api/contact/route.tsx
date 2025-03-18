// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

// Ensure Node.js runtime
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // Parse request body as JSON
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Mailgun with your API key and domain from env variables
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY!,
      domain: process.env.MAILGUN_DOMAIN!,
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    const emailData = {
      from: `Bark n' Roll <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: "aadithrowacct@gmail.com", // For testing, you might send to your own email
      subject: `New Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Interested In: ${service || "N/A"}
        Message: ${message || "No message provided"}
      `,
    };

    // Send the email using Mailgun's API
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
