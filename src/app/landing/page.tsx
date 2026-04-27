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
    "Editorial-style paid traffic landing page focused on WhatsApp leads for UAE service businesses.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_PHONE = "971563256848";
const WHATSAPP_MESSAGE =
  "Hi, I run a [business] in [city]. I spend [amount] AED/month on Meta ads. I want more enquiries. Can you audit my account?";

const problemPoints = [
  "No tracking",
  "No structure",
  "No clear path to conversion",
];

const resultsRows = [
  { metric: "Leads / month", before: "8-12", after: "22-30" },
  { metric: "Cost per lead", before: "150+ AED", after: "65 AED" },
  { metric: "Conversion rate", before: "6%", after: "17%" },
  { metric: "CPC", before: "25-40 AED", after: "18 AED" },
];

const offerAudience = [
  "Accounting & tax consultancy",
  "Legal services",
  "Real estate agencies",
  "Maintenance & cleaning companies",
  "E-commerce brands (UAE)",
];

const includedRows = [
  { service: "Meta Ads OR Google Ads", included: "Full management" },
  { service: "GA4 + GTM tracking setup", included: "Included" },
  { service: "WhatsApp & calls tracking", included: "Included" },
  { service: "Landing page optimization", included: "Included" },
  { service: "Negative keywords + restructuring", included: "Included" },
  { service: "Monthly report", included: "Included" },
];

const funnelRows = [
  { step: "1", channel: "Google Search Ads", purpose: "Capture high-intent demand" },
  { step: "2", channel: "Meta Retargeting", purpose: "Build trust + education" },
  { step: "3", channel: "WhatsApp", purpose: "Convert before competitors react" },
];

const authorityPoints = [
  "META & GOOGLE CERTIFIED",
  "DATA-DRIVEN",
  "REAL LEADS ONLY",
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
            <p className={`${displayFont.className} mb-3 text-[1.8rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              From 1,500 AED / Month
            </p>
            <p className={`${editorialSerif.className} max-w-xl text-xl leading-tight text-black/75 sm:text-2xl`}>
              Structured campaigns. Clear tracking. Real enquiries. No lock-in.
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
              We fix that. For a flat 1,500 AED.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden border border-black/20 bg-white/70">
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
          160% more leads. 57% lower CPL.
        </p>
        <p className={`${editorialSerif.className} mt-3 text-lg text-black/75 sm:text-xl`}>
          Ad spend: 3,500-5,000 AED/month | Timeline: 60-90 days | Channels: Google Search +
          Meta Retargeting
        </p>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="border-y border-black/20 py-10">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            The Insight That Made It Work
          </p>
          <p className={`${editorialSerif.className} mb-4 max-w-4xl text-2xl leading-tight text-black/80 sm:text-3xl`}>
            "Avoid VAT fines" messaging outperformed generic ads by 3.5x.
          </p>
          <p className={`${editorialSerif.className} max-w-3xl text-xl leading-tight text-black/75`}>
            UAE businesses fear penalties more than they want "better service." We lead with risk,
            then offer the solution.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border border-black/15 bg-white/70 p-6 sm:p-8">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
              Who This 1,500 AED Offer Is For
            </p>
            <ul className="space-y-2">
              {offerAudience.map((item) => (
                <li key={item} className="text-base font-semibold uppercase tracking-[0.06em] text-black/80">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-black/15 bg-white/70 p-6 sm:p-8">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
              What You Get For 1,500 AED / Month
            </p>
            <div className="space-y-3">
              {includedRows.map((row) => (
                <div key={row.service} className="flex items-start justify-between gap-4 border-b border-black/10 pb-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-black/80 sm:text-base">
                    {row.service}
                  </p>
                  <p className="shrink-0 text-xs font-bold uppercase tracking-[0.1em] text-black/70 sm:text-sm">
                    {row.included}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/65">
              No setup fee | Cancel anytime
            </p>
          </article>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden border border-black/20 bg-white/70">
          <div className="border-b border-black/15 bg-black/5 px-4 py-3 sm:px-6">
            <p className={`${displayFont.className} text-[1.5rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2rem]`}>
              Our 3-Step Funnel (That Generated 30 Leads/Month)
            </p>
          </div>
          <div className="grid grid-cols-[0.7fr_1.2fr_1.8fr] border-b border-black/15 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] sm:px-6 sm:text-xs">
            <p>Step</p>
            <p>Channel</p>
            <p>Purpose</p>
          </div>
          {funnelRows.map((row) => (
            <div
              key={row.step}
              className="grid grid-cols-[0.7fr_1.2fr_1.8fr] border-b border-black/10 px-4 py-3 text-sm sm:px-6 sm:text-base"
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
          </div>
          <div className="w-full lg:w-auto">
            <p className={`${displayFont.className} mb-3 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              Ready For Similar Results?
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-black/70 sm:text-base">
              1,500 AED. Fixed. Results-driven. No guesswork.
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

      <section className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-4 border-y border-black/20 py-8 sm:grid-cols-3">
          {authorityPoints.map((point) => (
            <p key={point} className="text-center text-xs font-bold uppercase tracking-[0.16em] text-black/70 sm:text-sm">
              {point}
            </p>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/15 bg-[#f5f4f0]/95 p-3 backdrop-blur md:hidden">
        <WhatsAppCtaButton
          variant="a"
          placement="sticky"
          phone={WHATSAPP_PHONE}
          baseMessage={WHATSAPP_MESSAGE}
          className="flex w-full items-center justify-center bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          CHAT ON WHATSAPP - FREE AUDIT
        </WhatsAppCtaButton>
      </div>
    </main>
  );
}
