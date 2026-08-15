"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { ArrowRight } from "lucide-react";
import { products, priceFrom, type Product } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { TEXTURES } from "@/lib/products";

/**
 * Shop the House — products, immediately after the hero.
 *
 * The commercial problem this fixes: the homepage opened on the hero and
 * then ran roughly nine thousand pixels of brand story before a visitor
 * reached anything with a price on it. The storytelling is the reason the
 * site feels expensive and none of it is cut — it simply no longer stands
 * between arriving and shopping.
 *
 * Each card carries what someone actually decides on: the piece, its
 * texture, the lengths it comes in, and the price it starts at. Every one
 * of those is read from the catalogue, so nothing here can drift out of
 * step with what the shop and the product pages say.
 *
 * Four across on desktop, a snap rail on a phone — the same card at both,
 * because a luxury card shrunk to a quarter of a phone screen becomes a
 * marketplace listing.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/** The lead piece of each collection, so the row spans the range. */
function featured(): Product[] {
  const seen = new Set<string>();
  const picked: Product[] = [];
  for (const p of products) {
    if (p.collection && !seen.has(p.collection)) {
      seen.add(p.collection);
      picked.push(p);
    }
  }
  return picked.slice(0, 4);
}

function lengthRange(p: Product): string | null {
  const ls = p.variants.map((v) => v.length).filter(Boolean).sort((a, b) => a - b);
  if (!ls.length) return null;
  return ls[0] === ls[ls.length - 1] ? `${ls[0]}"` : `${ls[0]}–${ls[ls.length - 1]}"`;
}

function Card({ p, i }: { p: Product; i: number }) {
  const reduceMotion = useReducedMotion();
  const { wishlist, toggleWishlist, hydrated } = useStore();
  const saved = hydrated && wishlist.includes(p.slug);
  const media = heroFor(p.slug);
  const from = priceFrom(p);
  const lengths = lengthRange(p);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay: Math.min(i, 3) * 0.07, ease: EASE }}
      className="group relative h-full"
    >
      {/* Outside the Link: a button nested in an anchor is invalid markup,
          and saving must not navigate. */}
      <button
        type="button"
        onClick={() => toggleWishlist(p.slug)}
        aria-pressed={saved}
        aria-label={saved ? `Remove ${p.name} from your wishlist` : `Save ${p.name} to your wishlist`}
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white/85 backdrop-blur-sm transition hover:bg-black/55 hover:text-[#c8a45d]"
      >
        <Heart size={17} className={saved ? "fill-[#c8a45d] text-[#c8a45d]" : ""} />
      </button>

      <Link href={`/shop/${p.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#141110]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.type === "video" ? (media.poster ?? media.src) : media.src}
            alt={media.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[center_25%] transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          {p.badges?.length ? (
            <span className="absolute left-4 top-4 bg-[#f5f0e8]/92 px-3 py-1 text-[8px] uppercase tracking-[.28em] text-[#0b0907]">
              {p.badges[0] === "new" ? "New" : p.badges[0] === "bestseller" ? "Bestseller" : "Limited"}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col pt-4">
          <p className="text-[8px] uppercase tracking-[.35em] text-[#c8a45d]">
            {p.sdd ? "Super Double Drawn" : "Raw hair"}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight">{p.name}</h3>
          <p className="mt-2 text-[13px] leading-6 text-white/50">
            {TEXTURES[p.texture]}
            {lengths ? ` · ${lengths}` : ""}
          </p>
          <div className="mt-auto flex items-end justify-between gap-4 pt-4">
            <p className="text-[13px] text-[#f5f0e8]">
              {from !== null ? `From ${formatPrice(from)}` : "Enquire for price"}
            </p>
            <ArrowRight
              size={17}
              className="shrink-0 text-[#c8a45d] transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ShopTheHouse() {
  const items = featured();

  return (
    <section className="relative bg-[#0b0907] py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1760px]">
        <div className="flex flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:gap-8 md:px-0">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[8px] uppercase tracking-[.5em] text-[#c8a45d]">
              <span aria-hidden="true" className="h-px w-6 bg-[#c8a45d]" />
              01 / The Current Edit
            </p>
            <h2 className="font-serif text-[clamp(2.6rem,8vw,6rem)] leading-[.82] tracking-[-.05em]">
              Shop the House.
            </h2>
          </div>
          <Link
            href="/shop"
            className="w-fit shrink-0 border-b border-[#c8a45d]/60 pb-2 text-[8px] uppercase tracking-[.35em] text-[#c8a45d]"
          >
            All pieces
          </Link>
        </div>

        {/* A snap rail on a phone, a four-up row from md. Same card either way. */}
        <ul className="mt-10 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mt-14 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((p, i) => (
            <li key={p.slug} className="w-[78%] shrink-0 snap-start md:w-auto">
              <Card p={p} i={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
