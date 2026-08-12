import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Mrs_Saint_Delafield } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import { QueryProvider } from "@/context/QueryProvider";
import { site } from "@/lib/site";
import "./globals.css";
import "../styles/bychi-brand.css";

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

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delafield",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ByChi Strands | Luxury Human Hair",
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "luxury human hair",
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
    title: "ByChi Strands | Luxury Human Hair",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "ByChi Strands | Luxury Human Hair",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cormorant.variable} ${inter.variable} ${script.variable}`}
    >
      <body>
        <QueryProvider>
          <StoreProvider>{children}</StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
