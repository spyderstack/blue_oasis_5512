import { PROPERTY } from "@/lib/property-data";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function BookCTA() {
  return (
    <section id="book" className="relative overflow-hidden">
      {/* Dark bg with subtle gradient */}
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/IMG_9197.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,30,31,0.95)] via-[rgba(26,30,31,0.85)] to-[rgba(26,30,31,0.7)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 py-28 lg:py-36 text-center">
        {/* Tag */}
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-6">
          Book Direct & Save
        </p>

        {/* Headline */}
        <h2 className="font-display text-5xl lg:text-7xl text-[var(--color-text)] leading-tight mb-6">
          Skip the fees.
          <br />
          <em className="text-[var(--color-teal)]">Book directly.</em>
        </h2>

        {/* Sub */}
        <p className="text-base lg:text-lg text-[var(--color-muted)] max-w-xl mx-auto mb-4">
          Guaranteed lowest price when you book direct — no Airbnb service fees, no
          middleman. Just you and Blue Oasis 5512.
        </p>

        {/* Check-in/out */}
        <div className="flex justify-center gap-10 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">Check-In</p>
            <p className="text-sm text-[var(--color-text)] mt-1">{PROPERTY.checkin}</p>
          </div>
          <div className="w-px bg-[var(--color-border)]" />
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">Check-Out</p>
            <p className="text-sm text-[var(--color-text)] mt-1">{PROPERTY.checkout}</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={PROPERTY.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-book-direct-btn"
          className="btn-cta inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[var(--color-teal)] text-[var(--color-bg)] text-sm font-medium uppercase tracking-[0.15em] no-underline hover:bg-[var(--color-teal-dim)] transition-colors"
        >
          Book Your Stay
          <ArrowUpRight size={16} weight="bold" />
        </a>

        {/* Reassurance */}
        <p className="text-xs text-[var(--color-muted)] mt-6">
          Secure booking · Lowest price guaranteed
        </p>
      </div>
    </section>
  );
}
