export function discountRange(minAED: number, maxAED: number, percent: number) {
    const f = (v: number) => Math.round(v * (1 - percent / 100));
    return { min: f(minAED), max: f(maxAED) };
  }
  