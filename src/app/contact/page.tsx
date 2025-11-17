import LeadForm from "../components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let’s make a change</h1>
        <p className="text-neutral-300 mb-6">Request a free 15-minute discovery call or tell us about your project — I’ll respond within one business day.</p>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <LeadForm />
        </div>
      </div>
    </main>
  );
}
