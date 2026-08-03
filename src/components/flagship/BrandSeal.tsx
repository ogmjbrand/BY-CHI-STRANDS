/**
 * The house seal, set between chapters.
 *
 * The homepage runs to a great many sections and they were separated only by
 * background colour, so the brand disappeared for thousands of pixels at a
 * time. This puts the mark itself — the seal, the wordmark, the gold script
 * — on a hairline rule at each chapter break, the way a maison stamps a
 * lookbook between spreads. Decorative by definition, so it is hidden from
 * assistive technology; the wordmark is already announced by the header.
 */
export function BrandSeal({ label }: { label?: string }) {
  return (
    <div aria-hidden="true" className="bg-surface px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[1800px] items-center gap-5 md:gap-8">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/35" />

        <span className="flex shrink-0 items-center gap-2.5">
          <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gold/30 md:h-10 md:w-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-mark.jpg"
              alt=""
              className="h-full w-full scale-125 object-cover"
            />
          </span>
          {/* Kept on the phone too — seal plus script alone reads as a
              decoration; the full lockup reads as the house. */}
          <span className="font-display-md text-base tracking-[0.12em] text-on-surface sm:text-lg sm:tracking-[0.14em]">
            BYCHI
          </span>
          <span className="-mt-1 font-script text-3xl text-gold md:text-4xl">Strands</span>
        </span>

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
