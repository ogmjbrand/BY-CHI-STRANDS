import { products, type Product } from "./products";

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tone: "noir" | "espresso" | "copper" | "honey";
}

export const collections: Collection[] = [
  {
    slug: "raw-reserve",
    name: "The Raw Reserve",
    tagline: "Unprocessed. Uncompromised.",
    description:
      "Bundles cut from a single braid in Vietnam's northern highlands, steam-finished and never chemically touched. This is the hair everything else at ByChiStrands is built from.",
    tone: "noir",
  },
  {
    slug: "single-donor-reserve",
    name: "Single Donor Reserve",
    tagline: "One donor. One cut. No blending.",
    description:
      "The rarest tier we import — every bundle traceable to a single braid, with a uniformity of tone and behaviour that blended hair can never reach. Strictly allocated.",
    tone: "espresso",
  },
  {
    slug: "wig-atelier",
    name: "The Wig Atelier",
    tagline: "Hand-made units that disappear at the hairline.",
    description:
      "Each unit is ventilated by hand over days, pre-plucked into a graduated hairline and finished on Swiss HD lace. Built to be worn for years and rebuilt when you're ready.",
    tone: "noir",
  },
  {
    slug: "colour-editions",
    name: "Colour Editions",
    tagline: "Colour that keeps the cuticle sacred.",
    description:
      "Copper, burgundy, honey and auburn — lifted slowly, bond-protected and glossed in-house, so raw Vietnamese shine survives the transformation.",
    tone: "copper",
  },
  {
    slug: "lace-essentials",
    name: "Lace Essentials",
    tagline: "Closures and frontals that melt, not sit.",
    description:
      "Swiss HD lace closures and frontals matched strand-for-strand to our bundles, pre-plucked with graduated crowns and bleached knots.",
    tone: "honey",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function collectionProducts(slug: string): Product[] {
  return products.filter((p) => p.collection === slug);
}
