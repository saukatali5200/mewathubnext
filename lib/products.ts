// =============================================================
// src/lib/products.ts
// Static product catalog data
// =============================================================

import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "mustard-oil-1l",
    name: "Mustard Oil 1L Bottle",
    slug: "mustard-oil-1l",
    price: 180,
    unit: "per bottle",
    packaging: "1L HDPE Bottle",
    category: "oil",
    description:
      "Pure cold-pressed mustard oil packed in food-grade 1-litre HDPE bottles. Ideal for household cooking with authentic pungent aroma and rich flavour.",
    features: [
      "100% pure mustard oil",
      "Cold-pressed extraction",
      "Food-grade HDPE bottle",
      "Tamper-proof seal",
      "FSSAI certified",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-1l.jpg",
  },
  {
    id: "mustard-oil-5l",
    name: "Mustard Oil 5L Jar",
    slug: "mustard-oil-5l",
    price: 840,
    unit: "per jar",
    packaging: "5L HDPE Jar",
    category: "oil",
    description:
      "Economy 5-litre mustard oil jar perfect for medium-sized families and small restaurants. Same quality as our smaller bottles at a better per-litre value.",
    features: [
      "5-litre economy pack",
      "Pure cold-pressed oil",
      "Wide-mouth easy-pour jar",
      "FSSAI certified",
      "Best value for families",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-5l.jpg",
  },
  {
    id: "mustard-oil-15l",
    name: "Mustard Oil 15L Tin",
    slug: "mustard-oil-15l",
    price: 2400,
    unit: "per tin",
    packaging: "15L Tin Container",
    category: "oil",
    description:
      "Commercial-grade 15-litre tin ideal for restaurants, dhabas, caterers, and small businesses. Sturdy tin packaging ensures freshness and easy stacking.",
    features: [
      "15-litre commercial pack",
      "Heavy-duty tin container",
      "Ideal for restaurants & caterers",
      "Rust-resistant tin lid",
      "Bulk pricing available",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/mustard-oil-15l.jpg",
  },
  {
    id: "bulk-mustard-oil",
    name: "Bulk Mustard Oil",
    slug: "bulk-mustard-oil",
    price: 145,
    unit: "per litre",
    packaging: "200L Barrel / Tanker",
    category: "oil",
    description:
      "Industrial bulk mustard oil supplied in 200-litre barrels or by tanker. Best rates for large-scale distributors, factories, and food processors.",
    features: [
      "Minimum order 200 litres",
      "Available in barrels or tanker",
      "Best wholesale pricing",
      "Direct from mill — no middlemen",
      "Custom packaging on request",
    ],
    inStock: true,
    gstRate: 5,
    hsnCode: "1514",
    image: "/images/bulk-mustard-oil.jpg",
  },
  {
    id: "oil-cake",
    name: "Oil Cake (Cattle Feed)",
    slug: "oil-cake",
    price: 28,
    unit: "per kg",
    packaging: "50kg Gunny Bag",
    category: "oilcake",
    description:
      "High-protein mustard oil cake — a nutritious by-product of oil extraction. Widely used as cattle and poultry feed. Rich in protein and essential minerals.",
    features: [
      "High protein content (~35%)",
      "Natural cattle & poultry feed",
      "50kg gunny bag packaging",
      "No artificial additives",
      "Bulk supply available",
    ],
    inStock: true,
    gstRate: 0,
    hsnCode: "2306",
    image: "/images/oil-cake.jpg",
  },
];

/** Helper: find product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Helper: filter products by category */
export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
