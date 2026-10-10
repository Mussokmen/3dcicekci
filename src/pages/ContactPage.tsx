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
        description="Bursa çiçek siparişi ve teslimi için 7/24 açık hat. Hizmet bölgesi Bursa ili. Teslim aynı gün planlanır."
        path="/iletisim"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
        jsonLd={faqJsonLd()}
      />
      <h1 className="text-3xl tracking-tight text-stone-900 md:text-4xl">İletişim</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          Sipariş ve teslim için WhatsApp’tan yazın veya telefon edin. Hat 7/24 açıktır. Mesajda ürün,
          mahalle, alıcı adı ve kart notu yer alır. Kısa bir yazışma, hazırlığı başlatır.
        </p>
        <p>
          Teslim Bursa ili içindedir ve aynı gün planlanır. Çiçek atölyede taze hazırlanır; teslim öncesi
          alıcı bilgilendirilir. İletişim formu kullanılmaz. Kişisel verinin kullanımı{" "}
          <Link to="/gizlilik-politikasi" className="underline-offset-4 hover:underline">
            gizlilik politikasında
          </Link>{" "}
          anlatılır.
        </p>
      </div>
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
        {site.streetAddress ? <li>Açık adres: {site.streetAddress}</li> : null}
        {hasCanonicalDomain() ? <li>Site adresi: {site.url}</li> : null}
      </ul>
      <h2 className="mt-12 text-2xl tracking-tight text-stone-900">Sipariş nasıl başlar</h2>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        Vitrinden bir ürün seçin, WhatsApp’tan yazın. Fotoğraf kendi atölye çekimimizdir. Mahalle ve kart
        notu mesajda netleşince hazırlık başlar. Teslim aynı gün, zamanında ve dikkatli yapılır.
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
      ) : null}
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
