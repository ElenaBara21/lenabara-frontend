import type { Metadata } from "next";
import Image from "next/image";

const CV_HREF = "/resume.pdf";

export const metadata: Metadata = {
  title: "Marketing Analytics & Growth Portfolio | Lena Bara",
  description:
    "Portfolio of Yelena Shelepova, a marketing analyst and performance marketer focused on measurement architecture, unit economics, and paid acquisition systems.",
  alternates: {
    canonical: "/",
  },
};

const expertiseAreas = [
  "SQL",
  "Python",
  "GA4",
  "Marketing Analytics",
  "Google Tag Manager",
  "Conversion Tracking",
  "Unit Economics (LTV:CAC / payback)",
  "Cohort & Retention Analysis",
  "A/B Testing & Experimentation",
  "Looker Studio",
  "Attribution & UTM Architecture",
  "Google Ads",
  "Meta Ads",
];

const realWorkHighlights = [
  {
    title: "Tracking & Analytics Foundation (Live Implementation)",
    scope: "GA4 + GTM + Meta Pixel configured from scratch on a live business site.",
    detail:
      "Full-funnel measurement for WhatsApp clicks, calls, and booking intent with clean attribution setup.",
    href: "/work/tracking-analytics-foundation",
  },
  {
    title: "Tally -> Make -> HubSpot Automation Pipeline",
    scope: "Documented demo build",
    detail:
      "Lead form submissions mapped into CRM contacts through Make automation scenarios with visible process flow and output records.",
    href: "/work#marketing-automation-heading",
  },
  {
    title: "Data Science Portfolio (7 Projects)",
    scope: "UT Austin / Great Learning portfolio",
    detail:
      "Applied work in A/B testing, classification, clustering, regression, and churn prediction - with code and documented outputs.",
    href: "https://github.com/ElenaBara21/Portfolio",
  },
  {
    title: "Live Next.js Landing Pages",
    scope: "Working funnel demos",
    detail:
      "Three live landing page builds connected to measurable conversion flows and event tracking hooks.",
    href: "/work#landing-pages-heading",
  },
  {
    title: "Real-Estate Unit Economics Work",
    scope: "Analyst-led CPL/CAC/ROMI planning",
    detail:
      "Modeled spend-to-revenue decisions and conversion economics for property-focused lead generation decisions.",
    href: "/growth",
  },
];

const strategyConcepts = [
  {
    title: "Aesthetic Clinic Growth System",
    summary:
      "Concept model for rebuilding a clinic funnel around measurable WhatsApp acquisition.",
    href: "/work/aesthetic-clinic",
  },
  {
    title: "B2B SaaS Acquisition & Retention",
    summary:
      "Concept model linking paid acquisition to retention and LTV:CAC decision logic.",
    href: "/work/saas-growth-system",
  },
  {
    title: "EdTech Enrollment Growth",
    summary:
      "Concept model for enrollment growth with full-funnel attribution and unit-economics planning.",
    href: "/work/edtech-growth-system",
  },
];

const careerTimeline = [
  {
    period: "Current",
    title: "Marketing / Growth Analyst",
    detail:
      "Focused on measurement, unit economics, and experimentation-backed growth analytics for UAE and international projects, with paid acquisition execution as applied depth.",
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
              Marketing Analyst &amp; Performance Marketer | Measurement | Unit Economics | Paid Acquisition
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              I build measurement-first growth systems: analytics architecture, attribution quality, paid acquisition execution, and financial logic for decision-making.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#employer-contact"
                className="inline-flex items-center justify-center border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-black transition hover:bg-orange-600"
              >
                Hire Me
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-300">
              <a href={CV_HREF} className="underline underline-offset-4 hover:text-orange-300">
                Download CV
              </a>
              <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-orange-300">
                LinkedIn
              </a>
              <a href="#employer-contact" className="underline underline-offset-4 hover:text-orange-300">
                Employer Contact
              </a>
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
          <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">About My Case Studies</h2>
          <div className="mt-5 space-y-4 text-neutral-300 md:text-lg">
            <p>
              I work across international business environments in analytics, paid acquisition, and marketing operations, with hands-on experience turning marketing spend into measurable outcomes.
            </p>
            <p>
              My work centres on building the measurement layer - analytics architecture, tracking quality, attribution, and unit economics - that lets acquisition decisions be made against numbers rather than intuition. This is grounded in a finance and data-science background applied directly to marketing.
            </p>
            <p>
              Today my core focus is Marketing Analytics and Growth Analytics - measurement, experimentation, and unit economics - with paid acquisition execution as applied depth.
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
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Real Case Studies Assets</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Measurement-First Highlights</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {realWorkHighlights.map((item) => (
            <article key={item.title} className="border border-neutral-800 bg-neutral-900/60 p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-400">{item.scope}</p>
              <h3 className="mt-2 text-2xl font-extrabold uppercase text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-300">{item.detail}</p>
              <a href={item.href} className="mt-4 inline-block text-sm font-extrabold uppercase tracking-[0.1em] text-white underline underline-offset-4 transition hover:text-orange-400">
                Open evidence
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
        <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Labeled Concept Models</p>
        <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Strategy Concepts</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {strategyConcepts.map((item) => (
            <article key={item.title} className="border border-neutral-800 bg-neutral-900/60 p-6">
              <span className="rounded-full border border-neutral-600 bg-neutral-800 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-neutral-300">
                Strategy Concept
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-neutral-300">{item.summary}</p>
              <a href={item.href} className="mt-4 inline-block text-sm font-extrabold uppercase tracking-[0.1em] text-white underline underline-offset-4 transition hover:text-orange-400">
                Open concept case
              </a>
            </article>
          ))}
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

      <section id="employer-contact" className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="border border-orange-500/40 bg-orange-500/10 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-orange-400">Open to New Opportunities</p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase text-white md:text-4xl">Employer Contact</h2>
          <p className="mt-4 max-w-3xl text-neutral-200 md:text-lg">
            I am currently exploring remote and international opportunities in Marketing Analytics, Growth Analytics, and Performance Marketing.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:info@lenabara.com" className="inline-flex items-center justify-center border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-950 transition hover:bg-neutral-200">
              Email
            </a>
            <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800">
              LinkedIn
            </a>
            <a href={CV_HREF} className="inline-flex items-center justify-center border border-neutral-600 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-400 hover:bg-neutral-800">
              Download CV
            </a>
          </div>

          <p className="mt-6 text-sm text-neutral-300">
            Looking for freelance marketing support? <a href="/landing" className="underline underline-offset-4 hover:text-orange-300">View services.</a>
          </p>
        </div>
      </section>
    </main>
  );
}
