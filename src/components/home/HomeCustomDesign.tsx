import { Link } from "react-router-dom";
import { buildWhatsAppUrl } from "@/config/site";

const customWhatsAppHref = buildWhatsAppUrl(
  "Merhaba, özel tasarım çiçek aranjmanı yaptırmak istiyorum.",
);

const steps = [
  {
    title: "Niyet",
    text: "Doğum günü, masa, kapı önü veya ofis gibi duracağı yeri yazın. Fotoğraf zorunlu değil; vitrindeki bir ürünü referans gösterebilirsiniz.",
  },
  {
    title: "Ölçü ve renk",
    text: "İstediğiniz ölçek, renk ve varsa kart notunu mesaja ekleyin. Mevsim çiçeğine göre küçük fark olabilir; bunu gizlemeyiz.",
  },
  {
    title: "Bursa teslimi",
    text: "Mahalle ve saati konuşuruz. Stok, fiyat veya teslim dakikası uydurmayız; o günkü hazırlığa göre netleştiririz.",
  },
] as const;

export function HomeCustomDesign() {
  return (
    <section className="border-t border-stone-200/80 bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-[11px] tracking-[0.2em] text-stone-500 uppercase">Atölye</p>
        <h2 className="mt-3 text-3xl tracking-tight text-stone-900 md:text-4xl">Özel tasarımlar</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          Vitrindeki hazır ürünlerin yanında, ölçü ve renge göre özel buket, kutu, orkide ve çelenk de
          kuruyoruz. Katalogda olmayan bir düzen için WhatsApp yeter; sahte stok veya fiyat yazmayız.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.title} className="border-t border-stone-300 pt-4">
              <h3 className="text-lg text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={customWhatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white hover:bg-stone-800"
          >
            Özel tasarım yaz
          </a>
          <Link to="/ozel-tasarim" className="text-sm text-stone-700 underline-offset-4 hover:underline">
            Nasıl işler?
          </Link>
        </div>
      </div>
    </section>
  );
}
