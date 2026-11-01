import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import ProductGrid from "@/components/shop/ProductGrid";
import SectionHeading from "@/components/shop/SectionHeading";
import ProductView from "@/components/shop/ProductView";
import {
  categoryHref,
  getCategory,
  getProduct,
  getRelated,
  products,
  SHOP_BASE,
  SHOP_NAME,
} from "@/lib/shop";

/**
 * /pages/nifashion/[category]/[product] — reusable product template.
 * Content comes from `products` in lib/shop.ts.
 */

type Props = { params: Promise<{ category: string; product: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, product: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product } = await params;
  const p = getProduct(category, product);
  if (!p) return {};
  return { title: `${p.name} — ${SHOP_NAME}`, description: p.description };
}

export default async function ProductPage({ params }: Props) {
  const { category, product } = await params;
  const p = getProduct(category, product);
  const cat = getCategory(category);
  if (!p || !cat) notFound();

  const related = getRelated(p, 4);

  return (
    <>
      <section className="page-top section !pb-16">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Shop", href: SHOP_BASE },
              { label: cat.name, href: categoryHref(cat.slug) },
              { label: p.slug },
            ]}
          />

          <ProductView product={p} category={cat} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="shell">
            <SectionHeading
              align="row"
              eyebrow="You may also like"
              title={`More ${cat.name.toLowerCase()}`}
              linkHref={categoryHref(cat.slug)}
              linkLabel={`View all ${cat.name.toLowerCase()}`}
            />
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </>
  );
}
