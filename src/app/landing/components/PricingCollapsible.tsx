"use client";

import { useState } from "react";
import WhatsAppCtaButton from "./WhatsAppCtaButton";

const WHATSAPP_PHONE = "971563256848";
const WHATSAPP_MESSAGE =
  "Hello, I'm interested in the 1,500 AED lead generation offer. Please send my free audit.";

export default function PricingCollapsible() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 border border-black/30 bg-black/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] text-black/80 transition hover:bg-black hover:text-white"
      >
        <span aria-hidden="true">{open ? "−" : "+"}</span>
        {open ? "Hide details" : "What's Included"}
      </button>

      {open && (
        <div className="mt-5 space-y-6 border border-black/15 bg-white/80 p-6 text-sm text-black/80 sm:p-8">

          <div>
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">
              Strategy & Setup — One-time, first month
            </p>
            <ul className="space-y-1.5">
              <li>– 1 landing page (optimised for WhatsApp conversions)</li>
              <li>– Meta Ads account setup (ad account, pixel, conversions API)</li>
              <li>– Campaign structure: 3 ad sets, 6–9 creatives</li>
              <li>– GA4 + conversion tracking setup</li>
              <li>– UTM parameters for all ads</li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">
              Monthly Management
            </p>
            <ul className="space-y-1.5">
              <li>– Daily ad spend monitoring (your budget: 3,000–8,000 AED)</li>
              <li>– Weekly creative refresh (2 new ad variations)</li>
              <li>– Landing page A/B tests (headlines, CTAs)</li>
              <li>– Bi-weekly optimisation report (WhatsApp leads, CPL, CTR)</li>
              <li>– 1 revision to landing page per month</li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">
              Not Included — Clarity prevents problems
            </p>
            <ul className="space-y-1.5 text-black/60">
              <li>– Ad spend budget (paid directly to Meta)</li>
              <li>– WhatsApp Business API charges (if applicable)</li>
              <li>– Additional landing pages (500 AED/page)</li>
              <li>– Urgent changes outside business hours (48hr notice)</li>
            </ul>
          </div>

          <p className="border-t border-black/10 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
            Typical timeline: Launch in 7–10 days from content delivery
          </p>

          <WhatsAppCtaButton
            variant="a"
            placement="pricing"
            phone={WHATSAPP_PHONE}
            baseMessage={WHATSAPP_MESSAGE}
            className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-transparent hover:text-black"
          >
            👉 Yes, I want this — let&apos;s start
          </WhatsAppCtaButton>

        </div>
      )}
    </div>
  );
}
