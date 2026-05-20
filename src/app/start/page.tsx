"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import { supabase } from "@/lib/supabase";

const displayFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const editorialSerif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"] });

type FormValue = string | string[];
type FormState = Record<string, FormValue>;

type FieldType = "text" | "email" | "textarea" | "select" | "radio" | "checkbox" | "note";

type FormField = {
  name: string;
  label?: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

type FormSection = {
  title: string;
  description: string;
  fields: FormField[];
};

export default function LeadSystemAuditForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({});
  const formContainerRef = useRef<HTMLDivElement | null>(null);
  const hasMountedRef = useRef(false);

  const sections: FormSection[] = [
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
      description: "This helps us understand how clients currently find you and where the biggest bottlenecks may be.",
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
          required: true,
          options: ["Not enough leads", "Low-quality leads", "Expensive ads", "Weak conversion rate", "Inconsistent sales", "No tracking/data", "Poor follow-up process"],
        },
        {
          name: "conversionTracking",
          label: "Do you currently track conversions or leads?",
          type: "radio",
          required: true,
          options: ["Yes", "No", "Not sure"],
        },
        {
          name: "trackingMicrocopy",
          type: "note",
        },
        {
          name: "platformImprovement",
          label: "Which platform would you most like to improve right now?",
          type: "radio",
          required: true,
          options: ["Meta Ads", "Google Ads", "Landing page conversion", "WhatsApp lead flow", "Tracking & analytics", "Overall lead generation system"],
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

  const current: FormSection = sections[step];
  const progress = submitted ? 100 : Math.round(((step + 1) / sections.length) * 100);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function updateValue(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function toggleCheckbox(name: string, option: string) {
    setForm((prev) => {
      const currentValues = Array.isArray(prev[name]) ? prev[name] : [];
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
      const value = form[field.name];
      if (Array.isArray(value)) return value.length > 0;
      return value && String(value).trim().length > 0;
    });
  }

  const missingRequiredFields = current.fields
    .filter((field) => field.required)
    .filter((field) => {
      const value = form[field.name];
      if (Array.isArray(value)) return value.length === 0;
      return !value || String(value).trim().length === 0;
    })
    .filter((field) => field.type !== "note")
    .map((field) => field.label);

  async function handleSubmit() {
    setLoading(true);
    setSubmitError(null);

    try {
      const getStr = (key: string) => {
        const value = form[key];
        return Array.isArray(value) ? value.join(", ") : (value ?? "") || null;
      };

      const payload = {
        business_name: getStr("businessName"),
        contact_name: getStr("contactName"),
        email: getStr("email"),
        phone: getStr("whatsapp"),
        website: getStr("website"),
        industry: getStr("industry"),
        offer: getStr("mainOffer"),
        average_price: getStr("customerValue"),
        location: getStr("location"),
        current_marketing: getStr("leadSources"),
        ads_experience: getStr("adsExperience"),
        crm: getStr("crm"),
        lead_response_process: getStr("inquiryProcess"),
        monthly_budget: getStr("monthlyBudget"),
        main_goal: getStr("primaryGoal"),
        notes: getStr("notes"),
      };

      const { error } = await supabase.from("lead_intake").insert([payload]);

      if (error) {
        console.error("Supabase lead_intake insert failed:", error);
        setSubmitError("Something went wrong. Please try again or contact me directly on WhatsApp.");
        return;
      }

      setForm({});
      setStep(0);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Unexpected lead intake submit error:", error);
      setSubmitError("Something went wrong. Please try again or contact me directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f4f0] px-4 py-4 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1120px]">
          <header className="mb-10 flex items-center justify-between border-b border-black/10 pb-4">
            <Link href="/" className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/55 transition hover:text-black">
              Lena Bara
            </Link>
            <Link href="/contact" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/45 transition hover:text-black">
              Contact
            </Link>
          </header>

          <section className="mx-auto max-w-3xl rounded-[10px] border border-black/15 bg-white/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 md:p-10">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/45">
              Audit Request Received
            </p>
            <h1 className={`${displayFont.className} text-[2.8rem] uppercase leading-[0.92] tracking-[0.01em] sm:text-[4rem]`}>
              Thank You
            </h1>
            <p className={`${editorialSerif.className} mt-5 max-w-2xl text-[1.08rem] leading-snug text-black/70 sm:text-[1.25rem]`}>
              Thank you — your answers were received. I’ll review your business details and contact you with the next steps.
            </p>

            <div className="mt-8 rounded-[8px] border border-black/15 bg-[#f5f4f0] p-5 sm:p-6">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/40">What Happens Next</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Audit Review",
                    desc: "We review your answers, current lead flow, and marketing setup.",
                  },
                  {
                    title: "Strategy Recommendations",
                    desc: "We identify potential issues in ads, tracking, funnel, or lead handling.",
                  },
                  {
                    title: "Next Step Contact",
                    desc: "If there&apos;s a good fit, we&apos;ll contact you within 24 hours with recommendations and next steps.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="rounded-[8px] border border-black/10 bg-white px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/40">0{index + 1}</p>
                    <h2 className={`${displayFont.className} mt-2 text-[1.6rem] uppercase leading-[0.95] tracking-[0.01em]`}>
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-black/65">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black px-7 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-orange-500"
              >
                Book Strategy Call
              </Link>
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/40">
                Premium boutique review process
              </span>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f4f0] px-4 py-4 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">
        <header className="mb-10 flex items-center justify-between border-b border-black/10 pb-4">
          <Link href="/" className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/55 transition hover:text-black">
            Lena Bara
          </Link>
          <nav className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black/45">
            <Link href="/" className="transition hover:text-black">
              Home
            </Link>
            <Link href="/contact" className="transition hover:text-black">
              Contact
            </Link>
          </nav>
        </header>

        <section className="mb-14 md:mb-16">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/50">
            Boutique Performance Marketing Agency
          </p>
          <h1 className={`${displayFont.className} max-w-4xl text-[3rem] uppercase leading-[0.92] tracking-[0.01em] sm:text-[4.4rem] lg:text-[5.2rem]`}>
            Lead System<br />Audit
          </h1>
          <p className={`${editorialSerif.className} mt-5 max-w-2xl text-[1.12rem] leading-snug text-black/72 sm:text-[1.35rem]`}>
            This short intake helps us understand your business, current lead flow, sales process, and growth goals before preparing recommendations.
          </p>
          <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-black/45">
            Estimated time: 3–5 minutes
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Meta Certified",
              "Google Ads Certified",
              "UAE Licensed",
              "GA4 & Tracking Setup",
            ].map((item) => (
              <span
                key={item}
                className="border border-black/15 bg-white/75 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/65"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div ref={formContainerRef} className="rounded-[10px] border border-black/15 bg-white/86 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 md:p-10">
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-black/45">
              <span>
                Step {step + 1} of {sections.length}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="h-[3px] w-full overflow-hidden bg-black/10">
              <div className="h-full bg-orange-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <section key={step} style={{ animation: "fadeInUp 260ms ease-out" }}>
            <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-black/40">
              Section {step + 1}
            </p>
            <h2 className={`${displayFont.className} text-[2rem] uppercase leading-[0.95] tracking-[0.01em] sm:text-[2.8rem]`}>
              {current.title}
            </h2>
            <p className={`${editorialSerif.className} mt-3 max-w-2xl text-[1.05rem] leading-snug text-black/62 sm:text-[1.15rem]`}>
              {current.description}
            </p>

            <div className="mt-8 space-y-7 md:space-y-8">
              {current.fields.map((field: FormField) => (
                <div key={field.name}>
                  {field.type !== "note" && (
                    <label className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-black/86">
                      {field.label}
                      {field.required && <span className="ml-1 text-orange-500">*</span>}
                    </label>
                  )}

                  {field.type === "note" && (
                    <p className={`${editorialSerif.className} mt-1 max-w-2xl text-[0.98rem] leading-snug text-black/58`}>
                      Many businesses lose leads due to missing tracking or delayed follow-up — not only because of ads.
                    </p>
                  )}

                  {(field.type === "text" || field.type === "email") && (
                    <input
                      type={field.type}
                      value={form[field.name] ? String(form[field.name]) : ""}
                      placeholder={field.placeholder || ""}
                      onChange={(e) => updateValue(field.name, e.target.value)}
                      className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white"
                    />
                  )}

                  {field.type === "textarea" && (
                    <textarea
                      value={form[field.name] ? String(form[field.name]) : ""}
                      placeholder={field.placeholder || ""}
                      onChange={(e) => updateValue(field.name, e.target.value)}
                      rows={4}
                      className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white"
                    />
                  )}

                  {field.type === "select" && (
                    <select
                      value={form[field.name] ? String(form[field.name]) : ""}
                      onChange={(e) => updateValue(field.name, e.target.value)}
                      className="w-full rounded-[8px] border border-black/20 bg-[#f5f4f0] px-4 py-3 text-sm outline-none transition duration-300 focus:border-orange-500 focus:bg-white"
                    >
                      <option value="">Select one</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === "radio" && (
                    <div className="grid gap-2 sm:grid-cols-2">
                      {field.options?.map((option) => {
                        const active = form[field.name] === option;
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() => updateValue(field.name, option)}
                            className={`rounded-[8px] border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.09em] transition duration-300 ${active ? "border-orange-500 bg-orange-50 text-black shadow-[0_0_0_1px_rgba(249,115,22,0.18)]" : "border-black/15 bg-[#f5f4f0] text-black/80 hover:border-orange-500 hover:bg-white"}`}
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
                        const selected = Array.isArray(form[field.name]) && (form[field.name] as string[]).includes(option);
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() => toggleCheckbox(field.name, option)}
                            className={`rounded-[8px] border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.09em] transition duration-300 ${selected ? "border-orange-500 bg-orange-50 text-black shadow-[0_0_0_1px_rgba(249,115,22,0.18)]" : "border-black/15 bg-[#f5f4f0] text-black/80 hover:border-orange-500 hover:bg-white"}`}
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
          </section>

          <div className="mt-10 flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
              disabled={step === 0}
              className="border border-black/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-black/70 transition duration-300 hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
            >
              Back
            </button>

            {step < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                disabled={!canContinue()}
                className="bg-black px-7 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Continue →
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canContinue() || loading}
                className="bg-black px-7 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white transition duration-300 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-30"
              >
                {loading ? "Submitting…" : "Submit Audit Request"}
              </button>
            )}
          </div>

          {!canContinue() && missingRequiredFields.length > 0 && (
            <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-black/45">
              Please complete the required fields to continue: {missingRequiredFields.join(", ")}.
            </p>
          )}

          {submitError && (
            <p className="mt-4 text-[0.75rem] font-semibold text-red-600">
              {submitError}
            </p>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
