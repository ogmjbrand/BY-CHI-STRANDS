/**
 * Custom line-icon set for the trust signals (TrustBar, PDP purchase
 * badges). Hand-drawn, not the default Material Symbols glyphs — thin
 * stroke, rounded caps, matches the GoldSeal/gold-line motif already used
 * for the hero badge instead of a stock icon kit.
 */
type IconProps = { className?: string };

const base = "1.5" as const;

export function IconStrand({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 2c1.5 3 3.5 4.5 3.5 7.5S10.5 15 12 18c1 2 3 2.8 3 4"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
      />
      <path
        d="M14 3c-.8 2.6-2.2 4-2.2 6.8 0 2.6 2 4 2 6.7 0 1.7-1 2.7-1 3.5"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function IconSingleThread({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={base} opacity="0.35" />
      <path
        d="M12 4.5c1.6 2.5 2.4 5 2.4 7.5s-.8 5-2.4 7.5c-1.6-2.5-2.4-5-2.4-7.5s.8-5 2.4-7.5Z"
        stroke="currentColor"
        strokeWidth={base}
      />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconLeaf({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19c0-8 4.5-13 14-14-1 9.5-6 14-14 14Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M6.5 17.5C10 13 13 10 17.5 6.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconGlobeRoute({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={base} />
      <path d="M3 12h18" stroke="currentColor" strokeWidth={base} opacity="0.5" />
      <path
        d="M12 3c2.4 2.3 3.6 5.6 3.6 9s-1.2 6.7-3.6 9c-2.4-2.3-3.6-5.6-3.6-9S9.6 5.3 12 3Z"
        stroke="currentColor"
        strokeWidth={base}
        opacity="0.5"
      />
      <circle cx="18.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconAuthTag({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11 3.5 3.5 11l8 8 7.5-7.5V4a.5.5 0 0 0-.5-.5H11Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="7.5" r="1.4" stroke="currentColor" strokeWidth={base} />
      <path d="M9 13.5 12.5 17" stroke="currentColor" strokeWidth={base} strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IconShipInsured({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 7h10v9H3z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M13 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth={base} />
      <circle cx="16.5" cy="18" r="1.6" stroke="currentColor" strokeWidth={base} />
      <path d="M18.5 6.5 20 8l3-3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  );
}

export function IconExchange({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 8h13l-3-3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 16H7l3 3" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
