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
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <Link to={`/urun/${product.slug}`} className="text-stone-800 underline-offset-4 hover:underline">
            İncele
          </Link>
          <a
            href={buildWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="text-stone-600 hover:text-stone-900"
          >
            WhatsApp
          </a>
        </div>
      ) : null}
    </article>
  );
}
