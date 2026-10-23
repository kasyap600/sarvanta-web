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
    <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-forest">Catalogue</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Product range</h1>
      <p className="mt-3 max-w-2xl text-ink-soft">
        {products.length} products, in three groups. Red chillies and turmeric, whole and ground, are the priority lines. Search by name, or filter by category. Request a quote for one product, or add several to a single enquiry.
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link href={quoteHref()} className="btn">
          Request a quote
        </Link>
        <a href="/images/Product%20Portfolio.pdf" className="btn-line">
          Product catalogue (PDF)
        </a>
      </div>
      <div className="mt-8">
        <Catalogue />
      </div>
    </div>
  );
}
