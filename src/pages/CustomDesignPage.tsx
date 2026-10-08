import { Link } from "react-router-dom";
import { CategoryLinks, WhatsAppCta } from "@/components/content/ContentBits";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { Seo } from "@/components/Seo";
import { getFeaturedProducts } from "@/config/products";
import { buildWhatsAppUrl } from "@/config/site";

const customWhatsAppHref = buildWhatsAppUrl(
  "Merhaba, özel tasarım çiçek aranjmanı yaptırmak istiyorum.",
);

export function CustomDesignPage() {
  const examples = getFeaturedProducts().slice(0, 4);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Seo
        title="Özel Tasarım Çiçek"
        description="Bursa’da ölçü ve renge göre özel buket, kutu, orkide ve çelenk. WhatsApp’tan tarifleyin; teslim ili içinde."
        path="/ozel-tasarim"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Özel Tasarım", path: "/ozel-tasarim" },
        ]}
      />
      <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Atölye</p>
      <h1 className="mt-2 text-3xl tracking-tight text-stone-900 md:text-4xl">Özel tasarımlar</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          Hazır vitrin her duruma yetmeyebilir: farklı bir ölçü, belirli bir renk, masa yerine kapı, veya
          vitrindeki iki ürünün karışımı. Bursa’nın Çiçekçisi olarak bunları atölyede, tarifinize göre
          kuruyoruz. Konuştuğumuz düzeni atölyede, taze çiçekle hazırlarız.
        </p>
        <p>
          Referans olarak vitrindeki bir fotoğrafı gönderebilir veya “daha alçak, daha açık pembe, kartlı”
          gibi net bir cümle yazabilirsiniz. Mevsim nedeniyle çiçek cinsi değişebilir; bunu baştan söyleriz.
          Düzen, kendi atölye çekimlerimizdeki ölçeği esas alır. Sipariş WhatsApp ile alınır.
        </p>
        <p>
          Teslim Bursa ili içindedir. Mahalle, alıcı ve kart notu aynı WhatsApp mesajında yer alır.
          Teslim öncesi alıcı bilgilendirilir. Çiçek yola yakın, taze tamamlanır.
        </p>
        <p>
          Büyük çelenk ve yoğun günlerde hazırlık erken başlar. Ölçü, renk ve kurdele metni mesajda
          baştan yazılır. Fotoğraflar kendi atölye çekimlerimizdir; yeni düzen bu görsellerin ölçeğinden
          yürür.
        </p>
        <p>
          Sipariş kısa ve kişiseldir. Atölye Bursa’dadır. Teslim aynı gün, zamanında ve dikkatli yapılır.
        </p>
      </div>
      <CategoryLinks slugs={["buketler", "orkideler", "kutular", "celenkler"]} />
      {examples.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-xl tracking-tight text-stone-900">Vitrinden dil</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
            Özel iş, bu çekimlerin ölçeği ve duruşundan yola çıkar. Aşağıdakiler hazır ürünlerdir; kopya
            değil, konuşma zemini.
          </p>
          <div className="mt-6">
            <ProductGrid products={examples} />
          </div>
        </section>
      ) : null}
      <p className="mt-10">
        <WhatsAppCta href={customWhatsAppHref} label="WhatsApp’tan özel tasarım yaz" />
      </p>
      <p className="mt-6 text-sm">
        <Link to="/magaza" className="underline-offset-4 hover:underline">
          Mağaza
        </Link>
        {" · "}
        <Link to="/bursa" className="underline-offset-4 hover:underline">
          Bursa teslimatı
        </Link>
      </p>
    </main>
  );
}
