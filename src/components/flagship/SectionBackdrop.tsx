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
 *     announce a piece the house does not own.
 *   - A scrim is always painted over it. The heading and body copy sit on the
 *     scrim, not on raw photograph, so contrast does not depend on which
 *     frame is in the slot — the campaign photography can swap in without
 *     re-checking every heading.
 *   - `position: absolute` inside a `relative` parent, never `overflow-hidden`
 *     on that parent: an overflow container becomes the containing block for
 *     any `position: sticky` descendant, which is exactly how the pinned
 *     frames elsewhere in the house stopped pinning.
 *
 * `tone` picks the scrim for the ground the section sits on. `dark` is the
 * noir chapters; `light` is the cream ones, where the image is knocked back
 * far enough to read as paper with something behind it.
 */
export function SectionBackdrop({
  name,
  tone = "dark",
  className = "",
}: {
  name: SceneName;
  tone?: "dark" | "light";
  className?: string;
}) {
  const frame = scene(name);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frame.src}
        alt=""
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${
          tone === "dark" ? "opacity-[0.38]" : "opacity-[0.22]"
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
          tone === "dark" ? "absolute inset-0 bg-[#0b0907]/55" : "absolute inset-0 bg-[#f5f0e8]/70"
        }
      />
    </div>
  );
}
