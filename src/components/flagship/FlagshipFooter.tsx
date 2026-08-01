import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

/**
 * Minimal, generous-whitespace footer — a wordmark, one slim link row,
 * legal — not a boxy 4-column ecommerce footer.
 */
export function FlagshipFooter() {
  return (
    <footer className="relative overflow-hidden bg-on-surface text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.10),_transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 md:px-16 md:pt-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-label-caps text-[11px] uppercase tracking-[0.35em] text-white/60">
                The private appointment
              </p>
              <h2 className="mt-4 font-display-lg text-4xl leading-[0.95] tracking-[-0.02em] text-white md:text-5xl">
                Let your hair speak with softness, structure, and presence.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Step into a consultation shaped around your texture, your rhythm, and the finish you want to live in.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-[#050505] transition-all duration-300 hover:bg-white/90"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-white/80 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 pt-16 pb-16">
        <p className="font-display-lg text-[16vw] leading-[0.85] tracking-[-0.03em] md:text-[9vw]">
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
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
        </div>
      </div>
    </footer>
  );
}
