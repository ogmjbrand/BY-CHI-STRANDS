import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Playfair is self-hosted from globals.css under two family names — the
 * screens disagree on whether the italic axis is loaded, and next/font would
 * register both instances as "Playfair Display", leaking the real italic
 * into screens whose export synthesises oblique instead.
 */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ByChi Strands | The Gold Standard of Vietnamese Hair",
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Vietnamese hair",
    "raw hair",
    "single donor hair",
    "luxury wigs",
    "HD lace frontal",
    "hair importation training",
    "ByChiStrands",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "ByChi Strands | The Gold Standard of Vietnamese Hair",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "ByChi Strands | The Gold Standard of Vietnamese Hair",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${manrope.variable}`}
    >
      {/*
        No typography or colour classes here: each Stitch screen reproduces
        its own <body> classes on its scope wrapper, and several screens
        deliberately leave the font or background unset.
      */}
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
