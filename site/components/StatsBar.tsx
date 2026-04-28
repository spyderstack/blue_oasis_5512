import { Waves, Users, Door, Shower } from "@phosphor-icons/react/dist/ssr";
import { PROPERTY } from "@/lib/property-data";

const STATS = [
  { icon: Door, value: PROPERTY.bedrooms.toString(), label: "Bedrooms" },
  { icon: Shower, value: PROPERTY.bathrooms.toString(), label: "Bathrooms" },
  { icon: Users, value: PROPERTY.guests.toString(), label: "Guests Max" },
  { icon: Waves, value: "9 min", label: "To the Beach" },
];

export default function StatsBar() {
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`stat-item flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-4 px-6 lg:px-10 py-7 lg:py-8 ${
                i % 2 === 0 ? "border-r border-[var(--color-border)]" : ""
              } lg:border-r lg:last:border-r-0`}
            >
              <div className="mt-0.5">
                <Icon size={22} color="var(--color-teal)" weight="light" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-light text-[var(--color-text)] leading-none">{value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
