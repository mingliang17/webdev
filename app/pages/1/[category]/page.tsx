import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import MediaHero from "@/components/shop/MediaHero";
import VideoBlock from "@/components/shop/VideoBlock";
import SectionHeading from "@/components/shop/SectionHeading";
import ProductGrid from "@/components/shop/ProductGrid";
import {
  categories,
  getCategory,
  getProductsByCategory,
  SHOP_BASE,
  SHOP_NAME,
} from "@/lib/shop";

/**
 * /pages/1/[category] — reusable category template.
 * Content comes from `categories` and `products` in lib/shop.ts.
 */

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return { title: `${cat.name} — ${SHOP_NAME}`, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const items = getProductsByCategory(cat.slug);

  return (
    <>
      {/* 1. Key image */}
      <MediaHero
        eyebrow="Collection"
        title={cat.name}
        body={cat.description}
        image={cat.image}
        tone={cat.tone}
      />

      <div className="shell mt-8">
        <Breadcrumbs
          items={[
            { label: "Shop", href: SHOP_BASE },
            { label: cat.name },
          ]}
        />
      </div>

      {/* 2. Video */}
      <section className="section !pt-8">
        <div className="shell">
          <VideoBlock src={cat.video} title={`${cat.name} film`} tone={cat.tone} />
        </div>
      </section>

      {/* 3. Product catalog */}
      <section className="section section-alt">
        <div className="shell">
          <SectionHeading
            eyebrow={`${items.length} ${items.length === 1 ? "piece" : "pieces"}`}
            title={`Shop ${cat.name.toLowerCase()}`}
            body={cat.tagline}
          />
          <ProductGrid products={items} />
        </div>
      </section>
    </>
  );
}
