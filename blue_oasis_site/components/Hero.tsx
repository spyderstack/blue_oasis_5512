"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

const slides = [
  { src: "/images/IMG_9204.JPG", alt: "Blue Oasis outdoor space" },
  { src: "/images/IMG_9193.JPG", alt: "Blue Oasis living area" },
  { src: "/images/IMG_9200.JPG", alt: "Blue Oasis bedroom" },
  { src: "/images/IMG_9228.JPG", alt: "Blue Oasis interior detail" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0e0e0f]">
      {/* Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0f]/60 via-transparent to-[#0e0e0f]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f]/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div
          className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="font-light label text-[#a0a1a5] mb-4">
            Bradenton, FL · 5512 21st St Ct W
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#f2f2f0] leading-none mb-6">
            {/* Visually decorative — SEO entity "Blue Oasis 5512" anchored here */}
            <span className="sr-only">Blue Oasis 5512 — </span>
            your private
            <br />
            <span className="font-extralight opacity-70">oasis awaits</span>
          </h1>
          <p className="text-[#a0a1a5] text-base md:text-lg font-light max-w-md mb-10 leading-relaxed">
            Welcome to <strong className="text-[#f2f2f0] font-light">Blue Oasis 5512</strong> - a luxury vacation rental
            where resort-style living meets intimate comfort. No crowds. Just
            you, and the life you deserve.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://rent.fairly.com/listing/13860451"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid"
            >
              Book Direct
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#the-space" className="btn-outline">
              Explore the Space
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 md:right-16 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-300 ${i === active
                ? "w-8 bg-[#f2f2f0]"
                : "w-4 bg-[#f2f2f0]/30 hover:bg-[#f2f2f0]/50"
                }`}
            />
          ))}
        </div>
      </div>



    </section>
  );
}
