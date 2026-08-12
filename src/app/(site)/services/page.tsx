import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ProductMedia } from "@/components/stitch/ProductMedia";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_signature_services_1
 * "ByChi Strands | Luxury Hair Services & Private Bookings"
 */

export const metadata: Metadata = {
  title: "Professional Hair Services",
};

export default function SignatureServices1Page() {
  return (
    <div className="scr-signature-services-1 theme-noir bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 sticky z-50 transition-all duration-300" id="top-nav">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto">
          <div className="flex items-center gap-12">
            <Link className="flex items-center gap-2.5 font-display-lg text-display-md font-bold tracking-tighter text-on-surface" href="/">
              <span className="h-9 w-9 rounded-full bg-white overflow-hidden shrink-0 ring-1 ring-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo-mark.jpg" alt="ByChi Strands" className="h-full w-full object-cover scale-125" />
              </span>
              ByChi <span className="font-script">Strands</span>
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
            <Link
              href="/book"
              className="hidden md:block bg-on-surface text-surface py-3 px-8 text-label-caps hover:bg-primary transition-all duration-500 scale-95 active:scale-100 uppercase tracking-[0.15em]"
            >
              Book Appointment
            </Link>
            {" "}
            <div className="flex gap-4">
              <Link href="/cart" aria-label="Your bag" className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">
                shopping_bag
              </Link>
              <button className="md:hidden text-on-surface-variant cursor-pointer" aria-label="Open menu">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Editorial Section */}
        <header className="py-section-padding grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 reveal-up active">
            <span className="font-label-caps text-primary mb-6 block">Artistry in every strand</span>
            {" "}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-8 leading-none tracking-[-0.02em]">
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
              <a className="flex items-center gap-2 border border-outline px-10 py-5 font-label-caps hover:bg-surface-container transition-all duration-500" href={whatsappLink("Hi ByChiStrands — I'd like a consultation about your services.")} target="_blank" rel="noopener noreferrer">
                Consultation via WhatsApp
                {" "}
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
          {" "}
          <div className="md:col-span-5 relative reveal-up active" style={{ transitionDelay: "200ms" }}>
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="The ByChi Strands founder wearing a burgundy lace-front unit styled in soft waves" src="/services/ceo-portrait-1.jpeg" />
            </div>
            {/* Floating Detail Card */}
            <div className="absolute -bottom-8 -left-8 glass-card text-on-surface p-6 rounded-lg shadow-2xl max-w-[240px] hidden lg:block">
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
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="A stylist's hands treating luxury hair extensions in the studio" src="/stitch/img-038.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Hair Laundry</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    A deep-cleansing restorative treatment that revives luster, removes product build-up, and conditions the cuticles for lasting silkiness.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • 24HR TURNAROUND</span>
                </div>
                {" "}
                <Link
                  href="/book?service=hair-laundry"
                  aria-label="Book Hair Laundry"
                  className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-on-primary transition-all"
                >
                  north_east
                </Link>
              </div>
            </div>
            {/* Service 2 — cinematic treatment: text overlaid on the image, not stacked below it */}
            <div className="reveal-up" style={{ transitionDelay: "150ms" }}>
              <div className="relative aspect-[4/5] md:aspect-video overflow-hidden bg-surface-container group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="An elegant lace-parted updo with soft curls, styled by ByChi Strands"
                  src="/services/frontal-installation-1.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5"></div>
                <Link
                  href="/book?service=frontal-installation"
                  aria-label="Book Frontal Installation"
                  className="absolute top-6 right-6 material-symbols-outlined text-white border border-white/30 bg-black/20 backdrop-blur-sm p-4 hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                >
                  north_east
                </Link>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="font-headline-lg text-headline-lg text-white mb-2">Frontal Installation</h3>
                  <p className="font-body-md text-white/80 max-w-sm mb-3">
                    Bespoke scalp-mimicking techniques for a seamless, undetectable finish. Includes personalized hairline customization and secure bonding.
                  </p>
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • EXCLUSIVE BOOKING</span>
                  <p className="font-body-sm text-white/70 mt-2">Home service available on request.</p>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col gap-6 reveal-up">
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luxury hair extensions in a deep plum and mahogany gradient" src="/stitch/img-004.jpg" />
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
                <Link
                  href="/book?service=wig-making"
                  aria-label="Book Wig Making"
                  className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-on-primary transition-all"
                >
                  north_east
                </Link>
              </div>
            </div>
            {/* Service 4 — cinematic treatment: real ventilation footage, text overlaid on a black gradient */}
            <div className="reveal-up" style={{ transitionDelay: "150ms" }}>
              <div className="relative aspect-[4/5] md:aspect-video overflow-hidden bg-surface-container group">
                <ProductMedia
                  media={{
                    type: "video",
                    src: "/services/ventilation-1.mp4",
                    alt: "ByChi Strands hand ventilation service in progress",
                  }}
                  className="w-full h-full object-cover"
                  autoPlay
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5 pointer-events-none"></div>
                <Link
                  href="/book?service=ventilation"
                  aria-label="Book Ventilation"
                  className="absolute top-6 right-6 material-symbols-outlined text-white border border-white/30 bg-black/20 backdrop-blur-sm p-4 hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
                >
                  north_east
                </Link>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 pointer-events-none">
                  <h3 className="font-headline-lg text-headline-lg text-white mb-2">Ventilation</h3>
                  <p className="font-body-md text-white/80 max-w-sm mb-3">
                    Precision hand ventilation that creates natural direction, realistic density and a refined finish for your custom unit.
                  </p>
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • HAND FINISHED</span>
                </div>
              </div>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col gap-6 reveal-up">
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Freshly imported curly raw hair bundles inspected at a wholesale supplier" src="/services/hair-importation-1.jpeg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Hair Importation</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Guided sourcing and importation support, from supplier selection to planning a confident first order.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">BY CONSULTATION • GUIDED SOURCING</span>
                </div>
                {" "}
                <Link
                  href="/book?service=hair-importation-service"
                  aria-label="Book Hair Importation Service"
                  className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-on-primary transition-all"
                >
                  north_east
                </Link>
              </div>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col gap-6 reveal-up" style={{ transitionDelay: "150ms" }}>
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="A flat-lay of professional hair styling tools — combs, clamps and finishing sprays" src="/stitch/img-070.jpg" />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Sales of Hair Tools</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Professional tools selected to support installation, styling and the ongoing care of your hair investment.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">AVAILABLE TO SHOP • IN STORE</span>
                </div>
                {" "}
                <a
                  href={whatsappLink("Hi ByChiStrands — I'd like to shop your professional hair tools.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-on-primary transition-all"
                >
                  north_east
                </a>
              </div>
            </div>
            {/* Service 7 */}
            <div className="flex flex-col gap-6 reveal-up">
              <div className="aspect-video overflow-hidden bg-surface-container relative group">
                <ProductMedia
                  media={{
                    type: "video",
                    src: "/services/mentorship-video.mp4",
                    poster: "/services/mentorship.jpeg",
                    alt: "A trainee receiving her certificate of attendance at a ByChi Strands mentorship session",
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {" "}
                <div className="absolute inset-0 bg-on-surface/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {" "}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-headline-lg mb-2">Training</h3>
                  {" "}
                  <p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    Practical education for stylists, wig makers and hair business owners, covering technique and business guidance.
                  </p>
                  {" "}
                  <span className="font-label-caps text-primary tracking-widest">SCHEDULED SESSIONS • BY CONSULTATION</span>
                </div>
                {" "}
                <Link
                  href="/book?service=training"
                  aria-label="Book Training"
                  className="material-symbols-outlined text-on-surface-variant border border-outline-variant p-4 hover:bg-primary hover:text-on-primary transition-all"
                >
                  north_east
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive Booking Widget */}
        <section className="py-section-padding bg-surface-container-low md:mx-[-80px] px-margin-mobile md:px-margin-desktop mb-section-padding" id="booking">
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
                  <div className="flex items-center gap-6 p-6 glass-card text-on-surface rounded-lg border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                    {" "}
                    <div>
                      <h3 className="font-headline-lg text-body-md font-bold uppercase mb-1">Authenticity Guaranteed</h3>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">
                        We only work with premium Vietnamese raw hair and professional-grade products.
                      </p>
                    </div>
                  </div>
                  {" "}
                  <div className="flex items-center gap-6 p-6 glass-card text-on-surface rounded-lg">
                    <span className="material-symbols-outlined text-primary text-3xl">lock</span>
                    {" "}
                    <div>
                      <h3 className="font-headline-lg text-body-md font-bold uppercase mb-1">Secured Deposits</h3>
                      {" "}
                      <p className="font-body-sm text-on-surface-variant">
                        A 30% deposit is required to confirm your slot, deductible from the final service fee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Booking CTA — the real form (service, date, time, notes) lives at /book */}
              <div className="glass-card text-on-surface p-10 rounded-xl shadow-xl reveal-up" style={{ transitionDelay: "200ms" }}>
                <h3 className="font-headline-lg text-2xl mb-4">Ready when you are</h3>
                <p className="font-body-md text-on-surface-variant mb-10">
                  Pick a service, your preferred date and time on the full booking form — we confirm
                  every slot personally over WhatsApp.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/book"
                    className="w-full block text-center bg-on-surface text-surface py-5 font-label-caps hover:bg-primary transition-all duration-500 shadow-lg active:scale-95"
                  >
                    Start Your Booking
                  </Link>
                  <a
                    href={whatsappLink("Hi ByChiStrands — I'd like to book a service.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 border border-outline py-5 font-label-caps hover:bg-surface-container transition-all duration-500"
                  >
                    Or Message Us Directly
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="md:col-span-1">
            <h3 className="font-display-md text-headline-lg text-primary mb-6">ByChi <span className="font-script">Strands</span></h3>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mb-8 max-w-xs">
              Crafting confidence through elite artistry and authentic raw hair sourcing.
            </p>
            {" "}
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              {" "}
              <a
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href={site.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-[18px]">camera</span>
              </a>
            </div>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <h3 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Company</h3>
            {" "}
            <Link className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href="/about">
              About Our Craft
            </Link>
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
            <h3 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Customer Care</h3>
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
            <h3 className="font-label-caps text-on-surface font-bold mb-4 uppercase">Connect</h3>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            {" "}
            <a className="font-body-md text-body-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-all" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mt-6">
              © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
            </p>
          </div>
        </div>
      </footer>
      {/* Scripts for simple animations */}
    </div>
  );
}
