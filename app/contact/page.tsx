import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Request a quote",
  description:
    "Request a bulk quote from Sarvanta Global in Bangalore. We reply within 24 hours. Phone and WhatsApp +91 99004 22441.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 lg:grid-cols-12 lg:py-16">
      <div className="min-w-0 lg:col-span-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">{site.location}</p>
        <h1 className="mt-3 text-4xl leading-[1.02] sm:text-6xl">Request a quote</h1>
        <p className="mt-4 max-w-xl text-ink-soft">
          Tell us the product and the quantity. We reply within 24 hours. If you opened this page from a product, that product is already selected. If you added several products, they are listed on the form.
        </p>
        <div className="mt-6">
          <Suspense fallback={<div className="h-96 border border-line bg-white" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
      <aside className="lg:col-span-5">
        <div className="border-t border-ink pt-6 lg:sticky lg:top-24">
          <h2 className="text-3xl">Talk to us directly</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Phone</p>
              <a className="mt-1 inline-flex min-h-11 items-center text-base underline underline-offset-4" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">WhatsApp</p>
              <a
                className="mt-1 inline-flex min-h-11 items-center text-base underline underline-offset-4"
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Email</p>
              <a className="mt-1 inline-flex min-h-11 items-center underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Location</p>
              <p className="mt-1">{site.location}</p>
            </li>
          </ul>
          <ol className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink-soft">
            <li>1. We read the enquiry.</li>
            <li>2. We reply with a quote within 24 hours.</li>
            <li>3. A sample can be arranged.</li>
            <li>4. The order follows the agreed quote.</li>
          </ol>
        </div>
      </aside>
    </div>
  );
}
