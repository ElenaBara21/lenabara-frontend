import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    if (!email) return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "no-reply@lenabara.com";
    const senderName = process.env.BREVO_SENDER_NAME || "Lena Bara";
    const downloadUrl = process.env.DOWNLOAD_KIT_URL || "https://lenabara.com/kit";
    if (!apiKey) return NextResponse.json({ ok: false, error: "BREVO_API_KEY not configured" }, { status: 500 });

    const payload = {
      to: [{ email, name }],
      sender: { email: senderEmail, name: senderName },
      subject: "Your UAE Ads Readiness Kit",
      htmlContent:
        `<div style="font-family:Arial,sans-serif;font-size:16px;color:#111">
          <p>Hi ${name || "there"},</p>
          <p>Thanks for requesting the UAE Ads Readiness Kit.</p>
          <p><a href="${downloadUrl}" style="background:#EB4604;color:#000;padding:10px 16px;text-decoration:none;font-weight:700">Download your kit</a></p>
          <p style="color:#666;font-size:13px">If the button doesn’t work, copy and paste this link into your browser:<br/>${downloadUrl}</p>
        </div>`,
    } as any;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ ok: false, error: `Brevo send error: ${txt}` }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}

