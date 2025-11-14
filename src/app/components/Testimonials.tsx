"use client";
import { useState } from "react";

type TItem = {
  quote: string;
  author: string;
  role?: string;
  location?: string;
};

const ITEMS: TItem[] = [
  {
    quote:
      "We finally understand where our marketing budget goes. Lena set up our Meta campaigns and dashboard — within a month, we saw a 2.3x return. She’s transparent and extremely responsive.",
    author: "Ahmed R.",
    role: "Owner of Glow Beauty Lounge",
    location: "Dubai",
  },
  {
    quote:
      "After switching to Lenabara Media, our Google Ads cost per lead dropped by 40%. The difference in reporting and communication is day and night.",
    author: "Zain M.",
    role: "Sales Manager, Property Hub UAE",
  },
  {
    quote:
      "Professional, certified, and data-driven — exactly what we were missing before. Every dirham spent is tracked and explained.",
    author: "Laila A.",
    role: "Founder, FitMe Studio",
    location: "Ras Al Khaimah",
  },
  {
    quote:
      "Lena created our landing page and connected it to Google Analytics and Meta Ads. Everything looks clean, loads fast, and we can finally see which campaigns bring sales.",
    author: "Priya S.",
    role: "Marketing Coordinator, Bloom & Co",
  },
  {
    quote:
      "A boutique agency that truly cares. I like that I can talk directly to the person managing my campaigns — not a random assistant.",
    author: "Khaled H.",
    role: "Managing Director, Nova Events",
  },
];

export default function Testimonials({ imageSrc = "/hero/testimonials.jpg" }: { imageSrc?: string }) {
  const [i, setI] = useState(0);
  const t = ITEMS[i];

  const next = () => setI((v) => (v + 1) % ITEMS.length);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);

  return (
    <div className="grid md:grid-cols-2 gap-6 items-stretch">
      {/* Left visual (optional image) */}
      <div className="rounded-none border border-neutral-800 bg-cover bg-center min-h-[280px] md:min-h-[380px]"
           style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Right carousel card */}
      <div className="rounded-none border border-neutral-800 bg-orange-500 p-6 md:p-8 relative">
        <div className="text-black text-xl md:text-2xl font-extrabold">★★★★★</div>
        <blockquote className="mt-3 text-white/95 text-lg md:text-xl leading-relaxed">“{t.quote}”</blockquote>
        <p className="mt-4 text-black font-semibold">— {t.author}{t.role ? `, ${t.role}` : ''}{t.location ? ` (${t.location})` : ''}</p>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          <button aria-label="Previous" onClick={prev} className="h-9 w-9 grid place-items-center bg-orange-400/30 hover:bg-orange-400/50 text-black rounded-none">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Next" onClick={next} className="h-9 w-9 grid place-items-center bg-orange-400/30 hover:bg-orange-400/50 text-black rounded-none">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
