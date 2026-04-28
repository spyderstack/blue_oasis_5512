'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';

export default function ProcessSection() {
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
    <section ref={sectionRef} id="process" className="relative bg-cedar-off-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <Image src="/images/beds.JPG" alt="Interior design inspiration" fill className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="reveal">
            <span className="font-epilogue text-cedar-gray text-[11px] tracking-[3px] uppercase">Our Approach</span>
          </div>
          <div className="reveal reveal-delay-1">
            <h2 className="font-epilogue text-cedar-dark text-3xl md:text-4xl lg:text-5xl font-light lowercase tracking-wide leading-tight">
              design is just<br />the beginning
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="font-epilogue text-cedar-gray text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto">
              Our comprehensive process brings your vision to life through meticulous planning, inspired design, and expert craftsmanship.
            </p>
          </div>
          <div className="reveal reveal-delay-3">
            <Link href="#process-detail" className="btn-cedar inline-flex items-center gap-3 mx-auto">
              Our Process <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { step: '01', title: 'discover', desc: 'We listen to understand your vision, lifestyle, and how you want to experience your outdoor space.' },
            { step: '02', title: 'design', desc: 'Our team creates detailed plans that balance beauty, function, and budget with precision.' },
            { step: '03', title: 'deliver', desc: 'Expert craftsmen bring the design to life with premium materials and meticulous attention to detail.' },
          ].map((item, index) => (
            <div key={item.step} className={`reveal reveal-delay-${index + 1} text-center space-y-4`}>
              <span className="font-epilogue text-cedar-gray/40 text-5xl md:text-6xl font-light">{item.step}</span>
              <h3 className="font-epilogue text-cedar-dark text-lg md:text-xl font-light lowercase tracking-wide">{item.title}</h3>
              <p className="font-epilogue text-cedar-gray text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
