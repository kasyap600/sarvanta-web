import Image from "next/image";
import Link from "next/link";
import { AddToEnquiry } from "@/components/AddToEnquiry";
import type { CardModel } from "@/lib/display";

export function ProductCard({ item, preload = false }: { item: CardModel; preload?: boolean }) {
  return (
    <article className="flex h-full flex-col">
      <Link href={item.href} className="group relative block aspect-[4/5] overflow-hidden bg-paper-deep">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1280px) 340px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading={preload ? "eager" : "lazy"}
          {...(preload ? { preload: true } : {})}
        />
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
          {item.priority ? <span className="text-accent">Priority · </span> : null}
          {item.group}
        </p>
        <h3 className="mt-1 font-serif text-2xl leading-tight">
          <Link href={item.href} className="hover:text-accent">
            {item.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{item.form}</p>
        {item.specLabel && item.specValue ? (
          <p className="mt-2 line-clamp-3 text-xs leading-snug text-muted">
            <span className="text-ink-soft">{item.specLabel}. </span>
            {item.specValue}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
          <Link href={item.quote} className="text-[11px] font-medium uppercase tracking-[0.14em] underline underline-offset-4">
            Request quote
          </Link>
          <AddToEnquiry slug={item.slug} name={item.name} short quiet />
        </div>
      </div>
    </article>
  );
}