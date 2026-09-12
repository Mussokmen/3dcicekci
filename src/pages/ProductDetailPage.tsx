import { Link, Navigate, useParams } from "react-router-dom";
import { FaqList } from "@/components/content/ContentBits";
import { TrustHighlights } from "@/components/content/TrustHighlights";
import { WhatsAppSupportCard } from "@/components/content/WhatsAppSupportCard";
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
  productOrderSteps,
  productTrustChips,
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
        description={`${product.name}. 7/24 açığız; Bursa içinde aynı gün teslim. Sipariş WhatsApp’tan.`}
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
        <ProductGallery name={product.name} images={product.gallery} />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[11px] tracking-[0.16em] text-stone-500 uppercase">{categoryName}</p>
          <h1 className="mt-3 text-3xl tracking-tight text-stone-900 md:text-4xl">{product.name}</h1>

          <ul className="mt-5 flex flex-wrap gap-2">
            {productTrustChips.map((chip) => (
              <li
                key={chip}
                className="border border-stone-300 bg-white/60 px-2.5 py-1 text-[11px] tracking-wide text-stone-700"
              >
                {chip}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">{product.description}</p>

          {product.price != null ? (
            <p className="mt-6 text-lg text-stone-900">{product.price} TL</p>
          ) : null}

          <ol className="mt-8 space-y-2 border-t border-stone-200/80 pt-6">
            {productOrderSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-stone-600">
                <span className="w-5 shrink-0 text-stone-400">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <p className="text-[11px] tracking-[0.16em] text-stone-500 uppercase">Bu düzen için</p>
            <ul className="mt-3 space-y-2">
              {notes.map((note) => (
                <li key={note.text} className="text-sm leading-relaxed text-stone-600">
                  {note.text}
                  {note.href && note.linkLabel ? (
                    <>
                      {" "}
                      <Link to={note.href} className="text-stone-800 underline-offset-4 hover:underline">
                        {note.linkLabel}
                      </Link>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {occasions.length > 0 ? (
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {occasions.map((item) => (
                <Link
                  key={item.slug}
                  to={item.path}
                  className="text-stone-800 underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </p>
          ) : null}

          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {productDeliveryLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-stone-700 underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppOrderButton message={product.whatsappMessage} />
            <a
              href={customHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-stone-700 underline-offset-4 hover:underline"
            >
              Özel ölçü / renk yaz
            </a>
          </div>
        </div>
      </div>

      <TrustHighlights className="mt-14 md:mt-16" />

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
        <h2 className="text-2xl tracking-tight text-stone-900">Sipariş hakkında</h2>
        <FaqList items={productFaqs} />
        <WhatsAppSupportCard className="mt-10" message={product.whatsappMessage} />
      </section>

      <section className="mt-16 border-t border-stone-200/80 pt-12 md:mt-20">
        <h2 className="text-2xl tracking-tight text-stone-900">Özel tasarım</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
          Bu ürünü referans göstererek ölçü veya renk değiştirebilirsiniz. Katalog dışı düzenler atölyede
          kurulur; fiyat sitede yazmaz.
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
