import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms (draft)",
  description: "Draft terms for the Sarvanta Global website. Not a final contract.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 lg:py-16">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">Draft — replace before launch</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Terms</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
        <p>
          This page is a placeholder so the footer has a real link. It is not a finished set of terms and has not been reviewed by counsel.
        </p>
        <p>
          A quote from Sarvanta Global is a reply to an enquiry. It is not a contract until both sides confirm the lot, price, packing, and shipment. Samples are available and are arranged separately. Private labelling is on request.
        </p>
        <p>
          Product pages state only what is confirmed. Where a page says “Detailed specifications on request”, those figures are not part of the website text. The company is in {site.location}. Contact {site.email} or {site.phoneDisplay}.
        </p>
      </div>
    </div>
  );
}
