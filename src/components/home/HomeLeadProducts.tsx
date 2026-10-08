import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/config/products";

export function HomeLeadProducts() {
  const products = getFeaturedProducts().slice(0, 4);

  return (
    <section aria-label="Vitrinden ürünler" className="bg-[#f7f3ee] px-4 py-3 md:px-6">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
        {products.map((product) => (
          <li key={product.slug} className="min-w-0">
            <Link to={`/urun/${product.slug}`} className="block focus-visible:outline-none">
              <img
                src={product.image}
                alt={`${product.name}, Bursa teslim`}
                width={600}
                height={800}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <span className="mt-1.5 block text-sm leading-snug break-words text-stone-900">
                {product.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
