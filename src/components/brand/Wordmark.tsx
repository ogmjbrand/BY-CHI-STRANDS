/**
 * The house logotype — the single source of truth for how "ByChi Strands"
 * is set anywhere on the site.
 *
 * Set entirely in the display serif, per the supplied logo reference: one
 * family, one weight, no script accent and no colour split. It was previously
 * assembled inline in fourteen different files as `ByChi` plus a gold script
 * `Strands`, which meant a change of identity meant fourteen edits and the
 * spacing drifted between them. Everything now renders through here.
 *
 * Colour is inherited (`currentColor`) rather than baked in, so the same mark
 * works on noir, on cream and over photography without a variant per surface.
 */

const SIZES = {
  /** Slim chrome — mobile masts, funnel headers. */
  sm: { text: "text-base sm:text-lg", seal: "h-7 w-7", gap: "gap-2" },
  /** Default chrome — desktop masts, footers. */
  md: { text: "text-xl md:text-2xl", seal: "h-9 w-9 md:h-10 md:w-10", gap: "gap-2.5" },
  /** Section-level lockups. */
  lg: { text: "text-3xl md:text-4xl", seal: "h-11 w-11 md:h-12 md:w-12", gap: "gap-3" },
  /** Editorial scale — the full-bleed brand statement. */
  display: {
    text: "text-[13vw] leading-[0.95] md:text-[7vw]",
    seal: "h-16 w-16 md:h-20 md:w-20",
    gap: "gap-5",
  },
} as const;

export type WordmarkSize = keyof typeof SIZES;

export function Wordmark({
  size = "md",
  withSeal = false,
  className = "",
}: {
  size?: WordmarkSize;
  /** Show the round logo mark to the left of the type. */
  withSeal?: boolean;
  className?: string;
}) {
  const s = SIZES[size];

  return (
    <span className={`inline-flex items-center leading-none ${s.gap} ${className}`}>
      {withSeal ? (
        <span
          className={`${s.seal} shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/5`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-mark.jpg"
            alt=""
            className="h-full w-full scale-125 object-cover"
          />
        </span>
      ) : null}
      <span className={`font-display-md whitespace-nowrap tracking-[0.02em] ${s.text}`}>
        ByChi Strands
      </span>
    </span>
  );
}
