import { ProductGrid } from "@/components/shop/ProductGrid";
import type { Product } from "@/config/products";

type BestSellerProductsProps = {
  products: Product[];
};

export function BestSellerProducts({ products }: BestSellerProductsProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <h2 className="text-3xl tracking-tight text-stone-900">Çok Satanlar</h2>
      <p className="mt-3 max-w-xl text-base text-stone-600">
        Atölyemizde sık hazırladığımız buket, kutu ve orkide aranjmanları.
      </p>
      <div className="mt-10">
        <ProductGrid products={products} showOrderActions />
      </div>
    </section>
  );
}
