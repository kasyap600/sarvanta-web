import Link from "next/link";
import { ProductList } from "@/components/ProductList";
import { productsIn } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Spices",
  description:
    "Indian spices supplied in bulk: red chillies, turmeric, black and white pepper, and cumin, whole and ground.",
  path: "/products/spices",
});

export default function SpicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
      <p className="text-sm text-muted">
        <Link href="/products" className="underline underline-offset-4">Products</Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Spices</h1>
      <p className="prose-measure mt-4 text-ink-soft">
        Whole and ground spices from India. Red chillies and turmeric are the priority lines. Cumin, black pepper, and white pepper are quoted the same way: enquiry, quote within 24 hours, sample if you want one, then the order.
      </p>
      <div className="mt-10">
        <ProductList products={productsIn("Spices")} />
      </div>
    </div>
  );
}
