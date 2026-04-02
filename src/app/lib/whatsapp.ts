const WHATSAPP_TEMPLATE = [
  "Hi Lena, I'm interested in running ads for my business.",
  "My business is: [type]",
  "My monthly budget is: [range]",
  "My goal is: [leads / sales / bookings]",
].join("\n");

export function buildWhatsAppUrl(phone: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_TEMPLATE)}`;
}
