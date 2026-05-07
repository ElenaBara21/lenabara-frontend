"use client";

import { useState } from "react";
import type { LandingVariant } from "../lib/attribution";
import WhatsAppCtaButton from "./WhatsAppCtaButton";

type VideoWithEndCtaProps = {
  variant: LandingVariant;
  phone: string;
  baseMessage: string;
  src: string;
  ctaLabel: string;
};

export default function VideoWithEndCta({
  variant,
  phone,
  baseMessage,
  src,
  ctaLabel,
}: VideoWithEndCtaProps) {
  const [showCta, setShowCta] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        playsInline
        controls
        onPlay={() => setShowCta(false)}
        onEnded={() => setShowCta(true)}
      >
        Your browser does not support the video tag.
      </video>

      {showCta && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 p-4">
          <WhatsAppCtaButton
            variant={variant}
            placement="hero"
            phone={phone}
            baseMessage={baseMessage}
            className="inline-flex items-center justify-center border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-black transition hover:bg-transparent hover:text-white sm:text-sm"
          >
            {ctaLabel}
          </WhatsAppCtaButton>
        </div>
      )}
    </div>
  );
}