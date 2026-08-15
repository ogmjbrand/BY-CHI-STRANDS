"use client";

import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { getProduct, priceFrom } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { SectionBackdrop } from "./SectionBackdrop";
import { SectionMark } from "./SectionMark";

/**
 * Recently viewed.
 *
 * The store has tracked and persisted `recentlyViewed` since it was written,
 * and nothing has ever rendered it — every product page called `trackView`
 * into a list no visitor could see. This is only the surface for data that
 * already exists; no new tracking, no new storage, nothing sent anywhere.
 *
 * Renders nothing at all until there is something worth showing: it waits
 * for hydration (the list comes from localStorage, so drawing before that
 * would flash an empty rail), drops the piece being looked at, and gives up
 * below two items rather than showing a section with one thing in it.
 *
 * A rail on a phone, a four-up row from md — the same shape as every other
 * product row on the site.
 */
export function RecentlyViewed({ excludeSlug }: { excludeSlug?: string }) {
  const { recentlyViewed, hydrated } = useStore();

  if (!hydrated) return null;

  const items = recentlyViewed
    .filter((slug) => slug !== excludeSlug)
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  if (items.length < 2) return null;

  return (
    <section className="relative border-t border-outline-variant/20 py-16 md:py-24">
      <SectionBackdrop name="backdrop-recent" />
      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <SectionMark label="Picked up where you left off" />
        <h2 className="mt-3 font-display-md text-2xl tracking-[-0.01em] md:text-4xl">
          Recently Viewed
        </h2>

        <ul className="mt-8 grid list-none grid-cols-2 gap-3 md:mt-12 md:grid-cols-4 md:gap-gutter">
          {items.map((p) => {
            const media = heroFor(p.slug);
            const from = priceFrom(p);
            return (
              <li key={p.slug}>
                <Link href={`/shop/${p.slug}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={media.type === "video" ? (media.poster ?? media.src) : media.src}
                      alt={media.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display-md text-base leading-tight md:text-lg">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary">
                    {from !== null ? formatPrice(from) : "Enquire for price"}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
