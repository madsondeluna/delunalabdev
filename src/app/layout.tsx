import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const BASE_URL = "https://delunalab.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "delunalab",
    template: "%s — delunalab",
  },
  description:
    "Madson de Luna's lab: bioinformatics tools, data apps, and science software for researchers.",
  keywords: [
    "bioinformatics",
    "data science",
    "research software",
    "science tools",
    "delunalab",
    "Madson de Luna",
  ],
  authors: [{ name: "Madson de Luna", url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "delunalab",
    title: "delunalab",
    description:
      "Bioinformatics tools, data apps, and science software for researchers.",
  },
  twitter: {
    card: "summary",
    title: "delunalab",
    description:
      "Bioinformatics tools, data apps, and science software for researchers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
