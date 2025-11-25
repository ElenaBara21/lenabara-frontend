export type PromoConfig = {
    active: boolean;
    label: string;
    percentOff: number;
    discountedMonths: number;
    minTermMonths: number;
    endsAtISO: string; // GST (+04:00)
    note?: string;
  };
  
export const PROMO: PromoConfig = {
  active: true,
  label: "Launch Offer",
  percentOff: 20,
  discountedMonths: 2,
  minTermMonths: 3,
  endsAtISO: "2026-01-25T23:59:59+04:00",
  note: "Ad spend billed separately. New clients only.",
};

export function isPromoActive(p: PromoConfig) {
  try {
    const end = new Date(p.endsAtISO).getTime();
    return p.active && end > Date.now();
  } catch {
    return p.active;
  }
}
  
