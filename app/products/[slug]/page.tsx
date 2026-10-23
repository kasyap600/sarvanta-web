import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AddToEnquiry } from "@/components/AddToEnquiry";
import { PhotoCredit } from "@/components/Photo";
import { supplyForm } from "@/lib/display";
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
  const varieties = product.varieties;

  return (
    <article className="pb-28 lg:pb-0">
      <div className="mx-auto min-w-0 max-w-6xl px-5 py-8 lg:py-10">
        <p className="text-sm text-muted">
          <Link href="/products" className="underline underline-offset-4">
            Products
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href={group.href} className="underline underline-offset-4">
            {group.name}
          </Link>
        </p>

        <header className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-start">
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep lg:aspect-[4/5]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 1024px) 352px, 100vw"
                className="object-cover"
                preload
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted">
              {product.imageCaption ? <span className="block text-ink-soft">{product.imageCaption}</span> : null}
              <PhotoCredit credit={product.imageCredit} as="p" />
            </figcaption>
          </figure>
          <div className="min-w-0">
            {product.priority ? (
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Priority product</p>
            ) : null}
            <h1 className="mt-2 text-4xl leading-[1.02] sm:text-6xl">{product.name}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{product.summary}</p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink pt-5">
              <Fact term="Form" value={supplyForm(product, "full")} />
              <Fact term="Minimum order" value="On request" />
              <Fact term="Sample" value="Available on request" />
              <Fact term="Documents" value="Certificate of Analysis per lot" />
            </dl>
            <div className="mt-6 hidden flex-wrap items-center gap-3 lg:flex">
              <Link href={quoteHref(product.slug)} className="btn">
                Request a quote
              </Link>
              <AddToEnquiry slug={product.slug} name={product.name} />
            </div>
            <a
              href={whatsappHref(`Hello Sarvanta Global, I would like a quote for ${product.name}.`)}
              className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-4 lg:hidden"
            >
              WhatsApp about {product.name}
            </a>
          </div>
        </header>

        <div className="sticky top-16 z-30 mt-10 hidden items-center justify-between gap-4 border-y border-ink bg-paper py-3 lg:flex">
          <p className="truncate font-serif text-2xl">{product.name}</p>
          <div className="flex shrink-0 items-center gap-3">
            <AddToEnquiry slug={product.slug} name={product.name} />
            <Link href={quoteHref(product.slug)} className="btn">
              Request a quote
            </Link>
          </div>
        </div>

        {varieties ? (
          <section className="mt-6 min-w-0" aria-labelledby="variety-heading">
            <h2 id="variety-heading" className="text-3xl sm:text-4xl">
              Varieties and specification table
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.description}</p>
            <p className="mt-2 text-sm text-muted">
              Published figures for whole red chillies, as they appear on the existing catalogue. Scroll sideways on a small screen to compare.
            </p>
            <div className="mt-6 max-w-full overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <caption className="sr-only">Specification comparison for whole red chilli varieties</caption>
                <thead className="border-b border-ink text-[11px] uppercase tracking-[0.14em]">
                  <tr>
                    <th scope="col" className="py-3 pr-4 font-medium">
                      Parameter
                    </th>
                    {varieties.map((variety) => (
                      <th key={variety.name} scope="col" className="px-3 py-3 font-medium">
                        {variety.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {varieties[0].specs.map((row) => (
                    <tr key={row.label} className="border-b border-line">
                      <th scope="row" className="py-3 pr-4 align-top font-medium">
                        {row.label}
                      </th>
                      {varieties.map((variety) => (
                        <td key={variety.name} className="px-3 py-3 align-top">
                          {variety.specs.find((spec) => spec.label === row.label)?.value ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{specNotes.catalogue}</p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {varieties.map((variety) => (
                <li key={variety.name}>
                  <h3 className="font-serif text-2xl">{variety.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{variety.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {product.tables.map((table) => (
          <section key={table.title} className="mt-8 min-w-0">
            <h2 className="text-3xl sm:text-4xl">{table.title}</h2>
            <SpecTable rows={table.rows} caption={table.title} />
            <SpecNote table={table} />
          </section>
        ))}

        {varieties ? null : <p className="mt-6 text-base leading-relaxed text-ink-soft">{product.description}</p>}

        {product.grades.length > 0 ? (
          <section className="mt-8" aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-3xl sm:text-4xl">
              Grades
            </h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {product.grades.map((grade) => (
                <li key={grade.name} className="py-3">
                  <p className="font-semibold">{grade.name}</p>
                  {grade.note ? <p className="mt-1 text-sm text-ink-soft">{grade.note}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-8" aria-labelledby="pack-heading">
          <h2 id="pack-heading" className="text-3xl sm:text-4xl">
            Packing
          </h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {product.packaging.map((item) => (
              <li key={item} className="py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Private labelling is available on request. The minimum order is confirmed with the quote.
          </p>
        </section>

        <section className="mt-8" aria-labelledby="uses-heading">
          <h2 id="uses-heading" className="text-3xl sm:text-4xl">
            Who it is sold to
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.uses.join(" · ")}</p>
        </section>

        <p className="mt-8 text-sm leading-relaxed text-ink-soft">
          For more than one product, use Add to enquiry on each page, then open Enquiry in the header. Sources for every figure are in the repository file SPEC_SOURCES.md. The Certificate of Analysis for a lot is sent with the quote.
        </p>

        <div className="mt-6 hidden flex-wrap gap-2 lg:flex">
          <Link href={quoteHref(product.slug)} className="btn">
            Request a quote for {product.name}
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

        {related.length > 0 ? (
          <section className="mt-10 border-t border-line pt-8" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-3xl sm:text-4xl">
              Also supplied
            </h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {related.map((item) => (
                <li key={item.slug} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <Link href={`/products/${item.slug}`} className="font-serif text-2xl underline decoration-line underline-offset-4">
                    {item.name}
                  </Link>
                  <Link href={quoteHref(item.slug)} className="text-sm font-semibold underline underline-offset-4">
                    Request quote
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink bg-paper p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-2">
          <Link href={quoteHref(product.slug)} className="btn flex-1 text-sm">
            Request a quote
          </Link>
          <AddToEnquiry slug={product.slug} name={product.name} short />
        </div>
      </div>
    </article>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">{term}</dt>
      <dd className="mt-1 text-sm leading-snug">{value}</dd>
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
    <div className="mt-5 max-w-full overflow-x-auto">
      <table className="w-full min-w-[18rem] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="border-b border-ink text-[11px] uppercase tracking-[0.14em]">
          <tr>
            <th scope="col" className="w-2/5 py-3 pr-4 font-medium">
              Parameter
            </th>
            <th scope="col" className="py-3 font-medium">
              Specification
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line">
              <th scope="row" className="py-3 pr-4 align-top font-medium">
                {row.label}
              </th>
              <td className="py-3 align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
