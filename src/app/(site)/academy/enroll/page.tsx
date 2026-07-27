import Link from "next/link";
import type { Metadata } from "next";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy_enrollment
 * "Academy Enrollment | BYCHI STRANDS"
 */

export const metadata: Metadata = {
  title: "Academy Enrollment",
};

export default function AcademyEnrollmentPage() {
  return (
    <div className="scr-academy-enrollment bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body-md">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 nav-blur shadow-[0px_20px_50px_rgba(0,0,0,0.04)]">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
          <div className="font-display-md text-display-md tracking-widest text-primary dark:text-primary-fixed uppercase">
            AURA OF SILK
          </div>
          {" "}
          <div className="hidden md:flex items-center space-x-12">
            <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/services">
              Atelier
            </Link>
            {" "}
            <Link className="text-primary dark:text-primary-fixed border-b border-primary/50 font-medium font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-[0.15em]" href="/account">
              Orders
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity duration-400">
              shopping_bag
            </button>
            {" "}
            <button className="material-symbols-outlined text-primary hover:opacity-70 transition-opacity duration-400">
              person
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-[2000ms] scale-105" data-alt="A high-fashion, editorial photograph of a successful entrepreneur in a bright, minimalist studio surrounded by premium bundles of glossy Vietnamese silk hair. The lighting is soft and cinematic, highlighting the rich textures of the hair and the elegant, professional attire of the subject. The background is a clean ivory tone, maintaining a luxury boutique atmosphere with deep gold accents and refined shadows." style={{ backgroundImage: "url('/stitch/img-072.jpg')" }}></div>
          {" "}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        {" "}
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
          <div className="max-w-2xl fade-in">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase mb-6 block">
              The Masterclass
            </span>
            {" "}
            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight mb-8 tracking-[-0.02em]">
              Secure Your Future in
              {" "}
              <span className="italic text-primary">Luxury Hair.</span>
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 max-w-xl">
              Apply for the next intake of our globally recognized Vietnam Hair Importation Masterclass. Learn the art of sourcing and the science of scaling.
            </p>
            {" "}
            <a className="inline-block px-12 py-5 btn-primary font-label-caps text-label-caps uppercase tracking-widest rounded-lg" href="#apply">
              Start Application
            </a>
          </div>
        </div>
      </section>
      {/* The Curriculum */}
      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display-md text-display-md text-on-surface mb-6 tracking-[-0.01em]">The Four Pillars of Mastery</h2>
              {" "}
              <p className="font-body-md text-body-md text-on-surface-variant">
                An intensive curriculum designed to take you from admirer to industry authority, guided by the ByChi standard of excellence.
              </p>
            </div>
            {" "}
            <div className="h-[1px] flex-1 bg-outline-variant/30 mb-4 hidden md:block"></div>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Sourcing */}
            <div className="group border border-outline-variant/20 p-10 hover:bg-surface-container transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block group-hover:scale-110 transition-transform">
                glass
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Sourcing</h3>
              {" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mb-6">
                Direct access to the heart of Vietnam's elite collection centers. Learn to identify raw donor quality from processed imitation.
              </p>
              {" "}
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
            {/* Grading */}
            <div className="group border border-outline-variant/20 p-10 hover:bg-surface-container transition-all duration-500 lg:mt-12">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block group-hover:scale-110 transition-transform">
                verified
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Grading</h3>
              {" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mb-6">
                The technical science of alignment, density, and cuticle integrity. Master the metrics that define world-class silk strands.
              </p>
              {" "}
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
            {/* Marketing */}
            <div className="group border border-outline-variant/20 p-10 hover:bg-surface-container transition-all duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block group-hover:scale-110 transition-transform">
                style
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Marketing</h3>
              {" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mb-6">
                Positioning your brand within the luxury echelon. From high-fidelity content strategy to elite client acquisition.
              </p>
              {" "}
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
            {/* Scaling */}
            <div className="group border border-outline-variant/20 p-10 hover:bg-surface-container transition-all duration-500 lg:mt-12">
              <span className="material-symbols-outlined text-primary text-4xl mb-8 block group-hover:scale-110 transition-transform">
                trending_up
              </span>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-4">Scaling</h3>
              {" "}
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 mb-6">
                Supply chain optimization and global fulfillment. Building a sustainable architecture for high-volume luxury distribution.
              </p>
              {" "}
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Investment Section */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-24">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4 block">
              The Investment
            </span>
            {" "}
            <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Choose Your Path</h2>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Digital Access */}
            <div className="bg-surface p-12 shadow-[0px_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-center text-center">
              <h3 className="font-headline-lg text-headline-lg mb-2">Digital Access</h3>
              {" "}
              <div className="text-primary font-display-md text-display-md mb-8 tracking-[-0.01em]">$2,450</div>
              {" "}
              <ul className="space-y-6 mb-12 text-on-surface-variant font-body-sm w-full text-left">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check</span>
                  {" "}
                  12 Pre-recorded HD Modules
                </li>
                {" "}
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check</span>
                  {" "}
                  Verified Vendor Contacts List
                </li>
                {" "}
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check</span>
                  {" "}
                  Digital Marketing Templates
                </li>
                {" "}
                <li className="flex items-center gap-3 text-outline/40">
                  <span className="material-symbols-outlined">close</span>
                  {" "}
                  Direct 1-on-1 Mentorship
                </li>
              </ul>
              {" "}
              <button className="w-full py-4 border border-primary text-primary font-label-caps text-label-caps uppercase hover:bg-primary hover:text-white transition-all tracking-[0.15em]">
                Select Plan
              </button>
            </div>
            {/* Elite Mentorship */}
            <div className="bg-white p-12 shadow-[0px_20px_50px_rgba(0,0,0,0.06)] flex flex-col items-center text-center border-t-4 border-primary relative overflow-hidden">
              <div className="absolute top-8 right-[-35px] bg-primary text-white font-label-caps text-[10px] py-1 px-12 rotate-45 uppercase">
                Limited Capacity
              </div>
              {" "}
              <h3 className="font-headline-lg text-headline-lg mb-2">Elite Mentorship</h3>
              {" "}
              <div className="text-primary font-display-md text-display-md mb-8 tracking-[-0.01em]">$8,000</div>
              {" "}
              <ul className="space-y-6 mb-12 text-on-surface-variant font-body-sm w-full text-left">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                  {" "}
                  All Digital Access Content
                </li>
                {" "}
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                  {" "}
                  5-Day Vietnam Factory Tour
                </li>
                {" "}
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                  {" "}
                  Direct Weekly Strategy Calls
                </li>
                {" "}
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                  {" "}
                  Lifetime Alumni Support
                </li>
              </ul>
              {" "}
              <button className="w-full py-4 btn-primary font-label-caps text-label-caps uppercase tracking-[0.15em]">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Signals / Testimonials */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-cover bg-center rounded-sm" data-alt="A beautiful, embossed certification document with gold leaf accents laying on a dark velvet surface. Beside the certificate is a premium box of hair products. The lighting is focused and dramatic, highlighting the 'Certification of Excellence' text and the intricate patterns of the paper, creating an aura of prestigious accomplishment and luxury hair education." style={{ backgroundImage: "url('/stitch/img-074.jpg')" }}></div>
              {" "}
              <div className="absolute -bottom-10 -right-10 bg-white p-10 max-w-xs shadow-xl hidden md:block">
                <p className="font-headline-lg italic text-primary leading-tight mb-4">
                  "The only roadmap that truly bridges the gap between sourcing and branding."
                </p>
                {" "}
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-[0.15em]">— Elena Thorne, CEO of Silk Noir</span>
              </div>
            </div>
            {" "}
            <div>
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-6 block">Alumni Voices</span>
              {" "}
              <h2 className="font-display-md text-display-md mb-12 tracking-[-0.01em]">The Standard of Success</h2>
              {" "}
              <div className="space-y-12">
                <div className="border-b border-outline-variant/30 pb-8">
                  <p className="font-body-md text-on-surface-variant mb-4 italic">
                    "I wasted thousands on low-quality vendors before this masterclass. The sourcing pillar alone saved my business and allowed me to scale to six figures in under 8 months."
                  </p>
                  {" "}
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-[0.15em]">Marcus J. | Independent Importer</span>
                </div>
                {" "}
                <div className="border-b border-outline-variant/30 pb-8">
                  <p className="font-body-md text-on-surface-variant mb-4 italic">
                    "The mentorship program's factory visit changed my perspective. Seeing the grading process in person gave me the confidence to charge premium prices for my product."
                  </p>
                  {" "}
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-[0.15em]">Sarah Chen | Brand Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enrollment Form */}
      <section className="py-section-padding bg-surface-container-highest" id="apply">
        <div className="max-w-3xl mx-auto px-margin-mobile">
          <div className="bg-white p-12 md:p-20 shadow-[0px_40px_100px_rgba(0,0,0,0.06)] rounded-sm">
            <div className="text-center mb-12">
              <h2 className="font-display-md text-display-md text-on-surface mb-2 tracking-[-0.01em]">The Application</h2>
              {" "}
              <p className="font-body-md text-on-surface-variant">Selection is based on vision and readiness for the elite market.</p>
            </div>
            {" "}
            <form className="space-y-12" id="enrollmentForm">
              {/* Step 1: Identity */}
              <div className="form-step active" id="step1">
                <div className="space-y-10">
                  <div className="relative">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 transition-all py-4 font-body-md text-on-surface placeholder-on-surface/30" id="name" placeholder="FULL NAME" type="text" />
                    {" "}
                    <label className="absolute -top-4 left-0 font-label-caps text-[10px] text-primary tracking-widest uppercase" htmlFor="name">
                      Personal Identity
                    </label>
                  </div>
                  {" "}
                  <div className="relative">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 transition-all py-4 font-body-md text-on-surface placeholder-on-surface/30" id="email" placeholder="EMAIL ADDRESS" type="email" />
                    {" "}
                    <label className="absolute -top-4 left-0 font-label-caps text-[10px] text-primary tracking-widest uppercase" htmlFor="email">
                      Contact Line
                    </label>
                  </div>
                  {" "}
                  <button className="w-full py-5 btn-primary font-label-caps text-label-caps uppercase tracking-widest" type="button">
                    Next Step
                  </button>
                </div>
              </div>
              {/* Step 2: Context */}
              <div className="form-step" id="step2">
                <div className="space-y-10">
                  <div className="relative">
                    <select className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 transition-all py-4 font-body-md text-on-surface appearance-none" id="status">
                      <option disabled data-selected="true" value="">CURRENT BUSINESS STATUS</option>
                      {" "}
                      <option value="aspiring">Aspiring Entrepreneur</option>
                      {" "}
                      <option value="existing">Existing Hair Business Owner</option>
                      {" "}
                      <option value="investor">Corporate Investor</option>
                    </select>
                    {" "}
                    <label className="absolute -top-4 left-0 font-label-caps text-[10px] text-primary tracking-widest uppercase" htmlFor="status">
                      Professional Context
                    </label>
                  </div>
                  {" "}
                  <div className="relative">
                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 transition-all py-4 font-body-md text-on-surface placeholder-on-surface/30" id="why" placeholder="WHY ARE YOU READY FOR THE BYCHI STANDARD?" rows={4}></textarea>
                    {" "}
                    <label className="absolute -top-4 left-0 font-label-caps text-[10px] text-primary tracking-widest uppercase" htmlFor="why">
                      Vision Statement
                    </label>
                  </div>
                  {" "}
                  <div className="flex gap-4">
                    <button className="w-1/3 py-5 border border-outline text-on-surface font-label-caps text-label-caps uppercase hover:bg-surface-container transition-all tracking-[0.15em]" type="button">
                      Back
                    </button>
                    {" "}
                    <button className="w-2/3 py-5 btn-primary font-label-caps text-label-caps uppercase tracking-widest" type="submit">
                      Submit Application
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-surface-container dark:bg-surface-container-highest w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display-md text-display-md text-primary tracking-[-0.01em]">AURA</div>
          {" "}
          <div className="flex gap-12">
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/privacy">
              Privacy
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/terms">
              Terms
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/faqs">
              Support
            </Link>
            {" "}
            <Link className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300" href="/about">
              Heritage
            </Link>
          </div>
          {" "}
          <p className="font-body-sm text-body-sm uppercase tracking-tighter text-on-surface-variant opacity-60">
            © 2024 AURA OF SILK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
