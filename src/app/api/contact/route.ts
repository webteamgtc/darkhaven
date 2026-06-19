import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, interest, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.MAILGUN_API_KEY!;
    const domain = process.env.MAILGUN_DOMAIN!;
    const toEmail = process.env.CONTACT_TO_EMAIL!;
    const fromEmail = process.env.CONTACT_FROM_EMAIL!;

    const body = new URLSearchParams({
      from: `Darkhaven Contact Form <${fromEmail}>`,
      to: toEmail,
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
      "h:Reply-To": email,
    });

    const response = await fetch(
      `https://api.mailgun.net/v3/${domain}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Mailgun error:", err);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
