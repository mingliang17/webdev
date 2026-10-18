import Link from "next/link";
import Media from "./Media";
import { formatPrice, productHref, type Product } from "@/lib/shop";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={productHref(product)} className="card-link">
      <Media
        src={product.images?.[0]}
        alt={product.name}
        tone={product.tone}
        className="media-card"
      >
        {product.bestSeller && <span className="badge">Best seller</span>}
      </Media>
      <h3 className="card-title">{product.name}</h3>
      <p className="price mt-1">{formatPrice(product.price)}</p>
    </Link>
  );
}
