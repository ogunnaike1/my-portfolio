import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message, interests } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ogunnaikeusman17@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="margin-bottom:4px;">New contact from your portfolio</h2>
          <p style="color:#666;margin-top:0;">Someone reached out via your contact form.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${interests?.length ? `<p><strong>Interests:</strong> ${interests.join(", ")}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
