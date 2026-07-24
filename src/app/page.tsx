import type { Metadata } from "next";
import Image from "next/image";

const hasCv = false; // TODO: set to true when a verified CV PDF is added to /public.

export const metadata: Metadata = {
  title: "Performance & Growth Marketing Portfolio | Lena Bara",
  description:
    "Portfolio of Yelena Shelepova, a performance and growth marketing specialist experienced in Google Ads, Meta Ads, analytics, conversion tracking, and the UAE market.",
  alternates: {
    canonical: "/",
  },
};

const expertiseAreas = [
  "Google Ads",
  "Meta Ads",
  "Campaign Strategy",
  "Marketing Analytics",
  "GA4",
  "Google Tag Manager",
  "Conversion Tracking",
  "Looker Studio",
  "Landing Page Optimization",
  "A/B Testing",
  "Lead Generation",
  "AI-Assisted Creative Production",
];

const highlights = [
  {
    context: "Fitness / Gym campaign",
    responsibility: "Owned paid acquisition strategy and performance optimization.",
    actions:
      "Built a Meta Ads funnel with audience testing, creative iteration, and conversion-oriented funnel logic.",
    result: "40-60 new gym members in 60 days and reported 2.0-2.5x ROI.",
  },
  {
    context: "UAE business setup consultancy",
    responsibility: "Led full-funnel lead generation strategy across Google and Meta.",
    actions:
      "Implemented high-intent search capture, Meta retargeting, and a WhatsApp-first conversion flow.",
    result: "Shifted from unpredictable referrals to a qualified weekly pipeline.",
  },
  {
    context: "UAE accounting firm",
    responsibility: "Managed campaign structure and analytics foundations.",
    actions:
      "Combined channel execution with clearer tracking and conversion attribution to improve decision quality.",
    result: "Produced a more structured lead generation process and measurable optimization workflow.",
  },
  {
    context: "UAE escape room",
    responsibility: "Owned marketing analytics and measurement setup.",
    actions:
      "Designed analytics infrastructure to connect traffic sources, user behavior, and outcome tracking.",
    result: "Enabled data-backed reporting and better campaign planning.",
  },
];

const featuredStudies = [
  {
    title: "Gym Membership Growth",
    scope: "Paid acquisition funnel",
    summary:
      "Meta funnel built for member acquisition with iterative testing and performance optimization.",
    tools: "Meta Ads, funnel strategy, testing",
    result: "40-60 new members in 60 days | 2.0-2.5x ROI",
    href: "/work#case-gym",
  },
  {
    title: "Company Formation",
    scope: "Lead generation system",
    summary:
      "From referral-heavy growth to a more stable weekly lead flow using search + retargeting.",
    tools: "Google Ads, Meta Ads, WhatsApp-first flow",
    result: "Qualified weekly lead pipeline",
    href: "/work#case-company-formation",
  },
  {
    title: "Accounting Firm",
    scope: "Performance + measurement",
    summary:
      "Structured campaigns and tracking discipline to support higher-confidence optimization.",
    tools: "Google Ads, GA4, conversion tracking",
    result: "Clearer attribution and reporting cadence",
    href: "/work#case-accounting",
  },
  {
    title: "Escape Room Analytics",
    scope: "Analytics implementation",
    summary:
      "Built analytics infrastructure to support decision-making for paid growth.",
    tools: "GA4, event design, reporting",
    result: "Improved visibility into marketing outcomes",
    href: "/work#case-escape-room-analytics",
  },
];

const careerTimeline = [
  {
    period: "Current",
    title: "Performance Marketing and Growth Marketing Specialist",
    detail:
      "Focused on paid acquisition systems, experimentation, and analytics-backed growth strategy for UAE and international projects.",
  },
  {
    period: "Previous",
    title: "Digital Marketing and Business Operations Roles",
    detail:
      "Worked across campaign execution, business operations, and financial performance analysis in international settings.",
  },
  {
    period: "Foundation",
    title: "Data and Commercial Analytics Background",
    detail:
      "Built a strong analytical base through finance and business analytics work, later applied to marketing measurement and optimization.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100">
      <section className="relative border-b border-neutral-800 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_40%),radial-gradient(circle_at_15%_30%,rgba(249,115,22,0.08),transparent_38%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-orange-400">Personal Marketing Portfolio</p>
            <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl md:text-6xl">
              Yelena Shelepova
            </h1>
            <p className="mt-4 text-lg font-semibold text-neutral-200 sm:text-xl">
              Performance &amp; Growth Marketing | Paid Acquisition | Marketing Analytics
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              I plan, launch, and optimize data-driven customer acquisition campaigns across Google Ads and Meta Ads, supported by analytics, conversion tracking, and continuous experimentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/work"
                className="inline-flex items-center justify-center border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:bg-orange-600"
              >
                View Case Studies
              </a>
              {hasCv ? (
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-900 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-neutral-100 transition hover:border-neutral-400 hover:bg-neutral-800"
                >
                  Download CV
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center justify-center border border-neutral-700 bg-neutral-900/80 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-neutral-500"
                >
                  Download CV (coming soon)
                </span>
              )}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px]">
            <div className="relative h-[520px] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-[560px]">
              <Image
                src="/hero/lena.png"
                alt="Portrait of Yelena Shelepova"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Professional Summary</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">About My Work</h2>
          <div className="mt-5 space-y-4 text-neutral-300 md:text-lg">
            <p>
              I have worked across international business environments in digital marketing, paid acquisition, analytics, and operations, with hands-on experience turning marketing spend into measurable outcomes.
            </p>
            <p>
              My UAE market work has focused on building practical acquisition systems that connect campaign strategy, tracking quality, and consistent optimization.
            </p>
            <p>
              Today, my core focus is on Performance Marketing, Growth Marketing, and Marketing Analytics - combining execution depth with strong measurement discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Core Expertise</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Capabilities</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((item) => (
            <div key={item} className="border border-neutral-800 bg-neutral-900/60 px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-100">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Experience and Results</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Selected Work Highlights</h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.context} className="border border-neutral-800 bg-neutral-900/60 p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.1em] text-orange-400">{item.context}</p>
              <p className="mt-3 text-sm text-neutral-300"><span className="font-semibold text-white">Responsibility:</span> {item.responsibility}</p>
              <p className="mt-2 text-sm text-neutral-300"><span className="font-semibold text-white">Actions:</span> {item.actions}</p>
              <p className="mt-2 text-sm text-neutral-200"><span className="font-semibold text-white">Result:</span> {item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Featured Case Studies</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Recent Projects</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {featuredStudies.map((study) => (
            <article key={study.title} className="group border border-neutral-800 bg-[#121212] p-6 transition hover:border-orange-500/60 hover:bg-[#151515]">
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-400">{study.scope}</p>
              <h3 className="mt-2 text-2xl font-extrabold uppercase text-white">{study.title}</h3>
              <p className="mt-3 text-sm text-neutral-300">{study.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-neutral-400">Tools: {study.tools}</p>
              <p className="mt-2 text-sm font-semibold text-orange-400">{study.result}</p>
              <a href={study.href} className="mt-4 inline-block text-sm font-extrabold uppercase tracking-[0.1em] text-white underline underline-offset-4 transition hover:text-orange-400">
                View full case study
              </a>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <a
            href="/work"
            className="inline-flex items-center justify-center border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:bg-orange-600"
          >
            View All Case Studies
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Certifications and Education</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Credentials</h2>

        <div className="mt-7 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-center border border-neutral-800 bg-neutral-900/60 p-4">
              <Image src="/badges/meta-buyer-badge.png" alt="Meta Certified Media Buying Professional badge" width={170} height={70} className="h-auto w-auto max-h-[64px]" />
            </div>
            <div className="flex items-center justify-center border border-neutral-800 bg-neutral-900/60 p-4">
              <Image src="/badges/meta-performance-badge.png" alt="Meta Certified Performance Marketing Specialist badge" width={170} height={70} className="h-auto w-auto max-h-[64px]" />
            </div>
          </div>

          <div className="border border-neutral-800 bg-neutral-900/60 p-6">
            <ul className="space-y-3 text-neutral-200">
              <li>Meta Certified Media Buying Professional</li>
              <li>Meta Certified Performance Marketing Specialist</li>
              <li>Google Ads Search Certification</li>
              <li>Data Science and Business Analytics - UT Austin</li>
              <li>Marketing Management program (ongoing)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Professional Background</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Career Snapshot</h2>
        <div className="mt-7 space-y-5 border-l border-neutral-700 pl-6">
          {careerTimeline.map((item) => (
            <article key={item.title} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-orange-500" />
              <p className="text-xs uppercase tracking-[0.14em] text-neutral-400">{item.period}</p>
              <h3 className="mt-1 text-xl font-extrabold text-white">{item.title}</h3>
              <p className="mt-2 text-neutral-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="border border-orange-500/40 bg-orange-500/10 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Open to New Opportunities</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Employer Contact</h2>
          <p className="mt-4 max-w-3xl text-neutral-200 md:text-lg">
            I am currently exploring remote and international opportunities in Performance Marketing, Growth Marketing, and Marketing Analytics.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:info@lenabara.com" className="inline-flex items-center justify-center border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-950 transition hover:bg-neutral-200">
              Email
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800">
              LinkedIn
            </a>
            {hasCv ? (
              <a href="/resume.pdf" className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800">
                Download CV
              </a>
            ) : (
              <span aria-disabled="true" className="inline-flex cursor-not-allowed items-center justify-center border border-neutral-700 bg-neutral-900/80 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-500">
                Download CV (coming soon)
              </span>
            )}
          </div>

          <p className="mt-6 text-sm text-neutral-300">
            Looking for freelance marketing support? <a href="/landing" className="underline underline-offset-4 hover:text-orange-300">View services.</a>
          </p>
        </div>
      </section>
    </main>
  );
}
