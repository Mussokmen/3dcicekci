import { Navigate, useParams } from "react-router-dom";
import { CategoryNavigation } from "@/components/shop/CategoryNavigation";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Seo } from "@/components/Seo";
import { getCategoryBySlug } from "@/config/categories";
import { getProductsByCategory } from "@/config/products";

export function ShopCategoryPage() {
  const { categorySlug = "" } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/magaza" replace />;
  }

  const items = getProductsByCategory(category.slug);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <Seo
        title={category.name}
        description={category.description}
        path={`/magaza/${category.slug}`}
      />
      <header className="max-w-xl">
        <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Kategori</p>
        <h1 className="mt-3 text-4xl tracking-tight text-stone-900 md:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-600">{category.description}</p>
      </header>

      <CategoryNavigation className="mt-10" />

      <section className="mt-12">
        <ProductGrid products={items} />
      </section>
    </main>
  );
}
