"use client";
import { useState } from "react";
import { track } from "../lib/analytics";

type Lead = {
  name: string;
  email: string;
  phone?: string;
  package?: string;
  website?: string;
  message?: string;
  source?: string;
};

export default function LeadForm() {
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lead: Lead = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || undefined,
      package: String(fd.get("package") || "").trim() || undefined,
      website: String(fd.get("website") || "").trim() || undefined,
      message: String(fd.get("message") || "").trim() || undefined,
      source: "landing-contact",
    };

    try {
      const utm = JSON.parse(localStorage.getItem('lenabara_utm') || '{}') || {};
      const calc = JSON.parse(localStorage.getItem('lenabara_calc') || '{}') || {};
      (lead as any).utm = utm;
      if (calc && calc.plan) {
        (lead as any).plan = String(calc.plan);
        (lead as any).spend = Number(calc.spend) || undefined;
      }
    } catch {}

    if (!lead.name || !lead.email) {
      setErr("Please provide your name and a valid email.");
      setOk(false);
      return;
    }

    try {
      setPending(true);
      setErr(null);
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      const json = await res.json().catch(() => ({}));
      const success = Boolean(json?.ok);
      setOk(success);
      track("lead_submit", { ok: success, source: lead.source });
      if (!success) {
        setErr(json?.error || "Submission failed. Please try again.");
      }
      if (success) {
        try {
          const w = window as any;
          if (w.posthog) {
            // Identify user by email and set person properties
            w.posthog.identify(lead.email, { email: lead.email, name: lead.name, phone: lead.phone, package: lead.package, source: lead.source });
            w.posthog.capture("lead_submit_success", { source: lead.source });
          }
        } catch {}
        (e.currentTarget as HTMLFormElement).reset();
      }
    } catch (e) {
      setOk(false);
      setErr("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
      <input name="name" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Full Name" />
      <input name="email" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="email" placeholder="Work Email" />
      <input name="phone" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="tel" placeholder="Phone number (WhatsApp preferred)" />

      <fieldset className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3">
        <legend className="text-sm text-neutral-300">Select your package</legend>
        <div className="mt-2 grid sm:grid-cols-3 gap-3 text-sm text-neutral-200">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="radio" name="package" value="PILOT LAUNCH" className="accent-orange-500" />
            <span>PILOT LAUNCH</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="radio" name="package" value="GROWTH SYSTEM" className="accent-orange-500" />
            <span>GROWTH SYSTEM</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input type="radio" name="package" value="PERFORMANCE PARTNER" className="accent-orange-500" />
            <span>PERFORMANCE PARTNER</span>
          </label>
        </div>
      </fieldset>
      <input name="website" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" type="text" placeholder="Website (optional)" />
      <textarea name="message" className="bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm h-28 resize-none focus:outline-none focus:border-orange-500" placeholder="What are your goals or current challenges?"></textarea>

      {ok === true && (
        <p className="text-sm text-green-400">Thanks! I’ll get back to you shortly.</p>
      )}
      {ok === false && err && (
        <p className="text-sm text-red-400">{err}</p>
      )}

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={pending} className="bg-orange-500 disabled:opacity-70 hover:bg-orange-600 transition text-white px-5 py-3 rounded-xl font-medium">
          {pending ? "Sending..." : "Send Request"}
        </button>
        <a
          href="https://wa.me/971521595752"
          className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 px-5 py-3 rounded-xl font-medium"
          aria-label="WhatsApp"
          data-track="cta_whatsapp_click"
          onClick={() => track("cta_whatsapp_click", { source: "contact" })}
        >
          Message on WhatsApp
        </a>
      </div>
    </form>
  );
}
