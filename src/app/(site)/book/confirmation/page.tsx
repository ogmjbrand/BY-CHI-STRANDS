import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_atelier_booking_confirmation
 * "Booking Confirmation | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Booking Confirmation",
};

export default function AtelierBookingConfirmationPage() {
  return (
    <div className="scr-atelier-booking-confirmation bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline/20 shadow-sm transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center w-full px-8 md:px-20 py-4 max-w-[1440px] mx-auto">
          <div className="font-display-md text-[24px] md:text-display-md text-primary tracking-tighter cursor-pointer md:tracking-[-0.01em]">
            ByChi Strands
          </div>
          {" "}
          <nav className="hidden md:flex gap-8 items-center">
            <Link className="font-body-sm text-body-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
              Collections
            </Link>
          </nav>
          {" "}
          <div className="flex items-center gap-6">
            <button className="hover:opacity-70 transition-opacity duration-300 text-primary">
              <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            </button>
            {" "}
            <button className="hover:opacity-70 transition-opacity duration-300 text-primary">
              <span className="material-symbols-outlined" data-icon="person">person</span>
            </button>
          </div>
        </div>
      </header>
      <main className="pt-32 pb-section-padding">
        {/* Hero Confirmation Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 text-center">
          <div className="reveal-up" style={{ animationDelay: "0.1s" }}>
            <span className="font-label-caps text-label-caps text-primary mb-4 block uppercase tracking-[0.3em]">
              Confirmation Confirmed
            </span>
            {" "}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6 leading-tight md:leading-[1.1] md:tracking-[-0.02em]">
              Your Transformation
              <br />
              is Secured
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto opacity-80">
              We are preparing for your arrival at the Mayfair Atelier. A master artisan is awaiting to curate your new look.
            </p>
          </div>
        </section>
        {/* Summary & Details Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Details Card */}
          <div className="lg:col-span-7 reveal-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-12 relative overflow-hidden group shadow-[0px_20px_50px_rgba(0,0,0,0.02)]">
              {/* Subtle Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
              {" "}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-outline-variant/20 pb-8">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Signature Tonal Glaze</h2>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                    {" "}
                    90 Minutes Professional Service
                  </p>
                </div>
                {" "}
                <div className="mt-4 md:mt-0 text-right">
                  <span className="font-label-caps text-label-caps text-on-surface-variant block mb-1 tracking-[0.15em]">
                    TOTAL INVESTMENT
                  </span>
                  {" "}
                  <span className="font-display-md text-[32px] text-primary">$185.00</span>
                  {" "}
                  <span className="font-body-sm text-[12px] block text-primary/70 italic">Deposit Paid</span>
                </div>
              </div>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Artisan */}
                <div className="space-y-4">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest">ARTISAN</span>
                  {" "}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-surface-container-high relative overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="A professional headshot of a female hair stylist named Elena Vance, looking elegant and sophisticated. She has sleek hair and is wearing a minimalist black designer blazer. The background is a blurred high-end hair salon with soft warm lighting and ivory tones, consistent with a luxury hair maison aesthetic." src="/stitch/img-015.jpg" />
                    </div>
                    {" "}
                    <div>
                      <p className="font-headline-lg text-body-xl leading-tight">Elena Vance</p>
                      {" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Colour Specialist</p>
                    </div>
                  </div>
                </div>
                {/* Schedule */}
                <div className="space-y-4">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest">SCHEDULE</span>
                  {" "}
                  <div>
                    <p className="font-headline-lg text-body-xl leading-tight">Saturday, Oct 5</p>
                    {" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant">at 11:30 AM</p>
                  </div>
                </div>
                {/* Location */}
                <div className="space-y-4 md:col-span-2 border-t border-outline-variant/10 pt-8">
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">LOCATION</span>
                  {" "}
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1" data-icon="location_on">location_on</span>
                    {" "}
                    <div>
                      <p className="font-headline-lg text-body-xl leading-tight">The London Atelier</p>
                      {" "}
                      <p className="font-body-sm text-body-sm text-on-surface-variant">12 Brook Street, Mayfair, London W1K 5DB</p>
                    </div>
                  </div>
                  {" "}
                  <div className="h-48 w-full mt-4 bg-surface-container-high rounded overflow-hidden">
                    <div className="w-full h-full grayscale opacity-70 hover:grayscale-0 transition-all duration-700 cursor-crosshair" data-alt="A minimalist architectural map of the Mayfair district in London, showing the area around Brook Street. The map uses a sophisticated monochrome palette with champagne gold accents for landmarks. The style is clean, editorial, and highly legible, appearing like a section of a high-end travel magazine." data-location="London Mayfair" style={{ backgroundImage: "url('/stitch/img-088.jpg')" }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#111111] text-white px-8 py-4 font-label-caps text-label-caps flex items-center gap-2 hover:bg-[#C8A75B] transition-all duration-400 ease-in-out tracking-[0.15em]">
                <span className="material-symbols-outlined text-[18px]" data-icon="calendar_add_on">calendar_add_on</span>
                {" "}
                ADD TO CALENDAR
              </button>
              {" "}
              <button className="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary-container hover:text-white transition-all duration-400 tracking-[0.15em]">
                VIEW DIRECTIONS
              </button>
              {" "}
              <button className="text-on-surface-variant hover:text-primary px-8 py-4 font-label-caps text-label-caps transition-colors duration-300 underline underline-offset-8 decoration-outline-variant tracking-[0.15em]">
                MODIFY APPOINTMENT
              </button>
            </div>
          </div>
          {/* Right Column: Concierge & Visual */}
          <div className="lg:col-span-5 space-y-gutter reveal-up" style={{ animationDelay: "0.3s" }}>
            {/* Preparation Card */}
            <div className="bg-surface-container p-8 md:p-10 border border-outline-variant/10">
              <h3 className="font-headline-lg text-[24px] mb-8 border-b border-outline-variant pb-4">Concierge Preparation</h3>
              {" "}
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">01</span>
                  {" "}
                  <p className="font-body-md text-on-surface-variant">
                    Arrive with clean, dry hair to allow for optimal pigment absorption during your glaze treatment.
                  </p>
                </li>
                {" "}
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">02</span>
                  {" "}
                  <p className="font-body-md text-on-surface-variant">
                    Consultation will begin with a signature silk assessment to determine the ideal tonal balance.
                  </p>
                </li>
                {" "}
                <li className="flex gap-4">
                  <span className="font-display-md text-[32px] text-primary/30 leading-none">03</span>
                  {" "}
                  <p className="font-body-md text-on-surface-variant">
                    Private suite and seasonal refreshments are reserved for your arrival.
                  </p>
                </li>
              </ul>
            </div>
            {/* Atmospheric Image */}
            <div className="relative group h-[400px] overflow-hidden border border-outline-variant/20">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic, close-up shot of liquid silk-like hair catching the light. The hair has a luminous glaze, showing incredible shine and smooth texture. Soft, warm sunlight streams into a minimalist ivory studio, creating deep shadows and high-key highlights. The mood is calm, luxurious, and evokes the feeling of a premium beauty treatment." src="/stitch/img-126.jpg" />
              {" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              {" "}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-label-caps text-[10px] tracking-[0.2em] mb-2">EXPERIENCE</p>
                {" "}
                <p className="font-headline-lg text-white">The Aura Signature</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full relative border-t border-outline-variant/30 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-8 md:px-20 py-24 max-w-[1440px] mx-auto">
          <div className="lg:col-span-1">
            <div className="font-display-lg text-display-lg text-primary mb-6 tracking-[-0.02em]">ByChi Strands</div>
            {" "}
            <p className="font-body-sm text-on-surface-variant/70 max-w-xs">
              Elevating the art of hair through scientific precision and editorial excellence.
            </p>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-primary mb-2 tracking-[0.15em]">DISCOVER</span>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              Heritage
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              Sustainability
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">
              Global Boutiques
            </Link>
          </div>
          {" "}
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-primary mb-2 tracking-[0.15em]">SUPPORT</span>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">
              Contact
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/privacy">
              Privacy
            </Link>
            {" "}
            <Link className="font-body-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="/shipping">
              Shipping
            </Link>
          </div>
          {" "}
          <div className="flex flex-col justify-between items-start md:items-end lg:items-end">
            <div className="flex gap-4 mb-8 md:mb-0">
              <a className="hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined" data-icon="language">language</span>
              </a>
              {" "}
              <a className="hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined" data-icon="share">share</span>
              </a>
            </div>
            {" "}
            <p className="font-body-sm text-[12px] text-on-surface-variant/50">© 2024 ByChi Strands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
