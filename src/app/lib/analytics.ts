"use client";

type Props = Record<string, unknown>;

export function track(event: string, props: Props = {}) {
  let ctx: Props = {};
  try {
    if (typeof window !== 'undefined') {
      const loc = window.location;
      ctx.path = loc?.pathname;
      ctx.title = document?.title;
      try {
        const utm = JSON.parse(localStorage.getItem('lenabara_utm') || '{}') || {};
        if (utm && utm.utm_source && !utm.first_utm_source) utm.first_utm_source = utm.utm_source;
        ctx = { ...ctx, ...utm };
        const calc = JSON.parse(localStorage.getItem('lenabara_calc') || '{}') || {};
        if (calc && calc.plan) ctx.plan = calc.plan;
      } catch {}
    }
  } catch {}
  const payload = { event, props: { ...ctx, ...props }, ts: Date.now() };
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/events", blob);
      return;
    }
  } catch {}
  fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});

  try {
    // Also forward to PostHog if available
    const w = window as any;
    if (w.posthog && typeof w.posthog.capture === "function") {
      w.posthog.capture(event, props);
    }
  } catch {}
}
