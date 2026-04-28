import {
  Sun, Armchair, WifiHigh, Car, PawPrint,
  Waves, TreePalm, Buildings, MusicNote, CookingPot,
} from "@phosphor-icons/react/dist/ssr";
import { AMENITY_CATEGORIES, NEARBY } from "@/lib/property-data";

// Map icon string names to components
const ICON_MAP: Record<string, React.ElementType> = {
  Sun, Sofa: Armchair, WifiHigh, Car, PawPrint, CookingPot,
  Waves, TreePalm, Buildings, MusicNote,
};

export default function Amenities() {
  return (
    <section id="amenities" className="section-pad bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">Amenities</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)]">
            Everything you <em>need</em>
          </h2>
        </div>

        {/* Amenity Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AMENITY_CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Sun;
            return (
              <div
                key={cat.label}
                className={`amenity-card reveal delay-${Math.min(i + 1, 6)} bg-[var(--color-surface)] rounded-2xl p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[rgba(78,179,200,0.1)] flex items-center justify-center">
                    <Icon size={18} color="var(--color-teal)" weight="light" />
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-text)]">
                    {cat.label}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-[var(--color-teal)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Nearby section */}
        <div className="reveal mt-20">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">Explore Nearby</p>
          <h2 className="font-display text-3xl lg:text-4xl text-[var(--color-text)] mb-10">
            Bradenton at your <em>doorstep</em>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {NEARBY.map((spot, i) => {
              const Icon = ICON_MAP[spot.icon] ?? Sun;
              return (
                <div
                  key={spot.name}
                  className={`reveal delay-${Math.min(i + 1, 5)} bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 flex flex-col gap-3`}
                >
                  <Icon size={20} color="var(--color-gold)" weight="light" />
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{spot.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">{spot.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
