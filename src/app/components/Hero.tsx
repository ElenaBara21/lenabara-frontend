"use client";

export default function Hero() {
  return (
    <section id="offer" className="relative">
      <div className="relative mx-auto w-full max-w-[1200px] h-[500px]">
        <div className="absolute inset-0 bg-neutral-950 z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />

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

        {/* Headline block centered with equal side margins */}
        <div className="absolute inset-x-0 top-[55%] -translate-y-1/2 z-30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-[920px] mx-auto text-center">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 leading-[1.05] uppercase">
                <span className="block">Performance Marketing & Lead Generation Systems</span>
                <span className="block">for UAE Service Businesses</span>
              </h4>
              <p className="mt-4 text-white text-base md:text-lg max-w-xl mx-auto">
                Meta Ads &bull; Google Ads &bull; Conversion Tracking built to generate measurable leads.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-none bg-orange-500 px-8 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-neutral-950 transition hover:bg-orange-400"
                >
                  Book Free Strategy Call
                </a>
                <a
                  href="/work"
                  className="inline-flex items-center justify-center rounded-none border border-white/30 bg-white/10 px-8 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-white/20"
                >
                  See Case Studies
                </a>
              </div>
              {/* Barcode removed as requested */}
            </div>
          </div>
        </div>

        {/* Preview removed as requested */}
      </div>
    </section>
  );
}
