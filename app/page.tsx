import Link from "next/link";
import { Photo } from "@/components/Photo";
import { categories, getProductBySlug, priorityProducts, productsIn } from "@/lib/products";
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

const buyers = [
  "Importers",
  "Distributors",
  "Wholesalers",
  "Food manufacturers",
  "HoReCa",
  "Private label, on request",
];

export default function HomePage() {
  const spices = productsIn("Spices");
  const powders = productsIn("Powders");
  const vegetables = productsIn("Vegetable powders")[0];

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-12 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{site.location}</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Indian spices and agri commodities for businesses in India and abroad.
            </h1>
            <p className="prose-measure mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              Sarvanta Global sources and trades red chillies, turmeric, black and white pepper, cumin, moringa powder,
              jaggery powder, and 13 dehydrated vegetable powders. We sell in bulk to importers, distributors,
              wholesalers, food manufacturers, and HoReCa buyers. Private labelling is available on request.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={quoteHref()} className="btn">
                Request a quote
              </Link>
              <a href={whatsappHref()} className="btn-line" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Photo
              src="/images/Home Page - Images/03-product-red-chillies-clear.webp"
              alt="Dried red chillies with stems"
              sizes="(min-width: 1024px) 46vw, 100vw"
              ratio="aspect-[4/5] sm:aspect-[5/4]"
              preload
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="priority-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Priority</p>
          <h2 id="priority-heading" className="mt-3 max-w-2xl font-serif text-4xl leading-tight">
            Red chillies and turmeric, whole and ground.
          </h2>
          <p className="prose-measure mt-4 text-ink-soft">
            These four are the lines we put forward. Send the quantity and the packing, and we will quote them first.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {priorityProducts.map((product, index) => (
              <article key={product.slug} className={index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-6"}>
                <Link href={`/products/${product.slug}`} className="group block">
                  <Photo
                    src={product.image}
                    alt={product.imageAlt}
                    credit={product.imageCredit}
                    sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                    ratio={index === 0 ? "aspect-[4/5] sm:aspect-[5/4]" : "aspect-[4/3]"}
                  />
                  <h3 className="mt-4 font-serif text-3xl group-hover:text-chilli">{product.name}</h3>
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.summary}</p>
                <Link href={quoteHref(product.slug)} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-chilli underline-offset-4">
                  Request a quote for {product.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="range-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <h2 id="range-heading" className="font-serif text-4xl">The range</h2>
          <p className="prose-measure mt-4 text-ink-soft">
            Whole spices, ground spices, and powders. Everything is supplied in bulk from India, packed in 25 kg or 50 kg PP bags, jute bags, or custom packing.
          </p>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {categories.map((category) => {
              const items = productsIn(category);
              const photo =
                category === "Spices"
                  ? getProductBySlug("black-pepper")
                  : category === "Powders"
                    ? getProductBySlug("moringa-powder")
                    : vegetables;
              if (!photo) return null;
              return (
                <div key={category} className="grid gap-6 py-8 md:grid-cols-12 md:items-start">
                  <h3 className="font-serif text-3xl md:col-span-3">{category}</h3>
                  <ul className="md:col-span-6">
                    {items.map((product) => (
                      <li key={product.slug} className="border-b border-line py-3 last:border-0">
                        <Link href={`/products/${product.slug}`} className="font-medium underline decoration-line underline-offset-4 hover:decoration-chilli">
                          {product.name}
                        </Link>
                        {product.powders ? (
                          <p className="mt-1 text-sm text-muted">
                            {product.powders.map((powder) => powder.name.replace(" powder", "")).join(", ")}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                  <div className="md:col-span-3">
                    <Photo
                      src={photo.image}
                      alt={photo.imageAlt}
                      sizes="(min-width: 768px) 22vw, 100vw"
                      ratio="aspect-square"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm">
            <Link href="/products" className="font-semibold underline decoration-chilli underline-offset-4">
              Open the full catalogue
            </Link>
            <span className="text-muted"> · </span>
            <span className="text-muted">{spices.length} spices, {powders.length} other powders, 13 vegetable powders.</span>
          </p>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="order-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <h2 id="order-heading" className="font-serif text-4xl">How ordering works</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="font-serif text-4xl text-ochre">{step.n}</p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="facts-heading">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 id="facts-heading" className="font-serif text-4xl">What we can confirm</h2>
            <p className="mt-4 text-ink-soft">
              Sarvanta Global is IEC registered and GST registered, and based in {site.location}. The registration numbers are marked below for the owner to add.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <Placeholder title="IEC number — to be added" detail="IEC registered. The number itself is still to be filled in by the owner." />
            <Placeholder title="GSTIN — to be added" detail="GST registered. The GSTIN is still to be filled in by the owner." />
            <div className="border border-line bg-card p-4 sm:col-span-2">
              <p className="text-sm font-semibold">Reach us</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  Phone and WhatsApp:{" "}
                  <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                </li>
                <li>
                  Email:{" "}
                  <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line" aria-labelledby="buyers-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <h2 id="buyers-heading" className="font-serif text-4xl">Who buys</h2>
          <p className="prose-measure mt-4 text-ink-soft">
            We sell to businesses in India and to buyers overseas. Private labelling is on request.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-lg">
            {buyers.map((buyer) => (
              <li key={buyer} className="border-b border-ochre pb-1">{buyer}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-strip-heading">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between lg:py-20">
          <div>
            <h2 id="contact-strip-heading" className="font-serif text-4xl">Send the product and the quantity.</h2>
            <p className="mt-3 max-w-xl text-ink-soft">A quote comes back within 24 hours. Samples are available.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={quoteHref()} className="btn">Request a quote</Link>
            <a href={whatsappHref()} className="btn-line" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>
    </>
  );
}

function Placeholder({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="border border-dashed border-chilli/50 bg-card p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-chilli">Placeholder</p>
      <p className="mt-2 font-medium">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
    </div>
  );
}
