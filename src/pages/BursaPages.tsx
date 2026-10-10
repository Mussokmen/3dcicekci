import { Link, Navigate, useParams } from "react-router-dom";
import { CategoryLinks, FaqList, WhatsAppCta } from "@/components/content/ContentBits";
import { Seo } from "@/components/Seo";
import { faqJsonLd } from "@/config/faqs";
import {
  getDistrictAreas,
  getNeighborhoodsByParent,
  getServiceAreaBySlug,
} from "@/config/areas";
import { buildWhatsAppUrl, generalWhatsAppMessage } from "@/config/site";

export function BursaIndexPage() {
  const districts = getDistrictAreas();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="max-w-3xl">
      <Seo
        title="Bursa Çiçek Gönderimi"
        description="Bursa’nın on yedi ilçesine buket, orkide, kutu ve çelenk. Sipariş WhatsApp ile alınır; teslim aynı gün planlanır."
        path="/bursa"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Bursa Teslimatı", path: "/bursa" },
        ]}
        jsonLd={faqJsonLd()}
      />
      <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Hizmet bölgesi</p>
      <h1 className="mt-2 text-3xl tracking-tight break-words text-stone-900 md:text-4xl">
        Bursa çiçek gönderimi
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          Bursa’nın Çiçekçisi, il genelinde taze çiçek hazırlayan yerel bir atölyedir. Çiçek siparişi
          WhatsApp ile alınır. Buket, orkide, kutu ve çelenk, kendi atölyemizde çekilmiş fotoğraflardaki
          düzene göre özenle hazırlanır.
        </p>
        <p>
          Aynı gün teslim Bursa’nın on yedi ilçesini kapsar: Osmangazi, Nilüfer, Yıldırım, Mudanya, Gemlik,
          İnegöl, Gürsu, Kestel, Yenişehir, İznik, Karacabey, Mustafakemalpaşa, Orhangazi, Büyükorhan,
          Harmancık, Keles ve Orhaneli. Görükle bir ilçe değil, Nilüfer mahallesidir.
        </p>
        <p>
          Mesajda ürün, mahalle, alıcı adı ve kart notu yer alır. Teslim öncesi alıcı bilgilendirilir.
          Çiçek yola yakın tamamlanır; ambalaj kapıya kadar korunur. Kart notu, mesajdaki metinle yazılır.
        </p>
        <p>
          İlçe sayfaları yolun ve kapının farkını anlatır. Nilüfer’de site bloğu, Osmangazi’de işyeri ve
          hastane girişi, Yıldırım’da mahalle sokağı, sahil ilçelerinde bina tarifi, güney ilçelerinde köy
          ve mevki ayrı yazılır. Mahalle sayfaları bu ilçelerin içindeki sık kapıları ayrıca tarif eder.
        </p>
        <p>
          Hazırlık atölyede, taze çiçekle yapılır. Sipariş hattı 7/24 açıktır. Kişisel bilgi yalnızca
          hazırlık ve teslim için kullanılır; ayrıntı gizlilik sayfasındadır.
        </p>
      </div>

      <CategoryLinks slugs={["buketler", "orkideler", "kutular", "celenkler"]} />
      </div>

      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">İlçeler</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {districts.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="block rounded-2xl bg-white/70 px-4 py-3 hover:bg-white">
              <span className="text-stone-900">{item.shortName}</span>
              <span className="mt-1 block text-sm text-stone-500">{item.description}</span>
            </Link>
          </li>
        ))}
      </ul>

      {(
        [
          ["nilufer", "Nilüfer mahalleleri"],
          ["osmangazi", "Osmangazi mahalleleri"],
          ["yildirim", "Yıldırım mahalleleri"],
        ] as const
      ).map(([parent, title]) => {
        const items = getNeighborhoodsByParent(parent);
        if (items.length === 0) return null;
        return (
          <section key={parent}>
            <h2 className="mt-12 text-2xl tracking-tight text-stone-900">{title}</h2>
            <ul
              className={
                parent === "nilufer"
                  ? "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
                  : "mt-4 grid gap-2 text-sm sm:grid-cols-2"
              }
            >
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={
                      parent === "nilufer"
                        ? "block break-words rounded-xl bg-white/70 px-3 py-2 text-sm text-stone-800 hover:bg-white"
                        : "underline-offset-4 hover:underline"
                    }
                  >
                    {item.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <p className="mt-8 text-sm text-stone-600">
        <Link to="/ozel-gunler" className="underline-offset-4 hover:underline">
          Özel günler
        </Link>
        {" · "}
        <Link to="/rehber" className="underline-offset-4 hover:underline">
          Rehber
        </Link>
      </p>

      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">Sık sorulanlar</h2>
      <FaqList />

      <p className="mt-10">
        <WhatsAppCta href={buildWhatsAppUrl(generalWhatsAppMessage())} />
      </p>
    </main>
  );
}

export function BursaAreaPage() {
  const { areaSlug = "" } = useParams();
  const area = getServiceAreaBySlug(areaSlug);

  if (!area || area.slug === "bursa") {
    return <Navigate to="/bursa" replace />;
  }

  const parent = area.parentSlug ? getServiceAreaBySlug(area.parentSlug) : undefined;
  const children = getNeighborhoodsByParent(area.slug);
  const nearby = (area.nearbySlugs ?? [])
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const wide = children.length > 12;

  return (
    <main className={`mx-auto px-4 py-10 md:px-6 ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
      <Seo
        title={area.name}
        description={area.description}
        path={area.path}
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Bursa Teslimatı", path: "/bursa" },
          ...(parent ? [{ name: parent.shortName, path: parent.path }] : []),
          { name: area.shortName, path: area.path },
        ]}
      />
      <p className="text-sm text-stone-500">
        <Link to="/bursa" className="hover:text-stone-900">
          Bursa
        </Link>
        {parent ? (
          <>
            <span className="px-2">/</span>
            <Link to={parent.path} className="hover:text-stone-900">
              {parent.shortName}
            </Link>
          </>
        ) : null}
        <span className="px-2">/</span>
        {area.shortName}
      </p>
      <div className={wide ? "max-w-3xl" : undefined}>
      <h1 className="mt-4 text-4xl tracking-tight break-words text-stone-900">{area.name}</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        {area.body.map((paragraph, index) => (
          <p key={`${area.slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
      <CategoryLinks slugs={area.relatedCategorySlugs} />
      {parent && area.kind === "neighborhood" ? (
        <p className="mt-6 text-sm text-stone-600">
          <Link to={parent.path} className="underline-offset-4 hover:underline">
            {parent.shortName} çiçek gönderimi
          </Link>
        </p>
      ) : null}
      {nearby.length > 0 ? (
        <>
          <h2 className="mt-10 text-xl tracking-tight text-stone-900">
            {area.nearbyPrecise === false ? "Nilüfer’den diğer mahalleler" : "Yakın mahalleler"}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {nearby.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="inline-block rounded-full bg-white/80 px-3 py-1.5 text-stone-800 hover:bg-white"
                >
                  {item.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      </div>
      {children.length > 0 ? (
        <>
          <h2 className="mt-10 text-xl tracking-tight text-stone-900">Mahalleler</h2>
          <ul
            className={
              wide
                ? "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
                : "mt-4 grid gap-2 text-sm sm:grid-cols-2"
            }
          >
            {children.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={
                    wide
                      ? "block break-words rounded-xl bg-white/70 px-3 py-2 text-sm text-stone-800 hover:bg-white"
                      : "underline-offset-4 hover:underline"
                  }
                >
                  {item.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="mt-8 text-sm">
        <Link to="/rehber/bursa-cicek-gonderimi" className="underline-offset-4 hover:underline">
          Teslim nasıl işler?
        </Link>
      </p>
      <p className="mt-10">
        <WhatsAppCta
          href={buildWhatsAppUrl(`Merhaba, ${area.shortName} teslimi için çiçek siparişi vermek istiyorum.`)}
        />
      </p>
    </main>
  );
}
