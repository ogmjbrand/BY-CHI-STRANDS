/**
 * Circular rotating wordmark badge — the "est." seal luxury hero shots
 * carry. Pure decoration built from the real brand name, not an imported
 * graphic, so it never goes stale or breaks if the asset pipeline changes.
 */
export function GoldSeal({ className = "" }: { className?: string }) {
  const words = "BYCHI STRANDS • LUXURY HAIR COLLECTION • ";
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id="gold-seal-circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <text fontSize="11.5" letterSpacing="2" fill="currentColor">
        <textPath href="#gold-seal-circle" startOffset="0%">
          {words}
        </textPath>
      </text>
      <text x="100" y="94" textAnchor="middle" fontSize="20" fill="currentColor" className="font-display-md">
        Est.
      </text>
      <text x="100" y="118" textAnchor="middle" fontSize="13" letterSpacing="3" fill="currentColor">
        LAGOS
      </text>
    </svg>
  );
}
