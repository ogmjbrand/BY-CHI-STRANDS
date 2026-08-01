"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { collections, collectionProducts } from "@/lib/collections";
import { posterFor } from "@/lib/media";
import { ImageReveal } from "@/components/ui/image-reveal";

/**
 * Full-bleed alternating panels, one per real collection — the antithesis
 * of a symmetric product-card grid. Image direction is chosen so the
 * ImageReveal wipe always travels toward the text column.
 */
export function CollectionsEditorial() {
  return (
    <section id="collections" className="bg-surface">
      <div className="px-6 md:px-16 pt-32 md:pt-48 pb-16 md:pb-24">
        <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-primary mb-6">Collections</p>
        <h2 className="font-display-lg text-4xl md:text-7xl leading-[1.05] tracking-[-0.02em] max-w-4xl">
          Four ways to wear the house.
        </h2>
      </div>

      {collections.map((c, i) => {
        const [product] = collectionProducts(c.slug);
        const reverse = i % 2 === 1;
        return (
          <div
            key={c.slug}
            className={`grid grid-cols-1 lg:grid-cols-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto lg:h-[85vh]">
              <ImageReveal className="w-full h-full" direction={reverse ? "right" : "left"}>
                <img
                  src={product ? posterFor(product.slug) : posterFor("sdd-vietnam-bone-straight")}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </ImageReveal>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-center px-6 md:px-16 py-16 md:py-0"
            >
              <span className="font-display-md text-outline-variant text-sm mb-6">0{i + 1}</span>
              <h3 className="font-display-lg text-3xl md:text-5xl leading-tight tracking-[-0.01em] mb-5">
                {c.name}
              </h3>
              <p className="font-body-md text-on-surface-variant italic mb-4">{c.tagline}</p>
              <p className="font-body-sm text-on-surface-variant max-w-sm mb-10">{c.description}</p>
              <Link
                href={`/collections/${c.slug}`}
                className="group inline-flex items-center gap-3 font-label-caps text-[11px] uppercase tracking-[0.25em] w-fit"
              >
                Explore the Edit
                <span className="w-8 h-[1px] bg-on-surface transition-all duration-500 group-hover:w-14" />
              </Link>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
