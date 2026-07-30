"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** How far the element can travel toward the cursor, in px. */
  strength?: number;
}

/**
 * Wraps a CTA so it drifts toward the cursor within its own bounds, then
 * springs back on leave — the "magnetic button" luxury-site micro-interaction.
 * Skips the effect entirely for reduced-motion or coarse-pointer (touch)
 * visitors rather than attaching dead listeners.
 */
export function MagneticButton({ children, className = "", strength = 18 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  /*
   * Branching the render tree on a client-only pointer/reduced-motion read
   * would mismatch the server-rendered HTML during hydration, so the wrapper
   * always renders the same motion.div — only the handler body opts out.
   */
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = e.clientX - (bounds.left + bounds.width / 2);
    const relY = e.clientY - (bounds.top + bounds.height / 2);
    x.set((relX / bounds.width) * strength);
    y.set((relY / bounds.height) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}
