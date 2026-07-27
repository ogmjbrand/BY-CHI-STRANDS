import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_signature_services_1
 * "ByChi Strands | Luxury Hair Services & Private Bookings"
 */

export const metadata: Metadata = {
  title: "Professional Hair Services",
};

export default function SignatureServices1Page() {
  return (
    <div className="scr-signature-services-1 bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 sticky z-50 transition-all duration-300" id="top-nav">
        <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
          <div className="flex items-center gap-12">
            <Link className="font-display-lg text-display-md font-bold tracking-tighter text-on-surface dark:text-surface-bright" href="/">
              ByChi Strands
            </Link>
            {" "}
            <div className="hidden md:flex gap-8 items-center">
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/shop">
                Shop
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                Collections
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-primary font-semibold border-b border-primary pb-1" href="/services">
                Services
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
                Academy
              </Link>
              {" "}
              <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
                About
              </Link>
            </div>
          </div>
          {" "}
          <div className="flex items-center gap-6">
            <button className="hidden md:block bg-on-surface text-surface py-3 px-8 text-label-caps hover:bg-primary transition-all duration-500 scale-95 active:scale-100 uppercase tracking-[0.15em]">
              Book Appointment
            </button>
            {" "}
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">
                shopping_bag
              </span>
              {" "}
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer md:hidden">menu</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-container-max mx-auto px-margin-desktop">
        {/* Hero Editorial Section */}
        <header className="py-section-padding grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 reveal-up active">
            <span className="font-label-caps text-primary mb-6 block">Artistry in every strand</span>
            {" "}
            <h1 className="font-display-lg text-display-lg mb-8 leading-none tracking-[-0.02em]">
              Professional Hair
              {" "}
              <br />
              Craftsmanship.
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mb-10">
              Experience the gold standard in hair care. From bespoke installations to meticulous restoration, we treat every strand with the reverence of a masterpiece.
            </p>
            {" "}
            <div className="flex flex-wrap gap-6">
              <a className="bg-primary text-on-primary px-10 py-5 font-label-caps hover:bg-on-surface transition-all duration-500" href="#booking">
                Explore Services
              </a>
              {" "}
              <a className="flex items-center gap-2 border border-outline px-10 py-5 font-label-caps hover:bg-surface-container transition-all duration-500" href="https://wa.me/yourlink" target="_blank">
                Consultation via WhatsApp
                {" "}
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
          {" "}
          <div className="md:col-span-5 relative reveal-up active" style={{ transitionDelay: "200ms" }}>
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" data-alt="A high-fashion editorial portrait of a woman with vibrant burgundy luxury hair, wearing a structured red garment. The lighting is soft and cinematic, highlighting the silky texture and deep sheen of the hair against a minimalist, ivory-toned architectural background with subtle gold accents. The atmosphere is sophisticated and exclusive." src="/stitch/img-077.jpg" />
            </div>
            {/* Floating Detail Card */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-lg shadow-2xl max-w-[240px] hidden lg:block">
              <p className="font-label-caps text-primary text-[10px] mb-2">Signature Finish</p>
              {" "}
              <p className="font-headline-lg text-[18px] mb-2 leading-tight">Vietnamese Raw Hair Specialists</p>
              {" "}
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {" "}
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* Service Menu: Editorial Layout */}
        <section className="py-section-padding border-t border-outline-variant/30" id="services">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl reveal-up">
              <h2 className="font-display-md text-display-md mb-6 tracking-[-0.01em]">The Service Suite</h2>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                Hair laundry, wig making, ventilation, frontal installation, hair importation support, professional hair tools and training, all delivered with the care luxury hair deserves.
              </p>
            </div>
            {" "}
            <div className="reveal-up" style={{ transitionDelay: "100ms" }}>
              <span className="font-label-caps border-b border-primary pb-2">ByChi Professional Standards</span>
            </div>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            {/* Service 1 */}
            <div className="flex flex-col gap-6 reveal-up">
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up shot of a stylist's hands gently treating luxury hair extensions in a minimalist, bright studio setting. Soft focus on water droplets and premium hair products. The aesthetic is clean, ivory-toned, and conveys a sense of artisanal care and meticulous craftsmanship." src="/stitch/img-038.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Wig Laundry</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    A deep-cleansing restorative treatment that revives luster, removes product build-up, and conditions the cuticles for lasting silkiness.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">FROM $75 • 48HR TURNAROUND</span>
                </div>
                {" "}
                <button className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-white transition-all">
                  north_east
                </button>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col gap-6 reveal-up" style={{ transitionDelay: "150ms" }}>
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A macro photograph of a perfectly executed frontal installation. The lace is invisible against the skin, blending seamlessly into a natural-looking hairline. High-end lighting captures the subtle gold highlights of the hair and the flawless skin texture. Professional, high-fidelity beauty photography style." src="/stitch/img-075.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Frontal Installation</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Bespoke scalp-mimicking techniques for a seamless, undetectable finish. Includes personalized hairline customization and secure bonding.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">FROM $150 • EXCLUSIVE BOOKING</span>
                </div>
                {" "}
                <button className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-white transition-all">
                  north_east
                </button>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col gap-6 reveal-up">
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Vibrant luxury hair extensions being hand-colored in a deep plum and mahogany gradient. The color appears rich and multidimensional, with high sheen. The workspace is pristine, with glass jars of pigment and gold-handled tools, reflecting a luxury salon environment." src="/stitch/img-004.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Wig Making</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Bespoke wig construction tailored to your preferred cap, fit, density and finish for a polished, ready-to-wear unit.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • CUSTOM FIT</span>
                </div>
                {" "}
                <button className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-white transition-all">
                  north_east
                </button>
              </div>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col gap-6 reveal-up" style={{ transitionDelay: "150ms" }}>
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Split screen style imagery showing a before and after restoration of a high-quality human hair wig. The 'after' side shows extremely smooth, tangle-free, and shiny hair that looks brand new. The lighting is high-key and commercial, emphasizing the quality of the restoration work." src="/stitch/img-063.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Ventilation</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Precision hand ventilation that creates natural direction, realistic density and a refined finish for your custom unit.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • HAND FINISHED</span>
                </div>
                {" "}
                <button className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-white transition-all">
                  north_east
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive Booking Widget */}
        <section className="py-section-padding bg-surface-container-low mx-[-80px] px-margin-desktop mb-section-padding" id="booking">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="reveal-up">
                <h2 className="font-display-md text-display-md mb-8 tracking-[-0.01em]">Secure Your Private Appointment</h2>
                {" "}
                <p className="font-body-xl text-on-surface-variant mb-12">
                  Select your preferred service and time. We operate on a strictly private basis to ensure undivided attention to every client.
                </p>
                {" "}
                <div className="space-y-8">
                  <div className="flex items-center gap-6 p-6 glass-card rounded-lg border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                    {" "}
                    <div>
                      <h4 className="font-headline-lg text-body-md font-bold uppercase mb-1">Authenticity Guaranteed</h4>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">
                        We only work with premium Vietnamese raw hair and professional-grade products.
                      </p>
                    </div>
                  </div>
                  {" "}
                  <div className="flex items-center gap-6 p-6 glass-card rounded-lg">
                    <span className="material-symbols-outlined text-primary text-3xl">lock</span>
                    {" "}
                    <div>
                      <h4 className="font-headline-lg text-body-md font-bold uppercase mb-1">Secured Deposits</h4>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">
                        A 30% deposit is required to confirm your slot, deductible from the final service fee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* The Booking Form Shell */}
              <div className="glass-card p-10 rounded-xl shadow-xl reveal-up" style={{ transitionDelay: "200ms" }}>
                <div className="mb-10">
                  <div className="flex justify-between mb-4">
                    <span className="text-label-caps text-on-surface-variant tracking-[0.15em]">Step 1 of 3</span>
                    {" "}
                    <span className="text-label-caps text-primary font-bold uppercase tracking-[0.15em]">Select Details</span>
                  </div>
                  {" "}
                  <div className="h-1 bg-outline-variant/30 w-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 transition-all duration-700"></div>
                  </div>
                </div>
                {" "}
                <form className="space-y-8">
                  <div>
                    <label className="font-label-caps text-[10px] mb-2 block text-on-surface-variant">Select Service Category</label>
                    {" "}
                    <select className="w-full bg-transparent border-b border-outline py-3 font-body-md focus:border-primary focus:ring-0 outline-none transition-all appearance-none cursor-pointer">
                      <option>Wig Laundry & Refresh</option>
                      {" "}
                      <option>Hair Importation Service</option>
                      {" "}
                      <option>Wig Making</option>
                      {" "}
                      <option>Ventilation</option>
                      {" "}
                      <option>Frontal Installation</option>
                      {" "}
                      <option>Sales of Hair Tools</option>
                      {" "}
                      <option>Training</option>
                    </select>
                  </div>
                  {" "}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="font-label-caps text-[10px] mb-2 block text-on-surface-variant">Preferred Date</label>
                      {" "}
                      <input className="w-full bg-transparent border-b border-outline py-3 font-body-md focus:border-primary focus:ring-0 outline-none" type="date" />
                    </div>
                    {" "}
                    <div>
                      <label className="font-label-caps text-[10px] mb-2 block text-on-surface-variant">Select Time</label>
                      {" "}
                      <select className="w-full bg-transparent border-b border-outline py-3 font-body-md focus:border-primary focus:ring-0 outline-none">
                        <option>09:00 AM</option>
                        {" "}
                        <option>11:30 AM</option>
                        {" "}
                        <option>02:00 PM</option>
                        {" "}
                        <option>04:30 PM</option>
                      </select>
                    </div>
                  </div>
                  {" "}
                  <div className="pt-8 space-y-4">
                    <div className="flex justify-between items-center text-body-sm text-on-surface-variant italic">
                      <span>Base Service Fee</span>
                      {" "}
                      <span>$120.00</span>
                    </div>
                    {" "}
                    <div className="flex justify-between items-center text-body-md font-bold">
                      <span>Deposit Due Today</span>
                      {" "}
                      <span className="text-primary">$36.00</span>
                    </div>
                  </div>
                  {" "}
                  <button className="w-full bg-on-surface text-surface py-5 font-label-caps hover:bg-primary transition-all duration-500 mt-6 shadow-lg active:scale-95" type="submit">
                    Continue to Secure Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-low dark:bg-surface-container-highest">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="md:col-span-1">
            <h3 className="font-display-md text-headline-lg text-primary mb-6">ByChi Strands</h3>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mb-8 max-w-xs">
              Crafting confidence through elite artistry and authentic raw hair sourcing.
            </p>
            {" "}
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              {" "}
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-[18px]">camera</span>
              </a>
            </div>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Company</h4>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="#">
              About Our Craft
            </a>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/collections">
              Collections
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/academy">
              Academy
            </Link>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Customer Care</h4>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/shipping">
              Shipping & Returns
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/privacy">
              Privacy Policy
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/terms">
              Terms of Service
            </Link>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Connect</h4>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="https://instagram.com/bychistrands2">
              Instagram
            </a>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="https://tiktok.com/@bychistrands">
              TikTok
            </a>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="https://wa.me/2340000000000">
              WhatsApp
            </a>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mt-6">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
          </div>
        </div>
      </footer>
      {/* Scripts for simple animations */}
    </div>
  );
}
