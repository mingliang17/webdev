import ProductCard from "./ProductCard";
import type { Product } from "@/lib/shop";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="body-copy text-center">No products yet. Check back soon.</p>;
  }
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={`${p.category}-${p.slug}`} product={p} />
      ))}
    </div>
  );
}
