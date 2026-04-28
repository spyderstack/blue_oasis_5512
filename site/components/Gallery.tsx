"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { PHOTOS } from "@/lib/property-data";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);

  const goNext = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % PHOTOS.length);
  }, [lightboxIdx]);

  const goPrev = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + PHOTOS.length) % PHOTOS.length);
  }, [lightboxIdx]);

  return (
    <section id="photos" className="section-pad bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">Gallery</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)]">
            Every corner, <em>curated</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              onClick={() => openLightbox(i)}
              className={`gallery-item reveal delay-${Math.min(i + 1, 6)} rounded-xl ${
                i === 0 ? "col-span-2 lg:col-span-2 row-span-2 aspect-video lg:aspect-auto lg:h-[480px]" :
                i === 3 ? "col-span-2 lg:col-span-1 aspect-video lg:aspect-[4/3]" :
                "aspect-[4/3]"
              }`}
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${photo.alt}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[lightboxIdx].src}
              alt={PHOTOS[lightboxIdx].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-full rounded-lg"
            />
            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 tracking-widest">
              {lightboxIdx + 1} / {PHOTOS.length}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={closeLightbox}
            className="fixed top-5 right-5 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
            aria-label="Next"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
