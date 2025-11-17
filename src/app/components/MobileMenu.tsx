"use client";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button
        aria-label="Open menu"
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
        <div className="absolute right-0 mt-2 w-48 bg-neutral-950 border border-neutral-800 rounded shadow-lg z-50">
          <nav className="flex flex-col py-2">
            <a href="https://lenabara.com/blog" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-neutral-200 hover:text-white transition" onClick={() => setOpen(false)}>Blog</a>
            <a href="/work" className="px-4 py-2 text-sm text-neutral-200 hover:text-white transition" onClick={() => setOpen(false)}>Case Studies</a>
            <a href="/about" className="px-4 py-2 text-sm text-neutral-200 hover:text-white transition" onClick={() => setOpen(false)}>About</a>
            <a href="/contact" className="px-4 py-2 text-sm text-neutral-200 hover:text-white transition" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}
