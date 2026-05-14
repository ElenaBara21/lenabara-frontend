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

            {/* Header */}
            <div>
              <p className="text-[1.05rem] font-bold uppercase tracking-[0.06em] text-black">WhatsApp Lead Launch</p>
              <p className="mt-1 text-base font-semibold text-black/80">Starting from 1,500 AED <span className="font-normal text-black/55">(one-time setup)</span></p>
              <p className="mt-3 leading-relaxed text-black/70">
                Designed for businesses that want a simple landing page + ads system focused on generating WhatsApp inquiries.
              </p>
            </div>

            {/* Landing Page */}
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">Landing Page Setup</p>
              <ul className="space-y-1.5">
                <li>– 1 conversion-focused landing page</li>
                <li>– Mobile optimisation</li>
                <li>– WhatsApp integration</li>
                <li>– Basic contact/CTA section</li>
              </ul>
            </div>

            {/* Ads */}
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">Ads Setup</p>
              <ul className="space-y-1.5">
                <li>– Meta Ads setup (or Google Ads)</li>
                <li>– 1 campaign launch</li>
                <li>– Up to 3 ad variations</li>
              </ul>
            </div>

            {/* Tracking */}
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">Tracking Setup</p>
              <ul className="space-y-1.5">
                <li>– Meta Pixel setup</li>
                <li>– Basic GA4 tracking setup</li>
                <li>– UTM tracking for ads</li>
              </ul>
            </div>

            {/* Launch Support */}
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">Launch Support</p>
              <ul className="space-y-1.5">
                <li>– Campaign launch</li>
                <li>– Up to 7 days of post-launch monitoring and basic optimisation</li>
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">What&apos;s NOT Included</p>
              <ul className="space-y-1.5 text-black/55">
                <li>– Ad spend budget (paid directly to Meta or Google)</li>
                <li>– Ongoing monthly ads management</li>
                <li>– Weekly creative production</li>
                <li>– Advanced funnel automation or CRM setup</li>
                <li>– Additional landing pages</li>
                <li>– Full website development</li>
                <li>– Daily reporting or unlimited revisions</li>
              </ul>
            </div>

            {/* Timeline */}
            <p className="border-t border-black/10 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
              Timeline: Launch in 7–10 business days after receiving content, creatives, and account access.
            </p>

            {/* Optional ongoing */}
            <div className="rounded border border-black/10 bg-black/[0.03] p-4">
              <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">Ongoing Management (Optional)</p>
              <p className="font-semibold text-black">From 2,500 AED/month</p>
              <p className="mt-1 text-black/55">Includes: Campaign optimisation, creative testing, performance monitoring, reporting, landing page improvements.</p>
            </div>

            <WhatsAppCtaButton
              variant="a"
              placement="pricing"
              phone={WHATSAPP_PHONE}
              baseMessage={WHATSAPP_MESSAGE}
              className="inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-transparent hover:text-black"
            >
              👉 Yes, I want to launch my funnel
            </WhatsAppCtaButton>

          </div>
      )}
    </div>
  );
}
