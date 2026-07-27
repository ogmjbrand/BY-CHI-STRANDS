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
                {/* Service Item 1 */}
                <div className="group relative bg-white p-8 hover:bg-surface-container transition-all duration-500 cursor-pointer border border-transparent hover:border-outline-variant/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="max-w-md">
                      <h3 className="font-headline-lg text-xl mb-2 text-on-surface">Signature Tonal Glaze</h3>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant opacity-80 leading-relaxed">
                        A bespoke chromatic overlay designed to enhance natural luminosity and restore fiber integrity with silken pigments.
                      </p>
                    </div>
                    {" "}
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="block font-label-caps text-primary mb-1">90 MINS</span>
                      {" "}
                      <span className="block font-body-md font-semibold text-on-surface">FROM $185</span>
                    </div>
                  </div>
                  {" "}
                  <input defaultChecked className="absolute inset-0 opacity-0 cursor-pointer" name="service" type="radio" />
                  {" "}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                {/* Service Item 2 */}
                <div className="group relative bg-white p-8 hover:bg-surface-container transition-all duration-500 cursor-pointer border border-transparent hover:border-outline-variant/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="max-w-md">
                      <h3 className="font-headline-lg text-xl mb-2 text-on-surface">HD Lace Customization</h3>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant opacity-80 leading-relaxed">
                        Precision hairline ventilation and scalp-match tinting for an undetectable, seamless integration of elite lace pieces.
                      </p>
                    </div>
                    {" "}
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="block font-label-caps text-primary mb-1">120 MINS</span>
                      {" "}
                      <span className="block font-body-md font-semibold text-on-surface">FROM $350</span>
                    </div>
                  </div>
                  {" "}
                  <input className="absolute inset-0 opacity-0 cursor-pointer" name="service" type="radio" />
                  {" "}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                {/* Service Item 3 */}
                <div className="group relative bg-white p-8 hover:bg-surface-container transition-all duration-500 cursor-pointer border border-transparent hover:border-outline-variant/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="max-w-md">
                      <h3 className="font-headline-lg text-xl mb-2 text-on-surface">Silk Amino Treatment</h3>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant opacity-80 leading-relaxed">
                        A molecular reconstruction therapy using pure silk proteins to fortify the hair shaft from within. Pure radiance.
                      </p>
                    </div>
                    {" "}
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="block font-label-caps text-primary mb-1">60 MINS</span>
                      {" "}
                      <span className="block font-body-md font-semibold text-on-surface">FROM $120</span>
                    </div>
                  </div>
                  {" "}
                  <input className="absolute inset-0 opacity-0 cursor-pointer" name="service" type="radio" />
                  {" "}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            </section>
            {/* 02 Master Artisan */}
            <section id="artisans">
              <div className="flex items-baseline space-x-4 mb-10">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.15em]">02</span>
                {" "}
                <h2 className="font-display-md text-headline-lg border-b border-outline-variant/30 pb-2 w-full">
                  Master Artisans
                </h2>
              </div>
              {" "}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Artisan 1 */}
                <label className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" data-alt="Close up editorial portrait of a sophisticated female hair artist with sleek hair, wearing a high-neck black silk blouse, studio lighting with soft shadows, minimalist ivory background, high-fashion aesthetic." src="/stitch/img-006.jpg" />
                    {" "}
                    <div className="absolute inset-0 border-[0.5px] border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {" "}
                    <input defaultChecked className="absolute top-4 right-4 accent-primary" name="artisan" type="radio" />
                  </div>
                  {" "}
                  <h4 className="font-headline-lg text-lg">Elena Vance</h4>
                  {" "}
                  <p className="font-label-caps text-[10px] text-primary">COLOUR SPECIALIST</p>
                </label>
                {/* Artisan 2 */}
                <label className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" data-alt="Professional editorial portrait of a male master hair artisan, wearing a bespoke gray suit, holding professional shears, soft natural lighting in a bright minimalist atelier, high-end photography style." src="/stitch/img-125.jpg" />
                    {" "}
                    <div className="absolute inset-0 border-[0.5px] border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {" "}
                    <input className="absolute top-4 right-4 accent-primary" name="artisan" type="radio" />
                  </div>
                  {" "}
                  <h4 className="font-headline-lg text-lg">Julian Rossi</h4>
                  {" "}
                  <p className="font-label-caps text-[10px] text-primary">SCULPTURAL CUTTING</p>
                </label>
                {/* Artisan 3 */}
                <label className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" data-alt="Sophisticated female hair artist with voluminous curls, wearing minimalist gold jewelry and a white designer shirt, warm studio lighting, clean background, editorial photography." src="/stitch/img-079.jpg" />
                    {" "}
                    <div className="absolute inset-0 border-[0.5px] border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {" "}
                    <input className="absolute top-4 right-4 accent-primary" name="artisan" type="radio" />
                  </div>
                  {" "}
                  <h4 className="font-headline-lg text-lg">Sophia Chen</h4>
                  {" "}
                  <p className="font-label-caps text-[10px] text-primary">LACE ARTISTRY</p>
                </label>
                {/* Artisan 4 */}
                <label className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <div className="w-full h-full bg-surface-container flex flex-col items-center justify-center border border-dashed border-outline/30">
                      <span className="material-symbols-outlined text-outline-variant text-4xl mb-2">auto_awesome</span>
                      {" "}
                      <span className="font-label-caps text-[10px] text-center px-4">NEXT AVAILABLE ARTISAN</span>
                    </div>
                    {" "}
                    <input className="absolute top-4 right-4 accent-primary" name="artisan" type="radio" />
                  </div>
                  {" "}
                  <h4 className="font-headline-lg text-lg">No Preference</h4>
                  {" "}
                  <p className="font-label-caps text-[10px] text-primary">FLEXIBLE BOOKING</p>
                </label>
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
                {/* Simple Calendar UI */}
                <div className="bg-white p-6 luxury-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <button className="material-symbols-outlined text-primary">chevron_left</button>
                    {" "}
                    <span className="font-headline-lg text-lg">October 2024</span>
                    {" "}
                    <button className="material-symbols-outlined text-primary">chevron_right</button>
                  </div>
                  {" "}
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    <span className="text-[10px] font-label-caps opacity-40">M</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">T</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">W</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">T</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">F</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">S</span>
                    {" "}
                    <span className="text-[10px] font-label-caps opacity-40">S</span>
                  </div>
                  {" "}
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {/* Calendar Grid Days */}
                    <span className="py-2 text-sm opacity-20">28</span>
                    <span className="py-2 text-sm opacity-20">29</span>
                    <span className="py-2 text-sm opacity-20">30</span>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">1</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">2</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">3</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">4</button>
                    {" "}
                    <button className="py-2 text-sm bg-primary text-white">5</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">6</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">7</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">8</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">9</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">10</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">11</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">12</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">13</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">14</button>
                    {" "}
                    <button className="py-2 text-sm hover:bg-secondary-container transition-colors">15</button>
                  </div>
                </div>
                {/* Time Slots */}
                <div className="space-y-4">
                  <p className="font-label-caps text-on-surface-variant mb-4">AVAILABLE TIMES FOR OCT 5</p>
                  {" "}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-4 border border-outline-variant/30 font-body-sm hover:border-primary transition-all">
                      09:00 AM
                    </button>
                    {" "}
                    <button className="py-4 border border-primary bg-primary-container/10 font-body-sm">11:30 AM</button>
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
                  <p className="font-headline-lg text-lg leading-tight">Signature Tonal Glaze</p>
                  {" "}
                  <span className="font-body-sm text-on-surface-variant">90 Minutes</span>
                </div>
                {" "}
                <div>
                  <span className="font-label-caps text-[10px] text-primary block mb-2">ARTISAN</span>
                  {" "}
                  <p className="font-headline-lg text-lg">Elena Vance</p>
                  {" "}
                  <span className="font-body-sm text-on-surface-variant">Colour Specialist</span>
                </div>
                {" "}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label-caps text-[10px] text-primary block mb-2">DATE & TIME</span>
                    {" "}
                    <p className="font-headline-lg text-lg">Saturday, Oct 5</p>
                    {" "}
                    <span className="font-body-sm text-on-surface-variant">at 11:30 AM</span>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-outline-variant cursor-pointer">edit</span>
                </div>
                {" "}
                <div className="pt-8 border-t border-outline-variant/20 flex justify-between items-end">
                  <div>
                    <span className="font-label-caps text-[10px] text-on-surface-variant block mb-1">TOTAL STARTING INVESTMENT</span>
                    {" "}
                    <p className="font-display-md text-2xl">$185.00</p>
                  </div>
                </div>
              </div>
              {" "}
              <button className="mt-12 w-full bg-primary text-white py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-[#C8A75B] transition-colors duration-400">
                CONFIRM CONSULTATION
              </button>
              {" "}
              <p className="text-center mt-6 font-body-sm text-on-surface-variant opacity-60 text-[11px]">A non-refundable 50% deposit is required for first-time guests.</p>
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
