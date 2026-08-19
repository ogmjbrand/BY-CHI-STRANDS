import { scene, type SceneName } from "@/lib/media";

/**
 * The image a chapter opens on.
 *
 * Sections used to be flat fills — noir, cream, or a brown that had grown to
 * carry three whole chapters. This puts a frame behind the heading and its
 * description instead, so a chapter starts on an image the way the hero does,
 * and the brown is gone rather than merely darkened.
 *
 * Rules it follows so it stays a backdrop and not a distraction:
 *
 *   - `aria-hidden` and empty alt. It is decoration behind copy that already
 *     says what the chapter is. Several of these frames are AI-generated
 *     stand-ins (see lib/media), so describing one to a screen reader would
 *     announce a piece ByChi Strands does not own.
 *   - A scrim is always painted over it. The heading and body copy sit on the
 *     scrim, not on raw photograph, so contrast does not depend on which
 *     frame is in the slot — the campaign photography can swap in without
 *     re-checking every heading.
 *   - `position: absolute` inside a `relative` parent, never `overflow-hidden`
 *     on that parent: an overflow container becomes the containing block for
 *     any `position: sticky` descendant, which is exactly how the pinned
 *     frames elsewhere on the site stopped pinning.
 *
 * `tone` picks the scrim for the ground the section sits on. `dark` is the
 * noir chapters; `light` is the cream ones, where the image is knocked back
 * far enough to read as paper with something behind it.
 */
export function SectionBackdrop({
  name,
  tone = "dark",
  behind = false,
  className = "",
}: {
  name: SceneName;
  tone?: "dark" | "light";
  /**
   * Paint the frame on a negative layer instead of the default one.
   *
   * The default needs each of the section's children to be positioned, or
   * they render underneath an absolutely-positioned sibling. That is fine
   * where a chapter has one content wrapper to mark `relative`, and wrong
   * where the section *is* the grid — wrapping a twelve-column grid in a
   * div to host the backdrop would collapse the layout.
   *
   * With `behind`, the frame goes to `z-index: -1` and the caller adds
   * `isolate` to the section. The section's own background still paints
   * below it (an element's background is painted before its negative-index
   * children), the content still paints above it, and no child has to be
   * touched. `isolate` is what stops the negative layer escaping the
   * section and sliding behind the page.
   */
  behind?: boolean;
  className?: string;
}) {
  const frame = scene(name);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${behind ? "-z-10" : ""} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frame.src}
        alt=""
        loading="lazy"
        decoding="async"
        /*
         * The noir chapters carry a stronger frame than the cream ones, and
         * deliberately so. On noir the type is white at 55% over near-black,
         * which stays well clear of 4.5:1 as the picture comes up. On cream
         * the cream ground has far less headroom, so the frame is held at
         * 22% under a heavier scrim. Measured on the rendered page rather
         * than reasoned about: at 22%/70% the three cream chapters came in
         * at 2.9-3.7:1, which is why the scrim went to 80% and the body
         * copy on those chapters went from 55-60% ink to 75%.
         */
        className={`h-full w-full object-cover ${
          tone === "dark" ? "opacity-[0.46]" : "opacity-[0.22]"
        }`}
      />
      {/*
        Two scrims. The vertical one fades the frame out into the section
        edges so chapters still meet on a flat colour rather than a hard
        photographic seam; the flat one underneath is what the type is
        actually guaranteed against, and is what keeps contrast independent
        of which picture is in the slot.
      */}
      <div
        className={
          tone === "dark"
            ? "absolute inset-0 bg-gradient-to-b from-[#0b0907] via-transparent to-[#0b0907]"
            : "absolute inset-0 bg-gradient-to-b from-[#f5f0e8] via-transparent to-[#f5f0e8]"
        }
      />
      <div
        className={
          tone === "dark" ? "absolute inset-0 bg-[#0b0907]/52" : "absolute inset-0 bg-[#f5f0e8]/80"
        }
      />
    </div>
  );
}
