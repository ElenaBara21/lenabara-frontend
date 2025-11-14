PostHog Dashboard Setup

Prereqs
- PostHog project created
- Personal API key (Account → Profile → Personal API Keys)
- Your Project ID (Settings → Project → Project ID)

Environment
- Set the following before running the script:
  - `POSTHOG_PERSONAL_API_KEY`
  - `POSTHOG_PROJECT_ID`
  - Optional `POSTHOG_HOST` (default: https://app.posthog.com)

Create dashboard
1) Run: `node scripts/posthog-dashboard.js`
2) The script creates a dashboard named “Lenabara – Web Funnel” with insights:
   - Leads Submitted: `lead_submit`, `lead_submit_success`
   - Primary CTAs: `cta_header_book_audit`, `cta_get_audit`, `cta_request_audit`, `cta_see_packages`
   - Packages CTAs: `cta_packages_card_details`, `cta_packages_card_request`, `cta_mobile_packages`
   - WhatsApp Actions: `cta_whatsapp_fab`, `cta_whatsapp_click`
   - Calculator Changes: `calc_change`, `calc_quickset`, `calc_cta_discuss`, `calc_cta_compare`

Notes
- The script uses PostHog’s REST API and requires your personal API key. Do not expose it publicly.
- You can move/resize charts in the PostHog UI once created.
- If you want to version-control insights instead, convert this to use PostHog’s “Dashboards as Code” pattern.

