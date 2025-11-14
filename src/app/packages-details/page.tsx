import PromoCountdown from "./components/PromoCountdown";
// or with tsconfig paths: import PromoCountdown from "@/components/PromoCountdown";
import { PROMO, isPromoActive } from "./lib/promo";
import { discountRange } from "./lib/pricing";

export const metadata = {
  title: "Packages Details | Lenabara",
  description: "What you get in each package",
};

export default function Page() {
  const promoActiveTop = isPromoActive(PROMO);
  function PriceBlock({ min, max, period }: { min: number; max: number; period: string }) {
  const hasPromo = isPromoActive(PROMO);
  const d = hasPromo ? discountRange(min, max, PROMO.percentOff) : null;

  return (
    <div className="flex flex-col gap-1">
      {hasPromo && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-1 text-[11px] text-orange-300">
            {PROMO.label}: {PROMO.percentOff}% off first {PROMO.discountedMonths} months
          </span>
          <PromoCountdown endsAtISO={PROMO.endsAtISO} />
        </div>
      )}

      <div className="mt-1 flex items-baseline gap-2">
        {hasPromo && (
          <span className="text-neutral-500 line-through">
            AED {min.toLocaleString()}–{max.toLocaleString()}
          </span>
        )}
        <span className="text-white text-xl font-bold">
          {hasPromo
            ? (<>
                AED {d!.min.toLocaleString()}–{d!.max.toLocaleString()}
                <span className="text-sm text-neutral-400"> {period}</span>
              </>)
            : (<>
                AED {min.toLocaleString()}–{max.toLocaleString()}
                <span className="text-sm text-neutral-400"> {period}</span>
              </>)
          }
        </span>
      </div>

      {hasPromo && (
        <p className="text-[11px] text-neutral-500">
          Min term {PROMO.minTermMonths} months. {PROMO.note}
        </p>
      )}
    </div>
  );
}

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-6 text-sm text-neutral-400">
          <a href="/" className="hover:text-orange-400">← Back to Home</a>
        </div>

        <h1 className="text-4xl font-bold text-orange-400 mb-6 text-center">
          Package Details – What You Get
        </h1>

        {promoActiveTop && (
          <div className="mb-10 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-6 py-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-300">
              Limited Time: {PROMO.percentOff}% OFF
            </h2>
            <p className="text-sm text-neutral-300 mt-1">
              First {PROMO.discountedMonths} months · Min term {PROMO.minTermMonths} months
            </p>
            <div className="mt-4 flex justify-center">
              <PromoCountdown endsAtISO={PROMO.endsAtISO} />
            </div>
            {PROMO.note && (
              <p className="text-[11px] text-neutral-400 mt-2">{PROMO.note}</p>
            )}
          </div>
        )}

        {/* Packages Overview */}
        <section className="mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Pilot Pack", tag: "Test & Trust", href: "#pilot", min: 2500, max: 4000, period: " / 30 days", features: ["GA4 + Looker tracking","Landing page checkup","Campaign hygiene setup"] },
              { name: "Growth System", tag: "Clicks → Clients", href: "#growth", featured: true, min: 6000, max: 9000, period: " / month", features: ["Funnel-based campaigns","Creative testing cadence","Weekly optimization"] },
              { name: "Performance Partner", tag: "Data-Driven Domination", href: "#partner", min: 12000, max: 20000, period: " / month", features: ["Advanced audience strategy","Creative production","Scale & LTV tactics"] },
            ].map((p) => {
              const from = isPromoActive(PROMO) ? discountRange(p.min, p.max, PROMO.percentOff).min : p.min;
              return (
              <div
                key={p.name}
                className={`group relative rounded-2xl border p-6 transition will-change-transform \
                  ${p.featured ?
                    'border-orange-500/40 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(249,115,22,0.25)] hover:shadow-[0_0_0_2px_rgba(249,115,22,0.35)] hover:-translate-y-0.5' :
                    'border-neutral-800 bg-neutral-900/40 hover:border-orange-500/30 hover:bg-neutral-900/60 hover:-translate-y-0.5'}
                `}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white w-full text-center">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-base text-neutral-400 mt-1 text-center">{p.tag}</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[12px] text-orange-300">
                    From AED {from.toLocaleString()}<span className="text-neutral-500">{p.period}</span>
                  </span>
                  {isPromoActive(PROMO) && (
                    <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/10 px-2 py-0.5 text-[10px] text-orange-300">
                      Save {PROMO.percentOff}%
                    </span>
                  )}
                </div>

                <ul className="mt-4 text-sm md:text-base text-neutral-300 space-y-2">
                  {p.features.map((t: string) => (
                    <li key={t} className="flex items-center justify-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300">
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 10.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-neutral-300">{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-1 gap-2">
                  <a href={p.href} className="w-full text-center rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-2.5 font-medium text-neutral-200 transition hover:bg-neutral-900 hover:border-neutral-700">
                    See details
                  </a>
                  <a href="/#contact" className={`w-full text-center rounded-xl px-4 py-2.5 font-medium text-white transition ${p.featured ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-600/90 hover:bg-orange-600'}`}>
                    Request this package
                  </a>
                </div>
              </div>
            );})}
          </div>
        </section>

        {/* 1) Pilot Pack */}
<section id="pilot" className="mb-16 scroll-mt-24">
  <h2 className="text-3xl font-semibold text-white">
    1. Pilot Pack – “Test & Trust”
  </h2>
  <p className="text-neutral-300 mt-2 text-lg">...</p>

  <div className="mt-6 space-y-4 text-neutral-200 text-sm">...</div>

  {/* PRICE + TIMER + NOTES */}
  <div className="mt-6">
    <PriceBlock min={2500} max={4000} period=" / 30 days" />
  </div>
</section>

{/* 2) Growth System */}
<section id="growth" className="mb-16 scroll-mt-24">
  <h2 className="text-3xl font-semibold text-white">
    2. Growth System – “Clicks → Clients”
  </h2>
  <p className="text-neutral-300 mt-2 text-lg">...</p>

  <div className="mt-6 space-y-4 text-neutral-200 text-sm">...</div>

  <div className="mt-6">
    <PriceBlock min={6000} max={9000} period=" / month" />
  </div>
</section>

{/* 3) Performance Partner */}
<section id="partner" className="scroll-mt-24">
  <h2 className="text-3xl font-semibold text-white">
    3. Performance Partner – “Data-Driven Domination”
  </h2>
  <p className="text-neutral-300 mt-2 text-lg">...</p>

  <div className="mt-6 space-y-4 text-neutral-200 text-sm">...</div>

  <div className="mt-6">
    <PriceBlock min={12000} max={20000} period=" / month" />
  </div>
</section>

        {/* Why Our Prices Are Higher Than Freelancers */}
<section className="bg-neutral-900/40 border-y border-neutral-800 mt-16 rounded-2xl">
  <div className="max-w-5xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold text-orange-400 mb-4">
      Why Our Prices Are Higher Than Freelancers
    </h2>
    <p className="text-neutral-300 text-lg mb-6">
      We don’t sell “ad clicks” — we build complete, measurable growth systems.
    </p>

    <div className="space-y-3 text-sm text-neutral-300">
      <p><span className="text-orange-400 font-semibold">• Strategy-first approach:</span> Every engagement starts with clear KPIs and a roadmap, not random campaigns.</p>
      <p><span className="text-orange-400 font-semibold">• Full transparency:</span> You get live dashboards, GA4 tracking, and weekly WhatsApp updates with Loom reviews.</p>
      <p><span className="text-orange-400 font-semibold">• Data ownership:</span> All ad accounts, dashboards, and audiences belong to you — always.</p>
      <p><span className="text-orange-400 font-semibold">• Bilingual precision:</span> Arabic + English creatives crafted by native copywriters for cultural relevance across the GCC.</p>
      <p><span className="text-orange-400 font-semibold">• Consistent optimization:</span> We monitor, iterate, and scale — not just set and forget.</p>
    </div>

    <p className="mt-6 text-neutral-400 text-sm">
      Our pricing reflects transparency, hands-on management, and proven performance — 
      the exact things most low-cost providers skip.
    </p>
  </div>
</section>

      </div>
    </main>
  );
}
