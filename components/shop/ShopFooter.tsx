import Link from "next/link";
import { categories, categoryHref, SHOP_BASE, SHOP_NAME } from "@/lib/shop";

export default function ShopFooter() {
  return (
    <footer className="site-footer">
      <div className="shell flex flex-wrap items-center justify-between gap-4">
        <span>© 2026 {SHOP_NAME}</span>
        <nav className="flex flex-wrap gap-5" aria-label="Footer">
          <Link href={SHOP_BASE} className="nav-link">
            Shop
          </Link>
          {categories.map((c) => (
            <Link key={c.slug} href={categoryHref(c.slug)} className="nav-link">
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
