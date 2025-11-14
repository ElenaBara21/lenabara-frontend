// app/page.tsx (reconstructed)
import PromoCountdown from "./packages-details/components/PromoCountdown";
import { PROMO, isPromoActive } from "./packages-details/lib/promo";
import BudgetCalculator from "./packages-details/components/BudgetCalculator";
import LeadForm from "./components/LeadForm";
import DownloadKitModal from "./components/DownloadKitModal";
import Hero from "./components/Hero";
import HowWeDoIt from "./components/HowWeDoIt";
import Testimonials from "./components/Testimonials";
import Collapsible from "./components/Collapsible";
import FAQList from "./components/FAQList";
import { FAQ_GROUPS } from "./content/faq";

export default function LandingPage() {
  const promoActive = isPromoActive(PROMO);
  // Standout pillars for the "What Makes LenaBara Stand Out" section
  const STANDOUT = [
    {
      t: "PERFORMANCE-FIRST",
      q: "Everything we do is built to measure — from campaign to conversion.",
      s: "No vanity metrics. Every dirham is tracked, analyzed, and optimized for growth.",
    },
    {
      t: "TRANSPARENT",
      q: "No hidden fees. You own your data, your accounts, and your results.",
      s: "Your business, your numbers — we just help you make them work smarter.",
    },
    {
      t: "BOUTIQUE & PERSONAL",
      q: "You’ll never be one of 50 accounts. I personally monitor every campaign.",
      s: "Expect real communication, strategic feedback, and proactive optimization.",
    },
    {
      t: "STRATEGIC & ANALYTICAL",
      q: "Your campaigns are guided by insights, not assumptions — every move backed by research and metrics",
      s: "Research-led planning, testing frameworks, and attribution guide decisions.",
    },
    {
      t: "CERTIFIED & CREDIBLE",
      q: "Meta Certified Media Buyer | Google Ads Specialist | Master’s in Marketing",
      s: "You’re partnering with a professional who knows both strategy and execution.",
    },
    {
      t: "UAE LOCAL. GLOBAL STANDARD",
      q: "Bilingual campaigns crafted for the GCC — with global best practices.",
      s: "Arabic + English creatives, cultural nuance, and performance discipline.",
    },
  ];
  const STANDOUT_UPDATED = STANDOUT.map((x) =>
    x.t === "CERTIFIED & CREDIBLE"
      ? {
          ...x,
          q:
            "Meta Certified Media Buyer | Google Search Ads Certified | Certified in Data Science & Business Analytics | Master's in Marketing (in progress)",
          s:
            "Partner with a professional who combines strategy, creativity, and data analytics for measurable growth.",
        }
      : x
  );
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-orange-500 flex items-center justify-center font-bold">LB</div>
            <div className="leading-tight">
              <p className="font-semibold tracking-wide">LENABARA. | Boutique Performance Marketing Agency</p>
              <p className="text-xs text-neutral-400">Performance. Transparency. Expertise. UAE Insight</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="https://wa.me/971563256848?text=Hi%20Lena!%20I%E2%80%99d%20like%20to%20book%20a%20free%20ads%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-orange-500 text-black px-4 py-2 rounded-none text-sm font-extrabold tracking-[0.1em] hover:bg-orange-600 transition"
          >
            Book Free Audit
          </a>
        </div>
      </header>

      {/* Hero */}
      <div id="home" />
      <Hero />

      {/* Primary CTA below hero */}
      <section className="mx-auto max-w-7xl px-6 mt-[4%] mb-[5%]">
        <div className="flex flex-wrap justify-center">
          <a
            href="#packages"
            className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.2em]"
          >
            SEE PACKAGES
          </a>
        </div>
      </section>

      {/* Free Resource for UAE Businesses (inserted above Stand Out) */}
      <section id="free-resource" className="mx-auto max-w-7xl px-6 mt-12">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-10 text-center">
          <div className="mx-auto max-w-2xl space-y-3 md:space-y-4">
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.08em] text-white">Free Resource for UAE Businesses</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl leading-[1.1] font-extrabold uppercase text-orange-500">Is Your Business Ready for Paid Ads?</h3>
            <div className="mx-auto h-px w-16 bg-orange-500/60" />
            <p className="text-white text-sm md:text-base leading-relaxed mx-auto">
              Find out in 10 minutes if your business is ready for high-performance ads — and what to fix first
            </p>
            <div className="pt-1">
              <DownloadKitModal />
            </div>
            {/* Learn more collapsible */}
            <Collapsible summary="Learn more">
              <div className="text-left mx-auto max-w-xl">
                <p className="font-semibold text-white">By downloading, you’ll get:</p>
                <ul className="mt-2 space-y-1 list-none">
                  <li>✅ A 12-point readiness checklist</li>
                  <li>✅ A smart budget & ROAS calculator</li>
                  <li>✅ UAE-specific creative and compliance tips</li>
                </ul>
                <p className="mt-3 text-neutral-200">
                  Exclusive invite for a free 15-min professional review with Lena Bara, Meta-Certified Media Buyer & Google Search Ads Certified.
                </p>
              </div>
            </Collapsible>
            {/* Small print */}
            <p className="text-xs text-neutral-400">
              No spam. No generic tips — just insights tailored for UAE businesses ready to scale.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes LenaBara Stand Out */}
      <section id="standout" className="mx-auto max-w-7xl px-6 mt-12">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">
          What Makes LenaBara Stand Out
        </h4>
        <div className="rounded-2xl border border-neutral-800 bg-[#100C0B] p-6 md:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
            {[
              {
                t: "PERFORMANCE-FIRST",
                q: "Everything we do is built to measure — from campaign to conversion.",
                s: "No vanity metrics. Every dirham is tracked, analyzed, and optimized for growth.",
              },
              {
                t: "TRANSPARENT",
                q: "No hidden fees. You own your data, your accounts, and your results.",
                s: "Your business, your numbers — we just help you make them work smarter.",
              },
              {
                t: "BOUTIQUE & PERSONAL",
                q: "You’ll never be one of 50 accounts. I personally monitor every campaign.",
                s: "Expect real communication, strategic feedback, and proactive optimization.",
              },
              {
                t: "CERTIFIED & CREDIBLE",
                q: "Meta Certified Media Buyer | Google Ads Specialist | Master’s in Marketing",
                s: "You’re partnering with a professional who knows both strategy and execution.",
              },
              {
                t: "UAE LOCAL. GLOBAL STANDARD",
                q: "Bilingual campaigns crafted for the GCC — with global best practices.",
                s: "Arabic + English creatives, cultural nuance, and performance discipline.",
              },
            ].map((n, i) => (
              <div
                key={i}
                className={`relative ${["-rotate-2","rotate-2","-rotate-1","rotate-1","rotate-0"][i % 5]} transform-gpu will-change-transform transition-transform duration-200 ease-out hover:rotate-0 hover:scale-[1.02] ${i===3 ? 'lg:col-start-2' : ''} ${i===4 ? 'lg:col-start-3' : ''}`}
              >
                <div className="rounded-none border border-neutral-700 bg-[#100C0B] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-5">
                  <p className="font-medium tracking-wide text-orange-400 text-2xl md:text-3xl">{n.t}</p>
                  <p className="mt-2 italic font-normal">{n.q}</p>
                  <p className="mt-2 text-sm md:text-base font-normal">{n.s}</p>
                </div>
              </div>
            ))}
          </div>

          {/* New grid with Strategic & Analytical added (replacing hidden one) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STANDOUT_UPDATED.map((n, i) => (
              <div
                key={i}
                className={`relative ${["-rotate-2","rotate-2","-rotate-1","rotate-1","rotate-0"][i % 5]} transform-gpu will-change-transform transition-transform duration-200 ease-out hover:rotate-0 hover:scale-[1.02]`}
              >
                <div className="rounded-none border border-neutral-700 bg-[#100C0B] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-5">
                  <p className="font-medium tracking-wide text-orange-400 text-2xl md:text-3xl">{n.t}</p>
                  <p className="mt-2 italic font-normal">{n.q}</p>
                  <p className="mt-2 text-sm md:text-base font-normal">{n.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance. Transparency. Expertise */}
      

      {/* UAE Certified Intro */}
      <section id="uae-certified" className="mx-auto max-w-7xl px-6 mt-12">
        <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-orange-500 mb-6 text-center uppercase">
          Performance. Transparency. Expertise. UAE Insight
        </h4>
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <div className="relative min-h-[320px] md:min-h-[420px]">
            {/* Vertical orange rectangle background */}
            <div className="absolute inset-y-0 left-0 w-40 md:w-48 bg-orange-500" />
            {/* Content on top */}
            <div className="relative pl-10 md:pl-14 pr-4 mt-28 md:mt-40">
              <p className="text-white text-sm md:text-base leading-relaxed max-w-[620px]">
                <span className="font-semibold">Lena Bara Boutique Performance Marketing Agency</span> combines global standards with local UAE expertise. Every campaign is personally managed by Lena Bara — bringing together strategic media buying, data analytics, and marketing insight to deliver measurable growth and complete transparency.
              </p>
              <div className="mt-5 h-0.5 w-24 bg-white/80" />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] border border-neutral-800">
            <div
              className="absolute inset-0 bg-cover bg-right"
              style={{ backgroundImage: "url(/hero/my-photo.png)", backgroundPosition: "right center" }}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
            Book Free 15-min Call
          </a>
          <a href="#packages" className="bg-neutral-800 hover:bg-neutral-700 transition text-white px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
            See Packages
          </a>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto max-w-7xl px-6 mt-10">
        <h2 className="text-[40px] md:text-[56px] tracking-tight font-extrabold text-white mb-4 text-center">PACKAGES</h2>

        {promoActive && (
          <div className="mb-6 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-6 py-6 text-center">
            <h4 className="text-2xl md:text-3xl font-extrabold text-white uppercase">Limited Time: 20% OFF for a Pilot Launch Package</h4>
            <p className="text-sm text-neutral-300 mt-1">First {PROMO.discountedMonths} months · Min term {PROMO.minTermMonths} months</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-neutral-300">Ends in</p>
            <div className="mt-1 flex justify-center">
              <PromoCountdown endsAtISO={PROMO.endsAtISO} />
            </div>
            <p className="text-[11px] text-neutral-400 mt-2">Ad spend billed separately. Promo valid till 15.01.2026. New clients only.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: Pilot Launch (big) */}
          <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 px-3 py-1 border border-orange-500/60 rounded-full text-[10px] tracking-wide uppercase text-orange-400">Save 1,400 AED</div>
            <p className="text-orange-400 font-extrabold text-2xl md:text-3xl tracking-wide text-center">PILOT<br className='md:hidden'/> LAUNCH</p>

            <div className="mt-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 text-center">
              <p className="text-orange-400 font-extrabold">Launch Offer</p>
              <p className="text-white font-semibold">AED 2,500 <span className="text-neutral-300 font-normal">(Founder's Offer &mdash; Save AED 1,400)</span></p>
              <p className="text-xs text-neutral-400">(Regular price AED 3,900 | Only 5 spots available at this rate)</p>
            </div>

            <div className="mt-3 space-y-3 text-neutral-300">
              <p>
                <span className="text-orange-400 font-semibold">Ideal for:</span>{" "}
                <span className="text-neutral-300">UAE businesses or startups launching Meta or Google Ads for the first time and want to see measurable results before scaling.</span>
              </p>


              <Collapsible summary="Learn more">
                <div className="space-y-2">
                  <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Duration:</span> 2–3 weeks</p>
                  <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Ad spend:</span> Billed separately</p>
                  <div className="pt-1">
                    <p className="text-orange-400 font-semibold">What’s Included</p>
                    <ul className="mt-2 space-y-1 text-sm md:text-base">
                      <li>✅ One platform (Meta or Google)</li>
                      <li>✅ Campaign setup (1–2 campaigns)</li>
                      <li>✅ Pixel + GA4 conversion tracking setup</li>
                      <li>✅ 2 optimization rounds during campaign</li>
                      <li>✅ Mini performance report at the end of the period</li>
                      <li>✅ WhatsApp + email support</li>
                    </ul>
                  </div>
                  <div className="pt-1">
                    <p className="text-orange-400 font-semibold">Goal</p>
                    <p className="text-neutral-300 text-sm md:text-base mt-1">Deliver fast, data-driven results so you can test your market, validate your offer, and see how professional media buying improves performance before committing long-term.</p>
                  </div>
                </div>
              </Collapsible>
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href="https://wa.me/971563256848?text=Hi%20Lena!%20I%E2%80%99m%20ready%20to%20launch%20my%20campaign%20and%20would%20like%20to%20discuss%20the%20next%20steps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]"
              >
                Launch My Campaign →
              </a>
            </div>
          </div>

          {/* Right column: Growth + Performance cards */}
          <div className="grid gap-6">
            {/* Growth System (updated to match Pilot style) */}
            <div className="relative rounded-3xl border border-orange-500/40 bg-neutral-900/50 p-6 md:p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 px-3 py-1 border border-orange-500/60 rounded-full text-[10px] tracking-wide uppercase text-orange-400">Most Popular Choice</div>
              <p className="text-orange-400 font-extrabold text-2xl md:text-3xl tracking-wide text-center">GROWTH<br className='md:hidden'/> SYSTEM</p>

              {/* Investment panel */}
              <div className="mt-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 text-center">
                <p className="text-orange-400 font-extrabold">Investment</p>
                <p className="text-white font-semibold">AED 5,000</p>
                <p className="text-xs text-neutral-400">(Optional: Add-on tracking dashboard or landing page available)</p>
              </div>

              <div className="mt-3 space-y-3 text-neutral-300">
                <p><span className="text-orange-400 font-semibold">Ideal for:</span> UAE businesses that have already tested ads and now want to scale results and increase ROI with advanced optimization and analytics.</p>

                <Collapsible summary="Learn more">
                  <div className="space-y-2">
                    <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Duration:</span> 4–6 weeks</p>
                    <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Ad spend:</span> Billed separately</p>
                    <div className="pt-1">
                      <p className="text-orange-400 font-semibold">What’s Included</p>
                      <ul className="mt-2 space-y-1 text-sm md:text-base">
                        <li>✅ Multi-platform setup (Meta and/or Google Ads)</li>
                        <li>✅ Up to 4 campaigns with strategic funnel mapping</li>
                        <li>✅ Advanced audience segmentation and A/B testing</li>
                        <li>✅ Conversion tracking + GA4 event setup</li>
                        <li>✅ Weekly optimization & performance review</li>
                        <li>✅ Looker Studio (Data Studio) dashboard for key metrics</li>
                        <li>✅ WhatsApp + email reporting and insights</li>
                      </ul>
                    </div>
                    <div className="pt-1">
                      <p className="text-orange-400 font-semibold">Goal</p>
                      <p className="text-neutral-300 text-sm md:text-base mt-1">Scale what works. The Growth System is designed to amplify winning campaigns, refine audiences, and boost conversions using continuous testing and analytics.</p>
                    </div>
                  </div>
                </Collapsible>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/971563256848?text=Hi%20Lena!%20I%E2%80%99d%20like%20to%20book%20a%20strategy%20call%20to%20discuss%20my%20marketing%20goals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]"
                  data-track="services_growth_call"
                >
                  Book Strategy Call →
                </a>
              </div>
            </div>

            {/* Performance Partner (updated) */}
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
              <p className="text-orange-400 font-extrabold text-2xl md:text-3xl tracking-wide text-center">PERFORMANCE<br className='md:hidden'/> PARTNER</p>

              {/* Investment panel */}
              <div className="mt-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 text-center">
                <p className="text-orange-400 font-extrabold">Investment</p>
                <p className="text-white font-semibold">AED 9,000 / month</p>
                <p className="text-xs text-neutral-400">(Custom plans available for higher ad volumes)</p>
              </div>

              <div className="mt-3 space-y-3 text-neutral-300">
                <p><span className="text-orange-400 font-semibold">Ideal for:</span> Established UAE businesses ready for a long-term performance marketing partnership — with full-funnel strategy, reporting, and dedicated campaign management.</p>

                <Collapsible summary="Learn more">
                  <div className="space-y-2">
                    <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Duration:</span> Monthly retainer (minimum 3 months)</p>
                    <p className="uppercase text-center"><span className="text-orange-400 font-semibold">Ad spend:</span> Billed separately</p>
                    <div className="pt-1">
                      <p className="text-orange-400 font-semibold">What’s Included</p>
                      <ul className="mt-2 space-y-1 text-sm md:text-base">
                        <li>✅ Complete Meta + Google Ads ecosystem management</li>
                        <li>✅ Advanced conversion tracking & cross-platform attribution</li>
                        <li>✅ Full-funnel campaign strategy (TOFU, MOFU, BOFU)</li>
                        <li>✅ Landing page & creative consultation</li>
                        <li>✅ Weekly reporting + monthly strategy meeting</li>
                        <li>✅ Continuous scaling, A/B testing & budget optimization</li>
                        <li>✅ Priority WhatsApp & call support</li>
                      </ul>
                    </div>
                    <div className="pt-1">
                      <p className="text-orange-400 font-semibold">Goal</p>
                      <p className="text-neutral-300 text-sm md:text-base mt-1">Act as your dedicated media partner — focused on performance, transparency, and measurable business growth.</p>
                    </div>
                  </div>
                </Collapsible>
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="https://wa.me/971563256848?text=Hi%20Lena!%20I%E2%80%99m%20interested%20in%20your%20Performance%20Partner%20program%20and%20would%20like%20to%20apply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]"
                  data-track="services_partner_apply"
                >
                  Apply for Partnership →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Add-on Options (full width) */}
      <section id="addons" className="mx-auto max-7xl px-6 mt-12">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left intro copy */}
            <div>
              <p className="text-orange-400 font-extrabold text-2xl md:text-3xl tracking-wide uppercase leading-tight">Add‑On Options</p>
              <p className="mt-2 text-neutral-400 text-sm md:text-base max-w-md">Enhance your package with conversion‑focused assets, better analytics, and clear strategy deliverables — all aligned to your brand.</p>
            </div>
            {/* Right grid of cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <a href="#contact" aria-label="Ask about landing page add-on" className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition transform hover:scale-[1.02] hover:border-orange-500/60 hover:bg-orange-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-orange-300">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 5h12M4 9h8M4 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold">Landing page design & build</p>
                    <p className="text-neutral-400 text-xs mt-1">High‑converting page tailored to your offer and audience.</p>
                  </div>
                </div>
              </a>
              {/* Card 2 */}
              <a href="#contact" aria-label="Ask about social media add-on" className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition transform hover:scale-[1.02] hover:border-orange-500/60 hover:bg-orange-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-orange-300">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold">Social media</p>
                    <p className="text-neutral-400 text-xs mt-1">Scroll‑stopping static + video variants for testing.</p>
                  </div>
                </div>
              </a>
              {/* Card 3 */}
              <a href="#contact" aria-label="Ask about analytics dashboard add-on" className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4 transition transform hover:scale-[1.02] hover:border-orange-500/60 hover:bg-orange-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-orange-300">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14h12M4 10h8M4 6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold">Analytics dashboard (Looker Studio)</p>
                    <p className="text-neutral-400 text-xs mt-1">Real‑time KPIs in one place for fast decisions.</p>
                  </div>
                </div>
              </a>
              {/* Card 4 */}
              <a href="#contact" aria-label="Ask about integrated marketing plan add-on" className="group rounded-2xl border border-orange-500/40 bg-orange-500/5 p-4 transition transform hover:scale-[1.02] hover:border-orange-500/60 hover:bg-orange-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 cursor-pointer">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 group-hover:text-orange-300">
                    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4h8v12H6z" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 7h4M8 10h4M8 13h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold">Integrated Marketing Plan & Creative Brief — from AED 950</p>
                    <p className="text-neutral-400 text-xs mt-1">Helps align your brand message and campaigns before launch.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="mx-auto max-w-7xl px-6 my-16">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">Estimate Your Budget</h4>
        <BudgetCalculator />
      </section>

      {/* Post-calculator banner (styled like the Free Resource card) */}
      <section className="mx-auto max-w-7xl px-6 mt-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 md:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl leading-[1.1] font-extrabold uppercase text-orange-500">
            Got your estimated budget? See if your landing page and setup are ads-ready
          </h3>
          <div className="mx-auto h-px w-16 bg-orange-500/60 mt-3" />
          <div className="pt-2">
            <DownloadKitModal
              triggerLabel="Download the Readiness Kit"
              buttonClassName="inline-block bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em] transition"
            />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust-badges" className="mx-auto max-w-7xl px-6 mt-6 mb-10">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-center">
          <h5 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0 text-center tracking-tight leading-snug uppercase">
            Lena Bara is a certified Meta Media Buying Professional, Professional Marketing Specialist and Google Search Ads
          </h5>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/badges/meta-buyer-badge.png" alt="Meta Certified Media Buying Professional" className="h-20 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
            <img src="/badges/meta-performance-badge.png" alt="Meta Performance Marketing Specialist" className="h-20 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
            <img src="/badges/google-partner-badge.png" alt="Google Partner" className="h-20 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
          </div>
        </div>
      </section>

      {/* This Is How We Do It */}
      <div id="process" />
      <section id="how-we-do-it" className="mx-auto max-w-7xl px-6 mt-12">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">This is how we do it</h4>
        <HowWeDoIt />
      </section>

      {/* Industries I Work With */}
      <section id="industries" className="mx-auto max-w-7xl px-6 mt-12">
        <h2 className="text-[40px] md:text-[56px] tracking-tight font-extrabold text-orange-500 mb-8 text-center">Industries I Work With</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l7-6 7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Real Estate & Property</p>
                <p className="text-neutral-400 text-xs mt-1">Leads for rentals, sales, and off‑plan projects.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 17s-6-3.2-6-7a3.5 3.5 0 0 1 6 0 3.5 3.5 0 0 1 6 0c0 3.8-6 7-6 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Fitness & Gyms</p>
                <p className="text-neutral-400 text-xs mt-1">Memberships, class sign-ups, and trial passes.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">E‑com & Retail</p>
                <p className="text-neutral-400 text-xs mt-1">Product sales with full-funnel remarketing.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Healthcare & Clinics</p>
                <p className="text-neutral-400 text-xs mt-1">Leads for clinics, labs, and specialists.</p>
              </div>
            </li>
            
          </ul>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8l8-4 8 4-8 4-8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 10v4a6 6 0 0 0 8 0v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Beauty & Wellness</p>
                <p className="text-neutral-400 text-xs mt-1">Bookings for treatments, facials, and packages.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3v10M4 13V3m6 10V3m3 0v6a3 3 0 0 1-3 3h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14 7h3v10h-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Education & Training</p>
                <p className="text-neutral-400 text-xs mt-1">Course enrollments and open day sign‑ups.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 pb-3 border-b border-neutral-800 last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Food & Beverage / Hospitality</p>
                <p className="text-neutral-400 text-xs mt-1">Bookings for dining, venues, and hospitality.</p>
              </div>
            </li>
            
            <li className="flex items-start gap-3 pb-0 border-b border-transparent last:border-b-0">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11l6-2 3-6 2 6 5 2-5 2-2 6-3-6-6-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold">Travel & Events</p>
                <p className="text-neutral-400 text-xs mt-1">Venue bookings, tours, and experiences.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 mt-12">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">Testimonials</h4>
        <Testimonials />
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 mt-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-8 text-center">FAQ</h2>
        <div className="space-y-10">
          {FAQ_GROUPS.map((g, idx) => (
            <div key={idx}>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{g.title}</h3>
              <FAQList items={g.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 mt-12 mb-16">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">Let’s make a change</h4>
        <div id="contact-form">
          <LeadForm />
        </div>
      </section>

      {/* Footer / Legal */}
      <section id="footer" className="mx-auto max-w-7xl px-6 mt-6 mb-10 hidden">
        <div className="text-center text-neutral-300 text-sm">
          <div className="h-px w-full bg-neutral-800 mb-6" />
          <p className="text-white font-semibold">Licensed by RAKEZ</p>
          <p className="mt-1">Lena Bara Boutique Performance Marketing Agency LLC-FZ | Trade License available upon request</p>
          <p className="mt-4">Advertising services comply with UAE media and digital marketing regulations.</p>
          <p className="mt-1">All rights reserved.</p>
          <div className="mt-4 grid gap-2 md:grid-cols-3">
            <p>📞 +971 56 325 6848</p>
            <p>✉️ info@lenabara.com</p>
            <p>🌐 www.lenabara.com</p>
          </div>
        </div>
      </section>

      {/* Footer (Enhanced) */}
      <section className="bg-neutral-950 border-t border-neutral-800 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-14">
          {/* Top CTA */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
            <div className="text-neutral-400 text-sm">
              Interested in working with us?
            </div>
            <a
              href="#contact-form"
              className="text-2xl md:text-3xl font-extrabold uppercase underline decoration-2 underline-offset-4 text-white hover:text-orange-400"
            >
              Start a project
            </a>
          </div>

          {/* Primary grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand + blurb */}
            <div className="space-y-3 sm:space-y-4 max-w-prose">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-orange-500 text-black font-bold flex items-center justify-center">LB</div>
                <span className="text-lg font-semibold tracking-wide">LENABARA</span>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                A boutique performance marketing agency based in the UAE,
                specializing in paid media, analytics, and creative execution.
              </p>
              <p className="text-neutral-300 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                {/* Mobile: split into two lines; Desktop: single line with subtle bullets */}
                <span className="sm:hidden">
                  Dubai • Abu Dhabi • Sharjah
                  <br />Ras Al Khaimah • Ajman
                </span>
                <span className="hidden sm:inline">Dubai • Abu Dhabi • Sharjah • Ras Al Khaimah • Ajman</span>
                <br className="hidden sm:block" />
                Serving clients across the GCC and globally.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                Registered with RAKEZ (Ras Al Khaimah Economic Zone), UAE.
                <br />Licensed under: Media / Digital Marketing Consultancy.
              </p>
            </div>

            {/* Offices / Contact */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">CONTACT</h4>
              <div className="mt-3 space-y-2 text-sm">
                <p>📞 <a href="tel:+971563256848" className="hover:underline">+971 56 325 6848</a></p>
                <p>✉️ <a href="mailto:info@lenabara.com" className="hover:underline">info@lenabara.com</a></p>
                <p>🌐 <a href="https://www.lenabara.com" target="_blank" rel="noreferrer" className="hover:underline">www.lenabara.com</a></p>
              </div>
              <div className="mt-5 text-sm text-neutral-300 space-y-1">
                <p className="text-white/90 font-semibold">Global (Remote)</p>
                <p>Book a discovery call: <a href="mailto:info@lenabara.com" className="hover:underline">info@lenabara.com</a></p>
                <p>Business Hours: 08:00 — 18:00 (Gulf Time)</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">NAVIGATION</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300 uppercase tracking-wide">
                <li><a href="#packages" className="hover:underline">Packages</a></li>
                <li><a href="#standout" className="hover:underline">What Makes Us Different</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Support + Legal + Compliance */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">NEED SUPPORT?</h4>
              <p className="mt-3 text-sm text-neutral-300">Submit a ticket or call during business hours.</p>
              <p className="mt-1 text-sm"><a href="mailto:admin@lenabara.com" className="hover:underline">admin@lenabara.com</a></p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide text-white">LEGAL</h4>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  <li><a className="hover:underline" href="#">Terms & Conditions</a></li>
                  <li><a className="hover:underline" href="#">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="mt-6 text-xs text-neutral-400">
                Licensed by RAKEZ | © 2025 LenaBara — All Rights Reserved.
                <br />Advertising services comply with UAE media and digital marketing regulations.
              </div>
            </div>

            {/* Careers */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">COLLABORATIONS</h4>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed hidden">
                We’re always interested in talented people. Send your portfolio
                or CV and we’ll be in touch when there’s a fit.
              </p>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                We love working with creative freelancers and marketing specialists.
                If you'd like to collaborate, send your portfolio or proposal to:
              </p>
              <p className="mt-2 text-sm"><a href="mailto:info@lenabara.com" className="hover:underline">info@lenabara.com</a></p>
            </div>
          </div>

          {/* Secondary grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 hidden">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">NEED SUPPORT?</h4>
              <p className="mt-3 text-sm text-neutral-300">On our support plan? Submit a ticket or call during business hours.</p>
              <p className="mt-2 text-sm text-neutral-300">09:00 – 17:00 Gulf Time</p>
              <p className="mt-1 text-sm"><a href="mailto:admin@lenabara.com" className="hover:underline">admin@lenabara.com</a></p>
            </div>
            <div id="legal-section">
              <h4 className="text-sm font-semibold tracking-wide text-white">LEGAL</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li><a className="hover:underline" href="#">Terms & Conditions</a></li>
                <li><a className="hover:underline" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                © {new Date().getFullYear()} LenaBara — All rights reserved. Licensed by RAKEZ.
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-orange-400" aria-label="Twitter / X">X</a>
                <a href="#" className="hover:text-orange-400" aria-label="Facebook">Facebook</a>
                <a href="#" className="hover:text-orange-400" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
            <div className="mt-2">
              Registered office: United Arab Emirates. Advertising services comply with UAE media and digital marketing regulations.
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
        <a
          href="https://wa.me/971563256848?text=Hi%20Lena!%20I%E2%80%99d%20like%20to%20chat%20about%20my%20marketing%20needs."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-black shadow-lg shadow-green-500/40 hover:bg-green-400 transition"
          aria-label="WhatsApp +971 56 325 6848"
          data-booking="1"
        >
          <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16 3C9.383 3 4 8.383 4 15c0 2.359.695 4.551 1.895 6.387L5 29l7.887-1.855C14.551 28.305 16.742 29 19.1 29 25.717 29 31.1 23.617 31.1 17S25.717 5 19.1 5c-1.684 0-3.278.332-4.74.961C12.688 4.641 14.305 3 16 3zm-3.023 4.023a9.985 9.985 0 0 1 6.123-2.072C24.771 5 29 9.229 29 14.9c0 5.672-4.229 9.9-9.9 9.9-1.898 0-3.676-.514-5.207-1.49l-.621-.4-4.145.976.957-4.075-.405-.628C8.723 17.548 8.2 15.77 8.2 13.9c0-2.574 1.004-4.996 2.777-6.777zM12 10c-.402 0-.98.195-1.564.898-.586.703-2.14 2.082-2.14 4.977 0 2.894 2.194 5.688 2.5 6.085.305.398 4.066 6.14 10.009 6.14 5.944 0 10.195-4.252 10.195-9.186 0-4.935-4.251-9.287-10.195-9.287-2.197 0-4.221.637-5.94 1.785-.212-.116-.447-.195-.865-.195z"
            />
          </svg>
        </a>
        <a
          href="tel:+971563256848"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-black shadow-lg shadow-orange-500/40 hover:bg-orange-400 transition"
          aria-label="Call +971 56 325 6848"
          data-booking="1"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* Exit-intent modal (shows near footer if no booking) */}
      <div id="lb-exit-modal" className="fixed inset-0 z-[60] items-center justify-center bg-black/60 p-6 hidden">
        <div className="mx-auto max-w-xl w-full rounded-2xl border border-neutral-800 bg-neutral-900/90 p-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl leading-[1.1] font-extrabold uppercase text-orange-500">
            Not ready to book yet?
          </h3>
          <div className="mx-auto h-px w-16 bg-orange-500/60 mt-3" />
          <p className="mt-3 text-sm md:text-base text-neutral-200">
            Download the free Ads Readiness Kit and see if you’re ready to grow with paid ads.
          </p>
          <div className="pt-4">
            <a
              id="lb-exit-cta"
              href="#free-resource"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em] transition"
            >
              Download the Readiness Kit
            </a>
          </div>
          <button id="lb-exit-close" className="mt-4 text-xs md:text-sm text-neutral-400 hover:text-white underline underline-offset-4">
            No thanks
          </button>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
  try {
    // Do not show if already shown or booked
    if (localStorage.getItem('lb_exit_shown') === '1' || localStorage.getItem('lb_booked') === '1') return;

    const modal = document.getElementById('lb-exit-modal');
    if (!modal) return;

    const open = () => {
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      localStorage.setItem('lb_exit_shown', '1');
    };
    const close = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };

    document.getElementById('lb-exit-close')?.addEventListener('click', close);
    document.getElementById('lb-exit-cta')?.addEventListener('click', () => { close(); });

    // Mark as booked when clicking any contact/book CTA
    document.querySelectorAll('a[href="#contact"], a[href="#contact-form"], a[data-booking="1"]').forEach((a) => {
      a.addEventListener('click', () => localStorage.setItem('lb_booked','1'));
    });

    const footer = document.getElementById('footer');
    if (!footer) return;
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !localStorage.getItem('lb_exit_shown') && !localStorage.getItem('lb_booked')) {
          open();
        }
      }
    }, { threshold: 0.2 });
    io.observe(footer);
  } catch {}
})();`,
        }}
      />
    </div>
  );
}




