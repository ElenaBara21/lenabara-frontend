// Validate Notion database schema using env-provided property names.
// Usage: node scripts/check-notion.js
// Env required: NOTION_TOKEN, NOTION_DB_ID
// Optional property envs: NOTION_PROP_NAME, NOTION_PROP_EMAIL, NOTION_PROP_COMPANY, NOTION_PROP_WEBSITE, NOTION_PROP_SOURCE, NOTION_PROP_MESSAGE

async function main() {
  const token = process.env.NOTION_TOKEN;
  const db = process.env.NOTION_DB_ID;
  if (!token || !db) {
    console.error('Missing NOTION_TOKEN or NOTION_DB_ID');
    process.exit(1);
  }
  const get = (k, f) => process.env[k] || f;
  const expected = [
    { key: get('NOTION_PROP_NAME', 'Name'), type: 'title' },
    { key: get('NOTION_PROP_EMAIL', 'Email'), type: 'email' },
    { key: get('NOTION_PROP_COMPANY', 'Company'), type: 'rich_text' },
    { key: get('NOTION_PROP_WEBSITE', 'Website'), type: 'url' },
    { key: get('NOTION_PROP_SOURCE', 'Source'), type: 'rich_text' },
    { key: get('NOTION_PROP_MESSAGE', 'Message'), type: 'rich_text' },
  ];
  if (process.env.NOTION_PROP_PLAN) {
    const t = (process.env.NOTION_PROP_PLAN_TYPE || 'rich_text').toLowerCase();
    expected.push({ key: process.env.NOTION_PROP_PLAN, type: t === 'select' ? 'select' : 'rich_text' });
  }
  if (process.env.NOTION_PROP_SPEND) expected.push({ key: process.env.NOTION_PROP_SPEND, type: 'number' });

  const res = await fetch(`https://api.notion.com/v1/databases/${db}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
    }
  });
  if (!res.ok) {
    console.error('Failed to fetch DB schema:', await res.text());
    process.exit(1);
  }
  const json = await res.json();
  const props = json.properties || {};
  let ok = true;
  for (const exp of expected) {
    const prop = props[exp.key];
    const actual = prop?.type || null;
    const match = actual === exp.type;
    ok = ok && match;
    console.log(`${match ? '✓' : '✗'} ${exp.key}: expected=${exp.type} actual=${actual}`);
  }
  process.exit(ok ? 0 : 2);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
