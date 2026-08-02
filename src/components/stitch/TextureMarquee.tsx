import { Marquee } from "@/components/ui/marquee";
import { CATEGORIES, TEXTURES } from "@/lib/products";

const ITEMS = [...Object.values(CATEGORIES).map((c) => c.label), ...Object.values(TEXTURES)];

/**
 * Homepage-only infinite ticker seeded from the real category/texture labels
 * already written in products.ts — no invented marketing words.
 */
export function TextureMarquee() {
  return (
    <div className="bg-noir text-white py-6 overflow-hidden">
      <Marquee
        items={ITEMS}
        className="font-display-md text-2xl md:text-3xl tracking-tight text-white/90"
      />
    </div>
  );
}
