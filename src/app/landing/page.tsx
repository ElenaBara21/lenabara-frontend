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

const services = [
  "Meta Ads",
  "Google Ads",
  "Tracking Setup",
  "Landing Optimization",
];

const authorityPoints = [
  "Meta & Google Certified",
  "Data-driven approach",
  "Focus on real leads",
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
              Get More Leads from Meta &amp; Google Ads
            </h1>
            <p className={`${editorialSerif.className} max-w-xl text-xl leading-tight text-black/75 sm:text-2xl`}>
              Structured campaigns. Clear tracking. Real enquiries.
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:mt-10">
              <WhatsAppCtaButton
                variant="a"
                placement="hero"
                phone={WHATSAPP_PHONE}
                baseMessage={WHATSAPP_MESSAGE}
                className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black"
              >
                Chat on WhatsApp
              </WhatsAppCtaButton>
              <p className="text-xs uppercase tracking-[0.14em] text-black/65">
                Free audit | Reply within 1 hour
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
        <div className="grid gap-6 border-t border-black/20 pt-9 sm:pt-11 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
            Why campaigns underperform
          </p>
          <div>
            <h2 className={`${displayFont.className} mb-3 text-[2.1rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[3rem]`}>
              Most ads don&apos;t fail because of ads.
            </h2>
            <p className={`${editorialSerif.className} max-w-2xl text-xl leading-tight text-black/75`}>
              They fail because there is no system behind them - no tracking, no structure, no clear
              path to conversion.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {services.map((item) => (
            <article
              key={item}
              className="border border-black/15 bg-white/75 p-6 backdrop-blur-[1px] sm:p-7"
            >
              <p className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55 sm:text-[0.7rem]">
                Service
              </p>
              <h3 className={`${displayFont.className} text-[2rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[2.25rem]`}>
                {item}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 border-y border-black/20 py-10 sm:grid-cols-3 sm:gap-4">
          {authorityPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />
              <p className="text-base font-semibold uppercase tracking-[0.08em]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 border border-black/20 bg-white/65 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">
              Availability
            </p>
            <p className={`${displayFont.className} text-[2.5rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.4rem]`}>
              Currently accepting 2 new clients this month
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <p className={`${displayFont.className} mb-3 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              Want better leads from your ads?
            </p>
            <WhatsAppCtaButton
              variant="a"
              placement="final"
              phone={WHATSAPP_PHONE}
              baseMessage={WHATSAPP_MESSAGE}
              className="inline-flex w-full items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black sm:w-auto"
            >
              Chat on WhatsApp
            </WhatsAppCtaButton>
          </div>
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
          Chat on WhatsApp
        </WhatsAppCtaButton>
      </div>
    </main>
  );
}
