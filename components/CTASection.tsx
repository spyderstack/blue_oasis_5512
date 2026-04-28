'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export default function CTASection() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/kitchen.JPG" alt="Luxury kitchen interior" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-cedar-dark/50" />
      </div>
      <div className="relative z-10 text-center space-y-8 px-6">
        <div className="reveal">
          <h2 className="font-epilogue text-cedar-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light lowercase tracking-wide leading-tight">
            start the process<br />today
          </h2>
        </div>
        <div className="reveal reveal-delay-1">
          <p className="font-epilogue text-cedar-white/70 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Let&apos;s create your outdoor sanctuary. Reach out to begin your journey toward the backyard of your dreams.
          </p>
        </div>
        <div className="reveal reveal-delay-2">
          <Link href="#contact-form" className="btn-cedar btn-cedar-light inline-flex items-center gap-3">
            Get Started <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
