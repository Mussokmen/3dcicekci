import { NavLink } from "react-router-dom";
import { categories } from "@/config/categories";
import { getProductBySlug, getProductsByCategory, products } from "@/config/products";
import { cn } from "@/lib/utils";

const cardTones = [
  "bg-[#f3eee8]",
  "bg-[#e8f6ea]",
  "bg-[#fbf6d9]",
  "bg-[#e7f6ee]",
  "bg-[#fdeee6]",
] as const;

type CategoryNavigationProps = {
  className?: string;
};

export function CategoryNavigation({ className }: CategoryNavigationProps) {
  const allImage = getProductBySlug(categories[0]?.showcaseProductSlug ?? "") ?? products[0];

  return (
    <nav
      aria-label="Kategoriler"
      className={cn(
        "flex snap-x gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-start md:gap-3 md:overflow-visible [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      <NavLink
        to="/magaza"
        end
        className={({ isActive }) =>
          cn(
            "flex w-[6.75rem] shrink-0 snap-start flex-col items-center rounded-[1.5rem] px-2.5 py-4 text-center transition-colors sm:w-32",
            cardTones[0],
            isActive
              ? "ring-1 ring-stone-900/15 ring-offset-2 ring-offset-[#f7f3ee]"
              : "hover:brightness-[0.98]",
          )
        }
      >
        <span className="size-[4.5rem] overflow-hidden rounded-full bg-white shadow-sm sm:size-20">
          {allImage ? (
            <img src={allImage.image} alt="" loading="lazy" className="size-full object-cover" />
          ) : null}
        </span>
        <span className="mt-2.5 text-[11px] font-semibold tracking-wide text-stone-800 uppercase">
          Tümü
        </span>
        <span className="mt-0.5 text-xs text-stone-500">{products.length} Ürün</span>
      </NavLink>

      {categories.map((category, index) => {
        const imageProduct = getProductBySlug(category.showcaseProductSlug);
        const count = getProductsByCategory(category.slug).length;

        return (
          <NavLink
            key={category.slug}
            to={`/magaza/${category.slug}`}
            className={({ isActive }) =>
              cn(
                "flex w-[6.75rem] shrink-0 snap-start flex-col items-center rounded-[1.5rem] px-2.5 py-4 text-center transition-colors sm:w-32",
                cardTones[(index + 1) % cardTones.length],
                isActive
                  ? "ring-1 ring-stone-900/15 ring-offset-2 ring-offset-[#f7f3ee]"
                  : "hover:brightness-[0.98]",
              )
            }
          >
            <span className="size-[4.5rem] overflow-hidden rounded-full bg-white shadow-sm sm:size-20">
              {imageProduct ? (
                <img
                  src={imageProduct.image}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover"
                />
              ) : null}
            </span>
            <span className="mt-2.5 text-[11px] font-semibold tracking-wide text-stone-800 uppercase">
              {category.name}
            </span>
            <span className="mt-0.5 text-xs text-stone-500">{count} Ürün</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
