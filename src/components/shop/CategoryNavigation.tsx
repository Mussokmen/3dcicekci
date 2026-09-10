import { NavLink } from "react-router-dom";
import { categories } from "@/config/categories";
import { cn } from "@/lib/utils";

type CategoryNavigationProps = {
  className?: string;
};

export function CategoryNavigation({ className }: CategoryNavigationProps) {
  return (
    <nav
      aria-label="Kategoriler"
      className={cn("flex flex-wrap gap-x-6 gap-y-2 text-sm", className)}
    >
      <NavLink
        to="/magaza"
        end
        className={({ isActive }) =>
          cn(
            "border-b pb-1 transition-colors",
            isActive
              ? "border-stone-900 text-stone-900"
              : "border-transparent text-stone-500 hover:text-stone-800",
          )
        }
      >
        Tümü
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.slug}
          to={`/magaza/${category.slug}`}
          className={({ isActive }) =>
            cn(
              "border-b pb-1 transition-colors",
              isActive
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-800",
            )
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
}
