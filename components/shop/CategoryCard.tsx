import Link from "next/link";
import Media from "./Media";
import { categoryHref, type Category } from "@/lib/shop";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={categoryHref(category.slug)} className="card-link">
      <Media
        src={category.image}
        alt={category.name}
        tone={category.tone}
        className="media-card"
      />
      <h3 className="card-title">{category.name}</h3>
      <p className="card-meta">{category.tagline}</p>
    </Link>
  );
}
