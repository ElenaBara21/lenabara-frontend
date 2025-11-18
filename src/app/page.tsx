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
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header is provided globally via layout Header component */}
      <Hero />

      {/* Primary CTA below hero */}
      <section className="mx-auto max-w-7xl px-6 mt-[4%] mb-[5%]">
        <div className="flex flex-wrap justify-center">
          <a
            href="/packages"
            className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.2em]"
          >
            SEE PACKAGES
          </a>
        </div>
      </section>

      {/* Lead magnet / Readiness kit (restored) */}
      <section id="lead-magnet" className="mx-auto max-w-7xl px-6 mt-8">
        <div className="rounded-2xl border border-neutral-800 bg-[#0e0c0c] p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-neutral-300">Free resource for UAE businesses</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mt-3 mb-3 uppercase">Is your business ready for paid ads?</h2>
            <div className="h-0.5 w-20 bg-orange-500 mx-auto mb-4" />
            <p className="text-neutral-300 max-w-2xl mx-auto mb-6">Find out in 10 minutes if your business is ready for high-performance ads — and what to fix first.</p>

            <div className="flex justify-center mb-4">
              <DownloadKitModal triggerLabel={"Download the UAE Ads Readiness Kit (Free)"} buttonClassName="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]" />
            </div>

            <div className="text-sm text-neutral-400">
              <p>No spam. No generic tips — just insights tailored for UAE businesses ready to scale.</p>
            </div>

            <div className="mt-4 max-w-3xl mx-auto text-left">
              <Collapsible summary="Learn more">
                <div className="space-y-3 text-neutral-300">
                  <p>The Readiness Kit helps you quickly audit whether your website, tracking and creative are set up to support high-performance paid ads.</p>
                  <ul className="list-inside list-none space-y-2">
                    <li>✅ Landing page checklist (conversion drivers, load speed, CTA clarity)</li>
                    <li>✅ Tracking & analytics guide (pixel, GA4, conversion events)</li>
                    <li>✅ Creative brief template for quick A/B tests</li>
                    <li>✅ Prioritised fix list so you can act in the right order</li>
                  </ul>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes LenaBara Stand Out */}
      <section id="standout" className="mx-auto max-w-7xl px-6 mt-12">
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">
          What Makes LenaBara Stand Out
        </h4>
        <div className="rounded-2xl border border-neutral-800 bg-[#100C0B] p-6 md:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                q: "You'll never be one of 50 accounts. I personally monitor every campaign.",
                s: "Expect real communication, strategic feedback, and proactive optimization.",
              },
              {
                t: "STRATEGIC & ANALYTICAL",
                q: "Your campaigns are guided by insights, not hunches.",
                s: "Research-led planning, testing frameworks, and attribution-guide decisions.",
              },
              {
                t: "CERTIFIED & CREDIBLE",
                q: "Meta Certified Media Buyer | Google Ads Specialist | Master's in Marketing",
                s: "You're partnering with a professional who knows both strategy and execution.",
              },
              {
                t: "UAE LOCAL. GLOBAL STANDARD",
                q: "Bilingual campaigns crafted for the GCC — with global best practices.",
                s: "Arabic + English creatives, cultural nuance, and performance discipline.",
              },
            ].map((n, i) => (
              <div
                key={i}
                className={`relative ${["-rotate-2","rotate-2","-rotate-1","rotate-1","-rotate-2","rotate-2"][i % 6]} transform-gpu will-change-transform transition-transform duration-200 ease-out hover:rotate-0 hover:scale-[1.02]`}
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
                <span className="font-semibold">LenaBara Media</span> combines global certification standards with local UAE market expertise. Every campaign is personally managed by Lena Bara, a Meta Certified Media Buying Professional and Google Ads Specialist, ensuring data-driven results and complete transparency.
              </p>
              <div className="mt-5 h-0.5 w-24 bg-white/80" />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px] border border-neutral-800">
            <img src="/hero/lenabara-hero.png" alt="LenaBara hero" className="w-full h-full object-cover object-right" />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
            Book Free 15-min Call
          </a>
          <a href="/packages" className="bg-neutral-800 hover:bg-neutral-700 transition text-white px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
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
              <PromoCountdown endsAtISO={PROMO.endsAtISO} paused fixedDays={45} />
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
                    <p className="text-orange-400 font-semibold">What's Included</p>
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
              <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]">
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
                      <p className="text-orange-400 font-semibold">What's Included</p>
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
                <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]" data-track="services_growth_call">
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
                      <p className="text-orange-400 font-semibold">What's Included</p>
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
                <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2.5 rounded-none font-extrabold uppercase tracking-[0.1em]" data-track="services_partner_apply">
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

      {/* Got your estimated budget? — restored expanded block */}
      <section id="got-budget" className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">Got your estimated budget?</h3>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-6">See if your landing page and setup are ads-ready — if not, download our readiness kit or book a free 15-minute call and we'll help you prioritise fixes.</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-black px-5 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">Book Free 15-min Call</a>
            <DownloadKitModal triggerLabel={"Download Readiness Kit"} buttonClassName={"bg-neutral-800 hover:bg-neutral-700 text-white px-5 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]"} />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust-badges" className="mx-auto max-w-7xl px-6 mt-6 mb-10">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-center">
          <h5 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-0 text-center tracking-tight leading-snug">
            Lena Bara is a certified Meta Media Buying Professional and Google Ads Partner.
          </h5>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/badges/meta-buyer-badge.png" alt="Meta Certified Media Buying Professional" className="h-16 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
            <img src="/badges/meta-performance-badge.png" alt="Meta Performance Marketing Specialist" className="h-16 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
            <img src="/badges/google-partner-badge.png" alt="Google Partner" className="h-16 w-auto shrink-0 transition-transform duration-200 ease-out hover:scale-110 active:scale-105" />
          </div>
        </div>
      </section>

      {/* This Is How We Do It */}
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
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-center uppercase tracking-tight">Let's make a change</h4>
        <LeadForm />
      </section>

      {/* Footer is now provided by layout Footer component */}
    </div>
  );
}

