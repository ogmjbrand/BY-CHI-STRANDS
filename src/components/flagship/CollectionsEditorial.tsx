"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { collections, collectionProducts } from "@/lib/collections";
import { priceFrom } from "@/lib/products";
import { posterFor } from "@/lib/media";
import { formatPrice } from "@/lib/utils";
import { site } from "@/lib/site";
import { ImageReveal } from "@/components/ui/image-reveal";

/** Full-bleed collection chapters. No conventional product-card grid. */
export function CollectionsEditorial() {
  return (
    <section id="collections" className="bg-surface">
      <div className="px-6 pb-20 pt-32 md:px-16 md:pb-28 md:pt-52">
        <p className="mb-7 font-label-caps text-[10px] uppercase tracking-[0.34em] text-primary">The collections</p>
        <h2 className="max-w-6xl font-display-lg text-[clamp(3rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
          Four signatures.<br />One unmistakable point of view.
        </h2>
      </div>

      {collections.map((c, i) => {
        const pieces = collectionProducts(c.slug);
        const [product] = pieces;
        const reverse = i % 2 === 1;
        const listed = pieces.map((p) => priceFrom(p)).filter((n): n is number => n !== null);
        const from = listed.length ? Math.min(...listed) : null;

        return (
          <article key={c.slug} className="group relative border-t border-on-surface/10">
            <div className={`grid min-h-[78vh] grid-cols-1 lg:grid-cols-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[78vh]">
                <ImageReveal className="h-full w-full" direction={reverse ? "right" : "left"}>
                  <img
                    src={product ? posterFor(product.slug) : posterFor("sdd-vietnam-bone-straight")}
                    alt={c.name}
                    className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.025]"
                  />
                </ImageReveal>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />
                <span className="absolute left-6 top-6 font-label-caps text-[10px] uppercase tracking-[0.28em] text-white/65 md:left-10 md:top-10">
                  0{i + 1} / {String(collections.length).padStart(2, "0")}
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center px-6 py-16 md:px-16 lg:col-span-5 lg:py-20"
              >
                <span className="mb-8 font-display-md text-sm tabular-nums text-primary/80">{c.name}</span>
                <h3 className="max-w-xl font-display-lg text-[clamp(2.5rem,4.5vw,5.2rem)] leading-[0.92] tracking-[-0.035em]">
                  {c.tagline}
                </h3>
                <p className="mt-7 max-w-md text-base leading-8 text-on-surface-variant">{c.description}</p>

                <div className="mt-9 flex items-center gap-4 font-label-caps text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  <span>{pieces.length} {pieces.length === 1 ? "piece" : "pieces"}</span>
                  <span className="h-px w-8 bg-on-surface/20" aria-hidden="true" />
                  <span className="text-primary">{from === null ? "Price on enquiry" : `From ${formatPrice(from, site.currency)}`}</span>
                </div>

                <Link
                  href={`/collections/${c.slug}`}
                  className="group/link mt-12 inline-flex w-fit items-center gap-4 font-label-caps text-[10px] uppercase tracking-[0.28em]"
                >
                  Explore the edit
                  <span className="relative h-px w-10 overflow-hidden bg-on-surface/30">
                    <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-on-surface transition-transform duration-500 group-hover/link:scale-x-100" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
