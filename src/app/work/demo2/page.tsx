"use client";

import Link from "next/link";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { track } from "../../lib/analytics";

const displayFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const editorialSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

const deliverables = [
  "GA4 Tracking Review",
  "GTM Health Check",
  "Conversion Funnel Analysis",
  "Actionable Recommendations",
];

const processSteps = [
  "Submit the form",
  "Receive confirmation",
  "Marketing audit performed",
  "Personalized recommendations delivered",
];

export default function Demo2Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const website = String(formData.get("website") || "").trim();

    if (!name || !email || !website) {
      return;
    }

    track("lead_magnet_request", {
      landing: "work_demo2",
      offer: "free_marketing_analytics_audit",
      name,
      email,
      website,
    });

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="relative min-h-screen bg-[#efeeea] text-[#171717]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(0,0,0,0.08),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(0,0,0,0.05),transparent_24%),linear-gradient(180deg,#f5f4ef_0%,#efeeea_46%,#e8e7e1_100%)]"
      />

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
        <div className="mb-10 border-b border-black/20 pb-4 text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-black/60 md:flex md:justify-end md:text-xs">
          <p>Performance Analytics Journal</p>
        </div>
        <Reveal className="grid gap-8 border border-black/20 bg-white/65 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-black/60 sm:text-xs">Free Marketing Analytics Audit</p>
            <h1 className={`${displayFont.className} mt-4 max-w-4xl text-[3rem] uppercase leading-[0.9] tracking-[0.01em] text-black sm:text-[4rem] md:text-[5rem]`}>
            Discover What&apos;s Holding Back Your Marketing Performance
            </h1>
            <p className={`${editorialSerif.className} mt-5 max-w-3xl text-xl leading-tight text-black/75 sm:text-[1.7rem]`}>
            Get a free analytics and tracking audit that identifies missed conversions, tracking issues, and practical optimization opportunities.
            </p>
            <a href="#audit-form" className="mt-8 inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black">
              Get My Free Audit
            </a>
          </div>
          <div className="grid gap-4 border-t border-black/15 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            {[
              { label: "Turnaround", value: "48 Hours" },
              { label: "Focus", value: "Tracking + Funnel Clarity" },
              { label: "Best for", value: "Lead Gen Teams" },
            ].map((item) => (
              <div key={item.label} className="border-b border-black/10 pb-4 last:border-b-0 last:pb-0">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55">{item.label}</p>
                <p className={`${displayFont.className} mt-2 text-[1.8rem] uppercase leading-[0.92] tracking-[0.01em] text-black`}>{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 border-t border-black/20 pt-9 md:grid-cols-[1fr_1.25fr] md:gap-12 md:pt-11">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/60 sm:text-xs">What you&apos;ll receive</p>
          <Reveal>
            <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] text-black sm:text-[3rem]`}>A Practical Audit, Not a Generic Checklist</h2>
            <p className={`${editorialSerif.className} mt-3 max-w-2xl text-xl leading-tight text-black/75`}>
              The audit is designed to show where attribution breaks, where conversions are missed, and which fixes will change performance fastest.
            </p>
          </Reveal>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <Reveal key={item} className="border border-black/15 bg-white/70 p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55">Included</p>
              <h3 className={`${displayFont.className} mt-3 text-[1.7rem] uppercase leading-[0.9] tracking-[0.01em] text-black`}>{item}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10">
        <Reveal className="border border-black/20 bg-[#171717] p-8 text-white md:p-10">
          <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.92] tracking-[0.01em] sm:text-[3rem]`}>Your Audit Delivery Pack</h2>
          <p className={`${editorialSerif.className} mt-4 max-w-3xl text-xl leading-tight text-white/78`}>
            We assess your setup and send a clear action package so you know exactly what to fix first and how to improve performance.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-100 md:grid-cols-3">
            <li className="border border-white/15 bg-white/5 p-4 uppercase tracking-[0.08em]">PDF audit report</li>
            <li className="border border-white/15 bg-white/5 p-4 uppercase tracking-[0.08em]">Tracking checklist</li>
            <li className="border border-white/15 bg-white/5 p-4 uppercase tracking-[0.08em]">Funnel improvement recommendations</li>
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/65">Estimated delivery: within 48 hours</p>
        </Reveal>
      </section>

      <section id="audit-form" className="relative mx-auto max-w-6xl px-6 py-10">
        <Reveal className="border border-black/20 bg-white/80 p-8 md:p-10">
          <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.92] tracking-[0.01em] text-black sm:text-[3rem]`}>Request Your Free Audit</h2>
          <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-3" noValidate>
            <label className="text-sm font-medium uppercase tracking-[0.1em] text-black/75">
              Name
              <input name="name" required type="text" className="mt-2 w-full border border-black/15 bg-[#f7f5f0] px-4 py-3 text-slate-900 outline-none focus:border-black/35" />
            </label>
            <label className="text-sm font-medium uppercase tracking-[0.1em] text-black/75">
              Business Email
              <input name="email" required type="email" className="mt-2 w-full border border-black/15 bg-[#f7f5f0] px-4 py-3 text-slate-900 outline-none focus:border-black/35" />
            </label>
            <label className="text-sm font-medium uppercase tracking-[0.1em] text-black/75">
              Company Website
              <input name="website" required type="url" placeholder="https://" className="mt-2 w-full border border-black/15 bg-[#f7f5f0] px-4 py-3 text-slate-900 outline-none focus:border-black/35" />
            </label>
            <div className="md:col-span-3">
              <button type="submit" className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-transparent hover:text-black">
                Request Free Audit
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-4 border border-black/15 bg-[#f7f5f0] px-4 py-3 text-sm text-slate-700">
              Thank you. We received your request and will send confirmation shortly.
            </p>
          )}
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.95] tracking-[0.01em] text-black sm:text-[3rem]`}>How It Works</h2>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <Reveal key={step} className="border border-black/15 bg-white/70 p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55">Step {idx + 1}</p>
              <p className={`${editorialSerif.className} mt-2 text-xl leading-tight text-black/78`}>{step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10">
        <Reveal className="border border-black/20 bg-white/75 p-8 md:p-10">
          <h2 className={`${displayFont.className} text-[2.2rem] uppercase leading-[0.92] tracking-[0.01em] text-black sm:text-[3rem]`}>Trusted Marketing Operations Expertise</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="border border-black/15 bg-[#f7f5f0] p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55">Client Testimonials</p>
              <p className={`${editorialSerif.className} mt-3 text-xl leading-tight text-black/75`}>&quot;Clear, practical audit with high-impact fixes we could implement immediately.&quot;</p>
              <p className={`${editorialSerif.className} mt-4 text-xl leading-tight text-black/75`}>&quot;Tracking clarity improved our reporting confidence in one sprint.&quot;</p>
            </div>
            <div className="border border-black/15 bg-[#f7f5f0] p-5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-black/55">Experience Snapshot</p>
              <p className={`${editorialSerif.className} mt-3 text-xl leading-tight text-black/75`}>10+ years in performance marketing and analytics delivery.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700">
                {[
                  "GA4",
                  "Google Tag Manager",
                  "Meta Ads",
                  "Google Ads",
                  "Looker Studio",
                ].map((tech) => (
                  <span key={tech} className="border border-black/15 bg-white px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-black/15 bg-[#efeeea]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-black/65 md:flex-row md:items-center md:justify-between">
          <p className={`${displayFont.className} text-base uppercase tracking-[0.05em] text-black`}>LenaBara Audit Desk</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-black">Contact</Link>
            <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
