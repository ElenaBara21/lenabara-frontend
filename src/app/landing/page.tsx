import type { Metadata } from "next";
import Image from "next/image";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import LandingAttribution from "./components/LandingAttribution";
import WhatsAppCtaButton from "./components/WhatsAppCtaButton";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Landing | Meta & Google Ads Lead Generation",
  description:
    "High-converting UAE lead generation landing page for Meta and Google Ads management.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_PHONE = "971563256848";
const WHATSAPP_MESSAGE =
  "Hello, I'm interested in the 1,500 AED lead generation offer. Please send my free audit.";

const proofCards = [
  {
    id: "leads",
    icon: "📊",
    title: "More Leads, Lower Cost",
    metric: "+160% leads · −57% CPL",
    explanation: "UAE accounting firm · 60–90 day timeline · Meta + Google Ads",
  },
  {
    id: "scale",
    icon: "📈",
    title: "3× Lead Volume",
    metric: "3× weekly leads · −50% cost per lead",
    explanation: "UAE business setup firm · Referrals to predictable ad funnel",
  },
  {
    id: "tracking",
    icon: "💬",
    title: "Full Attribution Setup",
    metric: "100% lead source visibility",
    explanation: "GA4 + GTM + WhatsApp tracking · Know exactly what works",
  },
];

const caseStudies = [
  {
    id: "accounting",
    label: "Accounting Firm",
    tagline: "From inconsistent leads to predictable growth",
    before: ["8–12 leads/month", "~150 AED cost per lead", "No structured funnel"],
    after: ["22–30 qualified leads/month", "65 AED cost per lead", "17% conversion rate"],
    changed: [
      "Google Ads → high-intent traffic",
      "Meta Ads → retargeting & trust",
      "WhatsApp → instant conversion",
    ],
    result: "+160% more leads · −57% lower cost per lead",
    timeline: "60–90 days · Ad spend: 3,500–5,000 AED/month",
  },
  {
    id: "bizsetup",
    label: "UAE Business Setup Firm",
    tagline: "From referral-based growth to predictable weekly leads",
    before: ["5–7 leads/week (inconsistent)", "~120 AED cost per lead", "No tracking or funnel"],
    after: ["18–25 qualified leads/week", "55 AED cost per lead", "19% conversion rate"],
    changed: [
      "Google Ads → high-intent search traffic",
      "Meta Ads → retargeting + trust building",
      "WhatsApp funnel → instant qualification",
    ],
    result: "3× increase in lead volume · 50%+ reduction in cost per lead",
    timeline: "60–90 days",
  },
];

const analyticsCase = {
  problem: [
    "No visibility into where leads came from",
    "WhatsApp, calls, and bookings not tracked",
    "Ads running without attribution",
  ],
  fixed: [
    "Full GA4 + GTM setup",
    "WhatsApp, call, and CTA tracking",
    "End-to-end user journey mapping",
  ],
  result: [
    "100% visibility into lead sources",
    "Identify which campaigns actually generate revenue",
    "Data foundation to scale ads with confidence",
  ],
};

const adFailReasons = [
  {
    icon: "❌",
    title: "No Tracking",
    desc: "You can't cut waste if you don't know which ads generate leads",
  },
  {
    icon: "❌",
    title: "No Structure",
    desc: "Campaigns without a funnel just burn budget",
  },
  {
    icon: "❌",
    title: "No Conversion Path",
    desc: "Traffic lands, bounces, and never comes back",
  },
];

const funnelSteps = [
  {
    step: "01",
    icon: "🔍",
    channel: "Google Ads",
    purpose: "Capture high-intent demand — people searching for your service right now",
  },
  {
    step: "02",
    icon: "📢",
    channel: "Meta Retargeting",
    purpose: "Build trust and educate — convert the hesitant majority who saw you but didn't call",
  },
  {
    step: "03",
    icon: "💬",
    channel: "WhatsApp",
    purpose: "Instant response converts 3× better than web forms in UAE",
  },
];

const serviceCards = [
  { icon: "📣", title: "Ads Setup", desc: "Meta or Google — full campaign management" },
  { icon: "📊", title: "Tracking", desc: "GA4 + WhatsApp — complete attribution" },
  { icon: "🔄", title: "Funnel Optimization", desc: "Landing page + conversion flow" },
  { icon: "📋", title: "Monthly Reporting", desc: "Transparent data, no fluff" },
];

const roiRows = [
  { adSpend: "3,000 AED", fee: "1,500 AED", total: "4,500 AED", leads: "15–25", cpl: "180–300 AED" },
  { adSpend: "5,000 AED", fee: "1,500 AED", total: "6,500 AED", leads: "25–40", cpl: "160–260 AED" },
  { adSpend: "8,000 AED", fee: "1,500 AED", total: "9,500 AED", leads: "40–60", cpl: "160–240 AED" },
];

const industries = [
  "Real estate (15k–50k per deal)",
  "Maintenance / Cleaning (500–5k per job)",
  "Clinics / Dental (500–2k per patient)",
  "Legal services (5k–50k per case)",
  "E-commerce (100–1k per order)",
  "Accounting (2k–3k per client)",
  "Salons / Spas (200–1k per booking)",
  "Tutoring / Training (1k–10k per course)",
];

const faqRows = [
  {
    q: "Does 1,500 AED include ad spend?",
    a: "No. Ad spend is separate and paid directly to Google/Meta. You control the budget.",
  },
  {
    q: "What's the minimum total budget?",
    a: "4,500 AED/month (1,500 fee + 3,000 ads). Below that, results are hard to guarantee.",
  },
  { q: "Can I try 1 month only?", a: "Yes. Cancel anytime. No lock-in." },
  { q: "Do I need a website?", a: "It helps, but we can use a landing page." },
  { q: "What if I don't get leads?", a: "We audit, adjust, or refund unused ad spend (terms apply)." },
  { q: "How fast will I see results?", a: "Tracking setup in 3–5 days. First leads typically within 2 weeks." },
  { q: "Do you write ad copy and creatives?", a: "Yes. We handle everything." },
];

const authorityPoints = [
  "Meta & Google Certified",
  "Data-Driven Approach",
  "Real Leads, Not Vanity Metrics",
  "UAE-Focused",
];

export default function LandingPage() {
  return (
    <main data-landing="true" className="relative min-h-screen bg-[#f4f3ef] text-[#1a1a1a]">
      <LandingAttribution variant="a" />

      {/* Logo */}
      <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-6 lg:left-12 lg:top-8">
        <Image
          src="/hero/lb-editorial-logo.svg"
          alt="LenaBara logo"
          width={170}
          height={64}
          priority
          className="h-auto w-[110px] sm:w-[150px]"
        />
      </div>

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(0,0,0,0.06),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(0,0,0,0.05),transparent_26%),linear-gradient(180deg,#f7f6f2_0%,#f2f1ed_52%,#ecebe6_100%)]"
      />

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mb-8 flex items-center justify-end border-b border-black/20 pb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:mb-12 sm:text-xs">
          <p>UAE Service Growth</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/60 sm:text-xs">
              Meta + Google Performance
            </p>
            <h1
              className={`${displayFont.className} mb-5 text-[2.8rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[4rem] lg:text-[5.2rem]`}
            >
              Stop Wasting Ad Budget — Get Real Leads from Meta &amp; Google Ads
            </h1>
            <p className={`${editorialSerif.className} mt-5 max-w-xl text-xl leading-tight text-black/80 sm:text-2xl`}>
              Starting from <strong>1,500 AED / month</strong> + ad spend
            </p>
            <p className={`${editorialSerif.className} mt-1 max-w-xl text-base leading-tight text-black/65 sm:text-lg`}>
              Ad spend paid directly to Google/Meta — you control the budget. Cancel anytime.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <WhatsAppCtaButton
                variant="a"
                placement="hero"
                phone={WHATSAPP_PHONE}
                baseMessage={WHATSAPP_MESSAGE}
                className="inline-flex items-center justify-center border border-black bg-black px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
              >
                GET FREE AUDIT ON WHATSAPP
              </WhatsAppCtaButton>
              <p className="text-xs uppercase tracking-[0.12em] text-black/60">
                Reply within 1 hour · No obligation · No lock-in
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[20rem] overflow-hidden border border-black/15 bg-[#dfddd5] sm:h-[26rem] lg:h-full lg:min-h-[32rem]">
              <Image
                src="/hero/my-photo2.jpg"
                alt="Lena Bara"
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/25 bg-black/30 px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
                Editorial Performance Strategy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STACK ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 pt-4 sm:px-8 lg:px-12">
        <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-xs">
          Verified results · UAE clients
        </p>
        <p className={`${displayFont.className} mb-7 text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
          Proof It Works
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {proofCards.map((card) => (
            <article key={card.id} className="flex flex-col rounded-[10px] border border-black/15 bg-white/75 p-6">
              <div className="mb-4 flex h-24 items-center justify-center rounded-[6px] border border-black/10 bg-[#eceae4] text-4xl">
                {card.icon}
              </div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-black/50">
                {card.title}
              </p>
              <p className={`${displayFont.className} mt-1 text-[1.7rem] uppercase leading-[0.95] tracking-[0.01em]`}>
                {card.metric}
              </p>
              <p className={`${editorialSerif.className} mt-2 text-base leading-tight text-black/65`}>
                {card.explanation}
              </p>
            </article>
          ))}
        </div>
        {/* CTA after proof */}
        <div className="mt-9 flex flex-col items-start gap-3 border-t border-black/15 pt-7">
          <WhatsAppCtaButton
            variant="a"
            placement="proof"
            phone={WHATSAPP_PHONE}
            baseMessage={WHATSAPP_MESSAGE}
            className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
          >
            GET FREE AUDIT ON WHATSAPP
          </WhatsAppCtaButton>
          <p className="text-xs uppercase tracking-[0.12em] text-black/55">
            Spots limited · Currently accepting 2 new clients
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-7 text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
          Client Results
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="rounded-[10px] border border-black/15 bg-white/75 p-6 sm:p-7">
              <p className="mb-1 text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-black/45">
                Case Study
              </p>
              <p className={`${displayFont.className} text-[1.7rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2rem]`}>
                {cs.label}
              </p>
              <p className={`${editorialSerif.className} mb-5 mt-1 text-base italic leading-tight text-black/60`}>
                {cs.tagline}
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">
                    Before
                  </p>
                  <ul className="space-y-1.5">
                    {cs.before.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-black/70">
                        <span className="mt-0.5 shrink-0 text-xs text-red-500">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">
                    After (60–90 days)
                  </p>
                  <ul className="space-y-1.5">
                    {cs.after.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-black/70">
                        <span className="mt-0.5 shrink-0 text-xs text-green-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 border-t border-black/10 pt-4">
                <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">
                  ⚙ What Changed
                </p>
                <ul className="space-y-1">
                  {cs.changed.map((item) => (
                    <li key={item} className="text-sm text-black/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 rounded-[6px] bg-black px-4 py-3">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-white/55">
                  📈 Result
                </p>
                <p className={`${displayFont.className} mt-1 text-[1.3rem] uppercase leading-[0.95] tracking-[0.01em] text-white sm:text-[1.5rem]`}>
                  {cs.result}
                </p>
                <p className="mt-1 text-[0.58rem] uppercase tracking-[0.11em] text-white/45">
                  {cs.timeline}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Analytics case */}
        <article className="mt-6 rounded-[10px] border border-black/15 bg-white/75 p-6 sm:p-7">
          <p className="mb-1 text-[0.63rem] font-semibold uppercase tracking-[0.16em] text-black/45">
            Case Study
          </p>
          <p className={`${displayFont.className} text-[1.7rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2rem]`}>
            Tracking &amp; Analytics Setup
          </p>
          <p className={`${editorialSerif.className} mb-5 mt-1 text-base italic leading-tight text-black/60`}>
            GA4 + GTM + WhatsApp — full attribution from day one
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">Problem</p>
              <ul className="space-y-1.5">
                {analyticsCase.problem.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-black/70">
                    <span className="mt-0.5 shrink-0 text-xs text-red-500">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">What We Fixed</p>
              <ul className="space-y-1.5">
                {analyticsCase.fixed.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-black/70">
                    <span className="mt-0.5 shrink-0 text-xs text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-[0.63rem] font-semibold uppercase tracking-[0.13em] text-black/45">Result</p>
              <ul className="space-y-1.5">
                {analyticsCase.result.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-black/70">
                    <span className="mt-0.5 shrink-0 text-xs">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* CTA after results */}
        <div className="mt-9 flex flex-col items-start gap-3 border-t border-black/15 pt-7">
          <WhatsAppCtaButton
            variant="a"
            placement="results"
            phone={WHATSAPP_PHONE}
            baseMessage={WHATSAPP_MESSAGE}
            className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
          >
            GET RESULTS LIKE THESE — FREE AUDIT
          </WhatsAppCtaButton>
          <p className="text-xs uppercase tracking-[0.12em] text-black/55">
            Reply within 1 hour · No obligation
          </p>
        </div>
      </section>

      {/* ── WHY ADS FAIL ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-t border-black/20 pt-9 sm:pt-11 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          <div>
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
              Why campaigns underperform
            </p>
            <h2 className={`${displayFont.className} text-[2.1rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
              Most ads don&apos;t fail because of ads.
            </h2>
            <p className={`${editorialSerif.className} mt-3 text-xl leading-tight text-black/70`}>
              They fail because there is no system behind them.
            </p>
            <p className={`${displayFont.className} mt-5 text-[1.6rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2rem]`}>
              We fix all of this. Flat 1,500 AED/month.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {adFailReasons.map((reason) => (
              <div key={reason.title} className="rounded-[10px] border border-red-200 bg-red-50/70 p-5">
                <p className="mb-2 text-2xl">{reason.icon}</p>
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-red-700">
                  {reason.title}
                </p>
                <p className={`${editorialSerif.className} mt-2 text-base leading-tight text-black/65`}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-STEP FUNNEL ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-7 text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
          Our 3-Step Funnel
        </p>
        <div className="relative grid gap-4 sm:grid-cols-3">
          {funnelSteps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < funnelSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-9 hidden translate-x-1/2 text-xl text-black/25 sm:block"
                >
                  →
                </div>
              )}
              <article className="rounded-[10px] border border-black/15 bg-white/75 p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-black">
                  {step.channel}
                </p>
                <p className={`${editorialSerif.className} mt-2 text-base leading-tight text-black/65`}>
                  {step.purpose}
                </p>
              </article>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-5 text-xl leading-tight text-black/70 sm:text-2xl`}>
          WhatsApp converts 3× better than web forms in UAE.
        </p>
      </section>

      {/* ── PRICING + OFFER ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
        <div className="rounded-[10px] border border-black/20 bg-white/75 p-7 sm:p-9">
          <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-xs">
            Pricing
          </p>
          <p className={`${displayFont.className} text-[2.5rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.5rem]`}>
            Starting from 1,500 AED / month
          </p>
          <p className={`${editorialSerif.className} mt-2 text-lg leading-tight text-black/65 sm:text-xl`}>
            + ad spend paid directly to Google/Meta (recommended: 3,000–5,000 AED/month)
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-black/50">
            No setup fee · Cancel anytime · No lock-in contract
          </p>
          <p className="mb-4 mt-7 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/55 sm:text-xs">
            You get:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <div key={card.title} className="rounded-[8px] border border-black/10 bg-[#f0efe9] p-4">
                <p className="mb-2 text-2xl">{card.icon}</p>
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-black">
                  {card.title}
                </p>
                <p className={`${editorialSerif.className} mt-1 text-base leading-tight text-black/60`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col items-start gap-3">
            <WhatsAppCtaButton
              variant="a"
              placement="pricing"
              phone={WHATSAPP_PHONE}
              baseMessage={WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
            >
              START FOR 1,500 AED — WHATSAPP US
            </WhatsAppCtaButton>
            <p className="text-xs uppercase tracking-[0.12em] text-black/50">
              2 spots left at this price
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI TABLE ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          What Results To Expect (After Optimization)
        </p>
        <div className="overflow-x-auto rounded-[10px] border border-black/20 bg-white/70">
          <div className="grid min-w-[520px] grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-black/15 bg-black/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Monthly Ad Spend</p>
            <p>+ Management Fee</p>
            <p>Total</p>
            <p>Expected Leads</p>
            <p>Est. CPL</p>
          </div>
          {roiRows.map((row) => (
            <div
              key={row.total}
              className="grid min-w-[520px] grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p>{row.adSpend}</p>
              <p>{row.fee}</p>
              <p className="font-semibold">{row.total}</p>
              <p>{row.leads}</p>
              <p>{row.cpl}</p>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-4 text-lg leading-tight text-black/70 sm:text-xl`}>
          CPL typically drops 30–50% within the first 60 days after optimization.
        </p>
      </section>

      {/* ── WHO IT&apos;S FOR ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          Who This 1,500 AED Offer Is For
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <article
              key={item}
              className="rounded-[10px] border border-black/15 bg-white/70 p-4 text-sm font-semibold uppercase tracking-[0.05em] text-black/75"
            >
              {item}
            </article>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-5 text-lg leading-tight text-black/70 sm:text-xl`}>
          Not sure if your industry fits? WhatsApp us &ldquo;INDUSTRY&rdquo; and we&apos;ll tell you in 5 minutes.
        </p>
      </section>

      {/* ── SCARCITY + BOTTOM CTA ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 border border-black/20 bg-white/65 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/55 sm:text-xs">
              Availability
            </p>
            <p className={`${displayFont.className} text-[2.5rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.4rem]`}>
              Currently accepting 2 new clients at 1,500 AED
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-black/65">
              Once filled, price returns to 2,500 AED
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-black/55">
              Why only 2? We do hands-on work. Not a factory. Results &gt; volume.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <p className={`${displayFont.className} mb-3 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              Ready For Predictable Leads?
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-black/65 sm:text-base">
              1,500 AED / month fee + ad spend (you control the budget)
            </p>
            <WhatsAppCtaButton
              variant="a"
              placement="final"
              phone={WHATSAPP_PHONE}
              baseMessage={WHATSAPP_MESSAGE}
              className="inline-flex w-full items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black sm:w-auto"
            >
              CHAT ON WHATSAPP — FREE 15-MIN AUDIT
            </WhatsAppCtaButton>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
              Reply within 1 hour · Just say &ldquo;LEADS&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          Quick Questions (Answered)
        </p>
        <div className="space-y-3">
          {faqRows.map((row) => (
            <article key={row.q} className="rounded-[10px] border border-black/15 bg-white/70 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-black/75 sm:text-base">
                Q: {row.q}
              </p>
              <p className={`${editorialSerif.className} mt-2 text-lg leading-tight text-black/70`}>
                A: {row.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── AUTHORITY PILLS ── */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-4 border-y border-black/20 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {authorityPoints.map((point) => (
            <p
              key={point}
              className="rounded-full border border-black/20 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-black/65 sm:text-sm"
            >
              {point}
            </p>
          ))}
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/15 bg-[#f5f4f0]/95 p-3 backdrop-blur md:hidden">
        <WhatsAppCtaButton
          variant="a"
          placement="sticky"
          phone={WHATSAPP_PHONE}
          baseMessage={WHATSAPP_MESSAGE}
          className="flex w-full items-center justify-center bg-black px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          GET FREE AUDIT — WHATSAPP NOW
        </WhatsAppCtaButton>
      </div>
    </main>
  );
}
