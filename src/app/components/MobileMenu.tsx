"use client";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black">
          <div className="flex h-full flex-col px-6 py-6">
            <div className="flex items-center justify-end">
              <button
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => setOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              <a href="/" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Home</a>
              <a href="/about" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>About</a>
              <a href="/work" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Case Studies</a>
              <a href="/contact" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Contact</a>
              <a href="/blog" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Blog</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
