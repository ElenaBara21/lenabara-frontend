"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  isPortfolioHome?: boolean;
  hasCv?: boolean;
  isGrowth?: boolean;
};

const growthNavLinks = [
  { label: "Services", href: "#packages" },
  { label: "Offer", href: "https://www.lenabara.com/landing" },
  { label: "Case Studies", href: "#case-study-preview" },
  { label: "How It Works", href: "#how-we-do-it" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu({
  isPortfolioHome = false,
  hasCv = false,
  isGrowth = false,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {open && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black">
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
              {isGrowth ? (
                <>
                  {growthNavLinks.map((l) => (
                    <a key={l.href} href={l.href} className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>{l.label}</a>
                  ))}
                  <a href="#contact" className="mt-2 inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em]" onClick={() => setOpen(false)}>Book a Call</a>
                </>
              ) : (
                <>
                  <a href="/" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Home</a>
                  <a href="/about" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>About</a>
                  <a href="/work" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Work</a>
                  <a href="/contact" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Contact</a>
                  <a href="/blog" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Blog</a>
                  <div className="pt-2 text-center">
                    <p className="text-xl font-semibold tracking-wide text-white">Yelena Shelepova</p>
                    <p className="text-xs text-neutral-400">Marketing Analytics &amp; Growth Portfolio</p>
                  </div>
                  {hasCv ? (
                    <a href="/resume.pdf" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-white" onClick={() => setOpen(false)}>Download CV</a>
                  ) : (
                    <span aria-disabled="true" className="text-2xl font-extrabold uppercase tracking-[0.08em] text-neutral-500">Download CV (coming soon)</span>
                  )}
                </>
              )}
            </nav>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
