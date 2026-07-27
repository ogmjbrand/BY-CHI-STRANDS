export interface Service {
  slug: string;
  name: string;
  duration: string;
  price: number;
  deposit: number;
  short: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "hair-importation-service",
    name: "Hair Importation Service",
    duration: "By consultation",
    price: 0,
    deposit: 0,
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
    price: 0,
    deposit: 0,
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
    price: 0,
    deposit: 0,
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
    slug: "hair-tools",
    name: "Sales of Hair Tools",
    duration: "Available to shop",
    price: 0,
    deposit: 0,
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
    name: "Professional Training",
    duration: "Scheduled sessions",
    price: 0,
    deposit: 0,
    short: "Practical education for stylists, wig makers and hair business owners.",
    description:
      "Our training covers the real-world techniques and business knowledge needed to work with confidence in luxury hair.",
    includes: [
      "Technique-led instruction",
      "Hands-on practice",
      "Hair business guidance",
      "Certificate pathway where applicable",
    ],
  },
  {
    slug: "frontal-installation",
    name: "Frontal Installation",
    duration: "2.5 hours",
    price: 120,
    deposit: 40,
    short: "A melted, undetectable install — lace customised to your exact skin tone.",
    description:
      "Our signature service. Your lace is tinted, plucked and melted to your hairline by stylists who install units every single day. You leave camera-ready, with a finish that survives weather, workouts and weeks of wear.",
    includes: [
      "Braid-down and scalp preparation",
      "Lace tinting matched to your skin",
      "Custom pluck, melt and bald-cap method on request",
      "Styling — sleek, curled or pinned to finish",
      "Take-home edge care guidance",
    ],
  },
  {
    slug: "wig-revamp",
    name: "Wig Revamping",
    duration: "48 hours",
    price: 85,
    deposit: 30,
    short: "Your tired unit, rebuilt — new lace, refreshed curls, factory shine.",
    description:
      "We strip product build-up, replace stretched or torn lace, re-pluck the hairline, re-set the texture and finish with a deep gloss treatment. Units come back looking the way they did the day they were made.",
    includes: [
      "Deep cleanse and product strip",
      "Lace replacement or repair where needed",
      "Hairline re-pluck and knot refresh",
      "Texture re-set: straighten, wave or re-curl",
      "Gloss and steam finish",
    ],
  },
  {
    slug: "custom-colouring",
    name: "Wig Colouring",
    duration: "1–2 days",
    price: 150,
    deposit: 50,
    short: "In-house colour by specialists who protect the raw cuticle at every stage.",
    description:
      "From jet black to icy platinum, our colourists lift in slow, bond-protected stages and seal the cuticle after every step. Bring us a reference photo; we build the formula, test a track and colour the full unit only when the tone is right.",
    includes: [
      "Colour consultation with reference matching",
      "Strand test before full application",
      "Bond-protected lift and professional toning",
      "Gloss, seal and steam finish",
      "Colour-care kit to take home",
    ],
  },
  {
    slug: "hair-laundry",
    name: "Hair Laundry",
    duration: "24 hours",
    price: 45,
    deposit: 15,
    short: "A spa day for your unit — cleansed, conditioned, steamed and styled.",
    description:
      "Drop your wig off in the morning and collect it the next day cleansed, deep-conditioned, steamed back to life and styled to wear. The easiest habit for doubling the life of a luxury unit.",
    includes: [
      "Sulphate-free double cleanse",
      "Deep conditioning masque and steam",
      "Detangle and air-dry on a block",
      "Heat style or curl set to finish",
      "Silk-wrap packaging on collection",
    ],
  },
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    duration: "3–5 days",
    price: 130,
    deposit: 45,
    short: "Intensive rescue for matted, shedding or heat-damaged hair.",
    description:
      "Before you retire a unit or a set of bundles, let us assess it. Our restoration protocol reverses matting, rebuilds moisture and protein balance, and re-seals the cuticle — recovering hair most would consider lost.",
    includes: [
      "Damage assessment and honest verdict first",
      "Gentle mechanical detangle over multiple sessions",
      "Protein and moisture rebuilding treatments",
      "Cuticle re-seal and gloss",
      "Preventative care plan for the future",
    ],
  },
  {
    slug: "hair-styling",
    name: "Hair Styling",
    duration: "1.5 hours",
    price: 60,
    deposit: 20,
    short: "Event-ready styling — curls, sleek looks, ponytails and bridal work.",
    description:
      "Whether it's a wedding morning, a shoot or a night that matters, our stylists shape your install or unit into the exact look you have saved on your mood board. Trial sessions available for brides.",
    includes: [
      "Style consultation with reference photos",
      "Heat styling with thermal protection",
      "Pinning, parting and finishing work",
      "Long-wear setting spray finish",
      "Bridal trial sessions on request",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
