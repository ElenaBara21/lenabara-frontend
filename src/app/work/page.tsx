import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cases } from "./data/cases";

export const metadata: Metadata = {
  title: "Work | Case Studies | LenaBara",
  description: "Case studies and strategy concepts in performance marketing and analytics.",
  openGraph: {
    title: "Work | Case Studies | LenaBara",
    description: "Case studies and strategy concepts in performance marketing and analytics.",
    url: "https://lenabara.com/work",
    siteName: "LenaBara",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const realCases = cases.filter((item) => item.type === "real");
const conceptCases = cases.filter((item) => item.type === "concept");

const analyticsScreenshots = [
  {
    title: "GTM Tags list",
    src: "/work/gtm-tags-live.png",
    alt: "Google Tag Manager tags list showing configured tracking tags",
  },
  {
    title: "GTM container overview",
    src: "/work/gtm-overview-live.png",
    alt: "Google Tag Manager container overview on the live site",
  },
];

const automationItems = [
  {
    title: "Tally -> Make -> HubSpot",
    description:
      "Form submissions automatically create contacts in HubSpot CRM with mapped fields, via a Make webhook scenario.",
    screenshots: [
      {
        title: "Make scenario (Tally -> HubSpot)",
        alt: "Placeholder screenshot for the Make scenario connecting Tally form submissions to HubSpot",
      },
      {
        title: "HubSpot contacts",
        alt: "Placeholder screenshot for HubSpot contact records created by the Tally to HubSpot workflow",
      },
    ],
  },
  {
    title: "Marquiz -> Make -> Google Sheets",
    description:
      "Quiz responses auto-logged to a Google Sheets lead database via a Make webhook.",
    screenshots: [
      {
        title: "Marquiz quiz dashboard",
        src: "/work/marquiz-dashboard-live.png",
        alt: "Marquiz dashboard showing the quiz used for lead capture",
      },
      {
        title: "Make scenario (Webhooks -> Sheets)",
        src: "/work/make-marquiz-sheets-live.png",
        alt: "Make scenario connecting Marquiz webhook data to Google Sheets",
      },
    ],
  },
];

const landingPages = [
  {
    href: "/work/demo1",
    label: "InsightFlow SaaS Demo",
    note: "B2B SaaS demo-request landing page for a fictional analytics product.",
  },
  {
    href: "/work/demo2",
    label: "Free Marketing Analytics Audit",
    note: "Lead magnet landing page for a qualified B2B audit offer.",
  },
  {
    href: "/work/demo3",
    label: "Marketing Quote Quiz",
    note: "Quiz funnel landing page with embedded Marquiz workflow.",
  },
];

const dataScienceLinks = [
  {
    href: "https://github.com/ElenaBara21/Portfolio",
    label: "GitHub portfolio",
  },
  {
    href: "https://olympus.mygreatlearning.com/eportfolio?pb_id=11550",
    label: "Great Learning eportfolio",
  },
];

function SectionTitle({ title, intro }: { title: string; intro: string }) {
  return (
    <header>
      <h2 className="text-2xl font-extrabold text-white md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-neutral-300">{intro}</p>
    </header>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-12 text-neutral-100 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">Case Studies</h1>
          <p className="mt-3 max-w-3xl text-base text-neutral-300 md:text-lg">
            Detailed case studies and strategy concepts in performance marketing and analytics.
          </p>
        </section>

        <section className="mt-12" aria-labelledby="real-cases-heading">
          <h2 id="real-cases-heading" className="text-2xl font-extrabold text-white md:text-3xl">
            Real Cases
          </h2>
          {realCases.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400">
              No real cases published yet.
            </p>
          ) : (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {realCases.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-neutral-300">{item.premise}</p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    Open case study
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-12 pb-4" aria-labelledby="concept-cases-heading">
          <h2 id="concept-cases-heading" className="text-2xl font-extrabold text-white md:text-3xl">
            Strategy Concepts
          </h2>
          {conceptCases.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-400">
              No concept cases published yet.
            </p>
          ) : (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {conceptCases.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <span className="rounded-full border border-neutral-600 bg-neutral-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-neutral-300">
                      Strategy Concept
                    </span>
                  </div>
                  <p className="mt-2 text-neutral-300">{item.premise}</p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    Open case study
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="mt-12" aria-labelledby="analytics-tracking-heading">
          <SectionTitle
            title="Analytics & Tracking"
            intro="End-to-end tracking built from scratch on this live site (lenabara.com)."
          />
          <p className="mt-4 max-w-4xl text-neutral-300">
            Google Tag Manager configured from scratch - 14 tags across GA4, Meta Pixel, Google Ads and Microsoft Clarity. All key conversions tracked through GTM without editing site code: form submissions, WhatsApp clicks, phone calls, scroll depth. This makes it possible to see traffic sources, calculate cost per action (CPL/CPA) by channel, and build retargeting audiences.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-neutral-400">
            GTM · GA4 · Meta Pixel · Google Ads · Microsoft Clarity · Next.js
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {analyticsScreenshots.map((shot) => (
              <article key={shot.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                <h3 className="text-lg font-semibold text-white">{shot.title}</h3>
                <div className="mt-3 overflow-hidden rounded-xl border border-neutral-800">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="marketing-automation-heading">
          <SectionTitle
            title="Marketing Automation"
            intro="Demo builds - form/quiz -> automation -> CRM/database. Built to demonstrate the workflow end to end."
          />
          <div className="mt-6 grid gap-4">
            {automationItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 md:p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-neutral-300">{item.description}</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {item.screenshots.map((shot) => (
                    <div key={shot.title} className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-4">
                      <p className="text-sm font-medium text-white">{shot.title}</p>
                      <div className="mt-3 overflow-hidden rounded-xl border border-neutral-800">
                        <Image
                          src={shot.src ?? "/work/todo-screenshot-placeholder.svg"}
                          alt={shot.alt}
                          width={1600}
                          height={900}
                          loading="lazy"
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="data-science-heading">
          <SectionTitle
            title="Data Science"
            intro="Seven data-science projects from the Post Graduate Program in Data Science & Business Analytics (UT Austin / Great Learning)."
          />
          <p className="mt-4 max-w-4xl text-neutral-300">
            Projects span A/B testing, classification, clustering, regression and churn prediction - each documented with metrics. Full code on GitHub.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {dataScienceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="landing-pages-heading">
          <SectionTitle
            title="Landing Pages"
            intro="Three live Next.js landing pages, each linking to a separate conversion flow."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {landingPages.map((item) => (
              <article key={item.href} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  {item.href}
                </a>
                <p className="mt-3 text-sm text-neutral-300">{item.note}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
