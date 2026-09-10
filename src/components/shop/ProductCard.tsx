import { Link } from "react-router-dom";
import type { Product } from "@/config/products";
import { getCategoryName } from "@/config/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <Link to={`/urun/${product.slug}`} className="group block focus-visible:outline-none">
        <div className="overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[3/4] h-auto w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
          />
        </div>
        <div className="pt-3">
          <p className="text-[11px] tracking-[0.16em] text-stone-500 uppercase">
            {getCategoryName(product.category)}
          </p>
          <h3 className="mt-1 text-[15px] leading-snug text-stone-900">{product.name}</h3>
          {product.price != null ? (
            <p className="mt-1 text-sm text-stone-700">{product.price} TL</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
