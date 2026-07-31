import type { Metadata } from "next";
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 py-12 text-neutral-100 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">Work</h1>
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
      </div>
    </main>
  );
}
