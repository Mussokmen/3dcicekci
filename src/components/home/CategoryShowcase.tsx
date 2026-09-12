import { Link } from "react-router-dom";
import { categories } from "@/config/categories";
import { getProductBySlug } from "@/config/products";

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Kategoriler</p>
      <h2 className="mt-3 text-3xl tracking-tight text-stone-900">Çiçek seçin</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {categories.map((category) => {
          const imageProduct = getProductBySlug(category.showcaseProductSlug);

          return (
            <Link
              key={category.slug}
              to={`/magaza/${category.slug}`}
              className="group block"
            >
              <div className="overflow-hidden bg-stone-100">
                {imageProduct ? (
                  <img
                    src={imageProduct.image}
                    alt={category.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
              <h3 className="mt-3 text-lg text-stone-900">{category.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{category.description}</p>
              <span className="mt-2 inline-block text-sm text-stone-800 underline-offset-4 group-hover:underline">
                Keşfet
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
