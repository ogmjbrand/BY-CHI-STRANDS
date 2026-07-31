import Link from "next/link";
import { ProductMedia } from "./ProductMedia";
import type { Media } from "@/lib/media";

/**
 * The gold-framed promo banner motif from the client's reference template —
 * background photo, dark gradient, a script line over a bold display line,
 * and a pill CTA — rebuilt in the site's real noir/gold tokens with real
 * catalogue photography instead of the reference's stock imagery.
 */
export function FramedBanner({
  media,
  script,
  heading,
  ctaLabel,
  ctaHref,
  align = "left",
  className = "",
}: {
  media: Media;
  script?: string;
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  align?: "left" | "right";
  className?: string;
}) {
  const alignClasses =
    align === "right" ? "items-end text-right ml-auto" : "items-start text-left";

  return (
    <div className={`border border-gold/40 p-2 md:p-3 ${className}`}>
      <div className="relative aspect-[4/5] sm:aspect-[16/9] overflow-hidden">
        <ProductMedia media={media} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/95 via-noir/40 to-noir/5 sm:bg-gradient-to-r sm:from-noir/95 sm:via-noir/50 sm:to-transparent" />
        <div className={`absolute inset-0 flex flex-col justify-end sm:justify-center p-8 md:p-16 ${alignClasses}`}>
          <div className="max-w-md">
            {script ? (
              <span className="font-script text-gold-light text-4xl md:text-5xl -rotate-2 mb-2 block">
                {script}
              </span>
            ) : null}
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-md text-white uppercase tracking-[-0.01em] mb-8 leading-[1.05]">
              {heading}
            </h2>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-gold text-noir px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
            >
              {ctaLabel}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
