import Link from "next/link";
import { services } from "@/lib/services";

const ICONS: Record<string, string> = {
  "hair-laundry": "local_laundry_service",
  "hair-importation-service": "flight_takeoff",
  "wig-making": "design_services",
  ventilation: "auto_fix_high",
  "frontal-installation": "face_retouching_natural",
  "hair-tools": "storefront",
  training: "school",
};

export function HomeServices() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.28em] text-primary-container mb-4 block">
            Luxury Services
          </span>
          <h2 className="font-display-md text-headline-lg-mobile md:text-display-md text-on-surface tracking-[-0.01em] mb-8">
            From Sourcing To Styling
          </h2>
          <Link
            href="/services"
            className="border border-on-surface text-on-surface px-8 py-3 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-on-surface hover:text-surface transition-colors"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {services.map((s) => (
            <Link key={s.slug} href="/services" className="group flex flex-col items-center text-center gap-3">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container transition-colors group-hover:bg-primary-container">
                <span className="material-symbols-outlined text-primary-container text-[28px] group-hover:text-on-primary-container transition-colors">
                  {ICONS[s.slug] ?? "spa"}
                </span>
              </span>
              <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-on-surface group-hover:text-primary-container transition-colors">
                {s.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
