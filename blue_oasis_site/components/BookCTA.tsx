"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "@phosphor-icons/react/dist/ssr";
import RevealWrapper from "./RevealWrapper";

export default function BookCTA() {
  return (
    <section id="book" className="relative py-36 md:py-48 overflow-hidden bg-[#111112]">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_9224.JPG"
          alt="Blue Oasis 5512 book direct"
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#111112]/60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="max-w-2xl">
          <RevealWrapper>
            <p className="label text-[#c8b89a] mb-6">book direct & save</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#f2f2f0] tracking-tight leading-tight mb-6">
              start the process
              <br />
              <span className="font-extralight text-[#606065]">
                today
              </span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p className="text-[#a0a1a5] font-light text-base md:text-lg leading-relaxed mb-4">
              Book directly with us and skip the platform fees. Enjoy the same
              5-star experience with better pricing, flexible terms, and a
              personal host who genuinely cares about your stay.
            </p>
            <p className="text-[#606065] text-sm font-light mb-12">
              No service fees. No hidden charges. Just your home away from home.
            </p>
          </RevealWrapper>

          {/* Simple inquiry form */}
          <RevealWrapper delay={200}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="border border-white/[0.06] bg-[#0e0e0f]/80 backdrop-blur-sm p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label text-[#606065] block mb-2">
                    check-in
                  </label>
                  <input
                    type="date"
                    id="check-in-date"
                    className="w-full bg-[#181819] border border-white/[0.08] text-[#f2f2f0] px-4 py-3 text-sm font-light focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="label text-[#606065] block mb-2">
                    check-out
                  </label>
                  <input
                    type="date"
                    id="check-out-date"
                    className="w-full bg-[#181819] border border-white/[0.08] text-[#f2f2f0] px-4 py-3 text-sm font-light focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label text-[#606065] block mb-2">
                    your name
                  </label>
                  <input
                    type="text"
                    id="guest-name"
                    placeholder="Full name"
                    className="w-full bg-[#181819] border border-white/[0.08] text-[#f2f2f0] px-4 py-3 text-sm font-light placeholder:text-[#606065] focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="label text-[#606065] block mb-2">
                    guests
                  </label>
                  <select
                    id="num-guests"
                    className="w-full bg-[#181819] border border-white/[0.08] text-[#f2f2f0] px-4 py-3 text-sm font-light focus:outline-none focus:border-white/20 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="label text-[#606065] block mb-2">
                  email address
                </label>
                <input
                  type="email"
                  id="guest-email"
                  placeholder="you@example.com"
                  className="w-full bg-[#181819] border border-white/[0.08] text-[#f2f2f0] px-4 py-3 text-sm font-light placeholder:text-[#606065] focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>

              <a
                href="https://rent.fairly.com/listing/13860451"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid w-full justify-center"
              >
                <Calendar size={16} weight="light" />
                Request Booking on Fairly
                <ArrowRight size={14} weight="bold" />
              </a>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
