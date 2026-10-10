import { faqs, type FaqItem } from "@/config/faqs";
import { occasions } from "@/config/occasions";
import { getProductsByCategory, type Product } from "@/config/products";

export const productTrustChips = [
  "7/24 açık",
  "Bursa içinde aynı gün teslim",
  "Sipariş WhatsApp’tan",
] as const;

export const productOrderSteps = [
  "Bu ürünü seçtiniz; sepet veya üyelik açılmaz.",
  "Mahalle, istenen saat ve varsa kart notunu yazın.",
  "Teslimi WhatsApp’ta netleştiririz.",
] as const;

export const productDeliveryLinks = [
  { label: "Bursa teslimatı", path: "/bursa" },
  { label: "WhatsApp siparişi", path: "/rehber/whatsapp-siparis" },
  { label: "Gönderim nasıl işler", path: "/rehber/bursa-cicek-gonderimi" },
] as const;

type CategoryNote = {
  text: string;
  href?: string;
  linkLabel?: string;
};

const categoryNotes: Record<string, CategoryNote[]> = {
  buketler: [
    { text: "Kart notunu kısa tutun; teslimde okunması kolay olur." },
    { text: "Suya koyunca sapı taze kalır; vazoyu teslimde hazır bulundurmak yeter." },
    { text: "Saplı düzen yolda kutu kadar durağan değildir; mahalle ve saati yazın." },
  ],
  orkideler: [
    { text: "Dal sayısı fotoğraftakiyle aynı dilden teslim edilir." },
    { text: "Saksıyı bekletmemek için alıcının kapıda olması iyidir." },
    {
      text: "Kısa ışık notu yeter; bakım vaadi vermeyiz.",
      href: "/rehber/orkide-teslim",
      linkLabel: "Orkide teslimi",
    },
  ],
  kutular: [
    { text: "Kutu düzeni yolda saplı bukete göre daha durağandır." },
    { text: "İç düzen fotoğraftakiyle aynı dilden hazırlanır; stok yoksa alternatif konuşuruz." },
    { text: "Hediye tesliminde mahalle tarifini mesaja ekleyin." },
  ],
  celenkler: [
    { text: "Kurdele yazısını WhatsApp’ta karakter karakter gönderin." },
    { text: "İsim ve unvan teslimden sonra düzeltilmez." },
    { text: "Kapı önü veya salon için ölçü baştan net olsun." },
  ],
};

const defaultNotes: CategoryNote[] = [
  { text: "Bursa ili içinde teslim için mahalle ve saati yazın." },
];

const productFaqQuestions = [
  "Siparişi nasıl veririm?",
  "Aynı gün teslim var mı?",
  "7/24 açık mısınız?",
  "Hazırlık nasıl ilerler?",
] as const;

export function getProductCategoryNotes(category: string) {
  return categoryNotes[category] ?? defaultNotes;
}

export function getProductOccasionLinks(category: string) {
  return occasions.filter((item) => item.categorySlugs.includes(category)).slice(0, 2);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return getProductsByCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, limit);
}

export function getProductFaqs(category: string): FaqItem[] {
  const items = faqs.filter((item) =>
    (productFaqQuestions as readonly string[]).includes(item.question),
  );

  if (category === "celenkler") {
    const ribbon = faqs.find((item) => item.question === "Çelenk metnini nasıl ileteyim?");
    if (ribbon) items.push(ribbon);
  }

  return items;
}

export function customDesignWhatsAppMessage(productName: string) {
  return `Merhaba, ${productName} ürününü referans alarak özel ölçü / renk yaptırmak istiyorum.`;
}
