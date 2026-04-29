import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://blueoasis5512.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/main.webp`;

export const metadata: Metadata = {
  // ── metadataBase is required for resolving absolute OG image URLs ─────────
  metadataBase: new URL(SITE_URL),

  // ── Title template ────────────────────────────────────────────────────────
  // The primary title leads with the exact brand name Google must index.
  title: {
    default:
      "Blue Oasis 5512 | Luxury Vacation Rental | 5512 21st St Ct W, Bradenton FL",
    template: "%s | Blue Oasis 5512",
  },

  // ── Meta description ──────────────────────────────────────────────────────
  // Contains all three target queries naturally within 155 chars.
  description:
    "Book Blue Oasis Retreat 5512 — a private luxury vacation rental at 5512 21st St Ct W, Bradenton, FL 34207. 3 bedrooms, private pool, direct booking on Fairly.",

  // ── Keywords (secondary signal, still indexed by Bing/Yahoo) ─────────────
  keywords: [
    "Blue Oasis 5512",
    "Blue Oasis Retreat 5512",
    "5512 21st St Ct W Bradenton FL",
    "5512 21st St Ct W Bradenton FL 34207",
    "Blue Oasis Bradenton",
    "vacation rental Bradenton FL",
    "luxury vacation rental Bradenton",
    "short term rental Bradenton FL",
    "Bradenton FL vacation home",
    "Blue Oasis 5512 vacation rental",
    "rent Blue Oasis 5512",
    "Bradenton private pool rental",
    "Florida vacation rental direct booking",
  ],

  // ── Canonical URL ─────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Blue Oasis 5512",
    title:
      "Blue Oasis 5512 | Luxury Vacation Rental | Bradenton, FL",
    description:
      "Book Blue Oasis Retreat 5512 — a private luxury vacation rental at 5512 21st St Ct W, Bradenton, FL. Private pool, 3 bedrooms, direct booking available.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blue Oasis 5512 — Luxury Vacation Rental in Bradenton, FL",
        type: "image/webp",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Blue Oasis 5512 | Luxury Vacation Rental | Bradenton, FL",
    description:
      "Private pool, 3 bedrooms, resort-style amenities at 5512 21st St Ct W, Bradenton, FL. Book direct on Fairly.",
    images: [OG_IMAGE],
  },

  // ── Verification (add tokens when you verify in Search Console) ───────────
  verification: {
    google: "KSYM2twlQToT9Ibc3PDFFU5dDZZvTYsGsryuFW1Lxew",
  },

  // ── Other important tags ──────────────────────────────────────────────────
  category: "vacation rental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ── Local SEO geographic meta tags ────────────────────────────── */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Bradenton, Florida" />
        <meta name="geo.position" content="27.4425169;-82.5832231" />
        <meta name="ICBM" content="27.4425169, -82.5832231" />

        {/* ── Preconnect for performance ────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
