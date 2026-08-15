"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The drawn strand — the campaign system's signature graphic.
 *
 * A thick illustrative stroke that curves around and behind the subject, and
 * *draws itself on* rather than fading in. The reference system uses an
 * emerald path around a cup at a 62px artboard stroke; here it is a gold
 * strand at phone scale, which is the principle rather than the artwork.
 *
 * It is drawn with stroke-dasharray/dashoffset because the shape itself has
 * to move — `opacity: 0 → 1` gives none of the effect. Level 2 in the motion
 * hierarchy: it starts after the image has settled and before the headline
 * arrives, so the eye runs product → graphic → message → action.
 *
 * Depth comes from splitting it in two. `layer="behind"` sits under the copy
 * and over the image; `layer="front"` crosses back over the top. Rendering
 * both makes the strand pass behind the subject and return in front of it,
 * which is the difference between a layered composition and a sticker.
 *
 * Mobile only by default. The desktop compositions are signed off and adding
 * a graphic to them would be a change nobody asked for.
 */
export function DrawnStrand({
  layer = "behind",
  className = "",
  delay = 0.45,
  color = "#c8a45d",
}: {
  layer?: "behind" | "front";
  className?: string;
  delay?: number;
  color?: string;
}) {
  const reduceMotion = useReducedMotion();

  /*
   * Two halves of one continuous curve. Split at roughly the point where the
   * subject sits, so the back half disappears behind them and the front half
   * re-emerges across the foreground.
   */
  /*
   * First attempt used preserveAspectRatio="none" over the whole hero, which
   * stretched the curve out of shape on a tall viewport and sent the front
   * half down through the CTAs. Both halves now live in the upper band only,
   * where the image is, and the viewBox keeps its ratio so the curve stays a
   * curve. The two segments share the point (72, 30), so they read as one
   * continuous sweep passing behind the subject and returning in front.
   */
  const d =
    layer === "behind"
      ? "M -6 78 C 14 60, 34 40, 56 32 C 62 30, 68 29, 72 30"
      : "M 72 30 C 84 33, 94 44, 100 60";

  const draw = reduceMotion
    ? { pathLength: 1, opacity: 1 }
    : { pathLength: 1, opacity: 1 };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      /* Confined to the upper band, over the image and clear of the copy
         block and the CTAs beneath it. */
      className={`pointer-events-none absolute inset-x-0 top-0 h-[58%] w-full ${className}`}
    >
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={layer === "behind" ? 1.1 : 0.7}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduceMotion ? draw : { pathLength: 0, opacity: 0 }}
        whileInView={draw}
        viewport={{ once: true, amount: 0.3 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                pathLength: { duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3, delay },
              }
        }
        style={{ strokeWidth: layer === "behind" ? 2.5 : 1.75 }}
      />
    </svg>
  );
}

/**
 * The small editorial seals that sit near the product.
 *
 * Functionally unnecessary, which is the point — they carry brand
 * personality, and their smallness against a large image is what reads as
 * premium. Every line must be true of the piece on screen; nothing here is
 * decorative copy.
 */
export function StrandBadges({
  items,
  className = "",
  delay = 1.0,
}: {
  items: string[];
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <ul className={`pointer-events-none flex list-none flex-wrap gap-2 ${className}`}>
      {items.map((t, i) => (
        <motion.li
          key={t}
          initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }
          }
          className="rounded-full border border-[#c8a45d]/40 bg-black/45 px-3 py-1.5 text-[8px] uppercase tracking-[.22em] text-[#c8a45d] backdrop-blur-sm"
        >
          {t}
        </motion.li>
      ))}
    </ul>
  );
}
