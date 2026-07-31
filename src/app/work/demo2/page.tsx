"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { track } from "../../lib/analytics";

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
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-20">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Free Marketing Analytics Audit</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Discover What&apos;s Holding Back Your Marketing Performance
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Get a free analytics and tracking audit that identifies missed conversions, tracking issues, and practical optimization opportunities.
          </p>
          <a href="#audit-form" className="mt-8 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Get My Free Audit
          </a>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">What You&apos;ll Receive</h2>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <Reveal key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Included</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold">Your Audit Delivery Pack</h2>
          <p className="mt-4 max-w-3xl text-slate-200">
            We assess your setup and send a clear action package so you know exactly what to fix first and how to improve performance.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-100 md:grid-cols-3">
            <li className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">PDF audit report</li>
            <li className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">Tracking checklist</li>
            <li className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">Funnel improvement recommendations</li>
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-300">Estimated delivery: within 48 hours</p>
        </Reveal>
      </section>

      <section id="audit-form" className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Request Your Free Audit</h2>
          <form onSubmit={handleSubmit} className="mt-7 grid gap-4 md:grid-cols-3" noValidate>
            <label className="text-sm font-medium text-slate-800">
              Name
              <input name="name" required type="text" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-200 focus:ring" />
            </label>
            <label className="text-sm font-medium text-slate-800">
              Business Email
              <input name="email" required type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-200 focus:ring" />
            </label>
            <label className="text-sm font-medium text-slate-800">
              Company Website
              <input name="website" required type="url" placeholder="https://" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-200 focus:ring" />
            </label>
            <div className="md:col-span-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Request Free Audit
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-700">
              Thank you. We received your request and will send confirmation shortly.
            </p>
          )}
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
        </Reveal>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <Reveal key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Step {idx + 1}</p>
              <p className="mt-2 text-sm font-medium text-slate-800">{step}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <Reveal className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Trusted Marketing Operations Expertise</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Client Testimonials</p>
              <p className="mt-3 text-sm text-slate-700">"Clear, practical audit with high-impact fixes we could implement immediately."</p>
              <p className="mt-4 text-sm text-slate-700">"Tracking clarity improved our reporting confidence in one sprint."</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Experience Snapshot</p>
              <p className="mt-3 text-sm text-slate-700">10+ years in performance marketing and analytics delivery.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {[
                  "GA4",
                  "Google Tag Manager",
                  "Meta Ads",
                  "Google Ads",
                  "Looker Studio",
                ].map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-300 bg-white px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>LenaBara Audit Desk</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
