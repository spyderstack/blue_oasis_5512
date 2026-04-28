import { PROPERTY } from "@/lib/property-data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-body font-light tracking-[0.15em] text-sm uppercase mb-3">
              <span className="text-[var(--color-teal)] font-medium">Blue Oasis</span>
              <span className="mx-1.5 text-[var(--color-muted)]">·</span>
              <span className="text-[var(--color-text)]">5512</span>
            </p>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed max-w-xs">
              {PROPERTY.fullName}. Your private getaway in Bradenton, Florida.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-3">Location</p>
            <address className="not-italic text-sm text-[var(--color-text)] leading-relaxed">
              {PROPERTY.address}<br />
              {PROPERTY.city}, {PROPERTY.state} {PROPERTY.zip}
            </address>
          </div>

          {/* Book */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-3">Book Direct</p>
            <a
              href={PROPERTY.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full bg-[var(--color-teal)] text-[var(--color-bg)] text-xs font-medium uppercase tracking-[0.12em] no-underline hover:bg-[var(--color-teal-dim)] transition-colors mb-4"
            >
              Reserve Now
            </a>
            <p className="text-xs text-[var(--color-muted)]">Check-in: {PROPERTY.checkin} · Check-out: {PROPERTY.checkout}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            © {year} Blue Oasis 5512. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Bradenton, FL 34207 · Blue Oasis Retreat 5512
          </p>
        </div>
      </div>
    </footer>
  );
}
