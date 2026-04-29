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
  { icon: Bed, label: "4 King Bedrooms" },
  { icon: ForkKnife, label: "Fully Equipped Kitchen" },
  { icon: WifiHigh, label: "High-Speed WiFi" },
  { icon: Car, label: "Private Parking" },
  { icon: Thermometer, label: "Central A/C & Heat" },
  { icon: Television, label: "Smart TVs in All Rooms" },
  { icon: Coffee, label: "Nespresso Machine" },
];

const rules = [
  { icon: PawPrint, label: "No pets allowed" },
  { icon: Cigarette, label: "No smoking indoors" },
  { icon: Shield, label: "No parties or events" },
  { icon: FirstAid, label: "First Aid kit on site" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-36 bg-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <RevealWrapper>
          <div className="flex items-center gap-3 mb-16">
            <span className="accent-dot" />
            <p className="label text-[#1AAEDB] tracking-[0.2em]">amenities</p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Amenities grid */}
          <div>
            <RevealWrapper>
              <h2 className="text-3xl md:text-4xl font-light text-[#0C1B33] tracking-tight mb-12">
                everything you need,
                <br />
                <span className="text-[#1AAEDB] font-semibold">
                  nothing you don&apos;t
                </span>
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#0C1B33]/10 overflow-hidden rounded-sm">
              {amenities.map((item, i) => {
                const Icon = item.icon;
                const isLastRow = i >= amenities.length - 2;
                const isRight = i % 2 === 1;
                return (
                  <RevealWrapper key={item.label} delay={i * 50}>
                    <div
                      className={`flex items-center gap-4 p-5 bg-white hover:bg-[#F0F9FF] transition-colors group ${
                        !isLastRow ? "border-b border-[#0C1B33]/08" : ""
                      } ${!isRight ? "sm:border-r border-[#0C1B33]/08" : ""}`}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#E8F6FC] flex items-center justify-center shrink-0 group-hover:bg-[#1AAEDB] transition-colors">
                        <Icon
                          size={17}
                          weight="regular"
                          className="text-[#1AAEDB] group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="text-[#0C1B33] text-sm font-light">
                        {item.label}
                      </span>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>

          {/* House rules + check-in */}
          <div>
            <RevealWrapper delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-[#0C1B33] tracking-tight mb-12">
                house rules
              </h2>
            </RevealWrapper>

            <div className="border border-[#0C1B33]/10 overflow-hidden rounded-sm mb-6">
              {rules.map((item, i) => {
                const Icon = item.icon;
                return (
                  <RevealWrapper key={item.label} delay={i * 60}>
                    <div
                      className={`flex items-center gap-4 p-5 bg-white ${
                        i < rules.length - 1 ? "border-b border-[#0C1B33]/08" : ""
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-[#FFF2EE] flex items-center justify-center shrink-0">
                        <Icon
                          size={17}
                          weight="regular"
                          className="text-[#F4845F]"
                        />
                      </div>
                      <span className="text-[#0C1B33] text-sm font-light">
                        {item.label}
                      </span>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>

            {/* Check-in/out */}
            <RevealWrapper delay={200}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "check-in", value: "4:00 PM" },
                  { label: "check-out", value: "11:00 AM" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 bg-[#0C1B33] rounded-sm"
                  >
                    <p className="label text-[#1AAEDB] mb-2 tracking-[0.15em]">{item.label}</p>
                    <p className="text-2xl font-light text-white">
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
