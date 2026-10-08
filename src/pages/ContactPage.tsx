import { Link } from "react-router-dom";
import { FaqList } from "@/components/content/ContentBits";
import { WhatsAppSupportCard } from "@/components/content/WhatsAppSupportCard";
import { Seo } from "@/components/Seo";
import { faqJsonLd } from "@/config/faqs";
import {
  buildWhatsAppUrl,
  generalWhatsAppMessage,
  hasCanonicalDomain,
  hasGoogleBusiness,
  hasPublicPhone,
  site,
} from "@/config/site";

export function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="İletişim"
        description="Bursa çiçek siparişi WhatsApp ile alınır. 7/24 açığız. Hizmet bölgesi Bursa ili. Teslim aynı gün planlanır."
        path="/iletisim"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
        jsonLd={faqJsonLd()}
      />
      <h1 className="text-3xl tracking-tight text-stone-900 md:text-4xl">İletişim</h1>
      <p className="mt-6 text-base leading-relaxed text-stone-600">
        Sipariş ve teslim sorularınızı WhatsApp’tan iletebilirsiniz. İletişim formu yoktur; kişisel veriyi
        sipariş için gerekli olduğu kadar kullanırız. Ayrıntı{" "}
        <Link to="/gizlilik-politikasi" className="underline-offset-4 hover:underline">
          gizlilik politikasında
        </Link>
        .
      </p>
      <WhatsAppSupportCard className="mt-8" />
      <ul className="mt-8 space-y-3 text-sm text-stone-700">
        <li>
          WhatsApp:{" "}
          {hasPublicPhone() ? (
            <a
              href={buildWhatsAppUrl(generalWhatsAppMessage())}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {site.phoneDisplay}
            </a>
          ) : (
            "sipariş hattı"
          )}
        </li>
        <li>
          Telefon:{" "}
          <a href={`tel:${site.phoneTel}`} className="underline-offset-4 hover:underline">
            {site.phoneDisplay}
          </a>
        </li>
        <li>Hizmet bölgesi: {site.areaServed}</li>
        <li>Çalışma: {site.hoursDisplay}</li>
        <li>
          Açık adres: {site.streetAddress ? site.streetAddress : "iletişim WhatsApp ve telefon üzerinden"}
        </li>
        <li>Site adresi: {hasCanonicalDomain() ? site.url : "kanonik domain bağlanınca güncellenir"}</li>
      </ul>
      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">Google’da görünürlük</h2>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        “Bursa çiçekçi” aramalarının büyük kısmı Haritalar’da çözülür. Google İşletme profilinde hizmet
        bölgesi Bursa ili olarak işaretlenir. Search Console ve ölçüm, gerçek domain
        bağlanınca yayınlanır.
      </p>
      {hasGoogleBusiness() ? (
        <p className="mt-4 text-sm">
          <a
            href={site.googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Google İşletme profili
          </a>
        </p>
      ) : (
        <p className="mt-4 text-sm text-stone-500">
          Google İşletme profili bağlandığında bu sayfadan ulaşılır. Sipariş WhatsApp ile alınır.
        </p>
      )}
      <p className="mt-4 text-sm">
        <Link to="/bursa" className="underline-offset-4 hover:underline">
          Bursa teslimat bölgeleri
        </Link>
      </p>
      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">Sık sorulanlar</h2>
      <FaqList />
    </main>
  );
}
