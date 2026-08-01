import type { Metadata } from "next";
import Link from "next/link";
import { AcademyInquiryForm } from "@/components/stitch/AcademyInquiryForm";
import { InlineNewsletterField } from "@/components/stitch/InlineNewsletterField";
import { site } from "@/lib/site";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_academy
 * "ByChi Strands Academy | The Art of the Source"
 */

export const metadata: Metadata = {
  title: "Academy",
};

export default function AcademyPage() {
  return (
    <div className="scr-academy theme-noir bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
      {/* Header / TopNavBar (Shared Component) */}
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto">
          <div className="flex items-center gap-2.5 font-display-lg text-display-md font-bold tracking-tighter text-on-surface">
            <span className="h-9 w-9 rounded-full bg-white overflow-hidden shrink-0 ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-mark.jpg" alt="" className="h-full w-full object-cover scale-125" />
            </span>
            ByChi <span className="font-script">Strands</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/shop">
              Shop
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/collections">
              Collections
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/services">
              Services
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm uppercase tracking-widest text-primary font-semibold border-b border-primary pb-1" href="/academy">
              Academy
            </Link>
            {" "}
            <Link className="font-body-md text-body-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">
              About
            </Link>
          </div>
          {" "}
          <div className="flex items-center space-x-6">
            <Link href="/book" className="hidden md:block bg-on-surface text-surface px-6 py-2 text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all duration-300 scale-95 active:scale-100">
              Book Appointment
            </Link>
            {" "}
            <div className="flex items-center space-x-4">
              <Link href="/cart" aria-label="Your bag" className="material-symbols-outlined text-on-surface cursor-pointer scale-95 active:scale-100 transition-transform duration-300">
                shopping_bag
              </Link>
              {" "}
              <button className="md:hidden text-on-surface cursor-pointer" aria-label="Open menu">
                <span className="material-symbols-outlined" data-icon="menu">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            aria-label="ByChi Strands Academy"
            autoPlay
            className="w-full h-full object-cover brightness-[0.9]"
            loop
            muted
            playsInline
            poster="/media/academy/academy-portrait.jpeg"
            preload="metadata"
          >
            <source src="/media/academy/academy-hero.mp4" type="video/mp4" />
          </video>
          {" "}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        {" "}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-2xl fade-up" id="hero-content">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase block mb-6">
              Masterclass Enrollment Now Open
            </span>
            {" "}
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight tracking-[-0.02em]">
              The Art of
              {" "}
              <br />
              the Source:
              {" "}
              <span className="italic font-normal">Vietnam</span>
            </h1>
            {" "}
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 leading-relaxed">
              A comprehensive Vietnam Hair Importation Masterclass designed for entrepreneurs who demand nothing less than hair industry excellence. Learn to bridge the gap between factory floors and luxury storefronts.
            </p>
            {" "}
            <div className="flex flex-col sm:flex-row gap-6">
              <a className="bg-on-surface text-surface px-10 py-5 text-label-caps uppercase tracking-widest text-center btn-primary-interaction" href="#enroll">
                Apply for Intake
              </a>
              {" "}
              <a className="border border-primary text-primary px-10 py-5 text-label-caps uppercase tracking-widest text-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="#curriculum">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Academy Ethos / Subtle Branding */}
      <section className="ivory-bg py-section-padding border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center items-center">
            <div className="fade-up">
              <h3 className="font-headline-lg text-headline-lg text-noir mb-4">Real Sourcing Knowledge</h3>
              {" "}
              <p className="font-body-md text-body-sm text-noir/70">Taught by the team that sources ByChiStrands&apos; own raw Vietnamese hair.</p>
            </div>
            {" "}
            <div className="fade-up">
              <div className="w-px h-24 bg-noir/20 mx-auto hidden md:block"></div>
              {" "}
              <div className="md:hidden w-24 h-px bg-noir/20 mx-auto my-8"></div>
            </div>
            {" "}
            <div className="fade-up">
              <h3 className="font-headline-lg text-headline-lg text-noir mb-4">Built For Entrepreneurs</h3>
              {" "}
              <p className="font-body-md text-body-sm text-noir/70">
                For anyone serious about importing and selling luxury hair, not just industry hobbyists.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Grid */}
      <section className="py-section-padding bg-surface" id="curriculum">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                The Blueprint
              </span>
              {" "}
              <h2 className="font-display-md text-display-md text-on-surface tracking-[-0.01em]">Curated Mastery</h2>
            </div>
            {" "}
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Four intensive pillars designed to navigate the complexities of high-end hair commerce.
            </p>
          </div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Raw hair bundles inspected at a wholesale supplier" src="/services/hair-importation-1.jpeg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 01</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Sourcing</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  How the house sources raw Vietnamese hair — supplier selection, what to ask, and planning a confident first order.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Curly raw hair bundles held up for inspection" src="/services/hair-importation-2.jpeg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 02</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Grading</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Developing the hands-on eye to tell raw hair from blended, processed imitations.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Finished units at different lengths lined up in the atelier" src="/products/boutique-lineup-1.jpg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 03</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Scaling</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Landed cost, inventory and the logistics decisions that decide your margin as you grow.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/10 luxury-shadow p-unit h-[500px] flex flex-col justify-end fade-up">
              <div className="absolute inset-0 image-hover-scale">
                <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="The ByChiStrands founder in a styled portrait" src="/media/academy/chi-ceo.jpeg" />
                {" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              {" "}
              <div className="relative z-10 p-margin-mobile">
                <span className="text-white/70 font-label-caps text-xs tracking-widest mb-2 block">MODULE 04</span>
                {" "}
                <h4 className="font-headline-lg text-headline-lg text-white mb-4">Marketing</h4>
                {" "}
                <p className="font-body-md text-body-sm text-white/80 group-hover:translate-y-[-4px] transition-transform duration-300">
                  Positioning, photography and content that make a new hair brand read as premium from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real graduate — proof, not a stat */}
      <section className="py-section-padding bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="aspect-[4/5] overflow-hidden fade-up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/academy/mentorship-masterclass.jpg"
              alt="A masterclass graduate receiving her certificate of attendance"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="fade-up">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
              From The Classroom
            </span>
            <h2 className="font-display-md text-display-md text-on-surface mb-8 tracking-[-0.01em]">
              A real graduate, a real certificate.
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              Every masterclass ends with a certificate of attendance — the same one this
              graduate is holding here, presented in person by the ByChiStrands team.
            </p>
          </div>
        </div>
      </section>
      {/* Enrollment CTA Form */}
      <section className="py-section-padding bg-background overflow-hidden relative" id="enroll">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block"></div>
        {" "}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div className="fade-up">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
                Enroll
              </span>
              {" "}
              <h2 className="font-display-md text-display-md text-on-surface mb-8 tracking-[-0.01em]">Apply to the Academy</h2>
              {" "}
              <p className="font-body-xl text-body-xl text-on-surface-variant mb-12 max-w-lg leading-relaxed">
                Share your details below and our team will confirm your intake by email — the
                same real enrollment that starts at{" "}
                <Link href="/academy/enroll" className="text-primary hover-underline relative">
                  /academy/enroll
                </Link>
                .
              </p>
              {" "}
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">The Masterclass — sourcing, grading, marketing and scaling</span>
                </li>
                {" "}
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">Mentorship — a direct session for your own sourcing questions</span>
                </li>
                {" "}
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  {" "}
                  <span className="font-body-md text-on-surface">Direct Access — reach the team on WhatsApp as you build</span>
                </li>
              </ul>
            </div>
            {" "}
            <AcademyInquiryForm />
          </div>
        </div>
      </section>
      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 pt-section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="font-display-md text-headline-lg text-primary mb-8">ByChi <span className="font-script">Strands</span></div>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant leading-relaxed">
              Elevating the hair industry through education and premium Vietnamese sourcing.
            </p>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Navigation</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </li>
              {" "}
              <li>
                <a className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Legal</h5>
            {" "}
            <ul className="space-y-4">
              <li>
                <Link className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              {" "}
              <li>
                <Link className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="/terms">
                  Terms of Service
                </Link>
              </li>
              {" "}
              <li>
                <Link className="text-on-surface-variant hover:text-on-surface transition-all font-body-md text-body-sm hover:underline decoration-primary" href="/shipping">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          {" "}
          <div>
            <h5 className="font-label-caps text-xs tracking-widest text-on-surface uppercase mb-8">Connect</h5>
            {" "}
            <p className="font-body-md text-body-sm text-on-surface-variant mb-6">Receive exclusive updates on masterclasses and inventory arrivals.</p>
            {" "}
            <InlineNewsletterField />
          </div>
        </div>
        {" "}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 border-t border-outline-variant/10 text-center">
          <p className="font-body-md text-body-sm text-on-surface-variant/60">
            © {new Date().getFullYear()} ByChi Strands. Timeless Vietnamese Artistry.
          </p>
        </div>
      </footer>
    </div>
  );
}
