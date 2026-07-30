"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Media } from "@/lib/media";
import type { Product } from "@/lib/products";
import { ProductMedia } from "./ProductMedia";
import { ProductBadges } from "./ProductBadges";
import { ImageReveal } from "@/components/ui/image-reveal";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Desktop PDP viewer: a vertical thumbnail rail driving one large stage,
 * crossfading between assets rather than a static grid of supporting shots.
 * The lead asset gets a clip-path reveal on first paint; switching frames
 * afterward only crossfades — re-clipping on every click would read as the
 * page re-loading itself each time a visitor browses the set.
 */
export function ProductGallery({
  gallery,
  badges,
}: {
  gallery: Media[];
  badges?: Product["badges"];
}) {
  const [active, setActive] = useState(0);
  const current = gallery[active] ?? gallery[0];

  return (
    <div className="flex gap-4">
      {gallery.length > 1 ? (
        <div className="flex flex-col gap-3 w-20 shrink-0">
          {gallery.map((m, i) => (
            <button
              key={m.src}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === active}
              className={`relative aspect-square overflow-hidden shrink-0 transition-all duration-300 ${
                i === active
                  ? "ring-1 ring-primary ring-offset-2 ring-offset-surface"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <ProductMedia media={m} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
      <ImageReveal className="relative flex-1 overflow-hidden group aspect-[4/5]" direction="up">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="absolute inset-0"
          >
            <ProductMedia
              media={current}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>
        {badges?.length ? (
          <div className="absolute top-8 left-8 z-10">
            <ProductBadges badges={badges} />
          </div>
        ) : null}
      </ImageReveal>
    </div>
  );
}
