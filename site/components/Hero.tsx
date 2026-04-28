"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react";
import { PHOTOS, PROPERTY } from "@/lib/property-data";

const HERO_PHOTOS = PHOTOS.slice(0, 7);
const INTERVAL_MS = 5000;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="hero-slideshow" aria-label="Hero gallery">
      {/* Slides */}
      {HERO_PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className={`hero-slide ${i === activeIdx ? "active" : ""}`}
          style={{ backgroundImage: `url(${photo.src})` }}
          role="img"
          aria-label={photo.alt}
        />
      ))}

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
          {/* Location tag */}
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-4 font-medium">
            Bradenton, Florida · Private Retreat
          </p>

          {/* H1 */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[var(--color-text)] leading-tight mb-3">
            Blue Oasis
            <br />
            <span className="italic text-[var(--color-teal)]">5512</span>
          </h1>

          {/* Tagline */}
          <p className="text-base lg:text-lg text-[var(--color-muted)] font-light mb-8 max-w-lg">
            {PROPERTY.subTagline}
          </p>

          {/* Quick badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["3 Bedrooms", "2 Bathrooms", "Sleeps 8", "Private Pool", "Pet Friendly"].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.2)] text-xs text-[var(--color-text)] tracking-wider backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROPERTY.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-book-btn"
              className="btn-cta inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-teal)] text-[var(--color-bg)] text-sm font-medium uppercase tracking-[0.12em] no-underline hover:bg-[var(--color-teal-dim)] transition-colors"
            >
              Book Your Stay
            </a>
            <a
              href="#photos"
              className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)] hover:text-[var(--color-text)] no-underline transition-colors"
            >
              View Photos →
            </a>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-10">
            {HERO_PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-8 bg-[var(--color-teal)]"
                    : "w-3 bg-[rgba(255,255,255,0.25)]"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 z-10 scroll-indicator">
        <ArrowDown size={18} color="rgba(255,255,255,0.4)" weight="light" />
      </div>

      {/* Hidden image for LCP optimization */}
      <div className="sr-only">
        <Image src={HERO_PHOTOS[0].src} alt={HERO_PHOTOS[0].alt} width={1920} height={1080} priority />
      </div>
    </section>
  );
}
