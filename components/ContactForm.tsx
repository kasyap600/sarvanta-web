"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Quantity is required"),
  packaging: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) setValue("product", product);
  }, [searchParams, setValue]);

  async function onSubmit(data: FormValues) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at info@sarvantaglobal.in");
    }
  }

  if (submitted) {
    return (
      <div className="relative bg-[#1a1a1a] p-14 text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative">
          <div className="w-14 h-14 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={24} className="text-[#C9A84C]" />
          </div>
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white mb-2">
            Inquiry Received
          </h3>
          <div className="ornament max-w-[120px] mx-auto mb-4">
            <span className="text-[#C9A84C]/60 text-xs">✦</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out. We will respond within 24 hours with pricing and product details.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#FAF5EE] border border-[#E8D5A0] px-4 py-3 text-sm text-[#0B1120] placeholder:text-[#0B1120]/30 focus:outline-none focus:border-[#C9A84C] focus:bg-white transition-colors duration-200";
  const labelClass = "block text-[10px] font-semibold text-[#0B1120] tracking-[0.2em] uppercase mb-2";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-white border border-[#E8D5A0]/60 p-8 md:p-10"
      style={{ borderTop: "2px solid #C9A84C" }}
    >
      <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#1a1a1a] mb-2">
        Inquiry Form
      </h2>
      <div className="ornament max-w-[120px] mb-8">
        <span className="text-[#C9A84C]/50 text-xs">✦</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} placeholder="Your name" className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input {...register("company")} placeholder="Your company" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input {...register("phone")} placeholder="+1 234 567 8900" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Product *</label>
          <select {...register("product")} className={inputClass}>
            <option value="">Select a product</option>
            <option value="black-pepper">Black Pepper</option>
            <option value="white-pepper">White Pepper</option>
            <option value="red-chillies">Red Chillies</option>
            <option value="dehydrated-vegetable-powders">Dehydrated Vegetable Powders</option>
            <option value="multiple">Multiple Products</option>
          </select>
          {errors.product && <p className={errorClass}>{errors.product.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Quantity Required *</label>
          <input {...register("quantity")} placeholder="e.g. 5 MT per month" className={inputClass} />
          {errors.quantity && <p className={errorClass}>{errors.quantity.message}</p>}
        </div>
      </div>

      <div className="mb-5">
        <label className={labelClass}>Preferred Packaging</label>
        <input {...register("packaging")} placeholder="e.g. 25 KG PP bags, custom labeling" className={inputClass} />
      </div>

      <div className="mb-8">
        <label className={labelClass}>Additional Requirements</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Grade preferences, destination port, certification requirements, etc."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full text-[#1a1a1a] font-semibold py-3.5 rounded-sm tracking-wide text-sm flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" /> Sending…
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
}
