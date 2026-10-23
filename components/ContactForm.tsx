"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { catalogueGroups, products, productsIn } from "@/lib/products";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  product: z.string().min(1, "Choose a product"),
  quantity: z.string().min(1, "Enter the quantity"),
  packaging: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("product") ?? "";
  const known =
    requested === "multiple" || products.some((product) => product.slug === requested);
  const preset = known ? requested : "";

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: preset },
  });

  useEffect(() => {
    if (preset) setValue("product", preset);
  }, [preset, setValue]);

  async function onSubmit(data: FormValues) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("The form did not send. Email info@sarvantaglobal.in and we will reply.");
    }
  }

  if (submitted) {
    return (
      <div className="border border-line bg-card p-8" role="status">
        <h2 className="font-serif text-3xl">Enquiry received</h2>
        <p className="mt-3 text-ink-soft">
          Thank you. We will reply within 24 hours with price and availability. Samples can be arranged from there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="border border-line bg-card p-5 sm:p-8">
      <h2 className="font-serif text-3xl">Quote form</h2>
      <p className="mt-2 text-sm text-muted">Fields marked * are required.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name?.message}>
          <input id="name" autoComplete="name" className="field" {...register("name")} />
        </Field>
        <Field label="Company" name="company" error={errors.company?.message}>
          <input id="company" autoComplete="organization" className="field" {...register("company")} />
        </Field>
        <Field label="Email" name="email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className="field" {...register("email")} />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone?.message}>
          <input id="phone" type="tel" autoComplete="tel" className="field" {...register("phone")} />
        </Field>
        <Field label="Product" name="product" required error={errors.product?.message}>
          <select id="product" className="field" {...register("product")}>
            <option value="">Select a product</option>
            {catalogueGroups.map((group) => (
              <optgroup key={group.id} label={group.name}>
                {productsIn(group.id).map((product) => (
                  <option key={product.slug} value={product.slug}>
                    {product.name}
                    {product.priority ? " (priority)" : ""}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="multiple">More than one product</option>
          </select>
        </Field>
        <Field label="Quantity" name="quantity" required error={errors.quantity?.message}>
          <input
            id="quantity"
            className="field"
            placeholder="e.g. 5 MT"
            {...register("quantity")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Packing" name="packaging" error={errors.packaging?.message}>
          <input
            id="packaging"
            className="field"
            placeholder="25 kg PP bags, 50 kg, jute, or custom"
            {...register("packaging")}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Anything else" name="message" error={errors.message?.message}>
          <textarea
            id="message"
            rows={4}
            className="field min-h-32 resize-y"
            placeholder="Grade, destination, or private-label notes"
            {...register("message")}
          />
        </Field>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-chilli" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required ? <span className="text-chilli"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-chilli">
          {error}
        </p>
      ) : null}
    </div>
  );
}
