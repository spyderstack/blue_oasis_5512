/**
 * JSON-LD Structured Data for Blue Oasis 5512
 *
 * Schema types used:
 * - LodgingBusiness  → tells Google this is a rentable property
 * - VacationRental   → more specific type for short-term rentals
 * - Place            → provides precise geo/address data
 *
 * This is the single biggest SEO lever for local/branded search ranking.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Vacation Rental (Primary for Rich Results) ──────────────────────
      {
        "@type": "VacationRental",
        "@id": "https://blueoasis5512.vercel.app/#property",
        name: "Blue Oasis 5512 Private Villa",
        identifier: "property-5512-21st",
        description:
          "Blue Oasis 5512 is a private luxury vacation rental at 5512 21st St Ct W, Bradenton, FL 34207. Features 3 bedrooms, 2 bathrooms, a private pool, fully equipped kitchen, and resort-style amenities.",
        url: "https://blueoasis5512.vercel.app",
        image: [
          "https://blueoasis5512.vercel.app/images/IMG_9193.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9194.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9196.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9197.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9200.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9202.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9204.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9224.JPG",
          "https://blueoasis5512.vercel.app/images/IMG_9228.JPG",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "5512 21st St Ct W",
          addressLocality: "Bradenton",
          addressRegion: "FL",
          postalCode: "34207",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "27.4425169",
          longitude: "-82.5832231",
        },
        // Google requires VacationRental to 'contain' the actual Accommodation
        containsPlace: {
          "@type": "Accommodation",
          name: "Blue Oasis 5512 Main Living Space",
          numberOfRooms: 3,
          numberOfBathroomsTotal: 2,
          occupancy: {
            "@type": "QuantitativeValue",
            value: 8,
            unitText: "guests",
          },
          petsAllowed: true,
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
            { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
            { "@type": "LocationFeatureSpecification", name: "Fully Equipped Kitchen", value: true },
            { "@type": "LocationFeatureSpecification", name: "Private Parking", value: true },
            { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
            { "@type": "LocationFeatureSpecification", name: "Smart TV", value: true },
            { "@type": "LocationFeatureSpecification", name: "Washer/Dryer", value: true },
            { "@type": "LocationFeatureSpecification", name: "Coffee Maker", value: true },
          ],
        },
        checkinTime: "16:00",
        checkoutTime: "10:00",
        priceRange: "$$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Satisfied Guest" },
            datePublished: "2024-01-15",
            reviewBody: "An incredible stay at Blue Oasis 5512. The pool and location were perfect.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
          },
        ],
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://rent.fairly.com/listing/13860451",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "LodgingReservation",
            name: "Book Blue Oasis 5512",
          },
        },
        containedInPlace: {
          "@type": "City",
          name: "Bradenton",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bradenton",
            addressRegion: "FL",
            addressCountry: "US",
          },
        },
      },

      // ── Business Entity (For Local SEO) ─────────────────────────────────
      {
        "@type": "LodgingBusiness",
        "@id": "https://blueoasis5512.vercel.app/#business",
        name: "Blue Oasis 5512",
        identifier: "blue-oasis-5512-bradenton",
        description:
          "Official business entity for Blue Oasis 5512 vacation rental in Bradenton, FL.",
        url: "https://blueoasis5512.vercel.app",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5512 21st St Ct W",
          addressLocality: "Bradenton",
          addressRegion: "FL",
          postalCode: "34207",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "27.4425169",
          longitude: "-82.5832231",
        },
        // Link to the property
        containsPlace: { "@id": "https://blueoasis5512.vercel.app/#property" },
      },

      // ── WebPage entity ──────────────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://blueoasis5512.vercel.app/#webpage",
        url: "https://blueoasis5512.vercel.app",
        name: "Blue Oasis 5512 | Luxury Vacation Rental | 5512 21st St Ct W, Bradenton FL",
        isPartOf: { "@id": "https://blueoasis5512.vercel.app/#website" },
        about: { "@id": "https://blueoasis5512.vercel.app/#property" },
        description:
          "Official website for Blue Oasis 5512, a luxury vacation rental at 5512 21st St Ct W, Bradenton, FL 34207. Book directly for the best rates.",
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://blueoasis5512.vercel.app"],
          },
        ],
      },

      // ── Website entity ──────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://blueoasis5512.vercel.app/#website",
        url: "https://blueoasis5512.vercel.app",
        name: "Blue Oasis 5512",
        description:
          "Official website for Blue Oasis 5512 — a private luxury vacation rental in Bradenton, FL.",
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://blueoasis5512.vercel.app/?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },

      // ── BreadcrumbList ──────────────────────────────────────────────────
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://blueoasis5512.vercel.app",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data must be injected as raw JSON
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
