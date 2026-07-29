"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ports the IntersectionObserver every Stitch screen ships in its inline
 * <script>: elements carrying `.reveal` gain `.active` once 10% visible,
 * which the CSS transition on `.reveal.active` (globals.css) then animates.
 * Mounted once per page from the site layout.
 *
 * Deliberately CSS-driven, not framer-motion's imperative `animate()`: a
 * fire-and-forget `animate()` call here isn't tied to a component's
 * lifecycle, and could be left orphaned mid-tween, freezing elements at a
 * partial opacity. A plain classList toggle can't get stuck that way.
 */
export function RevealObserver() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    if (reduceMotion) {
      nodes.forEach((n) => n.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          target.classList.add("active");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [reduceMotion]);

  return null;
}
