import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutSummary, MobileCheckoutSummary } from "@/components/stitch/CheckoutSummary";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_luxury_checkout
 * "Checkout | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Checkout",
};

export default function LuxuryCheckoutPage() {
  return (
    <>
      {/* ── Mobile design (Stitch: digital_flagship_mobile_luxury_checkout) ── */}
      <div className="md:hidden scr-mobile-luxury-checkout bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
        {/* Header Section */}
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl px-margin-mobile py-6 flex items-center justify-between">
          <button aria-label="Go back" className="flex items-center text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back_ios</span>
          </button>
          {" "}
          <h1 className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface uppercase">Secure Checkout</h1>
          {" "}
          <div className="w-6"></div>
          {/* Spacer for symmetry */}
        </header>
        <main className="pt-24 pb-32 px-margin-mobile max-w-lg mx-auto">
          {/* Progress Indicator */}
          <nav className="flex justify-between items-center mb-12 relative px-4">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 -z-10"></div>
            {" "}
            <div className="flex flex-col items-center gap-2 bg-background px-2">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center step-active bg-background">
                <span className="text-[10px] font-bold">01</span>
              </div>
              {" "}
              <span className="font-label-caps text-[9px] uppercase tracking-widest text-primary">Shipping</span>
            </div>
            {" "}
            <div className="flex flex-col items-center gap-2 bg-background px-2">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center step-inactive bg-background">
                <span className="text-[10px] font-bold">02</span>
              </div>
              {" "}
              <span className="font-label-caps text-[9px] uppercase tracking-widest opacity-40">Payment</span>
            </div>
            {" "}
            <div className="flex flex-col items-center gap-2 bg-background px-2">
              <div className="w-8 h-8 rounded-full border flex items-center justify-center step-inactive bg-background">
                <span className="text-[10px] font-bold">03</span>
              </div>
              {" "}
              <span className="font-label-caps text-[9px] uppercase tracking-widest opacity-40">Review</span>
            </div>
          </nav>
          {/* Order Summary */}
          <section className="mb-10">
            <MobileCheckoutSummary />
          </section>
          {/* Shipping Section Form */}
          <section className="space-y-12 mb-16">
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-8 text-on-surface">Shipping Details</h2>
              {" "}
              <div className="space-y-8">
                <div className="relative">
                  <label className="block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 font-body-md focus:border-primary transition-all placeholder:text-on-surface-variant/30" placeholder="Julianne V. Sterling" type="text" />
                </div>
                {" "}
                <div className="relative">
                  <label className="block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                    Street Address
                  </label>
                  {" "}
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 font-body-md focus:border-primary transition-all placeholder:text-on-surface-variant/30" placeholder="1024 Fifth Avenue, Penthouse B" type="text" />
                </div>
                {" "}
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                      City
                    </label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 font-body-md focus:border-primary transition-all placeholder:text-on-surface-variant/30" placeholder="New York" type="text" />
                  </div>
                  {" "}
                  <div className="relative">
                    <label className="block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                      Postal Code
                    </label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 font-body-md focus:border-primary transition-all placeholder:text-on-surface-variant/30" placeholder="10028" type="text" />
                  </div>
                </div>
              </div>
            </div>
            {/* Shipping Method Selection */}
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-6 text-on-surface">Delivery Method</h2>
              {" "}
              <div className="space-y-4">
                <label className="relative block group cursor-pointer">
                  <input defaultChecked className="hidden peer" name="shipping" type="radio" defaultValue="concierge" />
                  {" "}
                  <div className="p-6 border border-outline-variant/30 rounded-lg bg-surface-container-low peer-checked:border-primary peer-checked:bg-white transition-all flex justify-between items-center group-hover:border-primary/50">
                    <div>
                      <p className="font-label-caps text-label-caps uppercase text-primary tracking-[0.15em]">White Glove Concierge</p>
                      {" "}
                      <p className="text-body-sm text-on-surface-variant">Personalized delivery & consultation</p>
                    </div>
                    {" "}
                    <span className="text-primary italic font-medium">Included</span>
                  </div>
                </label>
                {" "}
                <label className="relative block group cursor-pointer">
                  <input className="hidden peer" name="shipping" type="radio" defaultValue="express" />
                  {" "}
                  <div className="p-6 border border-outline-variant/30 rounded-lg bg-surface-container-low peer-checked:border-primary peer-checked:bg-white transition-all flex justify-between items-center group-hover:border-primary/50">
                    <div>
                      <p className="font-label-caps text-label-caps uppercase tracking-[0.15em]">Express Insured</p>
                      {" "}
                      <p className="text-body-sm text-on-surface-variant">Global tracked overnight delivery</p>
                    </div>
                    {" "}
                    <span className="text-on-surface-variant/50">$45.00</span>
                  </div>
                </label>
              </div>
            </div>
            {/* Quick Payment (Apple Pay) */}
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-6 text-on-surface">Express Checkout</h2>
              {" "}
              <button className="w-full h-14 bg-black text-white rounded-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                <svg className="w-14 h-auto" fill="currentColor" viewBox="0 0 100 40">
                  <path d="M42.2 13.7c-.5-.3-.9-.6-1.5-.6s-1 .2-1.4.6l-6.7 6.8c-.2.2-.3.4-.3.7s.1.5.3.7c.4.4.9.4 1.3 0l6-6.1v11c0 .5.4.9.9.9s.9-.4.9-.9v-11l6 6.1c.4.4.9.4 1.3 0 .2-.2.3-.4.3-.7s-.1-.5-.3-.7l-6.8-6.8zm-22.1 6c-.1.3-.1.6-.1.9 0 2.2 1.8 4 4 4s4-1.8 4-4-.1-.6-.1-.9c-.4-1.4-1.7-2.4-3.2-2.4h-1.4c-1.5 0-2.8 1-3.2 2.4zm1.9.9h2.6c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3z"></path>
                </svg>
                {" "}
                <span className="font-medium text-lg">Pay</span>
              </button>
              {" "}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-grow h-[1px] bg-outline-variant/20"></div>
                {" "}
                <span className="font-label-caps text-[10px] uppercase text-on-surface-variant/50">Or Secure Credit Card</span>
                {" "}
                <div className="flex-grow h-[1px] bg-outline-variant/20"></div>
              </div>
              {/* Simplified CC inputs */}
              <div className="space-y-8">
                <div className="relative">
                  <label className="block font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                    Card Number
                  </label>
                  {" "}
                  <div className="flex items-center border-b border-outline-variant/40 focus-within:border-primary transition-all">
                    <input className="w-full bg-transparent border-0 py-3 font-body-md focus:ring-0 placeholder:text-on-surface-variant/30" placeholder="**** **** **** 8820" type="text" />
                    {" "}
                    <span className="material-symbols-outlined text-on-surface-variant/40" data-icon="credit_card">credit_card</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Trust Signals */}
          <section className="flex justify-around items-center py-8 border-y border-outline-variant/10 mb-12">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]" data-icon="verified_user">verified_user</span>
              {" "}
              <span className="font-label-caps text-[8px] uppercase tracking-tighter text-on-surface-variant">
                Secure SSL
              </span>
            </div>
            {" "}
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]" data-icon="diamond">diamond</span>
              {" "}
              <span className="font-label-caps text-[8px] uppercase tracking-tighter text-on-surface-variant">
                Luxury Assurance
              </span>
            </div>
            {" "}
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]" data-icon="local_shipping">
                local_shipping
              </span>
              {" "}
              <span className="font-label-caps text-[8px] uppercase tracking-tighter text-on-surface-variant">
                Tracked Delivery
              </span>
            </div>
          </section>
          {/* Place Order Button Container (Sticky Bottom) */}
          <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/90 backdrop-blur-md p-6 border-t border-outline-variant/10 z-50">
            <div className="max-w-lg mx-auto space-y-4">
              <p className="text-[10px] text-center text-on-surface-variant px-4 leading-relaxed">
                By completing your purchase, you agree to our
                {" "}
                <Link className="underline" href="/terms">Terms of Service</Link>
                {" "}
                and
                {" "}
                <a className="underline" href="#">Bespoke Production Timeline</a>
                .
              </p>
              {" "}
              <button className="w-full bg-primary text-on-primary py-5 rounded-lg font-label-caps text-label-caps uppercase tracking-[0.2em] gold-glow active:scale-[0.97] transition-all duration-300">
                Complete Purchase — $4,250.00
              </button>
            </div>
          </footer>
          {/* Site Footer Links */}
          <div className="pt-8 pb-48 text-center space-y-6">
            <div className="flex justify-center gap-6">
              <Link className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="/privacy">
                Privacy
              </Link>
              {" "}
              <Link className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="/terms">
                Terms
              </Link>
              {" "}
              <Link className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="/about">
                Heritage
              </Link>
            </div>
            {" "}
            <p className="font-label-caps text-[9px] uppercase tracking-widest text-on-surface-variant opacity-50">
              © 2024 ByChi Strands. ALL RIGHTS RESERVED.
            </p>
          </div>
        </main>
      </div>

      {/* ── Desktop design (Stitch: digital_flagship_luxury_checkout) ── */}
      <div className="hidden md:block scr-luxury-checkout bg-surface font-body-md text-on-surface antialiased overflow-x-hidden">
        {/* Top Navigation Bar */}
        <nav className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl font-body-md text-body-sm uppercase tracking-widest docked full-width top-0 sticky border-b border-outline-variant/30 z-50 transition-all duration-300">
          <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto h-20">
            <div className="flex-1 flex gap-8 items-center">
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/shop">
                Shop
              </Link>
              {" "}
              <Link className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
                Collections
              </Link>
            </div>
            {" "}
            <div className="font-display-lg text-display-md font-bold tracking-tighter text-on-surface dark:text-surface-bright flex-none">
              ByChi Strands
            </div>
            {" "}
            <div className="flex-1 flex justify-end gap-6 items-center">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all duration-500">
                  shopping_bag
                </span>
              </div>
              {" "}
              <button className="bg-primary-container text-on-primary-container px-6 py-2 text-label-caps hover:bg-primary transition-colors duration-300 tracking-[0.15em]">
                Book Appointment
              </button>
            </div>
          </div>
        </nav>
        <main className="max-w-container-max mx-auto px-margin-desktop py-12 md:py-24">
          {/* Progress Indicator */}
          <div className="flex flex-col items-center mb-16 md:mb-24 fade-in">
            <div className="flex items-center gap-4 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <span className="text-label-caps text-outline tracking-[0.15em]">Bag</span>
                {" "}
                <div className="w-2 h-2 rounded-full bg-outline"></div>
              </div>
              {" "}
              <div className="w-16 h-[1px] bg-outline-variant"></div>
              {" "}
              <div className="flex flex-col items-center gap-2">
                <span className="text-label-caps text-primary font-bold tracking-[0.15em]">Shipping</span>
                {" "}
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary-fixed/30"></div>
              </div>
              {" "}
              <div className="w-16 h-[1px] bg-outline-variant"></div>
              {" "}
              <div className="flex flex-col items-center gap-2">
                <span className="text-label-caps text-outline-variant tracking-[0.15em]">Payment</span>
                {" "}
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              {" "}
              <div className="w-16 h-[1px] bg-outline-variant"></div>
              {" "}
              <div className="flex flex-col items-center gap-2">
                <span className="text-label-caps text-outline-variant tracking-[0.15em]">Review</span>
                {" "}
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
            </div>
          </div>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column: Shipping & Payment */}
            <div className="lg:col-span-7 space-y-16 fade-in" style={{ animationDelay: "0.1s" }}>
              {/* Section: Shipping Address */}
              <section>
                <div className="flex items-baseline justify-between mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Shipping Address</h2>
                  {" "}
                  <span className="text-body-sm text-outline">Step 1 of 2</span>
                </div>
                {" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
                  <div className="md:col-span-2 relative input-focus-effect">
                    <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">Full Name</label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300" placeholder="E.g. Elena Vakhromeeva" type="text" />
                  </div>
                  {" "}
                  <div className="md:col-span-2 relative input-focus-effect">
                    <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">Address Line 1</label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300" placeholder="Suite, House Number, Street Name" type="text" />
                  </div>
                  {" "}
                  <div className="relative input-focus-effect">
                    <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">City</label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300" placeholder="Paris" type="text" />
                  </div>
                  {" "}
                  <div className="relative input-focus-effect">
                    <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">Postal Code</label>
                    {" "}
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 py-2 transition-all duration-300" placeholder="75001" type="text" />
                  </div>
                </div>
              </section>
              {/* Section: Shipping Method */}
              <section>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Shipping Method</h2>
                {" "}
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 cursor-pointer transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <input defaultChecked className="text-primary focus:ring-primary w-4 h-4" name="shipping" type="radio" />
                      {" "}
                      <div>
                        <p className="font-body-md font-semibold text-on-surface">Standard Delivery</p>
                        {" "}
                        <p className="text-body-sm text-outline">5-7 Business Days. Signature Required.</p>
                      </div>
                    </div>
                    {" "}
                    <span className="text-on-surface font-semibold">Free</span>
                  </label>
                  {" "}
                  <label className="flex items-center justify-between p-6 bg-surface border border-outline-variant/30 hover:border-primary cursor-pointer transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <input className="text-primary focus:ring-primary w-4 h-4" name="shipping" type="radio" />
                      {" "}
                      <div>
                        <p className="font-body-md font-semibold text-on-surface">Atelier Express</p>
                        {" "}
                        <p className="text-body-sm text-outline">2-3 Business Days. White-glove handling.</p>
                      </div>
                    </div>
                    {" "}
                    <span className="text-on-surface font-semibold">$45.00</span>
                  </label>
                </div>
              </section>
              {/* Section: Payment */}
              <section>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Payment Details</h2>
                {" "}
                <div className="bg-surface-container-low p-8 border border-outline-variant/30">
                  <div className="flex gap-4 mb-10">
                    <button className="flex-1 py-4 border border-on-surface bg-on-surface text-surface text-label-caps flex items-center justify-center gap-2 hover:bg-tertiary transition-colors tracking-[0.15em]">
                      <span className="material-symbols-outlined text-sm">credit_card</span>
                      {" "}
                      Credit Card
                    </button>
                    {" "}
                    <button className="flex-1 py-4 border border-outline-variant bg-surface text-on-surface text-label-caps flex items-center justify-center gap-2 hover:bg-surface-container transition-colors tracking-[0.15em]">
                      <span className="material-symbols-outlined text-sm">file_download</span>
                      {" "}
                      Apple Pay
                    </button>
                  </div>
                  {" "}
                  <div className="space-y-8">
                    <div className="relative input-focus-effect">
                      <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">Card Number</label>
                      {" "}
                      <div className="relative">
                        <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 py-2 transition-all" placeholder="0000 0000 0000 0000" type="text" />
                        {" "}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
                          <div className="w-8 h-5 bg-outline-variant/20 rounded-sm"></div>
                          {" "}
                          <div className="w-8 h-5 bg-outline-variant/20 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative input-focus-effect">
                        <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">Expiry Date</label>
                        {" "}
                        <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 py-2 transition-all" placeholder="MM/YY" type="text" />
                      </div>
                      {" "}
                      <div className="relative input-focus-effect">
                        <label className="block text-label-caps text-outline mb-2 uppercase tracking-widest">CVV</label>
                        {" "}
                        <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 py-2 transition-all" placeholder="***" type="password" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {" "}
              <div className="flex flex-wrap gap-8 items-center py-6 border-y border-outline-variant/20">
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-primary text-[20px]">lock</span>
                  {" "}
                  <span className="text-label-caps tracking-[0.15em]">Secure SSL Encryption</span>
                </div>
                {" "}
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                  {" "}
                  <span className="text-label-caps tracking-[0.15em]">Atelier Guarantee</span>
                </div>
                {" "}
                <div className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-primary text-[20px]">package_2</span>
                  {" "}
                  <span className="text-label-caps tracking-[0.15em]">Discrete Packaging</span>
                </div>
              </div>
            </div>
            {/* Right Column: Summary */}
            <div className="lg:col-span-5 fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="sticky top-32 space-y-12 bg-white border border-outline-variant/20 p-8 shadow-sm">
                <CheckoutSummary />
                {/* Main CTA */}
                <div className="space-y-4">
                  <button className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-[0.2em] hover:bg-primary transition-all duration-500 hover:scale-[1.02] active:scale-100 uppercase">
                    Complete Purchase
                  </button>
                  {" "}
                  <p className="text-center text-[10px] text-outline px-4 leading-relaxed">
                    By clicking complete purchase, you agree to the ByChi Strands Terms of Service and Privacy Policy. All bespoke orders are final sale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-surface-container-low dark:bg-surface-container-highest mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
            <div className="md:col-span-1">
              <h3 className="font-display-md text-headline-lg text-primary mb-6">ByChi Strands</h3>
              {" "}
              <p className="text-body-sm text-on-surface-variant max-w-xs">
                Curating the world's most exquisite silk-base hair artistry for the discerning individual.
              </p>
            </div>
            {" "}
            <div>
              <h4 className="text-label-caps text-on-surface mb-6 uppercase tracking-widest">Boutique</h4>
              {" "}
              <ul className="space-y-3">
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/collections">
                    Collections
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/academy">
                    Academy
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/book">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
            {" "}
            <div>
              <h4 className="text-label-caps text-on-surface mb-6 uppercase tracking-widest">Connect</h4>
              {" "}
              <ul className="space-y-3">
                <li>
                  <a className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="https://instagram.com/bychistrands2">
                    Instagram
                  </a>
                </li>
                {" "}
                <li>
                  <a className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="https://tiktok.com/@bychistrands">
                    TikTok
                  </a>
                </li>
                {" "}
                <li>
                  <a className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="https://wa.me/2340000000000">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            {" "}
            <div>
              <h4 className="text-label-caps text-on-surface mb-6 uppercase tracking-widest">Client Service</h4>
              {" "}
              <ul className="space-y-3">
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/shipping">
                    Shipping & Returns
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                {" "}
                <li>
                  <Link className="text-body-sm text-on-surface-variant hover:underline decoration-primary transition-all" href="/terms">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {" "}
          <div className="border-t border-outline-variant/20 px-margin-desktop py-8 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-outline">© 2024 ByChi Strands. Timeless Vietnamese Artistry.</p>
            {" "}
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-outline">payments</span>
              {" "}
              <span className="material-symbols-outlined text-outline">shopping_bag</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
