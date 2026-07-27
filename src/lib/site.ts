export const site = {
  name: "ByChiStrands",
  tagline: "Luxury Vietnamese Hair. Crafted for Confidence.",
  motto: "We'll style while you smile.",
  description:
    "ByChiStrands imports, crafts and cares for authentic Vietnamese human hair — raw bundles, single-donor collections, luxury wigs, closures and frontals — alongside atelier services and importation education.",
  url: "https://bychistrands.com",
  email: "concierge@bychistrands.com",
  phone: "+234 000 000 0000",
  whatsapp: "https://wa.me/2340000000000",
  address: "The Strand Atelier, Lekki Phase 1, Lagos, Nigeria",
  hours: [
    { days: "Monday — Friday", time: "9:00 AM — 7:00 PM" },
    { days: "Saturday", time: "10:00 AM — 8:00 PM" },
    { days: "Sunday", time: "By private appointment" },
  ],
  socials: {
    instagram: { handle: "@bychistrands2", url: "https://instagram.com/bychistrands2" },
    tiktok: { handle: "@bychistrands", url: "https://tiktok.com/@bychistrands" },
    facebook: { handle: "ByChiStrands", url: "https://facebook.com/bychistrands" },
  },
} as const;

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
