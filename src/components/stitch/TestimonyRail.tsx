import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";
import { ProductMedia } from "./ProductMedia";

interface TestimonyRailProps {
  eyebrow?: string;
  title?: string;
}

/**
 * Client footage rail. These are the house's own review and unboxing clips, so
 * the section carries them as video rather than as pull-quotes — the proof is
 * the client on camera, not a sentence attributed to her.
 */
export function TestimonyRail({
  eyebrow = "In their words",
  title = "Worn, reviewed and filmed by the women wearing it.",
}: TestimonyRailProps) {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-label-caps text-label-caps uppercase tracking-[0.32em] text-primary mb-4">
              {eyebrow}
            </p>
            <h2 className="font-display-md text-3xl md:text-5xl text-on-surface max-w-2xl">
              {title}
            </h2>
          </div>
          <a
            href={site.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-caps text-label-caps uppercase tracking-widest border-b border-primary pb-1 text-on-surface hover:text-primary transition-colors"
          >
            More on {site.socials.instagram.handle}
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 list-none p-0 m-0">
          {testimonials.map((t) => (
            <li key={t.clip.src} className="group">
              <div className="relative aspect-[9/16] overflow-hidden bg-surface-container-low border border-outline-variant/20">
                <ProductMedia
                  media={t.clip}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-body-sm text-body-sm text-on-surface leading-snug">
                {t.caption}
              </p>
              <p className="mt-1 font-label-caps text-[0.6rem] uppercase tracking-[0.2em] text-on-surface-variant">
                {t.context}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
