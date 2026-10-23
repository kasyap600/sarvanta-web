import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { quoteHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Sarvanta Global’s bulk catalogue: spices, natural and herbal powders, and dehydrated vegetable and fruit powders from India.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Catalogue</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">The range</h1>
      <p className="prose-measure mt-4 text-ink-soft">
        {products.length} products, in three groups. Red chillies and turmeric, whole and ground, are the priority lines. Packing is 25 kg or 50 kg PP bags, jute bags, or custom. Private labelling is on request.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={quoteHref()} className="btn">Request a quote</Link>
        <a href="/images/Product%20Portfolio.pdf" className="btn-line">Product catalogue (PDF)</a>
      </div>
      <div className="mt-10">
        <Catalogue />
      </div>
    </div>
  );
}
