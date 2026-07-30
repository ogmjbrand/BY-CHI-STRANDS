"use client";

import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
}

/**
 * Infinite CSS marquee. The item list is duplicated once so the track can
 * loop seamlessly via `.animate-marquee` (see globals.css); reduced-motion
 * visitors get a static, non-scrolling row instead.
 */
export function Marquee({ items, className = "", speed = 32, reverse = false }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const track = [...items, ...items];

  if (reduceMotion) {
    return (
      <div className={`flex flex-wrap gap-x-16 gap-y-4 ${className}`}>
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee gap-16"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
