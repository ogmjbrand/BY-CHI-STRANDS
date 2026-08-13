import { HouseHeader } from "@/components/flagship/HouseChrome";

/**
 * The functional header the rest of the site grew around — real catalogue
 * search, live cart and wishlist counts, the mobile drawer.
 *
 * That behaviour now lives in HouseChrome alongside the one house design, so
 * this is the same component under its old name and old props. Eleven routes
 * import it; keeping the name meant not rewriting all of them.
 *
 * `dark` is accepted and ignored — the house header has a single ground, and
 * a header that changed colour per page was part of what made the site read
 * as several different sites.
 */
export function SiteHeader(_props: { dark?: boolean } = {}) {
  void _props;
  return <HouseHeader />;
}
