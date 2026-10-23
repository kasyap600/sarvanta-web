import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/products",
    "/products/spices",
    "/products/powders",
    "/products/vegetables",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/credits",
    ...products.map((product) => `/products/${product.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-10-23"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
