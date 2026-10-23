import Link from "next/link";
import { Photo } from "@/components/Photo";
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
    <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{site.location}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            A Bangalore trading company for Indian spices and agri commodities.
          </h1>
          <div className="mt-6 space-y-4 text-ink-soft leading-relaxed">
            <p>
              Sarvanta Global sources and sells in bulk. The catalogue covers red chillies, turmeric, black pepper, white pepper, cumin, moringa powder, jaggery powder, and 13 dehydrated vegetable powders. Turmeric and red chillies are sold both whole and ground.
            </p>
            <p>
              Buyers are businesses in India and buyers abroad: importers, distributors, wholesalers, food manufacturers, and HoReCa. Private labelling is available on request.
            </p>
            <p>
              The sales path is an enquiry, a quote within 24 hours, a sample if you want one, and then the order. The company is IEC registered and GST registered. The numbers themselves are still to be added.
            </p>
          </div>
          <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
            <div className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="font-semibold">IEC</dt>
              <dd className="sm:col-span-2">Registered. <span className="text-chilli">Placeholder — IEC number to be added.</span></dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="font-semibold">GST</dt>
              <dd className="sm:col-span-2">Registered. <span className="text-chilli">Placeholder — GSTIN to be added.</span></dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="font-semibold">Location</dt>
              <dd className="sm:col-span-2">{site.location}</dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="font-semibold">Phone / WhatsApp</dt>
              <dd className="sm:col-span-2">
                <a className="underline underline-offset-4" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div className="grid gap-1 py-3 sm:grid-cols-3">
              <dt className="font-semibold">Email</dt>
              <dd className="sm:col-span-2">
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={quoteHref()} className="btn">Request a quote</Link>
            <a href={whatsappHref()} className="btn-line" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Photo
            src="/images/Home Page - Images/04-product-black-pepper-clear.webp"
            alt="Whole black peppercorns"
            sizes="(min-width: 1024px) 36vw, 100vw"
            ratio="aspect-[4/5]"
          />
        </div>
      </div>
    </div>
  );
}
