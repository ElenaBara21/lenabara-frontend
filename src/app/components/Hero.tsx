"use client";
import { useEffect, useState } from "react";

export default function Hero({ src = "/hero/lenabara-hero.jpg.png" }: { src?: string }) {
  const [bgPath, setBgPath] = useState<string>(src);
  const [hasImage, setHasImage] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    function tryLoad(cands: string[], onSuccess: (p: string) => void, onFail?: () => void) {
      const [head, ...rest] = cands;
      if (!head) return onFail && onFail();
      const test = new Image();
      test.onload = () => {
        if (!mounted) return;
        onSuccess(head);
      };
      test.onerror = () => tryLoad(rest, onSuccess, onFail);
      test.src = head;
    }

    tryLoad(
      [src, "/hero/lenabara-hero.jpg", "/hero/lenabara-hero.png", "/hero/lenabara-hero.JPG"],
      (p) => {
        setBgPath(p);
        setHasImage(true);
      },
      () => setHasImage(false)
    );

    return () => { mounted = false; };
  }, [src]);

  return (
    <section id="offer" className="relative">
      <div className="relative mx-auto w-full max-w-[1200px] h-[500px]">
        {hasImage ? (
          <>
            <img
              src={bgPath}
              alt="Lenabara hero"
              className="absolute inset-0 h-full w-full object-cover z-0"
              style={{ objectPosition: "center 25%" }}
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </>
        ) : (
          <div className="absolute inset-0 bg-neutral-950 z-0" />
        )}

        {/* Corner accents (always visible) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {[
            "top-6 left-6", // TL
            "top-6 right-6 rotate-90", // TR
            "bottom-6 right-6 rotate-180", // BR
            "bottom-6 left-6 -rotate-90", // BL
          ].map((cls, i) => (
            <div key={i} className={`absolute ${cls} h-10 w-10`}>
              <div className="absolute top-0 left-0 h-10 w-[2px] bg-orange-500" />
              <div className="absolute top-0 left-0 h-[2px] w-10 bg-orange-500" />
            </div>
          ))}
        </div>

        {/* Top labels */}
        <div className="absolute top-8 left-8 md:top-10 md:left-12 text-orange-400 z-30">
          <p className="text-xs md:text-sm tracking-[0.2em] leading-snug uppercase">BOUTIQUE PERFORMANCE</p>
          <p className="text-xs md:text-sm tracking-[0.2em] leading-snug uppercase">MARKETING AGENCY</p>
        </div>
        <div className="absolute top-8 right-8 md:top-10 md:right-12 z-30">
          <p className="text-xl md:text-3xl font-extrabold text-orange-500 tracking-wide">LENABARA.</p>
        </div>

        {/* Headline block centered with equal side margins, nudged down */}
        <div className="absolute inset-x-0 top-[78%] md:top-[80%] -translate-y-1/2 z-30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-[920px] mx-auto text-center">
              <p className="text-white text-xs md:text-sm mb-2 tracking-[0.2em] leading-snug uppercase">Meta & Google Ads + Landing Pages + Advanced Tracking (GA4 & GTM)</p>
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-[1.05] uppercase">
                <span className="block whitespace-nowrap">Structured Lead Generation Systems for UAE Service Businesses</span>
              </h4>
              {/* Barcode removed as requested */}
            </div>
          </div>
        </div>

        {/* Preview removed as requested */}
      </div>
    </section>
  );
}
