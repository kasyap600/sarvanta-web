import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy (draft)",
  description: "Draft privacy note for the Sarvanta Global website. Not a final policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 lg:py-16">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">Draft — replace before launch</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Privacy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
        <p>
          This page is a placeholder so the footer has a real link. It is not a finished privacy policy and has not been reviewed by counsel.
        </p>
        <p>
          The quote form collects your name, company, email, phone, the product you ask about, quantity, packing, and any note you add. The message is sent to {site.email}. If an email service is configured, that is how the enquiry is delivered. Otherwise it is recorded on the server log.
        </p>
        <p>
          Sarvanta Global is in {site.location}. Questions about this draft can go to {site.email}.
        </p>
      </div>
    </div>
  );
}
