import type { Metadata } from "next";
import Image from "next/image";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import LandingAttribution from "../components/LandingAttribution";
import WhatsAppCtaButton from "../components/WhatsAppCtaButton";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Landing B | Meta & Google Ads Lead Generation",
  description:
    "Variant B editorial paid traffic landing page focused on WhatsApp leads for UAE service businesses.",
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_PHONE = "971563256848";
const WHATSAPP_MESSAGE = "Hi Lena, I saw your ad and want help with my ads.";

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

export default function LandingVariantBPage() {
  return (
    <main data-landing="true" className="relative min-h-screen bg-[#efeeea] text-[#171717]">
      <LandingAttribution variant="b" />

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(0,0,0,0.08),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(0,0,0,0.05),transparent_24%),linear-gradient(180deg,#f5f4ef_0%,#efeeea_46%,#e8e7e1_100%)]"
      />

      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        <div className="mb-10 border-b border-black/20 pb-4 text-[0.68rem] font-semibold uppercase tracking-[0.19em] sm:mb-14 sm:flex sm:items-center sm:justify-between sm:text-xs">
          <p>Edition B</p>
          <p>Performance Advertising Journal</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-12">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[23rem] overflow-hidden border border-black/15 bg-[#d7d4cb] sm:h-[28rem] lg:h-[36rem]">
              <Image
                src="/hero/my-photo.jpg"
                alt="Lena Bara"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/60 sm:text-xs">
              Paid Traffic System
            </p>
            <h1
              className={`${displayFont.className} mb-5 text-[3.2rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[4.6rem] lg:text-[5.8rem]`}
            >
              Turn Meta &amp; Google Ads into qualified enquiries
            </h1>
            <p className={`${editorialSerif.className} max-w-xl text-xl leading-tight text-black/75 sm:text-2xl`}>
              Campaign structure, transparent tracking, and lead quality first.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10">
              <WhatsAppCtaButton
                variant="b"
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
              className="border border-black/15 bg-white/70 p-6 sm:p-7"
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
            <p className={`${displayFont.className} text-[2.4rem] uppercase leading-[0.9] tracking-[0.01em] sm:text-[3.3rem]`}>
              Free audit available this week only
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <p className={`${displayFont.className} mb-3 text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.4rem]`}>
              Want better leads from your ads?
            </p>
            <WhatsAppCtaButton
              variant="b"
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/15 bg-[#efeeea]/95 p-3 backdrop-blur md:hidden">
        <WhatsAppCtaButton
          variant="b"
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
