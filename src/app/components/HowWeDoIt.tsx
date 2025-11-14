"use client";
import { useEffect, useState } from "react";

type Step = {
  id: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    id: "01",
    title: "Discovery",
    body:
      "We start with a quick audit or strategy call to understand your goals, target audience, and market position.",
  },
  {
    id: "02",
    title: "Research & Strategy",
    body:
      "We analyze competitors, ad performance data, and audience behavior to shape a unique campaign plan.",
  },
  {
    id: "03",
    title: "Creative Direction",
    body:
      "We develop scroll-stopping visuals and copy tested for attention, clarity, and conversion.",
  },
  {
    id: "04",
    title: "Setup & Tracking",
    body:
      "We build campaigns in Meta or Google Ads, set up GA4 + pixels, and ensure full conversion tracking.",
  },
  {
    id: "05",
    title: "Optimization",
    body:
      "We monitor daily and adjust bids, audiences, and creatives to reach ideal CPL and maximize ROAS.",
  },
  {
    id: "06",
    title: "Reporting & Insights",
    body:
      "You receive a real-time Looker Studio dashboard with metrics that matter — no fluff.",
  },
  {
    id: "07",
    title: "Scale & Growth",
    body:
      "Once results are stable, we scale ad spend smartly while maintaining profitability.",
  },
];

export default function HowWeDoIt() {
  const [i, setI] = useState(0);
  const step = STEPS[i];

  function prev() {
    setI((v) => (v - 1 + STEPS.length) % STEPS.length);
  }
  function next() {
    setI((v) => (v + 1) % STEPS.length);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-none border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
      {/* Ambient background glow + optional image panel */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500/20 via-orange-400/10 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-gradient-to-tr from-neutral-700/30 via-neutral-600/10 to-transparent blur-2xl" />

      <div className="grid md:grid-cols-3 gap-6 items-center">
        {/* Left label */}
        <div className="md:col-span-1 relative">
          {/* Decorative blob image (optional) */}
          <div
            className="mb-4 md:mb-3 h-40 md:h-48 bg-left bg-no-repeat bg-contain opacity-80"
            style={{ backgroundImage: 'url(/hero/how-blob.png)' }}
          />
          <p className="text-white text-2xl md:text-4xl font-extrabold uppercase leading-tight">
            This is how
            <br />
            we do it
          </p>
          <p className="mt-2 text-sm text-neutral-400 max-w-xs">
            A clear, repeatable process from first audit to profitable scale.
          </p>
        </div>

        {/* Step content only (no visual panel, no framed card) */}
        <div className="md:col-span-2">
          <div className="relative p-0 md:p-0">
            <div className="flex items-center gap-3 text-orange-400 font-semibold">
              <span className="text-sm">{step.id}</span>
              <span className="text-xl md:text-2xl uppercase tracking-wide">{step.title}</span>
            </div>
            <p className="mt-3 text-neutral-200 text-sm md:text-base leading-relaxed">
              {step.body}
            </p>

            {/* Arrows (no frames) */}
            <div className="mt-4 flex gap-3">
              <button
                aria-label="Previous step"
                onClick={prev}
                className="h-10 w-10 rounded-none bg-orange-500/10 text-orange-300 hover:bg-orange-500/20"
              >
                <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                aria-label="Next step"
                onClick={next}
                className="h-10 w-10 rounded-none bg-orange-500/10 text-orange-300 hover:bg-orange-500/20"
              >
                <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Timeline / tabs */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {STEPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setI(idx)}
                className={`group rounded-none border px-3 py-2 text-left transition 
                  ${idx === i ? "border-orange-500/60 bg-orange-500/10" : "border-neutral-800 hover:border-neutral-700 bg-neutral-900/40"}`}
              >
                <p className={`text-xs font-semibold ${idx === i ? "text-orange-300" : "text-neutral-400"}`}>{s.id}</p>
                <p className={`mt-1 text-xs ${idx === i ? "text-white" : "text-neutral-300"}`}>{s.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
