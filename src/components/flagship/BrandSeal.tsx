import { Wordmark } from "@/components/brand/Wordmark";

/**
 * The house seal, set between chapters.
 *
 * The homepage runs to a great many sections and they were separated only by
 * background colour, so the brand disappeared for thousands of pixels at a
 * time. This puts the mark itself on a hairline rule at each chapter break,
 * the way a maison stamps a lookbook between spreads. Decorative by
 * definition, so it is hidden from assistive technology; the wordmark is
 * already announced by the header.
 */
export function BrandSeal({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="bg-surface px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[1800px] items-center gap-5 md:gap-8">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/35" />

        <Wordmark size="md" withSeal className="shrink-0 text-on-surface" />

        {label ? (
          <span className="hidden shrink-0 font-label-caps text-[10px] uppercase tracking-[0.3em] text-gold/70 md:inline">
            {label}
          </span>
        ) : null}

        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/35" />
      </div>
    </div>
  );
}
