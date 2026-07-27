import { clsx } from "clsx";

/**
 * Material Symbols Outlined glyph, as used throughout the Aura of Silk
 * screens. `fill` maps to the FILL axis the design sets inline.
 */
export function Icon({
  name,
  className,
  fill = false,
  style,
}: {
  name: string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={clsx("material-symbols-outlined", className)}
      style={fill ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  );
}
