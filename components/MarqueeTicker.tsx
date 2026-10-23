"use client";

const items = [
  "Black Pepper",
  "White Pepper",
  "Red Chillies",
  "Dehydrated Vegetable Powders",
  "Premium Quality",
  "India Origin",
  "Machine Cleaned",
  "Hygienically Packed",
  "Global Export",
  "Trusted Sourcing",
  "Custom Packaging",
];

export default function MarqueeTicker() {
  // Duplicate items so the scroll looks infinite
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#C9A84C] py-3 select-none">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-3 px-6 text-[#0B1120] text-[11px] font-semibold tracking-[0.25em] uppercase">
            {item}
            <span className="text-[#0B1120]/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
