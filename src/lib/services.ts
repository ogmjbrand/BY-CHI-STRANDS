export interface Service {
  slug: string;
  name: string;
  duration: string;
  /** No fixed price schedule exists yet — every service is quoted at consultation. */
  price: null;
  deposit: null;
  short: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "hair-laundry",
    name: "Hair Laundry",
    duration: "24 hours",
    price: null,
    deposit: null,
    short: "A spa day for your unit — cleansed, conditioned, steamed and styled.",
    description:
      "Drop your wig off and collect it the next day cleansed, deep-conditioned, steamed back to life and styled to wear. The easiest habit for doubling the life of a luxury unit.",
    includes: [
      "Sulphate-free double cleanse",
      "Deep conditioning masque and steam",
      "Detangle and air-dry on a block",
      "Heat style or curl set to finish",
    ],
  },
  {
    slug: "hair-importation-service",
    name: "Hair Importation Service",
    duration: "By consultation",
    price: null,
    deposit: null,
    short: "Guided sourcing and importation support for serious hair entrepreneurs.",
    description:
      "We guide clients through the practical stages of sourcing and importing hair, from supplier selection to planning a confident first order.",
    includes: [
      "Importation consultation",
      "Supplier and product guidance",
      "Order planning support",
      "Shipping and receiving guidance",
    ],
  },
  {
    slug: "wig-making",
    name: "Wig Making",
    duration: "By consultation",
    price: null,
    deposit: null,
    short: "Custom wig construction designed around your preferred fit and finish.",
    description:
      "We create bespoke wigs with careful construction, secure fitting and a finish tailored to the look you want to wear.",
    includes: [
      "Consultation and style planning",
      "Custom cap construction",
      "Hair preparation and fitting",
      "Final styling guidance",
    ],
  },
  {
    slug: "ventilation",
    name: "Ventilation",
    duration: "By consultation",
    price: null,
    deposit: null,
    short: "Precision hand ventilation for natural movement and a refined hairline.",
    description:
      "Our ventilation service focuses on a realistic distribution, direction and density for an exceptionally natural-looking unit.",
    includes: [
      "Hairline and density assessment",
      "Hand ventilation service",
      "Natural direction and placement",
      "Final quality check",
    ],
  },
  {
    slug: "frontal-installation",
    name: "Frontal Installation",
    duration: "By consultation",
    price: null,
    deposit: null,
    short: "A melted, undetectable install — lace customised to your exact skin tone. Home service available.",
    description:
      "Our signature service. Your lace is tinted, plucked and melted to your hairline by stylists who install units every single day. Home service is available for this install on request.",
    includes: [
      "Braid-down and scalp preparation",
      "Lace tinting matched to your skin",
      "Custom pluck, melt and bald-cap method on request",
      "Styling — sleek, curled or pinned to finish",
      "Home service available on request",
    ],
  },
  {
    slug: "hair-tools",
    name: "Sales of Hair Tools",
    duration: "Available to shop",
    price: null,
    deposit: null,
    short: "Professional hair tools selected for reliable salon and home care.",
    description:
      "Shop carefully selected tools to support installation, styling and the ongoing care of your hair investment.",
    includes: [
      "Professional styling tools",
      "Installation essentials",
      "Aftercare accessories",
      "Product guidance",
    ],
  },
  {
    slug: "training",
    name: "Training",
    duration: "Scheduled sessions",
    price: null,
    deposit: null,
    short: "Practical education for stylists, wig makers and hair business owners.",
    description:
      "Our training covers the real-world techniques and business knowledge needed to work with confidence in luxury hair.",
    includes: [
      "Technique-led instruction",
      "Hands-on practice",
      "Hair business guidance",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
