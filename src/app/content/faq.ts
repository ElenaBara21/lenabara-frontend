export type FAQItem = { q: string; a: string };
export type FAQGroup = { title: string; items: FAQItem[] };

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "What results can I expect in the first month?",
    a: "In the Pilot Launch, we validate audiences and creatives to reach a stable cost per result and identify top performers. You’ll get a mini performance report with clear next steps.",
  },
  {
    q: "Do I keep ownership of my ad accounts?",
    a: "Yes. You fully own your ad accounts, pixels, and data. We work with your assets for transparency and long‑term control.",
  },
  {
    q: "Is ad spend included in the package fee?",
    a: "No. Service fees are separate from media spend. You control the budget directly on Meta or Google.",
  },
  {
    q: "Can you run ads in both Arabic and English?",
    a: "Absolutely. We can produce and test bilingual creatives tailored for the UAE and GCC markets.",
  },
  {
    q: "How soon can we start?",
    a: "Typically within 3–5 business days after onboarding (access, billing, and brief). Pilot Launch campaigns can go live quickly once tracking is verified.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Meta (Facebook/Instagram) and Google Ads (Search, Display, Performance Max). We’ll recommend the best fit based on your goals and budget.",
  },
  {
    q: "What reporting do I receive?",
    a: "You’ll get concise weekly updates during the Pilot and a summary report at the end with insights, winners, and recommended next steps.",
  },
  {
    q: "What happens after the Pilot Launch?",
    a: "We review results together and, if it’s a fit, move into a Growth plan to scale what’s working with better creative, offers, and audiences.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Pilot Launch is a fixed short engagement. Growth plans have a simple monthly agreement with a clear notice period.",
  },
  {
    q: "What’s the recommended ad spend?",
    a: "For Pilots, we suggest a focused test budget (often AED 2,000–5,000) depending on industry and goals. We’ll tailor a proposal to your case.",
  },
];

export const FAQ_GROUPS: FAQGroup[] = [
  {
    title: "Pilot Launch",
    items: [
      FAQ_ITEMS[0], // results first month
      FAQ_ITEMS[6], // what happens after pilot
      FAQ_ITEMS[4], // how soon can we start
    ],
  },
  {
    title: "Platforms",
    items: [
      FAQ_ITEMS[5], // which platforms
      FAQ_ITEMS[3], // arabic and english
    ],
  },
  {
    title: "Billing & Ownership",
    items: [
      FAQ_ITEMS[1], // ownership
      FAQ_ITEMS[2], // ad spend included
      FAQ_ITEMS[7], // cancel anytime
    ],
  },
  {
    title: "Reporting & Budget",
    items: [
      FAQ_ITEMS[6], // reporting
      FAQ_ITEMS[9], // recommended ad spend
    ],
  },
];
