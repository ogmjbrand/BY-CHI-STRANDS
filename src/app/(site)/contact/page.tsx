import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";
import { StitchPageShell } from "@/components/stitch/SiteChrome";
import { IconGlobeRoute } from "@/components/stitch/BrandIcons";

export const metadata: Metadata = { title: "Contact Us" };

const channels = [
  {
    label: "WhatsApp",
    detail: "Fastest reply — usually within the hour during atelier hours.",
    action: "Message on WhatsApp",
    href: whatsappLink("Hi ByChi Strands — I have a question."),
    external: true,
  },
  {
    label: "Phone",
    detail: site.phone,
    action: "Call the Atelier",
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    label: "Email",
    detail: site.email,
    action: "Send an Email",
    href: `mailto:${site.email}`,
    external: false,
  },
];

const socials = [
  { label: "Instagram", handle: site.socials.instagram.handle, href: site.socials.instagram.url },
  { label: "TikTok", handle: site.socials.tiktok.handle, href: site.socials.tiktok.url },
  { label: "Facebook", handle: site.socials.facebook.handle, href: site.socials.facebook.url },
];

export default function ContactPage() {
  return (
    <StitchPageShell
      ground="ground-contact"
      eyebrow={"Concierge"}
      title={"Contact Us"}
      lede={"Reach the atelier for private consultations, order support and wholesale enquiries."}
    >
      <div className="max-w-4xl space-y-16 reveal">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group border border-outline-variant/30 p-8 flex flex-col gap-4 hover:border-primary transition-colors"
            >
              <IconGlobeRoute className="w-6 h-6 text-primary" />
              <div>
                <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-2">
                  {c.label}
                </p>
                <p className="font-body-md text-on-surface-variant">{c.detail}</p>
              </div>
              <span className="mt-auto font-label-caps text-xs text-on-surface tracking-widest border-b border-transparent group-hover:border-primary transition-colors">
                {c.action} &rarr;
              </span>
            </a>
          ))}
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-10 pt-10 border-t border-outline-variant/30 font-body-xl text-body-xl text-on-surface-variant">
          <div>
            <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">Atelier</dt>
            <dd className="font-body-md text-on-surface">{site.address}</dd>
          </div>
          <div>
            <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">Telephone</dt>
            <dd className="font-body-md text-on-surface">
              <a className="hover-underline relative" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                {site.phone}
              </a>
            </dd>
          </div>
          {site.hours.map((h) => (
            <div key={h.days}>
              <dt className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-3">{h.days}</dt>
              <dd className="font-body-md text-on-surface">{h.time}</dd>
            </div>
          ))}
        </dl>

        <div className="pt-10 border-t border-outline-variant/30">
          <p className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-6">
            Follow the Atelier
          </p>
          <div className="flex flex-wrap gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {s.label} <span className="text-on-surface">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </StitchPageShell>
  );
}
