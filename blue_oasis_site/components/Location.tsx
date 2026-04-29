import { MapPin, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import RevealWrapper from "./RevealWrapper";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-36 bg-[#0C1B33]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealWrapper>
          <div className="flex items-center gap-3 mb-16">
            <span className="accent-dot" />
            <p className="label text-[#1AAEDB] tracking-[0.2em]">location</p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <RevealWrapper>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-8">
                right where
                <br />
                <span className="text-[#1AAEDB] font-semibold">
                  you want to be
                </span>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <p className="text-[#8FA3BF] font-light text-base md:text-lg leading-relaxed mb-10">
                Nestled in Miami Beach, Blue Oasis 5512 puts you steps from the
                ocean, world-class dining, nightlife, and cultural attractions —
                while remaining your serene private retreat.
              </p>
            </RevealWrapper>

            {/* Nearby list */}
            <RevealWrapper delay={180}>
              <div className="border border-white/10 overflow-hidden rounded-sm mb-10">
                {[
                  { place: "Miami Beach", distance: "0.5 mi to the ocean" },
                  { place: "South Beach", distance: "1.2 mi" },
                  { place: "Lincoln Road", distance: "0.8 mi" },
                  { place: "Miami Int'l Airport", distance: "12 mi" },
                  { place: "Wynwood Arts", distance: "5 mi" },
                ].map((item, i, arr) => (
                  <div
                    key={item.place}
                    className={`flex items-center justify-between p-5 hover:bg-white/5 transition-colors group ${
                      i < arr.length - 1 ? "border-b border-white/08" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={14}
                        weight="fill"
                        className="text-[#1AAEDB] shrink-0"
                      />
                      <span className="text-white text-sm font-light">
                        {item.place}
                      </span>
                    </div>
                    <span className="label text-[#4A637F] tracking-[0.12em]">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={250}>
              <a
                href="https://maps.google.com/?q=Miami+Beach+FL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark inline-flex"
              >
                View on Map
                <ArrowSquareOut size={14} weight="bold" />
              </a>
            </RevealWrapper>
          </div>

          {/* Map */}
          <RevealWrapper delay={100}>
            <div className="relative w-full aspect-square bg-[#0F2244] border border-white/10 overflow-hidden rounded-sm">
              <iframe
                title="Blue Oasis 5512 location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56079.59714756898!2d-80.18990485!3d25.7906856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3a43c8fcb73%3A0xe84a2c80a05e8da8!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
