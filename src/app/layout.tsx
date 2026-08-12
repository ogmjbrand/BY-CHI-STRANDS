import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Modern Luxury Editorial Couture typography: Cormorant Garamond for
 * headlines (Canela's the aspirational reference but it's a paid Colophon
 * Foundry licence — this is the freely-hostable substitute in the same
 * token slot, swap-in-place if the client licenses Canela later), Inter for
 * body copy, replacing the Stitch export's self-hosted Playfair/Manrope.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      className={`scroll-smooth ${cormorant.variable} ${inter.variable}`}
    >
      {/*
        No typography or colour classes here: each Stitch screen reproduces
        its own <body> classes on its scope wrapper, and several screens
        deliberately leave the font or background unset.
      */}
      <body>
        {/*
          There is no QueryProvider here any more. It wrapped every page in
          the app and nothing in the codebase ever called useQuery,
          useMutation, or any other hook from it — the data this site shows is
          either static or fetched once in a server component.

          It was not costing the client bundle: grepping the built chunks
          before removal found no TanStack code shipped, so Next was already
          excluding it. This is dead code and a dependency, not weight on the
          page. If a client-side cache is needed later, the provider is four
          lines.
        */}
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
