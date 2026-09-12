import { Link } from "react-router-dom";
import { TrustHighlights } from "@/components/content/TrustHighlights";
import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="Hakkımızda"
        description="Bursa'nın Çiçekçisi: atölyede hazırlanan buket, orkide ve hediye aranjmanları. Teslim Bursa ili."
        path="/hakkimizda"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Hakkımızda</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          {site.name}, Bursa’da taze çiçek ve sade aranjmanlarla çalışan bir vitrindir. Ürün fotoğrafları
          kendi çekimlerimizdir. Siparişi WhatsApp üzerinden netleştiririz; sepet veya üyelik yoktur.
        </p>
        <p>
          Atölyede gül, zambak, orkide ve kutu düzenlerini fotoğraftaki haliyle hazırlarız. Teslim planını
          mahalle ve saatle birlikte konuşuruz. Çiçeği yola yakın kurarız; yazın bekletmeyiz.
        </p>
        <p>
          Hizmet bölgemiz Bursa ili genelidir. Osmangazi, Nilüfer, Yıldırım, Mudanya, Gemlik, İnegöl,
          Görükle, Gürsu, Kestel, Yenişehir, İznik, Karacabey, Mustafakemalpaşa ve Orhangazi başta olmak
          üzere ulaştırabildiğimiz her adresi mesajda söyleriz. Cadde kapı numarası netleşince iletişim
          sayfasına yazılacaktır; sahte adres yayınlamıyoruz.
        </p>
        <p>
          Çekimleri atölyede, gün ışığında alırız. Fotoğraftaki sap, saksı ve ambalaj teslimde referanstır;
          mevsim farkını gizlemeyiz. Kim hazırlıyor sorusunun cevabı abartısızdır: aranjmanı burada kurar,
          yola yakın tamamlarız. Ölçü ve renge göre özel tasarım da kurarız; tarifi WhatsApp’tan alırız.
        </p>
        <p>Stok, puan ve indirim etiketi uydurmayız. Güncel durumu yazışarak paylaşırız.</p>
      </div>
      <TrustHighlights compact />
      <p className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link to="/iletisim" className="underline-offset-4 hover:underline">
          İletişim
        </Link>
        <Link to="/bursa" className="underline-offset-4 hover:underline">
          Bursa teslimatı
        </Link>
        <Link to="/ozel-tasarim" className="underline-offset-4 hover:underline">
          Özel tasarım
        </Link>
        <Link to="/rehber" className="underline-offset-4 hover:underline">
          Rehber
        </Link>
      </p>
    </main>
  );
}
