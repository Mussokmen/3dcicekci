export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Siparişi nasıl veririm?",
    answer:
      "Vitrinden ürünü seçip WhatsApp’tan yazın. Mahalle, alıcı adı ve kart notu mesajda yer alır. Sipariş kısa ve kişisel ilerler; teslim öncesi alıcı bilgilendirilir.",
  },
  {
    question: "Bursa’nın her yerine gidiyor musunuz?",
    answer:
      "Teslim Bursa ili içindedir. On yedi ilçe menüdedir. Görükle bir ilçe değil, Nilüfer mahallesidir.",
  },
  {
    question: "Aynı gün teslim var mı?",
    answer:
      "Evet. Bursa ili içinde aynı gün teslim ederiz. Çiçek atölyede taze hazırlanır, zamanında ve dikkatli ulaştırılır. Teslim öncesi alıcı bilgilendirilir.",
  },
  {
    question: "7/24 açık mısınız?",
    answer:
      "Evet. WhatsApp sipariş hattı 7/24 açıktır. Mahalle, alıcı ve kart notu mesaja eklendiğinde hazırlık başlar.",
  },
  {
    question: "Hazırlık nasıl ilerler?",
    answer:
      "Aranjman kendi atölyemizde, çektiğimiz fotoğraftaki düzene göre hazırlanır. Sipariş öncesi mahalle ve kart notu netleşir. Teslim öncesi alıcı bilgilendirilir.",
  },
  {
    question: "Özel tasarım yaptırabilir miyim?",
    answer:
      "Evet. Ölçü, renk ve duracağı yeri WhatsApp’tan yazın. Vitrindeki bir ürünü referans gösterebilirsiniz. Düzen atölyede, taze çiçekle kurulur.",
  },
  {
    question: "Çelenk metnini nasıl ileteyim?",
    answer:
      "Kurdele yazısını WhatsApp mesajında aynen gönderin. İsim ve unvan teslimden önce okunur, metin o yazıyla işlenir.",
  },
  {
    question: "Kişisel bilgilerim ne olur?",
    answer:
      "Sipariş ve teslim için gerekli iletişim bilgisi kullanılır. Ayrıntı gizlilik politikasında anlatılır. İletişim formu kullanılmaz.",
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
