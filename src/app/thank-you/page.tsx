import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | LenaBara",
  description: "Thank-you page for landing page WhatsApp conversion flow.",
  robots: {
    index: false,
    follow: false,
  },
};

type ThankYouProps = {
  searchParams: {
    intent?: string;
    source?: string;
    variant?: string;
    utm_source?: string;
    utm_campaign?: string;
  };
};

const WHATSAPP_PHONE = "971563256848";
const FALLBACK_MESSAGE = "Hi Lena, I saw your ad and want help with my ads.";

export default function ThankYouPage({ searchParams }: ThankYouProps) {
  const params = searchParams || {};
  const fromLanding = params.source === "landing" && params.intent === "whatsapp";

  const fallbackHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(FALLBACK_MESSAGE)}`;

  return (
    <main className="min-h-screen bg-[#f4f3ef] px-5 py-20 text-[#1a1a1a] sm:px-8">
      <section className="mx-auto max-w-2xl border border-black/20 bg-white/70 p-8 text-center sm:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
          Conversion Recorded
        </p>
        <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
          Thank you
        </h1>
        <p className="mx-auto max-w-lg text-lg text-black/75">
          {fromLanding
            ? "Your request has been captured. We will review your details and get back to you shortly."
            : "Your request has been received."}
        </p>

        <a
          href={fallbackHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-transparent hover:text-black"
        >
          Open WhatsApp Again
        </a>

        {(params.variant || params.utm_source || params.utm_campaign) && (
          <p className="mt-5 text-xs uppercase tracking-[0.12em] text-black/45">
            {params.variant ? `variant: ${params.variant}` : ""}
            {params.utm_source ? ` | source: ${params.utm_source}` : ""}
            {params.utm_campaign ? ` | campaign: ${params.utm_campaign}` : ""}
          </p>
        )}
      </section>
    </main>
  );
}

