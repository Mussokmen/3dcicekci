import { Link, Navigate, useParams } from "react-router-dom";
import { CategoryLinks, FaqList, WhatsAppCta } from "@/components/content/ContentBits";
import { Seo } from "@/components/Seo";
import { faqJsonLd } from "@/config/faqs";
import {
  getDistrictAreas,
  getNeighborhoods,
  getNeighborhoodsByParent,
  getServiceAreaBySlug,
} from "@/config/areas";
import { buildWhatsAppUrl, generalWhatsAppMessage } from "@/config/site";

export function BursaIndexPage() {
  const districts = getDistrictAreas();
  const neighborhoods = getNeighborhoods();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="Bursa Çiçek Gönderimi"
        description="Bursa ili genelinde buket, orkide, kutu ve çelenk teslimi. Sipariş WhatsApp üzerinden alınır."
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
          Bursa’da çiçek siparişi çoğu zaman bir mahalleye, bir saate ve bir karta bağlıdır. Bursa’nın
          Çiçekçisi olarak il genelinde teslim planlarız; Osmangazi’den Nilüfer’e, Yıldırım’dan Mudanya ve
          Gemlik’e, İnegöl ve Görükle’ye kadar güzergâhı WhatsApp’ta netleştiririz. Stok sayısı veya teslim
          dakikası uydurmayız. 7/24 WhatsApp’tan yazabilirsiniz; Bursa içinde aynı gün teslim ederiz.
        </p>
        <p>
          Sipariş vitrindeki fotoğraftan başlar. Beğendiğiniz buketi, orkideyi, kutuyu veya çelengi yazın;
          alıcı adı, mahalle, bina tarifi ve istenen saat aralığını ekleyin. Kart notunu da aynı mesajda
          göndermeniz yeterli. Teslimi aceleye getirmek taze çiçeğe zarar verir; yaz aylarında aranjmanı
          yola yakın hazırlarız. Kışın ise soğuk ve rüzgâr ambalajı etkiler; kapıda bekletmemek için alıcıyı
          haberdar etmenizi isteriz.
        </p>
        <p>
          Aynı gün teslim Bursa ili içindedir. 7/24 açığız; mahalle ve istediğiniz saati mesaja yazın.
          Çelenk ve büyük düzenlerde ölçü, renk ve metni baştan iletmeniz hazırlığı hızlandırır. Doğum günü
          ve teşekkür buketleri de aynı gün çıkar.
        </p>
        <p>
          İlçe sayfalarında o bölgede sık istenen ürünlere ve yola dair kısa notlar var. Ataevler, Balat ve
          Beşevler Nilüfer içinde ayrı mahalle sayfalarıdır; kopya metinle onlarca mahalle açmıyoruz. Teslim
          etmediğimiz bir yeri de vaat etmeyiz — Bursa içinde ulaştırabildiğimiz her adresi mesajda
          konuşuruz. Google’da “Bursa çiçekçi” araması sizi buraya getirdiyse, vitrin fotoğrafları ve bu
          teslim metni gerçek işleyişi anlatır; sahte şube veya cadde adresi yoktur.
        </p>
        <p>
          Buketler ev ve ofis kapısına, orkideler masaya, kutular yolda daha az bozulan hediyelere, çelenkler
          kapı önü ve anmaya yöneliktir. Hangisinin duruma uyduğunu abartmadan söyleriz. Fotoğraftaki sap
          sayısı, saksı doluluğu ve ambalaj teslimde referanstır; mevsim nedeniyle küçük fark olabilir, bunu
          gizlemeyiz. Fiyat ve stok sitede yazmaz çünkü günlük çiçek değişir; güncel tutarı yazışmada
          paylaşırız.
        </p>
        <p>
          WhatsApp siparişinde üyelik veya sepet yoktur. Mesaja ürün adı veya sayfa bağlantısı, teslim
          mahallesi, varsa site/blok, alıcı telefonu ve kart notu yeter. Ödeme şekli konuşulur; sitede kart
          çekilmez. Kişisel bilgi yalnızca hazırlık ve teslim için kullanılır; form toplamayız. Ayrıntı
          gizlilik sayfasındadır.
        </p>
        <p>
          Osmangazi’de işyeri ve hastane girişleri, Nilüfer’de site güvenliği, Yıldırım’da sokak tarifleri,
          Mudanya ve Gemlik’te yol süresi, İnegöl’de işyeri kabul saati teslimi etkiler. Görükle’de yurt ve
          kampüs yakını kapı noktası ayrıca konuşulur. Gürsu, Kestel, Yenişehir, İznik, Karacabey,
          Mustafakemalpaşa ve Orhangazi için de ayrı ilçe notları vardır. Bu farklar yüzden her ilçeye aynı
          cümleyi kopyalamadık; ilgili sayfadan o bölgeye özel notu okuyabilirsiniz. Özel gün niyetleri
          (doğum günü, teşekkür, hasta ziyareti, çelenk, ofis orkide) ayrı landing’lerde mevcut vitrine
          bağlanır.
        </p>
        <p>
          Teslimi planlarken kurye güzergâhı o günkü siparişlere göre kurulur. Aynı gün teslim ederiz; tam
          dakikayı yol ve alıcının kapıda olması belirler. Sorularınızı ilçe sayfasından, rehber yazılarından
          veya 7/24 WhatsApp hattından iletebilirsiniz.
        </p>
      </div>

      <CategoryLinks slugs={["buketler", "orkideler", "kutular", "celenkler"]} />

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

      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">Nilüfer mahalleleri</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {neighborhoods.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="underline-offset-4 hover:underline">
              {item.shortName}
            </Link>
          </li>
        ))}
      </ul>

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

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title={area.name}
        description={area.description}
        path={area.path}
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Bursa Teslimatı", path: "/bursa" },
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
      <h1 className="mt-4 text-4xl tracking-tight text-stone-900">{area.name}</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        {area.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
      <CategoryLinks slugs={area.relatedCategorySlugs} />
      {children.length > 0 ? (
        <>
          <h2 className="mt-10 text-xl tracking-tight text-stone-900">Bağlı bölgeler</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {children.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="underline-offset-4 hover:underline">
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
