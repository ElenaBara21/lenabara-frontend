// Create a PostHog dashboard with common insights for your events.
// Usage: node scripts/posthog-dashboard.js
// Env required: POSTHOG_PERSONAL_API_KEY, POSTHOG_PROJECT_ID
// Optional: POSTHOG_HOST (default https://app.posthog.com)

async function main() {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID;
  const host = process.env.POSTHOG_HOST || 'https://app.posthog.com';
  if (!apiKey || !projectId) {
    console.error('Missing POSTHOG_PERSONAL_API_KEY or POSTHOG_PROJECT_ID');
    process.exit(1);
  }

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const dashRes = await fetch(`${host}/api/projects/${projectId}/dashboards/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'Lenabara – Web Funnel',
      description: 'CTA clicks, leads, and calculator usage',
      is_shared: false,
    }),
  });
  if (!dashRes.ok) throw new Error(`Failed to create dashboard: ${await dashRes.text()}`);
  const dashboard = await dashRes.json();
  const dashboardId = dashboard.id;
  console.log('Dashboard created:', dashboardId);

  async function makeInsight(name, events, display = 'ActionsLineGraph') {
    const filters = {
      insight: 'TRENDS',
      display,
      date_from: '-30d',
      events: events.map((id, idx) => ({ id, name: id, type: 'events', order: idx })),
    };
    const res = await fetch(`${host}/api/projects/${projectId}/insights/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, filters, dashboards: [dashboardId] }),
    });
    if (!res.ok) throw new Error(`Failed to create insight ${name}: ${await res.text()}`);
    const json = await res.json();
    console.log('Insight created:', name, json.id);
  }

  await makeInsight('Leads Submitted', ['lead_submit', 'lead_submit_success']);
  await makeInsight('Primary CTAs', ['cta_header_book_audit', 'cta_get_audit', 'cta_request_audit', 'cta_see_packages']);
  await makeInsight('Packages CTAs', ['cta_packages_card_details', 'cta_packages_card_request', 'cta_mobile_packages']);
  await makeInsight('WhatsApp Actions', ['cta_whatsapp_fab', 'cta_whatsapp_click']);
  await makeInsight('Calculator Changes', ['calc_change', 'calc_quickset', 'calc_cta_discuss', 'calc_cta_compare']);

  console.log('All done! Open your dashboard in PostHog to view charts.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

