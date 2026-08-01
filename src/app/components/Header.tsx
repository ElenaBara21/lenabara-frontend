"use client";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isPortfolioHome = pathname === "/";
  const hasCv = true;

  return (
    <header id="global-header" className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-orange-500 flex items-center justify-center font-bold">LB</div>
          <div className="leading-tight">
            {isPortfolioHome ? (
              <>
                <p className="font-semibold tracking-wide">YELENA SHELEPOVA</p>
                <p className="text-xs text-neutral-400">Marketing Analytics &amp; Growth Portfolio</p>
              </>
            ) : (
              <>
                <p className="font-semibold tracking-wide">LENABARA. | Boutique Performance Marketing Agency</p>
                <p className="text-xs text-neutral-400">Performance. Transparency. Expertise. UAE Insight</p>
              </>
            )}
          </div>
        </a>
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm text-neutral-200 hover:text-white transition">Home</a>
          <a href="/about" className="text-sm text-neutral-200 hover:text-white transition">About</a>
          <a href="/work" className="text-sm text-neutral-200 hover:text-white transition">Work</a>
          <a href="/contact" className="text-sm text-neutral-200 hover:text-white transition">Contact</a>
          <a href="/blog" className="text-sm text-neutral-200 hover:text-white transition">Blog</a>
          {isPortfolioHome && (
            hasCv ? (
              <a href="/resume.pdf" className="text-sm text-neutral-200 hover:text-white transition">Download CV</a>
            ) : (
              <span aria-disabled="true" className="text-sm text-neutral-500">Download CV (coming soon)</span>
            )
          )}
        </nav>
        {/* Mobile burger menu */}
        <MobileMenu isPortfolioHome={isPortfolioHome} hasCv={hasCv} />
        {!isPortfolioHome && (
          <a
            href="#contact"
            className="hidden md:inline-block bg-orange-500 text-black px-4 py-2 rounded-none text-sm font-extrabold uppercase tracking-[0.1em] hover:bg-orange-600 transition cta-book-audit"
          >
            BOOK FREE AUDIT
          </a>
        )}
      </div>
    </header>
  );
}
