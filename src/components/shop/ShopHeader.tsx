import { Link, NavLink } from "react-router-dom";
import { categories } from "@/config/categories";
import { site } from "@/config/site";

export function ShopHeader() {
  return (
    <header className="border-b border-stone-200/80 bg-[#f7f3ee]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link to="/" className="text-sm tracking-wide text-stone-600 transition-colors hover:text-stone-900">
          {site.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <NavLink
            to="/"
            className="text-stone-500 transition-colors hover:text-stone-900"
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/magaza"
            end
            className={({ isActive }) =>
              isActive
                ? "text-stone-900"
                : "text-stone-500 transition-colors hover:text-stone-900"
            }
          >
            Mağaza
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`/magaza/${category.slug}`}
              className={({ isActive }) =>
                isActive
                  ? "text-stone-900"
                  : "text-stone-500 transition-colors hover:text-stone-900"
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
