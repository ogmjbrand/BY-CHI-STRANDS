import Link from "next/link";
import { site } from "@/lib/site";
import { Newsletter } from "./Newsletter";
import { SocialStrip } from "./SocialStrip";
import { HeaderUtilities } from "./HeaderUtilities";
import { MenuButton } from "./MenuButton";
import { Wordmark } from "@/components/brand/Wordmark";
import { Icon } from "@/components/ui/icon";
import { HouseHeader, HouseFooter } from "@/components/flagship/HouseChrome";
import { SectionBackdrop } from "@/components/flagship/SectionBackdrop";
import { SectionMark } from "@/components/flagship/SectionMark";
import type { SceneName } from "@/lib/media";

/**
 * The canonical ByChi Strands header and footer, lifted verbatim from the
 * homepage screen. Screens that ship their own chrome keep theirs; these
 * are used by the routes the design links to but does not itself specify
 * (legal, contact, journal, wishlist).
 */

/**
 * Kept as a name, not as a design. Fourteen routes import this; rather than
 * rewrite all of them, it now renders the one house header. The old markup —
 * a second, differently-typeset fixed bar — is gone.
 */
export function StitchHeader() {
  return <HouseHeader />;
}

const SHOP = [
  { label: "Raw Silk Bundles", href: "/collections" },
  { label: "HD Lace Frontals", href: "/shop" },
  { label: "Custom Closures", href: "/shop" },
  { label: "Ready-to-Wear Wigs", href: "/shop" },
];

const COMPANY = [
  { label: "Our Craft", href: "/about" },
  { label: "Academy Training", href: "/academy" },
  { label: "Boutique Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const SUPPORT = [
  { label: "Track Your Order", href: "/track" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "FAQ", href: "/faqs" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      {/* h3, not h4: these sit under the footer's h2 and skipping a level
          breaks the outline screen-reader users navigate by. */}
      <h3 className="font-label-caps text-on-surface mb-8">{title}</h3>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all"
              href={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** As StitchHeader: the name survives, the divergent design does not. */
export function StitchFooter() {
  return <HouseFooter />;
}

/**
 * Editorial page shell in the ByChi Strands idiom — used for routes the
 * Stitch footer links to but that the project does not draw.
 */
export function StitchPageShell({
  eyebrow,
  title,
  lede,
  ground,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /**
   * The frame the page opens on. Eight routes share this shell, so each one
   * names its own picture rather than all of them arriving on the same
   * header. Omit it and the header stays a flat ground.
   */
  ground?: SceneName;
  children: React.ReactNode;
}) {
  return (
    <div className="theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden">
      <header className="relative isolate pt-16 pb-12 md:pt-28 md:pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {ground ? <SectionBackdrop name={ground} behind /> : null}
        <div className="max-w-4xl">
          <SectionMark label={eyebrow} className="mb-6" />
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8">
            {title}
          </h1>
          {lede ? (
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
              {lede}
            </p>
          ) : null}
        </div>
      </header>
      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-padding">
        {children}
      </main>
    </div>
  );
}
