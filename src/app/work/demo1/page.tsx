"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { track } from "../../lib/analytics";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

const painPoints = [
  {
    title: "Scattered Data",
    text: "Marketing data lives in ad platforms, analytics tools, and spreadsheets with no single source of truth.",
    badge: "01",
  },
  {
    title: "Unclear ROI",
    text: "Teams struggle to connect spend to revenue, making budget decisions slower and riskier.",
    badge: "02",
  },
  {
    title: "Manual Reporting",
    text: "Analysts spend hours building recurring reports instead of finding growth opportunities.",
    badge: "03",
  },
];

const solutionItems = [
  "Real-time dashboards for sales, marketing, and retention",
  "Cross-channel marketing attribution",
  "Automated weekly and monthly reporting",
  "Custom KPIs mapped to your business goals",
];

export default function Demo1Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name || !company || !email) {
      return;
    }

    track("demo_request", {
      landing: "work_demo1",
      form_name: "insightflow_demo_request",
      name,
      company,
      email,
    });

    // GTM/GA4 hook: this dataLayer event can be mapped to a GA4 `demo_request` event in GTM.
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "demo_request",
        form_name: "insightflow_demo_request",
      });
    }

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[1.03fr_0.97fr] md:items-center md:pt-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">InsightFlow for E-commerce Teams</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Turn Your E-commerce Data into Actionable Insights
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            InsightFlow helps growth teams unify campaign, product, and revenue data into one AI-powered dashboard so every decision is backed by real performance signals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#demo-form" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Request a Demo
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50">
              Start Free Trial
            </a>
          </div>
        </Reveal>

        <Reveal className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-5 shadow-[0_20px_45px_rgba(37,99,235,0.12)]">
          <div className="rounded-2xl border border-blue-100 bg-white p-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <p className="text-sm font-semibold text-slate-800">InsightFlow Dashboard</p>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Revenue (30d)</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">$1.24M</p>
                <p className="mt-1 text-xs text-emerald-600">+18.4% vs last month</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">ROAS</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">4.7x</p>
                <p className="mt-1 text-xs text-emerald-600">Strong multi-channel growth</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">Attribution Mix</p>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[58%] bg-blue-600" />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                <span>Paid Social 58%</span>
                <span>Search 27%</span>
                <span>Email 15%</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-950">Customer Pain Points</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Most e-commerce teams do not lack data. They lack a decision-ready analytics system.</p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <Reveal key={item.title} className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">{item.badge}</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal className="rounded-3xl border border-blue-100 bg-blue-50/60 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-950">The InsightFlow Solution</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            InsightFlow combines AI-driven analysis with a clean command center for your team so you can diagnose performance issues and act faster.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {solutionItems.map((item) => (
              <div key={item} className="rounded-2xl border border-blue-100 bg-white p-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-950">Trusted by Growth Teams</h2>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Client Logos</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["NorthPeak", "DynaCart", "LoopMerch", "Sparrow", "BoldBasket", "LiftCommerce"].map((logo) => (
                <div key={logo} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 text-center text-xs font-semibold text-slate-500">
                  {logo}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Companies", value: "500+" },
              { label: "Faster reporting", value: "35%" },
              { label: "Customer satisfaction", value: "98%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="demo-form" className="mx-auto max-w-6xl px-6 pb-20 pt-14">
        <Reveal className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to See Your Data Clearly?</h2>
          <p className="mt-3 max-w-2xl text-blue-100">Request a personalized walkthrough and see exactly how InsightFlow fits your current stack.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-3" noValidate>
            <label className="text-sm font-medium">
              Name
              <input name="name" required type="text" className="mt-2 w-full rounded-xl border border-blue-300/40 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-200 focus:ring" />
            </label>
            <label className="text-sm font-medium">
              Company
              <input name="company" required type="text" className="mt-2 w-full rounded-xl border border-blue-300/40 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-200 focus:ring" />
            </label>
            <label className="text-sm font-medium">
              Email
              <input name="email" required type="email" className="mt-2 w-full rounded-xl border border-blue-300/40 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-200 focus:ring" />
            </label>
            <div className="md:col-span-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                Request Demo
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-4 rounded-xl border border-blue-300/40 bg-blue-500/20 px-4 py-3 text-sm text-blue-100">
              Thank you. Your demo request was submitted successfully.
            </p>
          )}
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>InsightFlow</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-blue-700">Features</a>
            <Link href="/privacy-policy" className="hover:text-blue-700">Privacy</Link>
            <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
