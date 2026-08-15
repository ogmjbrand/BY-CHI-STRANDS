import type { Metadata } from "next";
import { FlagshipHeader } from "@/components/flagship/FlagshipHeader";
import { FlagshipFooter } from "@/components/flagship/FlagshipFooter";
import { HairFinder } from "@/components/stitch/HairFinder";

export const metadata: Metadata = {
  title: "Hair Finder",
  description:
    "A guided consultation that narrows the ByChi Strands collection to the pieces that suit your texture, tone and length.",
};

export default function HairFinderPage() {
  return (
    <>
      <div className="bg-noir pt-10 md:pt-16 px-6 md:px-16">
        <div className="max-w-[1800px] mx-auto">
          <p className="font-label-caps text-[11px] uppercase tracking-[0.3em] text-gold mb-8">
            Private Consultation
          </p>
          <h1 className="font-display-lg text-display-lg text-white leading-[1.02] max-w-4xl">
            Find your piece.
          </h1>
        </div>
      </div>
      <HairFinder />
    </>
  );
}
