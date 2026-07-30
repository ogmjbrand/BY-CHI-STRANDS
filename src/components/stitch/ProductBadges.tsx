import type { Product } from "@/lib/products";

const BADGE_LABEL: Record<string, string> = {
  bestseller: "Bestseller",
  new: "New Arrival",
  limited: "Limited",
};

interface ProductBadgesProps {
  badges: Product["badges"];
  className?: string;
}

/**
 * Stacked badge pills for a product card/gallery — the badge data has
 * existed on every product since the catalogue was written, but only
 * ShopBrowser rendered it. Pulled out so every grid (Collections, PDP,
 * search) renders it identically instead of re-copying the pill markup.
 */
export function ProductBadges({ badges, className = "" }: ProductBadgesProps) {
  if (!badges?.length) return null;
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {badges.map((b) => (
        <span
          key={b}
          className="bg-on-surface text-surface text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 font-label-caps"
        >
          {BADGE_LABEL[b]}
        </span>
      ))}
    </div>
  );
}
