const items = [
  { label: "bedrooms", value: "3 BR" },
  { label: "bathrooms", value: "2 BA" },
  { label: "guests", value: "up to 8" },
  { label: "location", value: "Bradenton, FL" },
  { label: "pool", value: "private" },
  { label: "check-in", value: "4:00 PM" },
  { label: "check-out", value: "10:00 AM" },
  { label: "min. stay", value: "2 nights" },
  { label: "bedrooms", value: "3 BR" },
  { label: "bathrooms", value: "2 BA" },
  { label: "guests", value: "up to 8" },
  { label: "location", value: "Bradenton, FL" },
  { label: "pool", value: "private" },
  { label: "check-in", value: "4:00 PM" },
  { label: "check-out", value: "10:00 AM" },
  { label: "min. stay", value: "2 nights" },
];

export default function StatsBar() {
  return (
    <div className="w-full overflow-hidden border-y border-white/[0.06] bg-[#111112]">
      <div className="ticker-track py-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-8 shrink-0"
          >
            <div className="flex flex-col items-start">
              <span className="label text-[#606065]">{item.label}</span>
              <span className="text-[#f2f2f0] text-sm font-light tracking-wide mt-0.5">
                {item.value}
              </span>
            </div>
            <div className="w-px h-6 bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
