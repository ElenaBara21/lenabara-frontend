"use client";

import { useCallback } from "react";
import type { MouseEvent, ReactNode } from "react";
import { track } from "@/app/lib/analytics";
import {
  buildThankYouUrl,
  buildWhatsAppMessage,
  getStoredLandingUtm,
  getUtmFromUrl,
  persistLandingUtm,
  type LandingVariant,
} from "../lib/attribution";

type WhatsAppCtaButtonProps = {
  variant: LandingVariant;
  placement: "hero" | "proof" | "results" | "pricing" | "final" | "sticky";
  phone: string;
  baseMessage: string;
  className: string;
  children: ReactNode;
};

export default function WhatsAppCtaButton({
  variant,
  placement,
  phone,
  baseMessage,
  className,
  children,
}: WhatsAppCtaButtonProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const pageUtm = getUtmFromUrl();
      persistLandingUtm(pageUtm);
      const utm = { ...getStoredLandingUtm(), ...pageUtm };

      const message = buildWhatsAppMessage(baseMessage, utm);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      track("landing_whatsapp_click", {
        landing_variant: variant,
        placement,
        ...utm,
      });

      const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!popup) {
        window.location.href = whatsappUrl;
        return;
      }

      const thankYouUrl = buildThankYouUrl(variant, utm);
      window.setTimeout(() => {
        window.location.href = thankYouUrl;
      }, 120);
    },
    [baseMessage, phone, placement, variant],
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(baseMessage)}`}
      onClick={handleClick}
      className={className}
      data-track="cta_whatsapp_click"
    >
      {children}
    </a>
  );
}
