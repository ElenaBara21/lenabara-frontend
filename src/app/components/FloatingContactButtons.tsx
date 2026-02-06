"use client";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
      <a
        href="https://wa.me/971563256848"
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="cta_whatsapp_floating"
        aria-label="WhatsApp"
        className="flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 shadow-lg transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.44 0 .06 5.38.06 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.63A11.9 11.9 0 0 0 12.06 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.55-8.52zM12.07 22h-.01a9.9 9.9 0 0 1-5.04-1.39l-.36-.21-3.68.97.98-3.58-.24-.37A9.9 9.9 0 0 1 2.06 12c0-5.47 4.46-9.93 9.95-9.93 2.66 0 5.16 1.03 7.04 2.9A9.86 9.86 0 0 1 22 12c0 5.47-4.46 10-9.93 10zm5.44-7.45c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
        </svg>
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>

      <a
        href="tel:+971563256848"
        data-gtm="cta_call_floating"
        aria-label="Call"
        className="flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-black px-4 py-3 shadow-lg transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1l-2.2 2.23z" />
        </svg>
        <span className="text-sm font-semibold">Call</span>
      </a>
    </div>
  );
}
