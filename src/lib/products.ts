export type Texture =
  | "bone-straight"
  | "natural-straight"
  | "body-wave"
  | "deep-wave"
  | "loose-curls"
  | "spiral-curls";

export type Category = "raw-hair" | "single-donor" | "wigs" | "closures" | "frontals";

export type Tone =
  | "noir"
  | "jet"
  | "espresso"
  | "chestnut"
  | "auburn"
  | "copper"
  | "honey"
  | "burgundy";

export const TONES: Record<Tone, { label: string; base: string; sheen: string; deep: string }> = {
  noir: { label: "Natural Black", base: "#221d19", sheen: "#4a4038", deep: "#120f0d" },
  jet: { label: "Jet Black", base: "#16130f", sheen: "#3a332c", deep: "#0a0908" },
  espresso: { label: "Espresso Brown", base: "#3b2a1e", sheen: "#6b5138", deep: "#241811" },
  chestnut: { label: "Chestnut", base: "#5c3d26", sheen: "#8f6a45", deep: "#3a2617" },
  auburn: { label: "Auburn", base: "#7a3b22", sheen: "#a9633c", deep: "#4d2415" },
  copper: { label: "Copper Flame", base: "#a4531f", sheen: "#d07f3e", deep: "#6d3413" },
  honey: { label: "Honey Blonde", base: "#a97b3f", sheen: "#d3a968", deep: "#7c5729" },
  burgundy: { label: "Burgundy Wine", base: "#5a1f2b", sheen: "#8a3a4a", deep: "#3a121b" },
};

export const TEXTURES: Record<Texture, string> = {
  "bone-straight": "Bone Straight",
  "natural-straight": "Natural Straight",
  "body-wave": "Body Wave",
  "deep-wave": "Deep Wave",
  "loose-curls": "Loose Curls",
  "spiral-curls": "Spiral Curls",
};

export const CATEGORIES: Record<Category, { label: string; blurb: string }> = {
  "raw-hair": {
    label: "Raw Vietnamese Hair",
    blurb: "Unprocessed bundles, cut from a single braid and never chemically altered.",
  },
  "single-donor": {
    label: "Single Donor Reserve",
    blurb: "Traceable to one donor. The rarest tier of Vietnamese hair we import.",
  },
  wigs: {
    label: "Luxury Wigs",
    blurb: "Hand-crafted units on HD lace, built in our atelier to disappear at the hairline.",
  },
  closures: {
    label: "Closures",
    blurb: "5x5 and 4x4 finishing pieces, pre-plucked with a natural crown.",
  },
  frontals: {
    label: "Frontals",
    blurb: "13x4 and 13x6 ear-to-ear lace for a fully versatile install.",
  },
};

export interface Product {
  slug: string;
  name: string;
  category: Category;
  collection: string;
  texture: Texture;
  tone: Tone;
  /** Price at the shortest available length (USD). */
  price: number;
  /** Added per two inches of length. */
  priceStep: number;
  lengths: number[];
  densities?: string[];
  laces?: string[];
  badges?: ("bestseller" | "new" | "limited")[];
  rating: number;
  reviews: number;
  short: string;
  description: string;
  details: string[];
  care: string[];
}

export function priceFor(product: Product, length?: number): number {
  const l = length ?? product.lengths[0];
  return product.price + ((l - product.lengths[0]) / 2) * product.priceStep;
}

const BUNDLE_CARE = [
  "Detangle from ends to roots with a wide-tooth comb before washing.",
  "Wash with sulphate-free shampoo in cool water; condition mid-length to ends.",
  "Air-dry on a stand. Heat-style only with a thermal protectant, below 180°C.",
  "Wrap in silk or satin overnight to preserve lustre.",
];

const WIG_CARE = [
  "Store on a canvas block or wig stand, away from direct sunlight.",
  "Wash every 8–10 wears with sulphate-free products; never sleep in a wet unit.",
  "Use lace-safe adhesives only, and remove with a dedicated dissolver.",
  "Book a Wig Laundry or Revamp service each season to restore the unit.",
];

const LACE_CARE = [
  "Handle lace by the edges; never tug knots at the hairline.",
  "Bleach knots and customise only with a professional — or let our atelier do it.",
  "Wash gently in cool water; pat dry, never wring.",
  "Wrap in silk or satin overnight to preserve lustre.",
];

export const products: Product[] = [
  {
    slug: "raw-bone-straight-bundle",
    name: "Raw Bone Straight",
    category: "raw-hair",
    collection: "raw-reserve",
    texture: "bone-straight",
    tone: "noir",
    price: 95,
    priceStep: 20,
    lengths: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 214,
    short: "Glass-smooth strands that fall like water and hold their finish for years.",
    description:
      "Cut from a single braid in Vietnam's northern highlands, our bone straight bundles are steam-finished — never chemically relaxed — into a mirror-flat fall. The cuticle remains intact and aligned, which is why the shine survives washing, colouring and years of wear.",
    details: [
      "100% raw Vietnamese human hair, cuticle-aligned",
      "Double-drawn weft: full from root to tip",
      "Accepts colour up to platinum without shedding",
      "3.2–3.5 oz per bundle; 3 bundles make a full sew-in to 22\"",
      "Lifespan of 5+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "raw-natural-straight-bundle",
    name: "Raw Natural Straight",
    category: "raw-hair",
    collection: "raw-reserve",
    texture: "natural-straight",
    tone: "espresso",
    price: 90,
    priceStep: 18,
    lengths: [12, 14, 16, 18, 20, 22, 24, 26, 28],
    rating: 4.8,
    reviews: 167,
    short: "Straight with a living, natural body — the way hair actually grows.",
    description:
      "Our natural straight keeps the soft, human movement of the donor's hair: straight, but with the gentle bend and body that makes an install read as grown, not placed. It blow-dries silkier and curls faster than any processed alternative.",
    details: [
      "100% raw Vietnamese human hair, single-braid cut",
      "Naturally soft lustre — no silicone coating",
      "Holds curls for days; reverts beautifully after washing",
      "3.2–3.5 oz per bundle",
      "Lifespan of 5+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "raw-body-wave-bundle",
    name: "Raw Body Wave",
    category: "raw-hair",
    collection: "raw-reserve",
    texture: "body-wave",
    tone: "noir",
    price: 100,
    priceStep: 20,
    lengths: [14, 16, 18, 20, 22, 24, 26, 28, 30],
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 198,
    short: "A deep, glossy S-wave that moves like a slow-motion campaign film.",
    description:
      "Steam-set in wide, even waves, this is the texture our brides ask for by name. It photographs with dimension, air-dries into shape, and straightens glass-flat when you want a second look from the same bundles.",
    details: [
      "100% raw Vietnamese human hair, steam-textured only",
      "Wave pattern returns after every wash",
      "Straightens fully; reverts with water",
      "3.2–3.5 oz per bundle",
      "Lifespan of 5+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "raw-deep-wave-bundle",
    name: "Raw Deep Wave",
    category: "raw-hair",
    collection: "raw-reserve",
    texture: "deep-wave",
    tone: "espresso",
    price: 105,
    priceStep: 20,
    lengths: [14, 16, 18, 20, 22, 24, 26],
    rating: 4.8,
    reviews: 121,
    short: "Tight, defined waves with serious volume and a soft hand-feel.",
    description:
      "A closer, more sculptural wave that builds dramatic density without weight. Deep wave is our most forgiving texture — it hides new growth, survives humidity, and needs nothing more than water and a light mousse to reset.",
    details: [
      "100% raw Vietnamese human hair, steam-textured only",
      "Defined pattern with zero synthetic stiffness",
      "Low-maintenance wash-and-go texture",
      "3.2–3.5 oz per bundle",
      "Lifespan of 5+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "raw-loose-curl-bundle",
    name: "Raw Loose Curls",
    category: "raw-hair",
    collection: "raw-reserve",
    texture: "loose-curls",
    tone: "chestnut",
    price: 110,
    priceStep: 22,
    lengths: [14, 16, 18, 20, 22, 24],
    badges: ["new"],
    rating: 4.7,
    reviews: 64,
    short: "Romantic, bouncing curls with the softness only raw hair can keep.",
    description:
      "Wide, glossy curls set by steam and nothing else. Because the cuticle is untouched, the curl stays soft to the hand and springs back season after season — no crunch, no frizz halo, no product dependence.",
    details: [
      "100% raw Vietnamese human hair, steam-textured only",
      "Curl diameter ≈ 32mm — soft glamour, not spiral",
      "Diffuse-dry for volume or air-dry for definition",
      "3.2–3.5 oz per bundle",
      "Lifespan of 5+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "single-donor-reserve-straight",
    name: "Single Donor Reserve — Straight",
    category: "single-donor",
    collection: "single-donor-reserve",
    texture: "natural-straight",
    tone: "jet",
    price: 150,
    priceStep: 28,
    lengths: [16, 18, 20, 22, 24, 26, 28, 30],
    badges: ["limited"],
    rating: 5.0,
    reviews: 88,
    short: "One donor. One cut. The most uniform hair we are able to source.",
    description:
      "Each Reserve bundle is cut from a single donor's braid and never blended, so strand diameter, tone and behaviour are perfectly uniform from weft to weft. Supply is genuinely limited — when a cut sells through, it is gone.",
    details: [
      "Certified single-donor Vietnamese hair with braid tag",
      "Unmatched uniformity of tone and texture",
      "The ideal canvas for platinum and fashion colour",
      "3.5 oz per bundle; allocation of 6 bundles per client",
      "Lifespan of 6+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "single-donor-reserve-body-wave",
    name: "Single Donor Reserve — Body Wave",
    category: "single-donor",
    collection: "single-donor-reserve",
    texture: "body-wave",
    tone: "espresso",
    price: 160,
    priceStep: 28,
    lengths: [16, 18, 20, 22, 24, 26, 28],
    badges: ["limited"],
    rating: 4.9,
    reviews: 52,
    short: "Reserve-grade uniformity, steam-set into a mirror-gloss wave.",
    description:
      "The same single-braid provenance as our straight Reserve, finished in a wide steam wave. Because every strand shares one origin, the wave pattern is eerily consistent — installs look airbrushed straight out of the salon chair.",
    details: [
      "Certified single-donor Vietnamese hair with braid tag",
      "Steam-textured wave, perfectly repeating pattern",
      "Accepts colour up to level 10",
      "3.5 oz per bundle; allocation of 6 bundles per client",
      "Lifespan of 6+ years with atelier care",
    ],
    care: BUNDLE_CARE,
  },
  {
    slug: "chi-signature-wig",
    name: "The Chi Signature Wig",
    category: "wigs",
    collection: "wig-atelier",
    texture: "bone-straight",
    tone: "noir",
    price: 480,
    priceStep: 45,
    lengths: [16, 18, 20, 22, 24, 26, 28, 30],
    densities: ["180%", "200%", "250%"],
    laces: ["5x5 HD Closure", "13x4 HD Frontal", "13x6 HD Frontal"],
    badges: ["bestseller"],
    rating: 5.0,
    reviews: 326,
    short: "Our flagship unit — bone straight raw hair on vanishing HD lace.",
    description:
      "The wig that built our name. Raw bone straight bundles are ventilated by hand onto Swiss HD lace, pre-plucked with a graduated hairline and finished with bleached knots. It arrives styled, elasticated and ready to wear the day it lands.",
    details: [
      "Hand-made in the ByChiStrands atelier over 3–5 days",
      "Raw Vietnamese hair; glueless construction with adjustable band",
      "Pre-plucked hairline, bleached knots, pre-cut lace",
      "Includes silk storage bag and care card",
      "Rebuildable: the unit can be revamped for years",
    ],
    care: WIG_CARE,
  },
  {
    slug: "velvet-bob-wig",
    name: "The Velvet Bob",
    category: "wigs",
    collection: "wig-atelier",
    texture: "bone-straight",
    tone: "espresso",
    price: 390,
    priceStep: 35,
    lengths: [10, 12, 14],
    densities: ["180%", "200%"],
    laces: ["4x4 Closure", "5x5 HD Closure", "13x4 HD Frontal"],
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 178,
    short: "A razor-precise bob with an espresso gloss. Boardroom to black tie.",
    description:
      "Cut on the unit by our stylists so the line sits exactly at your jaw, the Velvet Bob is the most requested short style in the atelier. Espresso-toned raw hair gives it depth that flat colour can't imitate.",
    details: [
      "Precision-cut blunt bob, personalised at install",
      "Raw Vietnamese hair on HD lace",
      "Glueless construction with adjustable band",
      "Includes silk storage bag and care card",
      "Rebuildable: the unit can be revamped for years",
    ],
    care: WIG_CARE,
  },
  {
    slug: "copper-muse-wig",
    name: "The Copper Muse",
    category: "wigs",
    collection: "colour-editions",
    texture: "body-wave",
    tone: "copper",
    price: 540,
    priceStep: 45,
    lengths: [18, 20, 22, 24, 26],
    densities: ["200%", "250%"],
    laces: ["13x4 HD Frontal", "13x6 HD Frontal"],
    badges: ["new"],
    rating: 4.9,
    reviews: 93,
    short: "Molten copper waves, coloured in-house without compromising the raw cuticle.",
    description:
      "Our colourists lift and tone each Copper Muse by hand over two days, sealing the cuticle after every stage. The result is a dimensional flame — bright at the face, deeper through the lengths — that keeps raw hair's signature shine.",
    details: [
      "Professional in-house colour on raw Vietnamese hair",
      "Olaplex-protected lift; glossed and sealed",
      "Body wave holds after every wash",
      "Includes silk storage bag and colour-care card",
      "Rebuildable and re-tonable in our atelier",
    ],
    care: WIG_CARE,
  },
  {
    slug: "burgundy-reign-wig",
    name: "The Burgundy Reign",
    category: "wigs",
    collection: "colour-editions",
    texture: "body-wave",
    tone: "burgundy",
    price: 540,
    priceStep: 45,
    lengths: [18, 20, 22, 24, 26],
    densities: ["200%", "250%"],
    laces: ["13x4 HD Frontal", "13x6 HD Frontal"],
    rating: 4.8,
    reviews: 71,
    short: "Deep wine with a candlelight sheen — regal, dimensional, unmistakable.",
    description:
      "A saturated burgundy built in layers of wine and black cherry so it shifts with the light rather than sitting flat. Toned and glossed in-house on raw body wave, it is the unit our clients wear to be seen.",
    details: [
      "Professional in-house colour on raw Vietnamese hair",
      "Layered wine tones; glossed and sealed",
      "Body wave holds after every wash",
      "Includes silk storage bag and colour-care card",
      "Rebuildable and re-tonable in our atelier",
    ],
    care: WIG_CARE,
  },
  {
    slug: "honey-glaze-wig",
    name: "The Honey Glaze",
    category: "wigs",
    collection: "colour-editions",
    texture: "loose-curls",
    tone: "honey",
    price: 560,
    priceStep: 45,
    lengths: [16, 18, 20, 22, 24],
    densities: ["180%", "200%"],
    laces: ["5x5 HD Closure", "13x4 HD Frontal"],
    rating: 4.8,
    reviews: 57,
    short: "Sunlit honey curls, lifted gently to keep every coil intact.",
    description:
      "Blonde work on curls is unforgiving, which is why each Honey Glaze is lifted in slow stages with bond protection at every step. The finished tone is warm and golden, and the curl springs exactly as it did in its natural state.",
    details: [
      "Professional in-house colour on raw Vietnamese hair",
      "Bond-protected gradual lift; curl fully preserved",
      "Loose curl pattern, ≈ 32mm diameter",
      "Includes silk storage bag and colour-care card",
      "Rebuildable and re-tonable in our atelier",
    ],
    care: WIG_CARE,
  },
  {
    slug: "parisian-curl-wig",
    name: "The Parisian Curl",
    category: "wigs",
    collection: "wig-atelier",
    texture: "spiral-curls",
    tone: "noir",
    price: 470,
    priceStep: 40,
    lengths: [14, 16, 18, 20, 22],
    densities: ["200%", "250%"],
    laces: ["5x5 HD Closure", "13x4 HD Frontal"],
    rating: 4.9,
    reviews: 112,
    short: "Glossy spiral curls with fringe-framing volume. Effortless, every day.",
    description:
      "Tight, polished spirals ventilated at high density for a full, editorial silhouette that needs no styling beyond a morning shake. Cut with face-framing layers on request at your install appointment.",
    details: [
      "Hand-made spiral curl unit on HD lace",
      "Raw Vietnamese hair, steam-set curls",
      "Glueless construction with adjustable band",
      "Includes silk storage bag and care card",
      "Rebuildable: the unit can be revamped for years",
    ],
    care: WIG_CARE,
  },
  {
    slug: "auburn-ember-wig",
    name: "The Auburn Ember",
    category: "wigs",
    collection: "colour-editions",
    texture: "deep-wave",
    tone: "auburn",
    price: 520,
    priceStep: 42,
    lengths: [16, 18, 20, 22, 24],
    densities: ["200%", "250%"],
    laces: ["5x5 HD Closure", "13x4 HD Frontal"],
    badges: ["new"],
    rating: 4.7,
    reviews: 38,
    short: "Smouldering auburn through a deep, sculptural wave.",
    description:
      "A rich, red-brown that reads expensive in daylight and dramatic after dark, worked through our deep wave texture for maximum dimension. Coloured in-house with the same cuticle-first discipline as every Edition.",
    details: [
      "Professional in-house colour on raw Vietnamese hair",
      "Deep wave texture; pattern survives washing",
      "Olaplex-protected lift; glossed and sealed",
      "Includes silk storage bag and colour-care card",
      "Rebuildable and re-tonable in our atelier",
    ],
    care: WIG_CARE,
  },
  {
    slug: "hd-closure-5x5",
    name: "HD Lace Closure 5x5",
    category: "closures",
    collection: "lace-essentials",
    texture: "bone-straight",
    tone: "noir",
    price: 120,
    priceStep: 18,
    lengths: [14, 16, 18, 20],
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 143,
    short: "A vanishing 5x5 crown on Swiss HD lace, pre-plucked by hand.",
    description:
      "The closure our wig-makers use in the atelier. Swiss HD lace melts against the scalp, and the crown is plucked into a natural graduated density rather than a hard line — so partings look grown, even up close.",
    details: [
      "Swiss HD lace, 5x5 parting space",
      "Raw Vietnamese hair, matched to our bundles",
      "Pre-plucked with lightly bleached knots",
      "Free part — style in any direction",
      "Pairs with 2–3 bundles for a full install",
    ],
    care: LACE_CARE,
  },
  {
    slug: "silk-closure-4x4",
    name: "Silk-Base Closure 4x4",
    category: "closures",
    collection: "lace-essentials",
    texture: "body-wave",
    tone: "espresso",
    price: 110,
    priceStep: 16,
    lengths: [14, 16, 18],
    rating: 4.7,
    reviews: 66,
    short: "A silk-base 4x4 that mimics scalp with zero bleach or tint needed.",
    description:
      "For clients who prefer no chemical work at the crown, the silk base hides knots beneath a scalp-toned layer of silk. It arrives ready to install — no bleaching, no foundation, no customisation required.",
    details: [
      "Silk base with concealed knots, 4x4 parting space",
      "Raw Vietnamese hair, matched to our bundles",
      "No bleach or tint required",
      "Slightly firmer base — ideal for sleek styles",
      "Pairs with 2–3 bundles for a full install",
    ],
    care: LACE_CARE,
  },
  {
    slug: "hd-frontal-13x4",
    name: "HD Lace Frontal 13x4",
    category: "frontals",
    collection: "lace-essentials",
    texture: "bone-straight",
    tone: "noir",
    price: 180,
    priceStep: 22,
    lengths: [14, 16, 18, 20],
    badges: ["bestseller"],
    rating: 4.9,
    reviews: 157,
    short: "Ear-to-ear HD lace for ponytails, side parts and pulled-back styles.",
    description:
      "Thirteen inches of hand-ventilated Swiss HD lace gives you the full hairline — slick it back, part it anywhere, wear it in a high pony. Pre-plucked with baby hairs you can keep or remove at install.",
    details: [
      "Swiss HD lace, 13x4 ear-to-ear coverage",
      "Raw Vietnamese hair, matched to our bundles",
      "Pre-plucked graduated hairline, bleached knots",
      "Style-anywhere parting freedom",
      "Pairs with 3–4 bundles for a full install",
    ],
    care: LACE_CARE,
  },
  {
    slug: "hd-frontal-13x6",
    name: "HD Lace Frontal 13x6",
    category: "frontals",
    collection: "lace-essentials",
    texture: "natural-straight",
    tone: "jet",
    price: 210,
    priceStep: 24,
    lengths: [14, 16, 18, 20],
    badges: ["limited"],
    rating: 5.0,
    reviews: 49,
    short: "Six inches of parting depth — the most versatile lace we import.",
    description:
      "The 13x6 extends the parting space deep into the crown, allowing dramatic middle parts and swept-back styles that read completely natural from every angle. Stocked in limited quantity per import cycle.",
    details: [
      "Swiss HD lace, 13x6 deep-part construction",
      "Raw Vietnamese hair, matched to our bundles",
      "Pre-plucked graduated hairline, bleached knots",
      "Deep 6\" parting space for editorial styles",
      "Pairs with 3–4 bundles for a full install",
    ],
    care: LACE_CARE,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function related(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const score = (p: Product) =>
        (p.collection === product.collection ? 2 : 0) +
        (p.category === product.category ? 2 : 0) +
        (p.texture === product.texture ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, count);
}

export const bestsellers = products.filter((p) => p.badges?.includes("bestseller"));
