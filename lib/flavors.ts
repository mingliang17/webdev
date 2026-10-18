export type Flavor = {
  name: string;
  c1: string;
  c2: string;
  glow: string;
  desc: string;
  tags: string[];
};

export const flavors: Flavor[] = [
  {
    name: "Citrus Bloom",
    c1: "#FFC94D",
    c2: "#FF6B35",
    glow: "#FF6B35",
    desc: "Bright lemon and yuzu peel over a tart base. Sharp on the first sip, clean on the finish.",
    tags: ["Citrus", "Sharp", "Zero rush"],
  },
  {
    name: "Rose Peach",
    c1: "#FFD3B8",
    c2: "#FF8F6B",
    glow: "#FF8F6B",
    desc: "Soft peach flesh rounded out with a whisper of rose. Reads like an iced tea, drinks a lot lighter.",
    tags: ["Fruity", "Soft", "Iced-tea energy"],
  },
  {
    name: "Dragon Bloom",
    c1: "#FF8FE0",
    c2: "#8A4FE0",
    glow: "#B85FE0",
    desc: "Dragonfruit sweetness meeting fermented tea's edge. Tropical, a little strange, very moreish.",
    tags: ["Tropical", "Bold", "Limited"],
  },
  {
    name: "Watermelon Fizz",
    c1: "#FF8FA0",
    c2: "#4FCB8F",
    glow: "#5FD69B",
    desc: "Juicy watermelon, barely-there sugar, and a natural fizz that does most of the work.",
    tags: ["Refreshing", "Light", "Summer"],
  },
  {
    name: "Mango Sunset",
    c1: "#FFD37A",
    c2: "#FF9A3D",
    glow: "#FFA94D",
    desc: "Sun-ripe mango with a perfumed finish. The closest thing here to a soda — minus the crash.",
    tags: ["Sweet", "Perfumed", "Crowd favorite"],
  },
  {
    name: "Wild Berry",
    c1: "#E06BA3",
    c2: "#5A2A73",
    glow: "#C4478F",
    desc: "Raspberry and blueberry steeped with hibiscus. Tart, deep-colored, unapologetically bold.",
    tags: ["Tart", "Deep", "Hibiscus"],
  },
  {
    name: "Ginger Spark",
    c1: "#FFC46B",
    c2: "#D9600F",
    glow: "#E8791F",
    desc: "Hibiscus florals colliding with real ginger heat. The one for people who like their kombucha loud.",
    tags: ["Spicy", "Bold", "Traditional"],
  },
  {
    name: "Mint Wave",
    c1: "#B8F0C9",
    c2: "#1D9E75",
    glow: "#2FB584",
    desc: "Cool, herbal, and lightly fizzy — the mojito of the lineup, no rum required.",
    tags: ["Herbal", "Cooling", "Lightest"],
  },
];