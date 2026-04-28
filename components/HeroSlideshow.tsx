'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { CaretDown, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const SLIDE_COUNT = 7;
const SLIDE_INTERVAL = 5500;

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const goToNext = useCallback(() => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % SLIDE_COUNT);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  // Clear prevSlide after crossfade completes
  useEffect(() => {
    if (prevSlide !== null) {
      const timeout = setTimeout(() => setPrevSlide(null), 1200);
      return () => clearTimeout(timeout);
    }
  }, [prevSlide]);

  return (
    <section ref={heroRef} id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Slides — using div backgrounds for Ken Burns effect (matches original) */}
      {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
            index === currentSlide
              ? 'opacity-100 z-10'
              : index === prevSlide
              ? 'opacity-0 z-[5]'
              : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(/images/main.webp)`,
            animation: index === currentSlide ? 'zoom-in 8s ease-out both' : 'none',
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Hero Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-6">
        <h1 className="font-epilogue text-cedar-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light lowercase tracking-wide text-center leading-tight animate-fade-in">
          get away<br />every day
        </h1>
      </div>

      {/* Scroll Indicator — right side (matches original) */}
      <div
        className="absolute bottom-8 right-8 md:right-14 z-30 flex flex-col items-center gap-3 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-cedar-white/70 font-epilogue text-[10px] tracking-[3px] uppercase [writing-mode:vertical-lr]">
          scroll
        </span>
        <CaretDown
          size={16}
          weight="light"
          className="text-cedar-white/70 animate-bounce-subtle"
        />
      </div>

      {/* Social Icons — Left side */}
      <div
        className="absolute bottom-8 left-8 md:left-14 z-30 flex flex-col items-center gap-5 animate-fade-in"
        style={{ animationDelay: '1.2s' }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cedar-white/60 hover:text-cedar-white transition-colors"
        >
          <FacebookLogo size={18} weight="regular" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cedar-white/60 hover:text-cedar-white transition-colors"
        >
          <InstagramLogo size={18} weight="regular" />
        </a>
      </div>
    </section>
  );
}
