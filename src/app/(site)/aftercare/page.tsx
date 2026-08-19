import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/stitch/SiteHeader";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_aftercare_portal
 * "Aftercare Portal | ByChi Strands"
 *
 * Was a fabricated "logged in" dashboard — a fake wear tracker ("04/07
 * days"), a fake countdown to a fake NYC atelier appointment, a fake
 * "Certified Aura / Luminous tier" membership system, a named artisan
 * ("Julian Saint-Clair") who doesn't exist, and four products ("Silk
 * Essence No. 4", "Ceramide Balm $120", a turban, an elixir) not in the
 * real catalogue, two with dead href="#" Add to Cart buttons. There's no
 * account/tracking system behind this site (see /account — real order
 * lookup by email, not a fake dashboard), so none of that can be shown
 * honestly. Rebuilt as real, general care guidance pulled from the same
 * care instructions already on every product page, with a real WhatsApp
 * concierge CTA instead of the invented stylist.
 */

export const metadata: Metadata = {
  title: "Aftercare",
};

const RITUALS = [
  {
    label: "Nightly",
    title: "Wrap It in Silk",
    body: "Wrap in silk or satin every night to hold the pattern and protect the shine — cotton pulls moisture out and roughens the cuticle.",
  },
  {
    label: "Every 8–10 Wears",
    title: "Wash Cool, Wash Gentle",
    body: "A sulphate-free shampoo in cool water. Air-dry on the stand where possible; if you heat-style, always use a protectant, below 180°C.",
  },
  {
    label: "Storage",
    title: "Off the Lace, Off the Sun",
    body: "Store on a wig stand away from direct sunlight, and never fold the lace — a crease there is the hardest thing to undo.",
  },
];

export default function AftercarePage() {
  return (
    <div className="scr-aftercare-portal theme-noir bg-surface text-on-surface font-body-md">
      <main>
        {/* Hero */}
        <section className="relative py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
            Client Care
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight max-w-2xl">
            Keep It Wearing Like Day One
          </h1>
          <p className="font-body-xl text-on-surface-variant max-w-lg">
            Real human hair rewards real care. Three habits that
            keep a unit soft, full and tangle-free for its entire life —
            drawn from the same guidance we send with every order.
          </p>
        </section>

        {/* Rituals */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* The ritual cards are h3; without this the outline jumps straight
              from the page h1 to h3 and the group has no announced name. */}
          <h2 className="sr-only">The care rituals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {RITUALS.map((r) => (
              <div key={r.title} className="border border-outline-variant/20 p-10">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-6 block">
                  {r.label}
                </span>
                <h3 className="font-display-md text-2xl mb-4">{r.title}</h3>
                <p className="font-body-md text-on-surface-variant">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hair Laundry CTA — the real service that does this for you */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em] mb-4 block">
                Prefer Us To Do It
              </span>
              <h2 className="font-display-md text-display-md leading-tight tracking-[-0.01em] mb-6">
                Hair Laundry
              </h2>
              <p className="font-body-xl text-on-surface-variant mb-10 max-w-lg">
                Drop your unit off and collect it the next day cleansed,
                deep-conditioned, steamed back to life and styled to wear —
                the easiest way to double the life of a luxury unit.
              </p>
              <Link
                href="/book?service=hair-laundry"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Book Hair Laundry
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/services/ceo-portrait-1.jpeg"
                alt="A ByChi Strands unit styled and ready to wear"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-md text-display-md mb-6 tracking-[-0.01em]">
            Shop the Tools
          </h2>
          <p className="font-body-xl text-on-surface-variant mb-10 max-w-lg mx-auto">
            Professional styling and installation tools, selected for the
            care your investment deserves.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-primary text-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
          >
            View Hair Tools
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </section>

        {/* Concierge */}
        <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-noir text-white">
          <div className="max-w-container-max mx-auto text-center max-w-xl">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.3em] mb-6 block">
              Direct Channel
            </span>
            <h2 className="font-display-md text-4xl md:text-5xl mb-8 leading-tight">
              Ask Us Anything
            </h2>
            <p className="font-body-xl text-white/70 mb-10">
              Questions about your specific unit or install? Our concierge
              team answers directly on WhatsApp.
            </p>
            <a
              href={whatsappLink("Hi ByChi Strands — I have a care question about my hair.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors"
            >
              <Icon name="chat_bubble" className="text-sm" />
              Message the Concierge
            </a>
          </div>
        </section>
      </main>
</div>
  );
}
