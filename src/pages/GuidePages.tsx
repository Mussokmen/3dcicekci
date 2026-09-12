import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { getGuideBySlug, guides } from "@/config/guides";

export function GuideIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="Rehber"
        description="Bursa çiçek gönderimi, WhatsApp sipariş, orkide ve çelenk hakkında kısa yazılar."
        path="/rehber"
        type="article"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Rehber", path: "/rehber" },
        ]}
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Rehber</h1>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        Sürekli blog yayını yok. Aşağıdaki yazılar sipariş ve teslimi netleştirmek içindir.
      </p>
      <ul className="mt-8 space-y-4">
        {guides.map((item) => (
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

export function GuideDetailPage() {
  const { guideSlug = "" } = useParams();
  const guide = getGuideBySlug(guideSlug);

  if (!guide) {
    return <Navigate to="/rehber" replace />;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title={guide.name}
        description={guide.description}
        path={guide.path}
        type="article"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Rehber", path: "/rehber" },
          { name: guide.name, path: guide.path },
        ]}
      />
      <p className="text-sm text-stone-500">
        <Link to="/rehber" className="hover:text-stone-900">
          Rehber
        </Link>
        <span className="px-2">/</span>
        {guide.name}
      </p>
      <h1 className="mt-4 text-4xl tracking-tight text-stone-900">{guide.name}</h1>
      <article className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        {guide.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </article>
      <p className="mt-8 text-sm">
        <Link to="/bursa" className="underline-offset-4 hover:underline">
          Bursa teslimatı
        </Link>
        {" · "}
        <Link to="/magaza" className="underline-offset-4 hover:underline">
          Mağaza
        </Link>
      </p>
    </main>
  );
}
