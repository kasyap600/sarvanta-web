import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import {
  getProductBySlug,
  groupById,
  products,
  specNotes,
  type Product,
  type SpecRow,
  type SpecTable,
} from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { quoteHref, whatsappHref } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
    image: product.image,
    imageAlt: product.imageAlt,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const group = groupById(product.category);
  const related = product.related
    .map((item) => getProductBySlug(item))
    .filter((item): item is Product => Boolean(item));

  return (
    <article className="pb-24 lg:pb-0">
      <div className="mx-auto min-w-0 max-w-6xl px-5 py-10 lg:py-14">
        <p className="text-sm text-muted">
          <Link href="/products" className="underline underline-offset-4">Products</Link>
          <span aria-hidden="true"> / </span>
          <Link href={group.href} className="underline underline-offset-4">
            {group.name}
          </Link>
        </p>
        <header className="mt-4 max-w-3xl">
          {product.priority ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-chilli">Priority product</p>
          ) : null}
          <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{product.description}</p>
        </header>

        <div className="mt-10 grid min-w-0 items-start gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Photo
              src={product.image}
              alt={product.imageAlt}
              credit={product.imageCredit}
              caption={product.imageCaption}
              sizes="(min-width: 1024px) 52vw, 100vw"
              ratio="aspect-[4/5] sm:aspect-[4/3]"
              preload
            />

            {product.tables.map((table) => (
              <section key={table.title} className="mt-12">
                <h2 className="font-serif text-3xl">{table.title}</h2>
                <SpecTable rows={table.rows} caption={table.title} />
                <SpecNote table={table} />
              </section>
            ))}

            {product.varieties ? (
              <section className="mt-12" aria-labelledby="variety-heading">
                <h2 id="variety-heading" className="font-serif text-3xl">Varieties and specification table</h2>
                <p className="mt-3 text-sm text-muted">
                  Published figures for whole red chillies, as they appear on the existing catalogue. Scroll sideways on a small screen to compare.
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {product.varieties.map((variety) => (
                    <li key={variety.name} className="border border-line bg-card p-4">
                      <h3 className="font-semibold">{variety.name}</h3>
                      <p className="mt-1 text-sm text-ink-soft">{variety.note}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 max-w-full overflow-x-auto border border-line">
                  <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                    <caption className="sr-only">Specification comparison for whole red chilli varieties</caption>
                    <thead className="bg-ink text-paper">
                      <tr>
                        <th scope="col" className="px-3 py-3 font-semibold">Parameter</th>
                        {product.varieties.map((variety) => (
                          <th key={variety.name} scope="col" className="px-3 py-3 font-semibold">
                            {variety.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.varieties[0].specs.map((row, index) => (
                        <tr key={row.label} className={index % 2 === 0 ? "bg-card" : "bg-paper"}>
                          <th scope="row" className="px-3 py-2.5 font-medium">{row.label}</th>
                          {product.varieties!.map((variety) => (
                            <td key={variety.name} className="px-3 py-2.5">
                              {variety.specs.find((spec) => spec.label === row.label)?.value ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{specNotes.catalogue}</p>
              </section>
            ) : null}

            {product.grades.length > 0 ? (
              <section className="mt-12" aria-labelledby="grades-heading">
                <h2 id="grades-heading" className="font-serif text-3xl">Grades</h2>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {product.grades.map((grade) => (
                    <li key={grade.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                      <span className="font-semibold">{grade.name}</span>
                      {grade.note ? <span className="text-sm text-ink-soft">{grade.note}</span> : null}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-12" aria-labelledby="pack-heading">
              <h2 id="pack-heading" className="font-serif text-3xl">Packing</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {product.packaging.map((item) => (
                  <li key={item} className="border border-line bg-card px-4 py-3 text-sm">{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-soft">Private labelling is available on request.</p>
            </section>

            <section className="mt-12" aria-labelledby="uses-heading">
              <h2 id="uses-heading" className="font-serif text-3xl">Who it is sold to</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.uses.map((use) => (
                  <li key={use} className="border border-line px-3 py-2 text-sm">{use}</li>
                ))}
              </ul>
            </section>

            <p className="mt-10 text-sm leading-relaxed text-ink-soft">
              Sources for every figure are in the repository file SPEC_SOURCES.md. The Certificate of Analysis for a lot is sent with the quote.
            </p>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <QuoteBox product={product} />
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-line pt-10" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-serif text-3xl">Also supplied</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {related.map((item) => (
                <li key={item.slug} className="flex items-center justify-between gap-4 py-3">
                  <Link href={`/products/${item.slug}`} className="font-medium underline decoration-line underline-offset-4">
                    {item.name}
                  </Link>
                  <Link href={quoteHref(item.slug)} className="text-sm underline underline-offset-4">
                    Quote
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <Link href={quoteHref(product.slug)} className="btn w-full">
          Request a quote for {product.name}
        </Link>
      </div>
    </article>
  );
}

function QuoteBox({ product }: { product: Product }) {
  return (
    <div className="border border-line bg-card p-6">
      <h2 className="font-serif text-3xl leading-tight">Request a quote for {product.name}</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        We reply within 24 hours. Samples are available. The form opens with {product.name} already selected.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <Link href={quoteHref(product.slug)} className="btn">
          Request a quote for this product
        </Link>
        <a
          href={whatsappHref(`Hello Sarvanta Global, I would like a quote for ${product.name}.`)}
          className="btn-line"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp about {product.name}
        </a>
      </div>
    </div>
  );
}

function SpecNote({ table }: { table: SpecTable }) {
  return (
    <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
      <p>{specNotes[table.kind]}</p>
      {table.extra ? <p>{table.extra}</p> : null}
    </div>
  );
}

function SpecTable({ rows, caption }: { rows: SpecRow[]; caption: string }) {
  return (
    <div className="mt-4 max-w-full overflow-x-auto border border-line">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.label} className={index % 2 === 0 ? "bg-card" : "bg-paper"}>
              <th scope="row" className="w-2/5 px-4 py-3 align-top font-medium">{row.label}</th>
              <td className="px-4 py-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
