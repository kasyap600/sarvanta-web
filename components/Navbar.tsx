"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useEnquiry } from "@/components/enquiry";
import { catalogueGroups, productsIn } from "@/lib/products";
import { quoteHref, site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [productsPath, setProductsPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const productsOpen = productsPath === pathname;
  const menuId = useId();
  const productsId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const productWrap = useRef<HTMLDivElement>(null);
  const { slugs, href } = useEnquiry();

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!productsOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!productWrap.current?.contains(event.target as Node)) setProductsPath(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsPath(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const enquiry =
    slugs.length > 0 ? (
      <Link href={href} className="btn-line px-3 text-sm">
        Enquiry ({slugs.length})
      </Link>
    ) : null;

  return (
    <>
      <div className="bg-forest text-[13px] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2">
          <p className="truncate">{site.location} · IEC and GST registered</p>
          <a className="shrink-0 font-medium underline decoration-white/40 underline-offset-2" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="/" className="shrink-0" aria-label="Sarvanta Global, home">
            <Image src="/images/logo-transparent.png" alt="" width={1919} height={575} className="h-9 w-auto" preload />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((link) =>
              link.href === "/products" ? (
                <div key={link.href} className="relative" ref={productWrap}>
                  <button
                    type="button"
                    className={`inline-flex min-h-12 items-center gap-1 px-3 text-sm ${
                      active("/products") ? "font-semibold text-ink underline decoration-forest decoration-2 underline-offset-8" : "text-ink-soft"
                    }`}
                    aria-expanded={productsOpen}
                    aria-controls={productsId}
                    onClick={() => setProductsPath((current) => (current === pathname ? null : pathname))}
                  >
                    Products
                    <span aria-hidden="true" className="text-xs">
                      {productsOpen ? "▴" : "▾"}
                    </span>
                  </button>
                  {productsOpen ? (
                    <div id={productsId} className="absolute left-0 top-full z-50 max-h-[70vh] w-80 overflow-y-auto border border-line bg-white py-2">
                      <ProductMenu onNavigate={() => setProductsPath(null)} />
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex min-h-12 items-center px-3 text-sm ${
                    active(link.href)
                      ? "font-semibold text-ink underline decoration-forest decoration-2 underline-offset-8"
                      : "text-ink-soft"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ),
            )}
            {enquiry}
            <Link href={quoteHref()} className="btn ml-2 px-4 text-sm">
              Request a quote
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {enquiry}
            <button
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center border border-line bg-white px-3 text-sm font-semibold"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setMenuPath(pathname)}
            >
              Menu
            </button>
          </div>
        </div>

        {open ? (
          <div className="fixed inset-0 z-50 bg-paper lg:hidden" id={menuId}>
            <div className="flex h-16 items-center justify-between border-b border-line bg-white px-5">
              <p className="text-lg font-semibold">Menu</p>
              <button
                ref={closeRef}
                type="button"
                className="inline-flex min-h-12 min-w-12 items-center justify-center border border-line text-sm font-semibold"
                onClick={() => setMenuPath(null)}
              >
                Close
              </button>
            </div>
            <nav className="flex max-h-[calc(100%-4rem)] flex-col overflow-y-auto px-5 py-4" aria-label="Mobile">
              {links
                .filter((link) => link.href !== "/products")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-line py-4 text-lg"
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              {slugs.length > 0 ? (
                <Link href={href} className="border-b border-line py-4 text-lg font-semibold">
                  Enquiry ({slugs.length})
                </Link>
              ) : null}
              <p className="pb-1 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Products</p>
              <ProductMenu />
              <Link href={quoteHref()} className="btn mt-6">
                Request a quote
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

function ProductMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <Link href="/products" className="block min-h-11 px-4 py-2.5 text-sm font-semibold text-ink hover:bg-paper" onClick={onNavigate}>
        All products
      </Link>
      {catalogueGroups.map((group) => (
        <div key={group.id} className="border-t border-line">
          <Link
            href={group.href}
            className="block px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted hover:text-ink"
            onClick={onNavigate}
          >
            {group.name}
          </Link>
          {productsIn(group.id).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="block min-h-11 px-4 py-2 text-sm text-ink hover:bg-paper"
              onClick={onNavigate}
            >
              {product.name}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
