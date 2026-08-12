import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Newsletter } from "@/components/stitch/Newsletter";
import { SocialStrip } from "@/components/stitch/SocialStrip";

export function FlagshipFooter() {
  return (
    <footer className="bg-noir text-white">
      <div className="px-6 md:px-16 pt-section-padding pb-20 md:pb-28 border-b border-white/10">
        <div className="max-w-4xl">
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-10">The House</p>
          <p className="font-display-md text-3xl md:text-5xl leading-[1.15] tracking-[-0.02em] mb-10">&ldquo;{site.motto}&rdquo;</p>
          <p className="font-body-xl text-white/60 max-w-2xl leading-relaxed">{site.description}</p>
        </div>
      </div>

      <SocialStrip dark />
      <Newsletter />

      <div className="px-6 md:px-16 py-20 md:py-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-5">The Atelier</p>
          <p className="font-body-md text-white/70">{site.address}</p>
          {site.hours.map((h) => <p key={h.days} className="font-body-sm text-white/50 mt-1">{h.days}: {h.time}</p>)}
        </div>
        <div>
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-5">Concierge</p>
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="block font-body-md text-white/70 hover:text-white transition-colors">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block font-body-md text-white/70 hover:text-white transition-colors mt-1">{site.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 font-label-caps text-[11px] uppercase tracking-[0.2em] text-gold border-b border-gold pb-1">Message on WhatsApp</a>
        </div>
        <div>
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-5">Visit</p>
          <p className="font-body-md text-white/70 mb-5 max-w-xs">Private consultations and installations are by appointment.</p>
          <Link href="/book" className="inline-block font-label-caps text-[11px] uppercase tracking-[0.2em] text-gold border-b border-gold pb-1">Book an Appointment</Link>
        </div>
      </div>

      <div className="px-6 md:px-16 pt-16 pb-12 border-t border-white/10">
        <p className="bychi-footer-wordmark text-[16vw] md:text-[9vw]">ByChi Strands</p>
      </div>

      <div className="px-6 md:px-16 pb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <nav className="flex flex-wrap gap-x-10 gap-y-4 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70">
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/hair-finder" className="hover:text-white transition-colors">Hair Finder</Link>
          <Link href="/collections" className="hover:text-white transition-colors">Collections</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/academy" className="hover:text-white transition-colors">Academy</Link>
          <Link href="/about" className="hover:text-white transition-colors">Craft</Link>
          <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
        <div className="flex gap-8 font-label-caps text-[11px] uppercase tracking-[0.2em] text-white/70">
          <a href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          <a href={site.socials.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>

      <div className="px-6 md:px-16 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 font-body-sm text-xs">
        <p>© {new Date().getFullYear()} ByChi Strands. Timeless Artistry.</p>
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
