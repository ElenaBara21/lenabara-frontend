"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const ITEMS = [
  "Meta Certified Media Buying Professional",
  "Google Ads Certified",
  "Data Science & Business Analytics (UT Austin)",
  "UAE Licensed Marketing Consultancy (RAKEZ)",
  "Social Media Advertiser Permit (National Media Authority)",
];

const BADGES = [
  { src: "/badges/meta-buyer-badge.png", alt: "Meta Certified Media Buying Professional" },
  { src: "/badges/meta-performance-badge.png", alt: "Meta Certified Performance Marketing Specialist" },
  { src: "/badges/meta-performance-badge.png", alt: "Meta Performance Marketing Specialist" },
  { src: "/badges/google-partner-badge.png", alt: "Google Partner" },
];

export default function TrustedSection() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const maxIndex = useMemo(() => Math.max(0, ITEMS.length - 3), []);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i === maxIndex ? 0 : i + 1));
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [maxIndex]);

  return (
    <section className="mx-auto max-w-7xl px-6 mt-12">
      <div className="relative overflow-hidden rounded-none border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
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

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {BADGES.map((badge) => (
                <img
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-14 w-auto shrink-0 opacity-90 transition hover:opacity-100"
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative">
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="h-10 w-10 rounded-none bg-orange-500/10 text-orange-300 hover:bg-orange-500/20 disabled:opacity-40"
                  aria-label="Previous"
                >
                  <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  disabled={index === maxIndex}
                  className="h-10 w-10 rounded-none bg-orange-500/10 text-orange-300 hover:bg-orange-500/20 disabled:opacity-40"
                  aria-label="Next"
                >
                  <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-300"
                  style={{ transform: `translateX(-${index * 260}px)` }}
                >
                  {ITEMS.map((text) => (
                    <div key={text} className="min-w-[240px] rounded-xl border border-white/10 bg-white/5 px-5 py-6">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-300">
                        ✓
                      </div>
                      <p className="mt-4 text-sm font-semibold text-white leading-snug">{text}</p>
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
