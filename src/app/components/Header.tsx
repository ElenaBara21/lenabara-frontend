"use client";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-orange-500 flex items-center justify-center font-bold">LB</div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide">LENABARA. | Boutique Performance Marketing Agency</p>
            <p className="text-xs text-neutral-400">Performance. Transparency. Expertise. UAE Insight</p>
          </div>
        </div>
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="https://lenabara.com/blog" className="text-sm text-neutral-200 hover:text-white transition" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://lenabara.com/work" className="text-sm text-neutral-200 hover:text-white transition" target="_blank" rel="noopener noreferrer">Case Studies</a>
          <a href="https://lenabara.com/about" className="text-sm text-neutral-200 hover:text-white transition" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://lenabara.com/contact" className="text-sm text-neutral-200 hover:text-white transition" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
        {/* Mobile burger menu */}
        <MobileMenu />
        <a
          href="#contact"
          className="hidden md:inline-block bg-orange-500 text-black px-4 py-2 rounded-none text-sm font-extrabold uppercase tracking-[0.1em] hover:bg-orange-600 transition"
        >
          BOOK FREE AUDIT
        </a>
      </div>
    </header>
  );
}
