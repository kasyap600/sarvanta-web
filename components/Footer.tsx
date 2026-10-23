import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Download, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products/red-chillies", label: "Red Chillies" },
  { href: "/products/black-pepper", label: "Black Pepper" },
  { href: "/products/white-pepper", label: "White Pepper" },
  { href: "/products/moringa-powder", label: "Moringa Powder" },
  { href: "/products/jaggery-powder", label: "Jaggery Powder" },
  { href: "/products/dehydrated-vegetable-powders", label: "Dehydrated Vegetable Powders" },
  { href: "/products", label: "All Products" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-blue-100/60 relative overflow-hidden">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-4 w-fit">
              <Image
                src="/images/Logo.png"
                alt="Sarvanta Global"
                width={220}
                height={73}
                className="h-[64px] w-auto object-contain"
              />
            </Link>
            <p className="text-blue-200/35 text-xs leading-relaxed max-w-xs mb-5">
              Sarvanta Global is a premium agricultural commodities company connecting global buyers with responsibly sourced products from India through quality, reliability and long-term partnerships.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919900422441"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C9A84C]/20 flex items-center justify-center text-blue-200/40 hover:text-[#25D366] hover:border-[#25D366]/60 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={13} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Our Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/images/Product%20Portfolio.pdf"
                    download
                    className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group"
                  >
                    <Download size={13} className="text-[#C9A84C]" />
                    Product Catalogue
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <a href="tel:+919900422441" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    +91 99004 22441
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#25D366" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <a href="https://wa.me/919900422441" target="_blank" rel="noopener noreferrer" className="text-blue-200/40 text-sm hover:text-[#25D366] transition-colors">
                    +91 99004 22441
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <a href="mailto:info@sarvantaglobal.in" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    info@sarvantaglobal.in
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-blue-200/40 text-sm">Bangalore, Karnataka, India</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#142035] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-200/20 text-[11px] tracking-wide">
            © 2026 Sarvanta Global. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-blue-200/20 text-[11px] hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
            <span className="text-blue-200/10">|</span>
            <a href="#" className="text-blue-200/20 text-[11px] hover:text-[#C9A84C] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
