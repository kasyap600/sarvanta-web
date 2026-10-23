import type { Product, SpecRow } from "@/lib/products";
import { quoteHref } from "@/lib/site";

const preferredLabels = [
  "Curcuminoid content on dry basis",
  "Piperine on dry basis",
  "Volatile oil on dry basis",
  "Protein",
  "Sucrose",
  "Total alkaloids",
  "Moisture",
  "Moisture, powdered garlic",
  "Moisture, powdered onion",
];

export function supplyForm(product: Product, mode: "short" | "full" = "short"): string {
  if (product.slug === "ashwagandha") return "Form on request";

  if (product.grades.length > 0) {
    const names = product.grades.map((grade) => grade.name);
    if (mode === "full" || names.length <= 2) return names.join("; ");
    return `${names.slice(0, 2).join("; ")}; +${names.length - 2} more`;
  }

  if (product.varieties && product.varieties.length > 0) {
    return product.varieties
      .map((variety) => variety.name.replace(" Red Chilli", "").replace("334 Red Chilli / ", ""))
      .join(", ");
  }

  if (/powder/i.test(product.name)) return "Powder";
  if (product.slug === "turmeric-fingers") return "Whole fingers";
  if (product.slug === "cumin") return "Whole seed";
  return "Whole";
}

export function keySpec(product: Product): SpecRow | null {
  if (product.varieties && product.varieties.length > 0) {
    return {
      label: "Variety sheet",
      value: "ASTA colour and SHU are listed for each variety",
    };
  }

  const rows = product.tables.flatMap((table) => table.rows);
  for (const label of preferredLabels) {
    const match = rows.find(
      (row) => row.label === label || row.label.startsWith(`${label},`) || row.label.startsWith(`${label} (`),
    );
    if (match) return match;
  }

  const skip = new Set(["Origin", "Botanical Name", "Source", "Colour", "Color"]);
  return rows.find((row) => !skip.has(row.label)) ?? rows[0] ?? null;
}

export type CardModel = {
  slug: string;
  name: string;
  href: string;
  quote: string;
  image: string;
  imageAlt: string;
  group: string;
  priority: boolean;
  form: string;
  specLabel?: string;
  specValue?: string;
};

export function toCard(product: Product, groupName: string): CardModel {
  const spec = keySpec(product);
  return {
    slug: product.slug,
    name: product.name,
    href: `/products/${product.slug}`,
    quote: quoteHref(product.slug),
    image: product.image,
    imageAlt: product.imageAlt,
    group: groupName,
    priority: product.priority,
    form: supplyForm(product),
    specLabel: spec?.label,
    specValue: spec?.value,
  };
}
