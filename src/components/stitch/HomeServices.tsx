import Link from "next/link";
import { services } from "@/lib/services";

/**
 * Full-bleed swipe section — real service photo fills the viewport,
 * headline + service list float over a gradient as plain text links
 * instead of an icon-card grid on a white background.
 */
export function HomeServices() {
  return (
    <section className="relative isolate min-h-[100svh] flex items-center overflow-hidden bg-noir snap-start">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/services/frontal-installation-1.jpg"
        alt="An elegant lace-parted updo with soft curls, styled by ByChi Strands"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-noir/20" />

      <div className="relative z-10 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-gold mb-6 block">
            Luxury Services
          </span>
          <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white tracking-[-0.01em] mb-8 leading-[1.05]">
            From Sourcing
            <br />
            To Styling
          </h2>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gold text-noir px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
          >
            View All Services
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        <div className="lg:col-span-6">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="font-headline-lg text-body-xl text-white/80 hover:text-gold transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
