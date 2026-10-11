export type Bubble = {
  id: number;
  slug: string;
  href: string;
  title: string;
  subtitle?: string;
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
    slug: "nifashion",
    href: "/bubble/1",
    title: "NI Fashion",
    subtitle: "Negative Ion Clothing and Bedding Series \n 负离子衣物和寝具系例",
    description: "Fully customizable standalone page for Bubble 1. Customize app/bubble/1/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/ni_fashion/2.jpeg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fresh-water-splashing-in-slow-motion-23741-large.mp4",
    features: ["Cold-pressed yuzu extract", "Zero artificial sugars", "Live probiotic cultures"],
    price: "$48.00",
  },
  {
    id: 2,
    slug: "ehealthy",
    href: "/bubble/2",
    title: "eHealthy",
    subtitle: "Full plant-based nutritional foods \n 全科植物性营养食品",
    tagline: "Soft peach flesh rounded out with a whisper of botanical rose.",
    description: "Fully customizable standalone page for Bubble 2. Customize app/bubble/2/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/bubbles/bubble_2.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-41484-large.mp4",
    features: ["Organic peach puree", "Delicate floral rose notes", "Naturally carbonated fizz"],
    price: "$44.00",
  },
  {
    id: 3,
    slug: "snowlotus",
    href: "/bubble/3",
    title: "Snow Lotus ",
    subtitle: "Nourishing Pad & Skincare Products \n 雪莲养护贴 & 护肤品",
    tagline: "Dragonfruit sweetness meeting fermented tea's sharp edge and rare snow lotus botanicals.",
    description: "Fully customizable standalone page for Bubble 3. Customize app/bubble/3/page.tsx directly to build your unique layout, story, and interactive components.",
    image: "/images/tianshan/1.jpeg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-transparent-glass-with-water-and-ice-cubes-42861-large.mp4",
    features: ["Exotic dragonfruit blend", "Antioxidant-rich infusion", "Small-batch fermented"],
    price: "$46.00",
  },
  {
    id: 4,
    slug: "nifashion",
    href: "/bubble/4",
    title: "NI Fashion",
    subtitle: "Negative Ion Clothing and Bedding Series \n负离子衣物寝具系例",
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