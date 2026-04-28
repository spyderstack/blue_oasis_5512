import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Oasis 5512 | Luxury Vacation Rental | Miami Beach, FL",
  description:
    "Experience Blue Oasis 5512 — a private luxury vacation rental in Miami Beach. Stunning interiors, resort-style amenities, and direct booking available.",
  keywords: [
    "Blue Oasis 5512",
    "Miami Beach vacation rental",
    "luxury short term rental Miami",
    "Blue Oasis Miami",
    "luxury rental Miami Beach",
  ],
  openGraph: {
    title: "Blue Oasis 5512 | Luxury Vacation Rental",
    description:
      "Book your stay at Blue Oasis 5512, a stunning luxury rental in Miami Beach with resort-style amenities.",
    type: "website",
    images: ["/images/main.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Oasis 5512 | Luxury Vacation Rental",
    description:
      "A private luxury oasis in Miami Beach. Book direct for the best rates.",
    images: ["/images/main.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
