import Link from "next/link";
import { ProductList } from "@/components/ProductList";
import { productsIn } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Moringa and jaggery",
  description: "Moringa powder and jaggery powder from India, supplied in bulk by Sarvanta Global, Bangalore.",
  path: "/products/powders",
});

export default function PowdersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
      <p className="text-sm text-muted">
        <Link href="/products" className="underline underline-offset-4">Products</Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Moringa and jaggery</h1>
      <p className="prose-measure mt-4 text-ink-soft">
        Two powders outside the spice list. Spice powders live under spices. The thirteen dehydrated vegetable powders have their own page.
      </p>
      <p className="mt-4 text-sm">
        <Link href="/products/dehydrated-vegetable-powders" className="font-semibold underline decoration-chilli underline-offset-4">
          Dehydrated vegetable powders
        </Link>
      </p>
      <div className="mt-10">
        <ProductList products={productsIn("Powders")} />
      </div>
    </div>
  );
}
