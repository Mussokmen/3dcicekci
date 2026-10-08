import { Link } from "react-router-dom";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { products } from "@/config/products";

export function HomeVitrine() {
  return (
    <section className="bg-[#f7f3ee] text-stone-900">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Mağaza</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl tracking-tight text-stone-900 md:text-4xl">Vitrin</h2>
          <Link
            to="/magaza"
            className="text-sm text-stone-600 underline-offset-4 hover:text-stone-900 hover:underline"
          >
            Tüm mağazayı aç
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} showOrderActions />
        </div>
      </div>
    </section>
  );
}
