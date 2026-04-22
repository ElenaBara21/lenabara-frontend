export type LandingVariant = "a" | "b";

export type LandingUtm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
};

const STORAGE_KEY = "lenabara_landing_utm";

function pickQueryParam(params: URLSearchParams, key: keyof LandingUtm) {
  const value = params.get(key);
  return value && value.trim() ? value.trim() : undefined;
}

export function getUtmFromUrl(): LandingUtm {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: pickQueryParam(params, "utm_source"),
    utm_medium: pickQueryParam(params, "utm_medium"),
    utm_campaign: pickQueryParam(params, "utm_campaign"),
    utm_content: pickQueryParam(params, "utm_content"),
    utm_term: pickQueryParam(params, "utm_term"),
    gclid: pickQueryParam(params, "gclid"),
    fbclid: pickQueryParam(params, "fbclid"),
  };
}

export function getStoredLandingUtm(): LandingUtm {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as LandingUtm) : {};
  } catch {
    return {};
  }
}

export function persistLandingUtm(utm: LandingUtm) {
  if (typeof window === "undefined") {
    return;
  }

  const current = getStoredLandingUtm();
  const merged: LandingUtm = {
    utm_source: current.utm_source || utm.utm_source,
    utm_medium: current.utm_medium || utm.utm_medium,
    utm_campaign: current.utm_campaign || utm.utm_campaign,
    utm_content: current.utm_content || utm.utm_content,
    utm_term: current.utm_term || utm.utm_term,
    gclid: current.gclid || utm.gclid,
    fbclid: current.fbclid || utm.fbclid,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {}
}

export function buildWhatsAppMessage(baseMessage: string, utm: LandingUtm) {
  const lines = [baseMessage];

  if (utm.utm_source || utm.utm_medium || utm.utm_campaign) {
    lines.push("", "Traffic source details:");
    if (utm.utm_source) lines.push(`utm_source: ${utm.utm_source}`);
    if (utm.utm_medium) lines.push(`utm_medium: ${utm.utm_medium}`);
    if (utm.utm_campaign) lines.push(`utm_campaign: ${utm.utm_campaign}`);
    if (utm.utm_content) lines.push(`utm_content: ${utm.utm_content}`);
    if (utm.utm_term) lines.push(`utm_term: ${utm.utm_term}`);
  }

  if (utm.gclid) {
    lines.push(`gclid: ${utm.gclid}`);
  }

  if (utm.fbclid) {
    lines.push(`fbclid: ${utm.fbclid}`);
  }

  return lines.join("\n");
}

export function buildThankYouUrl(variant: LandingVariant, utm: LandingUtm) {
  const params = new URLSearchParams({
    intent: "whatsapp",
    source: "landing",
    variant,
  });

  if (utm.utm_source) params.set("utm_source", utm.utm_source);
  if (utm.utm_campaign) params.set("utm_campaign", utm.utm_campaign);

  return `/thank-you?${params.toString()}`;
}
