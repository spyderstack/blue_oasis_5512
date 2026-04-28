import { BEDROOMS } from "@/lib/property-data";

export default function Bedrooms() {
  return (
    <section id="bedrooms" className="section-pad bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="teal-line" />
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-teal)] mb-3">Sleeping Arrangements</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)]">
            Rest well, <em>every night</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BEDROOMS.map((room, i) => (
            <div
              key={room.name}
              className={`reveal delay-${i + 1} bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6 lg:p-7`}
            >
              <div className="text-3xl mb-4">{room.icon}</div>
              <h3 className="text-base font-medium text-[var(--color-text)] mb-1">{room.name}</h3>
              <p className="text-xs text-[var(--color-teal)] mb-3 tracking-wide">{room.bed}</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{room.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
