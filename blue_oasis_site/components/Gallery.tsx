"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import RevealWrapper from "./RevealWrapper";

const photos = [
  { src: "/images/IMG_9193.JPG", alt: "Blue Oasis exterior" },
  { src: "/images/IMG_9194.JPG", alt: "Blue Oasis living space" },
  { src: "/images/IMG_9196.JPG", alt: "Blue Oasis interior" },
  { src: "/images/IMG_9197.JPG", alt: "Blue Oasis kitchen" },
  { src: "/images/IMG_9200.JPG", alt: "Blue Oasis bedroom" },
  { src: "/images/IMG_9202.JPG", alt: "Blue Oasis dining" },
  { src: "/images/IMG_9204.JPG", alt: "Blue Oasis outdoor" },
  { src: "/images/IMG_9224.JPG", alt: "Blue Oasis detail" },
  { src: "/images/IMG_9228.JPG", alt: "Blue Oasis bathroom" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };
  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  return (
    <>
      <section id="gallery" className="py-24 md:py-36 bg-[#0e0e0f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <RevealWrapper>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="label text-[#606065] mb-3">the gallery</p>
                <h2 className="text-3xl md:text-4xl font-light text-[#f2f2f0] tracking-tight">
                  every room, a story
                </h2>
              </div>
              <p className="label text-[#606065] hidden md:block">
                {photos.length} photos
              </p>
            </div>
          </RevealWrapper>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {photos.map((photo, i) => (
              <RevealWrapper
                key={photo.src}
                delay={i * 60}
                className={i === 0 || i === 4 ? "col-span-2 md:col-span-1" : ""}
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="img-zoom relative w-full bg-[#1a1a1c] cursor-pointer block"
                  style={{
                    aspectRatio: i === 0 || i === 4 ? "16/9" : "4/3",
                  }}
                  aria-label={`View ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                </button>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ArrowLeft size={28} />
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1600}
              height={1067}
              className="object-contain w-full h-full max-h-[85vh]"
              priority
            />
            <p className="text-center text-white/40 text-sm mt-3 label">
              {lightbox + 1} / {photos.length}
            </p>
          </div>
          <button
            className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
