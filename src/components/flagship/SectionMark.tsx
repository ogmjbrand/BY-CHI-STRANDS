/**
 * The ByChi Strands mark, at the head of a chapter.
 *
 * Every section used to open on a bare numbered eyebrow — `01 / The House`,
 * `02 / Collections` — so the brand itself vanished for thousands of pixels
 * between the header and the footer, and the chapters read as anonymous
 * editorial rather than as one house speaking. This puts the logo and the
 * name on every chapter opening, in one lockup with the chapter label, so
 * the mark arrives as part of the composition instead of being pasted on top
 * of it.
 *
 * The glyph is `public/brand/logo-glyph.png` — the illustrated head cut out
 * of the supplied logo with the paper keyed to transparency. It is applied as
 * a CSS `mask-image`, not an `<img>`, so it renders in `currentColor`: gold
 * on the noir chapters, brown on the cream ones, and correct over photography
 * without a separate file per surface. The lockup's own type is unreadable
 * below about 100px, which is why the name beside it is set in the house
 * serif rather than being part of the picture.
 *
 * Decoration by intent — the section's own heading is what carries meaning,
 * and the wordmark is already announced by the header — so the whole lockup
 * is `aria-hidden` apart from the chapter label, which is real text.
 */

const TONES = {
  /** Noir chapters. */
  dark: { accent: "text-[#c8a45d]", rule: "bg-[#c8a45d]/35", label: "text-[#c8a45d]" },
  /**
   * Cream chapters. #c8a45d lands at roughly 2:1 on #f5f0e8, well under the
   * 4.5:1 small text needs, so the light tone uses the darker house brown.
   */
  light: { accent: "text-[#8b6244]", rule: "bg-[#8b6244]/35", label: "text-[#8b6244]" },
  /** Over an un-scrimmed photograph, where only white holds. */
  onImage: { accent: "text-[#f5f0e8]", rule: "bg-white/40", label: "text-[#f5f0e8]" },
} as const;

export type SectionMarkTone = keyof typeof TONES;

export function SectionMark({
  label,
  tone = "dark",
  align = "left",
  className = "",
}: {
  /** The chapter label, e.g. "01 / Collections". Real text, not decoration. */
  label: string;
  tone?: SectionMarkTone;
  align?: "left" | "center";
  className?: string;
}) {
  const t = TONES[tone];

  return (
    <div
      /* Wraps rather than overflowing: several chapters set their eyebrow in a
         two-of-twelve column, which is narrower than the lockup at desktop
         width. When it wraps, the label drops to its own line under the
         name — which is the reading order anyway. */
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${
        align === "center" ? "justify-center" : ""
      } ${t.accent} ${className}`}
    >
      <span
        aria-hidden="true"
        className="block h-6 w-6 shrink-0 bg-current md:h-7 md:w-7"
        style={{
          maskImage: "url(/brand/logo-glyph.png)",
          WebkitMaskImage: "url(/brand/logo-glyph.png)",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
      <span
        aria-hidden="true"
        className="shrink-0 font-serif text-[13px] leading-none tracking-[-.02em] md:text-[15px]"
      >
        ByChi Strands
      </span>
      <span aria-hidden="true" className={`h-px w-5 shrink-0 md:w-8 ${t.rule}`} />
      <p className={`text-[8px] uppercase leading-none tracking-[.4em] ${t.label}`}>{label}</p>
    </div>
  );
}
