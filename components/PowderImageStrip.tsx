"use client";

import Image from "next/image";

const powders = [
  "Tomato powder",
  "Potato Powder",
  "Spinach Powder",
  "Beetroot Powder",
  "Arrowroot Powder",
  "Ginger Powder",
  "Garlic Powder",
  "Lemon Powder",
  "Mint Powder",
  "Carrot Powder",
  "Tamarind Powder",
  "Red Onion Powder",
  "White Onion Powder",
];

export default function PowderImageStrip() {
  const doubled = [...powders, ...powders];

  return (
    <div className="relative overflow-hidden bg-[#0B1120] py-4 select-none border-y border-[#C9A84C]/10">
      <div className="flex animate-marquee w-max gap-3">
        {doubled.map((name, i) => (
          <div key={`${name}-${i}`} className="relative shrink-0 w-28 h-28 overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-colors duration-200 group">
            <Image
              src={`/images/Dehydrated Powders/${name}.png`}
              alt={name === "Tomato powder" ? "Tomato Powder" : name}
              fill
              className="object-cover brightness-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 to-transparent" />
            <span className="absolute bottom-1.5 left-0 right-0 text-center text-white/80 text-[8px] font-semibold tracking-wide px-1 leading-tight">
              {name === "Tomato powder" ? "Tomato Powder" : name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
