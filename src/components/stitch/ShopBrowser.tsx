"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  products,
  priceFrom,
  lengthsOf,
  lacesOf,
  CATEGORIES,
  TEXTURES,
  ORIGINS,
  type Origin,
  type Texture,
  type Product,
} from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "./ProductMedia";
import { useStore } from "@/context/StoreContext";

const BADGE_LABEL: Record<string, string> = {
  bestseller: "Bestseller",
  new: "New Arrival",
  limited: "Limited",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * The Shop All screen's filter rail and product grid, driven by the real
 * catalogue. Markup and class names are the design's own — only the content
 * and the interactions behind it are live.
 */

const ORIGIN_FILTERS: Origin[] = ["vietnam", "china", "mexico"];

const LENGTHS = [10, 12, 16, 18, 20, 22, 24, 26];

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
  "Newest Arrivals": (a: Product, b: Product) =>
    Number(b.badges?.includes("new") ?? false) -
    Number(a.badges?.includes("new") ?? false),
  "Price: Low to High": byPrice(1),
  "Price: High to Low": byPrice(-1),
} as const;

type SortKey = keyof typeof SORTS;

export function ShopBrowser() {
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [length, setLength] = useState<number | null>(null);
  const [texture, setTexture] = useState<Texture | null>(null);
  const [sort, setSort] = useState<SortKey>("Newest Arrivals");
  const [laceOpen, setLaceOpen] = useState(false);
  const [lace, setLace] = useState<string | null>(null);

  const { wishlist, toggleWishlist, hydrated } = useStore();

  const textures = useMemo(
    () => Array.from(new Set(products.map((p) => p.texture))),
    []
  );

  const laces = useMemo(
    () => Array.from(new Set(products.flatMap((p) => lacesOf(p)))),
    []
  );

  const visible = useMemo(
    () =>
      products
        .filter((p) => (origins.length ? origins.includes(p.origin) : true))
        .filter((p) => (length ? lengthsOf(p).includes(length) : true))
        .filter((p) => (texture ? p.texture === texture : true))
        .filter((p) => (lace ? lacesOf(p).includes(lace) : true))
        .slice()
        .sort(SORTS[sort]),
    [origins, length, texture, lace, sort]
  );

  const toggleOrigin = (o: Origin) =>
    setOrigins((prev) =>
      prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]
    );

  const clearAll = () => {
    setOrigins([]);
    setLength(null);
    setTexture(null);
    setLace(null);
  };

  const filtersActive =
    origins.length > 0 || length !== null || texture !== null || lace !== null;

  return (
    <>
      {/* Filters Sidebar (Sticky) */}
      <aside className="w-full lg:w-64 flex-shrink-0">
        <div className="sticky top-32 space-y-10">
          <div>
            <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
              Origin
            </h3>
            <div className="space-y-3">
              {ORIGIN_FILTERS.map((o) => (
                <label
                  key={o}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    className="rounded-sm border-outline text-primary focus:ring-primary w-4 h-4"
                    type="checkbox"
                    checked={origins.includes(o)}
                    onChange={() => toggleOrigin(o)}
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    {ORIGINS[o]} SDD
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
              Length
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {LENGTHS.map((l) => {
                const on = length === l;
                return (
                  <button
                    key={l}
                    onClick={() => setLength(on ? null : l)}
                    className={
                      on
                        ? "border border-primary bg-primary-fixed/20 py-2 font-body-sm text-body-sm text-primary transition-all"
                        : "border border-outline-variant py-2 font-body-sm text-body-sm hover:border-primary hover:text-primary transition-all"
                    }
                  >
                    {l}&quot;
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-label-caps text-label-caps uppercase text-primary mb-6 tracking-[0.15em]">
              Texture
            </h3>
            <div className="space-y-3">
              {textures.map((t) => (
                <label
                  key={t}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    className="rounded-full border-outline text-primary focus:ring-primary w-4 h-4"
                    name="texture"
                    type="radio"
                    checked={texture === t}
                    onChange={() => setTexture(texture === t ? null : t)}
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    {TEXTURES[t]}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant/30">
            <button
              onClick={() => setLaceOpen((v) => !v)}
              className="w-full text-left font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all flex justify-between items-center"
            >
              Lace Type
              <span
                className="material-symbols-outlined transition-transform duration-300"
                style={{ transform: laceOpen ? "rotate(180deg)" : "none" }}
              >
                expand_more
              </span>
            </button>
            {laceOpen ? (
              <div className="space-y-3 mt-5">
                {laces.map((l) => (
                  <label
                    key={l}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      className="rounded-full border-outline text-primary focus:ring-primary w-4 h-4"
                      name="lace"
                      type="radio"
                      checked={lace === l}
                      onChange={() => setLace(lace === l ? null : l)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      {l}
                    </span>
                  </label>
                ))}
              </div>
            ) : null}
          </div>

          {filtersActive ? (
            <button
              onClick={clearAll}
              className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface border-b border-primary pb-1 hover:text-primary transition-colors"
            >
              Clear Filters
            </button>
          ) : null}
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-10">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Showing {visible.length} of {products.length} results
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Sort by:
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="border-none bg-transparent font-body-sm text-body-sm focus:ring-0 cursor-pointer"
            >
              {Object.keys(SORTS).map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="border border-outline-variant/30 bg-surface-container-lowest p-16 text-center">
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-8">
              No pieces match that combination.
            </p>
            <button
              onClick={clearAll}
              className="bg-on-surface text-surface px-10 py-4 rounded-lg font-label-caps tracking-widest hover:bg-primary transition-all duration-500 uppercase"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-gutter gap-y-16">
            {visible.map((p, i) => {
              const saved = hydrated && wishlist.includes(p.slug);
              const featured = !filtersActive && i === 0;
              return (
                <motion.div
                  key={p.slug}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  data-slug={p.slug}
                  className={`product-card group relative ${featured ? "md:col-span-2 xl:col-span-2" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden bg-surface-container-low border border-outline-variant/10 ${
                      featured ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[3/4]"
                    }`}
                  >
                    <Link href={`/shop/${p.slug}`} className="block w-full h-full">
                      <ProductMedia
                        media={heroFor(p.slug)}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </Link>
                    {p.badges?.length ? (
                      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        {p.badges.map((b) => (
                          <span
                            key={b}
                            className="bg-on-surface text-surface text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 font-label-caps"
                          >
                            {BADGE_LABEL[b]}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="product-card-overlay absolute inset-0 bg-black/5 backdrop-blur-[2px] flex flex-col justify-end p-6">
                      <Link
                        href={`/shop/${p.slug}`}
                        className="w-full text-center bg-white text-on-surface py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Quick View
                      </Link>
                    </div>
                    <button
                      onClick={() => toggleWishlist(p.slug)}
                      aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors z-10"
                    >
                      <span
                        className={`material-symbols-outlined ${saved ? "text-primary" : ""}`}
                        style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className={`mt-6 space-y-1 ${featured ? "md:max-w-md" : ""}`}>
                    <h3
                      className={`font-headline-lg text-on-surface group-hover:text-primary transition-colors ${
                        featured ? "text-headline-lg md:text-2xl" : "text-body-xl"
                      }`}
                    >
                      <Link href={`/shop/${p.slug}`}>{p.name}</Link>
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {ORIGINS[p.origin]} {p.sdd ? "SDD" : ""} ·{" "}
                      {TEXTURES[p.texture]} ·{" "}
                      {(() => {
                        const ls = lengthsOf(p);
                        return ls.length > 1
                          ? `${ls[0]}–${ls[ls.length - 1]}"`
                          : `${ls[0]}"`;
                      })()}
                    </p>
                    <p className="font-body-md text-body-md font-semibold text-secondary pt-2">
                      {priceFrom(p) === null
                        ? "Price on request"
                        : `From ${formatPrice(priceFrom(p))}`}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
