import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { groupById } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

const group = groupById("spices");

export const metadata = pageMetadata({
  title: "Spices",
  description: group.intro,
  path: "/products/spices",
});

export default function SpicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
      <p className="text-sm text-muted">
        <Link href="/products" className="underline underline-offset-4">
          Products
        </Link>
      </p>
      <h1 className="mt-3 text-4xl leading-[1.02] sm:text-6xl">{group.name}</h1>
      <p className="mt-3 max-w-2xl text-ink-soft">{group.intro}</p>
      <div className="mt-8">
        <Catalogue only="spices" />
      </div>
    </div>
  );
}
