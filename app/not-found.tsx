import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">That page is not in the catalogue.</h1>
      <p className="mt-4 text-ink-soft">The link may be out of date. The product list is the surest place to start.</p>
      <Link href="/products" className="btn mt-8">Browse products</Link>
    </div>
  );
}
