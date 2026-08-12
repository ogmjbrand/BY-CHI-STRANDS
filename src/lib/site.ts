export const site = {
  name: "ByChiStrands",
  tagline: "Luxury Human Hair. Crafted for Confidence.",
  motto: "We'll style while you smile.",
  description:
    "ByChiStrands sources, crafts and cares for exceptional human hair — raw bundles, single-donor collections, luxury wigs, closures and frontals — alongside atelier services and importation education.",
  url: "https://bychistrands.com",
  email: "concierge@bychistrands.com",
  phone: "+234 902 647 5176",
  whatsapp: "https://wa.me/2349026475176",
  whatsappNumber: "+234 902 647 5176",
  currency: "NGN",
  address: "Lagos, Nigeria",
  hours: [
    { days: "Monday — Friday", time: "9:00 AM — 7:00 PM" },
    { days: "Saturday", time: "10:00 AM — 8:00 PM" },
    { days: "Sunday", time: "By private appointment" },
  ],
  socials: {
    instagram: {
      handle: "@bychistrands2",
      url: "https://www.instagram.com/bychistrands2",
    },
    tiktok: { handle: "@bychistrands", url: "https://vt.tiktok.com/ZSXKJKCpo/" },
    facebook: {
      handle: "ByChiStrands",
      url: "https://www.facebook.com/share/1TY1VSCdWV/",
    },
  },
} as const;

/** Pre-filled WhatsApp enquiry, used wherever a piece is quoted on request. */
export function whatsappLink(message?: string): string {
  return message
    ? `${site.whatsapp}?text=${encodeURIComponent(message)}`
    : site.whatsapp;
}

export const nav = {
  primary: [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Services", href: "/services" },
    { label: "Academy", href: "/academy" },
    { label: "Gallery", href: "/gallery" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
  ],
  secondary: [
    { label: "Book an Appointment", href: "/book" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Shipping", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
