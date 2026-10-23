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
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-8 lg:pb-10 lg:pt-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            Sarvanta Global · {site.location}
          </p>
          <h1 className="mt-3 max-w-4xl text-[2.15rem] leading-[1.02] sm:text-6xl sm:leading-[0.96]">
            Turmeric and red chillies, supplied in bulk from Bangalore.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            Whole and ground, plus other spices and powders, for importers, distributors, wholesalers, and food manufacturers. Enquiry, quote within 24 hours, sample, then order.
          </p>
          <div className="mt-6 flex gap-2">
            <Link href={quoteHref()} className="btn flex-1 whitespace-nowrap sm:flex-none">
              Request a quote
            </Link>
            <Link href="/products" className="btn-line flex-1 whitespace-nowrap sm:flex-none">
              Browse products
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-12 lg:pb-16">
          <h2 className="sr-only">Priority products</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-6">
            {priorityProducts.map((product, index) => {
              const spec = keySpec(product);
              return (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="group block">
                    <span className="relative block aspect-[3/2] overflow-hidden bg-paper-deep lg:aspect-[4/5]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 280px, 45vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading={index === 0 ? "eager" : "lazy"}
                        {...(index === 0 ? { preload: true } : {})}
                      />
                    </span>
                    <span className="mt-3 block text-[10px] font-medium uppercase tracking-[0.18em] text-accent">Priority</span>
                    <span className="mt-1 block font-serif text-xl leading-tight text-ink sm:text-2xl">{product.name}</span>
                  </Link>
                  <p className="mt-1 line-clamp-1 text-sm text-ink-soft">{supplyForm(product)}</p>
                  {spec ? (
                    <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted">
                      <span className="text-ink-soft">{spec.label}. </span>
                      {spec.value}
                    </p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Link
                      href={quoteHref(product.slug)}
                      className="text-[11px] font-medium uppercase tracking-[0.14em] underline underline-offset-4"
                    >
                      Request quote
                    </Link>
                    <AddToEnquiry slug={product.slug} name={product.name} short quiet />
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-muted">
            Interim photographs. Authors and licences are on the{" "}
            <Link href="/credits" className="underline underline-offset-4">
              image credits
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="order-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <h2 id="order-heading" className="text-4xl sm:text-5xl">
            How to order
          </h2>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-4xl leading-none text-accent">{step.n}</p>
                <h3 className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.16em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="range-heading">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="range-heading" className="text-4xl sm:text-5xl">
                Catalogue
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                {products.length} products in three groups. Packing is 25 kg or 50 kg PP bags, jute bags, or custom. Open the browser to search, compare a key specification, and add more than one product to an enquiry.
              </p>
            </div>
            <Link href="/products" className="btn-line">
              Browse products
            </Link>
          </div>
          <div className="mt-12">
            {catalogueGroups.map((group) => {
              const items = productsIn(group.id);
              return (
                <div key={group.id} className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-3xl leading-none">
                      <Link href={group.href} className="hover:text-accent">
                        {group.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">{items.length} products</p>
                  </div>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 md:col-span-8">
                    {items.map((product) => (
                      <li key={product.slug}>
                        <Link href={`/products/${product.slug}`} className="text-sm underline decoration-line underline-offset-4 hover:decoration-ink">
                          {product.name}
                        </Link>
                        {product.priority ? (
                          <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-accent">Priority</span>
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
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <h2 id="facts-heading" className="text-4xl sm:text-5xl">
            What we can confirm
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
            Sarvanta Global is based in {site.location}. IEC and GST are registered. The numbers themselves are still to be added.
          </p>
          <dl className="mt-10 border-t border-ink">
            {facts.map((fact) => (
              <div key={fact.term} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-8">
                <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">{fact.term}</dt>
                <dd className="text-sm leading-relaxed">
                  {fact.detail}{" "}
                  {fact.pending ? <span className="text-accent">{fact.pending}</span> : null}
                </dd>
              </div>
            ))}
            <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-8">
              <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">Contact</dt>
              <dd className="space-y-1 text-sm">
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

      <section className="border-t border-ink" aria-labelledby="contact-strip-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-end sm:justify-between lg:py-20">
          <div>
            <h2 id="contact-strip-heading" className="max-w-xl text-4xl leading-[1.02] sm:text-5xl">
              Send the product and the quantity.
            </h2>
            <p className="mt-4 text-sm text-ink-soft">A quote comes back within 24 hours. Samples are available.</p>
          </div>
          <div className="flex gap-2">
            <Link href={quoteHref()} className="btn flex-1 whitespace-nowrap sm:flex-none">
              Request a quote
            </Link>
            <Link href="/products" className="btn-line flex-1 whitespace-nowrap sm:flex-none">
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
