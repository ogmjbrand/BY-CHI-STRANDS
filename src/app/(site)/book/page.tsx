import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_atelier_service_booking
 * "Atelier Services | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Atelier Services",
};

export default function AtelierServiceBookingPage() {
  return (
    <div className="scr-atelier-service-booking bg-background text-on-surface font-body-md selection:bg-primary-container/30">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl luxury-shadow">
        <nav className="max-w-container-max mx-auto px-margin-desktop py-6 flex justify-between items-center">
          <div className="font-display-md text-[24px] tracking-widest text-primary uppercase">ByChi Strands</div>
          {" "}
          <div className="hidden md:flex items-center space-x-12">
            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm uppercase tracking-widest" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm uppercase tracking-widest" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-body-md text-primary border-b border-primary/50 font-medium text-sm uppercase tracking-widest" href="/book">
              Book Appointment
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <span className="material-symbols-outlined cursor-pointer hover:opacity-70">shopping_bag</span>
            {" "}
            <span className="material-symbols-outlined cursor-pointer hover:opacity-70">person</span>
          </div>
        </nav>
      </header>
      <main className="pt-32 pb-section-padding max-w-container-max mx-auto px-margin-desktop">
        {/* Hero Header */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="font-display-lg text-display-lg mb-4 text-primary tracking-[-0.02em]">Atelier Services</h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl italic">
            Schedule Your Transformation. Experience the pinnacle of silk artistry and bespoke hair tailoring.
          </p>
        </header>
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Form Sections */}
          <div className="lg:col-span-8 space-y-24">
            {/* 01 Service Selection */}
            <section id="services">
              <div className="flex items-baseline space-x-4 mb-10">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">01</span>
                {" "}
                <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
                  Curated Services
                </h2>
              </div>
              {" "}
              <div className="space-y-6">
                {services.map((s, i) => (
                  <div
                    key={s.slug}
                    className="group relative bg-white p-8 hover:bg-surface-container transition-all duration-500 cursor-pointer border border-transparent hover:border-outline-variant/20"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div className="max-w-md">
                        <h3 className="font-headline-lg text-xl mb-2 text-on-surface">{s.name}</h3>
                        {" "}
                        <p className="font-body-sm text-on-surface-variant opacity-80 leading-relaxed">
                          {s.short}
                        </p>
                      </div>
                      {" "}
                      <div className="mt-4 md:mt-0 text-right">
                        <span className="block font-label-caps text-primary mb-1">
                          {s.duration.toUpperCase()}
                        </span>
                        {" "}
                        <span className="block font-body-md font-semibold text-on-surface">
                          BY CONSULTATION
                        </span>
                      </div>
                    </div>
                    {" "}
                    <input
                      defaultChecked={i === 0}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      name="service"
                      type="radio"
                    />
                    {" "}
                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>
                ))}
              </div>
            </section>
            {/* 02 Master Artisan */}
            <section id="artisans">
              <div className="flex items-baseline space-x-4 mb-10">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">02</span>
                {" "}
                <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
                  Your Appointment
                </h2>
              </div>
              {" "}
              <div className="bg-white p-8 flex items-start md:items-center gap-6 luxury-shadow">
                <span className="material-symbols-outlined text-primary text-4xl shrink-0">verified_user</span>
                {" "}
                <div>
                  <h4 className="font-headline-lg text-lg mb-1">Handled by our in-house team</h4>
                  {" "}
                  <p className="font-body-sm text-on-surface-variant">
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
                {" "}
                <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
                  Date & Time
                </h2>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2">
                    PREFERRED DATE
                  </label>
                  {" "}
                  <input
                    className="w-full bg-white p-4 luxury-shadow font-body-md focus:outline-none focus:ring-1 focus:ring-primary"
                    type="date"
                  />
                </div>
                {/* Time Slots */}
                <div className="space-y-4">
                  <p className="font-label-caps text-on-surface-variant mb-4">PREFERRED TIME</p>
                  {" "}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-4 border border-outline-variant/30 font-body-sm hover:border-primary transition-all">
                      09:00 AM
                    </button>
                    {" "}
                    <button className="py-4 border border-outline-variant/30 font-body-sm hover:border-primary transition-all">11:30 AM</button>
                    {" "}
                    <button className="py-4 border border-outline-variant/30 font-body-sm hover:border-primary transition-all">
                      01:45 PM
                    </button>
                    {" "}
                    <button className="py-4 border border-outline-variant/30 font-body-sm hover:border-primary transition-all">
                      04:15 PM
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* 04 Concierge Notes */}
            <section id="notes">
              <div className="flex items-baseline space-x-4 mb-10">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">04</span>
                {" "}
                <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
                  Concierge Notes
                </h2>
              </div>
              {" "}
              <div className="relative">
                <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2">PARTICULAR NEEDS OR HAIR HISTORY</label>
                {" "}
                <textarea className="w-full bg-transparent border-b border-outline-variant py-4 resize-none transition-all placeholder:italic placeholder:opacity-50" placeholder="Please describe any sensitivities or specific requests for your appointment..." rows={4}></textarea>
              </div>
            </section>
          </div>
          {/* Right Column: Sticky Summary */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[120px] bg-white p-10 luxury-shadow flex flex-col h-fit">
              <h3 className="font-display-md text-2xl mb-8">Booking Summary</h3>
              {" "}
              <div className="space-y-8 flex-grow">
                <div>
                  <span className="font-label-caps text-[10px] text-primary block mb-2">SERVICE</span>
                  {" "}
                  <p className="font-headline-lg text-lg leading-tight">{services[0].name}</p>
                  {" "}
                  <span className="font-body-sm text-on-surface-variant">{services[0].duration}</span>
                </div>
                {" "}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-caps text-[10px] text-primary block mb-2">DATE & TIME</span>
                    {" "}
                    <p className="font-headline-lg text-lg">Selected at booking</p>
                    {" "}
                    <span className="font-body-sm text-on-surface-variant">Confirmed once we reply</span>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-outline-variant cursor-pointer">edit</span>
                </div>
                {" "}
                <div className="pt-8 border-t border-outline-variant/20 flex justify-between items-end">
                  <div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">SERVICE FEE</span>
                    {" "}
                    <p className="font-display-md text-2xl">Confirmed after consultation</p>
                  </div>
                </div>
              </div>
              {" "}
              <a
                href={whatsappLink(
                  "Hi ByChi Strands — I'd like to book an appointment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 w-full text-center block bg-primary text-white py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-[#C8A75B] transition-colors duration-400"
              >
                REQUEST ON WHATSAPP
              </a>
              {" "}
              <p className="text-center mt-6 font-body-sm text-on-surface-variant opacity-60 text-[11px]">A 30% deposit is required to confirm your appointment, deductible from the final service fee.</p>
            </div>
          </aside>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-md text-display-md text-primary scale-75 origin-left mb-8 md:mb-0 tracking-[-0.01em]">
            ByChi Strands
          </div>
          {" "}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-8">
              <Link className="font-body-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase tracking-tighter" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="font-body-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase tracking-tighter" href="/terms">
                Terms
              </Link>
              {" "}
              <Link className="font-body-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase tracking-tighter" href="/faqs">
                Support
              </Link>
              {" "}
              <Link className="font-body-sm text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity uppercase tracking-tighter" href="/about">
                Heritage
              </Link>
            </div>
            {" "}
            <p className="font-body-sm text-on-surface-variant opacity-40 text-[10px]">© 2024 ByChi Strands. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
