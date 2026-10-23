import Link from "next/link";
import { Photo } from "@/components/Photo";
import type { Product } from "@/lib/products";
import { quoteHref } from "@/lib/site";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {products.map((product) => (
        <li key={product.slug} className="grid items-center gap-4 py-5 sm:grid-cols-12">
          <div className="sm:col-span-3">
            <Photo
              src={product.image}
              alt={product.imageAlt}
              sizes="(min-width: 640px) 18vw, 100vw"
              ratio="aspect-[4/3]"
            />
          </div>
          <div className="sm:col-span-6">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              {product.category}
              {product.priority ? " · Priority" : ""}
            </p>
            <h2 className="mt-1 font-serif text-3xl">
              <Link href={`/products/${product.slug}`} className="underline decoration-transparent underline-offset-4 hover:decoration-chilli">
                {product.name}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.summary}</p>
            {product.imageCredit ? (
              <p className="mt-2 text-[11px] leading-snug text-muted">
                Interim photo: {product.imageCredit.author}, {product.imageCredit.license}.{" "}
                <Link href="/credits" className="underline underline-offset-2">Credits</Link>
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-3 sm:text-right">
            <Link href={quoteHref(product.slug)} className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-chilli underline-offset-4">
              Request a quote
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
