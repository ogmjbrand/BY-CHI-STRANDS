import type { Metadata } from "next";
import Link from "next/link";
import { getService } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/ui/icon";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_atelier_booking_confirmation
 *
 * The original Stitch export invented a "confirmed" booking for a fictional
 * London Mayfair atelier — a named stylist ("Elena Vance"), a $185 price and
 * a Brook Street address that don't exist for this Lagos-based business.
 * There's no booking database or payment flow wired up (see BookingForm),
 * so the honest state after a WhatsApp request is "sent, pending our
 * reply" — not "secured". This reads the real selections passed from
 * /book and reflects real ByChi Strands contact details instead.
 */

export const metadata: Metadata = {
  title: "Booking Request Sent",
};

function toIcsDate(date: string, time: string | null): string | null {
  const match = time?.match(/^(\d{2}):(\d{2})\s?(AM|PM)$/i);
  if (!match) return null;
  let hour = Number(match[1]) % 12;
  if (match[3].toUpperCase() === "PM") hour += 12;
  const minute = match[2];
  const d = new Date(`${date}T${String(hour).padStart(2, "0")}:${minute}:00`);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export default async function BookingConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; date?: string; time?: string }>;
}) {
  const { service: serviceSlug, date, time } = await searchParams;
  const service = getService(serviceSlug ?? "");

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const icsStart = date ? toIcsDate(date, time ?? null) : null;
  const icsHref =
    icsStart && service
      ? `data:text/calendar;charset=utf-8,${encodeURIComponent(
          [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            `SUMMARY:${service.name} — ByChi Strands`,
            `DTSTART:${icsStart}`,
            `DESCRIPTION:Requested via bychistrands.com. Pending confirmation from the atelier.`,
            `LOCATION:${site.address}`,
            "END:VEVENT",
            "END:VCALENDAR",
          ].join("\r\n")
        )}`
      : null;

  return (
    <div className="scr-atelier-booking-confirmation theme-noir bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      {/* TopAppBar */}
<main className="pt-10 md:pt-16 pb-section-padding">
        {/* Hero Confirmation Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 text-center">
          <span className="font-label-caps text-label-caps text-primary mb-4 block uppercase tracking-[0.3em]">
            Request Sent
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6 leading-tight md:leading-[1.1] md:tracking-[-0.02em]">
            We&apos;ve Received
            <br />
            Your Request
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto opacity-80">
            {service
              ? "Your details have been sent to our team on WhatsApp. We reply to confirm your slot — nothing is booked until you hear back from us."
              : "Start a booking to see your request summarised here — it'll open a WhatsApp message to our team, who confirm every slot personally."}
          </p>
        </section>
        {/* Summary & Details Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Details Card */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-12 relative overflow-hidden shadow-[0px_20px_50px_rgba(0,0,0,0.02)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">
                    {service?.name ?? "No service selected"}
                  </h2>
                  {service ? (
                    <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                      <Icon name="schedule" className="text-[18px]" />
                      {service.duration}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 tracking-[0.15em]">
                    SERVICE FEE
                  </span>
                  <span className="font-display-md text-2xl text-primary">Confirmed after consultation</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest">SCHEDULE</span>
                  <div>
                    <p className="font-headline-lg text-body-xl leading-tight">
                      {formattedDate ?? "Date to be confirmed"}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {time ?? "Time to be confirmed"}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest">HANDLED BY</span>
                  <p className="font-headline-lg text-body-xl leading-tight">Our in-house team</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Matched to whoever&apos;s best suited to this service.
                  </p>
                </div>
                <div className="space-y-4 md:col-span-2 border-t border-outline-variant/10 pt-8">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">LOCATION</span>
                  <div className="flex items-start gap-4">
                    <Icon name="location_on" className="text-primary mt-1" />
                    <div>
                      <p className="font-headline-lg text-body-xl leading-tight">{site.address}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Exact address shared on WhatsApp once your slot is confirmed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              {icsHref ? (
                <a
                  href={icsHref}
                  download={`${service?.slug ?? "bychistrands"}-request.ics`}
                  className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps flex items-center gap-2 hover:bg-secondary transition-all duration-400 ease-in-out tracking-[0.15em]"
                >
                  <Icon name="calendar_add_on" className="text-[18px]" />
                  ADD TO CALENDAR
                </a>
              ) : null}
              <a
                href={whatsappLink(
                  service
                    ? `Hi ByChi Strands — following up on my ${service.name} request${
                        formattedDate ? ` for ${formattedDate}` : ""
                      }${time ? ` at ${time}` : ""}.`
                    : "Hi ByChi Strands — I'd like to book an appointment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all duration-400 tracking-[0.15em]"
              >
                MESSAGE US ON WHATSAPP
              </a>
              <Link
                href={service ? `/book?service=${service.slug}` : "/book"}
                className="text-on-surface-variant hover:text-primary px-8 py-4 font-label-caps text-label-caps transition-colors duration-300 underline underline-offset-8 decoration-outline-variant tracking-[0.15em]"
              >
                MODIFY REQUEST
              </Link>
            </div>
          </div>
          {/* Right Column: Concierge */}
          <div className="lg:col-span-5 space-y-gutter">
            <div className="bg-surface-container p-8 md:p-10 border border-outline-variant/10">
              <h3 className="font-headline-lg text-[24px] mb-8 border-b border-outline-variant pb-4">What Happens Next</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">01</span>
                  <p className="font-body-md text-on-surface-variant">
                    Our concierge team reviews your request and replies on WhatsApp, usually within
                    business hours.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">02</span>
                  <p className="font-body-md text-on-surface-variant">
                    We confirm your slot and share the deposit required to secure it.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">03</span>
                  <p className="font-body-md text-on-surface-variant">
                    Once your deposit clears, your appointment is locked in and we&apos;ll send full
                    directions.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 md:p-10">
              <h3 className="font-headline-lg text-[24px] mb-6">Reach Us Directly</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li>{site.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</li>
                <li>
                  <a className="hover:text-primary transition-colors" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
</div>
  );
}
