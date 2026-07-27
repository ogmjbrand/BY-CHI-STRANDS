import type { Metadata } from "next";
import Link from "next/link";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_order_confirmation
 * "Order Confirmation | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Order Confirmation",
};

export default function OrderConfirmationPage() {
  return (
    <>
      {/* ── Mobile design (Stitch: digital_flagship_mobile_order_confirmation) ── */}
      <div className="md:hidden scr-mobile-order-confirmation bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile py-6 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
          <h1 className="font-display-lg text-headline-lg-mobile text-on-background">ByChi Strands</h1>
          {" "}
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors duration-400">
              <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            </button>
            {" "}
            <button className="text-on-surface-variant hover:text-primary transition-colors duration-400">
              <span className="material-symbols-outlined" data-icon="person">person</span>
            </button>
          </div>
        </header>
        <main className="max-w-container-max mx-auto px-margin-mobile py-12 md:py-24 animate-celebration">
          {/* Celebratory Header */}
          <section className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.2em]">
              Order Confirmed — #AOS-88291
            </span>
            {" "}
            <h2 className="font-display-md text-display-md mb-6 leading-tight tracking-[-0.01em]">
              Your Masterpiece
              {" "}
              <br />
              is in Production
            </h2>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-lg mx-auto">
              Our artisans have begun the meticulous process of hand-weaving your selection into existence.
            </p>
          </section>
          {/* The Selection */}
          <section className="mb-20">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden relative">
                <img className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" data-alt="A hyper-realistic studio shot of a high-end luxury silk bob wig displayed on a minimalist matte white bust. The hair is deep obsidian black, reflecting soft, diffused studio lighting that emphasizes its liquid-like sheen. The background is a warm, ivory-toned textured wall, creating a sophisticated light-mode atmosphere. Professional photography with high contrast and sharp focus on the delicate hair fibers." src="/stitch/img-115.jpg" />
                {" "}
                <div className="absolute top-4 right-4 bg-primary-container/90 text-on-primary-container px-3 py-1 font-label-caps text-[10px] uppercase tracking-widest">
                  Selected
                </div>
              </div>
              {" "}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-2 tracking-[0.15em]">
                  THE SELECTION
                </h3>
                {" "}
                <h4 className="font-display-md text-headline-lg mb-6">The Signature Silk Bob</h4>
                {" "}
                <div className="space-y-4 border-t border-outline-variant/30 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                      Fiber Type
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md">Aura Grade 12A Virgin Silk</span>
                  </div>
                  {" "}
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                      Density
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md">180% Natural Volume</span>
                  </div>
                  {" "}
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                      Lace Tech
                    </span>
                    {" "}
                    <span className="font-body-md text-body-md">Invisi-Root HD Mesh</span>
                  </div>
                  {" "}
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/30">
                    <span className="font-label-caps text-label-caps text-on-surface font-bold uppercase tracking-[0.15em]">
                      Total Investment
                    </span>
                    {" "}
                    <span className="font-display-md text-headline-lg text-primary">$3,450.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* White Glove Concierge */}
          <section className="bg-surface-container-low p-8 md:p-12 border border-outline-variant/20 luxury-gradient">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary text-4xl" data-icon="lock_open">lock_open</span>
              {" "}
              <div>
                <h3 className="font-display-md text-headline-lg">White Glove Concierge</h3>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-wider">Premium Logistics Activated</p>
              </div>
            </div>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                  Estimated Arrival
                </p>
                {" "}
                <p className="font-body-xl text-body-xl font-medium">October 14th — October 16th</p>
                {" "}
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Your order is currently in the 'Hand-Knotted' phase. Our courier will contact you 24 hours prior to delivery for signature confirmation.
                </p>
              </div>
              {" "}
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                  Shipping Address
                </p>
                {" "}
                <address className="not-italic font-body-md text-body-md">
                  1224 Fifth Avenue, Suite 402
                  <br />
                  {" "}
                  New York, NY 10029
                  <br />
                  {" "}
                  United States
                </address>
              </div>
            </div>
          </section>
          {/* CTAs */}
          <section className="mt-20 flex flex-col gap-6 items-center">
            <button className="w-full max-w-md py-5 bg-on-background text-surface font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary-container transition-colors duration-400 ease-in-out">
              View Dashboard
            </button>
            {" "}
            <button className="w-full max-w-md py-5 border border-primary text-primary font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-primary hover:text-surface transition-all duration-400 ease-in-out">
              Visit the Academy
            </button>
            {" "}
            <Link className="font-label-caps text-label-caps text-on-surface-variant underline decoration-outline-variant/50 hover:text-primary transition-colors mt-4 tracking-[0.15em]" href="/contact">
              NEED ASSISTANCE? CONTACT ATELIER
            </Link>
          </section>
        </main>
        {/* Footer */}
        <footer className="border-t border-outline-variant/20 bg-surface mt-24">
          <div className="max-w-container-max mx-auto px-margin-mobile py-section-padding flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="font-display-md text-headline-lg text-primary">ByChi Strands</div>
            {" "}
            <div className="flex gap-8">
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/about">
                Heritage
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 tracking-[0.15em]" href="/faqs">
                Support
              </Link>
            </div>
            {" "}
            <div className="font-body-sm text-body-sm text-on-surface-variant">© 2024 ByChi Strands. The Art of Luxury Hair.</div>
          </div>
        </footer>
      </div>

      {/* ── Desktop design (Stitch: digital_flagship_order_confirmation) ── */}
      <div className="hidden md:block scr-order-confirmation bg-surface text-on-surface font-body-md selection:bg-primary-container selection:text-white overflow-x-hidden">
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto bg-surface/80 dark:bg-on-background/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-500 ease-out">
          <div className="flex items-center">
            <span className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background dark:text-surface-container-lowest">
              ByChi Strands
            </span>
          </div>
          {" "}
          <nav className="hidden md:flex items-center space-x-12">
            <Link className="text-on-surface-variant dark:text-surface-variant font-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-400 ease-in-out" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="text-on-surface-variant dark:text-surface-variant font-label-caps hover:text-primary dark:hover:text-primary-fixed transition-colors duration-400 ease-in-out" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="text-primary dark:text-primary-fixed-dim font-bold border-b border-primary dark:border-primary-fixed-dim pb-1 transition-colors duration-400 ease-in-out" href="/account">
              Orders
            </Link>
          </nav>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="text-primary dark:text-primary-fixed hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            </button>
            {" "}
            <button className="text-primary dark:text-primary-fixed hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" data-icon="person">person</span>
            </button>
          </div>
        </header>
        <main className="min-h-screen">
          {/* Hero Section: Refined Confirmation */}
          <section className="relative pt-24 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <div className="lg:col-span-7 editorial-reveal">
                <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] mb-6 block">ORDER CONFIRMED</span>
                {" "}
                <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-tight tracking-[-0.02em]">
                  Thank You,
                  {" "}
                  <br />
                  {" "}
                  <span className="italic font-light">Julianne V. Sterling</span>
                </h1>
                {" "}
                <div className="flex flex-col space-y-4 max-w-xl">
                  <p className="font-body-xl text-on-surface-variant">
                    Your order
                    {" "}
                    <span className="font-bold text-on-background">#AS-92841-LX</span>
                    {" "}
                    has been received and transitioned to our master artisans.
                  </p>
                  {" "}
                  <div className="py-6 border-t border-outline-variant/30 mt-8">
                    <h3 className="font-label-caps text-label-caps text-primary mb-3 tracking-[0.15em]">BESPOKE PRODUCTION TIMELINE</h3>
                    {" "}
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Each signature piece undergoes a rigorous 14-day curation process, including hand-threading, silk infusion, and a final quality inspection by our Creative Director. You will receive an invitation to track your masterpiece once it clears the Atelier.
                    </p>
                  </div>
                </div>
              </div>
              {/* Abstract Visual Anchor */}
              <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-end items-center">
                <div className="w-full aspect-[4/5] bg-surface-container relative overflow-hidden rounded-lg">
                  <img className="w-full h-full object-cover" data-alt="A high-fashion, editorial close-up of flowing, liquid-smooth black hair being touched by a hand wearing a white silk glove. The lighting is dramatic and moody, using soft Rembrandt lighting to highlight the glossy texture of the hair. The background is a minimalist ivory studio set with warm gold undertones, echoing the ByChi Strands brand identity." src="/stitch/img-083.jpg" />
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/20 to-transparent"></div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-primary-container/20 rotate-12 hidden lg:block"></div>
              </div>
            </div>
          </section>
          {/* Order Summary: Bento Grid Inspired */}
          <section className="bg-surface-container-low py-section-padding">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <h2 className="font-display-md text-display-md text-on-background mb-16 text-center tracking-[-0.01em]">
                The Selection
              </h2>
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                {/* Product Card */}
                <div className="lg:col-span-2 bg-white p-8 md:p-12 border border-outline-variant/20 flex flex-col md:flex-row gap-12 group">
                  <div className="w-full md:w-1/3 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A studio product photograph of a luxury bob-cut wig styled with a sharp, geometric edge. The hair is deep obsidian with a silk-like sheen. It is presented on a minimalist champagne-colored mannequin head against a soft white background. Professional high-key lighting creates soft shadows and a high-end beauty aesthetic." src="/stitch/img-008.jpg" />
                  </div>
                  {" "}
                  <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline-lg text-headline-lg text-on-background">The Signature Silk Bob</h3>
                        {" "}
                        <span className="font-body-xl text-primary font-bold">$1,850.00</span>
                      </div>
                      {" "}
                      <div className="space-y-4 pt-6 border-t border-outline-variant/30">
                        <div className="flex justify-between">
                          <span className="font-label-caps text-on-surface-variant">LENGTH</span>
                          {" "}
                          <span className="font-body-md text-on-background">18 Inches</span>
                        </div>
                        {" "}
                        <div className="flex justify-between">
                          <span className="font-label-caps text-on-surface-variant">DENSITY</span>
                          {" "}
                          <span className="font-body-md text-on-background">150% High Density</span>
                        </div>
                        {" "}
                        <div className="flex justify-between">
                          <span className="font-label-caps text-on-surface-variant">LACE TYPE</span>
                          {" "}
                          <span className="font-body-md text-on-background">Invisible HD Film Lace</span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="mt-8 flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                      {" "}
                      <span className="font-label-caps text-[10px] tracking-widest">CERTIFIED MASTERPIECE</span>
                    </div>
                  </div>
                </div>
                {/* Delivery/Concierge Info */}
                <div className="bg-primary p-8 md:p-10 flex flex-col justify-between text-white border border-primary">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-6 opacity-80" data-icon="local_shipping">
                      local_shipping
                    </span>
                    {" "}
                    <h3 className="font-headline-lg text-headline-lg mb-6 leading-snug">White Glove Concierge</h3>
                    {" "}
                    <p className="font-body-md opacity-90 leading-relaxed mb-8">
                      Your order includes our premium delivery service. A dedicated courier will ensure your package is handled with extreme care and delivered to your doorstep in our temperature-controlled signature packaging.
                    </p>
                  </div>
                  {" "}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm font-label-caps tracking-widest border-b border-white/20 pb-4">
                      <span className="material-symbols-outlined" data-icon="schedule">schedule</span>
                      {" "}
                      Est. Delivery: Oct 24 - Oct 28
                    </div>
                    {" "}
                    <div className="flex items-center gap-4 text-sm font-label-caps tracking-widest">
                      <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
                      {" "}
                      New York, NY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-section-padding px-margin-mobile md:px-margin-desktop text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-display-md text-display-md mb-8 tracking-[-0.01em]">What follows next?</h3>
              {" "}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Link className="w-full md:w-auto px-12 py-5 bg-on-background text-white font-label-caps text-label-caps hover:bg-primary-container transition-all duration-400 ease-in-out uppercase tracking-[0.2em] rounded-[4px]" href="/account">
                  View Dashboard
                </Link>
                {" "}
                <Link className="group relative py-2 font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]" href="/academy">
                  Visit the Academy
                  {" "}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-400 group-hover:w-full"></span>
                </Link>
              </div>
              {" "}
              <p className="mt-12 text-on-surface-variant font-body-sm italic">
                For immediate assistance, your concierge is available 24/7 at concierge@auraofsilk.com
              </p>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-surface dark:bg-on-background border-t border-outline-variant/20">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <span className="font-display-md text-headline-lg text-primary dark:text-primary-fixed">ByChi Strands</span>
              {" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-tertiary-fixed-dim">
                © 2024 ByChi Strands. The Art of Luxury Hair.
              </p>
            </div>
            {" "}
            <div className="flex flex-wrap justify-center gap-8">
              <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300" href="/about">
                Heritage
              </Link>
              {" "}
              <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim font-label-caps hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300" href="/faqs">
                Support
              </Link>
            </div>
            {" "}
            <div className="flex space-x-6">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="alternate_email">
                alternate_email
              </span>
              {" "}
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="language">
                language
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
