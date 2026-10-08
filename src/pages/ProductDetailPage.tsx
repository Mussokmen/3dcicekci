import { Link, Navigate, useParams } from "react-router-dom";
import { FaqList } from "@/components/content/ContentBits";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { WhatsAppOrderButton } from "@/components/shop/WhatsAppOrderButton";
import { Seo } from "@/components/Seo";
import { faqJsonLd } from "@/config/faqs";
import {
  customDesignWhatsAppMessage,
  getProductCategoryNotes,
  getProductFaqs,
  getProductOccasionLinks,
  getRelatedProducts,
  productDeliveryLinks,
} from "@/config/product-detail";
import { getCategoryName, getProductBySlug } from "@/config/products";
import { absoluteUrl, buildWhatsAppUrl } from "@/config/site";

export function ProductDetailPage() {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/magaza" replace />;
  }

  const categoryName = getCategoryName(product.category);
  const notes = getProductCategoryNotes(product.category);
  const occasions = getProductOccasionLinks(product.category);
  const related = getRelatedProducts(product);
  const productFaqs = getProductFaqs(product.category);
  const customHref = buildWhatsAppUrl(customDesignWhatsAppMessage(product.name));

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 pb-28 md:px-6 md:py-16 lg:pb-16">
      <Seo
        title={product.name}
        description={product.description}
        path={`/urun/${product.slug}`}
        image={product.image}
        type="product"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Mağaza", path: "/magaza" },
          { name: categoryName, path: `/magaza/${product.category}` },
          { name: product.name, path: `/urun/${product.slug}` },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: absoluteUrl(product.image),
            brand: { "@type": "Brand", name: "Bursa'nın Çiçekçisi" },
          },
          faqJsonLd(productFaqs),
        ]}
      />

      <nav aria-label="Sayfa konumu" className="mb-8 text-sm break-words text-stone-500">
        <Link to="/" className="hover:text-stone-900">
          Ana Sayfa
        </Link>
        <span className="px-2">/</span>
        <Link to="/magaza" className="hover:text-stone-900">
          Mağaza
        </Link>
        <span className="px-2">/</span>
        <Link to={`/magaza/${product.category}`} className="hover:text-stone-900">
          {categoryName}
        </Link>
        <span className="px-2">/</span>
        <span className="text-stone-700">{product.name}</span>
      </nav>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <ProductGallery name={product.name} images={product.gallery} />
        </div>

        <div className="order-1 lg:sticky lg:top-24 lg:order-2 lg:self-start">
          <p className="text-xs font-medium tracking-[0.18em] text-stone-500 uppercase">{categoryName}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-stone-700">{product.description}</p>
          {product.price != null ? (
            <p className="mt-4 text-lg text-stone-900">{product.price} TL</p>
          ) : null}

          <dl className="mt-8 border-t border-stone-300 text-sm">
            <div className="grid gap-1 border-b border-stone-200 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-baseline sm:gap-6">
              <dt className="font-medium text-stone-900">Sipariş</dt>
              <dd className="leading-relaxed text-stone-600">
                WhatsApp ile, kısa ve kişisel bir mesajla alınır. Mahalle, alıcı ve kart notu yazılır.
              </dd>
            </div>
            <div className="grid gap-1 border-b border-stone-200 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-baseline sm:gap-6">
              <dt className="font-medium text-stone-900">Teslim</dt>
              <dd className="leading-relaxed text-stone-600">
                Bursa ili içinde aynı gün, zamanında ve dikkatli teslim edilir. Teslim öncesi alıcı
                bilgilendirilir.
              </dd>
            </div>
            <div className="grid gap-1 border-b border-stone-200 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-baseline sm:gap-6">
              <dt className="font-medium text-stone-900">Hazırlık</dt>
              <dd className="leading-relaxed text-stone-600">
                {notes[0]?.text ?? "Fotoğraftaki düzen esas alınır; teslime yakın hazırlanır."}
                {notes[0]?.href && notes[0]?.linkLabel ? (
                  <>
                    {" "}
                    <Link to={notes[0].href} className="text-stone-800 underline-offset-4 hover:underline">
                      {notes[0].linkLabel}
                    </Link>
                  </>
                ) : null}
              </dd>
            </div>
          </dl>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <WhatsAppOrderButton
              message={product.whatsappMessage}
              className="w-full rounded-full font-semibold"
            />
            <a
              href={customHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-stone-400 bg-white px-4 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Özel ölçü / renk yaz
            </a>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-stone-500">
            {productDeliveryLinks.map((item, index) => (
              <span key={item.path}>
                {index > 0 ? " · " : null}
                <Link to={item.path} className="underline-offset-4 hover:text-stone-900 hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
            {occasions.map((item) => (
              <span key={item.slug}>
                {" · "}
                <Link to={item.path} className="underline-offset-4 hover:text-stone-900 hover:underline">
                  {item.name}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16 border-t border-stone-200/80 pt-12 md:mt-20">
          <h2 className="text-2xl tracking-tight text-stone-900">Aynı kategoride</h2>
          <p className="mt-2 text-sm text-stone-600">
            <Link to={`/magaza/${product.category}`} className="underline-offset-4 hover:underline">
              Tüm {categoryName.toLowerCase()}
            </Link>
          </p>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}

      <section className="mt-16 border-t border-stone-200/80 pt-12 md:mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Sipariş hakkında</h2>
        <FaqList items={productFaqs} />
      </section>

      <section className="mt-16 border-t border-stone-200/80 pt-12 md:mt-20">
        <h2 className="text-2xl tracking-tight text-stone-900">Özel tasarım</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
          Bu ürünü referans göstererek ölçü veya renk değiştirebilirsiniz. Katalog dışı düzenler atölyede
          kurulur. Hazırlık öncesi ölçü ve renk mesajda netleşir.
        </p>
        <p className="mt-6">
          <Link to="/ozel-tasarim" className="text-sm text-stone-800 underline-offset-4 hover:underline">
            Özel tasarım nasıl işler?
          </Link>
        </p>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-[#f7f3ee]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <WhatsAppOrderButton message={product.whatsappMessage} className="w-full" />
      </div>
    </main>
  );
}
