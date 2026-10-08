import { Link, Navigate, useParams } from "react-router-dom";
import { CategoryLinks, WhatsAppCta } from "@/components/content/ContentBits";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Seo } from "@/components/Seo";
import { getOccasionBySlug, occasions } from "@/config/occasions";
import { products } from "@/config/products";
import { buildWhatsAppUrl } from "@/config/site";

export function OccasionIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="Özel Günler"
        description="Doğum günü, teşekkür, hasta ziyareti, çelenk ve orkide için Bursa teslimi."
        path="/ozel-gunler"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Özel Günler", path: "/ozel-gunler" },
        ]}
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Özel günler</h1>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        Aşağıdaki sayfalar mevcut vitrini doğum günü, teşekkür veya çelenk gibi niyetlere bağlar. Teslim
        Bursa ili içindedir. Sipariş WhatsApp ile alınır.
      </p>
      <ul className="mt-8 space-y-4">
        {occasions.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="block hover:text-stone-950">
              <span className="text-lg text-stone-900">{item.name}</span>
              <span className="mt-1 block text-sm text-stone-500">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function OccasionDetailPage() {
  const { occasionSlug = "" } = useParams();
  const occasion = getOccasionBySlug(occasionSlug);

  if (!occasion) {
    return <Navigate to="/ozel-gunler" replace />;
  }

  const items = products.filter((product) => occasion.categorySlugs.includes(product.category)).slice(0, 8);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Seo
        title={occasion.name}
        description={occasion.description}
        path={occasion.path}
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Özel Günler", path: "/ozel-gunler" },
          { name: occasion.name, path: occasion.path },
        ]}
      />
      <p className="text-sm text-stone-500">
        <Link to="/ozel-gunler" className="hover:text-stone-900">
          Özel günler
        </Link>
        <span className="px-2">/</span>
        {occasion.name}
      </p>
      <h1 className="mt-4 text-4xl tracking-tight text-stone-900">{occasion.name}</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-stone-600">
        {occasion.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <CategoryLinks slugs={occasion.categorySlugs} />
      {items.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl tracking-tight text-stone-900">Vitrinden örnekler</h2>
          <div className="mt-6">
            <ProductGrid products={items} />
          </div>
        </section>
      ) : null}
      <p className="mt-10">
        <WhatsAppCta href={buildWhatsAppUrl(`Merhaba, ${occasion.name} için çiçek bakıyorum.`)} />
      </p>
    </main>
  );
}
