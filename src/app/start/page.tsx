"use client";

import { useState } from "react";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const editorialSerif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function LeadSystemAuditForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({});

  const sections = [
    {
      title: "Business Basics",
      description: "Let's start with a quick overview of your business.",
      fields: [
        { name: "businessName", label: "Business name", type: "text", required: true },
        {
          name: "industry",
          label: "What industry are you in?",
          type: "select",
          required: true,
          options: ["Real Estate", "Medical / Clinic", "Beauty", "Construction", "Accounting / Business Setup", "E-commerce", "Hospitality", "Professional Services", "Other"],
        },
        { name: "location", label: "What location(s) do you serve?", type: "text", placeholder: "Example: Dubai, UAE-wide, GCC", required: true },
        { name: "website", label: "Website or landing page", type: "text", placeholder: "Optional" },
        { name: "mainOffer", label: "What is your main service or offer right now?", type: "textarea", required: true },
      ],
    },
    {
      title: "Current Lead Flow",
      description: "This helps us understand how clients currently find you.",
      fields: [
        {
          name: "leadSources",
          label: "Where do most of your clients currently come from?",
          type: "checkbox",
          required: true,
          options: ["Instagram", "Meta Ads", "Google Ads", "Referrals", "TikTok", "SEO", "WhatsApp", "Cold outreach", "Marketplace platforms", "Other"],
        },
        {
          name: "adsExperience",
          label: "Have you run paid ads before?",
          type: "radio",
          required: true,
          options: ["Yes — Meta Ads", "Yes — Google Ads", "Yes — both", "No"],
        },
        {
          name: "marketingChallenge",
          label: "What has been your biggest marketing challenge recently?",
          type: "radio",
          options: ["Not enough leads", "Low-quality leads", "Expensive ads", "Weak conversion rate", "Inconsistent sales", "No tracking/data", "Poor follow-up process"],
        },
        {
          name: "conversionTracking",
          label: "Do you currently track conversions or leads?",
          type: "radio",
          options: ["Yes", "No", "Not sure"],
        },
      ],
    },
    {
      title: "Sales & Lead Handling",
      description: "Ads only work when leads are handled properly. This section is important.",
      fields: [
        {
          name: "leadResponder",
          label: "Who responds to incoming leads?",
          type: "radio",
          required: true,
          options: ["Owner", "Sales team", "Reception/admin", "No dedicated process"],
        },
        {
          name: "responseSpeed",
          label: "How quickly do you usually respond to WhatsApp inquiries?",
          type: "radio",
          required: true,
          options: ["Within 5 minutes", "Within 1 hour", "Same day", "Next day or later"],
        },
        {
          name: "crm",
          label: "Do you currently use a CRM system?",
          type: "radio",
          options: ["Yes", "No", "Not sure"],
        },
        { name: "inquiryProcess", label: "What usually happens after someone sends an inquiry?", type: "textarea", placeholder: "Example: we reply on WhatsApp, call them, send pricing, follow up later..." },
        {
          name: "missedLeads",
          label: "Approximately how many leads do you think are missed or ignored weekly?",
          type: "radio",
          options: ["Almost none", "1–5", "5–10", "10+", "Not sure"],
        },
      ],
    },
    {
      title: "Revenue & Goals",
      description: "This helps us understand what kind of lead system makes commercial sense.",
      fields: [
        { name: "customerValue", label: "What is your average customer value?", type: "text", placeholder: "Example: 1,500 AED average project value" },
        {
          name: "monthlyBudget",
          label: "Roughly how much are you comfortable investing monthly into marketing?",
          type: "radio",
          required: true,
          options: ["Under 3,000 AED", "3,000–10,000 AED", "10,000–30,000 AED", "30,000+ AED"],
        },
        { name: "success90Days", label: "What result would make this project successful for you in the next 90 days?", type: "textarea" },
        {
          name: "primaryGoal",
          label: "What is your primary goal?",
          type: "radio",
          required: true,
          options: ["More WhatsApp leads", "More phone calls", "More booked appointments", "More sales", "Better tracking/analytics", "Lower cost per lead"],
        },
      ],
    },
    {
      title: "Contact & Next Steps",
      description: "Where should we send the next steps after reviewing your answers?",
      fields: [
        { name: "contactName", label: "Contact name", type: "text", required: true },
        { name: "email", label: "Best email", type: "email", required: true },
        { name: "whatsapp", label: "Best WhatsApp number", type: "text", required: true },
        {
          name: "preferredContact",
          label: "Preferred contact method",
          type: "radio",
          options: ["WhatsApp", "Email", "Phone Call"],
        },
        { name: "notes", label: "Anything else we should know?", type: "textarea", placeholder: "Optional" },
      ],
    },
  ];

  const current = sections[step];
  const progress = Math.round(((step + 1) / sections.length) * 100);

  function updateValue(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function toggleCheckbox(name: string, option: string) {
    setForm((prev: Record<string, unknown>) => {
      const currentValues = (prev[name] as string[]) || [];
      const exists = currentValues.includes(option);
      return {
        ...prev,
        [name]: exists ? currentValues.filter((item) => item !== option) : [...currentValues, option],
      };
    });
  }

  function canContinue() {
    return current.fields.every((field) => {
      if (!field.required) return true;
      const value = (form as Record<string, unknown>)[field.name];
      if (Array.isArray(value)) return value.length > 0;
      return value && String(value).trim().length > 0;
    });
  }

  function handleSubmit() {
    console.log("Lead System Audit submission:", form);
    alert("Thank you — your audit request has been received. We'll review your answers and reach out with next steps.");
  }

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-5 py-12 text-black sm:px-8">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/50">
            Lena Bara · Boutique Performance Marketing
          </p>
          <h1 className={`${displayFont.className} text-[3rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[4.5rem]`}>
            Lead System<br />Audit
          </h1>
          <p className={`${editorialSerif.className} mt-4 text-xl leading-snug text-black/70 sm:text-2xl`}>
            This short intake helps us understand your business, current lead flow, sales process, and growth goals before preparing recommendations.
          </p>
          <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/40">
            Estimated time: 3–5 minutes
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black/40">
            <span>Step {step + 1} of {sections.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[3px] w-full overflow-hidden bg-black/10">
            <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Step card */}
        <div className="rounded-[10px] border border-black/15 bg-white/80 p-6 sm:p-8">
          <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/40">
            Section {step + 1}
          </p>
          <h2 className={`${displayFont.className} text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.6rem]`}>
            {current.title}
          </h2>
          <p className={`${editorialSerif.className} mt-2 text-lg leading-snug text-black/60`}>
            {current.description}
          </p>

          <div className="mt-7 space-y-6">
            {current.fields.map((field) => (
              <div key={field.name}>
                <label className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-black/70">
                  {field.label}{field.required && <span className="ml-1 text-black">*</span>}
                </label>

                {(field.type === "text" || field.type === "email") && (
                  <input
                    type={field.type}
                    value={(form as Record<string, string>)[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition focus:border-black placeholder:text-black/30"
                  />
                )}

                {field.type === "textarea" && (
                  <textarea
                    value={(form as Record<string, string>)[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    rows={4}
                    className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition focus:border-black placeholder:text-black/30"
                  />
                )}

                {field.type === "select" && (
                  <select
                    value={(form as Record<string, string>)[field.name] || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition focus:border-black"
                  >
                    <option value="">Select one</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}

                {field.type === "radio" && (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {field.options?.map((option) => {
                      const active = (form as Record<string, string>)[field.name] === option;
                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => updateValue(field.name, option)}
                          className={`rounded-[8px] border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.09em] transition ${active ? "border-black bg-black text-white" : "border-black/15 bg-[#f5f4f0] text-black/80 hover:border-black/40"}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}

                {field.type === "checkbox" && (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {field.options?.map((option) => {
                      const selected = ((form as Record<string, string[]>)[field.name] || []).includes(option);
                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => toggleCheckbox(field.name, option)}
                          className={`rounded-[8px] border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.09em] transition ${selected ? "border-black bg-black text-white" : "border-black/15 bg-[#f5f4f0] text-black/80 hover:border-black/40"}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="border border-black/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-black/70 transition hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
          >
            Back
          </button>

          {step < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              disabled={!canContinue()}
              className="bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canContinue()}
              className="bg-black px-8 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Submit Audit Request
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
