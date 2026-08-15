export type Texture =
  | "bone-straight"
  | "natural-straight"
  | "pixie-curls"
  | "funmi-curls"
  | "deep-curls"
  | "kinky-curls";

export type Category = "wigs" | "closures" | "frontals" | "raw-hair" | "single-donor";

export type Origin = "vietnam" | "china" | "mexico";

export type Tone =
  | "noir"
  | "espresso"
  | "wine"
  | "burgundy"
  | "copper"
  | "honey"
  | "rose";

/*
 * Origin is still recorded against each piece — it is a true attribute of the
 * stock and ByChi Strands sorts by it internally — but it is no longer surfaced
 * anywhere a visitor reads, and there is no longer a label map, because the
 * only thing a label map was for was printing the country name on the page.
 */

export const TONES: Record<Tone, { label: string; swatch: string }> = {
  noir: { label: "Natural Black", swatch: "#1c1714" },
  espresso: { label: "Espresso Brown", swatch: "#3b2a1e" },
  wine: { label: "Wine · Dark Root", swatch: "#5c1f2a" },
  burgundy: { label: "Burgundy", swatch: "#6d1f33" },
  copper: { label: "Copper Flame", swatch: "#b1571f" },
  honey: { label: "Honey Blonde", swatch: "#a97b3f" },
  rose: { label: "Rose", swatch: "#c2447a" },
};

export const TEXTURES: Record<Texture, string> = {
  "bone-straight": "Bone Straight",
  "natural-straight": "Natural Straight",
  "pixie-curls": "Pixie Curls",
  "funmi-curls": "Funmi Curls",
  "deep-curls": "Deep Curls",
  "kinky-curls": "Kinky Curls",
};

export const CATEGORIES: Record<Category, { label: string; blurb: string }> = {
  wigs: { label: "Luxury Wigs", blurb: "Ready-to-wear units built on closure and frontal lace in our atelier." },
  closures: { label: "Closures", blurb: "2x4, 2x6 and 5x5 finishing pieces, pre-plucked with a natural crown." },
  frontals: { label: "Frontals", blurb: "Ear-to-ear lace for a fully versatile install." },
  "raw-hair": { label: "Raw Bundles", blurb: "Unprocessed wefts, cut from a single braid and never chemically altered." },
  "single-donor": { label: "Single Donor Reserve", blurb: "Traceable to one donor — the rarest tier we import." },
};

export interface Variant {
  length: number;
  lace: string;
  grams?: number;
  price: number | null;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  collection: string;
  origin: Origin;
  texture: Texture;
  tone: Tone;
  sdd: boolean;
  variants: Variant[];
  badges?: ("bestseller" | "new" | "limited")[];
  short: string;
  description: string;
  details: string[];
  care: string[];
}

export function priceFrom(product: Product): number | null {
  const listed = product.variants.map((v) => v.price).filter((p): p is number => typeof p === "number");
  return listed.length ? Math.min(...listed) : null;
}

export function priceFor(product: Product, length?: number, lace?: string): number | null {
  if (length === undefined) return priceFrom(product);
  const exact = product.variants.find((v) => v.length === length && (lace === undefined || v.lace === lace));
  if (exact) return exact.price;
  const sameLength = product.variants.filter((v) => v.length === length);
  if (sameLength.length) {
    const listed = sameLength.map((v) => v.price).filter((p): p is number => typeof p === "number");
    return listed.length ? Math.min(...listed) : null;
  }
  return priceFrom(product);
}

export function lengthsOf(product: Product): number[] {
  return Array.from(new Set(product.variants.map((v) => v.length))).sort((a, b) => a - b);
}

export function lacesOf(product: Product, length?: number): string[] {
  return Array.from(new Set(product.variants.filter((v) => (length === undefined ? true : v.length === length)).map((v) => v.lace)));
}

const WIG_CARE = [
  "Store on a wig stand away from direct sunlight; never fold the lace.",
  "Wash every 8–10 wears with a sulphate-free shampoo in cool water.",
  "Air-dry on the stand. Heat-style with a protectant only, below 180°C.",
  "Wrap in silk or satin overnight to hold the pattern and the shine.",
];

const CURL_CARE = [
  "Detangle damp with fingers or a wide-tooth comb, ends to roots — never dry.",
  "Wash with a sulphate-free shampoo, condition generously, scrunch dry.",
  "Refresh with water and a light leave-in; the curl pattern returns on its own.",
  "Wrap in silk or satin overnight; avoid brushing the curl out.",
];

export const products: Product[] = [
  {
    slug: "sdd-bone-straight",
    name: "SDD Bone Straight",
    category: "wigs",
    collection: "bone-straight",
    origin: "vietnam",
    texture: "bone-straight",
    tone: "noir",
    sdd: true,
    variants: [
      { length: 10, lace: "2x4 Closure", price: 150_000 },
      { length: 10, lace: "2x6 Closure", price: 160_000 },
      { length: 10, lace: "5x5 Closure", price: 185_000 },
      { length: 12, lace: "5x5 Closure", grams: 200, price: 210_000 },
      { length: 16, lace: "5x5 Closure", price: null },
    ],
    badges: ["bestseller"],
    short: "The ByChi Strands staple — Super Double Drawn raw hair, flat as glass root to tip.",
    description: "Super Double Drawn means the short strands are pulled out by hand until the bundle is as thick at the ends as it is at the root. That is why this unit keeps a blunt, heavy hemline instead of thinning into wisps, and why it still hangs full after a year of wear. Imported directly from source and built onto closure lace in the atelier.",
    details: ["Super Double Drawn human hair", "Full from root to tip — no tapering at the ends", "Choice of 2x4, 2x6 or 5x5 closure", "12\" is a 200-gram build for extra density", "Can be washed, straightened and coloured by a professional"],
    care: WIG_CARE,
  },
  {
    slug: "sdd-bone-straight-wine",
    name: "SDD Bone Straight — Wine & Dark Root",
    category: "wigs",
    collection: "colour-editions",
    origin: "vietnam",
    texture: "bone-straight",
    tone: "wine",
    sdd: true,
    variants: [{ length: 10, lace: "2x6 Closure", price: null }],
    badges: ["new"],
    short: "Deep wine through the lengths, shadowed at the root so the colour reads grown-in.",
    description: "The same Super Double Drawn bone straight base, coloured wine and left dark at the root. The shadowed root is what makes it convincing: no hard line at the parting, no flat block of dye — just depth that catches light the way lived-in colour does.",
    details: ["Super Double Drawn human hair", "Wine lengths with a deliberate dark root", "2x6 closure for a deep, versatile parting", "Coloured on raw hair; the cuticle stays sealed", "Re-tonable in our atelier as it softens"],
    care: WIG_CARE,
  },
  {
    slug: "sdd-pixie-curls-burgundy",
    name: "SDD Pixie Curls — Burgundy",
    category: "wigs",
    collection: "pixie-collection",
    origin: "china",
    texture: "pixie-curls",
    tone: "burgundy",
    sdd: true,
    variants: [{ length: 16, lace: "Factory 5x5 Closure", price: null }],
    short: "Tight, springy pixie curls in burgundy on a factory-finished 5x5 closure.",
    description: "Pixie curls hold their coil without setting, which makes this the lowest-effort unit we sell: shake it out and go. The burgundy is factory-applied to the curl before construction, so the colour sits evenly through every coil rather than pooling at the ends.",
    details: ["Super Double Drawn pixie curl hair", "Factory 5x5 closure, ready to install", "Burgundy applied before construction for even coverage", "Wash-and-go: the curl returns with water", "Never brush dry — finger-style only"],
    care: CURL_CARE,
  },
  {
    slug: "luxury-sdd-pixie",
    name: "Luxury Super Double Drawn Pixie",
    category: "wigs",
    collection: "pixie-collection",
    origin: "mexico",
    texture: "pixie-curls",
    tone: "noir",
    sdd: true,
    variants: [{ length: 26, lace: "5x5 Closure", grams: 200, price: 575_000 }],
    badges: ["limited"],
    short: "The original SDD pixie — the best grade available, and the one everything else imitates.",
    description: "This is the piece we hold up as the ceiling of the category. Super Double Drawn pixie is the original grade: every strand runs the full length, so a 26-inch unit still carries 200 grams of density at the hemline instead of thinning to a point. Nothing else in the shop hangs like it.",
    details: ["Original Super Double Drawn pixie — best available grade", "26 inches at a full 200 grams", "5x5 closure, atelier-finished", "Curl holds without product or setting", "Limited allocation per import cycle"],
    care: CURL_CARE,
  },
  {
    slug: "funmi-fringe-wig",
    name: "Funmi Fringe Wig",
    category: "wigs",
    collection: "funmi-collection",
    origin: "vietnam",
    texture: "funmi-curls",
    tone: "noir",
    sdd: true,
    variants: [{ length: 12, lace: "Fringe — no lace needed", grams: 200, price: 170_000 }],
    badges: ["bestseller"],
    short: "A fringe unit with a bouncy funmi curl — no lace to lay, no adhesive, no install.",
    description: "Built with its own fringe, so there is no hairline to melt and nothing to glue: it goes straight on. The funmi curl is set into Super Double Drawn hair, which is why the bounce survives washing — the curls will not drop out the way a heat-set curl does.",
    details: ["Super Double Drawn quality, 200 grams at 12 inches", "Fringe front — no lace, no glue, no install appointment", "Natural colour", "The curls will not fall out", "Ready to wear out of the bag"],
    care: CURL_CARE,
  },
  {
    slug: "sdd-copper-flame-straight",
    name: "SDD Copper Flame Straight",
    category: "wigs",
    collection: "colour-editions",
    origin: "vietnam",
    texture: "bone-straight",
    tone: "copper",
    sdd: true,
    variants: [{ length: 20, lace: "5x5 Closure", price: null }, { length: 24, lace: "13x4 Frontal", price: null }],
    short: "Molten copper on a bone straight base — the loudest thing in the studio.",
    description: "Copper is the colour clients photograph most, and it only works on hair that can take a lift without frying. Super Double Drawn raw hair holds the tone bright at the face and deeper through the lengths, with the flat, liquid hang that made bone straight the ByChi Strands signature.",
    details: ["Super Double Drawn human hair", "Copper lifted and toned on raw hair", "Closure or frontal construction", "Glass-flat hang with a high shine", "Re-tonable in our atelier"],
    care: WIG_CARE,
  },
  {
    slug: "sdd-honey-blonde-straight",
    name: "SDD Honey Blonde Straight",
    category: "wigs",
    collection: "colour-editions",
    origin: "vietnam",
    texture: "bone-straight",
    tone: "honey",
    sdd: true,
    variants: [{ length: 22, lace: "13x4 Frontal", price: null }],
    short: "Warm honey blonde, lifted slowly so the hair keeps its weight.",
    description: "Blonde is where cheap hair gives itself away — it goes brittle and dull the moment it is lifted. This unit is taken up in stages with bond protection between each, so the finished honey stays soft in the hand and keeps the shine that makes it read as real.",
    details: ["Super Double Drawn human hair", "Gradual bond-protected lift to honey", "13x4 frontal for full parting freedom", "Soft hand-feel; no brittleness at the ends", "Re-tonable in our atelier"],
    care: WIG_CARE,
  },
  {
    slug: "sdd-honey-deep-curls",
    name: "SDD Honey Deep Curls",
    category: "wigs",
    collection: "colour-editions",
    origin: "vietnam",
    texture: "deep-curls",
    tone: "honey",
    sdd: true,
    variants: [{ length: 24, lace: "13x4 Frontal", price: null }],
    badges: ["new"],
    short: "Long honey curls with serious volume — colour and curl on one unit.",
    description: "Colouring curls without collapsing the pattern is the hardest work our colourists do. Lifted in stages and dried without heat, this unit keeps every coil intact while carrying a warm honey through the lengths. It arrives full, long and ready to wear.",
    details: ["Super Double Drawn human hair", "Deep curl pattern preserved through the lift", "13x4 frontal construction", "Diffuse or air-dry; the curl needs no setting", "Re-tonable in our atelier"],
    care: CURL_CARE,
  },
  {
    slug: "sdd-bold-pixie-curls",
    name: "SDD Bold Pixie Curls",
    category: "wigs",
    collection: "pixie-collection",
    origin: "china",
    texture: "pixie-curls",
    tone: "noir",
    sdd: true,
    variants: [
      { length: 14, lace: "5x5 Closure", grams: 200, price: 210_000 },
      { length: 16, lace: "5x5 Closure", grams: 200, price: 260_000 },
      { length: 18, lace: "5x5 Closure", grams: 200, price: 295_000 },
      { length: 20, lace: "5x5 Closure", grams: 200, price: 340_000 },
      { length: 22, lace: "5x5 Closure", grams: 200, price: 385_000 },
      { length: 24, lace: "5x5 Closure", grams: 300, price: 535_000 },
    ],
    badges: ["new"],
    short: "Bold, springy pixie curls in natural colour with a 5x5 closure and serious volume.",
    description: "A single Bold Pixie Curls collection piece, offered in six lengths. The same 5x5 closure construction and natural colour carry through every option, while the 24-inch build increases to 300 grams for the extra density needed at that length. Select one length to see its exact price and volume.",
    details: ["Super Double Drawn human hair", "Bold pixie curl pattern with natural colour", "5x5 closure construction across all lengths", "14–22 inches: 200 grams", "24 inches: 300 grams", "One product video shared across all six length variants"],
    care: CURL_CARE,
  },
  {
    slug: "rose-bob-wig",
    name: "Rose Bob",
    category: "wigs",
    collection: "colour-editions",
    origin: "vietnam",
    texture: "bone-straight",
    tone: "rose",
    sdd: true,
    variants: [{ length: 12, lace: "13x4 Frontal", price: null }],
    badges: ["new"],
    short: "A blunt rose-pink bob on transparent frontal lace. Made to be noticed.",
    description: "Pink is unforgiving: it needs a clean, even lift underneath or it turns muddy. This bob is built on Super Double Drawn hair taken to a true pale base first, so the rose sits clear and bright, then cut blunt at the jaw for a hard, graphic line.",
    details: ["Super Double Drawn human hair", "Rose tone over an even pre-lift", "13x4 frontal, blunt-cut at the jaw", "Personalised at your install appointment", "Re-tonable as the rose softens"],
    care: WIG_CARE,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function related(product: Product, count = 4): Product[] {
  return products.filter((p) => p.slug !== product.slug).sort((a, b) => {
    const score = (p: Product) => (p.collection === product.collection ? 3 : 0) + (p.texture === product.texture ? 2 : 0) + (p.origin === product.origin ? 1 : 0);
    return score(b) - score(a);
  }).slice(0, count);
}

export const bestsellers = products.filter((p) => p.badges?.includes("bestseller"));
