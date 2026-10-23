import Image from "next/image";
import Link from "next/link";
import { AddToEnquiry } from "@/components/AddToEnquiry";
import type { CardModel } from "@/lib/display";

export function ProductCard({ item, preload = false }: { item: CardModel; preload?: boolean }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white">
      <Link href={item.href} className="relative block aspect-[3/2] bg-paper-deep">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
          loading={preload ? "eager" : "lazy"}
          {...(preload ? { preload: true } : {})}
        />
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
          {item.priority ? <span className="text-accent">Priority · </span> : null}
          {item.group}
        </p>
        <h3 className="mt-1 text-base font-semibold leading-snug">
          <Link href={item.href} className="hover:underline">
            {item.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{item.form}</p>
        {item.specLabel && item.specValue ? (
          <p className="mt-2 text-xs leading-snug text-muted">
            <span className="font-medium text-ink">{item.specLabel}. </span>
            {item.specValue}
          </p>
        ) : null}
        <div className="mt-auto grid gap-2 pt-3">
          <Link href={item.quote} className="btn text-sm">
            Request quote
          </Link>
          <AddToEnquiry slug={item.slug} name={item.name} full />
        </div>
      </div>
    </article>
  );
}
