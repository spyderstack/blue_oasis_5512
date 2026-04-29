import {
  Waves,
  Bed,
  ForkKnife,
  WifiHigh,
  Car,
  Thermometer,
  Television,
  Coffee,
  PawPrint,
  Cigarette,
  Shield,
  FirstAid,
} from "@phosphor-icons/react/dist/ssr";
import RevealWrapper from "./RevealWrapper";

const amenities = [
  { icon: Waves, label: "Private Pool" },
  { icon: Bed, label: "3 Bedrooms" },
  { icon: ForkKnife, label: "Fully Equipped Kitchen" },
  { icon: WifiHigh, label: "High-Speed WiFi" },
  { icon: Car, label: "Private Parking" },
  { icon: Thermometer, label: "Central A/C & Heat" },
  { icon: Television, label: "Smart TVs in All Rooms" },
  { icon: Coffee, label: "Coffee Maker" },
];

const rules = [
  { icon: PawPrint, label: "Pet-friendly ($50 fee)" },
  { icon: Cigarette, label: "No smoking indoors" },
  { icon: Shield, label: "No parties or large gatherings" },
  { icon: FirstAid, label: "First Aid kit on site" },
  { icon: Television, label: "Quiet hours: 10 PM–8 AM" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-36 bg-[#111112]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealWrapper>
          <p className="label text-[#606065] mb-16">amenities</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Amenities grid */}
          <div>
            <RevealWrapper>
              <h2 className="text-3xl md:text-4xl font-light text-[#f2f2f0] tracking-tight mb-12">
                everything you need,
                <br />
                <span className="text-[#606065] font-extralight">
                  nothing you don&apos;t
                </span>
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/[0.06]">
              {amenities.map((item, i) => {
                const Icon = item.icon;
                const isRight = i % 2 === 1;
                const isLast = i >= amenities.length - 2;
                return (
                  <RevealWrapper key={item.label} delay={i * 50}>
                    <div
                      className={`flex items-center gap-4 p-6 ${
                        !isLast ? "border-b border-white/[0.06]" : ""
                      } ${isRight ? "" : "border-r border-white/[0.06] sm:border-r"} ${
                        !isRight ? "sm:border-r border-white/[0.06]" : ""
                      }`}
                    >
                      <Icon
                        size={20}
                        weight="light"
                        className="text-[#c8b89a] shrink-0"
                      />
                      <span className="text-[#a0a1a5] text-sm font-light">
                        {item.label}
                      </span>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>

          {/* House rules */}
          <div>
            <RevealWrapper delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-[#f2f2f0] tracking-tight mb-12">
                house rules
              </h2>
            </RevealWrapper>

            <div className="flex flex-col gap-0 border border-white/[0.06]">
              {rules.map((item, i) => {
                const Icon = item.icon;
                return (
                  <RevealWrapper key={item.label} delay={i * 60}>
                    <div
                      className={`flex items-center gap-4 p-6 ${
                        i < rules.length - 1 ? "border-b border-white/[0.06]" : ""
                      }`}
                    >
                      <Icon
                        size={20}
                        weight="light"
                        className="text-[#606065] shrink-0"
                      />
                      <span className="text-[#a0a1a5] text-sm font-light">
                        {item.label}
                      </span>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>

            {/* Check-in details */}
            <RevealWrapper delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "check-in", value: "4:00 PM" },
                  { label: "check-out", value: "10:00 AM" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 border border-white/[0.06]"
                  >
                    <p className="label text-[#606065] mb-2">{item.label}</p>
                    <p className="text-2xl font-light text-[#f2f2f0]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
