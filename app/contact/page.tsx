import { Suspense } from "react";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export const metadata = {
  title: "Contact & Quote Request — Sarvanta Global",
  description: "Request a quote for premium Indian spices. Contact Sarvanta Global, Bangalore.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">Get in Touch</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white mb-3 leading-tight">
            Request a Quote
          </h1>
          <div className="ornament max-w-[160px] mb-6">
            <span className="text-[#C9A84C]/60 text-xs">✦</span>
          </div>
          <p className="text-blue-200/50 max-w-xl leading-relaxed text-sm">
            Tell us your requirements including product, quantity, and packaging preference and we will respond with pricing and specifications within 24 hours.
          </p>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="h-96 bg-white border border-[#E8D5A0]/60 animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="space-y-5">
            <div className="relative p-8 overflow-hidden rounded-sm"
              style={{ background: "linear-gradient(145deg, #0B1120, #0B1530)" }}>
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A84C] mb-6">Contact Details</h3>
                <ul className="space-y-6">
                  {[
                    { icon: User, label: "Contact Person", value: "Kumar", href: undefined },
                    { icon: Phone, label: "Phone / WhatsApp", value: "+91 99004 22441", href: "tel:+919900422441" },
                    { icon: Mail, label: "Email", value: "info@sarvantaglobal.in", href: "mailto:info@sarvantaglobal.in" },
                    { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India", href: undefined },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                        <Icon size={13} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-blue-200/30 text-[10px] tracking-[0.2em] uppercase mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-blue-100/70 text-sm hover:text-[#C9A84C] transition-colors">{value}</a>
                        ) : (
                          <p className="text-blue-100/70 text-sm">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-[#25D366]/40 flex items-center justify-center flex-shrink-0 bg-[#25D366]/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <p className="text-blue-200/30 text-[10px] tracking-[0.2em] uppercase mb-1">WhatsApp</p>
                      <a href={`https://wa.me/919900422441?text=${encodeURIComponent("Hi, I'm interested in your products. Could you please share more details?")}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm hover:text-[#1ebe5d] transition-colors">+91 99004 22441</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-gold-top bg-white border border-[#E8D5A0]/60 p-8">
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-[#C9A84C]" /> What Happens Next?
              </h3>
              <ol className="space-y-5">
                {[
                  "We receive your inquiry and review your requirements.",
                  "Our team prepares pricing and availability details.",
                  "We send you a detailed quote within 24 hours.",
                  "We discuss terms and arrange a sample if needed.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #0B1120, #0B1530)", border: "1px solid rgba(201,168,76,0.3)" }}>
                      <span className="text-[#C9A84C] text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-[#0B1120]/60 text-xs leading-relaxed mt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
