import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, interest, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Darkhaven Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New Contact: ${firstName} ${lastName} — ${interest}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Area of Interest: ${interest}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
          <h2 style="color:#1e3a5f;margin-bottom:16px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;color:#111827;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Area of Interest</td><td style="padding:8px 0;font-weight:600;color:#111827;">${interest}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e5e7eb;">
            <p style="margin:0 0 8px;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
            <p style="margin:0;color:#111827;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Sent from darkhaven.ai contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Server error.";
    console.error("Contact API error:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
