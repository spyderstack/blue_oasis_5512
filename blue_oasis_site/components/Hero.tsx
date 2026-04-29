"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";

const slides = [
  { src: "/images/IMG_9193.JPG", alt: "Blue Oasis living area" },
  { src: "/images/IMG_9200.JPG", alt: "Blue Oasis bedroom" },
  { src: "/images/IMG_9204.JPG", alt: "Blue Oasis outdoor space" },
  { src: "/images/IMG_9228.JPG", alt: "Blue Oasis interior detail" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1200"
          style={{ opacity: i === active ? 1 : 0, transitionDuration: "1.4s" }}
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

      {/* Layered overlays — navy at bottom, subtle blue tint overall */}
      <div className="absolute inset-0 bg-[#0C1B33]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0C1B33] via-[#0C1B33]/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1B33]/20 via-[#0C1B33]/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div
          className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >

          {/* Location badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="accent-dot" />
            <span className="label text-[#1AAEDB] tracking-[0.2em]">
              Miami Beach, FL
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.05] mb-6">
            your private
            <br />
            <span className="gradient-text font-semibold">
              blue oasis
            </span>
          </h1>

          <p className="text-white/70 text-base md:text-lg font-light max-w-lg mb-10 leading-relaxed">
            A luxury vacation rental steps from Miami Beach — where resort-style
            amenities meet the warmth of a private home.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#book" className="btn-warm">
              Book Direct
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#the-space" className="btn-outline-dark">
              Explore the Space
            </a>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 md:right-16 flex gap-2 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active
                ? "w-6 h-1.5 bg-[#1AAEDB]"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#the-space"
        className="absolute bottom-8 left-6 md:left-16 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#1AAEDB] transition-colors"
      >
        <span className="label tracking-[0.2em]">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
