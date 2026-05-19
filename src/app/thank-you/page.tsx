import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Lena Bara",
  description: "Audit request confirmation page for Lena Bara.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] px-4 py-4 text-black sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1120px] flex-col">
        <header className="mb-10 flex items-center justify-between border-b border-black/10 pb-4">
          <Link href="/" className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/55 transition hover:text-black">
            Lena Bara
          </Link>
          <Link href="/contact" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/45 transition hover:text-black">
            Contact
          </Link>
        </header>

        <section className="mx-auto flex w-full max-w-3xl flex-1 items-center">
          <div className="w-full rounded-[10px] border border-black/15 bg-white/86 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 md:p-10">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/45">
              Audit Request Received
            </p>
            <h1 className="max-w-2xl text-[2.8rem] uppercase leading-[0.92] tracking-[0.01em] sm:text-[4rem]">
              Thank You — Audit Request Received
            </h1>
            <p className="mt-5 max-w-2xl text-[1.1rem] leading-snug text-black/70 sm:text-[1.3rem]">
              We&apos;ll review your business, lead flow, and current marketing setup before reaching out with next steps.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black px-7 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-orange-500"
              >
                Book Strategy Call
              </Link>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/40">
                Typical response within 1 business day
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

