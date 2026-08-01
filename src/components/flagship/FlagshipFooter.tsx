import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

/**
 * Minimal, generous-whitespace footer — a wordmark, one slim link row,
 * legal — not a boxy 4-column ecommerce footer.
 */
export function FlagshipFooter() {
  return (
    <footer className="bg-on-surface text-white">
      <div className="px-6 md:px-16 pt-24 md:pt-32 pb-16">
        <p className="font-display-lg text-[16vw] md:text-[9vw] leading-[0.85] tracking-[-0.03em]">
          ByChi Strands
        </p>
      </div>

      <div className="px-6 md:px-16 pb-16 flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-white/10 pt-10">
        <nav className="flex flex-wrap gap-x-10 gap-y-4 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70">
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/collections" className="hover:text-white transition-colors">Collections</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-8 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70">
          <a href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            TikTok
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="px-6 md:px-16 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-body-sm text-xs">
        <p>© 2026 ByChi Strands. Timeless Vietnamese Artistry.</p>
        <div className="flex gap-8">
          <Link href="/track" className="hover:text-white transition-colors">Track Order</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}
