import { Link } from "react-router-dom";
import { TrustHighlights } from "@/components/content/TrustHighlights";
import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <Seo
        title="Hakkımızda"
        description="Bursa'nın Çiçekçisi, Bursa'da taze çiçek hazırlayan yerel bir atölyedir. Fotoğraflar kendi çekimlerimizdir."
        path="/hakkimizda"
        breadcrumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />
      <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Kurumsal</p>
      <h1 className="mt-2 text-4xl tracking-tight text-stone-900">Hakkımızda</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          {site.name}, Bursa’da taze çiçek hazırlayan yerel bir atölyedir. Buket, orkide, kutu ve çelenk
          burada kurulur. Ürün fotoğrafları kendi çekimlerimizdir; vitrindeki düzen teslimde esas alınır.
        </p>
        <p>
          Mahalle, alıcı adı ve kart notu mesajda yer alır. Hazırlık öncesi bu bilgiler netleşir. Teslim
          öncesi alıcı bilgilendirilir.
        </p>
        <p>
          Çiçek yola yakın tamamlanır. Yazın aranjman bekletilmez; kışın ambalaj kapıya kadar korunur.
          Aynı gün teslim Bursa ili içindedir. Ekip yereldir; teslim zamanında ve dikkatli yapılır.
        </p>
        <p>
          Hizmet bölgesi on yedi ilçeyi kapsar. Görükle bir ilçe değil, Nilüfer mahallesidir. Nilüfer’de
          site bloğu, Osmangazi’de işyeri girişi, Yıldırım’da sokak tarifi ayrı yazılır.
        </p>
        <p>
          Özel ölçüde veya renkte bir düzen istenirse tarif WhatsApp’tan alınır ve atölyede kurulur.
          Referans, vitrindeki bir fotoğraf olabilir. Kart notu, ilettiğiniz cümleyle yazılır.
        </p>
        <p>
          İletişim {site.phoneDisplay} numaralı hat ve WhatsApp üzerindedir. Hat 7/24 açıktır. Kişisel
          bilgi yalnızca hazırlık ve teslim için kullanılır.
        </p>
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
