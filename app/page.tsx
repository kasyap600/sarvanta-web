import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Package, Headphones, ShieldCheck, Sprout, Globe2, Users, Truck, Tag } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";
import MarqueeTicker from "@/components/MarqueeTicker";

const HP = "/images/Home Page - Images";

// Homepage-specific product images (higher quality shots)
const productImages: Record<string, string> = {
  "red-chillies":                  `${HP}/03-product-red-chillies-clear.webp`,
  "black-pepper":                  `${HP}/04-product-black-pepper-clear.webp`,
  "white-pepper":                  `${HP}/05-product-white-pepper-clear.webp`,
  "moringa-powder":                `${HP}/06-product-moringa-powder-clear.webp`,
  "jaggery-powder":                `${HP}/07-product-jaggery-powder-clear.webp`,
  "dehydrated-vegetable-powders":  `${HP}/08-product-vegetable-powders-clear.webp`,
};

const trustBadges = [
  { icon: Leaf,       title: "Premium Products",        desc: "Carefully sourced agricultural commodities that meet international standards." },
  { icon: Package,    title: "Export-Ready Packaging",  desc: "Customized packaging solutions for bulk, retail and private label requirements." },
  { icon: Headphones, title: "Responsive Support",      desc: "Prompt quotations and dedicated assistance for a seamless buyer experience." },
  { icon: ShieldCheck,title: "Quality Focus",           desc: "Strict quality checks and ethical practices to ensure consistent product excellence." },
];

const whyPoints = [
  { icon: Sprout,     title: "Trusted Sourcing",    desc: "Partnering with carefully selected growers and processors across India." },
  { icon: ShieldCheck,title: "Consistent Quality",  desc: "Products sourced and processed to meet international quality expectations." },
  { icon: Package,    title: "Flexible Packaging",  desc: "Bulk and customized packaging solutions designed for global buyers." },
  { icon: Truck,      title: "Reliable Supply",     desc: "Dependable sourcing and timely deliveries through trusted supply networks." },
  { icon: Tag,        title: "Competitive Pricing", desc: "Transparent pricing backed by efficient procurement and long-term relationships." },
  { icon: Headphones, title: "Responsive Support",  desc: "Prompt quotations, dedicated communication, and customer-focused service." },
];

const aboutIcons = [
  { icon: Sprout,     label: "Ethical Sourcing" },
  { icon: Globe2,     label: "International Standards" },
  { icon: ShieldCheck,label: "Transparent Process" },
  { icon: Users,      label: "Customer First Approach" },
];


export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0B1120] min-h-[90vh] flex items-center">
        {/* Right-side hero image */}
        <div className="absolute inset-0">
          <Image
            src={`${HP}/01-hero-commerce-scene-clear.webp`}
            alt="Premium agricultural commodities export"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Left fade for text readability, right side stays bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] from-30% via-[#0B1120]/40 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/40 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold">
                  Connecting Markets. Creating Opportunities.
                </span>
                <div className="h-px w-8 bg-[#C9A84C]" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
                Premium<br />
                <span className="text-[#C9A84C]">Agricultural</span><br />
                <span className="text-[#C9A84C]">Commodities</span><br />
                from India
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                Sarvanta Global is a premium agricultural commodities company connecting international buyers with responsibly sourced products from India. Through dependable sourcing, uncompromising quality, and customer-focused service, we help businesses build reliable supply partnerships across global markets.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-7 py-3.5 rounded-sm tracking-wide text-sm"
                >
                  Explore Products <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-[#111827] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
            {trustBadges.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex flex-col gap-2 px-8 py-2">
                  <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="text-white text-[11px] font-bold tracking-[0.14em] uppercase mt-1">{title}</h3>
                  <p className="text-white/35 text-[11px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* ── ABOUT / CONNECTING MARKETS ── */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left — farm image, full height */}
            <Reveal direction="right" className="h-full">
              <div className="relative h-[320px] lg:h-full lg:min-h-full min-h-[320px] px-3 py-6 bg-white">
                <div className="relative w-full h-full outline outline-4 outline-white outline-offset-[-12px]">
                  <Image
                    src={`${HP}/02-about-farm-field-clear.webp`}
                    alt="Sarvanta Global farm sourcing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right — text */}
            <Reveal direction="left">
              <div className="flex flex-col justify-center px-8 lg:px-14 py-10">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
                  About Sarvanta Global
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-[#0B1120] leading-tight mb-1">
                  Connecting Markets.
                </h2>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-[#0B1120] leading-tight mb-5">
                  Creating Opportunities.
                </h2>
                <div className="w-10 h-0.5 bg-[#C9A84C] mb-6" />
                <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-3">
                  Sarvanta Global partners with trusted growers and processors across India to deliver premium agricultural commodities to buyers worldwide.
                </p>
                <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-8">
                  We believe successful trade is built on consistency, transparency, and long-term relationships.
                </p>

                <div className="grid grid-cols-4 gap-3 mb-10">
                  {aboutIcons.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-2">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Icon size={28} className="text-[#C9A84C]" strokeWidth={1.3} />
                      </div>
                      <span className="text-[#0B1120]/60 text-[10px] leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#0B1120] text-white font-semibold px-7 py-3.5 text-sm tracking-wide hover:bg-[#1A2D4A] transition-colors duration-200"
                  >
                    Learn More About Us <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PORTFOLIO ── */}
      <section className="bg-[#0B1120] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                  Our Product Portfolio
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-bold text-white leading-snug max-w-xl">
                  Carefully sourced agricultural commodities<br className="hidden md:block" /> that meet international quality standards.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all duration-200 shrink-0"
              >
                View All Products <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.07}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group bg-[#111827] border border-white/5 overflow-hidden hover:border-[#C9A84C]/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={productImages[product.slug] ?? product.image}
                      alt={product.name}
                      fill
                      className="object-cover brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-1 border-t border-white/5">
                    <h3 className="text-white font-bold text-sm leading-tight mb-1">{product.name}</h3>
                    <p className="text-white/40 text-[11px] leading-relaxed flex-1 line-clamp-3">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-[11px] font-semibold mt-3 group-hover:gap-2 transition-all duration-200">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHY GLOBAL BUYERS CHOOSE US ── */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[#0B1120]/60 text-[10px] tracking-[0.45em] uppercase font-semibold text-center mb-12">
              Why Global Buyers Choose Sarvanta Global
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {whyPoints.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-3">
                  <Icon size={34} className="text-[#C9A84C]" strokeWidth={1.2} />
                  <h4 className="text-[#0B1120] font-semibold text-[13px]">{title}</h4>
                  <p className="text-[#0B1120]/45 text-[11px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#0B1120] py-24">
        {/* Split background: globe left, cargo ship right */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative">
            <Image src={`${HP}/09-cta-global-network-clear.webp`} alt="" fill className="object-cover opacity-80 brightness-110" />
            <div className="absolute inset-0 bg-[#0B1120]/25" />
          </div>
          <div className="relative">
            <Image src={`${HP}/10-cta-cargo-ship-clear.webp`} alt="" fill className="object-cover opacity-85 brightness-110" />
            <div className="absolute inset-0 bg-[#0B1120]/20" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/40 via-transparent to-[#0B1120]/40" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              Ready to Source Premium
            </h2>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#C9A84C] leading-tight mb-4">
              Agricultural Commodities?
            </h2>
            <p className="text-white/50 text-sm mb-10">Let&apos;s build a long-term partnership.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-8 py-4 rounded-sm tracking-wide text-sm"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Browse Products <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
