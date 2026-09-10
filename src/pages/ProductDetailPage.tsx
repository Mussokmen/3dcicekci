import { Link, Navigate, useParams } from "react-router-dom";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { WhatsAppOrderButton } from "@/components/shop/WhatsAppOrderButton";
import { Seo } from "@/components/Seo";
import { getCategoryName, getProductBySlug } from "@/config/products";

export function ProductDetailPage() {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/magaza" replace />;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <Seo
        title={product.name}
        description={product.description}
        path={`/urun/${product.slug}`}
      />
      <p className="mb-8 text-sm text-stone-500">
        <Link to="/magaza" className="hover:text-stone-900">
          Mağaza
        </Link>
        <span className="px-2">/</span>
        <Link to={`/magaza/${product.category}`} className="hover:text-stone-900">
          {getCategoryName(product.category)}
        </Link>
      </p>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery name={product.name} images={product.gallery} />

        <div className="flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.16em] text-stone-500 uppercase">
            {getCategoryName(product.category)}
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-stone-900 md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
            {product.description}
          </p>
          {product.price != null ? (
            <p className="mt-6 text-lg text-stone-900">{product.price} TL</p>
          ) : null}
          <div className="mt-8">
            <WhatsAppOrderButton message={product.whatsappMessage} />
          </div>
        </div>
      </div>
    </main>
  );
}
