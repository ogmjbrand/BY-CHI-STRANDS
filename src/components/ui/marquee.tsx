"use client";

import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
  reverse?: boolean;
}

/** Infinite CSS-driven scrolling ticker. Duplicates its items once so the loop is seamless. */
export function Marquee({ items, className = "", speed = 32, reverse = false }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const track = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="mx-6 whitespace-nowrap md:mx-10">
          {item}
        </span>
      ))}
    </div>
  );

  if (reduceMotion) {
    return <div className={`flex overflow-hidden ${className}`}>{track}</div>;
  }

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className="flex shrink-0 animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
