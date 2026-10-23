# Specification sources

Checked 23 October 2026. Every figure on a product page comes from one of the documents below. Nothing was filled in from memory when the text did not print a number.

## How the tables are labelled

- **Catalogue specification.** Copied from the original site data in git `main`, file `lib/products.ts` (commit `54c7863`). The owner confirmed those figures may be used. Wording and numbers are unchanged. The page note says they come from Sarvanta Global’s existing catalogue and are confirmed per lot with a Certificate of Analysis. They are not presented as a new laboratory result.
- **Typical limits.** Taken from a public standard and labelled as such. The page note is: “Typical specifications based on industry standards (FSSAI / ISO / Spices Board). Exact values are confirmed per lot with a Certificate of Analysis.” The site does not say Sarvanta holds FSSAI, ISO, Spices Board, AGMARK, or organic certification.

## Documents

1. Original catalogue. `git show 54c7863:lib/products.ts` in this repository. Products covered there: black pepper, white pepper, red chillies (including the four variety sheets), moringa powder, jaggery powder, and one shared sheet for the dehydrated vegetable powders.
2. FSSAI spices compendium, Chapter 2.9, Salt, Spices, Condiments and related products, Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011.  
   https://www.fssai.gov.in/docs/food-law/regulations/compendium/food-products-standards/Chapter%202_9_Salt_Spices_Condiments%20and%20related%20products.pdf
3. FSSAI fruit and vegetable compendium, Chapter 2.3.  
   https://www.fssai.gov.in/docs/food-law/regulations/compendium/food-products-standards/Chapter%202_3_Fruit_Vegetable_products.pdf
4. Ayurvedic Pharmacopoeia of India, Part I, Volume I. Public scan used for the two monographs below:  
   https://www.ayurveda.hu/archiv/api/API-Vol-1.pdf  
   (The same monographs are in the archive.org compilation of the Ayurvedic Pharmacopoeia volumes.)

## What was not used

- ISO 5562 (turmeric), ISO 959 (pepper), ISO 6465 (cumin), and ISO 2255 (coriander). Public samples of those standards do not contain the full requirement tables, so no ISO number is quoted. The FSSAI regulations above are the figures on the pages.
- Spices Grading and Marking Rules, 2012 (AGMARK). Those are voluntary grade-mark rules. They are not used, because the site does not claim that Sarvanta holds an AGMARK grade.
- ASTA cleanliness specifications. A public ASTA table with the numerical cleanliness limits was not relied on. Whole-chilli ASTA colour and SHU figures are only the ones already printed on the existing catalogue.
- The FSSAI tamarind pulp, puree, and concentrate standard (regulation 2.3.18). That is a wet pulp with a total-soluble-solids minimum. It is a different product from tamarind powder, so its figures are not shown.
- Mesh size, shelf life, piperine, curcumin, or purity, wherever the source used for that product does not print them.

The original site’s quality line “Lab Tested” on jaggery is not repeated. The numeric jaggery sheet is.

## Product by product

### Black Pepper

Catalogue sheet, unchanged: Origin India; Colour Natural Black; Moisture ≤ 12%; Foreign Matter ≤ 1%; Light Berries “As per Customer Requirement”; Density “As per Grade”; Cleaning “Machine Cleaned”; Shelf Life “24 Months (Recommended Storage)”. Grades: MG1 (Malabar Garbled Grade 1), TGSEB (Tellicherry Garbled Special Extra Bold), FAQ (Fair Average Quality), Bold Black Pepper. Packing: 25 KG PP Bags, 50 KG PP Bags, Jute Bags (Customized).

### White Pepper

Catalogue sheet, unchanged: Origin India; Colour Natural White; Moisture ≤ 12%; Purity ≥ 99%; Foreign Matter ≤ 0.5%; Processing “Naturally Processed”; Shelf Life “24 Months (Recommended Storage)”. Grades include “White Pepper Powder (Coming Soon)”, which is not given its own product page.

### Red Chillies

Catalogue general sheet and the four variety sheets, unchanged.

| Variety | ASTA Color (Min) | SHU Pungency (Min) | Moisture (%) Max | Admixture (%) Max | Foreign Matter (%) Max | Damaged/Discoloured (%) Max | Stem (%) Max | Color | Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Teja S17 Red Chilli | 160–180 | 50,000–70,000 | 12.0% | 2.0% | 1.0% | 2.0% | 10.0% | Bright Red | Hot & Pungent |
| Byadgi Red Chilli | 180–220 | 8,000–15,000 | 12.0% | 2.0% | 1.0% | 2.0% | 15.0% | Deep Red | Mild Pungent |
| 334 Red Chilli / Sannam (S4) | 140–160 | 30,000–50,000 | 12.0% | 2.0% | 1.0% | 2.0% | 10.0% | Bright Red | Medium Pungent |
| Syngenta Red Chilli | 150–170 | 40,000–60,000 | 12.0% | 2.0% | 1.0% | 2.0% | 10.0% | Bright Red | Pungent |

General rows: Origin India; Processing “100% Natural & Sun Dried”; Cleaning “Machine Cleaned & Sorted”; Color “No Artificial Color”; Aroma “Rich Color, Aroma & Pungency”; Packing “Hygienically Processed & Packed”.

This variety table is not shown on Red Chilli Powder. FSSAI regulation 2.9.3 for whole chillies uses a different moisture ceiling (11.0 percent) and is not mixed into this restored sheet.

### Turmeric Fingers

FSSAI regulation 2.9.18 (1), Turmeric (Haldi) whole. Extraneous matter not more than 1.0 percent by weight. Defective rhizomes not more than 5.0 percent by weight. Moisture not more than 12.0 percent by weight. Insect damaged matter not more than 1.0 percent by weight. Test for lead chromate: negative. The regulation’s description of cured bulbs or fingers is summarised in the appearance row. Curcumin is not set for whole turmeric in this clause, so it is not shown.

### Turmeric Powder

FSSAI regulation 2.9.18 (2), Turmeric (Haldi) powder. Moisture not more than 10.0 percent by weight. Total ash on dry basis not more than 9.0 percent by weight. Ash insoluble in dilute HCl on dry basis not more than 1.5 percent by weight. Colouring power expressed as curcuminoid content on dry basis not less than 2.0 percent by weight. Total starch not more than 60.0 percent by weight. Test for lead chromate: negative.

### Black Pepper Powder

FSSAI regulation 2.9.15, ground / powdered / crushed black pepper. Moisture 12.0 percent maximum. Total ash on dry basis 6.0 percent maximum. Acid insoluble ash on dry basis 1.2 percent maximum. Volatile oil on dry basis 1.0 ml/100 g minimum. Non-volatile ether extract on dry basis 6.0 percent minimum. Crude fibre on dry basis 17.5 percent maximum. Piperine on dry basis 2.0 percent minimum. The whole-pepper catalogue sheet is not copied here.

### Red Chilli Powder

FSSAI regulation 2.9.3 (2), Chillies and Capsicum powder. Moisture not more than 11.0 percent by weight. Total ash on dry basis not more than 8.0 percent by weight. Ash insoluble in dilute HCl on dry basis not more than 1.3 percent by weight. Crude fibre not more than 30.0 percent by weight. Non-volatile ether extract on dry basis not less than 12.0 percent by weight. Edible vegetable oil, if used, not more than 2.0 percent by weight and declared on the label. No ASTA or SHU figure is printed for the powder in this clause.

### Cumin (Jeera)

FSSAI regulation 2.9.8 (1), Cumin (Safed Zeera) whole. Moisture 10.0 percent maximum. Total ash on dry basis 12.0 percent maximum. Acid insoluble ash on dry basis 4.0 percent maximum. Volatile oil 1.5 ml/100 g on dry basis minimum. Extraneous vegetable matter 3 percent maximum. Foreign matter 0.5 percent maximum. The same table also sets mouldy seeds 1.0 percent, damaged fruits 5.0 percent, broken 3.0 percent, dead insects and rodent contamination 0.5 percent, insect-damaged matter 1.0 percent, animal excreta 1.0 mg/kg, and uric acid 100 mg/kg on dry basis. Those further limits are named in the page note.

### Cumin Powder

FSSAI regulation 2.9.8 (2). Moisture 10.0 percent maximum. Total ash on dry basis 9.5 percent maximum. Acid insoluble ash on dry basis 1.5 percent maximum. Volatile oil 1.3 ml/100 g on dry basis minimum. Uric acid 100 mg/kg on dry basis maximum is named in the page note. Mesh is not set.

### Coriander Powder

FSSAI regulation 2.9.7 (2), Coriander (Dhania) powder. Moisture not more than 9.0 percent by weight. Volatile oil on dry basis not less than 0.09 percent v/w. Total ash on dry basis not more than 7.0 percent by weight. Ash insoluble in dilute HCl on dry basis not more than 1.5 percent by weight. The clause also requires the powder to be free from added colour, starch, bleach, or preservative. Whole coriander is not a separate product, so the whole-seed clause is not used as this product’s sheet.

### Moringa Powder

Catalogue sheet, unchanged: Botanical Name Moringa oleifera; Origin India; Form Fine Powder; Colour Natural Green; Moisture ≤ 6%; Ash ≤ 8%; Protein ≥ 25%; Particle Size 80 – 120 Mesh; Solubility “100% Water Soluble”; Shelf Life “24 Months (Recommended Storage)”. Grades include “Organic Moringa Leaf Powder (Available on Request)”. That line is the catalogue grade name. The page does not say an organic certificate is held. Packing: 1 KG Stand-up Pouch, 25 KG PP Bag, Custom Packaging Available.

### Jaggery Powder

Catalogue sheet, unchanged: Source Sugarcane Juice; Origin India; Form Fine Powder; Colour Natural Golden Brown; Moisture ≤ 5%; Sucrose ≥ 70%; Total Ash ≤ 2%; pH 6.0 – 7.0; Particle Size 80 – 100 Mesh; Shelf Life “12 Months (Recommended Storage)”. Grades include “Organic Jaggery Powder (Available on Request)” on the same terms as moringa. Packing matches moringa.

### Ashwagandha

Ayurvedic Pharmacopoeia of India, Part I, Volume I, Asvagandha (root): foreign matter not more than 2 percent; total ash not more than 7 percent; acid-insoluble ash not more than 1 percent; alcohol (25 percent) soluble extractive not less than 15 percent; total alkaloids not less than 0.2 percent. The monograph does not print a moisture limit, so none is shown. The water-soluble extractive line in the public scan does not give a reliable figure, so it is omitted. The monograph is for dried root. The product is listed only as “Ashwagandha”, and the page says the form is confirmed on request.

### Banana Powder

FSSAI regulation 2.3.35, Dehydrated Fruits: moisture not more than 20 percent m/m; uniform colour; free from extraneous matter; powder free flowing and free from agglomerates. No banana-specific ash, mesh, or acid figure was found in the chapters checked.

### Gooseberry (Amla) Powder

Ayurvedic Pharmacopoeia of India, Part I, Volume I, Amalaki (dried fruit): foreign matter including seed and seed coat not more than 3 percent; total ash not more than 7 percent; acid-insoluble ash not more than 2 percent; alcohol-soluble extractive not less than 40 percent; water-soluble extractive not less than 50 percent. Plus regulation 2.3.35, as for banana powder. The identity table does not print an ascorbic-acid percentage, so none is shown.

### Dehydrated powders that were on the original combined sheet

Tomato, potato, spinach, beetroot, arrowroot, ginger, garlic, lemon, mint, carrot, tamarind, and onion each repeat the original combined sheet, unchanged:

- Origin: India
- Processing: Dehydrated & Spray Dried
- Moisture: ≤ 5%
- Colour: Natural
- Additives: No Artificial Additives
- Shelf Life: 24 Months (Recommended Storage)
- Packing: 25 KG PP Bags, 50 KG PP Bags, Customized Packaging Available

Onion is one product. The original grade names “Red Onion Powder” and “White Onion Powder” are kept as grades of that product, not as extra products.

### Tomato, potato, spinach, beetroot, carrot, and arrowroot powders

In addition to the catalogue sheet: FSSAI regulation 2.3.36, row “Powders of all vegetables”. Moisture not more than 5.0 percent. Acid insoluble ash not more than 0.5 percent. Peroxidase test negative. Powder free flowing and free from agglomerates. Arrowroot was on the original vegetable-powder list, so the same vegetable-powder row is shown. A separate arrowroot-starch numerical standard was not confirmed, so none is added.

### Ginger Powder

Catalogue sheet, plus FSSAI regulation 2.9.11 (2), Dried Ginger powder. Moisture not more than 12.0 percent by weight. Total ash on dry basis: unbleached not more than 8.0 percent, bleached not more than 12.0 percent. Calcium as calcium oxide: unbleached not more than 1.1 percent, bleached not more than 2.5 percent. Volatile oil on dry basis not less than 1.0 percent. Water soluble ash on dry basis not less than 1.7 percent by weight. Acid insoluble ash on dry basis not more than 1.0 percent by weight. Alcohol (90% v/w) soluble extract on dry basis not less than 5.1 percent by weight. Cold water soluble extract on dry basis not less than 10.9 percent. The catalogue moisture (≤ 5%) and the FSSAI ceiling (12.0%) are both shown because they come from different documents.

### Garlic Powder

Catalogue sheet, plus FSSAI regulation 2.9.26, powdered dehydrated garlic. Extraneous matter not more than 0.5 percent. Moisture for powdered garlic not more than 5.0 percent by weight. Total ash on dry basis not more than 5.0 percent by dry weight. Ash insoluble in dilute HCl not more than 0.5 percent by weight. Cold water soluble extract on dry basis not less than 70.0 and not more than 90.0 percent by weight. Volatile organic sulphur compounds on dry basis not less than 0.3 percent by weight. Peroxidase test negative. Appearance in the clause: white to pale cream, free from scorched, toasted, and baked particles.

### Lemon Powder and Tamarind Powder

Catalogue sheet, plus regulation 2.3.35 as for banana powder. Tamarind pulp regulation 2.3.18 is not applied. No lemon-specific acid or mesh figure was found in the chapters checked.

### Mint Powder

Catalogue sheet, plus FSSAI regulation 2.9.38, Dried mint (Mentha spicata Linnaeus syn. Mentha viridis Linnaeus). Moisture 13.0 percent by mass maximum. Foreign matter 1.0 percent maximum. Extraneous vegetable matter 3.0 percent maximum. Total ash on dry basis 12.0 percent maximum. Acid-insoluble ash on dry basis 2.5 percent maximum. Volatile oil 0.5 ml/100 g on dry basis minimum. The clause describes dried leaves, not a separate powder grade. The page says so.

### Onion Powder

Catalogue sheet, plus FSSAI regulation 2.9.28, powdered dehydrated onion. Extraneous matter not more than 0.5 percent by weight. Moisture for powdered onion not more than 5.0 percent by weight. Total ash on dry basis not more than 5.0 percent by weight. Ash insoluble in dilute HCl not more than 0.5 percent by weight. Peroxidase test negative. The clause allows the colour to be white, cream, pink, or red.
