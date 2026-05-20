import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type NotifyLeadPayload = {
  business_name?: string | null;
  contact_name?: string | null;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  main_goal?: string | null;
  monthly_budget?: string | null;
};

export async function POST(req: NextRequest) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" }, { status: 500 });
    }

    const data = (await req.json()) as NotifyLeadPayload;

    const text = [
      "New Lead Intake Submission",
      `Business name: ${data.business_name || "-"}`,
      `Contact name: ${data.contact_name || "-"}`,
      `Email: ${data.email || "-"}`,
      `Phone: ${data.phone || "-"}`,
      `Website: ${data.website || "-"}`,
      `Main goal: ${data.main_goal || "-"}`,
      `Monthly budget: ${data.monthly_budget || "-"}`,
    ].join("\n");

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!telegramRes.ok) {
      const errorBody = await telegramRes.text().catch(() => "");
      console.error("/api/notify-lead telegram send failed:", errorBody || telegramRes.statusText);
      return NextResponse.json({ ok: false, error: "Telegram notification failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/notify-lead error:", error);
    return NextResponse.json({ ok: false, error: "Unexpected server error" }, { status: 500 });
  }
}