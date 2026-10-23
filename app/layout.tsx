import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppButton";
import { EnquiryProvider } from "@/components/enquiry";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sarvanta Global — Indian spices and agri commodities",
    template: "%s — Sarvanta Global",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Sarvanta Global — Indian spices and agri commodities",
    description: site.description,
    images: [
      {
        url: "/images/Home Page - Images/03-product-red-chillies-clear.webp",
        alt: "Dried red chillies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvanta Global — Indian spices and agri commodities",
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${plex.variable} ${plexMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <EnquiryProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </EnquiryProvider>
      </body>
    </html>
  );
}
