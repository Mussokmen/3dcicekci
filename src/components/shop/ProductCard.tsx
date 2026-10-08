import { Link } from "react-router-dom";
import type { Product } from "@/config/products";
import { getCategoryName } from "@/config/products";
import { buildWhatsAppUrl } from "@/config/site";

type ProductCardProps = {
  product: Product;
  showOrderActions?: boolean;
};

export function ProductCard({ product, showOrderActions = false }: ProductCardProps) {
  return (
    <article>
      <Link to={`/urun/${product.slug}`} className="group block focus-visible:outline-none">
        <div className="overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={`${product.name}, Bursa teslim`}
            loading="lazy"
            decoding="async"
            width={600}
            height={800}
            className="aspect-[3/4] h-auto w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          />
        </div>
        <div className="pt-3">
          <p className="text-[11px] tracking-[0.16em] text-stone-500 uppercase">
            {getCategoryName(product.category)}
          </p>
          <h3 className="mt-1 text-[15px] leading-snug break-words text-stone-900">{product.name}</h3>
          {product.price != null ? (
            <p className="mt-1 text-sm text-stone-700">{product.price} TL</p>
          ) : null}
        </div>
      </Link>
      {showOrderActions ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            to={`/urun/${product.slug}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 bg-white px-2 text-center text-[13px] font-semibold text-stone-900 shadow-sm hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            İncele
          </Link>
          <a
            href={buildWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-stone-900 px-2 text-center text-[13px] font-semibold text-white shadow-sm hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            WhatsApp
          </a>
        </div>
      ) : null}
    </article>
  );
}
