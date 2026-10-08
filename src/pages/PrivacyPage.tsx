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
          {site.name} sitesi bir vitrindir. Sipariş WhatsApp ile alınır. Sitede kart bilgisi toplanmaz;
          üyelik, sepet veya ödeme formu yoktur.
        </p>
        <p>
          WhatsApp’ta yazdığınız ad, telefon ve teslim bilgisi yalnızca siparişi hazırlamak için kullanılır.
          Tarayıcıda hesap veya kart verisi saklanmaz.
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
