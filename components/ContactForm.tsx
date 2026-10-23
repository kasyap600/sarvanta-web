"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEnquiry } from "@/components/enquiry";
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

function knownSlugs(values: string[]) {
  const known = new Set(products.map((product) => product.slug));
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    if (!known.has(value) || seen.has(value)) continue;
    seen.add(value);
    result.push(value);
  }
  return result;
}

function productName(slug: string) {
  return products.find((product) => product.slug === slug)?.name ?? slug;
}

function enquiryNote(slugs: string[]) {
  return `Products in this enquiry:\n${slugs.map((slug) => `- ${productName(slug)}`).join("\n")}`;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requested = searchParams.get("product") ?? "";
  const itemsParam = searchParams.get("items") ?? "";
  const known = requested === "multiple" || products.some((product) => product.slug === requested);
  const preset = known ? requested : "";
  const fromUrl = useMemo(
    () => knownSlugs(itemsParam.split(",").map((part) => part.trim()).filter(Boolean)),
    [itemsParam],
  );

  const { slugs, ready, remove, clear } = useEnquiry();
  const listed = fromUrl.length > 0 ? fromUrl : !requested && ready ? slugs : [];
  const fromBasket = fromUrl.length === 0 && !requested;

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: preset, message: "" },
  });

  const productDirty = Boolean(dirtyFields.product);
  const messageDirty = Boolean(dirtyFields.message);
  const basketKey = slugs.join("|");

  useEffect(() => {
    if (submitted) return;
    if (!requested && fromUrl.length === 0 && !ready) return;
    const next = fromUrl.length > 0 ? fromUrl : !requested ? slugs : [];

    if (!productDirty) {
      if (preset) setValue("product", preset);
      else if (next.length === 1) setValue("product", next[0]);
      else if (next.length > 1) setValue("product", "multiple");
      else setValue("product", "");
    }

    if (!messageDirty) {
      setValue("message", next.length > 1 ? enquiryNote(next) : "");
    }
  }, [submitted, requested, fromUrl, ready, slugs, basketKey, preset, productDirty, messageDirty, setValue]);

  async function onSubmit(data: FormValues) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      clear();
      setSubmitted(true);
    } catch {
      setError("The form did not send. Email info@sarvantaglobal.in and we will reply.");
    }
  }

  if (submitted) {
    return (
      <div className="border-t border-ink pt-8" role="status">
        <h2 className="text-4xl">Enquiry received</h2>
        <p className="mt-3 text-ink-soft">
          Thank you. We will reply within 24 hours with price and availability. Samples can be arranged from there.
        </p>
      </div>
    );
  }

  return (
    <form id="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate className="border-t border-ink pt-8">
      <h2 className="text-3xl">Quote form</h2>
      <p className="mt-2 text-sm text-muted">Fields marked * are required. We reply within 24 hours.</p>

      {preset && preset !== "multiple" ? (
        <p className="mt-4 text-sm text-ink-soft">{productName(preset)} is selected. Change it below if you need a different product.</p>
      ) : null}

      {listed.length > 0 ? (
        <div className="mt-6 border-y border-line py-4">
          <p className="text-sm font-semibold">Products in this enquiry</p>
          <ul className="mt-2 space-y-2 text-sm">
            {listed.map((slug) => (
              <li key={slug} className="flex items-center justify-between gap-3">
                <span>{productName(slug)}</span>
                {fromBasket ? (
                  <button type="button" className="font-semibold underline underline-offset-4" onClick={() => remove(slug)}>
                    Remove
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
          {listed.length > 1 ? (
            <p className="mt-2 text-xs text-muted">The note below lists these products until you edit it.</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name?.message}>
          <input
            id="name"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="field"
            {...register("name")}
          />
        </Field>
        <Field label="Company" name="company" error={errors.company?.message}>
          <input
            id="company"
            autoComplete="organization"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "company-error" : undefined}
            className="field"
            {...register("company")}
          />
        </Field>
        <Field label="Email" name="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="field"
            {...register("email")}
          />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="field"
            {...register("phone")}
          />
        </Field>
        <Field label="Product" name="product" required error={errors.product?.message}>
          <select
            id="product"
            aria-invalid={errors.product ? true : undefined}
            aria-describedby={errors.product ? "product-error" : undefined}
            className="field"
            {...register("product")}
          >
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
            aria-invalid={errors.quantity ? true : undefined}
            aria-describedby={errors.quantity ? "quantity-error" : undefined}
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
            aria-invalid={errors.packaging ? true : undefined}
            aria-describedby={errors.packaging ? "packaging-error" : undefined}
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
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="field min-h-32 resize-y"
            placeholder="Grade, destination, or private-label notes"
            {...register("message")}
          />
        </Field>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-danger" role="alert">
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
      <label htmlFor={name} className="mb-2 block text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
        {required ? <span className="text-danger"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
