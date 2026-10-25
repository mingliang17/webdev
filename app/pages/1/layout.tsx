import ShopHeader from "@/components/shop/ShopHeader";
import ShopFooter from "@/components/shop/ShopFooter";

/** Shared chrome for every page under /pages/nifashion (landing, category, product). */
export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ShopHeader />
      <main>{children}</main>
      <ShopFooter />
    </>
  );
}
