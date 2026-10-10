import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Seo
        title="Gizlilik Politikası"
        description={`${site.name} siparişi WhatsApp ile alır. Sitede kart bilgisi toplanmaz. İletişim: ${site.phoneDisplay}.`}
        path="/gizlilik-politikasi"
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Gizlilik Politikası</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          {site.name} sitesi bir vitrindir. Siparişler kısa bir WhatsApp mesajıyla gelir. Sitede kart bilgisi
          toplanmaz; üyelik, sepet veya ödeme formu açılmaz.
        </p>
        <p>
          WhatsApp mesajındaki ad, telefon, mahalle ve kart notu yalnızca aranjmanı hazırlamak ve teslim
          etmek için kullanılır. Bu bilgiler tarayıcıda hesap olarak saklanmaz.
        </p>
        <p>
          Teslim öncesi alıcı, siparişin yola çıktığını bilsin diye bilgilendirilir. Bunun için mesajda
          yazılan telefon yeterlidir. Başka bir amaçla liste oluşturulmaz.
        </p>
        <p>
          Sitede pazarlama formu kullanılmaz. Çerezlerin işleyişi çerez politikasında ayrı anlatılır. Sipariş
          kanalı WhatsApp’tır; hat {site.phoneDisplay} numarasıdır.
        </p>
        <p>
          İletişim: {site.name}, telefon{" "}
          <a href={`tel:${site.phoneTel}`} className="underline-offset-4 hover:underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
