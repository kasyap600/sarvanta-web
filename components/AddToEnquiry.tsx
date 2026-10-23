"use client";

import { useEnquiry } from "@/components/enquiry";

export function AddToEnquiry({
  slug,
  name,
  short = false,
  full = false,
  quiet = false,
}: {
  slug: string;
  name: string;
  short?: boolean;
  full?: boolean;
  quiet?: boolean;
}) {
  const { has, add, remove } = useEnquiry();
  const added = has(slug);
  const label = added ? (short ? "Remove" : "Remove from enquiry") : short ? "Add" : "Add to enquiry";

  return (
    <button
      type="button"
      aria-pressed={added}
      aria-label={added ? `Remove ${name} from enquiry` : `Add ${name} to enquiry`}
      className={
        quiet
          ? "inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.14em] underline underline-offset-4"
          : `btn-line text-sm ${full ? "w-full" : "px-3"}`
      }
      onClick={() => (added ? remove(slug) : add(slug))}
    >
      {label}
    </button>
  );
}
