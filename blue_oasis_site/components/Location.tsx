import { MapPin, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import RevealWrapper from "./RevealWrapper";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-36 bg-[#0e0e0f]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealWrapper>
          <p className="label text-[#606065] mb-16">location</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <RevealWrapper>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#f2f2f0] tracking-tight leading-tight mb-8">
                right where
                <br />
                <span className="text-[#606065] font-extralight">
                  you want to be
                </span>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <p className="text-[#a0a1a5] font-light text-base md:text-lg leading-relaxed mb-8">
                Nestled in Bradenton Florida, Blue Oasis 5512 puts you steps from the
                ocean, world-class dining, nightlife, and cultural attractions -
                while remaining your serene private retreat.
              </p>
            </RevealWrapper>

            {/* Nearby list */}
            <RevealWrapper delay={180}>
              <div className="space-y-0 border border-white/[0.06] mb-10">
                {[
                  { place: "Bradenton Beach", distance: "0.5 mi to the ocean" },
                  { place: "Cooper Beach", distance: "1.2 mi" },
                  { place: "Bradenton Town", distance: "0.8 mi" },
                  { place: "Bradenton Airport", distance: "12 mi" },
                  { place: "Wynwood Arts", distance: "5 mi" },
                ].map((item, i, arr) => (
                  <div
                    key={item.place}
                    className={`flex items-center justify-between p-5 ${i < arr.length - 1 ? "border-b border-white/[0.06]" : ""
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={14}
                        weight="fill"
                        className="text-[#c8b89a] shrink-0"
                      />
                      <span className="text-[#f2f2f0] text-sm font-light">
                        {item.place}
                      </span>
                    </div>
                    <span className="label text-[#606065]">{item.distance}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={250}>
              <a
                href="https://www.google.com/maps/place/5512+21st+St+Ct+W,+Bradenton,+FL+34207/@27.4425216,-82.588094,17z/data=!3m1!4b1!4m6!3m5!1s0x88c315e08340b727:0x82a8cc5e36f7bcac!8m2!3d27.4425169!4d-82.5832231!16s%2Fg%2F11sttgj_yz?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                View on Map
                <ArrowSquareOut size={14} weight="bold" />
              </a>
            </RevealWrapper>
          </div>

          {/* Map embed placeholder */}
          <RevealWrapper delay={100}>
            <div className="relative w-full aspect-square bg-[#181819] border border-white/[0.06] overflow-hidden">
              <iframe
                title="Blue Oasis 5512 location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.858457279932!2d-82.5880940182068!3d27.44252157612322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c315e08340b727%3A0x82a8cc5e36f7bcac!2s5512%2021st%20St%20Ct%20W%2C%20Bradenton%2C%20FL%2034207!5e0!3m2!1sen!2sus!4v1777434196745!5m2!1sen!2sus"
                className="w-full h-full opacity-70"
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
