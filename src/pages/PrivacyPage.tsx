import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Seo
        title="Gizlilik Politikası"
        description={`${site.name} gizlilik politikası.`}
        path="/gizlilik-politikasi"
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Gizlilik Politikası</h1>
      <p className="mt-6 text-base leading-relaxed text-stone-600">
        Bu site statik bir vitrindir. Üyelik, sepet veya ödeme formu bulunmaz. WhatsApp üzerinden
        yazdığınızda paylaştığınız ad, telefon ve teslim bilgileri yalnızca siparişin hazırlanması için
        kullanılır.
      </p>
      <p className="mt-4 text-base leading-relaxed text-stone-600">
        Tarayıcınızda alışveriş sepeti veya hesap bilgisi saklanmaz. İletişim kanallarımız değişirse bu
        metin güncellenir.
      </p>
    </main>
  );
}
