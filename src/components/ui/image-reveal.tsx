"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  /** Reveal direction the mask wipes away toward. */
  direction?: "up" | "left" | "right";
  delay?: number;
}

const CLIP: Record<NonNullable<ImageRevealProps["direction"]>, { hidden: string; shown: string }> = {
  up: { hidden: "inset(100% 0 0 0)", shown: "inset(0 0 0 0)" },
  left: { hidden: "inset(0 100% 0 0)", shown: "inset(0 0 0 0)" },
  right: { hidden: "inset(0 0 0 100%)", shown: "inset(0 0 0 0)" },
};

/**
 * Clip-path mask reveal for hero/section imagery — the media sits behind a
 * hard edge that wipes away once, the first time it scrolls into view.
 * Wrap a <ProductMedia>/<img>/<video> in this rather than fading opacity,
 * which reads as generic next to the rest of the editorial motion system.
 */
export function ImageReveal({ children, className = "", direction = "up", delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const clip = CLIP[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: clip.hidden }}
      animate={{ clipPath: isInView ? clip.shown : clip.hidden }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
