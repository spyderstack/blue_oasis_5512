"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import RevealWrapper from "./RevealWrapper";

export default function TheSpace() {
  return (
    <section id="the-space" className="py-24 md:py-36 bg-[#111112]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <RevealWrapper>
          <p className="label text-[#606065] mb-16">the space</p>
        </RevealWrapper>

        {/* Main layout — split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <RevealWrapper delay={0}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#f2f2f0] leading-tight tracking-tight mb-8">
                get away
                <br />
                <span className="font-extralight text-[#606065]">every day</span>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={150}>
              <p className="text-[#a0a1a5] font-light text-base md:text-lg leading-relaxed mb-6">
                Blue Oasis 5512 is a meticulously curated luxury vacation home
                in the Bayshore Gardens area of Bradenton. Designed for those who refuse to
                settle, every room balances elevated aesthetics with the warmth
                of a true home.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={250}>
              <p className="text-[#a0a1a5] font-light text-base md:text-lg leading-relaxed mb-10">
                With 3 bedrooms, 2 baths, a private pool, and resort-style amenities,
                Blue Oasis offers an escape from the ordinary — without leaving
                the city behind.
              </p>
            </RevealWrapper>

            {/* Stats row */}
            <RevealWrapper delay={350}>
              <div className="grid grid-cols-3 gap-0 border border-white/[0.06] mb-10">
                {[
                  { label: "bedrooms", value: "3" },
                  { label: "bathrooms", value: "2" },
                  { label: "max guests", value: "8" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-6 flex flex-col ${i < 2 ? "border-r border-white/[0.06]" : ""
                      }`}
                  >
                    <span className="text-3xl md:text-4xl font-light text-[#f2f2f0] mb-1">
                      {stat.value}
                    </span>
                    <span className="label text-[#606065]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={400}>
              <a
                href="https://rent.fairly.com/listing/13860451"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Book Your Stay
                <ArrowRight size={14} weight="bold" />
              </a>
            </RevealWrapper>
          </div>

          {/* Right: Image stack */}
          <div className="flex flex-col gap-4">
            <RevealWrapper delay={100}>
              <div className="img-zoom relative w-full aspect-[4/3] bg-[#1a1a1c]">
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
              <RevealWrapper delay={200}>
                <div className="img-zoom relative w-full aspect-square bg-[#1a1a1c]">
                  <Image
                    src="/images/IMG_9197.JPG"
                    alt="Blue Oasis kitchen"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </RevealWrapper>
              <RevealWrapper delay={280}>
                <div className="img-zoom relative w-full aspect-square bg-[#1a1a1c]">
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
