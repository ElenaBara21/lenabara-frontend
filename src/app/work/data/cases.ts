import type { CaseStudy } from "../types";

export const cases: CaseStudy[] = [
  {
    slug: "aesthetic-clinic",
    type: "concept",
    title: "Aesthetic Clinic Growth System",
    premise:
      "How I'd rebuild a Dubai aesthetic clinic's Meta Ads - from an unstructured, traffic-optimized setup into a conversion-focused WhatsApp acquisition system.",
    disclaimer:
      "All figures are modeled projections based on UAE aesthetic-market benchmarks - not results from a live client account.",
    metaDescription:
      "A strategy concept: rebuilding a Dubai aesthetic clinic's Meta Ads into a conversion-focused WhatsApp acquisition funnel, with modeled unit economics.",
    sections: {
      context: {
        heading: "The Client & Context",
        body: "A realistic Dubai aesthetic clinic offering Botox, dermal fillers, facials and skin rejuvenation. Goal: turn ad spend into high-intent WhatsApp inquiries that convert to consultations and bookings. Assumed budget: 4,500 AED/month, Meta Ads. The problem this concept solves: high spend, low-intent leads, no tracking, generic \"Book Now\" messaging, no retargeting.",
      },
      whatsBroken: {
        heading: "What's Typically Broken",
        body: "The structural failures I'd expect to find in an unoptimized setup:",
        items: [
          "No conversion tracking - Pixel installed but no meaningful events captured",
          "Wrong campaign objective - optimized for Traffic, not Leads/Conversions",
          "Broad targeting - no segmentation or intent filtering",
          "Weak creatives - stock visuals, no trust or transformation proof",
          "No clear offer - no urgency, no compelling value proposition",
          "No retargeting - high-intent visitors lost without follow-up",
        ],
      },
      funnel: {
        intro:
          "Instead of \"running ads,\" I'd rebuild the acquisition system as a three-stage funnel that matches message to intent at each step.",
        stages: [
          {
            n: 1,
            name: "Awareness",
            body: "Cold audiences discovering the clinic. Video-led, clinic-and-doctor content to build recognition.",
          },
          {
            n: 2,
            name: "Engagement",
            body: "Warm audiences nurtured with educational content, real before/after proof, and testimonials to build trust.",
          },
          {
            n: 3,
            name: "Conversion",
            body: "High-intent offers driving direct WhatsApp conversations. Fast response, no long forms, pre-qualification built in.",
          },
        ],
        philosophy: "Core philosophy: match message to intent at each stage, and measure every step.",
      },
      execution: {
        heading: "Technical Execution",
        body: "The tracking and campaign structure underneath the funnel. This is my real technical base - the same GA4/GTM/Pixel stack I've configured from scratch.",
        items: [
          "GA4 + GTM + Meta Pixel configured to capture meaningful events (WhatsApp clicks, calls) for full attribution",
          "Campaign objective switched from Traffic to Leads/Conversions",
          "High-intent targeting: geo on high-income Dubai areas, interest layering for skincare/aesthetics",
          "Retargeting layer: website visitors, Instagram engagers, video viewers",
          "Offer repositioning: \"Free consultation + personalized treatment plan\" with a limited-time first-session incentive",
        ],
      },
      projected: {
        intro: "The numbers this system is designed to hit - targets, not history:",
        metrics: [
          {
            label: "Target CPL",
            value: "~30-35 AED",
            note: "vs 60+ AED typical for unoptimized UAE aesthetic Meta Ads",
          },
          {
            label: "Target volume",
            value: "120-150 leads/mo",
            note: "WhatsApp inquiries at 4,500 AED budget",
          },
          {
            label: "Target CTR",
            value: "~2.4%",
            note: "driven by video + retargeting",
          },
          {
            label: "Target CPC",
            value: "~1.8 AED",
            note: "",
          },
        ],
        basis: "Basis: UAE aesthetic-vertical benchmarks + standard funnel-conversion assumptions.",
      },
      impact: {
        intro: "If the model holds - all figures are assumptions, not delivered results:",
        metrics: [
          {
            label: "Booking conversion",
            value: "~28%",
            note: "assumed, WhatsApp lead -> consultation",
          },
          {
            label: "New clients",
            value: "~40-50/mo",
            note: "if conversion holds",
          },
          {
            label: "Cost per booking",
            value: "~90-110 AED",
            note: "at target CPL",
          },
        ],
        note: "The clinic moves from unpredictable, referral-only flow to a measurable, forecastable acquisition system.",
      },
      method: {
        heading: "My Method",
        body: "What this concept demonstrates:",
        items: [
          "I diagnose the funnel before touching budget - objective, tracking, targeting, offer",
          "I build measurement first, so every stage is attributable",
          "I plan against unit economics (CPL -> CAC -> cost per booking), not vanity metrics",
          "I separate what's proven from what's projected - and label it honestly",
        ],
      },
    },
  },
  {
    slug: "saas-growth-system",
    type: "concept",
    title: "B2B SaaS Acquisition & Retention System",
    premise:
      "How I'd connect paid acquisition to retention analytics for a B2B SaaS - optimizing not just for signups, but for LTV:CAC and payback.",
    disclaimer:
      "All figures are modeled projections based on B2B SaaS benchmarks - not results from a live client account.",
    metaDescription:
      "A strategy concept: building a B2B SaaS acquisition system across Google Search and LinkedIn, modeled against CAC, LTV:CAC, payback and churn - connecting paid media to retention analytics.",
    sections: {
      context: {
        heading: "The Client & Context",
        body: "A realistic B2B SaaS company with a subscription product, running a mix of self-serve trials and sales-assisted deals. Goal: grow paid acquisition without breaking unit economics - every new customer has to pay back inside a sensible window and clear an LTV:CAC bar. Assumed budget: $3,000-5,000/month across Google Search and LinkedIn. The problem this concept solves: acquisition optimized for cheap signups instead of retained, paying customers - the classic SaaS trap where CAC looks fine until churn is priced in.",
      },
      whatsBroken: {
        heading: "What's Typically Broken",
        body: "The structural failures I'd expect to find in a SaaS paid setup that isn't tied to unit economics:",
        items: [
          "Optimized for signups, not paid conversions - trial volume looks good, revenue doesn't follow",
          "CAC measured in isolation - no LTV:CAC ratio, so unprofitable channels look successful",
          "No cohort or retention view - churn silently erases acquired revenue",
          "Search and LinkedIn treated the same - high-intent and prospecting budgets blended, neither optimized",
          "No payback-period tracking - spend scales faster than cash comes back",
          "No feedback loop from retention to acquisition - best-retaining segments aren't targeted harder",
        ],
      },
      funnel: {
        intro:
          "Instead of chasing cheap signups, I'd build the system around the full economic journey - from click to retained revenue - matching channel to intent.",
        stages: [
          {
            n: 1,
            name: "Capture high intent",
            body: "Google Search for people actively looking for the solution category - the highest-intent, most efficient source of trials and demos.",
          },
          {
            n: 2,
            name: "Reach the ICP",
            body: "LinkedIn targeting by role, company size and industry to put the product in front of the ideal-customer-profile before they're actively searching, plus retargeting of site visitors.",
          },
          {
            n: 3,
            name: "Convert & retain",
            body: "Trial or demo signup, then optimize toward trial->paid conversion and early retention - not the signup itself. Feed retention data back to weight acquisition toward the segments that stay.",
          },
        ],
        philosophy:
          "Core philosophy: acquisition and retention are one system. The goal isn't a cheap signup - it's a customer whose LTV clears CAC with room to spare.",
      },
      execution: {
        heading: "Technical Execution",
        body: "The measurement and modeling underneath the funnel. This sits directly on my technical base - GA4/GTM tracking plus the data-science work I've done on churn prediction.",
        items: [
          "GA4 + GTM configured to track the full path: click -> trial -> activation -> paid, with source attribution held all the way through",
          "Campaign objectives set to paid-conversion signals, not raw signups, so the platforms optimize toward revenue",
          "Search and LinkedIn split into separate, independently-optimized budgets by intent level",
          "Unit-economics model in Sheets: CAC by channel, LTV, LTV:CAC ratio, payback period - the actual decision layer",
          "Cohort and churn analysis to see which acquired segments retain - connecting to my churn-prediction project (github.com/ElenaBara21/Portfolio) to identify high-LTV segments and weight spend toward them",
        ],
      },
      projected: {
        intro: "The unit-economics targets this system is designed to hit - targets, not history:",
        metrics: [
          {
            label: "LTV:CAC",
            value: "3:1+",
            note: "the standard healthy-SaaS benchmark",
          },
          {
            label: "Payback period",
            value: "< 12 months",
            note: "CAC recovered inside a year",
          },
          {
            label: "Trial -> paid",
            value: "~15-20%",
            note: "typical B2B self-serve range",
          },
          {
            label: "CAC by channel",
            value: "modeled",
            note: "Search vs LinkedIn compared on true cost, not signup cost",
          },
        ],
        basis:
          "Basis: B2B SaaS benchmarks + standard funnel-conversion assumptions. These are the economics the system is built to hit, not measured results.",
      },
      impact: {
        intro: "If the model holds - all figures are assumptions, not delivered results:",
        metrics: [
          {
            label: "Profitable scaling",
            value: "yes",
            note: "spend grows only where LTV:CAC clears the bar",
          },
          {
            label: "Payback discipline",
            value: "< 12 mo",
            note: "cash returns before spend compounds",
          },
          {
            label: "Retention-weighted",
            value: "spend",
            note: "budget shifts toward segments that stay",
          },
        ],
        note:
          "The company moves from chasing signup volume to scaling on unit economics - spending into channels and segments that produce retained, profitable customers.",
      },
      method: {
        heading: "My Method",
        body: "What this concept demonstrates:",
        items: [
          "I optimize for retained revenue, not vanity signups - the metric is LTV:CAC, not cost per trial",
          "I treat acquisition and retention as one measurable system, not separate teams",
          "I bring a data-science base to marketing - cohort and churn modeling, not just campaign management",
          "I separate what's proven from what's projected - and label it honestly",
        ],
      },
    },
  },
  {
    slug: "edtech-growth-system",
    type: "concept",
    title: "EdTech Enrollment Growth System",
    premise:
      "How I'd turn an online course or EdTech's ad spend into predictable enrollments - measured per cohort, on cost per enrollment and return on ad spend.",
    disclaimer:
      "All figures are modeled projections based on EdTech benchmarks - not results from a live client account.",
    metaDescription:
      "A strategy concept: building an EdTech enrollment funnel across Meta and Google, modeled against cost per lead, lead-to-enrollment conversion, cost per enrollment and ROMI per cohort.",
    sections: {
      context: {
        heading: "The Client & Context",
        body: "A realistic online education business - cohort-based or self-paced courses. Goal: turn ad spend into enrollments at a cost that leaves margin, and make each cohort's economics predictable before scaling spend. Assumed budget: $2,000-4,000/month across Meta and Google. The problem this concept solves: ads that generate cheap leads which never enroll, no visibility into cost per actual enrollment, and no per-cohort view of whether the spend paid back.",
      },
      whatsBroken: {
        heading: "What's Typically Broken",
        body: "The structural failures I'd expect to find in an EdTech paid setup:",
        items: [
          "Optimized for leads, not enrollments - cheap sign-ups that don't convert to paying students",
          "No lead-to-enrollment tracking - cost per lead is known, cost per enrollment isn't",
          "Cold traffic sent straight to a hard sell - no nurture between interest and enrollment",
          "Meta and Google blended - prospecting and high-intent search neither separated nor optimized",
          "No per-cohort economics - spend isn't tied back to whether that intake was profitable",
          "No retargeting of engaged-but-unconverted - warm interest lost at the decision stage",
        ],
      },
      funnel: {
        intro:
          "Instead of pushing cold traffic at an enrollment page, I'd build a staged funnel that warms interest before asking for the decision - matching channel to intent.",
        stages: [
          {
            n: 1,
            name: "Awareness",
            body: "Meta to cold audiences - surface the course to people who fit the learner profile but aren't searching yet, via a low-friction lead magnet (free lesson, webinar, guide).",
          },
          {
            n: 2,
            name: "Nurture",
            body: "Warm the lead between interest and decision - educational content, outcomes, student stories - and retarget engaged-but-unconverted prospects.",
          },
          {
            n: 3,
            name: "Enrollment",
            body: "Google Search to capture high-intent, ready-to-enroll demand, plus conversion-focused offers driving the enrollment itself.",
          },
        ],
        philosophy:
          "Core philosophy: education is a considered purchase. Warm the lead, then measure the whole path to a paid enrollment - not the cheap click at the top.",
      },
      execution: {
        heading: "Technical Execution",
        body: "The tracking and economics underneath the funnel. This is my real technical base - the same GA4/GTM/Pixel stack I've configured from scratch, plus unit-economics modeling.",
        items: [
          "GA4 + GTM + Meta Pixel configured to track the full path: ad -> lead magnet -> nurture -> enrollment, with source attribution held through to the paid enrollment",
          "Campaign objectives set to enrollment/conversion signals, not top-of-funnel leads",
          "Meta and Google split into separate, independently-optimized budgets by intent level",
          "Retargeting layer for lead-magnet downloaders, webinar registrants and video viewers who didn't enroll",
          "Per-cohort unit-economics model in Sheets: cost per lead -> lead-to-enrollment rate -> cost per enrollment -> ROMI for that intake",
        ],
      },
      projected: {
        intro: "The targets this system is designed to hit - targets, not history:",
        metrics: [
          {
            label: "Cost per lead",
            value: "modeled",
            note: "tracked separately for Meta vs Google",
          },
          {
            label: "Lead -> enrollment",
            value: "modeled",
            note: "the conversion the whole funnel is optimized for",
          },
          {
            label: "Cost per enrollment",
            value: "the real number",
            note: "not cost per lead - the metric that decides scale",
          },
          {
            label: "ROMI per cohort",
            value: "modeled",
            note: "each intake judged on its own return",
          },
        ],
        basis:
          "Basis: EdTech benchmarks + standard funnel-conversion assumptions. These are the economics the system is built to hit, not measured results.",
      },
      impact: {
        intro: "If the model holds - all figures are assumptions, not delivered results:",
        metrics: [
          {
            label: "Predictable enrollment",
            value: "yes",
            note: "cost per enrollment known before scaling",
          },
          {
            label: "Per-cohort payback",
            value: "modeled",
            note: "each intake judged profitable or not",
          },
          {
            label: "Scale on what works",
            value: "spend",
            note: "budget grows only where ROMI clears the bar",
          },
        ],
        note:
          "The business moves from buying cheap leads that may not enroll to a measurable enrollment engine where each cohort's economics are known before spend scales.",
      },
      method: {
        heading: "My Method",
        body: "What this concept demonstrates:",
        items: [
          "I optimize for the paid outcome - enrollments - not cheap top-of-funnel leads",
          "I build measurement first, so the whole path to enrollment is attributable",
          "I judge each cohort on its own unit economics (cost per enrollment -> ROMI), not blended averages",
          "I separate what's proven from what's projected - and label it honestly",
        ],
      },
    },
  },
  {
    slug: "tracking-analytics-foundation",
    type: "real",
    title: "Tracking & Analytics Foundation",
    premise:
      "GA4 + GTM + Meta Pixel configured from scratch on a live business site - full-funnel measurement for WhatsApp clicks, calls and bookings.",
    metaDescription:
      "A real analytics implementation: GA4, Google Tag Manager and Meta Pixel configured from scratch on a live site, tracking WhatsApp clicks, calls and booking intent for full-funnel attribution.",
    sections: {
      context: {
        heading: "The Context",
        body: "A live business site running ads without any real measurement underneath - the classic problem: spend going out, no visibility into what comes back. The goal of this engagement was the foundation layer: build a complete, reliable tracking system so that every meaningful user action is captured and every future campaign is attributable. This is a real implementation on a live site, not a mockup - it can be inspected in Tag Assistant and GA4 Events Manager.",
      },
      whatsBroken: {
        heading: "The Hidden Problem: Flying Blind",
        body: "What was missing before the setup:",
        items: [
          "No clear data on where bookings originate",
          "No tracking of key actions - WhatsApp clicks, bookings, calls",
          "Ads running without attribution or measurement",
          "No visibility into the customer journey",
          "Business decisions based on assumptions rather than data",
        ],
      },
      funnel: {
        intro:
          "Before touching ad spend, I mapped the complete customer path from first touch to conversion - so the tracking would capture the whole journey, not just the click.",
        stages: [
          {
            n: 1,
            name: "Landing Page",
            body: "First touchpoint - where the visitor arrives and the session begins.",
          },
          {
            n: 2,
            name: "Interaction",
            body: "Engagement signals - scroll, time, movement toward intent.",
          },
          {
            n: 3,
            name: "Intent",
            body: "Lead-generation actions - WhatsApp clicks, call clicks, booking-button clicks.",
          },
          {
            n: 4,
            name: "Conversion",
            body: "The booking action itself - the real business outcome, now measurable.",
          },
        ],
        philosophy: "Core principle: fix measurement before scaling spend. You can't optimize what you can't see.",
      },
      execution: {
        heading: "Technical Execution",
        body: "The full stack, configured from scratch on the live site:",
        items: [
          "GA4 configuration - property setup with enhanced measurement; key events (page_view, scroll, session_start) configured for a reliable baseline",
          "Google Tag Manager - triggers for WhatsApp clicks, call clicks and CTA buttons, with a structured naming convention (wa_click, call_click, booking_click) to keep data consistent",
          "Conversion tracking - GTM custom events for the real business actions: WhatsApp clicks, phone calls, booking-button interactions",
          "Meta Pixel integration - Pixel installed correctly with ViewContent and Lead events tied to WhatsApp interactions and booking-intent signals",
        ],
      },
      projected: {
        intro: "What the setup makes possible - this is a real, live implementation, not a mockup:",
        metrics: [
          {
            label: "Full action visibility",
            value: "live",
            note: "WhatsApp clicks, calls, bookings captured - not guessed",
          },
          {
            label: "Attribution-ready",
            value: "yes",
            note: "leads traceable to source channel the moment paid traffic runs",
          },
          {
            label: "Optimization-ready",
            value: "yes",
            note: "clean data foundation for any future campaign",
          },
          {
            label: "Verifiable",
            value: "live",
            note: "inspectable in Tag Assistant + GA4 Events Manager",
          },
        ],
        basis:
          "Scope note: this engagement covered the tracking foundation. Paid campaigns weren't run to completion - so this case shows measurement infrastructure, not ad performance.",
      },
      impact: {
        intro: "The takeaway principles this project reflects:",
        metrics: [
          {
            label: "Foundation before scale",
            value: "",
            note: "fix tracking before investing heavily in paid",
          },
          {
            label: "Real actions matter",
            value: "",
            note: "track calls and WhatsApp interactions, not just clicks",
          },
          {
            label: "Consistent naming",
            value: "",
            note: "structured event conventions keep data integrity",
          },
        ],
        note:
          "The site moved from flying blind to a clean, attributable measurement foundation - ready for spend to scale with confidence in the data.",
      },
      method: {
        heading: "What This Demonstrates",
        body: "The capability this proves:",
        items: [
          "I configure GA4, GTM and Meta Pixel from scratch on live sites",
          "I track real business actions (WhatsApp, calls, bookings), not vanity clicks",
          "I build measurement before spend - the analyst's discipline",
          "The work is verifiable live, not just described on a slide",
        ],
      },
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
