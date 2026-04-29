"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import RevealWrapper from "./RevealWrapper";

export default function TheSpace() {
  return (
    <section id="the-space" className="py-24 md:py-36 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">

        {/* Section label */}
        <RevealWrapper>
          <div className="flex items-center gap-3 mb-16">
            <span className="accent-dot" />
            <p className="label text-[#1AAEDB] tracking-[0.2em]">the space</p>
          </div>
        </RevealWrapper>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <RevealWrapper delay={0}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0C1B33] leading-tight tracking-tight mb-8">
                get away
                <br />
                <span className="text-[#1AAEDB] font-semibold">every day</span>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={120}>
              <p className="text-[#6B7A8D] font-light text-base md:text-lg leading-relaxed mb-6">
                Blue Oasis 5512 is a meticulously curated luxury vacation home
                in the heart of Miami Beach. Designed for those who refuse to
                settle, every room balances elevated aesthetics with the warmth
                of a true home.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={220}>
              <p className="text-[#6B7A8D] font-light text-base md:text-lg leading-relaxed mb-10">
                With 4 bedrooms, a private pool, and resort-style amenities,
                Blue Oasis offers an escape from the ordinary — without leaving
                the city behind.
              </p>
            </RevealWrapper>

            {/* Stats row */}
            <RevealWrapper delay={320}>
              <div className="grid grid-cols-3 gap-0 border border-[#0C1B33]/10 mb-10 overflow-hidden rounded-sm">
                {[
                  { label: "bedrooms", value: "4" },
                  { label: "bathrooms", value: "3" },
                  { label: "max guests", value: "8" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-6 flex flex-col bg-white ${
                      i < 2 ? "border-r border-[#0C1B33]/10" : ""
                    } hover:bg-[#1AAEDB] hover:border-[#1AAEDB] group transition-colors duration-200`}
                  >
                    <span className="text-3xl md:text-4xl font-light text-[#0C1B33] mb-1 group-hover:text-white transition-colors">
                      {stat.value}
                    </span>
                    <span className="label text-[#6B7A8D] group-hover:text-white/80 transition-colors">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={380}>
              <a href="#book" className="btn-primary">
                Book Your Stay
                <ArrowRight size={14} weight="bold" />
              </a>
            </RevealWrapper>
          </div>

          {/* Right: Image stack */}
          <div className="flex flex-col gap-4">
            <RevealWrapper delay={80}>
              <div className="img-zoom relative w-full aspect-[4/3] bg-[#E8EDF3] overflow-hidden rounded-sm">
                <Image
                  src="/images/IMG_9196.JPG"
                  alt="Blue Oasis living room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealWrapper>
            <div className="grid grid-cols-2 gap-4">
              <RevealWrapper delay={180}>
                <div className="img-zoom relative w-full aspect-square bg-[#E8EDF3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/IMG_9197.JPG"
                    alt="Blue Oasis kitchen"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </RevealWrapper>
              <RevealWrapper delay={260}>
                <div className="img-zoom relative w-full aspect-square bg-[#E8EDF3] overflow-hidden rounded-sm">
                  <Image
                    src="/images/IMG_9202.JPG"
                    alt="Blue Oasis dining"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
