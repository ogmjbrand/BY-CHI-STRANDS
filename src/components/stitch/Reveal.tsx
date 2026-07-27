"use client";

import { useEffect } from "react";
import { animate, useReducedMotion } from "framer-motion";

/**
 * Ports the IntersectionObserver every Stitch screen ships in its inline
 * <script>: elements carrying `.reveal` gain `.active` once 10% visible.
 * Mounted once per page from the site layout.
 */
export function RevealObserver() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    if (
      reduceMotion
    ) {
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
        void animate(
          target,
          { opacity: [0, 1], y: [24, 0] },
          { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
        );
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [reduceMotion]);

  return null;
}
