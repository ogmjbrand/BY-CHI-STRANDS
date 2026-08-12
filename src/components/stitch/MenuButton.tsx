import { Menu } from "lucide-react";

/**
 * Opens the site's mobile drawer.
 *
 * StitchHeader drew no menu affordance at all below `md`, so on a phone every
 * page outside the flagship homepage — shipping, returns, academy, gallery,
 * journal, legal, account — offered a wordmark and a bag icon and no way to
 * reach the rest of the site.
 *
 * No state and no handler of its own: MobileMenu binds every element marked
 * `data-open-menu`. That keeps this a server component.
 */
export function MenuButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      data-open-menu=""
      aria-label="Open menu"
      className={`relative grid h-10 w-10 place-items-center text-on-surface-variant transition-colors duration-300 hover:text-primary ${className}`}
    >
      <Menu className="h-5 w-5" strokeWidth={1.5} />
    </button>
  );
}
