export const site = {
  name: "Sarvanta Global",
  url: "https://www.sarvantaglobal.in",
  email: "info@sarvantaglobal.in",
  phoneDisplay: "+91 99004 22441",
  phoneTel: "+919900422441",
  whatsapp: "919900422441",
  location: "Bangalore",
  description:
    "Sarvanta Global, Bangalore, sources and trades Indian spices and agri commodities in bulk for businesses in India and abroad. Request a quote — we reply within 24 hours.",
} as const;

export function whatsappHref(message?: string) {
  const text =
    message ??
    "Hello Sarvanta Global, I would like a quote. Please tell me the next step.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function quoteHref(slug?: string) {
  if (!slug) return "/contact";
  return `/contact?product=${encodeURIComponent(slug)}`;
}
