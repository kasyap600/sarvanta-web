import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Image credits",
  description: "Sources and licences for interim product photographs on the Sarvanta Global demo.",
  path: "/credits",
});

export default function CreditsPage() {
  const credited = products.filter((product) => product.imageCredit);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 lg:py-16">
      <h1 className="font-serif text-4xl">Image credits</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        Sarvanta Global does not yet have its own photographs for every product. The pictures below are interim and should be replaced with the company’s own photography. Other product photographs were already in the site archive and are not listed here.
      </p>
      <ul className="mt-8 space-y-6">
        {credited.map((product) => {
          const credit = product.imageCredit!;
          return (
            <li key={product.slug} className="border border-line bg-card p-4 text-sm">
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
