// Regenerates src/data/products.ts with slug + gallery images[]
// Run: node scripts/generateProducts.js
import { readdirSync, writeFileSync, existsSync, statSync } from 'fs';
import { join, sep, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const IMG_EXT = /\.(webp|jpe?g|png)$/i;

const COLORS = ['#000000', '#ffffff', '#78350f', '#c49a6c'];

const METADATA = [
  [1, "Zeffa Luxe Tasselled Swivel Bar Chair", "RFBC0101", "Bar Chairs", "ZEFFA-TASSELED-1.webp", "#f3f3f3", 96, "Velvet & Powder-Coated Steel"],
  [2, "Varrens Contemporary Upholstered Bar Chair", "RFBC0102", "Bar Chairs", "VARRENS-bar-1.webp", "#f4f0eb", 103, "Upholstered Fabric & Steel"],
  [3, "Tadema Classic Round Pedestal Bar Stool", "RFBC0103", "Bar Chairs", "TADEMA-1.webp", "#f4eff1", 110, "Solid Wood & Cast Iron"],
  [4, "Petna Heritage Wooden Bar Chair", "RFBC0104", "Bar Chairs", "PETNA-BAR-1.webp", "#eef1ed", 117, "Solid Sheesham Wood"],
  [5, "Ovetu Minimal Wooden Bar Stool", "RFBC0105", "Bar Chairs", "OVETU-1.webp", "#f3f3f3", 124, "Solid Teak Wood"],
  [6, "Arden Solid Wood Dining Chair", "RFIC0101", "Indoor Chairs", "Corrigan+Studio+Solid+Wood+Dining+Chairs+(Set+of+2)+–+PU+Leather+Cushioned+Seat+&+Low+Open+Back,+Mid‑Century+Modern-1860420205 (1).webp", "#f4f0eb", 131, "Solid Wood & PU Leather"],
  [7, "Joi Minimal Black Dining Chair", "RFIC0102", "Indoor Chairs", "industry_west_product_joi_diningchair_black_01_3072x.webp", "#f4eff1", 138, "Powder-Coated Steel"],
  [8, "Rattan Heritage Cane Dining Chair", "RFIC0103", "Indoor Chairs", "1_ad3b5412-4390-483d-977e-8e9ea6d2210b.webp", "#eef1ed", 145, "Natural Rattan & Cane"],
  [9, "Nami Contemporary Black Dining Chair", "RFIC0104", "Indoor Chairs", "1_1418972c-dc3a-44ad-a0d2-e0238fcba234.webp", "#f3f3f3", 152, "Bentwood & Steel Frame"],
  [10, "Elara Upholstered Wooden Dining Chair", "RFIC0105", "Indoor Chairs", "10_c0c5c85f-3f43-4bb3-bcd1-a6e8d756d76b.webp", "#f4f0eb", 159, "Solid Oak & Upholstered Fabric"],
  [11, "Zarax Boucle Lounge Chair with Side Table", "RFLC0101", "Lounge Chairs", "ZARAX-1-scaled-1.webp", "#f4eff1", 166, "Bouclé Fabric & Solid Wood"],
  [12, "Ugiti Leather Tub Lounge Chair", "RFLC0102", "Lounge Chairs", "UGITI-1-1.webp", "#eef1ed", 173, "Full-Grain Leather & Steel"],
  [13, "Tetra Sculptural Velvet Lounge Chair", "RFLC0103", "Lounge Chairs", "TETRA-1-scaled-1.webp", "#f3f3f3", 180, "Velvet & Hardwood Frame"],
  [14, "Rulig Cane-Panel Lounge Armchair", "RFLC0104", "Lounge Chairs", "RULIG-WICKER-1.webp", "#f4f0eb", 187, "Natural Wicker & Teak"],
  [15, "Roffo Contemporary Leather Lounge Chair", "RFLC0105", "Lounge Chairs", "ROFFO-1.webp", "#f4eff1", 194, "Top-Grain Leather & Chrome"],
  [16, "Oslo Padded Timber Stool", "RFPF0101", "Poufs", "DOOR-TABURE-1-scaled-1.webp", "#eef1ed", 201, "Solid Timber & Padded Fabric"],
  [17, "Rustic Wooden Barrel Storage Ottoman", "RFPF0102", "Poufs", "MAYZAR-1-scaled-1.webp", "#f3f3f3", 208, "Reclaimed Wood & Iron"],
  [18, "Sansa Metal Framed Stool", "RFPF0103", "Poufs", "SANSA-SMALL-1-scaled-2.webp", "#f4f0eb", 215, "Powder-Coated Steel & Fabric"],
  [19, "Graz Fluted Velvet Ottoman", "RFPF0104", "Poufs", "GRAZ-SIRIPE-1-scaled-1.webp", "#f4eff1", 222, "Fluted Velvet & Hardwood"],
  [20, "Sugar Zebra Print Pouf", "RFPF0105", "Poufs", "urun-sugar-pouf-puf-01.webp", "#eef1ed", 229, "Printed Fabric & Foam Core"],
  [21, "Zopum Channel-Tufted U-Shape Sofa", "RFSBB0101", "Sofas, Benches & Booths", "ZOPUM-1.webp", "#f3f3f3", 236, "Velvet & Kiln-Dried Hardwood"],
  [22, "Yetab Fluted Upholstered Bench", "RFSBB0102", "Sofas, Benches & Booths", "YETAB-1.webp", "#f4f0eb", 93, "Upholstered Fabric & Steel Legs"],
  [23, "Wiled Curved Art Deco Sofa", "RFSBB0103", "Sofas, Benches & Booths", "WILED-1.webp", "#f4eff1", 100, "Velvet & Solid Wood Frame"],
  [24, "Venaw Modular Slatted Banquette", "RFSBB0104", "Sofas, Benches & Booths", "VENAW-1.webp", "#eef1ed", 107, "Slatted Teak & Upholstery"],
  [25, "Ulate Curved Sectional Sofa", "RFSBB0105", "Sofas, Benches & Booths", "ULATE-C-1.webp", "#f3f3f3", 114, "High-Density Foam & Fabric"],
  [26, "Kylie Acacia Wood Bar Table", "RFBT0101", "Bar Tables", "kylie-acacia-wood-2-seater-bar-table-in-natural-finish-kylie-acacia-wood-2-seater-bar-table-in-natur-4ub0yi.webp", "#f4f0eb", 121, "Solid Acacia Wood"],
  [27, "Walnut Bistro High Table", "RFBT0102", "Bar Tables", "M-590-WALNUT-2-kopya-scaled-2.webp", "#f4eff1", 128, "Walnut Veneer & Steel"],
  [28, "Asteca Acacia Wood Bar Table", "RFBT0103", "Bar Tables", "mesa-alta-redonda-em-madeira-de-acacia-asteca (1).webp", "#eef1ed", 135, "Solid Acacia Wood"],
  [29, "Thonet Cognac & Black Marble Bar Table", "RFBT0104", "Bar Tables", "Monologue-London-GTV-Thonet-Cognac-Lifestyle.webp", "#f3f3f3", 142, "Marble Top & Bentwood"],
  [30, "MC-190 Glam Ceramic Bistro Table", "RFCT0101", "Ceramic Tables", "MC-190-PRS-07-1-scaled-1.webp", "#f4f0eb", 149, "Ceramic Top & Brass Frame"],
  [31, "MC-137 Ceramic & Wood Bistro Table", "RFCT0102", "Ceramic Tables", "MC-137-PRS-07-1-scaled-1.webp", "#f4eff1", 156, "Ceramic & Solid Wood"],
  [32, "MC-131 Ceramic & Wood-Framed Bistro Table", "RFCT0103", "Ceramic Tables", "MC-131-S4-scaled-1.webp", "#eef1ed", 163, "Ceramic & Hardwood Frame"],
  [33, "MG-100 Rose Gold Ceramic Bistro Table", "RFCT0104", "Ceramic Tables", "MG-100-S-4-1-scaled-1.webp", "#f3f3f3", 170, "Ceramic & Rose Gold Steel"],
  [34, "MC-190 Ribbed Brass Edge Ceramic Bistro Table", "RFCT0105", "Ceramic Tables", "MC-190-PRS-6-1-scaled-1.webp", "#f4f0eb", 177, "Ceramic & Brass Trim"],
  [35, "Minimalist Round Marble Pedestal Table", "ILBT0001", "Marble Tables", "Pedestal+Dining+Table-255973401 (1).webp", "#f4eff1", 184, "Natural Marble & Steel"],
  [36, "Wireframe Pedestal Round Marble Bistro Table", "ILBT0010", "Marble Tables", "30bistro-wh_blk_01-Photoroom.png", "#eef1ed", 191, "Marble & Wireframe Steel"],
  [37, "Emmo Round Faux Marble Wireframe Table", "ILBT0032", "Marble Tables", "Emmo+Round+Faux+Marble+Dining+Table (1).webp", "#f3f3f3", 198, "Faux Marble & Powder-Coated Steel"],
  [38, "Fluted Brass & Black Marble Bistro Table", "ILBT0054", "Marble Tables", "ToposW_044-1-scaled.jpg", "#f4f0eb", 205, "Black Marble & Brass"],
  [39, "Terrazzo Square Cone-Base Bistro Table", "ILBT0011", "Marble Tables", "7a87470c-cc25-4101-bfff-18af21a46ccc.png", "#f4eff1", 212, "Terrazzo & Concrete Base"],
  [40, "Weighted Base Round Oak Veneer Café Table", "ILBT0002", "Wooden Tables", "cafe-table-round-top-weighted-base-ca-rtabsw605-4a-t-851668_2000x.webp", "#eef1ed", 219, "Oak Veneer & Cast Iron Base"],
  [41, "X-Base Round Oak Veneer Café Table", "ILBT0004", "Wooden Tables", "cafe-table-round-top-x-base-ca-rtabsx604-4a-t-219149_2000x.webp", "#f3f3f3", 226, "Oak Veneer & Chrome Base"],
  [42, "Two-Stem Rectangular Oak Veneer Café Table", "ILBT0008", "Wooden Tables", "cafe-table-rectangular-top-weighted-two-stem-base-ca-ctabswt604-4a-t-549678_2000x.webp", "#f4f0eb", 233, "Oak Veneer & Dual Steel Stems"],
  [43, "Urban Outdoor Perforated Round Bistro Table", "ILBT0017", "Wooden Tables", "2553576.jpg", "#f4eff1", 90, "Perforated Steel & Powder Coat"],
  [44, "Flip-Top Nesting Training Table", "ILBT0020", "Wooden Tables", "124589-flip-top-nesting-training-table-1.webp", "#eef1ed", 97, "Laminate Top & Steel Frame"],
  [45, "Sarai Fabric-Strap Outdoor Armchair", "ILMC0001", "Outdoor Chairs", "ChatGPT Image Feb 16, 2026, 03_00_53 PM.png", "#f3f3f3", 104, "Outdoor Fabric & Aluminium"],
  [46, "Porto Braided Rope Outdoor Armchair", "ILMC0002", "Outdoor Chairs", "ChatGPT Image Feb 16, 2026, 03_09_16 PM.png", "#f4f0eb", 111, "Braided Rope & Aluminium"],
  [47, "Abra Slatted Steel Outdoor Stacking Chair", "ILMC0004", "Outdoor Chairs", "Abra+Powder+Coated+Steel+Outdoor+Stacking+Dining+Side+Chair (1).webp", "#f4eff1", 118, "Powder-Coated Galvanised Steel"],
  [48, "Zechariah Stacking Cord Outdoor Dining Chair", "ILMC0011", "Outdoor Chairs", "ChatGPT Image Mar 29, 2026, 01_31_02 PM.png", "#eef1ed", 125, "UV-Resistant Cord & Steel"],
  [49, "Romix Hoop-Frame Slatted Outdoor Chair", "ILMC0013", "Outdoor Chairs", "ChatGPT Image Mar 29, 2026, 01_35_21 PM.png", "#f3f3f3", 132, "Slatted Teak & Steel Hoop"],
  [50, "Veranda X-Brace Metal Outdoor Loveseat", "RFOS0101", "Outdoor Sofas & Benches", "DESOYAN-1-scaled-2.webp", "#f4f0eb", 139, "Powder-Coated Iron & Cushion"],
  [51, "Mira Criss-Cross Rope Outdoor Sofa", "RFOS0102", "Outdoor Sofas & Benches", "MIRA-BANK-1-scaled-2.webp", "#f4eff1", 146, "Rope Weave & Aluminium Frame"],
  [52, "Cabana Stripe Metal Outdoor Sofa", "RFOS0103", "Outdoor Sofas & Benches", "PROYAN-1-1-scaled-1.webp", "#eef1ed", 153, "Steel Frame & Outdoor Fabric"],
  [53, "Sirius Rope Bergère Outdoor Loveseat", "RFOS0104", "Outdoor Sofas & Benches", "SIRIUS-ROPE-BERGERE-2-scaled-1.webp", "#f3f3f3", 160, "Rope & Powder-Coated Steel"],
  [54, "Horizon Rope & Upholstered Low-Profile Loveseat", "RFOS0105", "Outdoor Sofas & Benches", "HOLLOW-2-scaled-1.webp", "#f4f0eb", 167, "Rope, Steel & All-Weather Fabric"],
];

// Walk the product folders (1., 2., 4.) collecting every image file
const imageFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (IMG_EXT.test(entry)) imageFiles.push(full);
  }
};
for (const d of readdirSync(root)) {
  if (/^(1\.|2\.|4\.|5\.)/.test(d)) walk(join(root, d));
}

const byName = new Map();
for (const f of imageFiles) {
  const name = basename(f);
  if (!byName.has(name)) byName.set(name, []);
  byName.get(name).push(f);
}

const toSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const toRel = (abs) => abs.split(sep).slice(abs.split(sep).findIndex(s => /^(1\.|2\.|4\.|5\.)/.test(s))).join('/');

const products = METADATA.map(([id, name, code, category, mainFile, bgColor, price, material]) => {
  const candidates = byName.get(mainFile) || [];
  const mainPath = candidates.length === 1
    ? candidates[0]
    : candidates.find(c => c.includes(code)) || candidates[0];
  if (!mainPath) throw new Error(`Main image not found for ${name} (${mainFile})`);

  const folder = dirname(mainPath);
  const gallery = readdirSync(folder)
    .filter(f => IMG_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const ordered = gallery.filter(f => f === mainFile).concat(gallery.filter(f => f !== mainFile));

  return {
    id, name, code, category, slug: toSlug(name),
    colors: COLORS, bgColor, price, material,
    gallery: ordered.map(f => join(folder, f)),
  };
});

// Build new file
const lines = [];
lines.push('// Automatically generated by scripts/generateProducts.js');
products.forEach(p => {
  p.gallery.forEach((g, j) => {
    lines.push(`import img${p.id}_${j + 1} from '../../${toRel(g)}';`);
  });
});
lines.push('');
lines.push('export interface Product {');
lines.push('  id: number;');
lines.push('  name: string;');
lines.push('  code: string;');
lines.push('  slug: string;');
lines.push('  category: string;');
lines.push('  image: string;');
lines.push('  images: string[];');
lines.push('  colors: string[];');
lines.push('  bgColor: string;');
lines.push('  price: number;');
lines.push('  material: string;');
lines.push('}');
lines.push('');
lines.push('export const allProducts: Product[] = [');
products.forEach(p => {
  const imgs = p.gallery.map((_, j) => `img${p.id}_${j + 1}`).join(', ');
  lines.push('  {');
  lines.push(`    id: ${p.id},`);
  lines.push(`    name: "${p.name}",`);
  lines.push(`    code: "${p.code}",`);
  lines.push(`    slug: "${p.slug}",`);
  lines.push(`    category: "${p.category}",`);
  lines.push(`    image: img${p.id}_1,`);
  lines.push(`    images: [${imgs}],`);
  lines.push(`    colors: ${JSON.stringify(p.colors)},`);
  lines.push(`    bgColor: "${p.bgColor}",`);
  lines.push(`    price: ${p.price},`);
  lines.push(`    material: "${p.material}"`);
  lines.push('  },');
});
lines.push('];');
lines.push('');
lines.push('export const categoryList = [');
lines.push('  ...new Set(allProducts.map(p => p.category))');
lines.push('].map(catName => ({');
lines.push('  name: catName,');
lines.push('  count: allProducts.filter(p => p.category === catName).length');
lines.push('}));');
lines.push('');
lines.push('export const colorList = [');
lines.push("  { name: 'Black', count: 42, hex: 'bg-[#000000]' },");
lines.push("  { name: 'White', count: 28, hex: 'bg-[#ffffff]' },");
lines.push("  { name: 'Brown', count: 35, hex: 'bg-amber-800' },");
lines.push("  { name: 'Beige', count: 16, hex: 'bg-[#e8e2d2]' },");
lines.push("  { name: 'Grey', count: 22, hex: 'bg-gray-400' }");
lines.push('];');

const outPath = join(root, 'src', 'data', 'products.ts');
writeFileSync(outPath, lines.join('\n'));
const total = products.reduce((n, p) => n + p.gallery.length, 0);
console.log(`Generated ${products.length} products, ${total} gallery images`);