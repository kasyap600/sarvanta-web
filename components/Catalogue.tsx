"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useEnquiry } from "@/components/enquiry";
import { toCard } from "@/lib/display";
import { catalogueGroups, groupById, products, productsIn, type CatalogueGroupId } from "@/lib/products";

export function Catalogue({ only }: { only?: CatalogueGroupId }) {
  const [filter, setFilter] = useState<CatalogueGroupId | "all">(only ?? "all");
  const [search, setSearch] = useState("");
  const { slugs, href } = useEnquiry();
  const active = only ?? filter;
  const query = search.trim().toLowerCase();

  const visible = useMemo(() => {
    return products.filter((product) => {
      if (active !== "all" && product.category !== active) return false;
      if (!query) return true;
      const group = groupById(product.category);
      const blob = [
        product.name,
        product.summary,
        group.name,
        ...product.grades.map((grade) => `${grade.name} ${grade.note ?? ""}`),
        ...(product.varieties?.map((variety) => variety.name) ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(query);
    });
  }, [active, query]);

  const sections = catalogueGroups
    .map((group) => ({
      group,
      items: visible.filter((product) => product.category === group.id),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="lg:grid lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:items-start lg:gap-8">
      <div className="mb-6 lg:sticky lg:top-24 lg:mb-0">
        <label htmlFor="catalogue-search" className="mb-1.5 block text-sm font-semibold">
          Search
        </label>
        <input
          id="catalogue-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Product, grade, or variety"
          autoComplete="off"
          className="field"
        />

        <div className="mt-4 lg:hidden">
          {only ? (
            <CategoryLinks only={only} />
          ) : (
            <>
              <label htmlFor="catalogue-category" className="mb-1.5 block text-sm font-semibold">
                Category
              </label>
              <select
                id="catalogue-category"
                className="field"
                value={filter}
                onChange={(event) => setFilter(event.target.value as CatalogueGroupId | "all")}
              >
                <option value="all">All products ({products.length})</option>
                {catalogueGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name} ({productsIn(group.id).length})
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        <div className="mt-4 hidden lg:block">
          {only ? (
            <CategoryLinks only={only} />
          ) : (
            <div role="group" aria-label="Filter by category" className="grid gap-1">
              <FilterButton current={filter} value="all" count={products.length} onSelect={setFilter}>
                All products
              </FilterButton>
              {catalogueGroups.map((group) => (
                <FilterButton
                  key={group.id}
                  current={filter}
                  value={group.id}
                  count={productsIn(group.id).length}
                  onSelect={setFilter}
                >
                  {group.name}
                </FilterButton>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="min-w-0">
        {slugs.length > 0 ? (
          <p className="mb-4 border border-line bg-white px-4 py-3 text-sm">
            {slugs.length} {slugs.length === 1 ? "product" : "products"} in this enquiry.{" "}
            <Link href={href} className="font-semibold underline underline-offset-4">
              Open the quote form
            </Link>
          </p>
        ) : null}
        <p className="text-sm text-muted" aria-live="polite">
          {visible.length} {visible.length === 1 ? "product" : "products"}
          {query ? ` matching “${search.trim()}”` : ""}
        </p>
        {sections.length === 0 ? (
          <p className="mt-4 border border-line bg-white px-4 py-6 text-sm" role="status">
            No product matches that search.
          </p>
        ) : (
          sections.map(({ group, items }) => (
            <section key={group.id} id={group.id} className="mt-6 first:mt-4" aria-labelledby={only ? undefined : `${group.id}-heading`}>
              {only ? null : (
                <div className="mb-3 flex items-baseline justify-between gap-3 border-b border-line pb-2">
                  <h2 id={`${group.id}-heading`} className="text-lg font-semibold">
                    {group.name}
                  </h2>
                  <p className="text-sm text-muted">{items.length}</p>
                </div>
              )}
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((product) => (
                  <li key={product.slug} className="h-full">
                    <ProductCard item={toCard(product, group.name)} />
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
        <p className="mt-6 text-sm leading-relaxed text-muted">
          Interim photographs. Authors and licences are on the{" "}
          <Link href="/credits" className="underline underline-offset-4">
            image credits
          </Link>{" "}
          page.{" "}
          <a className="underline underline-offset-4" href="/images/Product%20Portfolio.pdf">
            Product catalogue (PDF)
          </a>
          .
        </p>
      </div>
    </div>
  );
}

function CategoryLinks({ only }: { only: CatalogueGroupId }) {
  return (
    <nav aria-label="Categories">
      <ul className="grid gap-1">
        <li>
          <Link href="/products" className="flex min-h-11 items-center justify-between border border-line bg-white px-3 text-sm">
            All products
            <span className="text-muted">{products.length}</span>
          </Link>
        </li>
        {catalogueGroups.map((group) => {
          const current = group.id === only;
          return (
            <li key={group.id}>
              <Link
                href={group.href}
                aria-current={current ? "page" : undefined}
                className={`flex min-h-11 items-center justify-between border px-3 text-left text-sm ${
                  current ? "border-forest bg-forest font-semibold text-white" : "border-line bg-white text-ink"
                }`}
              >
                {group.name}
                <span className={current ? "text-white/80" : "text-muted"}>{productsIn(group.id).length}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function FilterButton({
  current,
  value,
  count,
  onSelect,
  children,
}: {
  current: CatalogueGroupId | "all";
  value: CatalogueGroupId | "all";
  count: number;
  onSelect: (value: CatalogueGroupId | "all") => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`flex min-h-11 items-center justify-between border px-3 text-left text-sm ${
        selected ? "border-forest bg-forest font-semibold text-white" : "border-line bg-white text-ink"
      }`}
      onClick={() => onSelect(value)}
    >
      {children}
      <span className={selected ? "text-white/80" : "text-muted"}>{count}</span>
    </button>
  );
}
