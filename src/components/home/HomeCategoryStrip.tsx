import { Link } from "react-router-dom";
import { categories } from "@/config/categories";
import { getProductBySlug, getProductsByCategory } from "@/config/products";

const cardTones = [
  "bg-[#e8f6ea]",
  "bg-[#fbf6d9]",
  "bg-[#e7f6ee]",
  "bg-[#fdeee6]",
] as const;

export function HomeCategoryStrip() {
  return (
    <section className="bg-white px-4 py-8 md:px-6 md:py-10">
      <div className="mx-auto flex max-w-6xl snap-x gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
        {categories.map((category, index) => {
          const imageProduct = getProductBySlug(category.showcaseProductSlug);
          const count = getProductsByCategory(category.slug).length;

          return (
            <Link
              key={category.slug}
              to={`/magaza/${category.slug}`}
              className={`flex w-[7.5rem] shrink-0 snap-start flex-col items-center rounded-[1.75rem] px-3 py-5 text-center transition-transform motion-safe:hover:-translate-y-0.5 sm:w-36 ${cardTones[index % cardTones.length]}`}
            >
              <span className="size-[5.5rem] overflow-hidden rounded-full bg-white shadow-sm sm:size-24">
                {imageProduct ? (
                  <img
                    src={imageProduct.image}
                    alt={`${category.name}, Bursa teslim`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                ) : null}
              </span>
              <span className="mt-3 text-[11px] font-bold tracking-wide text-stone-800 uppercase sm:text-xs">
                {category.name}
              </span>
              <span className="mt-1 text-xs text-stone-500">{count} Ürün</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
