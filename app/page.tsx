import Image from "next/image";
import Link from "next/link";
import { AddToEnquiry } from "@/components/AddToEnquiry";
import { keySpec, supplyForm } from "@/lib/display";
import { catalogueGroups, priorityProducts, products, productsIn } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { quoteHref, site, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Indian spices and agri commodities",
  description: site.description,
  path: "/",
});

const steps = [
  {
    n: "01",
    title: "Enquiry",
    text: "Tell us the product, the quantity, and the packing you want. Name a grade if you have one.",
  },
  {
    n: "02",
    title: "Quote within 24 hours",
    text: "We reply with price and availability within 24 hours.",
  },
  {
    n: "03",
    title: "Sample",
    text: "Samples are available before you place the order.",
  },
  {
    n: "04",
    title: "Order",
    text: "We confirm the lot against the quote and proceed.",
  },
];

const facts: { term: string; detail: string; pending?: string }[] = [
  { term: "Location", detail: site.location },
  { term: "IEC", detail: "Registered.", pending: "IEC number to be added" },
  { term: "GST", detail: "Registered.", pending: "GSTIN to be added" },
  { term: "Documents", detail: "A Certificate of Analysis is sent with the quote, for that lot." },
  { term: "Sample", detail: "Available on request, before the order." },
  { term: "Minimum order", detail: "Confirmed with the quote." },
  {
    term: "Sold to",
    detail:
      "Importers, distributors, wholesalers, and food manufacturers in India and worldwide. Private labelling is on request.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 lg:grid-cols-2 lg:items-start lg:py-10">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-forest">
              Sarvanta Global · {site.location}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Turmeric and red chillies, supplied in bulk from Bangalore.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Whole and ground. Sarvanta Global also trades other spices, natural and herbal powders, and dehydrated vegetable and fruit powders for importers, distributors, wholesalers, and food manufacturers in India and worldwide.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              Send an enquiry. A quote comes back within 24 hours. A sample is available before you order.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link href={quoteHref()} className="btn">
                Request a quote
              </Link>
              <Link href="/products" className="btn-line">
                Browse products
              </Link>
            </div>
          </div>

          <div>
            <h2 className="sr-only">Priority products</h2>
            <ul className="border border-line bg-white">
              {priorityProducts.map((product, index) => {
                const spec = keySpec(product);
                return (
                  <li key={product.slug} className="grid grid-cols-[4.75rem_1fr] gap-3 border-b border-line p-3 last:border-b-0">
                    <Link href={`/products/${product.slug}`} className="relative block aspect-square bg-paper-deep">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="76px"
                        className="object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        {...(index === 0 ? { preload: true } : {})}
                      />
                    </Link>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-accent">Priority</p>
                      <h3 className="text-base font-semibold leading-snug">
                        <Link href={`/products/${product.slug}`} className="hover:underline">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-0.5 text-sm text-ink-soft">{supplyForm(product)}</p>
                      {spec ? (
                        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted">
                          <span className="font-medium text-ink-soft">{spec.label}. </span>
                          {spec.value}
                        </p>
                      ) : null}
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href={quoteHref(product.slug)} className="btn px-3 text-sm">
                          Request quote
                        </Link>
                        <AddToEnquiry slug={product.slug} name={product.name} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-2 text-[11px] leading-snug text-muted">
              Interim photographs. Authors and licences are on the{" "}
              <Link href="/credits" className="underline underline-offset-4">
                image credits
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="order-heading">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
          <h2 id="order-heading" className="text-xl font-semibold tracking-tight">
            How to order
          </h2>
          <ol className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="bg-white px-4 py-4">
                <p className="font-mono text-xs font-medium text-accent">{step.n}</p>
                <h3 className="mt-1 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="range-heading">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="range-heading" className="text-xl font-semibold tracking-tight">
                Catalogue
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {products.length} products in three groups. Packing is 25 kg or 50 kg PP bags, jute bags, or custom. Open the browser to search, compare a key specification, and add more than one product to an enquiry.
              </p>
            </div>
            <Link href="/products" className="btn-line text-sm">
              Browse products
            </Link>
          </div>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {catalogueGroups.map((group) => {
              const items = productsIn(group.id);
              return (
                <div key={group.id} className="grid gap-3 py-4 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="text-base font-semibold">
                      <Link href={group.href} className="underline decoration-line underline-offset-4 hover:decoration-forest">
                        {group.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{items.length} products</p>
                  </div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 md:col-span-8">
                    {items.map((product) => (
                      <li key={product.slug}>
                        <Link
                          href={`/products/${product.slug}`}
                          className="text-sm underline decoration-line underline-offset-4 hover:decoration-forest"
                        >
                          {product.name}
                        </Link>
                        {product.priority ? (
                          <span className="ml-1.5 font-mono text-[10px] uppercase tracking-wide text-accent">Priority</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="facts-heading">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:py-10">
          <h2 id="facts-heading" className="text-xl font-semibold tracking-tight">
            What we can confirm
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Sarvanta Global is based in {site.location}. IEC and GST are registered. The numbers themselves are still to be added.
          </p>
          <dl className="mt-5 border border-line bg-white">
            {facts.map((fact) => (
              <div key={fact.term} className="grid border-b border-line last:border-b-0 sm:grid-cols-[11rem_1fr]">
                <dt className="bg-paper-deep px-4 py-3 text-sm font-semibold">{fact.term}</dt>
                <dd className="px-4 py-3 text-sm leading-relaxed">
                  {fact.detail}{" "}
                  {fact.pending ? <span className="font-mono text-accent">{fact.pending}</span> : null}
                </dd>
              </div>
            ))}
            <div className="grid sm:grid-cols-[11rem_1fr]">
              <dt className="bg-paper-deep px-4 py-3 text-sm font-semibold">Contact</dt>
              <dd className="space-y-1 px-4 py-3 text-sm">
                <p>
                  <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </a>
                  {" · "}
                  <a className="underline underline-offset-4" href={whatsappHref()}>
                    WhatsApp
                  </a>
                </p>
                <p>
                  <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="contact-strip-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="contact-strip-heading" className="text-xl font-semibold tracking-tight">
              Send the product and the quantity.
            </h2>
            <p className="mt-1 text-sm text-ink-soft">A quote comes back within 24 hours. Samples are available.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href={quoteHref()} className="btn">
              Request a quote
            </Link>
            <Link href="/products" className="btn-line">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
