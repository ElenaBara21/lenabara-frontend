import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { event, props, ts } = body || {};

    // Best-effort logging (server console). Replace with your own sink if needed.
    console.log("[analytics]", {
      event,
      ts: ts || Date.now(),
      props: props || {},
      ua: req.headers.get("user-agent") || undefined,
      ip: req.headers.get("x-forwarded-for") || undefined,
      path: req.nextUrl.pathname,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/events error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

