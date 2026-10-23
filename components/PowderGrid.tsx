"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";

const powders = [
  { file: "Tomato powder",      label: "Tomato Powder" },
  { file: "Potato Powder",      label: "Potato Powder" },
  { file: "Spinach Powder",     label: "Spinach Powder" },
  { file: "Beetroot Powder",    label: "Beetroot Powder" },
  { file: "Arrowroot Powder",   label: "Arrowroot Powder" },
  { file: "Ginger Powder",      label: "Ginger Powder" },
  { file: "Garlic Powder",      label: "Garlic Powder" },
  { file: "Lemon Powder",       label: "Lemon Powder" },
  { file: "Mint Powder",        label: "Mint Powder" },
  { file: "Carrot Powder",      label: "Carrot Powder" },
  { file: "Tamarind Powder",    label: "Tamarind Powder" },
  { file: "Red Onion Powder",   label: "Red Onion Powder" },
  { file: "White Onion Powder", label: "White Onion Powder" },
];

export default function PowderGrid() {
  const [active, setActive] = useState<{ file: string; label: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {powders.map(({ file, label }, i) => (
          <Reveal key={label} delay={i * 0.04}>
            <div
              className="group border border-[#E8D5A0]/60 bg-white hover:border-[#C9A84C] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              onClick={() => setActive({ file, label })}
            >
              <div className="h-[44px] flex flex-col items-center justify-center px-2 border-b border-[#E8D5A0]/60 text-center bg-white">
                <span className="text-[#0B1120]/50 text-[9px] uppercase tracking-wide">Dehydrated</span>
                <span className="text-[#0B1120] font-semibold text-[10px] leading-tight">{label}</span>
              </div>
              <div className="relative h-36 overflow-hidden">
                <Image src={`/images/Dehydrated Powders/${file}.png`} alt={label} fill className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-center bg-[#0B1120] text-white text-[11px] font-semibold py-2.5 group-hover:bg-[#C9A84C] group-hover:text-[#0B1120] transition-colors duration-300">
                View Image
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1120]/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8D5A0]/60">
              <div>
                <span className="text-[#0B1120]/40 text-[9px] uppercase tracking-wide">Dehydrated</span>
                <p className="text-[#0B1120] font-semibold text-sm">{active.label}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 flex items-center justify-center border border-[#E8D5A0]/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            {/* Image */}
            <div className="relative w-full aspect-square">
              <Image
                src={`/images/Dehydrated Powders/${active.file}.png`}
                alt={active.label}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
