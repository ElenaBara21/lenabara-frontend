import type { Metadata } from "next";
import Image from "next/image";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import LandingAttribution from "./components/LandingAttribution";
import PricingCollapsible from "./components/PricingCollapsible";
import VideoWithEndCta from "./components/VideoWithEndCta";
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

const problemPoints = [
  {
    icon: "01",
    title: "No Tracking",
    desc: "Clicks happen, but you cannot see what turns into calls or WhatsApp messages.",
  },
  {
    icon: "02",
    title: "No Funnel",
    desc: "Traffic lands without a guided path to trust, qualification, and conversion.",
  },
  {
    icon: "03",
    title: "No Structure",
    desc: "Ad sets, creatives, and messaging are disconnected from business goals.",
  },
];

const methodFlow = ["Google Ads", "Meta Ads", "Landing Page", "WhatsApp", "Tracking"];

const caseStudies = [
  {
    industry: "Accounting Firm",
    before: ["8-12 leads/month", "No qualified lead flow"],
    after: ["22-30 qualified leads/month", "65 AED CPL", "17% close rate"],
    why: "High-intent Google campaigns + WhatsApp conversion flow",
  },
  {
    industry: "Business Setup",
    before: ["Referral-dependent growth", "No attribution"],
    after: ["18-25 leads/week", "55 AED CPL", "Predictable weekly pipeline"],
    why: "Meta retargeting + structured landing page funnel",
  },
  {
    industry: "Healthcare Clinic",
    before: ["High click volume, low inquiries", "No clear messaging sequence"],
    after: ["2.1x inquiry growth", "38% lower CPL", "Faster response cycle"],
    why: "Offer clarity + tracking + WhatsApp-first lead capture",
  },
];

const offerRows = ["Ads setup", "Landing page", "WhatsApp funnel", "Tracking (GA4)", "Optimization"];

const pricingIncludes = [
  "1 platform (Meta or Google)",
  "Funnel setup",
  "Tracking",
  "Optimization",
];

const resultsRows = [
  { budget: "3,000 AED", leads: "15-25", cpl: "120-200 AED" },
  { budget: "5,000 AED", leads: "25-40", cpl: "90-170 AED" },
  { budget: "8,000 AED", leads: "40-60", cpl: "80-150 AED" },
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

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mb-10 flex items-center justify-end border-b border-black/20 pb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:text-xs">
          <p>UAE Lead Generation Systems</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
          <div>
            <h1
              className={`${displayFont.className} text-[2.35rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.5rem] lg:text-[4.5rem]`}
            >
              Turn Traffic Into WhatsApp Leads with a High-Converting Landing Page + Meta Ads
            </h1>
            <p className={`${editorialSerif.className} mt-5 max-w-2xl text-lg leading-tight text-black/80 sm:text-[1.55rem]`}>
              I build the landing page, run Meta or Google Ads, and set up tracking - so your ad spend turns into real WhatsApp inquiries, not just clicks.
            </p>
            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-black/60 sm:text-xs">
              Meta &amp; Google Certified | GA4 &amp; Conversion Tracking Specialist
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <WhatsAppCtaButton
                variant="a"
                placement="hero"
                phone={WHATSAPP_PHONE}
                baseMessage={WHATSAPP_MESSAGE}
                className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-transparent hover:text-black"
              >
                👉 Launch My Lead Funnel
              </WhatsAppCtaButton>
              <p className="text-xs uppercase tracking-[0.11em] text-black/55">
                Launch in 5-7 days • Designed for UAE service businesses • No complex websites
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[28rem] overflow-hidden border border-black/15 bg-[#d7d4cb] sm:h-[35rem] lg:h-[42rem]">
              <VideoWithEndCta
                variant="a"
                phone={WHATSAPP_PHONE}
                baseMessage={WHATSAPP_MESSAGE}
                src="/hero/landing-hero-video.mov"
                ctaLabel="👉 Launch My Lead Funnel"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          Why Most Ad Campaigns Fail
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {problemPoints.map((point) => (
            <article key={point.title} className="rounded-[10px] border border-black/15 bg-white/70 p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 text-xs font-semibold">
                {point.icon}
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-black">{point.title}</p>
              <p className={`${editorialSerif.className} mt-2 text-lg leading-tight text-black/70`}>{point.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          How I Turn Ad Spend Into Leads
        </h2>
        <div className="grid gap-3 sm:grid-cols-5">
          {methodFlow.map((step, index) => (
            <div key={step} className="relative">
              {index < methodFlow.length - 1 && (
                <span className="absolute right-[-0.65rem] top-1/2 hidden -translate-y-1/2 text-black/45 sm:inline">&gt;</span>
              )}
              <div className="rounded-[8px] border border-black/15 bg-white/75 px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-black/80">
                {step}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          Real Results
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.industry} className="rounded-[10px] border border-black/15 bg-white/75 p-5">
              <p className={`${displayFont.className} text-[1.45rem] uppercase leading-[0.95] tracking-[0.01em]`}>{study.industry}</p>
              <div className="mt-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-black/50">Before</p>
                <ul className="mt-1 space-y-1.5 text-sm text-black/75">
                  {study.before.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-black/50">After</p>
                <ul className="mt-1 space-y-1.5 text-sm font-semibold text-black/80">
                  {study.after.map((item) => (
                    <li key={item}>+ {item}</li>
                  ))}
                </ul>
              </div>
              <p className={`${editorialSerif.className} mt-4 border-t border-black/10 pt-3 text-lg leading-tight text-black/70`}>
                Why it worked: {study.why}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          What We Build For You
        </h2>
        <div className="rounded-[10px] border border-black/15 bg-white/75 p-6">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offerRows.map((row) => (
              <li key={row} className="border border-black/10 bg-[#f0ede5] px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black/80">
                {row}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          Simple Pricing
        </h2>
        <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black/55">
          Launch Offer — Limited Availability
        </p>
        <div className="rounded-[10px] border border-black/20 bg-white/80 p-6 sm:p-8">
          <p className={`${displayFont.className} text-[2.3rem] uppercase leading-[0.92] tracking-[0.01em] sm:text-[3rem]`}>
            Starting from 1,500 AED/month
          </p>
          <ul className="mt-5 grid gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-black/80 sm:grid-cols-2">
            {pricingIncludes.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-black/60">Ad spend is separate</p>
          <PricingCollapsible />
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          What Results to Expect
        </h2>
        <div className="overflow-x-auto rounded-[10px] border border-black/20 bg-white/75">
          <div className="grid min-w-[460px] grid-cols-3 border-b border-black/15 bg-black/5 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Budget</p>
            <p>Expected Leads</p>
            <p>Cost Per Lead</p>
          </div>
          {resultsRows.map((row) => (
            <div key={row.budget} className="grid min-w-[460px] grid-cols-3 border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base">
              <p>{row.budget}</p>
              <p>{row.leads}</p>
              <p>{row.cpl}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:px-12">
        <h2 className={`${displayFont.className} mb-7 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
          Who You&apos;ll Work With
        </h2>
        <div className="grid gap-6 rounded-[10px] border border-black/15 bg-white/75 p-6 lg:grid-cols-[1.15fr_0.85fr]">
          <p className={`${editorialSerif.className} text-xl leading-tight text-black/75 sm:text-2xl`}>
            I&apos;m a performance strategist focused on UAE service businesses. I build lean ad systems that connect paid traffic, landing pages, WhatsApp conversion, and GA4 tracking into one measurable pipeline you can scale.
          </p>
          <div className="flex min-h-[15rem] items-center justify-center rounded-[8px] border border-dashed border-black/30 bg-[#ece9e0]">
            <p className="px-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-black/55">Profile image placeholder</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-24 sm:px-8 lg:px-12">
        <div className="rounded-[10px] border border-black/20 bg-[#151515] p-6 text-white sm:p-8">
          <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
            Ready to Get More Leads?
          </h2>
          <p className={`${editorialSerif.className} mt-2 text-lg leading-tight text-white/80 sm:text-xl`}>
            Message now and get a free audit with actionable fixes.
          </p>
          <WhatsAppCtaButton
            variant="a"
            placement="final"
            phone={WHATSAPP_PHONE}
            baseMessage={WHATSAPP_MESSAGE}
            className="mt-6 inline-flex items-center justify-center border border-white bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-black transition hover:bg-transparent hover:text-white"
          >
            Message on WhatsApp
          </WhatsAppCtaButton>
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
          Message on WhatsApp
        </WhatsAppCtaButton>
      </div>
    </main>
  );
}
