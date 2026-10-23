export type SpecRow = { label: string; value: string };

export type Grade = { name: string; note?: string };

export type Variety = { name: string; note: string; specs: SpecRow[] };

export type ImageCredit = {
  author: string;
  authorUrl: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  changes: string;
};

export type SpecTable = {
  title: string;
  /** catalogue = restored from the existing Sarvanta site. standard = a public limit, not a lot test. */
  kind: "catalogue" | "standard";
  rows: SpecRow[];
  /** Extra sentence under the shared note, when the table needs a form or scope warning. */
  extra?: string;
};

export const specNotes = {
  catalogue:
    "These figures are the specifications published on Sarvanta Global’s existing catalogue. Exact values are confirmed per lot with a Certificate of Analysis. This page does not claim a laboratory test result, a certification, or a grade that Sarvanta holds.",
  standard:
    "Typical specifications based on industry standards (FSSAI / ISO / Spices Board). Exact values are confirmed per lot with a Certificate of Analysis. These are published limits, not a laboratory result or a certification held by Sarvanta.",
} as const;

export const catalogueGroups = [
  {
    id: "spices",
    name: "Spices",
    href: "/products/spices",
    intro:
      "Whole and ground spices from India. Red chillies and turmeric, whole and ground, are the priority lines.",
  },
  {
    id: "herbal",
    name: "Natural and herbal powders",
    href: "/products/powders",
    intro: "Moringa, jaggery, ashwagandha, banana, and gooseberry (amla), supplied in bulk from India.",
  },
  {
    id: "vegetables",
    name: "Dehydrated vegetable and fruit powders",
    href: "/products/vegetables",
    intro:
      "Twelve powders, each quoted on its own. Onion powder covers the red and white onion powders named on the existing catalogue.",
  },
] as const;

export type CatalogueGroupId = (typeof catalogueGroups)[number]["id"];

export type Product = {
  slug: string;
  name: string;
  category: CatalogueGroupId;
  priority: boolean;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageCredit: ImageCredit;
  grades: Grade[];
  packaging: string[];
  tables: SpecTable[];
  varieties?: Variety[];
  uses: string[];
  related: string[];
};

const resizeNote = "Resized and compressed to WebP for this demo. No other retouching.";

const cc0 = "https://creativecommons.org/publicdomain/zero/1.0/";
const ccBy2 = "https://creativecommons.org/licenses/by/2.0/";
const ccBy4 = "https://creativecommons.org/licenses/by/4.0/";
const ccBySa1 = "https://creativecommons.org/licenses/by-sa/1.0/";
const ccBySa3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const ccBySa4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const pd = "https://creativecommons.org/publicdomain/mark/1.0/";

function commons(file: string) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
}

function shot(
  author: string,
  license: string,
  licenseUrl: string,
  file: string,
  authorUrl?: string,
): ImageCredit {
  const sourceUrl = commons(file);
  return {
    author,
    authorUrl: authorUrl ?? sourceUrl,
    license,
    licenseUrl,
    sourceUrl,
    changes: resizeNote,
  };
}

const buyers = [
  "Food manufacturers",
  "Importers and distributors",
  "Wholesalers",
  "Buyers in India",
  "HoReCa",
  "Private label, on request",
];

const bulkPack = ["25 kg PP bags", "50 kg PP bags", "Jute bags", "Custom packing"];

const catalogueVegRows: SpecRow[] = [
  { label: "Origin", value: "India" },
  { label: "Processing", value: "Dehydrated & Spray Dried" },
  { label: "Moisture", value: "≤ 5%" },
  { label: "Colour", value: "Natural" },
  { label: "Additives", value: "No Artificial Additives" },
  { label: "Shelf Life", value: "24 Months (Recommended Storage)" },
];

const vegPack = ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"];

const fssaiVegPowder: SpecTable = {
  title: "Typical limits for vegetable powders",
  kind: "standard",
  extra:
    "Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011, regulation 2.3.36, row “Powders of all vegetables”.",
  rows: [
    { label: "Moisture", value: "Not more than 5.0 percent" },
    { label: "Acid insoluble ash", value: "Not more than 0.5 percent" },
    { label: "Peroxidase test", value: "Negative" },
    { label: "Powder", value: "Free flowing and free from agglomerates" },
  ],
};

const fssaiDriedFruit: SpecTable = {
  title: "Typical limits for dehydrated fruit",
  kind: "standard",
  extra:
    "Same regulations, regulation 2.3.35, Dehydrated Fruits. This is the general ceiling for dehydrated fruit, including powder. It is not a separate monograph for banana, amla, lemon, or tamarind.",
  rows: [
    { label: "Moisture", value: "Not more than 20 percent m/m" },
    { label: "Appearance", value: "Uniform colour. Free from extraneous matter" },
    { label: "Powder", value: "Free flowing and free from agglomerates" },
  ],
};

const catalogueVegTable: SpecTable = {
  title: "Catalogue specification",
  kind: "catalogue",
  rows: catalogueVegRows,
};

function vegProductTables(specific?: SpecTable): SpecTable[] {
  return specific ? [catalogueVegTable, specific] : [catalogueVegTable, fssaiVegPowder];
}

const chilliSpecs = {
  teja: [
    { label: "ASTA Color (Min)", value: "160–180" },
    { label: "SHU Pungency (Min)", value: "50,000–70,000" },
    { label: "Moisture (%) Max", value: "12.0%" },
    { label: "Admixture (%) Max", value: "2.0%" },
    { label: "Foreign Matter (%) Max", value: "1.0%" },
    { label: "Damaged/Discoloured (%) Max", value: "2.0%" },
    { label: "Stem (%) Max", value: "10.0%" },
    { label: "Color", value: "Bright Red" },
    { label: "Description", value: "Hot & Pungent" },
  ],
  byadgi: [
    { label: "ASTA Color (Min)", value: "180–220" },
    { label: "SHU Pungency (Min)", value: "8,000–15,000" },
    { label: "Moisture (%) Max", value: "12.0%" },
    { label: "Admixture (%) Max", value: "2.0%" },
    { label: "Foreign Matter (%) Max", value: "1.0%" },
    { label: "Damaged/Discoloured (%) Max", value: "2.0%" },
    { label: "Stem (%) Max", value: "15.0%" },
    { label: "Color", value: "Deep Red" },
    { label: "Description", value: "Mild Pungent" },
  ],
  sannam: [
    { label: "ASTA Color (Min)", value: "140–160" },
    { label: "SHU Pungency (Min)", value: "30,000–50,000" },
    { label: "Moisture (%) Max", value: "12.0%" },
    { label: "Admixture (%) Max", value: "2.0%" },
    { label: "Foreign Matter (%) Max", value: "1.0%" },
    { label: "Damaged/Discoloured (%) Max", value: "2.0%" },
    { label: "Stem (%) Max", value: "10.0%" },
    { label: "Color", value: "Bright Red" },
    { label: "Description", value: "Medium Pungent" },
  ],
  syngenta: [
    { label: "ASTA Color (Min)", value: "150–170" },
    { label: "SHU Pungency (Min)", value: "40,000–60,000" },
    { label: "Moisture (%) Max", value: "12.0%" },
    { label: "Admixture (%) Max", value: "2.0%" },
    { label: "Foreign Matter (%) Max", value: "1.0%" },
    { label: "Damaged/Discoloured (%) Max", value: "2.0%" },
    { label: "Stem (%) Max", value: "10.0%" },
    { label: "Color", value: "Bright Red" },
    { label: "Description", value: "Pungent" },
  ],
} satisfies Record<string, SpecRow[]>;

export const products: Product[] = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "spices",
    priority: false,
    summary: "Whole black pepper from India. Grades on the existing catalogue: MG1, TGSEB, FAQ, and Bold.",
    description:
      "Whole black pepper for bulk orders. The grades and the figures below are the ones published on Sarvanta Global’s existing catalogue. Piperine is not given a number there.",
    image: "/images/products/black-pepper.webp",
    imageAlt: "Whole black peppercorns piled together",
    imageCredit: shot("Hubertl", "CC BY 4.0", ccBy4, "Black_Pepper_IMG_4866.jpg"),
    grades: [
      { name: "MG1 (Malabar Garbled Grade 1)" },
      { name: "TGSEB (Tellicherry Garbled Special Extra Bold)" },
      { name: "FAQ (Fair Average Quality)" },
      { name: "Bold Black Pepper" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Jute Bags (Customized)"],
    tables: [
      {
        title: "Catalogue specification",
        kind: "catalogue",
        rows: [
          { label: "Origin", value: "India" },
          { label: "Colour", value: "Natural Black" },
          { label: "Moisture", value: "≤ 12%" },
          { label: "Foreign Matter", value: "≤ 1%" },
          { label: "Light Berries", value: "As per Customer Requirement" },
          { label: "Density", value: "As per Grade" },
          { label: "Cleaning", value: "Machine Cleaned" },
          { label: "Shelf Life", value: "24 Months (Recommended Storage)" },
        ],
      },
    ],
    uses: buyers,
    related: ["black-pepper-powder", "white-pepper", "red-chillies"],
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    category: "spices",
    priority: false,
    summary: "Whole white pepper from India, with the figures published on the existing catalogue.",
    description:
      "Whole white pepper for bulk buyers. The existing catalogue also names “White Pepper Powder (Coming Soon)” as a grade. That powder is not a separate product in this list.",
    image: "/images/products/white-pepper.webp",
    imageAlt: "Whole white peppercorns in a bowl",
    imageCredit: shot("Misterneedlemouse", "CC0 1.0", cc0, "White_Peppercorns.jpg"),
    grades: [
      { name: "Whole White Pepper" },
      { name: "FAQ White Pepper" },
      { name: "White Pepper Powder (Coming Soon)", note: "Named on the existing catalogue. Not a separate product here." },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    tables: [
      {
        title: "Catalogue specification",
        kind: "catalogue",
        rows: [
          { label: "Origin", value: "India" },
          { label: "Colour", value: "Natural White" },
          { label: "Moisture", value: "≤ 12%" },
          { label: "Purity", value: "≥ 99%" },
          { label: "Foreign Matter", value: "≤ 0.5%" },
          { label: "Processing", value: "Naturally Processed" },
          { label: "Shelf Life", value: "24 Months (Recommended Storage)" },
        ],
      },
    ],
    uses: buyers,
    related: ["black-pepper", "black-pepper-powder", "cumin"],
  },
  {
    slug: "red-chillies",
    name: "Red Chillies",
    category: "spices",
    priority: true,
    summary: "Whole dried red chillies: Teja S17, Byadgi, 334/Sannam, and Syngenta, with the published ASTA and SHU table.",
    description:
      "Whole red chillies for bulk buyers. The variety table is the specification sheet published on the existing catalogue. It is not used for red chilli powder.",
    image: "/images/products/red-chillies.webp",
    imageAlt: "Dried red chillies with stems on a woven tray",
    imageCredit: shot(
      "Sabina Bajracharya",
      "CC BY-SA 4.0",
      ccBySa4,
      "Dried_Capsicum_annuum-Red_Chilli_Pepper_on_Nanglo.jpg",
    ),
    grades: [],
    packaging: ["25 KG Bag", "50 KG Bag", "Custom Packaging Available"],
    tables: [
      {
        title: "Catalogue specification",
        kind: "catalogue",
        rows: [
          { label: "Origin", value: "India" },
          { label: "Processing", value: "100% Natural & Sun Dried" },
          { label: "Cleaning", value: "Machine Cleaned & Sorted" },
          { label: "Color", value: "No Artificial Color" },
          { label: "Aroma", value: "Rich Color, Aroma & Pungency" },
          { label: "Packing", value: "Hygienically Processed & Packed" },
        ],
      },
    ],
    varieties: [
      {
        name: "Teja S17 Red Chilli",
        note: "Bright red, high pungency variety with excellent color and long shelf life. Widely used for spice powders and oleoresin.",
        specs: chilliSpecs.teja,
      },
      {
        name: "Byadgi Red Chilli",
        note: "Famous for its deep red color, mild pungency and rich flavor. Ideal for color extraction and culinary use.",
        specs: chilliSpecs.byadgi,
      },
      {
        name: "334 Red Chilli / Sannam (S4)",
        note: "Medium pungency with good color and aroma. Suitable for both domestic and international markets.",
        specs: chilliSpecs.sannam,
      },
      {
        name: "Syngenta Red Chilli",
        note: "Known for its uniform size, good color and high pungency. Consistent quality for global markets.",
        specs: chilliSpecs.syngenta,
      },
    ],
    uses: buyers,
    related: ["red-chilli-powder", "turmeric-fingers", "turmeric-powder"],
  },
  {
    slug: "turmeric-fingers",
    name: "Turmeric Fingers",
    category: "spices",
    priority: true,
    summary: "Dried turmeric fingers from India. Limits below are the FSSAI standard for whole turmeric.",
    description:
      "Dried turmeric fingers (whole rhizomes) for bulk buyers. Curcumin is not given a number in the whole-turmeric standard used here. The powder has its own curcuminoid limit.",
    image: "/images/products/turmeric-fingers.webp",
    imageAlt: "A hand holding dried turmeric fingers",
    imageCredit: shot(
      "Govind Bhalerao",
      "CC0 1.0",
      cc0,
      "Dried_Vasmat_Turmeric_fingers_held_in_hand.jpg",
    ),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for whole turmeric",
        kind: "standard",
        extra: "FSSAI regulation 2.9.18 (1), Turmeric (Haldi) whole.",
        rows: [
          { label: "Extraneous matter", value: "Not more than 1.0 percent by weight" },
          { label: "Defective rhizomes", value: "Not more than 5.0 percent by weight" },
          { label: "Moisture", value: "Not more than 12.0 percent by weight" },
          { label: "Insect damaged matter", value: "Not more than 1.0 percent by weight" },
          { label: "Test for lead chromate", value: "Negative" },
          {
            label: "Appearance",
            value: "Cured bulbs or fingers. Characteristic odour and flavour. Free from mould and from added colour, including lead chromate",
          },
        ],
      },
    ],
    uses: buyers,
    related: ["turmeric-powder", "red-chillies", "black-pepper"],
  },
  {
    slug: "black-pepper-powder",
    name: "Black Pepper Powder",
    category: "spices",
    priority: false,
    summary: "Ground black pepper from India. Limits below are the FSSAI standard for ground black pepper.",
    description:
      "Ground black pepper, quoted separately from the whole grades MG1, TGSEB, FAQ, and Bold. The whole-pepper catalogue figures are not copied onto this powder.",
    image: "/images/products/black-pepper-powder.webp",
    imageAlt: "Ground black pepper spread on a light surface",
    imageCredit: shot("Susan Slater", "CC BY-SA 4.0", ccBySa4, "Black_pepper_(ground).jpg"),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for ground black pepper",
        kind: "standard",
        extra: "FSSAI regulation 2.9.15, table for ground, powdered, or crushed black pepper.",
        rows: [
          { label: "Moisture", value: "12.0 percent by mass, maximum" },
          { label: "Total ash on dry basis", value: "6.0 percent by mass, maximum" },
          { label: "Acid insoluble ash on dry basis", value: "1.2 percent by mass, maximum" },
          { label: "Volatile oil on dry basis", value: "1.0 ml/100 g, minimum" },
          { label: "Non-volatile ether extract on dry basis", value: "6.0 percent by mass, minimum" },
          { label: "Crude fibre on dry basis", value: "17.5 percent by mass, maximum" },
          { label: "Piperine on dry basis", value: "2.0 percent by mass, minimum" },
        ],
      },
    ],
    uses: buyers,
    related: ["black-pepper", "white-pepper", "cumin-powder"],
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "spices",
    priority: true,
    summary: "Ground turmeric from India. Limits below are the FSSAI standard for turmeric powder.",
    description:
      "Turmeric powder for food manufacturers and other bulk buyers. The curcuminoid minimum below is the FSSAI limit for turmeric powder, not a result from a Sarvanta lot.",
    image: "/images/products/turmeric-powder.webp",
    imageAlt: "Turmeric powder heaped on a metal spoon",
    imageCredit: shot(
      "formulatehealth",
      "CC BY 2.0",
      ccBy2,
      "Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg",
      "https://www.flickr.com/photos/189590028@N07/50191150578/",
    ),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for turmeric powder",
        kind: "standard",
        extra: "FSSAI regulation 2.9.18 (2), Turmeric (Haldi) powder.",
        rows: [
          { label: "Moisture", value: "Not more than 10.0 percent by weight" },
          { label: "Total ash on dry basis", value: "Not more than 9.0 percent by weight" },
          { label: "Ash insoluble in dilute HCl on dry basis", value: "Not more than 1.5 percent by weight" },
          { label: "Curcuminoid content on dry basis", value: "Not less than 2.0 percent by weight" },
          { label: "Total starch", value: "Not more than 60.0 percent by weight" },
          { label: "Test for lead chromate", value: "Negative" },
        ],
      },
    ],
    uses: buyers,
    related: ["turmeric-fingers", "red-chilli-powder", "cumin-powder"],
  },
  {
    slug: "red-chilli-powder",
    name: "Red Chilli Powder",
    category: "spices",
    priority: true,
    summary: "Ground red chilli from India. Limits below are the FSSAI standard for chilli powder, not the whole-pod table.",
    description:
      "Ground red chilli, quoted on its own sheet. The ASTA and SHU table for whole Teja, Byadgi, 334/Sannam, and Syngenta chillies is not reused here. FSSAI’s powder standard does not set an ASTA colour or SHU figure.",
    image: "/images/products/red-chilli-powder.webp",
    imageAlt: "A mound of red chilli powder on a spoon, with dried chillies behind it",
    imageCaption: "The photograph is Byadgi chilli powder, one type of red chilli powder.",
    imageCredit: shot("GI tagged products", "CC BY-SA 4.0", ccBySa4, "Byadgi chili powder.jpg"),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for chilli powder",
        kind: "standard",
        extra: "FSSAI regulation 2.9.3 (2), Chillies and Capsicum (Lal Mirchi) powder.",
        rows: [
          { label: "Moisture", value: "Not more than 11.0 percent by weight" },
          { label: "Total ash on dry basis", value: "Not more than 8.0 percent by weight" },
          { label: "Ash insoluble in dilute HCl on dry basis", value: "Not more than 1.3 percent by weight" },
          { label: "Crude fibre", value: "Not more than 30.0 percent by weight" },
          { label: "Non-volatile ether extract on dry basis", value: "Not less than 12.0 percent by weight" },
          {
            label: "Edible vegetable oil",
            value: "If used, not more than 2.0 percent by weight, and declared on the label",
          },
        ],
      },
    ],
    uses: buyers,
    related: ["red-chillies", "turmeric-powder", "cumin-powder"],
  },
  {
    slug: "cumin",
    name: "Cumin (Jeera)",
    category: "spices",
    priority: false,
    summary: "Cumin seeds (jeera) from India. Limits below are the FSSAI standard for whole cumin.",
    description:
      "Cumin seeds for importers, manufacturers, and other bulk buyers. Cumin powder is a separate product. The same regulation also sets cleanliness limits for mould, broken seed, insect damage, and uric acid; those rows are in the source note.",
    image: "/images/products/cumin-seeds.webp",
    imageAlt: "Cumin seeds in a small bowl",
    imageCredit: shot("Fumikas Sagisavas", "CC0 1.0", cc0, "Dried_cumin_seeds.jpg"),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for whole cumin",
        kind: "standard",
        extra:
          "FSSAI regulation 2.9.8 (1), Cumin (Safed Zeera) whole. Further limits in that table: mouldy seeds 1.0 percent maximum, damaged fruits 5.0 percent maximum, broken 3.0 percent maximum, dead insects and rodent contamination 0.5 percent maximum, insect-damaged matter 1.0 percent maximum, animal excreta 1.0 mg/kg maximum, uric acid 100 mg/kg on dry basis maximum.",
        rows: [
          { label: "Moisture", value: "10.0 percent by mass, maximum" },
          { label: "Total ash on dry basis", value: "12.0 percent by mass, maximum" },
          { label: "Acid insoluble ash on dry basis", value: "4.0 percent by mass, maximum" },
          { label: "Volatile oil on dry basis", value: "1.5 ml/100 g, minimum" },
          { label: "Extraneous vegetable matter", value: "3 percent by mass, maximum" },
          { label: "Foreign matter", value: "0.5 percent by mass, maximum" },
        ],
      },
    ],
    uses: buyers,
    related: ["cumin-powder", "coriander-powder", "turmeric-fingers"],
  },
  {
    slug: "cumin-powder",
    name: "Cumin Powder",
    category: "spices",
    priority: false,
    summary: "Ground cumin from India. Limits below are the FSSAI standard for cumin powder.",
    description: "Ground cumin, quoted separately from cumin seeds. Mesh size is not set in this standard.",
    image: "/images/products/cumin-powder.webp",
    imageAlt: "Ground cumin beside a pile of whole cumin seeds",
    imageCaption: "The photograph shows ground cumin beside whole seeds.",
    imageCredit: shot(
      "Henna",
      "CC BY-SA 1.0",
      ccBySa1,
      "Cumin-spice.jpg",
      "https://commons.wikimedia.org/wiki/User:Henna",
    ),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for cumin powder",
        kind: "standard",
        extra:
          "FSSAI regulation 2.9.8 (2), Cumin (Safed Zeera) powder. The same table also sets uric acid at 100 mg/kg on dry basis, maximum.",
        rows: [
          { label: "Moisture", value: "10.0 percent by mass, maximum" },
          { label: "Total ash on dry basis", value: "9.5 percent by mass, maximum" },
          { label: "Acid insoluble ash on dry basis", value: "1.5 percent by mass, maximum" },
          { label: "Volatile oil on dry basis", value: "1.3 ml/100 g, minimum" },
        ],
      },
    ],
    uses: buyers,
    related: ["cumin", "coriander-powder", "turmeric-powder"],
  },
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    category: "spices",
    priority: false,
    summary: "Ground coriander from India. Limits below are the FSSAI standard for coriander powder.",
    description:
      "Coriander powder for bulk buyers. Whole coriander is not listed as its own product. Mesh size is not set in this standard.",
    image: "/images/products/coriander-powder.webp",
    imageAlt: "Coriander powder in a small patterned bowl",
    imageCredit: shot("Nithyasrm", "CC BY-SA 4.0", ccBySa4, "Coriander_powder.JPG"),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Typical limits for coriander powder",
        kind: "standard",
        extra: "FSSAI regulation 2.9.7 (2), Coriander (Dhania) powder.",
        rows: [
          { label: "Moisture", value: "Not more than 9.0 percent by weight" },
          { label: "Volatile oil on dry basis", value: "Not less than 0.09 percent v/w" },
          { label: "Total ash on dry basis", value: "Not more than 7.0 percent by weight" },
          { label: "Ash insoluble in dilute HCl on dry basis", value: "Not more than 1.5 percent by weight" },
          { label: "Added colour, starch, bleach, or preservative", value: "Absent" },
        ],
      },
    ],
    uses: buyers,
    related: ["cumin-powder", "turmeric-powder", "red-chilli-powder"],
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    category: "herbal",
    priority: false,
    summary: "Moringa leaf powder from India, with the figures published on the existing catalogue.",
    description:
      "Moringa powder for bulk buyers. The grades and figures below are copied from the existing catalogue, including the mesh and the organic grade offered on request. This page does not say Sarvanta holds an organic certificate.",
    image: "/images/products/moringa-powder.webp",
    imageAlt: "Moringa leaf powder in a wooden bowl with a spoon",
    imageCredit: shot("Satyalatha", "CC BY-SA 4.0", ccBySa4, "Moringa_leaves_powder.jpg"),
    grades: [
      { name: "Moringa Leaf Powder (Fine Mesh)" },
      { name: "Moringa Leaf Powder (Standard)" },
      { name: "Organic Moringa Leaf Powder (Available on Request)" },
      { name: "Food Grade Moringa Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    tables: [
      {
        title: "Catalogue specification",
        kind: "catalogue",
        rows: [
          { label: "Botanical Name", value: "Moringa oleifera" },
          { label: "Origin", value: "India" },
          { label: "Form", value: "Fine Powder" },
          { label: "Colour", value: "Natural Green" },
          { label: "Moisture", value: "≤ 6%" },
          { label: "Ash", value: "≤ 8%" },
          { label: "Protein", value: "≥ 25%" },
          { label: "Particle Size", value: "80 – 120 Mesh" },
          { label: "Solubility", value: "100% Water Soluble" },
          { label: "Shelf Life", value: "24 Months (Recommended Storage)" },
        ],
      },
    ],
    uses: buyers,
    related: ["jaggery-powder", "ashwagandha", "gooseberry-amla-powder"],
  },
  {
    slug: "jaggery-powder",
    name: "Jaggery Powder",
    category: "herbal",
    priority: false,
    summary: "Jaggery powder from India, with the figures published on the existing catalogue.",
    description:
      "Jaggery powder for food manufacturers and other bulk buyers. The figures below are the ones on the existing catalogue. An organic grade is named there as available on request. This page does not say Sarvanta holds an organic certificate.",
    image: "/images/products/jaggery-powder.webp",
    imageAlt: "A close view of loose jaggery powder",
    imageCredit: shot(
      "Thamizhpparithi Maari",
      "CC BY-SA 3.0",
      ccBySa3,
      "An image of jaggery powder.JPG",
      "https://commons.wikimedia.org/wiki/User:Thamizhpparithi_Maari",
    ),
    grades: [
      { name: "Jaggery Powder (Fine Mesh)" },
      { name: "Jaggery Powder (Standard)" },
      { name: "Organic Jaggery Powder (Available on Request)" },
      { name: "Food Grade Jaggery Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    tables: [
      {
        title: "Catalogue specification",
        kind: "catalogue",
        rows: [
          { label: "Source", value: "Sugarcane Juice" },
          { label: "Origin", value: "India" },
          { label: "Form", value: "Fine Powder" },
          { label: "Colour", value: "Natural Golden Brown" },
          { label: "Moisture", value: "≤ 5%" },
          { label: "Sucrose", value: "≥ 70%" },
          { label: "Total Ash", value: "≤ 2%" },
          { label: "pH", value: "6.0 – 7.0" },
          { label: "Particle Size", value: "80 – 100 Mesh" },
          { label: "Shelf Life", value: "12 Months (Recommended Storage)" },
        ],
      },
    ],
    uses: buyers,
    related: ["moringa-powder", "banana-powder", "turmeric-powder"],
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha",
    category: "herbal",
    priority: false,
    summary: "Ashwagandha from India. The form is confirmed on request. The limits below are the pharmacopoeia reference for the root.",
    description:
      "Ashwagandha (Withania somnifera) for bulk buyers. Forms are available on request. This page does not state that the supply is root, powder, or another form. The table is the published reference for dried root in the Ayurvedic Pharmacopoeia of India. It is not a Sarvanta lot specification, and it is not a claim that root will be supplied.",
    image: "/images/products/ashwagandha.webp",
    imageAlt: "Dried ashwagandha root in a wooden bowl",
    imageCaption: "The photograph shows dried root so the plant is recognisable. It does not state the form that will be supplied.",
    imageCredit: shot(
      "formulatehealth",
      "CC BY 2.0",
      ccBy2,
      "Ashwagandha_Root.jpg",
      "https://www.flickr.com/photos/formulatehealth/50191955857/",
    ),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Reference limits for Asvagandha root",
        kind: "standard",
        extra:
          "Ayurvedic Pharmacopoeia of India, Part I, Volume I, Asvagandha (root). A moisture limit is not printed in that monograph, so none is shown. Water-soluble extractive is omitted because the public text does not give a clear figure.",
        rows: [
          { label: "Foreign matter", value: "Not more than 2 percent" },
          { label: "Total ash", value: "Not more than 7 percent" },
          { label: "Acid-insoluble ash", value: "Not more than 1 percent" },
          { label: "Alcohol (25 percent) soluble extractive", value: "Not less than 15 percent" },
          { label: "Total alkaloids", value: "Not less than 0.2 percent" },
        ],
      },
    ],
    uses: buyers,
    related: ["moringa-powder", "gooseberry-amla-powder", "turmeric-powder"],
  },
  {
    slug: "banana-powder",
    name: "Banana Powder",
    category: "herbal",
    priority: false,
    summary: "Banana powder from India. The only public limit used here is the FSSAI ceiling for dehydrated fruit.",
    description:
      "Banana powder for bulk buyers. A banana-powder standard with ash, mesh, or volatile-oil figures was not found in the FSSAI spice or fruit chapters checked for this page, so those fields are left out.",
    image: "/images/products/banana-powder.webp",
    imageAlt: "Dried banana chips spread on a cloth",
    imageCaption: "The photograph shows dried banana. The product listed is banana powder.",
    imageCredit: shot("Fumikas Sagisavas", "CC0 1.0", cc0, "Dried_banana_chips.jpg"),
    grades: [],
    packaging: bulkPack,
    tables: [fssaiDriedFruit],
    uses: buyers,
    related: ["jaggery-powder", "gooseberry-amla-powder", "moringa-powder"],
  },
  {
    slug: "gooseberry-amla-powder",
    name: "Gooseberry (Amla) Powder",
    category: "herbal",
    priority: false,
    summary: "Amla powder from India. Reference limits are the pharmacopoeia monograph for dried amla fruit, plus the FSSAI dehydrated-fruit ceiling.",
    description:
      "Gooseberry (amla) powder, Emblica officinalis, for bulk buyers. The pharmacopoeia rows are the published limits for dried fruit pericarp. They are not a laboratory result for a Sarvanta lot. No ascorbic-acid percentage is printed in that identity table, so none is shown.",
    image: "/images/products/gooseberry-amla.webp",
    imageAlt: "Fresh green Indian gooseberries (amla) with leaves",
    imageCaption: "The photograph shows fresh amla fruit. The product listed is the powder.",
    imageCredit: shot("Harpreet 712", "CC BY-SA 4.0", ccBySa4, "Indian_gooseberry_2.jpg"),
    grades: [],
    packaging: bulkPack,
    tables: [
      {
        title: "Reference limits for dried amla fruit",
        kind: "standard",
        extra:
          "Ayurvedic Pharmacopoeia of India, Part I, Volume I, Amalaki (dried fruit). The monograph describes the dried pericarp.",
        rows: [
          { label: "Foreign matter, including seed and seed coat", value: "Not more than 3 percent" },
          { label: "Total ash", value: "Not more than 7 percent" },
          { label: "Acid-insoluble ash", value: "Not more than 2 percent" },
          { label: "Alcohol-soluble extractive", value: "Not less than 40 percent" },
          { label: "Water-soluble extractive", value: "Not less than 50 percent" },
        ],
      },
      fssaiDriedFruit,
    ],
    uses: buyers,
    related: ["ashwagandha", "moringa-powder", "lemon-powder"],
  },
  {
    slug: "tomato-powder",
    name: "Tomato Powder",
    category: "vegetables",
    priority: false,
    summary: "Tomato powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description:
      "Tomato powder for bulk buyers. A tomato-powder colour or lycopene figure was not found in the standards used here, so none is shown.",
    image: "/images/products/tomato-powder.webp",
    imageAlt: "Sun-dried tomato halves on a paper towel",
    imageCaption: "The photograph shows sun-dried tomato. The product listed is tomato powder.",
    imageCredit: shot(
      "Andrew Deacon",
      "CC BY 2.0",
      ccBy2,
      "Sun-dried tomatoes.jpg",
      "https://www.flickr.com/photos/aedeacon/497503617/",
    ),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["onion-powder", "beetroot-powder", "carrot-powder"],
  },
  {
    slug: "potato-powder",
    name: "Potato Powder",
    category: "vegetables",
    priority: false,
    summary: "Potato powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description: "Potato powder for bulk buyers. Mesh size is not set in the standard used here.",
    image: "/images/products/potato-powder.webp",
    imageAlt: "Potato tubers with short underground stems",
    imageCaption: "The photograph shows the potato tuber. The product listed is potato powder.",
    imageCredit: shot(
      "Gilles Ayotte",
      "CC BY-SA 4.0",
      ccBySa4,
      "Solanum_tuberosum_15-p.bot-solana.tuber-24.jpg",
    ),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["tomato-powder", "arrowroot-powder", "onion-powder"],
  },
  {
    slug: "spinach-powder",
    name: "Spinach Powder",
    category: "vegetables",
    priority: false,
    summary: "Spinach powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description: "Spinach powder for bulk buyers. A separate spinach-powder monograph was not found, so the general vegetable-powder limit is used.",
    image: "/images/products/spinach-powder.webp",
    imageAlt: "A bunch of fresh spinach leaves",
    imageCaption: "The photograph shows fresh spinach leaves. The product listed is spinach powder.",
    imageCredit: shot("Charipearl", "CC BY-SA 4.0", ccBySa4, "Fresh_Spinach_leaves.jpg"),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["mint-powder", "beetroot-powder", "moringa-powder"],
  },
  {
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    category: "vegetables",
    priority: false,
    summary: "Beetroot powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description: "Beetroot powder for bulk buyers.",
    image: "/images/products/beetroot-powder.webp",
    imageAlt: "Pieces of dried beetroot",
    imageCaption: "The photograph shows dried beetroot. The product listed is beetroot powder.",
    imageCredit: shot("Graeme Bartlett", "CC BY-SA 3.0", ccBySa3, "Dried_beetroot.jpg"),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["carrot-powder", "tomato-powder", "spinach-powder"],
  },
  {
    slug: "arrowroot-powder",
    name: "Arrowroot Powder",
    category: "vegetables",
    priority: false,
    summary: "Arrowroot powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description:
      "Arrowroot powder for bulk buyers. It was one of the dehydrated powders on the existing catalogue. A separate arrowroot-starch numerical standard was not used, because a public text with those figures was not confirmed.",
    image: "/images/products/arrowroot-powder.webp",
    imageAlt: "Arrowroot flour spread on a dark surface",
    imageCredit: shot(
      "Elmer Centeno Guevarra",
      "CC BY-SA 4.0",
      ccBySa4,
      "ARROW_ROOT_FLOUR_FROM_SAGUBE_RHIZOME_IN_PANGASINAN.jpg",
    ),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["potato-powder", "ginger-powder", "banana-powder"],
  },
  {
    slug: "ginger-powder",
    name: "Ginger Powder",
    category: "vegetables",
    priority: false,
    summary: "Ginger powder from India. Catalogue figures, plus the FSSAI standard for dried ginger powder.",
    description:
      "Ginger powder for bulk buyers. The catalogue moisture figure (not more than 5 percent) is tighter than the FSSAI spice-standard ceiling (not more than 12 percent). Both are shown, with their sources. The lot sheet says which one the quote follows.",
    image: "/images/products/ginger-powder.webp",
    imageAlt: "Ginger powder spread on a white surface",
    imageCredit: shot("Obsidian Soul", "Public domain", pd, "Ginger_powder.JPG"),
    grades: [],
    packaging: vegPack,
    tables: [
      catalogueVegTable,
      {
        title: "Typical limits for dried ginger powder",
        kind: "standard",
        extra: "FSSAI regulation 2.9.11 (2), Dried Ginger powder. Unbleached and bleached ash limits are both printed in the regulation.",
        rows: [
          { label: "Moisture", value: "Not more than 12.0 percent by weight" },
          { label: "Total ash on dry basis, unbleached", value: "Not more than 8.0 percent by weight" },
          { label: "Total ash on dry basis, bleached", value: "Not more than 12.0 percent by weight" },
          { label: "Calcium as calcium oxide, unbleached", value: "Not more than 1.1 percent by weight" },
          { label: "Calcium as calcium oxide, bleached", value: "Not more than 2.5 percent by weight" },
          { label: "Volatile oil on dry basis", value: "Not less than 1.0 percent" },
          { label: "Water soluble ash on dry basis", value: "Not less than 1.7 percent by weight" },
          { label: "Acid insoluble ash on dry basis", value: "Not more than 1.0 percent by weight" },
          { label: "Alcohol (90% v/w) soluble extract on dry basis", value: "Not less than 5.1 percent by weight" },
          { label: "Cold water soluble extract on dry basis", value: "Not less than 10.9 percent" },
        ],
      },
    ],
    uses: buyers,
    related: ["garlic-powder", "turmeric-powder", "onion-powder"],
  },
  {
    slug: "garlic-powder",
    name: "Garlic Powder",
    category: "vegetables",
    priority: false,
    summary: "Garlic powder from India. Catalogue figures, plus the FSSAI standard for powdered dehydrated garlic.",
    description: "Garlic powder for bulk buyers. The powdered-garlic moisture row is the one used from the FSSAI garlic standard.",
    image: "/images/products/garlic-powder.webp",
    imageAlt: "Garlic powder in a close pile",
    imageCredit: shot(
      "Emilian Robert Vicol",
      "CC BY 2.0",
      ccBy2,
      "Ground-Garlic_31534-480x360_(4904476773).jpg",
    ),
    grades: [],
    packaging: vegPack,
    tables: [
      catalogueVegTable,
      {
        title: "Typical limits for powdered dehydrated garlic",
        kind: "standard",
        extra: "FSSAI regulation 2.9.26, Dried (Dehydrated) Garlic, powdered form.",
        rows: [
          { label: "Extraneous matter", value: "Not more than 0.5 percent" },
          { label: "Moisture, powdered garlic", value: "Not more than 5.0 percent by weight" },
          { label: "Total ash on dry basis", value: "Not more than 5.0 percent by dry weight" },
          { label: "Ash insoluble in dilute HCl", value: "Not more than 0.5 percent by weight" },
          { label: "Cold water soluble extract on dry basis", value: "Not less than 70.0 and not more than 90.0 percent by weight" },
          { label: "Volatile organic sulphur compounds on dry basis", value: "Not less than 0.3 percent by weight" },
          { label: "Peroxidase test", value: "Negative" },
          { label: "Appearance", value: "White to pale cream. Free from scorched, toasted, and baked particles" },
        ],
      },
    ],
    uses: buyers,
    related: ["onion-powder", "ginger-powder", "cumin-powder"],
  },
  {
    slug: "lemon-powder",
    name: "Lemon Powder",
    category: "vegetables",
    priority: false,
    summary: "Lemon powder from India. Catalogue figures, plus the FSSAI ceiling for dehydrated fruit.",
    description:
      "Lemon powder for bulk buyers. It was grouped with the dehydrated powders on the existing catalogue. A lemon-powder standard with acid or mesh figures was not found in the chapters checked, so those fields are left out.",
    image: "/images/products/lemon-powder.webp",
    imageAlt: "Dried lemon slices",
    imageCaption: "The photograph shows dried lemon. The product listed is lemon powder.",
    imageCredit: shot("Fumikas Sagisavas", "CC0 1.0", cc0, "Dried_lemon_slices.jpg"),
    grades: [],
    packaging: vegPack,
    tables: [catalogueVegTable, fssaiDriedFruit],
    uses: buyers,
    related: ["tamarind-powder", "gooseberry-amla-powder", "ginger-powder"],
  },
  {
    slug: "mint-powder",
    name: "Mint Powder",
    category: "vegetables",
    priority: false,
    summary: "Mint powder from India. Catalogue figures, plus the FSSAI standard for dried mint leaves.",
    description:
      "Mint powder for bulk buyers. FSSAI regulation 2.9.38 is written for dried mint leaves (Mentha spicata), not as a separate powder grade. Those leaf limits are the published reference. A powder-only table was not found.",
    image: "/images/products/mint-powder.webp",
    imageAlt: "A close view of dried mint leaves",
    imageCaption: "The photograph shows dried mint leaves. The product listed is mint powder.",
    imageCredit: shot("Fumikas Sagisavas", "CC0 1.0", cc0, "Dried mint leaves tea.jpg"),
    grades: [],
    packaging: vegPack,
    tables: [
      catalogueVegTable,
      {
        title: "Typical limits for dried mint leaves",
        kind: "standard",
        extra: "FSSAI regulation 2.9.38, Dried mint (Mentha spicata / Mentha viridis). Shown as the leaf reference for mint powder.",
        rows: [
          { label: "Moisture", value: "13.0 percent by mass, maximum" },
          { label: "Foreign matter", value: "1.0 percent by mass, maximum" },
          { label: "Extraneous vegetable matter", value: "3.0 percent by mass, maximum" },
          { label: "Total ash on dry basis", value: "12.0 percent by mass, maximum" },
          { label: "Acid-insoluble ash on dry basis", value: "2.5 percent by mass, maximum" },
          { label: "Volatile oil on dry basis", value: "0.5 ml/100 g, minimum" },
        ],
      },
    ],
    uses: buyers,
    related: ["coriander-powder", "spinach-powder", "ginger-powder"],
  },
  {
    slug: "carrot-powder",
    name: "Carrot Powder",
    category: "vegetables",
    priority: false,
    summary: "Carrot powder from India. Catalogue figures, plus the FSSAI limit for vegetable powders.",
    description: "Carrot powder for bulk buyers.",
    image: "/images/products/carrot-powder.webp",
    imageAlt: "Peeled carrots being sliced",
    imageCaption: "The photograph shows carrots. The product listed is carrot powder.",
    imageCredit: shot("W.carter", "CC0 1.0", cc0, "Preparing_and_slicing_carrots.jpg"),
    grades: [],
    packaging: vegPack,
    tables: vegProductTables(),
    uses: buyers,
    related: ["beetroot-powder", "tomato-powder", "spinach-powder"],
  },
  {
    slug: "tamarind-powder",
    name: "Tamarind Powder",
    category: "vegetables",
    priority: false,
    summary: "Tamarind powder from India. Catalogue figures, plus the FSSAI ceiling for dehydrated fruit.",
    description:
      "Tamarind powder for bulk buyers. The FSSAI standard for tamarind pulp, puree, and concentrate is a different product (a wet pulp with a total-soluble-solids minimum). Those pulp figures are not used here.",
    image: "/images/products/tamarind-powder.webp",
    imageAlt: "Tamarind pulp on a plain white plate",
    imageCaption: "The photograph shows tamarind pulp. The product listed is tamarind powder.",
    imageCredit: shot(
      "Miansari66",
      "Public domain",
      pd,
      "Imli pulp.JPG",
      "https://commons.wikimedia.org/wiki/User:Miansari66",
    ),
    grades: [],
    packaging: vegPack,
    tables: [catalogueVegTable, fssaiDriedFruit],
    uses: buyers,
    related: ["lemon-powder", "jaggery-powder", "tomato-powder"],
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    category: "vegetables",
    priority: false,
    summary: "Onion powder from India. Red and white onion were both named on the existing catalogue.",
    description:
      "Onion powder for bulk buyers. The existing catalogue listed red onion powder and white onion powder separately. Ask which one you need with the quote. FSSAI allows dehydrated onion to be white, cream, pink, or red.",
    image: "/images/products/onion-powder.webp",
    imageAlt: "Dried onion pieces",
    imageCaption: "The photograph shows dried onion. The product listed is onion powder.",
    imageCredit: shot("Roenashy", "CC BY-SA 4.0", ccBySa4, "Dried_onion.jpg"),
    grades: [
      { name: "Red onion powder", note: "Named on the existing catalogue." },
      { name: "White onion powder", note: "Named on the existing catalogue." },
    ],
    packaging: vegPack,
    tables: [
      catalogueVegTable,
      {
        title: "Typical limits for powdered dehydrated onion",
        kind: "standard",
        extra: "FSSAI regulation 2.9.28, Dehydrated Onion, powdered form.",
        rows: [
          { label: "Extraneous matter", value: "Not more than 0.5 percent by weight" },
          { label: "Moisture, powdered onion", value: "Not more than 5.0 percent by weight" },
          { label: "Total ash on dry basis", value: "Not more than 5.0 percent by weight" },
          { label: "Ash insoluble in dilute HCl", value: "Not more than 0.5 percent by weight" },
          { label: "Peroxidase test", value: "Negative" },
          { label: "Colour", value: "White, cream, pink, or red" },
        ],
      },
    ],
    uses: buyers,
    related: ["garlic-powder", "tomato-powder", "cumin-powder"],
  },
];

const priorityOrder = ["red-chillies", "red-chilli-powder", "turmeric-fingers", "turmeric-powder"];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsIn(category: CatalogueGroupId) {
  return products.filter((product) => product.category === category);
}

export function groupById(id: CatalogueGroupId) {
  return catalogueGroups.find((group) => group.id === id)!;
}

export const priorityProducts = priorityOrder.map((slug) => getProductBySlug(slug)!);
