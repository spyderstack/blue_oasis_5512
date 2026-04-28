'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from '@phosphor-icons/react';

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-cedar-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="reveal">
              <h2 className="font-epilogue text-cedar-dark text-3xl md:text-4xl lg:text-5xl font-light lowercase leading-tight tracking-wide">
                get away<br />every day
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="font-epilogue text-cedar-light-gray text-lg md:text-xl font-light lowercase tracking-wide">
                live more of what you love
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="font-epilogue text-cedar-gray text-sm md:text-base font-light leading-relaxed max-w-lg">
                Escape to your own backyard. Cedar Springs Landscapes crafts outdoor spaces with resort-style luxury — so every day feels like a getaway at home. From concept to completion, our award-winning team brings together nature, artistry, and engineering to create landscapes that inspire.
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <p className="font-epilogue text-cedar-gray text-sm md:text-base font-light leading-relaxed max-w-lg">
                With over two decades of experience serving Oakville, Burlington, and Ancaster, Cedar Springs is your trusted partner in transforming outdoor spaces into extraordinary living environments.
              </p>
            </div>
            <div className="reveal reveal-delay-4 flex items-center gap-1 pt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} weight="fill" className="text-cedar-dark" />
              ))}
              <span className="ml-3 font-epilogue text-cedar-light-gray text-[11px] tracking-[2px] uppercase">
                5 star landscapes
              </span>
            </div>
          </div>
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <div className="reveal absolute top-0 right-0 w-[75%] h-[65%] z-10">
              <Image src="/images/living_room2.JPG" alt="Luxury living room interior" fill className="object-cover" sizes="(max-width: 1024px) 75vw, 40vw" />
            </div>
            <div className="reveal reveal-delay-2 absolute bottom-0 left-0 w-[65%] h-[55%] z-20 border-8 border-cedar-white">
              <Image src="/images/living_room.JPG" alt="Elegant living room design" fill className="object-cover" sizes="(max-width: 1024px) 65vw, 35vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
