import type { Metadata } from "next";
import "./globals.css";
import { PROPERTY } from "@/lib/property-data";

const SITE_URL = "https://blueoasis5512.vercel.app"; // Update with custom domain when available

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blue Oasis 5512 | Blue Oasis Retreat Bradenton FL | Direct Booking",
  description:
    "Blue Oasis 5512 — Blue Oasis Retreat, Your Private Getaway at 5512 21st St Ct W, Bradenton, FL 34207. 3BR/2BA private pool home, sleeps 8, dog-friendly, 9 minutes to the beach. Book direct & save — skip Airbnb fees.",
  keywords: [
    "Blue Oasis 5512",
    "Blue Oasis Retreat 5512",
    "5512 21st St Ct W Bradenton FL 34207",
    "Blue Oasis Retreat Bradenton",
    "vacation rental Bradenton FL",
    "private pool rental Bradenton",
    "dog friendly vacation rental Bradenton",
    "beach rental Bradenton Florida",
    "short term rental 34207",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Blue Oasis 5512 | Private Pool Retreat · Bradenton, FL",
    description:
      "Book direct & save. Private pool, 3BR/2BA, sleeps 8, dog-friendly, 9 min to the beach. 5512 21st St Ct W, Bradenton, FL 34207.",
    images: [
      {
        url: "/images/main.webp",
        width: 1200,
        height: 630,
        alt: "Blue Oasis 5512 — Private Pool Retreat in Bradenton, Florida",
      },
    ],
    siteName: "Blue Oasis 5512",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Oasis 5512 | Private Pool Retreat · Bradenton, FL",
    description: "Book direct & save. Private pool, 3BR/2BA, sleeps 8, dog-friendly, 9 min to the beach.",
    images: ["/images/main.webp"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  additionalType: "House",
  name: PROPERTY.fullName,
  alternateName: ["Blue Oasis 5512", "Blue Oasis Retreat 5512"],
  description: PROPERTY.description,
  url: SITE_URL,
  identifier: "blue-oasis-5512",
  address: {
    "@type": "PostalAddress",
    streetAddress: PROPERTY.address,
    addressLocality: PROPERTY.city,
    addressRegion: PROPERTY.state,
    postalCode: PROPERTY.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: PROPERTY.lat,
    longitude: PROPERTY.lng,
  },
  containsPlace: {
    "@type": "Accommodation",
    additionalType: "EntirePlace",
    occupancy: { "@type": "QuantitativeValue", value: PROPERTY.guests },
    numberOfBedrooms: PROPERTY.bedrooms,
    numberOfBathroomsTotal: PROPERTY.bathrooms,
    bed: [
      { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "King" },
      { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Queen" },
      { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "Single" },
      { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "Full" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "petsAllowed", value: true },
      { "@type": "LocationFeatureSpecification", name: "privatePool", value: true },
      { "@type": "LocationFeatureSpecification", name: "wifi", value: true },
    ],
  },
  checkinTime: "16:00:00-04:00",
  checkoutTime: "10:00:00-04:00",
  image: [
    `${SITE_URL}/images/main.webp`,
    `${SITE_URL}/images/IMG_9193.JPG`,
    `${SITE_URL}/images/IMG_9194.JPG`,
    `${SITE_URL}/images/IMG_9196.JPG`,
    `${SITE_URL}/images/IMG_9197.JPG`,
    `${SITE_URL}/images/IMG_9200.JPG`,
    `${SITE_URL}/images/IMG_9202.JPG`,
    `${SITE_URL}/images/IMG_9204.JPG`,
    `${SITE_URL}/images/IMG_9224.JPG`,
    `${SITE_URL}/images/IMG_9228.JPG`,
  ],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROPERTY.fullAddress)}`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@200;300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
