import Link from "next/link";
import { products } from "@/lib/products";
import { site, whatsappHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl">Sarvanta Global</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/80">
            B2B sourcing and trading of Indian spices and agri commodities. Based in {site.location}.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/80">Pages</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="underline decoration-paper/30 underline-offset-4" href="/">Home</Link></li>
            <li><Link className="underline decoration-paper/30 underline-offset-4" href="/products">Products</Link></li>
            <li><Link className="underline decoration-paper/30 underline-offset-4" href="/about">About</Link></li>
            <li><Link className="underline decoration-paper/30 underline-offset-4" href="/contact">Contact</Link></li>
            <li>
              <a className="underline decoration-paper/30 underline-offset-4" href="/images/Product%20Portfolio.pdf">
                Product catalogue (PDF)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/80">Products</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link className="underline decoration-paper/30 underline-offset-4" href={`/products/${product.slug}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/80">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="underline decoration-paper/30 underline-offset-4" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
            <li>
              <a className="underline decoration-paper/30 underline-offset-4" href={whatsappHref()}>
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="underline decoration-paper/30 underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 pb-24 pr-20 text-xs text-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sarvanta Global.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="underline underline-offset-4" href="/privacy">Privacy (draft)</Link>
            <Link className="underline underline-offset-4" href="/terms">Terms (draft)</Link>
            <Link className="underline underline-offset-4" href="/credits">Image credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
