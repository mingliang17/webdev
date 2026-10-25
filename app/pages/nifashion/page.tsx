import type { Metadata } from "next";
import MediaHero from "@/components/shop/MediaHero";
import VideoBlock from "@/components/shop/VideoBlock";
import SectionHeading from "@/components/shop/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";
import CategoryCard from "@/components/shop/CategoryCard";
import {
  asset,
  categories,
  getBestSellers,
  heroVideo,
  SHOP_BASE,
  SHOP_NAME,
} from "@/lib/shop";

/**
 * /pages/nifashion — NI Fashion landing page (Bubble 1).
 * Fully editable: change the copy/media in `content`, reorder or remove
 * sections in the JSX below, or add new ones.
 * Media paths point to files in /public (use asset() for names with spaces).
 * Leave a value undefined to show a placeholder.
 */
const content = {
  metaTitle: `${SHOP_NAME} — Negative Ion Clothing and Bedding`,
  metaDescription:
    "Negative Ion Clothing and Bedding Series. Browse clothing, bedding and accessories.",
  hero: {
    eyebrow: "Negative Ion Clothing and Bedding Series",
    title: "Style · Elegance · You",
    body: "负离子衣物和寝具系列 — everyday pieces in breathable fabrics, made to be worn on repeat.",
    image: asset("/images/ni_fashion/2.jpeg") as string | undefined,
    cta: { label: "Shop all categories", href: `${SHOP_BASE}#categories` },
  },
  video: {
    eyebrow: "In motion",
    title: "See the collection",
    body: "A short look at the styles and fabrics.",
    src: heroVideo as string | undefined,
    poster: undefined as string | undefined,
  },
  bestSellers: {
    eyebrow: "Top sellers",
    title: "What everyone is wearing",
    count: 4,
  },
  categories: {
    eyebrow: "Browse",
    title: "Shop by category",
    body: "Find your next favourite piece.",
  },
};

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ShopHome() {
  const bestSellers = getBestSellers(content.bestSellers.count);

  return (
    <>
      {/* 1. Key image */}
      <MediaHero {...content.hero} />

      {/* 2. Video */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow={content.video.eyebrow}
            title={content.video.title}
            body={content.video.body}
          />
          <VideoBlock
            src={content.video.src}
            poster={content.video.poster}
            title={content.video.title}
          />
        </div>
      </section>

      {/* 3. Top sellers */}
      <section className="section section-alt">
        <div className="shell">
          <SectionHeading
            align="row"
            eyebrow={content.bestSellers.eyebrow}
            title={content.bestSellers.title}
          />
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* 4. Category catalog */}
      <section id="categories" className="section">
        <div className="shell">
          <SectionHeading
            eyebrow={content.categories.eyebrow}
            title={content.categories.title}
            body={content.categories.body}
          />
          <div className="category-grid">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
