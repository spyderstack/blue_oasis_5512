const items = [
  { label: "bedrooms", value: "4 BR" },
  { label: "bathrooms", value: "3 BA" },
  { label: "guests", value: "up to 8" },
  { label: "location", value: "Miami Beach, FL" },
  { label: "pool", value: "private" },
  { label: "check-in", value: "4:00 PM" },
  { label: "check-out", value: "11:00 AM" },
  { label: "min. stay", value: "3 nights" },
  { label: "bedrooms", value: "4 BR" },
  { label: "bathrooms", value: "3 BA" },
  { label: "guests", value: "up to 8" },
  { label: "location", value: "Miami Beach, FL" },
  { label: "pool", value: "private" },
  { label: "check-in", value: "4:00 PM" },
  { label: "check-out", value: "11:00 AM" },
  { label: "min. stay", value: "3 nights" },
];

export default function StatsBar() {
  return (
    <div className="w-full overflow-hidden bg-[#1AAEDB] border-y border-[#0F8FB8]">
      <div className="ticker-track py-3.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-6 shrink-0">
            <div className="flex items-center gap-3">
              <span className="label text-white/60 tracking-[0.15em]">{item.label}</span>
              <span className="text-white text-sm font-semibold tracking-wide">
                {item.value}
              </span>
            </div>
            <div className="w-px h-4 bg-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
