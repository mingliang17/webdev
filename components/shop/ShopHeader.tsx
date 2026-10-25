import Link from "next/link";
import { categories, categoryHref, SHOP_BASE, SHOP_NAME } from "@/lib/shop";

/** Light, sticky header shared by every page under /pages/nifashion. */
export default function ShopHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={SHOP_BASE} className="brand">
          {SHOP_NAME}
        </Link>

        <nav className="hidden gap-8 md:flex" aria-label="Shop">
          {categories.map((c) => (
            <Link key={c.slug} href={categoryHref(c.slug)} className="nav-link">
              {c.name}
            </Link>
          ))}
        </nav>

        <Link href="/" className="btn-link">
          ← Back to BePearls Enterprise
        </Link>
      </div>
    </header>
  );
}
