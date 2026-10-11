export type Bubble = {
  id: number;
  slug: string;
  href: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  videoUrl?: string;
  features?: string[];
  price?: string;
};

export const bubbles: Bubble[] = [
  {
    id: 1,
    slug: "citrus-bloom",
    href: "/bubble/1",
    title: "Bubble 1: Citrus Bloom Elixir",
    tagline: "Bright lemon and yuzu peel over a crisp, tart living ferment.",
    description: "Fully customizable standalone page for Bubble 1. Customize app/bubble/1/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_1.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-water-splashing-in-slow-motion-23741-large.mp4",
    features: ["Cold-pressed yuzu extract", "Zero artificial sugars", "Live probiotic cultures"],
    price: "$48.00",
  },
  {
    id: 2,
    slug: "rose-peach",
    href: "/bubble/2",
    title: "Coffee2",
    tagline: "Soft peach flesh rounded out with a whisper of botanical rose.",
    description: "Fully customizable standalone page for Bubble 2. Customize app/bubble/2/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_2.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-41484-large.mp4",
    features: ["Organic peach puree", "Delicate floral rose notes", "Naturally carbonated fizz"],
    price: "$44.00",
  },
  {
    id: 3,
    slug: "dragon-bloom",
    href: "/bubble/3",
    title: "Bubble 3: Dragon Bloom Tropical",
    tagline: "Dragonfruit sweetness meeting fermented tea's sharp edge and rare snow lotus botanicals.",
    description: "Fully customizable standalone page for Bubble 3. Customize app/bubble/3/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_3.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-transparent-glass-with-water-and-ice-cubes-42861-large.mp4",
    features: ["Exotic dragonfruit blend", "Antioxidant-rich infusion", "Small-batch fermented"],
    price: "$46.00",
  },
  {
    id: 4,
    slug: "watermelon-fizz",
    href: "/bubble/4",
    title: "Bubble 4: Watermelon Fizz",
    tagline: "Juicy summer watermelon with crisp lime sparkle and revitalizing minerals.",
    description: "Fully customizable standalone page for Bubble 4. Customize app/bubble/4/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_4.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-water-splashing-in-slow-motion-23741-large.mp4",
    features: ["Pure watermelon extract", "Light and ultra-refreshing", "Unpasteurized vitality"],
    price: "$42.00",
  },
  {
    id: 5,
    slug: "mango-sunset",
    href: "/bubble/5",
    title: "Bubble 5: Mango Sunset",
    tagline: "Sun-ripened Alphonso mango with a velvety texture and perfumed finish.",
    description: "Fully customizable standalone page for Bubble 5. Customize app/bubble/5/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_5.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-41484-large.mp4",
    features: ["Sun-ripened Alphonso mango", "Smooth, velvety texture", "Zero artificial preservatives"],
    price: "$50.00",
  },
];