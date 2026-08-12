"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { allProductMedia } from "@/lib/media";
import { testimonials } from "@/lib/testimonials";
import { getProduct } from "@/lib/products";
import { ProductMedia } from "@/components/stitch/ProductMedia";

/**
 * The gallery wall.
 *
 * It used to be five clips in a uniform three-column grid of identical
 * 3:4 cards — a shape that reads as a product listing however good the
 * footage is, and which used six of the thirty pieces of real house media
 * sitting behind the product pages.
 *
 * This is all of it, in a masonry that lets each frame keep a height of its
 * own. The varied heights are the composition: a wall of equal rectangles is
 * a grid no matter how it is spaced.
 *
 * Filtering is client-side over an already-loaded set — no request, no
 * spinner, no empty-results dead end, because every filter here is derived
 * from the media that exists rather than a fixed list of categories some of
 * which might match nothing.
 */

/* Three ratios, cycled. Enough variety to break the grid, few enough that the
   columns still settle into a balanced wall rather than a ragged one. */
const RATIOS = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[9/16]"];

type Entry = {
  key: string;
  media: ReturnType<typeof allProductMedia>[number]["media"];
  caption: string;
  context: string;
  href?: string;
  group: "clients" | "collection";
};

function buildEntries(): Entry[] {
  const clients: Entry[] = testimonials.map((t) => ({
    key: t.clip.src,
    media: t.clip,
    caption: t.caption,
    context: t.context,
    group: "clients",
  }));

  const collection: Entry[] = allProductMedia().map(({ slug, media }) => {
    const product = getProduct(slug);
    return {
      key: media.src,
      media,
      // The alt text on every asset already describes what the frame shows,
      // written by viewing the footage. Reusing it keeps the caption honest
      // and means there is exactly one place to correct a description.
      caption: media.alt,
      context: product?.name ?? "The collection",
      href: product ? `/shop/${product.slug}` : undefined,
      group: "collection",
    };
  });

  /*
   * Interleaved rather than blocked, so the wall reads as one gallery instead
   * of a client section followed by a catalogue section.
   */
  const out: Entry[] = [];
  const max = Math.max(clients.length, collection.length);
  for (let i = 0; i < max; i++) {
    if (clients[i]) out.push(clients[i]);
    if (collection[i]) out.push(collection[i]);
    if (collection[i + max]) out.push(collection[i + max]);
  }
  // anything the interleave missed
  for (const e of [...clients, ...collection]) {
    if (!out.some((x) => x.key === e.key)) out.push(e);
  }
  return out;
}

const ENTRIES = buildEntries();

const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "clients", label: "Client footage" },
  { id: "collection", label: "The collection" },
] as const;

export function GalleryMasonry() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const shown = ENTRIES.filter((e) => filter === "all" || e.group === filter);

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          const count =
            f.id === "all" ? ENTRIES.length : ENTRIES.filter((e) => e.group === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={`font-label-caps text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 border transition-colors ${
                active
                  ? "border-primary bg-primary text-on-primary"
                  : "border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
              <span className="ml-2 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/*
        CSS columns, not a grid: the whole point is that each frame keeps its
        own height, and a grid would need a fixed row rhythm to lay out
        against. `break-inside-avoid` stops a card being split across a column
        boundary, which is the one way this technique goes wrong.
      */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {shown.map((e, i) => {
          const Frame = (
            <>
              <div
                className={`relative w-full overflow-hidden bg-surface-container ${
                  RATIOS[i % RATIOS.length]
                }`}
              >
                <ProductMedia
                  media={e.media}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-4">
                <p className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-primary">
                  {e.context}
                </p>
                <p className="mt-1.5 font-body-sm leading-6 text-on-surface-variant">
                  {e.caption}
                </p>
              </div>
            </>
          );

          return (
            <motion.figure
              key={e.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group mb-4 break-inside-avoid"
            >
              {e.href ? (
                <Link href={e.href} className="block">
                  {Frame}
                </Link>
              ) : (
                Frame
              )}
            </motion.figure>
          );
        })}
      </div>
    </div>
  );
}
