export const metadata = {
  title: "Strategic Partner Program | Lenabara",
  description: "Strategic Partner Program for UAE Business Advisors",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="text-orange-400 uppercase tracking-[0.2em] text-xs font-bold">Partners</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Strategic Partner Program for UAE Business Advisors
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl">
          If you serve UAE business owners and want to offer a structured paid lead generation system (Meta + Google + Tracking) — we collaborate with selected partners.
        </p>
        <p className="mt-4 text-sm text-neutral-400">
          Certified Meta & Google Performance Media Buyer | MA in Marketing | Analytics & Conversion Tracking Specialist
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#apply" className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
            Apply for Strategic Partnership
          </a>
          <p className="text-xs text-neutral-400 self-center">We review all applications within 24 hours.</p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Why this partnership works</h2>
        <p className="text-neutral-300 mb-6">
          You already have trust with your clients. We build the paid acquisition system that turns traffic into qualified leads.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-white font-semibold mb-3">Your clients get</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>Structured ad campaigns</li>
              <li>Conversion-focused landing pages</li>
              <li>Proper GA4 + GTM tracking</li>
              <li>WhatsApp & call attribution</li>
              <li>Ongoing optimization</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-white font-semibold mb-3">You strengthen your service</h3>
            <p className="text-neutral-300">
              We handle execution. You earn commission.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ideal partners</h2>
        <p className="text-neutral-300 mb-6">We typically collaborate with:</p>
        <ul className="grid md:grid-cols-2 gap-3 text-neutral-300">
          <li>Business setup & corporate service firms</li>
          <li>Accounting & tax advisory firms</li>
          <li>PRO & licensing consultants</li>
          <li>Web/branding agencies</li>
          <li>CRM & automation providers</li>
        </ul>
        <p className="text-neutral-300 mt-6">If your clients need consistent qualified leads — this partnership fits.</p>
      </section>

      {/* SECTION 4 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Service tiers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-xl font-bold text-white">Lead Engine Starter</h3>
            <p className="text-neutral-300 mt-2">For service businesses with working websites.</p>
            <p className="text-neutral-300 mt-2">Ads setup + tracking + 30-day optimization.</p>
          </div>
          <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 p-6">
            <p className="text-[11px] uppercase tracking-wide text-orange-300 mb-2">Most Popular</p>
            <h3 className="text-xl font-bold text-white">Conversion System</h3>
            <p className="text-neutral-300 mt-2">Ads + Custom Landing Page + Advanced Tracking + 60-day optimization.</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-xl font-bold text-white">Authority Growth System</h3>
            <p className="text-neutral-300 mt-2">Full acquisition structure + retargeting + CRM + performance dashboard.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Commission model</h2>
        <p className="text-neutral-300 mb-4">Simple and transparent:</p>
        <ul className="space-y-2 text-neutral-300">
          <li>15% first project fee</li>
          <li>OR</li>
          <li>10% recurring (3 months)</li>
          <li>OR</li>
          <li>Flat AED 1,000–2,000 per closed client</li>
        </ul>
        <p className="text-neutral-300 mt-4">White-label option available.</p>
        <p className="text-neutral-400 mt-2 text-sm">Commission paid within 7 days after cleared payment.</p>
      </section>

      {/* SECTION 6 */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">How we work</h2>
        <ol className="space-y-2 text-neutral-300 list-decimal list-inside">
          <li>You introduce the client</li>
          <li>We conduct strategy call</li>
          <li>Proposal sent</li>
          <li>Client signs</li>
          <li>You receive commission</li>
        </ol>
        <p className="text-neutral-300 mt-4">No complicated tracking systems. No confusion.</p>
      </section>

      {/* SECTION 7 */}
      <section id="apply" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Apply to Become a Strategic Partner</h2>
        <form className="grid gap-4 max-w-2xl">
          <input name="name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Name" />
          <input name="company" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Company" />
          <input name="website" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Website" />
          <input name="clientType" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Type of clients" />
          <input name="volume" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Estimated client volume" />
          <input name="referral" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Referral or white-label" />
          <textarea name="message" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm h-28 resize-none focus:outline-none focus:border-orange-500" placeholder="Message"></textarea>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition text-black px-6 py-3 rounded-none font-extrabold uppercase tracking-[0.1em]">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
