"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const growthNavLinks = [
  { label: "Services", href: "#packages" },
  { label: "Offer", href: "https://www.lenabara.com/landing" },
  { label: "Case Studies", href: "#case-study-preview" },
  { label: "How It Works", href: "#how-we-do-it" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [hostname, setHostname] = useState("www.lenabara.com");
  const hasCv = true;
  const isLenaShelepova = hostname.includes("lenashelepova.com");
  const isBusinessSite = !isLenaShelepova;
  const isGrowth = isBusinessSite && (pathname === "/" || pathname === "/growth");
  const isPortfolioHome = pathname === "/" && isLenaShelepova;
  const brandName = isLenaShelepova ? "Yelena Shelepova" : "LenaBara Media";
  const brandSubtitle = isLenaShelepova
    ? "Marketing Analytics & Growth Portfolio"
    : "Performance Marketing UAE";

  useEffect(() => {
    setHostname(typeof window !== "undefined" ? window.location.hostname : "www.lenabara.com");
  }, []);

  return (
    <header id="global-header" className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href={isGrowth ? "/growth" : "/"} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-orange-500 flex items-center justify-center font-bold">{isLenaShelepova ? "YS" : "LB"}</div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide">{brandName}</p>
            <p className="text-xs text-neutral-400">
              {brandSubtitle}
            </p>
          </div>
        </a>
        {isGrowth ? (
          <>
            <nav className="hidden md:flex items-center gap-6">
              {growthNavLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-neutral-200 hover:text-white transition">{l.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 text-sm font-extrabold uppercase tracking-[0.1em] transition">Book a Call</a>
            </nav>
            <MobileMenu isGrowth hasCv={false} />
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm text-neutral-200 hover:text-white transition">Home</a>
              <a href="/about" className="text-sm text-neutral-200 hover:text-white transition">About</a>
              <a href="/work" className="text-sm text-neutral-200 hover:text-white transition">Work</a>
              <a href="/contact" className="text-sm text-neutral-200 hover:text-white transition">Contact</a>
              <a href="/blog" className="text-sm text-neutral-200 hover:text-white transition">Blog</a>
              {hasCv ? (
                <a href="/resume.pdf" className="text-sm text-neutral-200 hover:text-white transition">Download CV</a>
              ) : (
                <span aria-disabled="true" className="text-sm text-neutral-500">Download CV (coming soon)</span>
              )}
            </nav>
            <MobileMenu isPortfolioHome={isPortfolioHome} hasCv={hasCv} />
          </>
        )}
      </div>
    </header>
  );
}
