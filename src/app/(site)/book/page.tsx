import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { BookingForm } from "@/components/stitch/BookingForm";
import { Icon } from "@/components/ui/icon";

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
</div>
  );
}
