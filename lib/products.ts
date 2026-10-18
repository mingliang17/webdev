export type Product = {
  id: string;
  title: string;
  price: string;
  tagline: string;
  description: string;
  image: string;
  videoUrl?: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "solstice-spark-01",
    title: "Solstice Botanica Elixir",
    price: "$48.00",
    tagline: "Botanical refreshment brewed with natural yuzu and live adaptogens.",
    description: "Crafted with cold-pressed yuzu, botanical rose extracts, and a delicate natural fizz. Designed for clarity and calm, best enjoyed chilled.",
    image: "https://picsum.photos/seed/solstice-prod-1/800/800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-41484-large.mp4",
    features: ["Zero artificial sweeteners", "Infused with organic adaptogens", "Recyclable packaging"],
  },
  {
    id: "hibiscus-wave-02",
    title: "Hibiscus Wild Berry Wave",
    price: "$44.00",
    tagline: "Tart raspberry and hibiscus steeped with cold-pressed botanicals.",
    description: "A bold, deep-colored blend combining tart wild berries with fragrant hibiscus blossoms. Unapologetically refreshing and balanced.",
    image: "https://picsum.photos/seed/solstice-prod-2/800/800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-water-splashing-in-slow-motion-23741-large.mp4",
    features: ["Rich in natural antioxidants", "Naturally caffeinated with green tea", "Low calorie & guilt-free"],
  },
  {
    id: "ginger-spark-03",
    title: "Golden Ginger Spark",
    price: "$46.00",
    tagline: "Hibiscus florals colliding with real organic ginger heat.",
    description: "The ideal brew for those who like a stronger kick. Real cold-pressed ginger root meets fermented tea's sharp edge.",
    image: "https://picsum.photos/seed/solstice-prod-3/800/800",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-transparent-glass-with-water-and-ice-cubes-42861-large.mp4",
    features: ["Real cold-pressed ginger root", "Supports natural digestion", "Unpasteurized & probiotic-rich"],
  },
];