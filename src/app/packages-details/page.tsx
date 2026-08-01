import Link from "next/link";

export const metadata = {
  title: "Engagement Details | Lenabara",
  description: "A neutral summary page for employer-facing portfolio review.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-orange-400">Employer-facing note</p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl">
          Engagement Details Moved
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-neutral-300">
          Pricing, audit offers, and other freelance sales material now live on the landing page only. This route stays
          as a neutral reference point for portfolio review.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/landing"
            className="inline-flex items-center justify-center border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            Go to Landing Page
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center border border-neutral-700 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-200 transition hover:border-neutral-500 hover:text-white"
          >
            Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
