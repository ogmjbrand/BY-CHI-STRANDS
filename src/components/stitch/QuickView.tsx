"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProduct } from "@/lib/products";
import { heroFor } from "@/lib/media";
import { ProductMedia } from "./ProductMedia";
import { ProductConfigurator } from "./ProductConfigurator";
import { ProductBadges } from "./ProductBadges";

interface QuickViewProps {
  slug: string | null;
  onClose: () => void;
}

/** Modal preview of a product without leaving the grid — full PDP is one click away. */
export function QuickView({ slug, onClose }: QuickViewProps) {
  const product = slug ? getProduct(slug) : undefined;

  useEffect(() => {
    if (!slug) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [slug, onClose]);

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="relative bg-surface w-full max-w-3xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-surface-container-low">
              <ProductMedia media={heroFor(product.slug)} className="w-full h-full object-cover" />
              <ProductBadges badges={product.badges} className="absolute top-6 left-6" />
            </div>
            <div className="p-8 md:p-10 space-y-6">
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-primary uppercase mb-2">
                  Hand-Tied Collections
                </p>
                <h2 className="font-display-md text-2xl md:text-3xl">{product.name}</h2>
                <p className="font-body-sm text-on-surface-variant mt-3">{product.short}</p>
              </div>
              <ProductConfigurator product={product} variant="mobile" />
              <Link
                href={`/shop/${product.slug}`}
                className="block text-center font-label-caps text-label-caps uppercase tracking-widest text-on-surface border-b border-outline pb-1 hover:text-primary hover:border-primary transition-colors w-fit"
                onClick={onClose}
              >
                View Full Details
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
