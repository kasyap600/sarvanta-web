"use client";

import Link from "next/link";
import { useState } from "react";
import { Photo } from "@/components/Photo";
import { catalogueGroups, productsIn, type CatalogueGroupId } from "@/lib/products";
import { quoteHref } from "@/lib/site";

export function Catalogue({ only }: { only?: CatalogueGroupId }) {
  const [filter, setFilter] = useState<CatalogueGroupId | "all">(only ?? "all");
  const groups = catalogueGroups.filter((group) => (only ? group.id === only : filter === "all" || filter === group.id));

  return (
    <div>
      {only ? null : (
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter the catalogue">
          <FilterButton current={filter} value="all" onSelect={setFilter}>
            All
          </FilterButton>
          {catalogueGroups.map((group) => (
            <FilterButton key={group.id} current={filter} value={group.id} onSelect={setFilter}>
              {group.name}
            </FilterButton>
          ))}
        </div>
      )}

      <div className={only ? "" : "mt-8"}>
        {groups.map((group) => {
          const items = productsIn(group.id);
          return (
            <section key={group.id} id={group.id} className="mt-10 first:mt-0" aria-labelledby={only ? undefined : `${group.id}-heading`}>
              {only ? null : (
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-ink pb-3">
                  <h2 id={`${group.id}-heading`} className="font-serif text-3xl">
                    <a href={`#${group.id}`} className="hover:text-chilli">
                      {group.name}
                    </a>
                  </h2>
                  <p className="text-sm text-muted">{items.length} products</p>
                </div>
              )}
              <ul>
                {items.map((product) => (
                  <li key={product.slug} className="grid grid-cols-[4.5rem_1fr] items-center gap-4 border-b border-line py-4 sm:grid-cols-[5.5rem_1fr_auto]">
                    <Photo
                      src={product.image}
                      alt={product.imageAlt}
                      sizes="88px"
                      ratio="aspect-square"
                      eager
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {product.priority ? "Priority" : group.name}
                      </p>
                      <h3 className="mt-1 font-serif text-2xl leading-tight">
                        <Link href={`/products/${product.slug}`} className="underline decoration-transparent underline-offset-4 hover:decoration-chilli">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{product.summary}</p>
                    </div>
                    <Link
                      href={quoteHref(product.slug)}
                      className="col-span-2 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-chilli underline-offset-4 sm:col-span-1 sm:justify-end"
                    >
                      Request a quote
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-muted">
        Photographers and licences are listed on each product page and on the{" "}
        <Link href="/credits" className="underline underline-offset-4">image credits</Link> page.
      </p>
    </div>
  );
}

function FilterButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: CatalogueGroupId | "all";
  value: CatalogueGroupId | "all";
  onSelect: (value: CatalogueGroupId | "all") => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`min-h-11 border px-3 text-sm ${selected ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"}`}
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  );
}
