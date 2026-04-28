import { PROPERTY } from "@/lib/property-data";

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Kog&q=${encodeURIComponent(PROPERTY.fullAddress)}&zoom=14`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROPERTY.fullAddress)}`;

  return (
    <section id="location" className="section-pad bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">Location</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)]">
            Find your <em>oasis</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Address info */}
          <div className="reveal">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-1">Address</p>
                <p className="text-lg text-[var(--color-text)]">{PROPERTY.address}</p>
                <p className="text-lg text-[var(--color-text)]">{PROPERTY.city}, {PROPERTY.state} {PROPERTY.zip}</p>
              </div>

              <div className="w-16 h-px bg-[var(--color-border)]" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-1">Check-In</p>
                  <p className="text-base text-[var(--color-text)]">{PROPERTY.checkin}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-1">Check-Out</p>
                  <p className="text-base text-[var(--color-text)]">{PROPERTY.checkout}</p>
                </div>
              </div>

              <div className="w-16 h-px bg-[var(--color-border)]" />

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">Nearby</p>
                <ul className="space-y-2">
                  {[
                    "🏖️ Beach — 9 minutes by car",
                    "🚶 Bradenton Riverwalk — nearby",
                    "🔬 Bishop Museum of Science & Nature",
                    "🍽️ Restaurants & outdoor music venues",
                    "🐎 Horseback riding stables",
                  ].map((item) => (
                    <li key={item} className="text-sm text-[var(--color-muted)]">{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-teal)] no-underline hover:text-[var(--color-text)] transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal delay-2 rounded-2xl overflow-hidden border border-[var(--color-border)] h-80 lg:h-96 bg-[var(--color-surface)] flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-3xl mb-4">📍</p>
              <p className="text-[var(--color-text)] font-medium mb-2">Blue Oasis 5512</p>
              <p className="text-sm text-[var(--color-muted)] mb-6">{PROPERTY.fullAddress}</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-teal)] text-[var(--color-teal)] text-sm no-underline hover:bg-[var(--color-teal)] hover:text-[var(--color-bg)] transition-all"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
