import Link from "next/link";
import { Catalogue } from "@/components/Catalogue";
import { groupById } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

const group = groupById("herbal");

export const metadata = pageMetadata({
  title: "Natural and herbal powders",
  description: group.intro,
  path: "/products/powders",
});

export default function PowdersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
      <p className="text-sm text-muted">
        <Link href="/products" className="underline underline-offset-4">
          Products
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{group.name}</h1>
      <p className="mt-3 max-w-2xl text-ink-soft">{group.intro}</p>
      <div className="mt-8">
        <Catalogue only="herbal" />
      </div>
    </div>
  );
}
