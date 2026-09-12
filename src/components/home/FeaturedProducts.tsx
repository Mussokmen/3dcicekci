import { ProductGrid } from "@/components/shop/ProductGrid";
import type { Product } from "@/config/products";

type FeaturedProductsProps = {
  products: Product[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Vitrin</p>
      <h2 className="mt-3 text-3xl tracking-tight text-stone-900">Öne Çıkan Çiçekler</h2>
      <p className="mt-3 max-w-xl text-base text-stone-600">
        En çok tercih edilen ve özenle hazırlanan aranjmanlarımız.
      </p>
      <div className="mt-10">
        <ProductGrid products={products} showOrderActions />
      </div>
    </section>
  );
}
