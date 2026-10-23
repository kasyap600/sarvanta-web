import type { Metadata } from "next";
import { site } from "@/lib/site";

const defaultImage = "/images/products/red-chillies.webp";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = "Dried red chillies",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [image],
    },
  };
}
