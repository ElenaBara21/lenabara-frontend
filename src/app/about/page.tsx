import Link from "next/link";

const principles = [
  {
    title: "Performance over vanity metrics",
    desc: "clicks and impressions don't matter if they don't turn into leads or revenue.",
  },
  {
    title: "Data before decisions",
    desc: "every call is guided by tracking and real performance data, not assumptions.",
  },
  {
    title: "Structure before scaling",
    desc: "tracking, funnels and strategy get built before budgets grow.",
  },
  {
    title: "Transparency always",
    desc: "you should always know where the budget goes and what it produces. Concept work in my portfolio is labelled as concept, never presented as client results.",
  },
];

const credentials = [
  "Meta Certified Performance Marketing Specialist",
  "Meta Certified Media Buying Professional",
  "Google Ads Search Certification",
  "Post Graduate Program in Data Science & Business Analytics — UT Austin / Great Learning",
  "MA Marketing Management (in progress)",
  "UAE Licensed Marketing Consultancy (RAKEZ)",
  "UAE Social Media Advertiser Permit (National Media Authority)",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">About</h1>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-neutral-300 md:text-lg">
            I&apos;m Yelena Shelepova — a marketing analyst with a finance and data-science foundation. Across 18+ years in
            business, finance and analytics at international companies in the UAE, I learned to make decisions against
            numbers rather than intuition. For the last two years I&apos;ve applied that directly to marketing: building the
            measurement layer — GA4, GTM, Meta Pixel, attribution, unit economics — that shows what&apos;s actually working
            before a budget scales.
          </p>
        </div>

        <section className="mb-12">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">How I got here</h2>
            <p className="mt-6 max-w-5xl text-base leading-relaxed text-neutral-300 md:text-lg">
              Finance and operations gave me the commercial grounding — cost structure, margin, payback. A Post
              Graduate Program in Data Science &amp; Business Analytics (UT Austin / Great Learning) gave me the
              analytical toolkit — SQL, Python, experimentation, cohort analysis. Performance marketing is where the
              two meet: I execute Meta and Google Ads, but I plan them from unit economics and read them through clean
              tracking. The through-line across all of it is measurement.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">What I focus on now</h2>
          <p className="mt-4 max-w-5xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Marketing analytics and growth analytics — measurement, experimentation, and unit economics — with paid
            acquisition execution as applied depth.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-center text-3xl font-extrabold text-white md:text-4xl">Principles behind my work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-orange-500/40 hover:bg-orange-500/5 md:p-8"
              >
                <h3 className="text-xl font-extrabold text-white md:text-2xl">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">{principle.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Credentials</h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-300 md:text-base">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Open to opportunities</h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-300 md:text-lg">
              I&apos;m currently exploring remote and international roles in marketing analytics, growth analytics and
              performance marketing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center justify-center border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                View my work
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center border border-neutral-700 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                Download CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-neutral-700 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-200 transition hover:border-neutral-500 hover:text-white"
              >
                Contact me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
