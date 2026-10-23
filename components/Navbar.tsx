"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sprout, Layers, Package } from "lucide-react";

const productDropdown = [
  { href: "/products/spices",                    label: "Premium Spices",               desc: "Red Chillies, Black Pepper, White Pepper", icon: Sprout  },
  { href: "/products/powders",                   label: "Natural Powders",              desc: "Moringa Powder, Jaggery Powder",            icon: Layers  },
  { href: "/products/dehydrated-vegetable-powders", label: "Vegetable Powders",        desc: "13+ dehydrated vegetable powders",          icon: Package },
];

const navLinks = [
  { href: "/",        label: "Home" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/about",   label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const dropdownRef               = useRef<HTMLDivElement>(null);
  const pathname                  = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#060D1A]/90 backdrop-blur-md ${
        scrolled ? "shadow-[0_2px_32px_rgba(0,0,0,0.6),0_1px_0_rgba(201,168,76,0.08)]" : ""
      }`}
    >
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Logo.png"
              alt="Sarvanta Global"
              width={260}
              height={86}
              className="h-[80px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      className={`relative inline-flex items-center gap-1 px-4 py-2 text-[13px] tracking-wide transition-colors duration-200 ${
                        active ? "text-[#C9A84C]" : "text-blue-200/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={12} className={`opacity-60 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A84C]" />
                      )}
                    </button>

                    {dropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#060D1A] border border-[#C9A84C]/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
                        <div className="p-2">
                          <Link
                            href="/products"
                            onClick={() => setDropdown(false)}
                            className="flex items-center gap-2 px-3 py-2 text-[11px] text-[#C9A84C]/60 hover:text-[#C9A84C] tracking-[0.2em] uppercase font-semibold transition-colors border-b border-white/5 mb-1"
                          >
                            View All Products
                          </Link>
                          {productDropdown.map(({ href, label, desc, icon: Icon }) => (
                            <Link
                              key={href}
                              href={href}
                              onClick={() => setDropdown(false)}
                              className="flex items-start gap-3 px-3 py-3 hover:bg-[#C9A84C]/5 transition-colors group rounded-sm"
                            >
                              <div className="w-7 h-7 rounded-full border border-[#C9A84C]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#C9A84C]/60">
                                <Icon size={13} className="text-[#C9A84C]" />
                              </div>
                              <div>
                                <p className="text-white text-[12px] font-semibold leading-tight">{label}</p>
                                <p className="text-blue-200/40 text-[10px] mt-0.5 leading-snug">{desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1 px-4 py-2 text-[13px] tracking-wide transition-colors duration-200 ${
                    active ? "text-[#C9A84C]" : "text-blue-200/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A84C]" />
                  )}
                </Link>
              );
            })}
            <div className="w-px h-5 bg-[#1A2D4A] mx-2" />
            <Link
              href="/contact"
              className="btn-gold text-[#0B1120] text-[13px] font-semibold px-5 py-2 rounded-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-blue-200/60 hover:text-white transition-colors p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#060D1A] border-t border-[#C9A84C]/15 px-4 pt-3 pb-5">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if (link.hasDropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileProducts(!mobileProducts)}
                    className={`flex items-center justify-between w-full py-3 text-sm border-b border-[#142035] transition-colors ${
                      active ? "text-[#C9A84C]" : "text-blue-200/60"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {active && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                      {link.label}
                    </span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${mobileProducts ? "rotate-180" : ""}`} />
                  </button>
                  {mobileProducts && (
                    <div className="pl-4 py-2 border-b border-[#142035] space-y-1">
                      <Link href="/products" onClick={() => setOpen(false)} className="block py-2 text-[11px] text-[#C9A84C]/60 tracking-[0.2em] uppercase font-semibold">
                        View All Products
                      </Link>
                      {productDropdown.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm text-blue-200/60 hover:text-white transition-colors"
                        >
                          <Icon size={12} className="text-[#C9A84C]" />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 py-3 text-sm border-b border-[#142035] last:border-0 transition-colors ${
                  active ? "text-[#C9A84C]" : "text-blue-200/60 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {active && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 btn-gold block text-center text-[#0B1120] text-sm font-semibold px-5 py-2.5 rounded-sm tracking-wide"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
