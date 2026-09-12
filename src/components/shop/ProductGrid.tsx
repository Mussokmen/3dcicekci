import type { Product } from "@/config/products";
import { ProductCard } from "@/components/shop/ProductCard";

type ProductGridProps = {
  products: Product[];
  showOrderActions?: boolean;
};

export function ProductGrid({ products, showOrderActions = false }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-stone-500">Bu kategoride henüz ürün yok.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showOrderActions={showOrderActions} />
      ))}
    </div>
  );
}
