import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "@/components/stitch/BookingForm";

/**
 * BY CHI STRANDS — Stitch screen: digital_flagship_atelier_service_booking
 * "Atelier Services | ByChi Strands"
 */

export const metadata: Metadata = {
  title: "Atelier Services",
};

export default function AtelierServiceBookingPage() {
  return (
    <div className="scr-atelier-service-booking theme-noir bg-background text-on-surface font-body-md selection:bg-primary-container/30">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl luxury-shadow">
        <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 flex justify-between items-center">
          <Link href="/" className="font-display-md text-[24px] tracking-widest text-primary uppercase">
            ByChi <span className="font-script normal-case">Strands</span>
          </Link>
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
            <Link href="/cart" aria-label="Your bag" className="material-symbols-outlined cursor-pointer hover:opacity-70">
              shopping_bag
            </Link>
            {" "}
            <Link href="/account" aria-label="Your account" className="material-symbols-outlined cursor-pointer hover:opacity-70">
              person
            </Link>
          </div>
        </nav>
      </header>
      <main className="pt-32 pb-section-padding max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Header */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-4 text-primary tracking-[-0.02em]">Atelier Services</h1>
          {" "}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl italic">
            Schedule Your Transformation. Experience the pinnacle of silk artistry and bespoke hair tailoring.
          </p>
        </header>
        {" "}
        <Suspense fallback={null}>
          <BookingForm />
        </Suspense>
      </main>
      {/* Footer */}
      <footer className="bg-surface-container w-full py-16 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center">
          <div className="font-display-md text-display-md text-primary scale-75 origin-left mb-8 md:mb-0 tracking-[-0.01em]">
            ByChi <span className="font-script">Strands</span>
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
            <p className="font-body-sm text-on-surface-variant opacity-40 text-[10px]">
              © {new Date().getFullYear()} ByChi Strands. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
