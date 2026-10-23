import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Package } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import MarqueeTicker from "@/components/MarqueeTicker";
import PowderGrid from "@/components/PowderGrid";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.headline} — Sarvanta Global`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const hasGradeSpecs = product.grades.some((g) => g.specs);

  return (
    <div>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-[100px]"
          style={{ background: product.heroColor }}
        />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-cormorant)] text-[260px] font-bold text-white/4 select-none leading-none pr-8">
          {product.name.charAt(0)}
        </span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <Reveal className="flex-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-blue-200/40 hover:text-[#C9A84C] transition-colors text-xs tracking-wide mb-8"
              >
                <ArrowLeft size={12} /> Products
              </Link>
              <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-semibold mb-3">
                {product.category} · Origin: {product.origin}
              </p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-semibold text-white mb-3 leading-tight">
                {product.headline}
              </h1>
              <div className="ornament max-w-[180px] mb-5">
                <span className="text-[#C9A84C]/60 text-xs">✦</span>
              </div>
              <p className="text-blue-200/40 text-sm mb-2 tracking-wide italic">{product.tagline}</p>
              <p className="text-blue-200/50 max-w-2xl leading-relaxed text-sm mt-4">{product.description}</p>
            </Reveal>

            {product.image && (
              <Reveal direction="left" className="lg:w-80 xl:w-96 shrink-0">
                <div className="relative w-full h-64 lg:h-80 overflow-hidden border border-[#C9A84C]/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />
                </div>
              </Reveal>
            )}
          </div>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <MarqueeTicker />

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main col */}
          <div className="lg:col-span-2 space-y-12">

            {/* Grades */}
            <Reveal>
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#0B1120] mb-2">
                  Available {hasGradeSpecs ? "Varieties" : "Grades"}
                </h2>
                <div className="ornament max-w-[140px] mb-7">
                  <span className="text-[#C9A84C]/50 text-xs">✦</span>
                </div>
                {slug === "dehydrated-vegetable-powders" ? (
                  <PowderGrid />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.grades.map((grade) => (
                      <div
                        key={grade.name}
                        className="card-gold-top bg-white border border-[#E8D5A0]/60 p-6 hover:shadow-md transition-shadow duration-200"
                      >
                        <h3 className="font-semibold text-[#0B1120] text-sm leading-snug mb-2 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                          {grade.name}
                        </h3>
                        {grade.description && (
                          <p className="text-[#0B1120]/50 text-xs leading-relaxed pl-3.5">{grade.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Comparison table */}
            {hasGradeSpecs && (
              <Reveal delay={0.1}>
                <div>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#0B1120] mb-2">
                    Product Specification Sheet
                  </h2>
                  <div className="ornament max-w-[140px] mb-7">
                    <span className="text-[#C9A84C]/50 text-xs">✦</span>
                  </div>
                  <div className="border border-[#E8D5A0]/60 overflow-x-auto">
                    <table className="w-full text-xs min-w-[600px]">
                      <thead>
                        <tr style={{ background: "linear-gradient(90deg, #0B1120, #0B1530)" }}>
                          <th className="text-left px-5 py-3.5 font-semibold tracking-[0.1em] text-[#C9A84C] uppercase text-[10px]">
                            Parameters
                          </th>
                          {product.grades.map((g) => (
                            <th key={g.name} className="text-center px-4 py-3.5 font-semibold text-white tracking-wide whitespace-nowrap text-[10px]">
                              {g.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(product.grades[0].specs ?? {}).map((param, i) => (
                          <tr
                            key={param}
                            className={`border-b border-[#E8D5A0]/40 transition-colors hover:bg-[#C9A84C]/5 ${
                              i % 2 === 0 ? "bg-[#FAF5EE]/60" : "bg-white"
                            }`}
                          >
                            <td className="px-5 py-3 font-semibold text-[#0B1120] text-[11px] tracking-wide">{param}</td>
                            {product.grades.map((g) => (
                              <td key={g.name} className="px-4 py-3 text-center text-[#0B1120]/60">
                                {g.specs?.[param] ?? "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-[#0B1120]/40 text-[10px] px-5 py-3 bg-[#FAF5EE]/40 border-t border-[#E8D5A0]/40">
                      Note: Specifications are typical values. Actual values may vary slightly from lot to lot.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Specs */}
            <Reveal delay={0.15}>
              <div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#0B1120] mb-2">
                  Product Specifications
                </h2>
                <div className="ornament max-w-[140px] mb-7">
                  <span className="text-[#C9A84C]/50 text-xs">✦</span>
                </div>
                <div className="border border-[#E8D5A0]/60 overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], i) => (
                        <tr
                          key={key}
                          className={`border-b border-[#E8D5A0]/40 last:border-0 hover:bg-[#C9A84C]/5 transition-colors ${
                            i % 2 === 0 ? "bg-[#FAF5EE]/60" : "bg-white"
                          }`}
                        >
                          <td className="px-6 py-3.5 font-semibold text-[#0B1120] text-xs tracking-[0.1em] uppercase w-52">{key}</td>
                          <td className="px-6 py-3.5 text-[#0B1120]/60 text-sm">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            {product.qualityPoints.length > 0 && (
              <Reveal direction="left" delay={0.1}>
                <div className="card-gold-top bg-white border border-[#E8D5A0]/60 p-6 shadow-sm">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-5 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#C9A84C]" /> Quality Assurance
                  </h3>
                  <ul className="space-y-3">
                    {product.qualityPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[#0B1120]/60 text-xs">
                        <CheckCircle size={12} className="text-[#C9A84C] mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {product.packaging.length > 0 && (
              <Reveal direction="left" delay={0.2}>
                <div className="card-gold-top bg-white border border-[#E8D5A0]/60 p-6 shadow-sm">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-5 flex items-center gap-2">
                    <Package size={12} className="text-[#C9A84C]" /> Packaging Options
                  </h3>
                  <ul className="space-y-3">
                    {product.packaging.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[#0B1120]/60 text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {product.applications.length > 0 && (
              <Reveal direction="left" delay={0.3}>
                <div className="card-gold-top bg-white border border-[#E8D5A0]/60 p-6 shadow-sm">
                  <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-5 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#C9A84C]" /> Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-[#FAF5EE] text-[#0B1120]/60 text-[10px] px-3 py-1.5 border border-[#E8D5A0] tracking-wide"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal direction="left" delay={0.4}>
              <div
                className="relative p-7 overflow-hidden"
                style={{ background: "linear-gradient(145deg, #0B1120, #0B1530)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="relative">
                  <p className="text-[#C9A84C] text-[9px] tracking-[0.3em] uppercase font-semibold mb-2">Get a Quote</p>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white mb-2">
                    Interested in {product.name}?
                  </h3>
                  <p className="text-blue-200/40 text-xs leading-relaxed mb-5">
                    Send us your requirements and receive a detailed quote within 24 hours.
                  </p>
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="btn-gold flex items-center justify-center gap-2 text-[#0B1120] text-sm font-semibold px-5 py-2.5 rounded-sm tracking-wide w-full"
                  >
                    Request a Quote <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </div>
  );
}
