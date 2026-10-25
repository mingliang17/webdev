/**
 * Shop data + route helpers for the NI Fashion store at /pages/nifashion.
 *
 * Edit the arrays below to change your catalog. Put images/videos in
 * /public/images/ni_fashion/ and reference them with asset("/images/...").
 * Anything left undefined renders a colour placeholder, and a missing price
 * shows "Price on request".
 *
 * NOTE: only the AS050 Bucket Hat uses real catalogue data (price, materials,
 * colour). The other products are sample entries — replace them with your own.
 */

export const SHOP_BASE = "/pages/nifashion";
export const SHOP_NAME = "NI Fashion";
export const CURRENCY = "S$";

/** Encodes spaces / special characters so file names like "AS050 Bucket Hat_S$353.jpeg" work. */
export const asset = (path: string) => encodeURI(path);

export type Tone = { c1: string; c2: string };

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  video?: string;
  tone: Tone;
};

export type ProductColor = { name: string; hex: string };

export type Product = {
  slug: string;
  name: string;
  category: string; // Category slug
  price?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: ProductColor[];
  images?: string[];
  tone: Tone;
  bestSeller?: boolean;
};

export const heroVideo = asset("/images/ni_fashion/20261013_AI Images 2_ok.mp4");

export const categories: Category[] = [
  {
    slug: "bedding",
    name: "Bedding",
    description:
      "Cardigans, dresses and outerwear from the Negative Ion Clothing series, styled for everyday life.",
    image: asset("/images/ni_fashion/1.jpg"),
    video: heroVideo,
    tone: { c1: "#FFC94D", c2: "#FF6B35" },
  },
  {
    slug: "innerwear",
    name: "Innerwear",
    description: "Sheets, pillowcases and bedding sets from the Negative Ion Bedding series.",
    tone: { c1: "#B8F0C9", c2: "#1D9E75" },
  },
  {
    slug: "outerwear",
    name: "Outerwear",
    description: "Hats, gloves and scarves that add warmth and finish the look.",
    image: asset("/images/ni_fashion/AS050 Bucket Hat_S$353.jpeg"),
    tone: { c1: "#FFD3B8", c2: "#FF8F6B" },
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Hats, gloves and scarves that add warmth and finish the look.",
    image: asset("/images/ni_fashion/AS050 Bucket Hat_S$353.jpeg"),
    tone: { c1: "#FFD3B8", c2: "#FF8F6B" },
  },
  {
    slug: "gentlecare",
    name: "Gentle Care",
    description: "Hats, gloves and scarves that add warmth and finish the look.",
    image: asset("/images/ni_fashion/AS050 Bucket Hat_S$353.jpeg"),
    tone: { c1: "#FFD3B8", c2: "#FF8F6B" },
  },
];

const clothingSizes = ["XS", "S", "M", "L", "XL"];

export const products: Product[] = [
  {
    slug: "knitted-cardigan",
    name: "Knitted Cardigan",
    category: "clothing",
    description: "Simple, elegant, always. A classic knitted cardigan with contrast trim.",
    details: ["Negative Ion Clothing series", "Replace with fabric and care details"],
    sizes: clothingSizes,
    colors: [
      { name: "Cream", hex: "#FBF1DE" },
      { name: "Ink", hex: "#12211B" },
    ],
    tone: { c1: "#FBF1DE", c2: "#F6E8CE" },
    bestSeller: true,
  },
  {
    slug: "layered-dress",
    name: "Layered Dress",
    category: "clothing",
    description: "Soft, fresh and beautiful. A layered dress with a flowing hem.",
    details: ["Negative Ion Clothing series", "Replace with fabric and care details"],
    sizes: clothingSizes,
    colors: [{ name: "Sky", hex: "#9CC3F0" }],
    tone: { c1: "#B8D4F5", c2: "#7FA8E0" },
    bestSeller: true,
  },
  {
    slug: "outdoor-jacket",
    name: "Outdoor Look Jacket",
    category: "clothing",
    description: "Light, sporty and chic. A zip jacket made for active days outdoors.",
    details: ["Negative Ion Clothing series", "Replace with fabric and care details"],
    sizes: clothingSizes,
    colors: [{ name: "Ivory", hex: "#F6E8CE" }],
    tone: { c1: "#FFFFFF", c2: "#F6E8CE" },
  },
  {
    slug: "scarf-vest-set",
    name: "Hooded Knit Vest",
    category: "clothing",
    description: "A sleeveless hooded knit vest, shown with a monogram scarf.",
    details: ["Negative Ion Clothing series", "Replace with fabric and care details"],
    sizes: clothingSizes,
    colors: [{ name: "Burgundy", hex: "#7A1F2B" }],
    images: [asset("/images/ni_fashion/2.jpeg")],
    tone: { c1: "#C9606B", c2: "#7A1F2B" },
    bestSeller: true,
  },
  {
    slug: "bedding-set",
    name: "Bedding Set",
    category: "bedding",
    description: "A complete bedding set from the Negative Ion Bedding series.",
    details: ["Negative Ion Bedding series", "Replace with sizes, fabric and care details"],
    sizes: ["Single", "Queen", "King"],
    colors: [{ name: "Cream", hex: "#FBF1DE" }],
    tone: { c1: "#B8F0C9", c2: "#1D9E75" },
  },
  {
    slug: "pillowcase-pair",
    name: "Pillowcase Pair",
    category: "bedding",
    description: "A pair of pillowcases from the Negative Ion Bedding series.",
    details: ["Negative Ion Bedding series", "Replace with fabric and care details"],
    sizes: ["Standard"],
    colors: [{ name: "Cream", hex: "#FBF1DE" }],
    tone: { c1: "#D5F5E0", c2: "#7BCB9F" },
  },
  {
    slug: "as050-bucket-hat",
    name: "Bucket Hat (AS050)",
    category: "accessories",
    price: 353,
    description:
      "A versatile bucket hat that provides warmth and protection while looking trendy. From the Hat · Gloves collection.",
    details: [
      "Free size",
      "Outer material: 100% polyester",
      "Inner material: 80% polyvinyl chloride (NEFFUL NEORON®), 20% polyester",
    ],
    sizes: ["Free size"],
    colors: [{ name: "Light Pink", hex: "#E3CFE6" }],
    images: [asset("/images/ni_fashion/3.jpeg")],
    tone: { c1: "#F3E4F5", c2: "#D8B8DD" },
    bestSeller: true,
  },
];

/* ---------- Route helpers ---------- */

export const categoryHref = (slug: string) => `${SHOP_BASE}/${slug}`;
export const productHref = (p: Pick<Product, "category" | "slug">) =>
  `${SHOP_BASE}/${p.category}/${p.slug}`;

/* ---------- Data helpers ---------- */

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);

export const getBestSellers = (limit = 4) =>
  products.filter((p) => p.bestSeller).slice(0, limit);

export const getRelated = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);

export const formatPrice = (n?: number) =>
  n === undefined ? "Price on request" : `${CURRENCY}${n.toFixed(2)}`;
