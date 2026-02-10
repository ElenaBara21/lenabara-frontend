import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  source?: string;
  plan?: string;
  spend?: number;
  utm?: Record<string, unknown>;
};

async function postJSON(url: string, data: unknown, init: RequestInit = {}) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    body: JSON.stringify(data),
    ...init,
  });
}

async function sendTelegram(payload: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { ok: false, skipped: true } as const;

  const summaryParts = [
    payload.plan ? `Plan: ${payload.plan}` : null,
    typeof payload.spend === "number" ? `Spend: AED ${payload.spend}` : null,
    payload.source ? `Source: ${payload.source}` : null,
    payload.utm && (payload.utm as any).utm_source ? `UTM: ${(payload.utm as any).utm_source}` : null,
  ].filter(Boolean);

  const text = [
    `New Lead — Name: ${payload.name || "-"} | Email: ${payload.email || "-"}`,
    `Company: ${payload.company || "-"} | Website: ${payload.website || "-"}`,
    summaryParts.length ? summaryParts.join(" | ") : undefined,
    payload.message ? `Message: ${payload.message}` : undefined,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await postJSON(
    `https://api.telegram.org/bot${token}/sendMessage`,
    { chat_id: chatId, text }
  );
  return { ok: res.ok } as const;
}

function getNotionProp(name: string, fallback: string) {
  return process.env[name] || fallback;
}

async function sendNotion(payload: LeadPayload) {
  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DB_ID;
  if (!token || !db) return { ok: false, skipped: true } as const;

  // Allow custom property names via env
  const P_NAME = getNotionProp("NOTION_PROP_NAME", "Name"); // title
  const P_EMAIL = getNotionProp("NOTION_PROP_EMAIL", "Email"); // email
  const P_COMPANY = getNotionProp("NOTION_PROP_COMPANY", "Company"); // rich_text
  const P_WEBSITE = getNotionProp("NOTION_PROP_WEBSITE", "Website"); // url
  const P_SOURCE = getNotionProp("NOTION_PROP_SOURCE", "Source"); // rich_text
  const P_MESSAGE = getNotionProp("NOTION_PROP_MESSAGE", "Message"); // rich_text (optional)
  const P_PLAN = process.env.NOTION_PROP_PLAN; // rich_text or select (optional)
  const P_SPEND = process.env.NOTION_PROP_SPEND; // number (optional)
  const P_PLAN_TYPE = (process.env.NOTION_PROP_PLAN_TYPE || "rich_text").toLowerCase(); // 'select' or 'rich_text'

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: db },
      properties: {
        [P_NAME]: { title: [{ text: { content: payload.name || "Unknown" } }] },
        [P_EMAIL]: { email: payload.email || null },
        [P_COMPANY]: { rich_text: payload.company ? [{ text: { content: payload.company } }] : [] },
        [P_WEBSITE]: { url: payload.website || null },
        [P_SOURCE]: { rich_text: payload.source ? [{ text: { content: payload.source } }] : [] },
        ...(payload.message ? { [P_MESSAGE]: { rich_text: [{ text: { content: payload.message } }] } } : {}),
        ...(P_PLAN && payload.plan
          ? P_PLAN_TYPE === "select"
            ? { [P_PLAN]: { select: { name: payload.plan } } }
            : { [P_PLAN]: { rich_text: [{ text: { content: payload.plan } }] } }
          : {}),
        ...(P_SPEND && typeof payload.spend === 'number' ? { [P_SPEND]: { number: payload.spend } } : {}),
      },
      // Keep children optional; properties already hold message when configured
      children: [],
    }),
  });
  return { ok: res.ok } as const;
}

async function sendSheets(payload: LeadPayload) {
  const url = process.env.SHEETS_WEBHOOK_URL; // Apps Script Web App URL
  if (!url) return { ok: false, skipped: true } as const;
  const res = await postJSON(url, { type: "lead", payload });
  return { ok: res.ok } as const;
}

async function sendGenericWebhook(payload: LeadPayload) {
  const url = process.env.LEAD_WEBHOOK_URL; // Zapier/Make custom webhook
  if (!url) return { ok: false, skipped: true } as const;
  const res = await postJSON(url, { type: "lead", payload });
  return { ok: res.ok } as const;
}

async function sendBrevo(payload: LeadPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return { ok: false, skipped: true } as const;

  const listIdRaw = process.env.BREVO_LEAD_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : undefined;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      attributes: {
        FIRSTNAME: payload.name,
        NUMBER: payload.phone,
        WEBSITE: payload.website,
        MESSAGE: payload.message,
        SOURCE: payload.source,
        OPTIONS: payload.plan,
      },
      ...(listId ? { listIds: [listId] } : {}),
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, error: text || "Brevo error" } as const;
  }

  if (listId) {
    const addRes = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ emails: [payload.email] }),
    });

    if (!addRes.ok) {
      const text = await addRes.text().catch(() => "");
      if (text.includes("Contact already in list")) {
        return { ok: true } as const;
      }
      return { ok: false, error: text || "Brevo list add error" } as const;
    }
  }

  return { ok: true } as const;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as LeadPayload;
    if (!data || !data.email || !data.name) {
      return NextResponse.json({ ok: false, error: "Missing name or email" }, { status: 400 });
    }

    // Server-side fallback: infer plan from spend when missing
    if (!data.plan && typeof data.spend === 'number') {
      const s = data.spend;
      if (s < 4000) data.plan = 'Pilot Pack';
      else if (s < 15000) data.plan = 'Growth System';
      else data.plan = 'Performance Partner';
    }

    const tasks = await Promise.allSettled([
      sendTelegram(data),
      sendNotion(data),
      sendSheets(data),
      sendGenericWebhook(data),
      sendBrevo(data),
    ]);

    const results = tasks.map((t) => (t.status === "fulfilled" ? t.value : { ok: false, error: String(t.reason) }));
    const anyOk = results.some((r: any) => r.ok);

    console.log("[lead]", {
      payload: data,
      results,
      ua: req.headers.get("user-agent") || undefined,
      ip: req.headers.get("x-forwarded-for") || undefined,
    });

    if (!anyOk) {
      const firstError = (results as any[]).find(
        (r) => r && typeof r === "object" && "error" in r && typeof r.error === "string"
      )?.error as string | undefined;
      return NextResponse.json({ ok: false, error: firstError || "Lead capture failed", results }, { status: 502 });
    }

    return NextResponse.json({ ok: true, results });
  } catch (err) {
    console.error("/api/lead error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
