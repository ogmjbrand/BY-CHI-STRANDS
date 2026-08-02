"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  /** Reveal direction the mask wipes away toward. */
  direction?: "up" | "left" | "right";
  /** Seconds to hold before the wipe starts. */
  delay?: number;
}

const HIDDEN: Record<NonNullable<ImageRevealProps["direction"]>, string> = {
  up: "inset(100% 0 0 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
};

const SHOWN = "inset(0 0 0 0)";

/**
 * Clip-path mask reveal for hero and section imagery — the media sits behind
 * a hard edge that wipes away once, the first time it scrolls into view.
 *
 * The mask sits on an inner element and the observer watches the outer one.
 * That separation is the whole point: IntersectionObserver reports on an
 * element's *clipped* visual rect, so an element masked to zero area never
 * intersects — it stays hidden because it was never revealed, and is never
 * revealed because it is hidden. Every collection panel on the homepage was
 * a black rectangle on a phone, and half of them were on a desktop, for
 * exactly that reason. Observing an unclipped wrapper breaks the deadlock.
 *
 * Two further guards keep the media visible whatever happens: the observer
 * disconnects after the first intersection, and if IntersectionObserver is
 * unavailable or the visitor prefers reduced motion the image renders
 * unmasked with no transition at all.
 */
export function ImageReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!node || reduce || typeof IntersectionObserver === "undefined") {
      setInstant(true);
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      <div
        className="h-full w-full"
        style={{
          clipPath: shown ? SHOWN : HIDDEN[direction],
          transition: instant
            ? undefined
            : `clip-path 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
          willChange: shown ? undefined : "clip-path",
        }}
      >
        {children}
      </div>
    </div>
  );
}
