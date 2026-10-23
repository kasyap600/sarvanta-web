import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";
import MarqueeTicker from "@/components/MarqueeTicker";

export const metadata = {
  title: "Natural Powders — Sarvanta Global",
  description: "Browse our premium Indian natural powders: Moringa Powder and Jaggery Powder. Export-ready, pure, and nutritious.",
};

const naturalpowders = products.filter((p) => ["moringa-powder", "jaggery-powder"].includes(p.slug));

export default function PowdersPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px] bg-[#3A6B35]" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-blue-200/40 hover:text-[#C9A84C] transition-colors text-xs tracking-wide mb-8"
            >
              <ArrowLeft size={12} /> Products
            </Link>
            <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-semibold mb-3">
              Category · Natural Powders
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-semibold text-white mb-3 leading-tight">
              Natural Powders
            </h1>
            <div className="ornament max-w-[180px] mb-5">
              <span className="text-[#C9A84C]/60 text-xs">✦</span>
            </div>
            <p className="text-blue-200/50 max-w-2xl leading-relaxed text-sm mt-4">
              Wholesome natural powders with rich nutrition and exceptional quality — shade dried, finely milled, and free from artificial additives for global food and health applications.
            </p>
          </Reveal>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <MarqueeTicker />

      {/* Powder Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {naturalpowders.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.08}>
              <div className="group border border-[#E8D5A0]/60 bg-white hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase font-semibold">
                      {product.category}
                    </span>
                    <h2 className="text-white font-bold text-lg leading-tight">{product.name}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#0B1120]/55 text-xs leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Grades preview */}
                  <div className="mb-5">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#0B1120] mb-3">
                      Available Grades
                    </p>
                    <ul className="space-y-1.5">
                      {product.grades.slice(0, 3).map((grade) => (
                        <li key={grade.name} className="flex items-start gap-2 text-[#0B1120]/55 text-[11px]">
                          <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                          {grade.name}
                        </li>
                      ))}
                      {product.grades.length > 3 && (
                        <li className="text-[#C9A84C] text-[11px] pl-3">+{product.grades.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  {/* Quality points */}
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {product.qualityPoints.slice(0, 3).map((point) => (
                      <span key={point} className="inline-flex items-center gap-1 text-[#0B1120]/50 text-[10px]">
                        <CheckCircle size={10} className="text-[#C9A84C]" /> {point}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 bg-[#0B1120] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#C9A84C] hover:text-[#0B1120] transition-colors duration-200"
                    >
                      View Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
