"use client";
import { useState } from "react";

type Item = {
  q: string;
  a: React.ReactNode;
  defaultOpen?: boolean;
};

export default function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i || it.defaultOpen;
        return (
          <div key={i} className="bg-neutral-900/40">
            <button
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-neutral-900/60"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold text-white">{it.q}</span>
              <svg
                className={`h-5 w-5 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-neutral-300 text-sm">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

