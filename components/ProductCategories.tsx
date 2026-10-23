"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Sprout, Layers, Package, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";

const spices = products.filter((p) => ["red-chillies", "black-pepper", "white-pepper"].includes(p.slug));
const naturalpowders = products.filter((p) => ["moringa-powder", "jaggery-powder"].includes(p.slug));
const vegPowders = [
  { name: "Tomato Powder",      file: "Tomato powder" },
  { name: "Potato Powder",      file: "Potato Powder" },
  { name: "Spinach Powder",     file: "Spinach Powder" },
  { name: "Beetroot Powder",    file: "Beetroot Powder" },
  { name: "Arrowroot Powder",   file: "Arrowroot Powder" },
  { name: "Ginger Powder",      file: "Ginger Powder" },
  { name: "Garlic Powder",      file: "Garlic Powder" },
  { name: "Lemon Powder",       file: "Lemon Powder" },
  { name: "Mint Powder",        file: "Mint Powder" },
  { name: "Carrot Powder",      file: "Carrot Powder" },
  { name: "Tamarind Powder",    file: "Tamarind Powder" },
  { name: "Red Onion Powder",   file: "Red Onion Powder" },
  { name: "White Onion Powder", file: "White Onion Powder" },
];

const PREVIEW_COUNT = 3;

function CategoryCard({
  icon: Icon,
  title,
  desc,
  href,
  cta,
  delay,
  items,
  cols,
  renderItem,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
  cta: string;
  delay: number;
  items: unknown[];
  cols: string;
  renderItem: (item: unknown, i: number) => React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);

  return (
    <Reveal delay={delay}>
      <div className="border border-[#E8D5A0]/60 p-6 flex flex-col h-full hover:border-[#C9A84C]/60 hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
            <Icon size={16} className="text-[#C9A84C]" />
          </div>
          <h3 className="font-bold text-[#0B1120] text-sm tracking-wide uppercase">{title}</h3>
        </div>
        <p className="text-[#0B1120]/50 text-xs leading-relaxed mb-5">{desc}</p>

        <div className={`grid ${cols} gap-3 mb-4`}>
          {visible.map((item, i) => renderItem(item, i))}
        </div>

        {items.length > PREVIEW_COUNT && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[#C9A84C] text-[11px] font-semibold mb-5 hover:underline w-fit"
          >
            {expanded ? <><ChevronUp size={12} /> Show Less</> : <><ChevronDown size={12} /> View All ({items.length})</>}
          </button>
        )}

        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-[#0B1120] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#C9A84C] hover:text-[#0B1120] transition-colors duration-200"
          >
            {cta} <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Premium Spices */}
      <CategoryCard
        icon={Sprout}
        title="Premium Spices"
        desc="Finest quality Indian spices sourced with care and prepared to meet global standards."
        href="/products/spices"
        cta="View All Spices"
        delay={0.05}
        items={spices}
        cols="grid-cols-3"
        renderItem={(item) => {
          const p = item as (typeof spices)[0];
          return (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col items-center gap-2">
              <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40">
                <Image src={p.image} alt={p.name} fill className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-[#0B1120]/60 text-[10px] text-center leading-tight">{p.name}</span>
            </Link>
          );
        }}
      />

      {/* Natural Powders */}
      <CategoryCard
        icon={Layers}
        title="Natural Powders"
        desc="Wholesome natural powders with rich nutrition and exceptional quality."
        href="/products/powders"
        cta="View All Powders"
        delay={0.1}
        items={naturalpowders}
        cols="grid-cols-2"
        renderItem={(item) => {
          const p = item as (typeof naturalpowders)[0];
          return (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col items-center gap-2">
              <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40">
                <Image src={p.image} alt={p.name} fill className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-[#0B1120]/60 text-[10px] text-center leading-tight">{p.name}</span>
            </Link>
          );
        }}
      />

      {/* Dehydrated Vegetable Powders */}
      <CategoryCard
        icon={Package}
        title="Dehydrated Vegetable Powders"
        desc="A wide range of 13+ dehydrated vegetable powders for diverse food and industrial applications."
        href="/products/dehydrated-vegetable-powders"
        cta="View All Vegetable Powders"
        delay={0.15}
        items={vegPowders}
        cols="grid-cols-3"
        renderItem={(item) => {
          const p = item as (typeof vegPowders)[0];
          return (
            <div key={p.name} className="flex flex-col items-center gap-1.5">
              <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40">
                <Image
                  src={`/images/Dehydrated Powders/${p.file}.png`}
                  alt={p.name}
                  fill
                  className="object-cover brightness-105 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[#0B1120]/60 text-[9px] text-center leading-tight">{p.name}</span>
            </div>
          );
        }}
      />
    </div>
  );
}
