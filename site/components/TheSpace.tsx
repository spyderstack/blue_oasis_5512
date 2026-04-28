import Image from "next/image";
import { PROPERTY } from "@/lib/property-data";

export default function TheSpace() {
  return (
    <section id="space" className="section-pad bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="teal-line" />
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-4">
              The Space
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)] leading-snug mb-6">
              Your home away
              <br />
              <em>from home</em>
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] font-light text-base leading-relaxed">
              <p>
                Enjoy relaxed, sun-filled days at this dog-friendly home just 9 minutes to
                the beach by car. Nearby horseback riding, restaurants, riverwalk, and
                outdoor music venues will certainly entertain you and your guests.
              </p>
              <p>
                Lounge by the private pool, fire up the grill, or unwind with movie
                nights on one of the 4 Smart TVs. After a fun day out, gather for dinner
                on the patio or around the onsite fire pit under the Florida stars.
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {["Pet Friendly", "Step-Free Access", "Central A/C", "Fenced Yard", "Keyless Entry"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs border border-[var(--color-border)] rounded-full text-[var(--color-muted)] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Address */}
            <p className="mt-8 text-xs text-[var(--color-muted)] tracking-wide">
              📍 {PROPERTY.fullAddress}
            </p>
          </div>

          {/* Image */}
          <div className="reveal delay-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/IMG_9194.JPG"
              alt="Blue Oasis 5512 private pool and outdoor space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Teal accent border */}
            <div className="absolute bottom-0 left-0 h-1 w-24 bg-[var(--color-teal)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
