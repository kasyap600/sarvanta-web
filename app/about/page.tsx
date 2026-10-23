import type { ReactNode } from "react";
import Link from "next/link";
import { priorityProducts } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { quoteHref, site, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Sarvanta Global is a Bangalore company that sources and trades Indian spices and agri commodities for businesses in India and abroad.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 lg:py-12">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-forest">{site.location}</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        A Bangalore trading company for Indian spices and agri commodities.
      </h1>
      <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
        <p>
          Sarvanta Global sources and sells in bulk. The catalogue is spices, natural and herbal powders, and dehydrated vegetable and fruit powders. Turmeric and red chillies are sold both whole and ground.
        </p>
        <p>
          Buyers are businesses in India and buyers abroad: importers, distributors, wholesalers, food manufacturers, and HoReCa. Private labelling is available on request.
        </p>
        <p>
          The sales path is an enquiry, a quote within 24 hours, a sample if you want one, and then the order. The company is IEC registered and GST registered. The numbers themselves are still to be added.
        </p>
      </div>
      <dl className="mt-8 border border-line bg-white text-sm">
        <Row term="IEC" value="Registered." pending="IEC number to be added" />
        <Row term="GST" value="Registered." pending="GSTIN to be added" />
        <Row term="Location" value={site.location} />
        <Row
          term="Phone / WhatsApp"
          value={<a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>}
        />
        <Row
          term="Email"
          value={<a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>}
        />
      </dl>
      <p className="mt-6 text-sm text-ink-soft">
        Priority lines:{" "}
        {priorityProducts.map((product, index) => (
          <span key={product.slug}>
            {index > 0 ? ", " : null}
            <Link href={`/products/${product.slug}`} className="font-semibold text-ink underline underline-offset-4">
              {product.name}
            </Link>
          </span>
        ))}
        .
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Link href={quoteHref()} className="btn">
          Request a quote
        </Link>
        <a href={whatsappHref()} className="btn-line" target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      </div>
    </div>
  );
}

function Row({ term, value, pending }: { term: string; value: ReactNode; pending?: string }) {
  return (
    <div className="grid gap-1 border-b border-line px-4 py-3 last:border-b-0 sm:grid-cols-3">
      <dt className="font-semibold">{term}</dt>
      <dd className="sm:col-span-2">
        {value} {pending ? <span className="font-mono text-accent">{pending}</span> : null}
      </dd>
    </div>
  );
}
