export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Siparişi nasıl veririm?",
    answer:
      "Vitrinden ürünü seçip WhatsApp’tan yazın. Üyelik veya sepet yoktur. Mahalle, saat ve kart notu yeterlidir.",
  },
  {
    question: "Bursa’nın her yerine gidiyor musunuz?",
    answer:
      "Bursa ili içinde teslim planlarız. Osmangazi, Nilüfer, Yıldırım, Mudanya, Gemlik, İnegöl, Görükle, Gürsu, Kestel, Yenişehir, İznik, Karacabey, Mustafakemalpaşa ve Orhangazi sayfalarında notlar vardır. O anki güzergâh ve saate göre net cevabı mesajda veririz.",
  },
  {
    question: "Aynı gün teslim var mı?",
    answer:
      "Evet. Bursa ili içinde aynı gün teslim ederiz. Mahalle ve istenen saati WhatsApp’ta yazın; 7/24 açığız. Saat aralığı ve teslimat ücreti WhatsApp’ta kesinleşir.",
  },
  {
    question: "7/24 açık mısınız?",
    answer:
      "Evet. WhatsApp sipariş hattı 7/24 açıktır. Aynı gün teslim için mahalle, alıcı ve kart notunu mesaja eklemeniz yeter. Saat aralığı ve teslimat ücreti WhatsApp’ta kesinleşir.",
  },
  {
    question: "Fiyat ve stok sitede neden yok?",
    answer:
      "Günlük çiçek ve hazırlık değişir. Uydurma etiket koymuyoruz. Beğendiğiniz ürünü yazın, o günkü durumu konuşalım.",
  },
  {
    question: "Özel tasarım yaptırabilir miyim?",
    answer:
      "Evet. Ölçü, renk ve duracağı yeri WhatsApp’tan yazın; vitrindeki bir ürünü referans gösterebilirsiniz. Katalog dışı düzenleri atölyede kurarız. Fiyat sitede yazmaz.",
  },
  {
    question: "Çelenk metnini nasıl ileteyim?",
    answer:
      "Kurdele yazısını WhatsApp’ta karakter karakter gönderin. İsim ve unvan teslimden sonra düzeltilmez.",
  },
  {
    question: "Kişisel bilgilerim ne olur?",
    answer:
      "Sipariş ve teslim için gerekli iletişim bilgisi kullanılır. Ayrıntı gizlilik politikası sayfasındadır. İletişim formu yoktur.",
  },
];

export function faqJsonLd(items: FaqItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
