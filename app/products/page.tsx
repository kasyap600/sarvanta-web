import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Sprout, Settings, Package, Globe2, Layers, CheckCircle, ShoppingBag, Factory, Tag, UtensilsCrossed, ShoppingCart, Truck } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ProductCategories from "@/components/ProductCategories";

export const metadata = {
  title: "Products — Sarvanta Global",
  description: "Browse our premium Indian agricultural commodities: Red Chillies, Black Pepper, White Pepper, Moringa Powder, Jaggery Powder, and Dehydrated Vegetable Powders.",
};

const qualityStandards = [
  { icon: Sprout,      title: "Premium Indian Origin",    desc: "Sourced from the best growing regions across India." },
  { icon: Settings,    title: "Machine Cleaned & Sorted", desc: "Ensures purity, removes impurities and foreign particles." },
  { icon: CheckCircle, title: "Hygienically Processed",   desc: "Processed under strict hygiene and quality control conditions." },
  { icon: Package,     title: "Export-Ready Packaging",   desc: "Packed to retain freshness and quality during transit." },
  { icon: Layers,      title: "Flexible Specifications",  desc: "Customized grades and packaging as per buyer requirements." },
  { icon: Globe2,      title: "Bulk Supply Capability",   desc: "Consistent supply for large volumes around the world." },
  { icon: CheckCircle, title: "Consistent Quality",       desc: "Uniform quality and specifications in every shipment." },
];

const industries = [
  { icon: ShoppingBag,    title: "Food Processing",        desc: "Supplying high quality ingredients for food manufacturers." },
  { icon: Factory,        title: "Industrial Ingredients", desc: "Reliable ingredients for industrial and commercial use." },
  { icon: Tag,            title: "Private Label",          desc: "Tailored solutions for private label brands worldwide." },
  { icon: UtensilsCrossed,title: "Hotels & Restaurants",   desc: "Premium quality spices and powders for the hospitality industry." },
  { icon: ShoppingCart,   title: "Retail Packaging",       desc: "Suitable for branded retail packaging and distribution." },
  { icon: Truck,          title: "Import & Distribution",  desc: "Supporting importers and distributors across global markets." },
];

const catalogueMap: Record<string, string> = {
  "red-chillies":                 "/images/Product Catalouges/RedChilli.png",
  "black-pepper":                 "/images/Product Catalouges/Black Pepper.png",
  "white-pepper":                 "/images/Product Catalouges/White Pepper.png",
  "moringa-powder":               "/images/Product Catalouges/Moringa Powder.png",
  "jaggery-powder":               "/images/Product Catalouges/Jaggery Powder.png",
  "dehydrated-vegetable-powders": "/images/brochure.webp",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#0B1120] min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/Home Page - Images/08-product-vegetable-powders-clear.webp" alt="Premium spices and powders" fill className="object-cover object-right" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] from-30% via-[#0B1120]/40 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/40 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="relative w-full px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#C9A84C]" /> Our Products
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
              Premium Agricultural
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-[#C9A84C] leading-tight mb-4">
              Commodities
            </h1>
            <p className="text-white/70 text-sm font-semibold mb-4">Carefully sourced. Export-ready. Globally trusted.</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mb-8">
              Explore our portfolio of premium Indian spices, natural powders, and dehydrated vegetable powders sourced from trusted growers and processors across India. Every product is prepared with quality, consistency, and international buyer requirements in mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/images/Product%20Portfolio.pdf"
                download
                className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-6 py-3 rounded-sm text-sm tracking-wide"
              >
                <Download size={14} /> Download Product Catalogue
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-sm text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── OUR PRODUCT CATEGORIES ── */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase font-bold text-[#0B1120] mb-2">Our Product Categories</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>

          <ProductCategories />
        </div>
      </div>

      {/* ── PRODUCT QUALITY STANDARDS ── */}
      <div className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase font-bold text-[#0B1120] mb-2">Product Quality Standards</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {qualityStandards.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full border border-[#C9A84C]/40 flex items-center justify-center bg-white shadow-sm">
                    <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[#0B1120] font-semibold text-[11px] leading-snug">{title}</h4>
                  <p className="text-[#0B1120]/45 text-[10px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── DOWNLOAD PRODUCT CATALOGUES ── */}
      <div className="bg-[#F9F6F1] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase font-bold text-[#0B1120] mb-2">Download Product Catalogues</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, i) => {
              const catalogueHref = catalogueMap[product.slug] ?? "/images/brochure.webp";
              return (
                <Reveal key={product.slug} delay={i * 0.07} className="h-full">
                  <div className="group border border-[#E8D5A0]/60 bg-white hover:border-[#C9A84C] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="h-[52px] flex flex-col items-center justify-center px-2 border-b border-[#E8D5A0]/60 text-center leading-tight bg-white">
                      <span className="text-[#0B1120]/50 text-[9px] uppercase tracking-wide">Premium Indian</span>
                      <span className="text-[#0B1120] font-semibold text-[10px] leading-tight">{product.name}</span>
                    </div>
                    <div className="relative h-44 shrink-0 overflow-hidden">
                      <Image src={product.image} alt={product.name} fill className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <a
                      href={catalogueHref}
                      download
                      className="flex items-center justify-center gap-2 bg-[#0B1120] text-white text-[11px] font-semibold py-2.5 group-hover:bg-[#C9A84C] group-hover:text-[#0B1120] transition-colors duration-300"
                    >
                      Download Catalogue <Download size={11} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PACKAGING OPTIONS ── */}
      <div className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase font-bold text-[#0B1120] mb-2">Packaging Options</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="flex flex-wrap items-start justify-center gap-8 lg:gap-14">
            {[
              { label: "25 KG\nPP Bags" },
              { label: "50 KG\nPP Bags" },
              { label: "Jute Bags" },
              { label: "Customized\nPackaging" },
              { label: "Private Labelling\n(Coming Soon)" },
            ].map(({ label }) => (
              <div key={label} className="flex flex-col items-center gap-3 w-28">
                <div className="w-24 h-24 bg-[#F9F6F1] border border-[#E8D5A0]/60 flex items-center justify-center rounded-sm">
                  <Package size={36} className="text-[#C9A84C]" strokeWidth={1.2} />
                </div>
                <span className="text-[#0B1120]/70 text-xs text-center font-medium leading-snug whitespace-pre-line">{label}</span>
              </div>
            ))}
            <div className="flex-1 min-w-[220px] max-w-xs border-l-2 border-[#C9A84C]/30 pl-6 self-center">
              <p className="text-[#0B1120]/60 text-xs leading-relaxed mb-2">Custom packaging available as per customer requirements.</p>
              <p className="text-[#0B1120]/60 text-xs leading-relaxed">We ensure safe packaging to maintain product quality during transit and storage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── INDUSTRIES WE SERVE ── */}
      <div className="bg-[#F9F6F1] border-t border-[#E8D5A0]/40 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-sm tracking-[0.3em] uppercase font-bold text-[#0B1120] mb-2">Industries We Serve</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-white shadow-sm">
                    <Icon size={24} className="text-[#C9A84C]" strokeWidth={1.4} />
                  </div>
                  <h4 className="text-[#0B1120] font-semibold text-xs leading-snug">{title}</h4>
                  <p className="text-[#0B1120]/45 text-[10px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/About Us - Images/08-cta-cargo-ship-background-clear.webp" alt="Export" fill className="object-cover object-center opacity-40 brightness-110" />
          <div className="absolute inset-0 bg-[#0B1120]/55" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3 flex items-center gap-2">
              <span className="h-px w-5 bg-[#C9A84C]" /> Partner With Us
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold text-white mb-3">
              Looking for a Reliable Supply Partner?
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              Tell us your requirements and our team will provide the best quality products with competitive pricing and on-time delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide">
                Request a Quote <ArrowRight size={14} />
              </Link>
              <a href="/images/Product%20Portfolio.pdf" download className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200">
                Download Catalogue <Download size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
}
