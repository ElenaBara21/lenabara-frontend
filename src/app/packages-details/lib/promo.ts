export type PromoConfig = {
    active: boolean;
    label: string;
    percentOff: number;
    discountedMonths: number;
    minTermMonths: number;
    endsAtISO: string; // GST (+04:00)
    note?: string;
  };

const PROMO_DURATION_DAYS = 60;
const promoEndsAtISO = new Date(
  Date.now() + PROMO_DURATION_DAYS * 24 * 60 * 60 * 1000
).toISOString();

export const PROMO: PromoConfig = {
  active: true,
  label: "Pilot Launch",
  percentOff: 20,
  discountedMonths: 2,
  minTermMonths: 3,
  endsAtISO: promoEndsAtISO,
  note: "Promo valid for 60 days. Ad spend billed separately. New clients only.",
};

export function isPromoActive(p: PromoConfig) {
  try {
    const end = new Date(p.endsAtISO).getTime();
    return p.active && end > Date.now();
  } catch {
    return p.active;
  }
}
  
