import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function get(name: string, fallback?: string) {
  const v = process.env[name];
  return v ?? fallback ?? "";
}

type ExpectedProp = { key: string; type: string };

function expectedProps(): ExpectedProp[] {
  const arr: ExpectedProp[] = [
    { key: get("NOTION_PROP_NAME", "Name"), type: "title" },
    { key: get("NOTION_PROP_EMAIL", "Email"), type: "email" },
    { key: get("NOTION_PROP_COMPANY", "Company"), type: "rich_text" },
    { key: get("NOTION_PROP_WEBSITE", "Website"), type: "url" },
    { key: get("NOTION_PROP_SOURCE", "Source"), type: "rich_text" },
    { key: get("NOTION_PROP_MESSAGE", "Message"), type: "rich_text" },
  ];
  const P_PLAN = get("NOTION_PROP_PLAN");
  const P_PLAN_TYPE = (get("NOTION_PROP_PLAN_TYPE", "rich_text")).toLowerCase();
  const P_SPEND = get("NOTION_PROP_SPEND");
  if (P_PLAN) arr.push({ key: P_PLAN, type: P_PLAN_TYPE === 'select' ? 'select' : 'rich_text' });
  if (P_SPEND) arr.push({ key: P_SPEND, type: "number" });
  return arr;
}

export async function GET(_req: NextRequest) {
  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DB_ID;
  if (!token || !db) {
    return NextResponse.json(
      { ok: false, error: "Missing NOTION_TOKEN or NOTION_DB_ID" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${db}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
      },
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ ok: false, error: text }, { status: res.status });
    }
    const json = await res.json();
    const props = json?.properties || {};

    const checks = expectedProps().map((p) => {
      const prop = props[p.key];
      const type = prop?.type;
      return { key: p.key, expected: p.type, actual: type || null, ok: type === p.type };
    });

    const allOk = checks.every((c) => c.ok);
    return NextResponse.json({ ok: allOk, checks });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
