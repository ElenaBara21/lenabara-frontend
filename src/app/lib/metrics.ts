export type ROASInput = {
  revenue: number;
  adSpend: number;
};

/**
 * Returns the Return On Ad Spend (ROAS).
 *
 * Formula: ROAS = revenue / adSpend
 *
 * @param revenue - Total revenue attributed to the campaign
 * @param adSpend - Total ad spend for the campaign
 * @returns ROAS as a number (e.g. 4 means $4 revenue per $1 spent), or null if adSpend is 0
 */
export function calculateROAS({ revenue, adSpend }: ROASInput): number | null {
  if (typeof revenue !== "number" || typeof adSpend !== "number") return null;
  if (!isFinite(revenue) || !isFinite(adSpend)) return null;
  if (adSpend === 0) return null;

  return revenue / adSpend;
}

/**
 * Formats a ROAS number as a readable string (e.g. 4 -> "4.00x").
 */
export function formatROAS(roas: number | null, decimals = 2): string {
  if (!roas || !isFinite(roas)) return "—";
  return `${roas.toFixed(decimals)}x`;
}
