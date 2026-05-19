"use client";

import { useState } from "react";

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
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm md:p-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500">Lena Bara Boutique Performance Marketing Agency</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Lead System Audit</h1>
          <p className="mt-3 max-w-2xl text-slate-600">This short intake helps us understand your business, current lead flow, sales process, and growth goals before preparing recommendations.</p>
          <p className="mt-2 text-sm text-slate-500">Estimated time: 3–5 minutes.</p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
            <span>Step {step + 1} of {sections.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-slate-900 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold">{current.title}</h2>
          <p className="mt-2 text-slate-600">{current.description}</p>

          <div className="mt-8 space-y-7">
            {current.fields.map((field) => (
              <div key={field.name}>
                <label className="mb-2 block font-medium">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>

                {field.type === "text" || field.type === "email" ? (
                  <input
                    type={field.type}
                    value={(form as Record<string, string>)[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                ) : null}

                {field.type === "textarea" ? (
                  <textarea
                    value={(form as Record<string, string>)[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900"
                  />
                ) : null}

                {field.type === "select" ? (
                  <select
                    value={(form as Record<string, string>)[field.name] || ""}
                    onChange={(e) => updateValue(field.name, e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900"
                  >
                    <option value="">Select one</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : null}

                {field.type === "radio" ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {field.options?.map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => updateValue(field.name, option)}
                        className={`rounded-2xl border px-4 py-3 text-left transition ${(form as Record<string, string>)[field.name] === option ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 hover:border-slate-400"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}

                {field.type === "checkbox" ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {field.options?.map((option) => {
                      const selected = ((form as Record<string, string[]>)[field.name] || []).includes(option);
                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => toggleCheckbox(field.name, option)}
                          className={`rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 hover:border-slate-400"}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="rounded-full border border-slate-200 px-5 py-3 font-medium text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>

          {step < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              disabled={!canContinue()}
              className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canContinue()}
              className="rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Audit Request
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
