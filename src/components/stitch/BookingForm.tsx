"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { services, getService } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "01:45 PM", "04:15 PM"];

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

/**
 * The full booking grid — service list, schedule, notes and the sticky
 * summary — all sharing one piece of state. There's no fixed price list
 * (every service is quoted at consultation, see lib/services.ts) and no
 * booking database wired up, so a WhatsApp handoff — not a fake "confirmed"
 * state — is the honest result of submitting this form.
 *
 * /book is statically prerendered, so the server-rendered HTML can't know
 * about a `?service=` query param — it always renders the first service
 * selected. Applying the requested service in an effect (rather than as
 * the useState initializer) keeps the client's first paint matching that
 * static HTML, then corrects it right after mount instead of hydrating
 * with mismatched markup.
 */
export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [serviceSlug, setServiceSlug] = useState(services[0].slug);
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const requested = getService(searchParams.get("service") ?? "");
    if (requested) setServiceSlug(requested.slug);
    // Only ever read on mount — a visitor changing the radio shouldn't get
    // overridden if the URL happens to still carry the old param.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const service = getService(serviceSlug) ?? services[0];

  const message = useMemo(() => {
    let m = `Hi ByChiStrands — I'd like to book ${service.name}.`;
    if (date) m += ` Preferred date: ${formatDate(date)}.`;
    if (time) m += ` Preferred time: ${time}.`;
    if (notes.trim()) m += ` Notes: ${notes.trim()}.`;
    return m;
  }, [service, date, time, notes]);

  const sendRequest = () => {
    const params = new URLSearchParams({ service: service.slug });
    if (date) params.set("date", date);
    if (time) params.set("time", time);
    router.push(`/book/confirmation?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Left Column: Form Sections */}
      <div className="lg:col-span-8 space-y-24">
        {/* 01 Service Selection */}
        <section id="services">
          <div className="flex items-baseline space-x-4 mb-10">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">01</span>
            <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
              Curated Services
            </h2>
          </div>
          <div className="space-y-6">
            {services.map((s) => {
              const on = s.slug === serviceSlug;
              return (
                <label
                  key={s.slug}
                  className={`group relative block p-8 transition-all duration-500 cursor-pointer border ${
                    on
                      ? "border-primary bg-surface-container"
                      : "border-transparent bg-white text-noir hover:border-outline-variant/20 hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="max-w-md">
                      <h3 className="font-headline-lg text-xl mb-2">{s.name}</h3>
                      <p className="font-body-sm opacity-70 leading-relaxed">
                        {s.short}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right shrink-0">
                      <span className="block font-label-caps text-primary mb-1">
                        {s.duration.toUpperCase()}
                      </span>
                      <span className="block font-body-md font-semibold">
                        BY CONSULTATION
                      </span>
                    </div>
                  </div>
                  <input
                    checked={on}
                    onChange={() => setServiceSlug(s.slug)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    name="service"
                    type="radio"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-700 ${
                      on ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </label>
              );
            })}
          </div>
        </section>
        {/* 02 Master Artisan */}
        <section id="artisans">
          <div className="flex items-baseline space-x-4 mb-10">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">02</span>
            <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
              Your Appointment
            </h2>
          </div>
          <div className="bg-white text-noir p-8 flex items-start md:items-center gap-6 luxury-shadow">
            <span className="material-symbols-outlined text-primary text-4xl shrink-0">verified_user</span>
            <div>
              <h4 className="font-headline-lg text-lg mb-1">Handled by our in-house team</h4>
              <p className="font-body-sm text-noir/70">
                Every appointment is matched to whoever is best suited to your service. Note any
                stylist preference or hair history in the notes below.
              </p>
            </div>
          </div>
        </section>
        {/* 03 Calendar & Time */}
        <section id="schedule">
          <div className="flex items-baseline space-x-4 mb-10">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">03</span>
            <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
              Date & Time
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2">
                PREFERRED DATE
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
                className="w-full bg-white text-noir p-4 luxury-shadow font-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                type="date"
              />
            </div>
            <div className="space-y-4">
              <p className="font-label-caps text-on-surface-variant mb-4">PREFERRED TIME</p>
              <div className="grid grid-cols-2 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(time === slot ? null : slot)}
                    aria-pressed={time === slot}
                    className={`py-4 border font-body-sm transition-all ${
                      time === slot
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant/30 hover:border-primary"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 04 Concierge Notes */}
        <section id="notes">
          <div className="flex items-baseline space-x-4 mb-10">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">04</span>
            <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
              Concierge Notes
            </h2>
          </div>
          <div className="relative">
            <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2">
              PARTICULAR NEEDS OR HAIR HISTORY
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-transparent border-b border-outline-variant py-4 resize-none transition-all placeholder:italic placeholder:opacity-50"
              placeholder="Please describe any sensitivities or specific requests for your appointment..."
              rows={4}
            />
          </div>
        </section>
        {/* 05 Style Inspiration */}
        <section id="inspiration">
          <div className="flex items-baseline space-x-4 mb-10">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">05</span>
            <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
              Style Inspiration
            </h2>
          </div>
          <div className="bg-white text-noir p-8 luxury-shadow">
            <p className="font-body-sm text-noir/70 mb-6 max-w-lg">
              Bring a reference photo to your appointment, or start with this one — a style saved for
              inspiration, not a ByChiStrands client photo. Mention it in your notes above if it&apos;s
              close to what you want.
            </p>
            <div className="max-w-xs aspect-[3/4] overflow-hidden bg-surface-container">
              <img
                src="/inspiration/updo-reference-01.jpg"
                alt="Reference photo of a curled updo style, saved for client inspiration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Right Column: Sticky Summary */}
      <aside className="lg:col-span-4">
        <div className="sticky top-[120px] bg-white text-noir p-10 luxury-shadow flex flex-col h-fit">
          <h3 className="font-display-md text-2xl mb-8">Booking Summary</h3>
          <div className="space-y-8 flex-grow">
            <div>
              <span className="font-label-caps text-[10px] text-primary block mb-2">SERVICE</span>
              <p className="font-headline-lg text-lg leading-tight">{service.name}</p>
              <span className="font-body-sm text-noir/70">{service.duration}</span>
            </div>
            <div>
              <span className="font-label-caps text-[10px] text-primary block mb-2">DATE & TIME</span>
              <p className="font-headline-lg text-lg">
                {date ? formatDate(date) : "Select a date"}
                {time ? ` · ${time}` : ""}
              </p>
              <span className="font-body-sm text-noir/70">Confirmed once we reply</span>
            </div>
            <div className="pt-8 border-t border-outline-variant/20 flex justify-between items-end">
              <div>
                <span className="font-label-caps text-[10px] text-noir/70 block mb-1">SERVICE FEE</span>
                <p className="font-display-md text-2xl">Confirmed after consultation</p>
              </div>
            </div>
          </div>
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={sendRequest}
            className="mt-12 w-full text-center block bg-primary text-on-primary py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-secondary transition-colors duration-400"
          >
            REQUEST ON WHATSAPP
          </a>
          <p className="text-center mt-6 font-body-sm text-noir/60 text-[11px]">
            A 30% deposit is required to confirm your appointment, deductible from the final service
            fee.
          </p>
        </div>
      </aside>
    </div>
  );
}
