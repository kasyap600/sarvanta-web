
export type ProductGrade = {
  name: string;
  description?: string;
  specs?: Record<string, string>;
};

export type Product = {
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  description: string;
  origin: string;
  category: string;
  heroColor: string;
  grades: ProductGrade[];
  packaging: string[];
  specs: Record<string, string>;
  qualityPoints: string[];
  applications: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    headline: "Premium Indian Black Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Sarvanta Global offers premium-quality Indian Black Pepper sourced from trusted growers and processed with advanced cleaning and sorting techniques to retain its natural aroma, pungency and high piperine content. Our black pepper is widely used in food processing, seasonings, and culinary applications across the globe.",
    origin: "India",
    category: "Pepper",
    heroColor: "#1a1a1a",
    grades: [
      { name: "MG1 (Malabar Garbled Grade 1)" },
      { name: "TGSEB (Tellicherry Garbled Special Extra Bold)" },
      { name: "FAQ (Fair Average Quality)" },
      { name: "Bold Black Pepper" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Jute Bags (Customized)"],
    specs: {
      Origin: "India",
      Colour: "Natural Black",
      Moisture: "≤ 12%",
      "Foreign Matter": "≤ 1%",
      "Light Berries": "As per Customer Requirement",
      Density: "As per Grade",
      Cleaning: "Machine Cleaned",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Grade Selection",
      "Machine Cleaned",
      "Uniform Size",
      "Rich Aroma",
      "High Piperine Content",
      "Hygienically Packed",
    ],
    applications: ["Spice Blends", "Food Processing", "Seasonings", "Hotels & Restaurants", "Retail Packaging", "Bulk Industrial Use"],
    image: "/images/black-pepper.webp",
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    headline: "Premium Indian White Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Our Premium Indian White Pepper is carefully processed from fully ripened pepper berries to deliver a clean appearance, smooth flavor, and strong aroma. It is widely used in premium food products, soups, sauces, and international cuisines where refined taste and appearance are essential.",
    origin: "India",
    category: "Pepper",
    heroColor: "#8B7355",
    grades: [
      { name: "Whole White Pepper" },
      { name: "FAQ White Pepper" },
      { name: "White Pepper Powder (Coming Soon)" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Colour: "Natural White",
      Moisture: "≤ 12%",
      Purity: "≥ 99%",
      "Foreign Matter": "≤ 0.5%",
      Processing: "Naturally Processed",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Grade Selection",
      "Carefully Processed",
      "High Purity",
      "Uniform Quality",
      "Hygienically Packed",
      "Consistent Supply",
    ],
    applications: ["Premium Seasonings", "Soups & Sauces", "Food Manufacturing", "Retail Packaging", "Hotels & Restaurants"],
    image: "/images/white-pepper.webp",
  },
  {
    slug: "red-chillies",
    name: "Red Chillies",
    headline: "Premium Indian Red Chillies",
    tagline: "Pure · Natural · Reliable",
    description:
      "Sarvanta Global is committed to delivering premium quality Indian Red Chillies with consistent quality, competitive pricing and timely supply. Our chillies are 100% natural and sun dried, machine cleaned and sorted, with no artificial color.",
    origin: "India",
    category: "Chillies",
    heroColor: "#8B1A1A",
    grades: [
      {
        name: "Teja S17 Red Chilli",
        description: "Bright red, high pungency variety with excellent color and long shelf life. Widely used for spice powders and oleoresin.",
        specs: {
          "ASTA Color (Min)": "160–180",
          "SHU Pungency (Min)": "50,000–70,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Hot & Pungent",
        },
      },
      {
        name: "Byadgi Red Chilli",
        description: "Famous for its deep red color, mild pungency and rich flavor. Ideal for color extraction and culinary use.",
        specs: {
          "ASTA Color (Min)": "180–220",
          "SHU Pungency (Min)": "8,000–15,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "15.0%",
          Color: "Deep Red",
          Description: "Mild Pungent",
        },
      },
      {
        name: "334 Red Chilli / Sannam (S4)",
        description: "Medium pungency with good color and aroma. Suitable for both domestic and international markets.",
        specs: {
          "ASTA Color (Min)": "140–160",
          "SHU Pungency (Min)": "30,000–50,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Medium Pungent",
        },
      },
      {
        name: "Syngenta Red Chilli",
        description: "Known for its uniform size, good color and high pungency. Consistent quality for global markets.",
        specs: {
          "ASTA Color (Min)": "150–170",
          "SHU Pungency (Min)": "40,000–60,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Pungent",
        },
      },
    ],
    packaging: ["25 KG Bag", "50 KG Bag", "Custom Packaging Available"],
    specs: {
      Origin: "India",
      Processing: "100% Natural & Sun Dried",
      Cleaning: "Machine Cleaned & Sorted",
      Color: "No Artificial Color",
      Aroma: "Rich Color, Aroma & Pungency",
      Packing: "Hygienically Processed & Packed",
    },
    qualityPoints: [
      "100% Natural & Sun Dried",
      "Machine Cleaned & Sorted",
      "No Artificial Color",
      "Rich Color, Aroma & Pungency",
      "Hygienically Processed & Packed",
    ],
    applications: ["Spice Powders", "Oleoresin Extraction", "Color Extraction", "Food Processing", "Export Markets", "Retail & Industrial"],
    image: "/images/red-chillies.webp",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    headline: "Premium Indian Moringa Powder",
    tagline: "Pure · Natural · Nutritious",
    description:
      "Our Moringa Powder is made from carefully selected Moringa oleifera leaves, shade-dried and finely milled to preserve its natural nutrients, vibrant color, and freshness. Known as the \"Miracle Tree\", it is widely used in health supplements, food & beverages, nutraceuticals, cosmetics, and functional food products.",
    origin: "India",
    category: "Herbal Powders",
    heroColor: "#3A6B35",
    grades: [
      { name: "Moringa Leaf Powder (Fine Mesh)" },
      { name: "Moringa Leaf Powder (Standard)" },
      { name: "Organic Moringa Leaf Powder (Available on Request)" },
      { name: "Food Grade Moringa Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      "Botanical Name": "Moringa oleifera",
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Natural Green",
      Moisture: "≤ 6%",
      Ash: "≤ 8%",
      Protein: "≥ 25%",
      "Particle Size": "80 – 120 Mesh",
      Solubility: "100% Water Soluble",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Carefully Selected Leaves",
      "Shade Dried",
      "Fine Powder",
      "No Additives or Preservatives",
      "Hygienically Processed",
      "Consistent Quality",
    ],
    applications: ["Health Supplements", "Functional Foods & Beverages", "Nutraceuticals", "Cosmetics & Personal Care", "Animal Feed", "Nutrition Bars & Snacks"],
    image: "/images/moringa-powder.webp",
  },
  {
    slug: "jaggery-powder",
    name: "Jaggery Powder",
    headline: "Premium Indian Jaggery Powder",
    tagline: "Pure · Natural · Wholesome",
    description:
      "Our Jaggery Powder is made from the finest quality sugarcane juice, traditionally prepared and processed to retain its natural minerals and rich taste. It is a healthy alternative to refined sugar and is widely used in food, beverages, confectionery, bakery, and healthcare products.",
    origin: "India",
    category: "Natural Sweeteners",
    heroColor: "#8B5E3C",
    grades: [
      { name: "Jaggery Powder (Fine Mesh)" },
      { name: "Jaggery Powder (Standard)" },
      { name: "Organic Jaggery Powder (Available on Request)" },
      { name: "Food Grade Jaggery Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      Source: "Sugarcane Juice",
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Natural Golden Brown",
      Moisture: "≤ 5%",
      Sucrose: "≥ 70%",
      "Total Ash": "≤ 2%",
      pH: "6.0 – 7.0",
      "Particle Size": "80 – 100 Mesh",
      "Shelf Life": "12 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Made from Pure Sugarcane Juice",
      "Rich in Minerals",
      "No Chemicals or Additives",
      "Traditionally Made",
      "Hygienically Processed",
      "Lab Tested",
    ],
    applications: ["Bakery & Confectionery", "Beverages", "Dairy Products", "Health & Wellness Products", "Traditional Sweets", "Food Processing"],
    image: "/images/jaggery.webp",
  },
  {
    slug: "dehydrated-vegetable-powders",
    name: "Dehydrated Vegetable Powders",
    headline: "Premium Dehydrated Vegetable Powders",
    tagline: "Pure · Natural · Reliable",
    description:
      "Sarvanta Global offers a wide range of premium dehydrated vegetable powders sourced from the finest Indian farms. Each powder is carefully processed, hygienically packed, and free from artificial additives — ideal for food processing, seasoning blends, and nutraceutical applications worldwide.",
    origin: "India",
    category: "Vegetable Powders",
    heroColor: "#4A7C3F",
    grades: [
      { name: "Tomato Powder" },
      { name: "Potato Powder" },
      { name: "Spinach Powder" },
      { name: "Beetroot Powder" },
      { name: "Arrowroot Powder" },
      { name: "Ginger Powder" },
      { name: "Garlic Powder" },
      { name: "Lemon Powder" },
      { name: "Mint Powder" },
      { name: "Carrot Powder" },
      { name: "Tamarind Powder" },
      { name: "Red Onion Powder" },
      { name: "White Onion Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Processing: "Dehydrated & Spray Dried",
      Moisture: "≤ 5%",
      Colour: "Natural",
      Additives: "No Artificial Additives",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "100% Natural",
      "No Artificial Additives",
      "Hygienically Processed",
      "Consistent Quality",
      "Wide Variety",
      "Export Ready",
    ],
    applications: ["Food Processing", "Seasoning Blends", "Soups & Sauces", "Nutraceuticals", "Retail Packaging", "Industrial Use"],
    image: "/images/powders.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
