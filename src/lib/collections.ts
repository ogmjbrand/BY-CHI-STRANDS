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
    slug: "bone-straight",
    name: "Bone Straight",
    tagline: "Flat as glass. Full to the ends.",
    description:
      "The house staple. Super Double Drawn raw hair, hand-sorted so the bundle stays as thick at the hemline as it is at the root — which is why it hangs blunt and heavy instead of thinning into wisps.",
    tone: "noir",
  },
  {
    slug: "pixie-collection",
    name: "The Pixie Collection",
    tagline: "Curls that need nothing from you.",
    description:
      "Pixie and kinky curl units that hold their coil without setting, product or patience. Shake them out and wear them — including the original SDD pixie, the best grade the category has.",
    tone: "espresso",
  },
  {
    slug: "funmi-collection",
    name: "The Funmi Edit",
    tagline: "Bounce that will not drop.",
    description:
      "Fringe units built with the curl set into Super Double Drawn hair, so the bounce survives washing. No lace to lay, no glue, no install appointment.",
    tone: "honey",
  },
  {
    slug: "colour-editions",
    name: "Colour Editions",
    tagline: "Colour that keeps the cuticle sacred.",
    description:
      "Wine, copper, honey and rose — lifted in stages with bond protection between each, so the hair keeps the weight and shine that made it worth colouring.",
    tone: "copper",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function collectionProducts(slug: string): Product[] {
  return products.filter((p) => p.collection === slug);
}
