import Link from "next/link";
import { site } from "@/lib/site";
import { Newsletter } from "./Newsletter";
import { SocialStrip } from "./SocialStrip";
import { HeaderUtilities } from "./HeaderUtilities";
import { MenuButton } from "./MenuButton";
import { Wordmark } from "@/components/brand/Wordmark";
import { Icon } from "@/components/ui/icon";

/**
 * The canonical ByChi Strands header and footer, lifted verbatim from the
 * homepage screen. Screens that ship their own chrome keep theirs; these
 * are used by the routes the design links to but does not itself specify
 * (legal, contact, journal, wishlist).
 */

export function StitchHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 nav-blur border-b border-outline-variant/30">
      <div className="flex justify-between items-center gap-2 w-full px-4 md:px-margin-desktop py-unit max-w-container-max mx-auto h-20">
        <div className="flex flex-1 items-center gap-8">
          <MenuButton className="-ml-2 md:hidden" />
          <nav className="hidden md:flex gap-8">
            <Link
              className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="/collections"
            >
              Collections
            </Link>
            <Link
              className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="/services"
            >
              Services
            </Link>
          </nav>
        </div>
        <div className="flex shrink-0 items-center">
          <Link href="/">
            <Wordmark size="sm" withSeal className="text-on-surface" />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="hidden md:flex gap-8">
            <Link
              className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="/academy"
            >
              Academy
            </Link>
            <Link
              className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="/about"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <HeaderUtilities />
            {/*
             * The booking CTA is desktop-only: at 390px it crowded out the
             * utility rail entirely. Booking stays one tap away from the
             * mobile drawer, which leads with it.
             */}
            <Link
              className="hidden md:inline-block bg-on-surface text-surface px-6 py-2 rounded-lg font-label-caps hover:bg-primary transition-all duration-300"
              href="/book"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
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

export function StitchFooter() {
  return (
    <footer className="bg-surface-container-low">
      <Newsletter />
      <SocialStrip />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="col-span-1 md:col-span-1">
          <Wordmark size="sm" withSeal className="text-on-surface mb-8" />
          <p className="font-body-md text-body-sm text-on-surface-variant mb-8 max-w-xs">
            Timeless Vietnamese artistry meets modern luxury. Defined by
            authenticity and ethical sourcing.
          </p>
          <div className="flex gap-4">
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href={site.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon name="camera" />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href={site.socials.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Icon name="videocam" />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all"
              href={`mailto:${site.email}`}
              aria-label="Email"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <Column title="SHOP" links={SHOP} />
        <Column title="COMPANY" links={COMPANY} />
        <Column title="SUPPORT" links={SUPPORT} />
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-body-sm text-on-surface-variant">
          © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
        </p>
        <div className="flex gap-8">
          <a
            className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all"
            href={site.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all"
            href={site.socials.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

/**
 * Editorial page shell in the ByChi Strands idiom — used for routes the
 * Stitch footer links to but that the project does not draw.
 */
export function StitchPageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="theme-noir bg-surface text-on-surface font-body-md overflow-x-hidden">
      <StitchHeader />
      <header className="pt-40 pb-16 md:pt-60 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-4xl">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
            {eyebrow}
          </span>
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
      <StitchFooter />
    </div>
  );
}
