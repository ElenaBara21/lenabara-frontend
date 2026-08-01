"use client";

import Link from "next/link";
import { Orbitron, Space_Grotesk } from "next/font/google";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { track } from "../../lib/analytics";

const displayFont = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <main className={`${bodyFont.className} relative min-h-screen overflow-hidden bg-[#090214] text-[#f4f0ff]`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(97,69,255,0.28),transparent_30%),radial-gradient(circle_at_20%_18%,rgba(0,214,255,0.18),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(155,92,255,0.2),transparent_28%),linear-gradient(180deg,#0b0319_0%,#090214_55%,#06010f_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[32rem] h-[36rem] bg-[linear-gradient(rgba(137,92,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(137,92,255,0.16)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]"
      />

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-18 pt-14 md:grid-cols-[1.03fr_0.97fr] md:items-center md:pt-20">
        <Reveal>
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/90 backdrop-blur">
            InsightFlow for E-commerce Teams
          </p>
          <h1 className={`${displayFont.className} mt-5 text-4xl leading-[0.94] tracking-[0.02em] text-white md:text-5xl lg:text-6xl`}>
            Turn Your E-commerce Data into Actionable Insights
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c5bdd9]">
            InsightFlow helps growth teams unify campaign, product, and revenue data into one AI-powered dashboard so every decision is backed by real performance signals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#demo-form" className="inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#08111f] transition hover:shadow-[0_0_30px_rgba(118,240,255,0.35)]">
              Request a Demo
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-violet-300/50 hover:bg-violet-400/10">
              Start Free Trial
            </a>
          </div>
          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              { label: "Revenue lift", value: "+18.4%" },
              { label: "ROAS clarity", value: "4.7x" },
              { label: "Report speed", value: "-35%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.18em] text-[#9f94ba]">{stat.label}</p>
                <p className={`${displayFont.className} mt-2 text-2xl text-white`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative rounded-[2rem] border border-violet-300/20 bg-[#100423]/85 p-5 shadow-[0_0_0_1px_rgba(139,92,246,0.12),0_0_60px_rgba(88,28,135,0.35)] backdrop-blur">
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(74,222,255,0.12),transparent_30%,rgba(139,92,246,0.18)_70%,transparent)]" />
          <div className="relative rounded-[1.5rem] border border-cyan-300/15 bg-[#0b0319] p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <p className={`${displayFont.className} text-sm tracking-[0.14em] text-white`}>InsightFlow Dashboard</p>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">Live</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#9f94ba]">Revenue (30d)</p>
                <p className={`${displayFont.className} mt-2 text-2xl text-white`}>$1.24M</p>
                <p className="mt-1 text-xs text-cyan-200">+18.4% vs last month</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#9f94ba]">ROAS</p>
                <p className={`${displayFont.className} mt-2 text-2xl text-white`}>4.7x</p>
                <p className="mt-1 text-xs text-cyan-200">Strong multi-channel growth</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[#9f94ba]">Attribution Mix</p>
              <div className="mt-4 grid h-40 grid-cols-7 items-end gap-2 rounded-2xl border border-white/8 bg-[#120726] p-4">
                {[52, 76, 61, 84, 58, 49, 68].map((height, index) => (
                  <div key={height + index} className="flex h-full items-end">
                    <div
                      className="w-full rounded-full bg-[linear-gradient(180deg,#75f3ff_0%,#6f7dff_48%,#8e49ff_100%)] shadow-[0_0_20px_rgba(117,243,255,0.22)]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#a89fc0]">
                <span>Paid Social 58%</span>
                <span>Search 27%</span>
                <span>Email 15%</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <h2 className={`${displayFont.className} text-3xl text-white md:text-4xl`}>Customer Pain Points</h2>
          <p className="mt-3 max-w-3xl text-[#bdb4d4]">Most e-commerce teams do not lack data. They lack a decision-ready analytics system.</p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <Reveal key={item.title} className="h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{item.badge}</span>
              <h3 className={`${displayFont.className} mt-4 text-xl text-white`}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c5bdd9]">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <Reveal className="rounded-[2rem] border border-violet-300/15 bg-[linear-gradient(180deg,rgba(25,9,53,0.95),rgba(11,3,25,0.95))] p-8 shadow-[0_0_50px_rgba(76,29,149,0.28)] md:p-10">
          <h2 className={`${displayFont.className} text-3xl text-white md:text-4xl`}>The InsightFlow Solution</h2>
          <p className="mt-4 max-w-3xl text-[#c5bdd9]">
            InsightFlow combines AI-driven analysis with a clean command center for your team so you can diagnose performance issues and act faster.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {solutionItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-[#f1edff] backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <h2 className={`${displayFont.className} text-3xl text-white md:text-4xl`}>Trusted by Growth Teams</h2>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9f94ba]">Client Logos</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["NorthPeak", "DynaCart", "LoopMerch", "Sparrow", "BoldBasket", "LiftCommerce"].map((logo) => (
                <div key={logo} className="rounded-xl border border-white/10 bg-[#120726] px-2 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#c6bcdf]">
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
              <div key={stat.label} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <p className={`${displayFont.className} text-3xl text-cyan-200`}>{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#bfb6d4]">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="demo-form" className="relative mx-auto max-w-6xl px-6 pb-20 pt-14">
        <Reveal className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,14,69,0.96),rgba(11,3,25,0.98))] p-8 text-white shadow-[0_0_60px_rgba(34,211,238,0.12)] md:p-10">
          <h2 className={`${displayFont.className} text-3xl text-white md:text-4xl`}>Ready to See Your Data Clearly?</h2>
          <p className="mt-3 max-w-2xl text-[#c8dfff]">Request a personalized walkthrough and see exactly how InsightFlow fits your current stack.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-3" noValidate>
            <label className="text-sm font-medium text-[#d9d1ef]">
              Name
              <input name="name" required type="text" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/35 focus:border-cyan-300/45" />
            </label>
            <label className="text-sm font-medium text-[#d9d1ef]">
              Company
              <input name="company" required type="text" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/35 focus:border-cyan-300/45" />
            </label>
            <label className="text-sm font-medium text-[#d9d1ef]">
              Email
              <input name="email" required type="email" className="mt-2 w-full rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/35 focus:border-cyan-300/45" />
            </label>
            <div className="md:col-span-3">
              <button type="submit" className="inline-flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#08111f] transition hover:shadow-[0_0_30px_rgba(118,240,255,0.35)]">
                Request Demo
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">
              Thank you. Your demo request was submitted successfully.
            </p>
          )}
        </Reveal>
      </section>

      <footer className="border-t border-white/10 bg-[#08020f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[#bcb3d3] md:flex-row md:items-center md:justify-between">
          <p className={`${displayFont.className} text-base text-white`}>InsightFlow</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-cyan-200">Features</a>
            <Link href="/privacy-policy" className="hover:text-cyan-200">Privacy</Link>
            <Link href="/contact" className="hover:text-cyan-200">Contact</Link>
            <a href="https://www.linkedin.com/in/lenabara/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-200">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
