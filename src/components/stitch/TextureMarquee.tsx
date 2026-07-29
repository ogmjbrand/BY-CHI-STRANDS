import { Marquee } from "@/components/ui/marquee";
import { CATEGORIES, TEXTURES } from "@/lib/products";

/** Real catalogue vocabulary — every word here is a category or texture the house actually stocks. */
const WORDS = [
  ...Object.values(CATEGORIES).map((c) => c.label),
  ...Object.values(TEXTURES),
];

export function TextureMarquee() {
  return (
    <div className="bg-on-surface py-6 md:py-8 overflow-hidden">
      <Marquee
        items={WORDS}
        speed={38}
        className="font-display-md text-2xl md:text-4xl uppercase tracking-tight text-surface/90"
      />
    </div>
  );
}
