"use client";

import { useEffect, useMemo, useState } from "react";

const ITEMS = [
  "Meta Certified Media Buying Professional",
  "Meta Certified Performance Marketing Specialist",
  "Google Ads Certified",
  "Data Science & Business Analytics (UT Austin)",
  "UAE Licensed Marketing Consultancy (RAKEZ)",
  "Social Media Advertiser Permit (National Media Authority)",
];

const BADGE_MAP: Record<string, { src: string; alt: string }> = {
  "Meta Certified Media Buying Professional": {
    src: "/badges/meta-buyer-badge.png",
    alt: "Meta Certified Media Buying Professional",
  },
  "Meta Certified Performance Marketing Specialist": {
    src: "/badges/meta-performance-badge.png",
    alt: "Meta Certified Performance Marketing Specialist",
  },
  "Google Ads Certified": {
    src: "/badges/google-partner-badge.png",
    alt: "Google Partner",
  },
};

export default function TrustedSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
        return;
      }
      if (window.innerWidth < 1280) {
        setVisibleCount(2);
        return;
      }
      setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = useMemo(() => Math.max(0, ITEMS.length - visibleCount), [visibleCount]);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i === maxIndex ? 0 : i + 1));

  return (
    <section className="mx-auto max-w-7xl px-6 mt-12">
      <div className="relative overflow-visible rounded-none border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500/20 via-orange-400/10 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-gradient-to-tr from-neutral-700/30 via-neutral-600/10 to-transparent blur-2xl" />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <p className="text-white text-2xl md:text-4xl font-extrabold uppercase leading-tight">
              Trusted<br />Performance<br />Marketing Expertise
            </p>
            <p className="mt-3 text-sm text-neutral-400 max-w-xs">
              Certified credentials + real-world campaign wins — so you can trust the strategy, tracking, and execution.
            </p>

          </div>

          <div className="md:col-span-2">
            <div className="relative">
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-none bg-black/30 text-orange-300 hover:bg-black/40"
                aria-label="Previous"
              >
                <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-none bg-black/30 text-orange-300 hover:bg-black/40"
                aria-label="Next"
              >
                <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="mt-6 overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-300"
                  style={{ transform: `translateX(-${index * 324}px)` }}
                >
                  {ITEMS.map((text) => (
                    <div key={text} className="min-w-[300px] rounded-xl border border-white/10 bg-white/5 px-6 py-6">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-300">
                        ✓
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white leading-snug">{text}</p>
                    {BADGE_MAP[text] && (
                      <img
                        src={BADGE_MAP[text].src}
                        alt={BADGE_MAP[text].alt}
                        className="mt-4 h-12 w-auto"
                      />
                    )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-400">Use the arrows to scroll through the credentials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
