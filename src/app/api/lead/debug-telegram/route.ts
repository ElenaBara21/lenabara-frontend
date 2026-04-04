import { NextResponse } from "next/server";

export const runtime = "nodejs";

function maskToken(token: string) {
  if (!token) return "";
  if (token.length <= 10) return "***";
  return `${token.slice(0, 6)}...${token.slice(-4)}`;
}

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN || "";
  const chatId = process.env.TELEGRAM_CHAT_ID || "";

  const tokenPresent = Boolean(token);
  const chatIdPresent = Boolean(chatId);

  if (!tokenPresent || !chatIdPresent) {
    return NextResponse.json(
      {
        ok: false,
        tokenPresent,
        chatIdPresent,
        tokenMasked: tokenPresent ? maskToken(token) : null,
        telegramAuthOk: false,
        chatReachable: false,
        error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID",
      },
      { status: 200 }
    );
  }

  let telegramAuthOk = false;
  let chatReachable = false;
  let authError: string | null = null;
  let reachabilityError: string | null = null;

  try {
    const getMeRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const getMeJson = await getMeRes.json().catch(() => null);
    telegramAuthOk = Boolean(getMeRes.ok && getMeJson?.ok === true);

    if (!telegramAuthOk) {
      authError = `getMe failed: ${JSON.stringify(getMeJson)}`;
    }
  } catch (err: unknown) {
    authError = err instanceof Error ? err.message : "Unknown error";
  }

  if (telegramAuthOk) {
    try {
      const sendRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Health check ping from lenabara (${new Date().toISOString()})`,
          disable_notification: true,
        }),
      });
      const sendJson = await sendRes.json().catch(() => null);
      chatReachable = Boolean(sendRes.ok && sendJson?.ok === true);

      if (!chatReachable) {
        reachabilityError = `sendMessage failed: ${JSON.stringify(sendJson)}`;
      }
    } catch (err: unknown) {
      reachabilityError = err instanceof Error ? err.message : "Unknown error";
    }
  }

  return NextResponse.json(
    {
      ok: telegramAuthOk && chatReachable,
      tokenPresent,
      chatIdPresent,
      tokenMasked: maskToken(token),
      telegramAuthOk,
      chatReachable,
      errors: {
        authError,
        reachabilityError,
      },
    },
    { status: 200 }
  );
}
