import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shop/Breadcrumbs";
import Media from "@/components/shop/Media";
import ProductPurchase from "@/components/shop/ProductPurchase";
import ProductGrid from "@/components/shop/ProductGrid";
import SectionHeading from "@/components/shop/SectionHeading";
import {
  categoryHref,
  formatPrice,
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

const galleryLabels = ["Front", "Back", "Detail"];

export default async function ProductPage({ params }: Props) {
  const { category, product } = await params;
  const p = getProduct(category, product);
  const cat = getCategory(category);
  if (!p || !cat) notFound();

  const related = getRelated(p, 4);
  const gallery = [0, 1, 2, 3].map((i) => ({
    src: p.images?.[i],
    alt: i === 0 ? p.name : `${p.name} — ${galleryLabels[i - 1]}`,
  }));

  return (
    <>
      <section className="page-top section !pb-16">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Shop", href: SHOP_BASE },
              { label: cat.name, href: categoryHref(cat.slug) },
              { label: p.name },
            ]}
          />

          <div className="product-layout">
            {/* Image gallery */}
            <div className="product-gallery">
              {gallery.map((g, i) => (
                <Media
                  key={i}
                  src={g.src}
                  alt={g.alt}
                  tone={p.tone}
                  className={i === 0 ? "media-product" : "media-card"}
                  priority={i === 0}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              ))}
            </div>

            {/* Details */}
            <div className="md:sticky md:top-28 md:self-start">
              <div className="eyebrow">{cat.name}</div>
              <h1 className="mt-2.5 text-[clamp(32px,4.5vw,52px)]">{p.name}</h1>
              <p className="price-lg mt-4">{formatPrice(p.price)}</p>
              <p className="body-copy mt-5">{p.description}</p>

              <ProductPurchase sizes={p.sizes} colors={p.colors} />

              <ul className="detail-list">
                {p.details.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>

              <Link href={categoryHref(cat.slug)} className="btn-link mt-8 inline-block">
                ← Back to {cat.name}
              </Link>
            </div>
          </div>
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
