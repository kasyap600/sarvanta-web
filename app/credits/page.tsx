import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Image credits",
  description: "Photographers and licences for the product photographs on the Sarvanta Global site.",
  path: "/credits",
});

export default function CreditsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 lg:py-16">
      <h1 className="text-4xl leading-tight sm:text-5xl">Image credits</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        Every product photograph on this preview is an interim picture from Wikimedia Commons. Licences are CC0, public domain, CC BY, or CC BY-SA, which allow commercial use. Replace them with Sarvanta Global’s own photography before the site is treated as final. The same list is kept in IMAGE_CREDITS.md.
      </p>
      <ul className="mt-8 space-y-6">
        {products.map((product) => {
          const credit = product.imageCredit;
          return (
            <li key={product.slug} id={product.slug} className="border border-line bg-card p-4 text-sm">
              <p className="font-semibold">{product.name}</p>
              <p className="mt-1 text-muted">{product.image}</p>
              <p className="mt-2">
                <a className="underline underline-offset-4" href={credit.authorUrl}>{credit.author}</a>
                {" · "}
                <a className="underline underline-offset-4" href={credit.licenseUrl}>{credit.license}</a>
              </p>
              <p className="mt-2">
                <a className="underline underline-offset-4" href={credit.sourceUrl}>Source file</a>
              </p>
              <p className="mt-2 text-muted">{credit.changes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
