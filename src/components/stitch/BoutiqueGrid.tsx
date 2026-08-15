"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, priceFrom, type Product } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "./ProductMedia";

/** Unpriced pieces sort last rather than pretending to be free. */
const byPrice = (dir: 1 | -1) => (a: Product, b: Product) => {
  const pa = priceFrom(a);
  const pb = priceFrom(b);
  if (pa === null && pb === null) return 0;
  if (pa === null) return 1;
  if (pb === null) return -1;
  return (pa - pb) * dir;
};

const SORTS = {
  Featured: (a: Product, b: Product) =>
    Number(b.badges?.includes("bestseller") ?? false) -
    Number(a.badges?.includes("bestseller") ?? false),
  "Newest Arrivals": (a: Product, b: Product) =>
    Number(b.badges?.includes("new") ?? false) - Number(a.badges?.includes("new") ?? false),
  "Investment: High to Low": byPrice(-1),
  "Investment: Low to High": byPrice(1),
} as const;

type SortKey = keyof typeof SORTS;

/**
 * The Boutique's sticky filter row and product grid. The sort control used
 * to be decorative — every option rendered the same catalogue order — so
 * this colocates the sort state with the grid it actually drives.
 */
export function BoutiqueGrid({
  collectionLinks,
}: {
  collectionLinks: { slug: string; name: string }[];
}) {
  const [sort, setSort] = useState<SortKey>("Featured");
  const sorted = useMemo(() => products.slice().sort(SORTS[sort]), [sort]);

  return (
    <>
      <section className="sticky top-[88px] z-40 bg-surface/90 backdrop-blur-md border-y border-outline-variant/20 mb-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-8">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest border-b-2 border-primary pb-1">
              All Creations
            </span>
            {collectionLinks.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary tracking-widest transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* Was a <span>, so the control had no accessible name. */}
            <label htmlFor="boutique-sort" className="font-label-caps text-label-caps uppercase text-outline tracking-[0.15em]">
              Sort By:
            </label>
            <select
              id="boutique-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent border-none font-label-caps text-label-caps uppercase text-on-surface focus:ring-0 cursor-pointer tracking-[0.15em]"
            >
              {Object.keys(SORTS).map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-padding">
        {/* The cards are h3; without this the outline jumps from the page h1
            straight past h2, which is what screen-reader users navigate by. */}
        <h2 className="sr-only">All pieces</h2>
        {/* Two across on a phone. One per row put each piece at ~450px tall,
            so ten pieces was 4,500px of scrolling to see the catalogue. */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-gutter md:gap-y-20 lg:grid-cols-3">
          {sorted.map((p) => {
            const price = priceFrom(p);
            return (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="group cursor-pointer">
                <article>
                  <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-surface-container">
                    <ProductMedia
                      media={heroFor(p.slug)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                    {p.badges?.includes("limited") ? (
                      <div className="absolute top-6 right-6 bg-white px-4 py-1">
                        <span className="font-label-caps text-[10px] uppercase tracking-tighter text-noir">Limited Edition</span>
                      </div>
                    ) : null}
                  </div>
                  <div className="text-center md:text-left">
                    <span className="font-label-caps text-label-caps uppercase text-outline mb-2 block tracking-[0.15em]">
                      {"SDD"}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2 group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="font-body-md text-primary font-semibold mb-6">
                      {price === null ? "Enquire for Price" : formatPrice(price)}
                    </p>
                    <span className="font-label-caps text-label-caps uppercase border-b border-outline group-hover:border-primary group-hover:text-primary transition-all tracking-widest pb-1">
                      View Piece
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
