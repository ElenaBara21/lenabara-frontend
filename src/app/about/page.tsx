import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Page Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">About</h1>
        </div>

        {/* SECTION 1: Behind the Strategy */}
        <section className="mb-20">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Behind the Strategy</h2>
            <div className="max-w-3xl space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
              <p>
                Most UAE businesses don't fail because of bad ads — they fail because there's no system behind them.
              </p>
              <p>
                I help service-based businesses build structured lead generation systems using Meta Ads, Google Ads, and conversion tracking — so every dirham spent is measurable and optimized.
              </p>
              <p>
                Instead of running random campaigns, I focus on:
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>building clear acquisition strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>implementing proper tracking (GA4, Meta Pixel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>optimizing campaigns based on real data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>improving lead quality — not just volume</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: How I Work */}
        <section className="mb-20">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">How I Work</h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">Every project starts with structure.</p>
            
            <div className="space-y-6 mb-8">
              <p className="text-neutral-300 text-base md:text-lg">Before scaling ads, I make sure:</p>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>building clear acquisition strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>implementing proper tracking (GA4, Meta Pixel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>optimizing campaigns based on real data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">•</span>
                  <span>improving lead quality — not just volume</span>
                </li>
              </ul>
            </div>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              This approach allows businesses to move from <span className="text-white font-semibold">guesswork → predictable lead generation</span>.
            </p>
          </div>
        </section>

        {/* SECTION 3: Principles */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Principles Behind My Work</h2>
          <p className="text-center text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            I don't approach marketing as just running ads — I treat it as a system that must produce measurable results.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Performance over vanity metrics",
                desc: "Clicks and impressions don't matter if they don't turn into leads or revenue.",
              },
              {
                title: "Data before decisions",
                desc: "Every campaign is guided by tracking, analytics, and real performance data — not assumptions.",
              },
              {
                title: "Structure before scaling",
                desc: "Before increasing budgets, I make sure tracking, funnels, and strategy are properly built.",
              },
              {
                title: "Transparency always",
                desc: "You should always know where your budget is going and what results it generates.",
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8 hover:border-orange-500/40 hover:bg-orange-500/5 transition"
              >
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">{principle.title}</h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: About Me */}
        <section className="mb-20">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Text + Credentials */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">About Me</h2>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                  I'm Lena Bara (Yelena Shelepova) — a performance marketing strategist working with UAE service businesses.
                </p>

                <div className="bg-black/30 rounded-xl p-6 mb-8">
                  <p className="text-neutral-300 text-sm md:text-base font-medium mb-4">Credentials</p>
                  <ul className="space-y-2 text-neutral-300 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>Meta Certified Media Buyer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>Meta Certified AI &amp; Performance Marketing Specialist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>Google Ads (Search) Certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>PGD in Data Science &amp; Business Analytics — UT Austin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>Currently Pursuing an MA in Marketing Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>BEng + Bachelor's Degree in Finance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>UAE Licensed Marketing Consultancy (RAKEZ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">✓</span>
                      <span>UAE Social Media Advertiser Permit (National Media Authority)</span>
                    </li>
                  </ul>
                </div>

                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  My focus is simple: <span className="text-white font-semibold">build marketing systems that actually drive business results.</span>
                </p>
              </div>

              {/* Right: Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-[300px] h-[380px] md:w-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl border-2 border-orange-500">
                  <Image
                    src="/hero/lena.png"
                    alt="Lena Bara, Performance Marketing Strategist"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 text-center">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              If you're looking for a structured approach to paid ads — let's talk.
            </h3>
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-none font-extrabold uppercase tracking-[0.1em] transition"
            >
              Book Strategy Call
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
