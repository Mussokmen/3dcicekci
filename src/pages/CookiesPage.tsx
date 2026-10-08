import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Seo
        title="Çerez Politikası"
        description="Vitrin, tarayıcının temel işleyişiyle açılır. Pazarlama çerezi, sepet çerezi veya izleme kaydı tutulmaz."
        path="/cerez-politikasi"
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Çerez Politikası</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          Bu site, vitrini göstermek için tarayıcının temel işleyişine dayanır. Sayfa açılışı için zorunlu
          olan teknik kayıt dışında pazarlama çerezi tutulmaz.
        </p>
        <p>
          Sepet çerezi yoktur; sipariş sitede bir sepete yazılmaz. Sipariş WhatsApp ile, kısa bir mesajla
          alınır. İzleme veya reklam profili oluşturulmaz.
        </p>
        <p>
          Çerez tercihleri tarayıcının kendi ayarlarından yönetilir. Ayarın değişmesi, vitrinin
          görüntülenmesini etkileyebilir; sipariş hattı ayrıca çalışır.
        </p>
        <p>
          Sipariş mesajındaki ad ve telefon bu çerez politikasının konusu değildir. O bilgiler hazırlık ve
          teslim için kullanılır; ayrıntı{" "}
          <Link to="/gizlilik-politikasi" className="underline-offset-4 hover:underline">
            gizlilik politikasında
          </Link>{" "}
          yer alır.
        </p>
      </div>
    </main>
  );
}
