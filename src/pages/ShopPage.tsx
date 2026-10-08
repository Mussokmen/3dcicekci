import { Link } from "react-router-dom";
import { CategoryNavigation } from "@/components/shop/CategoryNavigation";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Seo } from "@/components/Seo";
import { getFeaturedProducts, products } from "@/config/products";
import { buildWhatsAppUrl, generalWhatsAppMessage, shopIntro } from "@/config/site";

const whatsappHref = buildWhatsAppUrl(generalWhatsAppMessage());

export function ShopPage() {
  const featured = getFeaturedProducts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <Seo title="Mağaza" description={shopIntro} path="/magaza" />
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Vitrin</p>
          <h1 className="mt-2 text-3xl tracking-tight text-stone-900 md:text-5xl">Mağaza</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-stone-600">
            {shopIntro}
          </p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white transition-colors hover:bg-stone-800 sm:h-10"
        >
          WhatsApp'tan Sipariş
        </a>
      </header>

      <CategoryNavigation className="mt-8" />
      <p className="mt-4 text-sm text-stone-600">
        <Link to="/bursa" className="underline-offset-4 hover:underline">
          Bursa teslimatı
        </Link>
      </p>

      {featured.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl tracking-tight text-stone-900">Öne çıkanlar</h2>
          <div className="mt-6">
            <ProductGrid products={featured} />
          </div>
        </section>
      ) : null}

      <section className="mt-12">
        <h2 className="text-xl tracking-tight text-stone-900">Tüm ürünler</h2>
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
