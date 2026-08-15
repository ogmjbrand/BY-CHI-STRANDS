const MESSAGES = [
  "Ships Worldwide From Lagos, Nigeria",
  "100% Authentic ese Hair",
  "Hand-Tied In Our Lagos Atelier",
];

/**
 * Real, defensible claims only — no invented discount ("30% off launch
 * sale") since there's no live promotion in the catalogue to back it.
 */
export function AnnouncementBar() {
  return (
    <div className="bg-noir text-white/80 border-b border-white/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-2.5 flex items-center justify-center md:justify-between gap-6">
        <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] whitespace-nowrap md:hidden">
          {MESSAGES[0]}
        </span>
        {MESSAGES.map((m) => (
          <span
            key={m}
            className="hidden md:inline font-label-caps text-[10px] uppercase tracking-[0.15em] whitespace-nowrap"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
