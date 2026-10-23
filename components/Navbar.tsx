"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { quoteHref } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products", label: "All products" },
  { href: "/products/spices", label: "Spices" },
  { href: "/products/powders", label: "Moringa and jaggery" },
  { href: "/products/dehydrated-vegetable-powders", label: "Vegetable powders" },
  { href: "/products/red-chillies", label: "Red chillies" },
  { href: "/products/red-chilli-powder", label: "Red chilli powder" },
  { href: "/products/turmeric-fingers", label: "Turmeric fingers" },
  { href: "/products/turmeric-powder", label: "Turmeric powder" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuId = useId();
  const productsId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const productWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
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
      if (!productWrap.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProductsOpen(false);
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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="shrink-0" aria-label="Sarvanta Global, home">
          <Image
            src="/images/logo-transparent.png"
            alt=""
            width={1919}
            height={575}
            className="h-11 w-auto"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.href === "/products" ? (
              <div key={link.href} className="relative" ref={productWrap}>
                <button
                  type="button"
                  className={`inline-flex min-h-12 items-center gap-1 px-3 text-sm ${
                    active("/products") ? "text-ink" : "text-ink-soft"
                  }`}
                  aria-expanded={productsOpen}
                  aria-controls={productsId}
                  onClick={() => setProductsOpen((value) => !value)}
                >
                  Products
                  <span aria-hidden="true" className="text-xs">
                    {productsOpen ? "▴" : "▾"}
                  </span>
                </button>
                {productsOpen ? (
                  <div
                    id={productsId}
                    className="absolute left-0 top-full z-50 w-64 border border-line bg-card py-2 shadow-sm"
                  >
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block min-h-11 px-4 py-2.5 text-sm text-ink hover:bg-paper"
                        onClick={() => setProductsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-12 items-center px-3 text-sm ${
                  active(link.href) ? "text-ink underline decoration-chilli decoration-2 underline-offset-8" : "text-ink-soft"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href={quoteHref()} className="btn ml-3 px-4 text-sm">
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center border border-line px-3 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-paper lg:hidden" id={menuId}>
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <p className="font-serif text-xl">Menu</p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex min-h-12 min-w-12 items-center justify-center border border-line text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
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
            <p className="pb-1 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Products</p>
            {productLinks.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-line py-3 text-base">
                {item.label}
              </Link>
            ))}
            <Link href={quoteHref()} className="btn mt-6">
              Request a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
