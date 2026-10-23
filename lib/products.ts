export type SpecRow = { label: string; value: string };

export type Grade = { name: string; note?: string };

export type Variety = { name: string; note: string; specs: SpecRow[] };

export type NamedImage = { name: string; image: string; alt: string };

export type ImageCredit = {
  author: string;
  authorUrl: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  changes: string;
};

export type Product = {
  slug: string;
  name: string;
  category: "Spices" | "Powders" | "Vegetable powders";
  priority: boolean;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCredit?: ImageCredit;
  grades: Grade[];
  packaging: string[];
  specs: SpecRow[];
  /** Lab figures are withheld and the page shows a marked on-request section. */
  specsOnRequest: boolean;
  varieties?: Variety[];
  powders?: NamedImage[];
  uses: string[];
  related: string[];
};

export const packaging = [
  "25 kg PP bags",
  "50 kg PP bags",
  "Jute bags",
  "Custom packing",
] as const;

const packingValue = "25 kg or 50 kg PP bags, jute bags, or custom";

const uses = [
  "Food manufacturers",
  "Importers and distributors",
  "Wholesalers",
  "Buyers in India",
  "HoReCa",
  "Private label, on request",
];

function facts(form: string): SpecRow[] {
  return [
    { label: "Origin", value: "India" },
    { label: "Form", value: form },
    { label: "Supply", value: "Bulk" },
    { label: "Packing", value: packingValue },
    { label: "Private labelling", value: "On request" },
  ];
}

const resizeNote = "Resized and compressed to WebP for this demo. No other retouching.";

const chilliSpecs = {
  teja: [
    { label: "ASTA colour (min)", value: "160–180" },
    { label: "SHU pungency (min)", value: "50,000–70,000" },
    { label: "Moisture (%) max", value: "12.0%" },
    { label: "Admixture (%) max", value: "2.0%" },
    { label: "Foreign matter (%) max", value: "1.0%" },
    { label: "Damaged / discoloured (%) max", value: "2.0%" },
    { label: "Stem (%) max", value: "10.0%" },
    { label: "Colour", value: "Bright red" },
    { label: "Description", value: "Hot and pungent" },
  ],
  byadgi: [
    { label: "ASTA colour (min)", value: "180–220" },
    { label: "SHU pungency (min)", value: "8,000–15,000" },
    { label: "Moisture (%) max", value: "12.0%" },
    { label: "Admixture (%) max", value: "2.0%" },
    { label: "Foreign matter (%) max", value: "1.0%" },
    { label: "Damaged / discoloured (%) max", value: "2.0%" },
    { label: "Stem (%) max", value: "15.0%" },
    { label: "Colour", value: "Deep red" },
    { label: "Description", value: "Mild pungent" },
  ],
  sannam: [
    { label: "ASTA colour (min)", value: "140–160" },
    { label: "SHU pungency (min)", value: "30,000–50,000" },
    { label: "Moisture (%) max", value: "12.0%" },
    { label: "Admixture (%) max", value: "2.0%" },
    { label: "Foreign matter (%) max", value: "1.0%" },
    { label: "Damaged / discoloured (%) max", value: "2.0%" },
    { label: "Stem (%) max", value: "10.0%" },
    { label: "Colour", value: "Bright red" },
    { label: "Description", value: "Medium pungent" },
  ],
  syngenta: [
    { label: "ASTA colour (min)", value: "150–170" },
    { label: "SHU pungency (min)", value: "40,000–60,000" },
    { label: "Moisture (%) max", value: "12.0%" },
    { label: "Admixture (%) max", value: "2.0%" },
    { label: "Foreign matter (%) max", value: "1.0%" },
    { label: "Damaged / discoloured (%) max", value: "2.0%" },
    { label: "Stem (%) max", value: "10.0%" },
    { label: "Colour", value: "Bright red" },
    { label: "Description", value: "Pungent" },
  ],
} satisfies Record<string, SpecRow[]>;

const powderDir = "/images/Dehydrated Powders";

const vegetablePowders: NamedImage[] = [
  ["Tomato powder", "Tomato powder.png"],
  ["Potato powder", "Potato Powder.png"],
  ["Spinach powder", "Spinach Powder.png"],
  ["Beetroot powder", "Beetroot Powder.png"],
  ["Arrowroot powder", "Arrowroot Powder.png"],
  ["Ginger powder", "Ginger Powder.png"],
  ["Garlic powder", "Garlic Powder.png"],
  ["Lemon powder", "Lemon Powder.png"],
  ["Mint powder", "Mint Powder.png"],
  ["Carrot powder", "Carrot Powder.png"],
  ["Tamarind powder", "Tamarind Powder.png"],
  ["Red onion powder", "Red Onion Powder.png"],
  ["White onion powder", "White Onion Powder.png"],
].map(([name, file]) => ({
  name,
  image: `${powderDir}/${file}`,
  alt: name,
}));

export const products: Product[] = [
  {
    slug: "red-chillies",
    name: "Red Chillies",
    category: "Spices",
    priority: true,
    summary:
      "Whole dried red chillies from India: Teja S17, Byadgi, 334/Sannam, and Syngenta, with the published ASTA and SHU table.",
    description:
      "Whole red chillies for bulk buyers. The varieties we quote are Teja S17, Byadgi, 334/Sannam (S4), and Syngenta. The table below is the specification sheet for those whole chillies. Ground red chilli is a separate product.",
    image: "/images/Home Page - Images/03-product-red-chillies-clear.webp",
    imageAlt: "Dried red chillies with stems",
    grades: [],
    packaging: [...packaging],
    specs: facts("Whole dried pods"),
    specsOnRequest: false,
    varieties: [
      { name: "Teja S17", note: "Hot and pungent. Bright red.", specs: chilliSpecs.teja },
      { name: "Byadgi", note: "Mild pungency. Deep red.", specs: chilliSpecs.byadgi },
      { name: "334 / Sannam (S4)", note: "Medium pungency. Bright red.", specs: chilliSpecs.sannam },
      { name: "Syngenta", note: "Pungent. Bright red.", specs: chilliSpecs.syngenta },
    ],
    uses,
    related: ["red-chilli-powder", "turmeric-fingers", "black-pepper"],
  },
  {
    slug: "red-chilli-powder",
    name: "Red Chilli Powder",
    category: "Spices",
    priority: true,
    summary: "Ground red chilli from India, supplied in bulk. Lab figures are sent with the quote.",
    description:
      "Ground red chilli for bulk buyers. It is quoted on its own sheet, separate from the whole-chilli varieties. Ask for colour, pungency, mesh, and moisture with the quote.",
    image: "/images/products/red-chilli-powder.webp",
    imageAlt: "Red chilli powder in bulk sacks at a spice market. Interim photograph.",
    imageCredit: {
      author: "Ajay Suresh",
      authorUrl: "https://www.flickr.com/photos/ajay_suresh/",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Red_Chili_Powder_(Lall_Mirch)_(49695826571).jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Powder"),
    specsOnRequest: true,
    uses,
    related: ["red-chillies", "turmeric-powder", "cumin-powder"],
  },
  {
    slug: "turmeric-fingers",
    name: "Turmeric Fingers",
    category: "Spices",
    priority: true,
    summary: "Dried turmeric fingers from India, supplied in bulk.",
    description:
      "Dried turmeric fingers (whole rhizomes) for bulk buyers in India and abroad. Ask for the specification sheet, including curcumin, with your quote.",
    image: "/images/products/turmeric-fingers.webp",
    imageAlt: "A hand holding dried turmeric fingers. Interim photograph.",
    imageCredit: {
      author: "Govind Bhalerao",
      authorUrl: "https://commons.wikimedia.org/wiki/File:Dried_Vasmat_Turmeric_fingers_held_in_hand.jpg",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dried_Vasmat_Turmeric_fingers_held_in_hand.jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Dried fingers"),
    specsOnRequest: true,
    uses,
    related: ["turmeric-powder", "red-chillies", "black-pepper"],
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    priority: true,
    summary: "Ground turmeric from India, supplied in bulk.",
    description:
      "Turmeric powder for food manufacturers, wholesalers, and other bulk buyers. Curcumin percentage, mesh, and moisture are not listed on this page. The specification sheet is available on request.",
    image: "/images/products/turmeric-powder.webp",
    imageAlt: "A bowl of ground turmeric with a wooden spoon. Interim photograph.",
    imageCredit: {
      author: "Barbara-Ingeborg",
      authorUrl: "https://commons.wikimedia.org/wiki/User:Barbara-Ingeborg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Grounded_turmeric.jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Powder"),
    specsOnRequest: true,
    uses,
    related: ["turmeric-fingers", "red-chilli-powder", "cumin-powder"],
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "Spices",
    priority: false,
    summary: "Whole black pepper from India in MG1, TGSEB, FAQ, and Bold.",
    description:
      "Whole black pepper for bulk orders. The grades we quote are MG1 (Malabar Garbled Grade 1), TGSEB (Tellicherry Garbled Special Extra Bold), FAQ (Fair Average Quality), and Bold. Piperine, moisture, and density are included on the sheet that comes with the quote.",
    image: "/images/Home Page - Images/04-product-black-pepper-clear.webp",
    imageAlt: "Whole black peppercorns",
    grades: [
      { name: "MG1", note: "Malabar Garbled Grade 1" },
      { name: "TGSEB", note: "Tellicherry Garbled Special Extra Bold" },
      { name: "FAQ", note: "Fair Average Quality" },
      { name: "Bold", note: "Bold black pepper" },
    ],
    packaging: [...packaging],
    specs: facts("Whole dried berries"),
    specsOnRequest: true,
    uses,
    related: ["black-pepper-powder", "white-pepper", "red-chillies"],
  },
  {
    slug: "black-pepper-powder",
    name: "Black Pepper Powder",
    category: "Spices",
    priority: false,
    summary: "Ground black pepper from India, supplied in bulk.",
    description:
      "Ground black pepper, quoted on its own sheet, separate from the whole grades MG1, TGSEB, FAQ, and Bold. Mesh and other lab figures are available on request.",
    image: "/images/products/black-pepper-powder.webp",
    imageAlt: "Ground black pepper on a dark surface, with a spoon. Interim photograph.",
    imageCredit: {
      author: "Eliska Jindriskova",
      authorUrl: "https://commons.wikimedia.org/wiki/User:Eliska_Jindriskova",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ground_black_pepper.jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Powder"),
    specsOnRequest: true,
    uses,
    related: ["black-pepper", "white-pepper", "cumin-powder"],
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    category: "Spices",
    priority: false,
    summary: "Whole white pepper from India, supplied in bulk.",
    description:
      "Whole white pepper for bulk buyers. Grade names and lab figures are available with the quote.",
    image: "/images/Home Page - Images/05-product-white-pepper-clear.webp",
    imageAlt: "Whole white peppercorns",
    grades: [],
    packaging: [...packaging],
    specs: facts("Whole"),
    specsOnRequest: true,
    uses,
    related: ["black-pepper", "black-pepper-powder", "cumin-seeds"],
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    category: "Spices",
    priority: false,
    summary: "Cumin seeds (jeera) from India, supplied in bulk.",
    description:
      "Cumin seeds for importers, manufacturers, and other bulk buyers. Purity, moisture, and other lab figures are sent on request. Cumin powder is listed as its own product.",
    image: "/images/products/cumin-seeds.webp",
    imageAlt: "Cumin seeds in a small bowl. Interim photograph.",
    imageCredit: {
      author: "Fumikas Sagisavas",
      authorUrl: "https://commons.wikimedia.org/wiki/User:Fumikas_Sagisavas",
      license: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dried_cumin_seeds.jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Seeds"),
    specsOnRequest: true,
    uses,
    related: ["cumin-powder", "turmeric-fingers", "black-pepper"],
  },
  {
    slug: "cumin-powder",
    name: "Cumin Powder",
    category: "Spices",
    priority: false,
    summary: "Ground cumin from India, supplied in bulk.",
    description:
      "Ground cumin for bulk supply, quoted separately from cumin seeds. Ask for the specification sheet, including mesh, with your quote.",
    image: "/images/products/cumin-powder.webp",
    imageAlt: "A pile of ground cumin. Interim photograph.",
    imageCredit: {
      author: "François Nguyen",
      authorUrl: "https://www.flickr.com/photos/198613871@N06/",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cumin_powder_(35).jpg",
      changes: resizeNote,
    },
    grades: [],
    packaging: [...packaging],
    specs: facts("Powder"),
    specsOnRequest: true,
    uses,
    related: ["cumin-seeds", "turmeric-powder", "red-chilli-powder"],
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    category: "Powders",
    priority: false,
    summary: "Moringa leaf powder from India, supplied in bulk.",
    description:
      "Moringa powder for bulk buyers. Mesh, moisture, and composition figures are available on request.",
    image: "/images/Home Page - Images/06-product-moringa-powder-clear.webp",
    imageAlt: "Moringa powder",
    grades: [],
    packaging: [...packaging],
    specs: facts("Leaf powder"),
    specsOnRequest: true,
    uses,
    related: ["jaggery-powder", "turmeric-powder", "dehydrated-vegetable-powders"],
  },
  {
    slug: "jaggery-powder",
    name: "Jaggery Powder",
    category: "Powders",
    priority: false,
    summary: "Jaggery powder from India, supplied in bulk.",
    description:
      "Jaggery powder for food manufacturers and other bulk buyers. Composition and mesh are sent with the quote.",
    image: "/images/Home Page - Images/07-product-jaggery-powder-clear.webp",
    imageAlt: "Jaggery powder",
    grades: [],
    packaging: [...packaging],
    specs: facts("Powder"),
    specsOnRequest: true,
    uses,
    related: ["moringa-powder", "turmeric-powder", "dehydrated-vegetable-powders"],
  },
  {
    slug: "dehydrated-vegetable-powders",
    name: "Dehydrated Vegetable Powders",
    category: "Vegetable powders",
    priority: false,
    summary: "Thirteen dehydrated vegetable powders from India, supplied in bulk.",
    description:
      "Thirteen dehydrated vegetable powders from India, listed below. Moisture and mesh are quoted per powder.",
    image: "/images/Home Page - Images/08-product-vegetable-powders-clear.webp",
    imageAlt: "Dehydrated vegetable powders",
    grades: [],
    packaging: [...packaging],
    specs: facts("Dehydrated powder"),
    specsOnRequest: true,
    powders: vegetablePowders,
    uses,
    related: ["moringa-powder", "jaggery-powder", "turmeric-powder"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsIn(category: Product["category"]) {
  return products.filter((product) => product.category === category);
}

export const priorityProducts = products.filter((product) => product.priority);

export const categories = ["Spices", "Powders", "Vegetable powders"] as const;
