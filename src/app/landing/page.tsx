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

const pricingRows = [
  { component: "Management fee", amount: "1,500 AED/month", paidTo: "Agency" },
  { component: "Ad spend (recommended)", amount: "3,000-5,000 AED/month", paidTo: "Google/Meta directly" },
  { component: "Total monthly investment", amount: "4,500-6,500 AED", paidTo: "-" },
];

const problemPoints = ["No tracking", "No structure", "No clear path to conversion"];

const resultsRows = [
  { metric: "Leads per month", before: "8-12", after: "22-30" },
  { metric: "Cost per lead", before: "150+ AED", after: "65 AED" },
  { metric: "Conversion rate", before: "6%", after: "17%" },
  { metric: "CPC", before: "25-40 AED", after: "18 AED" },
];

const industries = [
  "Real estate (15k-50k per deal)",
  "Maintenance / Cleaning (500-5k per job)",
  "Clinics / Dental (500-2k per patient)",
  "Legal services (5k-50k per case)",
  "E-commerce (100-1k per order)",
  "Accounting (2k-3k per client)",
  "Salons / Spas (200-1k per booking)",
  "Tutoring / Training (1k-10k per course)",
];

const includedRows = [
  "Meta Ads OR Google Ads - Full campaign management",
  "GA4 + GTM tracking setup - Complete analytics infrastructure",
  "WhatsApp & calls tracking - Full attribution",
  "Landing page optimization - Conversion-focused",
  "Negative keywords + restructuring - Stop wasting spend",
  "Monthly performance report - Transparent data",
];

const funnelRows = [
  {
    step: "Step 1",
    channel: "Google Search Ads",
    purpose: "Capture high-intent demand from people searching now",
  },
  {
    step: "Step 2",
    channel: "Meta Retargeting",
    purpose: "Build trust + education and convert the hesitant",
  },
  {
    step: "Step 3",
    channel: "WhatsApp",
    purpose: "Instant response to convert before competitors react",
  },
];

const roiRows = [
  {
    adSpend: "3,000 AED",
    fee: "1,500 AED",
    total: "4,500 AED",
    leads: "15-25",
    cpl: "180-300 AED",
  },
  {
    adSpend: "5,000 AED",
    fee: "1,500 AED",
    total: "6,500 AED",
    leads: "25-40",
    cpl: "160-260 AED",
  },
  {
    adSpend: "8,000 AED",
    fee: "1,500 AED",
    total: "9,500 AED",
    leads: "40-60",
    cpl: "160-240 AED",
  },
];

const fixesRows = [
  { problem: "No tracking", fix: "GA4 + GTM setup to know exactly what works" },
  { problem: "Wasted spend", fix: "Negative keywords + restructuring" },
  { problem: "High CPC", fix: "Quality score optimization" },
  { problem: "Low conversion", fix: "Landing page + WhatsApp flow" },
  { problem: "No attribution", fix: "Track WhatsApp clicks + calls" },
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
  {
    q: "What if I don't get leads?",
    a: "We audit, adjust, or refund unused ad spend (terms apply).",
  },
  {
    q: "How fast will I see results?",
    a: "Tracking setup in 3-5 days. First leads typically within 2 weeks.",
  },
  { q: "Do you write ad copy and creatives?", a: "Yes. We handle everything." },
];

const authorityPoints = [
  "Meta & Google Certified",
  "Data-Driven Approach",
  "Focus on Real Leads, Not Vanity Metrics",
  "UAE-Focused",
];

export default function LandingPage() {
  return (
    <main data-landing="true" className="relative min-h-screen bg-[#f4f3ef] text-[#1a1a1a]">
      <LandingAttribution variant="a" />

      <div className="absolute left-4 top-4 z-20 sm:left-8 sm:top-6 lg:left-12 lg:top-8">
        <Image
          src="/hero/lb-editorial-logo.svg"
          alt="LenaBara logo"
          width={170}
          height={64}
          priority
          className="h-auto w-[124px] sm:w-[150px]"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(0,0,0,0.06),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(0,0,0,0.05),transparent_26%),linear-gradient(180deg,#f7f6f2_0%,#f2f1ed_52%,#ecebe6_100%)]"
      />

      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mb-10 flex items-center justify-end border-b border-black/20 pb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:mb-14 sm:text-xs">
          <p>UAE Service Growth</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/60 sm:text-xs">
              Meta + Google Performance
            </p>
            <h1
              className={`${displayFont.className} mb-5 text-[3.2rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[4.5rem] lg:text-[5.7rem]`}
            >
              Get Real Leads From Meta &amp; Google Ads
            </h1>
            <p className={`${editorialSerif.className} max-w-xl text-xl leading-tight text-black/80 sm:text-2xl`}>
              Management fee: 1,500 AED / month
            </p>
            <p className={`${editorialSerif.className} mt-1 max-w-xl text-lg leading-tight text-black/70 sm:text-xl`}>
              Ad spend paid separately to Google/Meta (minimum 3,000-5,000 AED recommended)
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:mt-10">
              <WhatsAppCtaButton
                variant="a"
                placement="hero"
                phone={WHATSAPP_PHONE}
                baseMessage={WHATSAPP_MESSAGE}
                className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
              >
                CHAT ON WHATSAPP - FREE AUDIT IN 1 HOUR
              </WhatsAppCtaButton>
              <p className="text-xs uppercase tracking-[0.12em] text-black/65">
                Reply within 1 hour | No obligation
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[23rem] overflow-hidden border border-black/15 bg-[#dfddd5] sm:h-[28rem] lg:h-full lg:min-h-[34rem]">
              <Image
                src="/hero/my-photo2.jpg"
                alt="Lena Bara"
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/25 bg-black/30 px-4 py-4 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
                Editorial Performance Strategy
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[10px] border border-black/20 bg-white/70">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-black/15 bg-black/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Cost Component</p>
            <p>Amount</p>
            <p>Paid To</p>
          </div>
          {pricingRows.map((row) => (
            <div
              key={row.component}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p className="font-semibold">{row.component}</p>
              <p>{row.amount}</p>
              <p>{row.paidTo}</p>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-4 text-lg leading-tight text-black/75 sm:text-xl`}>
          You control the ad budget. We just manage it for you. Cancel anytime.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 border-t border-black/20 pt-9 sm:pt-11 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            Why campaigns underperform
          </p>
          <div>
            <h2 className={`${displayFont.className} mb-3 text-[2.1rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
              Most ads don&apos;t fail because of ads.
            </h2>
            <p className={`${editorialSerif.className} max-w-2xl text-xl leading-tight text-black/75`}>
              They fail because there is no system behind them:
            </p>
            <ul className="mt-5 space-y-2">
              {problemPoints.map((item) => (
                <li key={item} className="text-base font-semibold uppercase tracking-[0.08em] text-black/80">
                  {item}
                </li>
              ))}
            </ul>
            <p className={`${displayFont.className} mt-6 text-[1.8rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.2rem]`}>
              We fix that. For a flat 1,500 AED/month management fee.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-4 text-[1.9rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          Real Results - UAE Accounting Client
        </p>
        <div className="overflow-x-auto rounded-[10px] border border-black/20 bg-white/70">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-black/15 bg-black/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Metric</p>
            <p>Before</p>
            <p>After</p>
          </div>
          {resultsRows.map((row) => (
            <div
              key={row.metric}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p className="font-semibold">{row.metric}</p>
              <p>{row.before}</p>
              <p className="font-semibold">{row.after}</p>
            </div>
          ))}
        </div>
        <p className={`${displayFont.className} mt-6 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.6rem]`}>
          160% more leads. 57% lower cost per lead.
        </p>
        <p className={`${editorialSerif.className} mt-3 text-lg text-black/75 sm:text-xl`}>
          Ad spend during case study: 3,500-5,000 AED/month | Timeline: 60-90 days
        </p>
        <p className={`${editorialSerif.className} mt-3 max-w-3xl text-xl leading-tight text-black/80 sm:text-2xl`}>
          "Avoid VAT fines" messaging outperformed generic ads by 3.5x.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          Who This 1,500 AED Offer Is For
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <article
              key={item}
              className="rounded-[10px] border border-black/15 bg-white/70 p-4 text-sm font-semibold uppercase tracking-[0.05em] text-black/80 sm:text-base"
            >
              {item}
            </article>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-5 text-lg leading-tight text-black/75 sm:text-xl`}>
          Not sure if your industry fits? WhatsApp us "INDUSTRY" and we&apos;ll tell you in 5
          minutes.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          What You Get For 1,500 AED / Month
        </p>
        <article className="rounded-[10px] border border-black/15 bg-white/70 p-6 sm:p-8">
          <ul className="space-y-3">
            {includedRows.map((row) => (
              <li key={row} className="flex items-start gap-3 border-b border-black/10 pb-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                  ✓
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.05em] text-black/80 sm:text-base">
                  {row}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/65">
            No setup fee | Cancel anytime | No lock-in contract
          </p>
        </article>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[10px] border border-black/20 bg-white/70">
          <div className="border-b border-black/15 bg-black/5 px-4 py-3 sm:px-6">
            <p className={`${displayFont.className} text-[1.5rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2rem]`}>
              Our 3-Step Funnel (Works For Any Service Business)
            </p>
          </div>
          <div className="grid grid-cols-[0.95fr_1.2fr_1.8fr] border-b border-black/15 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Step</p>
            <p>Channel</p>
            <p>Purpose</p>
          </div>
          {funnelRows.map((row) => (
            <div
              key={row.step}
              className="grid grid-cols-[0.95fr_1.2fr_1.8fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p className="font-semibold">{row.step}</p>
              <p className="font-semibold">{row.channel}</p>
              <p>{row.purpose}</p>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-4 text-xl leading-tight text-black/75 sm:text-2xl`}>
          WhatsApp converts 3x better than web forms in UAE.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          What Results To Expect (After Optimization)
        </p>
        <div className="overflow-x-auto rounded-[10px] border border-black/20 bg-white/70">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-black/15 bg-black/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Monthly Ad Spend</p>
            <p>+ Management Fee</p>
            <p>Total</p>
            <p>Expected Leads</p>
            <p>Est. CPL</p>
          </div>
          {roiRows.map((row) => (
            <div
              key={row.total}
              className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p>{row.adSpend}</p>
              <p>{row.fee}</p>
              <p className="font-semibold">{row.total}</p>
              <p>{row.leads}</p>
              <p>{row.cpl}</p>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-4 text-lg leading-tight text-black/75 sm:text-xl`}>
          After optimization, CPL typically drops 30-50% within 60 days.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          What We Fix
        </p>
        <div className="overflow-hidden rounded-[10px] border border-black/20 bg-white/70">
          <div className="border-b border-black/15 bg-black/5 px-4 py-3 sm:px-6">
            <div className="grid grid-cols-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:text-xs">
              <p>Problem</p>
              <p>Our Fix</p>
            </div>
          </div>
          {fixesRows.map((row) => (
            <div
              key={row.problem}
              className="grid grid-cols-2 border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
            >
              <p className="font-semibold">{row.problem}</p>
              <p>{row.fix}</p>
            </div>
          ))}
        </div>
        <p className={`${editorialSerif.className} mt-4 text-xl leading-tight text-black/75 sm:text-2xl`}>
          From chaotic campaigns to a structured, data-driven system.
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 border border-black/20 bg-white/65 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
              Availability
            </p>
            <p className={`${displayFont.className} text-[2.5rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.4rem]`}>
              Currently accepting 2 new clients at 1,500 AED
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-black/70">
              Once filled, price returns to 2,500 AED
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-black/60">
              Why only 2? We do hands-on work. Not a factory. Results &gt; volume.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <p className={`${displayFont.className} mb-3 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              Ready For Predictable Leads?
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-black/70 sm:text-base">
              1,500 AED / month management fee + ad spend (you control the budget)
            </p>
            <WhatsAppCtaButton
              variant="a"
              placement="final"
              phone={WHATSAPP_PHONE}
              baseMessage={WHATSAPP_MESSAGE}
              className="inline-flex w-full items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black sm:w-auto"
            >
              CHAT ON WHATSAPP - FREE 15-MIN AUDIT
            </WhatsAppCtaButton>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-black/65">
              Reply within 1 hour | Just say "LEADS"
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <p className={`${displayFont.className} mb-5 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.7rem]`}>
          Quick Questions (Answered)
        </p>
        <div className="space-y-3">
          {faqRows.map((row) => (
            <article key={row.q} className="rounded-[10px] border border-black/15 bg-white/70 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-black/80 sm:text-base">
                Q: {row.q}
              </p>
              <p className={`${editorialSerif.className} mt-2 text-lg leading-tight text-black/75`}>
                A: {row.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-4 border-y border-black/20 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {authorityPoints.map((point) => (
            <p
              key={point}
              className="rounded-full border border-black/20 px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-black/70 sm:text-sm"
            >
              {point}
            </p>
          ))}
        </div>
      </section>

      <footer className="relative mx-auto max-w-6xl px-5 pb-28 text-center sm:px-8 lg:px-12 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/60">
          [YOUR_BUSINESS_NAME] | [CURRENT_YEAR] | UAE Lead Generation
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/60">
          [YOUR_WHATSAPP_LINK]
        </p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/15 bg-[#f5f4f0]/95 p-3 backdrop-blur md:hidden">
        <WhatsAppCtaButton
          variant="a"
          placement="sticky"
          phone={WHATSAPP_PHONE}
          baseMessage={WHATSAPP_MESSAGE}
          className="flex w-full items-center justify-center bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          CHAT ON WHATSAPP - FREE 15-MIN AUDIT
        </WhatsAppCtaButton>
      </div>
    </main>
  );
}
