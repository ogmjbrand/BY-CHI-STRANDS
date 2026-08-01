import type { Metadata } from "next";
import { LuxuryCheckoutFlow } from "@/components/stitch/LuxuryCheckoutFlow";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function LuxuryCheckoutPage() {
  return <LuxuryCheckoutFlow />;
}
