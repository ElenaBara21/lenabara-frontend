"use client";
import { useState } from "react";

type FAQItem = { q: string; a: string };

export default function FAQList({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-neutral-800 pb-4">
            <button
              className="w-full flex items-start gap-3 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-none bg-orange-500/10 text-orange-400 transition` }>
                {/* Plus icon (changes to minus when open) */}
                {isOpen ? (
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
              <div className="flex-1">
                <p className="text-white font-semibold text-lg">{it.q}</p>
                {isOpen && (
                  <p className="text-neutral-300 text-sm md:text-base mt-2">{it.a}</p>
                )}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

