import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Newsletter } from "@/components/stitch/Newsletter";
import { SocialStrip } from "@/components/stitch/SocialStrip";
import { HouseFooter } from "@/components/flagship/HouseChrome";

/** Superseded by the one house chrome; the export name is kept for callers. */
export function FlagshipFooter() {
  return <HouseFooter />;
}

