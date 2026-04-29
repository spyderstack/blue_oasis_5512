"use client";

import Image from "next/image";
import { ArrowRight, Calendar } from "@phosphor-icons/react";
import RevealWrapper from "./RevealWrapper";

export default function BookCTA() {
  return (
    <section
      id="book"
      className="relative py-36 md:py-48 overflow-hidden bg-[#FAFAF8]"
    >
      {/* Decorative teal bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1AAEDB] via-[#5ECEF0] to-[#1AAEDB]" />

      {/* Background image — subtle, on the right side */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <Image
          src="/images/IMG_9224.JPG"
          alt="Blue Oasis 5512"
          fill
          className="object-cover opacity-30"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="max-w-2xl">
          <RevealWrapper>
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-dot" />
              <p className="label text-[#1AAEDB] tracking-[0.2em]">book direct & save</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0C1B33] tracking-tight leading-tight mb-6">
              ready to start
              <br />
              <span className="text-[#1AAEDB] font-semibold">your escape?</span>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <p className="text-[#6B7A8D] font-light text-base md:text-lg leading-relaxed mb-3">
              Book directly with us and skip the platform fees. Enjoy the same
              5-star experience with better pricing, flexible terms, and a
              personal host who genuinely cares about your stay.
            </p>
            <p className="text-[#8FA3BF] text-sm font-light mb-12">
              No service fees. No hidden charges. Just your home away from home.
            </p>
          </RevealWrapper>

          {/* Inquiry form */}
          <RevealWrapper delay={200}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white border border-[#0C1B33]/10 p-8 rounded-sm shadow-xl shadow-[#0C1B33]/05"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label text-[#6B7A8D] block mb-2 tracking-[0.12em]">
                    check-in
                  </label>
                  <input
                    type="date"
                    id="check-in-date"
                    className="w-full bg-[#F5F7FA] border border-[#0C1B33]/10 text-[#0C1B33] px-4 py-3 text-sm font-light focus:outline-none focus:border-[#1AAEDB] transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="label text-[#6B7A8D] block mb-2 tracking-[0.12em]">
                    check-out
                  </label>
                  <input
                    type="date"
                    id="check-out-date"
                    className="w-full bg-[#F5F7FA] border border-[#0C1B33]/10 text-[#0C1B33] px-4 py-3 text-sm font-light focus:outline-none focus:border-[#1AAEDB] transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label text-[#6B7A8D] block mb-2 tracking-[0.12em]">
                    your name
                  </label>
                  <input
                    type="text"
                    id="guest-name"
                    placeholder="Full name"
                    className="w-full bg-[#F5F7FA] border border-[#0C1B33]/10 text-[#0C1B33] px-4 py-3 text-sm font-light placeholder:text-[#8FA3BF] focus:outline-none focus:border-[#1AAEDB] transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="label text-[#6B7A8D] block mb-2 tracking-[0.12em]">
                    guests
                  </label>
                  <select
                    id="num-guests"
                    className="w-full bg-[#F5F7FA] border border-[#0C1B33]/10 text-[#0C1B33] px-4 py-3 text-sm font-light focus:outline-none focus:border-[#1AAEDB] transition-colors rounded-sm"
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
                <label className="label text-[#6B7A8D] block mb-2 tracking-[0.12em]">
                  email address
                </label>
                <input
                  type="email"
                  id="guest-email"
                  placeholder="you@example.com"
                  className="w-full bg-[#F5F7FA] border border-[#0C1B33]/10 text-[#0C1B33] px-4 py-3 text-sm font-light placeholder:text-[#8FA3BF] focus:outline-none focus:border-[#1AAEDB] transition-colors rounded-sm"
                />
              </div>

              <button type="submit" className="btn-warm w-full justify-center">
                <Calendar size={16} weight="light" />
                Request Booking
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
