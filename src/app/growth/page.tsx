import Link from "next/link";

const focusAreas = [
  "Measurement architecture",
  "GA4 / GTM / Pixel setup",
  "Lead quality and funnel analysis",
  "Landing page review",
  "Unit economics and attribution",
  "Experimentation and reporting",
];

const selectedWork = [
  {
    title: "Tracking & Analytics Foundation",
    detail:
      "Live implementation of GA4, GTM, and Meta Pixel for a business site with WhatsApp, call, and booking-intent tracking.",
    href: "/work/tracking-analytics-foundation",
  },
  {
    title: "Case Studies",
    detail:
      "Selected examples showing how structured measurement, creative, and offer clarity change campaign outcomes.",
    href: "/work",
  },
  {
    title: "Data Science Portfolio",
    detail:
      "Applied analytics work across classification, clustering, regression, A/B testing, and churn prediction.",
    href: "https://github.com/ElenaBara21/Portfolio",
  },
];

const processSteps = [
  "Audit the measurement layer before touching budget.",
  "Map the funnel from impression to qualified lead.",
  "Separate proven results from modeled assumptions.",
  "Use reporting to decide what to scale, fix, or stop.",
];

export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.18em] text-orange-400">Employer-facing profile</p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl md:text-6xl">
          Growth Analytics and Measurement
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-neutral-300 md:text-xl">
          I work across analytics, paid acquisition, and conversion tracking, with a focus on turning marketing spend
          into measurable decisions rather than vanity output.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center justify-center border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-neutral-700 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-orange-400">Focus Areas</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item} className="border border-neutral-800 bg-neutral-950/50 p-4 text-sm text-neutral-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Selected Work</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {selectedWork.map((item) => (
            <article key={item.title} className="border border-neutral-800 bg-neutral-900/60 p-6">
              <h2 className="text-xl font-extrabold uppercase text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-neutral-300">{item.detail}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex text-sm font-semibold text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline"
              >
                Open
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">How I Work</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {processSteps.map((step) => (
            <div key={step} className="border border-neutral-800 bg-neutral-900/60 p-5 text-neutral-200">
              {step}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
