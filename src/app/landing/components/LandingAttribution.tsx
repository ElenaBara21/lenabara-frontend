"use client";

import { useEffect } from "react";
import { track } from "@/app/lib/analytics";
import { getStoredLandingUtm, getUtmFromUrl, persistLandingUtm, type LandingVariant } from "../lib/attribution";

type LandingAttributionProps = {
  variant: LandingVariant;
};

export default function LandingAttribution({ variant }: LandingAttributionProps) {
  useEffect(() => {
    document.body.classList.add("landing-only");

    const pageUtm = getUtmFromUrl();
    persistLandingUtm(pageUtm);

    const mergedUtm = { ...getStoredLandingUtm(), ...pageUtm };

    track("landing_view", {
      landing_variant: variant,
      landing_type: "paid_traffic",
      ...mergedUtm,
    });

    return () => {
      document.body.classList.remove("landing-only");
    };
  }, [variant]);

  return null;
}
