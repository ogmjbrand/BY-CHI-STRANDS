"use client";

import { useEffect, useRef } from "react";

/**
 * The site-wide luxury cursor: a hollow ring that trails the pointer and
 * expands over interactive elements. Replaces the old per-page ".custom-cursor"
 * stub (previously only present on the PDP screens, driven ad hoc from
 * Interactions.tsx) with one instance mounted globally in the site layout.
 * No-ops on touch/coarse pointers and reduced-motion, and never renders on
 * the server — it reads matchMedia synchronously, which would mismatch
 * hydration if it ran during the initial render.
 */
export function LuxuryCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    ring.style.opacity = "1";

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
        raf = 0;
      });
    };
    document.addEventListener("mousemove", move, { passive: true });

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        ring.style.transform = "translate(-50%, -50%) scale(2.2)";
        ring.style.backgroundColor = "rgba(200, 167, 91, 0.12)";
        ring.style.borderColor = "rgba(200, 167, 91, 0.6)";
      }
    };
    const onOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        ring.style.backgroundColor = "transparent";
        ring.style.borderColor = "rgba(18, 18, 18, 0.35)";
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="luxury-cursor fixed top-1/2 left-1/2 z-[200] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none opacity-0 transition-[transform,background-color,border-color] duration-300 ease-out hidden md:block"
      style={{ borderColor: "rgba(18, 18, 18, 0.35)" }}
    />
  );
}
