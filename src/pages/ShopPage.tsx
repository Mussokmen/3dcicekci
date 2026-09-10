import { CategoryNavigation } from "@/components/shop/CategoryNavigation";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Seo } from "@/components/Seo";
import { getFeaturedProducts, products } from "@/config/products";
import { site } from "@/config/site";

export function ShopPage() {
  const featured = getFeaturedProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <Seo title="Mağaza" description={site.defaultDescription} path="/magaza" />
      <header className="max-w-xl">
        <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Vitrin</p>
        <h1 className="mt-3 text-4xl tracking-tight text-stone-900 md:text-5xl">Mağaza</h1>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          Buket, orkide, kutu ve çelenk aranjmanları. Siparişler WhatsApp üzerinden alınır.
        </p>
      </header>

      <CategoryNavigation className="mt-10" />

      {featured.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-xl tracking-tight text-stone-900">Öne çıkanlar</h2>
          <div className="mt-8">
            <ProductGrid products={featured} />
          </div>
        </section>
      ) : null}

      <section className="mt-16">
        <h2 className="text-xl tracking-tight text-stone-900">Tüm ürünler</h2>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
