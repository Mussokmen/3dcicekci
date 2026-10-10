export type GuideArticle = {
  slug: string;
  name: string;
  path: string;
  description: string;
  body: string[];
};

export const guides: GuideArticle[] = [
  {
    slug: "bursa-cicek-gonderimi",
    name: "Bursa çiçek gönderimi nasıl işler?",
    path: "/rehber/bursa-cicek-gonderimi",
    description: "Bursa içinde çiçek tesliminin WhatsApp, mahalle ve saatle nasıl planlandığı.",
    body: [
      "Vitrinden bir ürün seçip WhatsApp’tan yazarsınız. Mahalle, alıcı adı ve kart notu mesajda yer alır. On yedi ilçenin her birinde mahalle adı ayrıca yazılır. Görükle, Nilüfer mahallesidir.",
      "Kurye güzergâhı o günkü siparişlere göre kurulur. Bursa içinde aynı gün teslim ederiz. Mahalle, alıcı ve kart notu mesajda yer alır. Teslim öncesi alıcı bilgilendirilir.",
      "Çiçek atölyede taze hazırlanır ve teslim öncesi alıcı bilgilendirilir.",
    ],
  },
  {
    slug: "whatsapp-siparis",
    name: "WhatsApp’tan çiçek siparişi",
    path: "/rehber/whatsapp-siparis",
    description: "Bursa’nın Çiçekçisi’nde WhatsApp siparişinde hangi bilgilerin gerektiği.",
    body: [
      "Mesaja ürün adını, teslim mahallesini ve kart notunu ekleyin. Fotoğrafı vitrindekiyle karşılaştırmak için ürün görselini referans alın.",
      "Ürün adı, mahalle ve kart notu mesajda yeter. Form veya hesap açılmaz. Kişisel veri yalnızca hazırlık ve teslim için kullanılır; ayrıntı gizlilik politikasındadır.",
    ],
  },
  {
    slug: "orkide-teslim",
    name: "Orkide tesliminde nelere dikkat edilir?",
    path: "/rehber/orkide-teslim",
    description: "Saksılı orkidenin Bursa tesliminde saksı, dal ve bekletme notları.",
    body: [
      "Fotoğrafta kaç dal göründüğüne bakın. Tek salkım ile dolu saksı aynı şey değildir. Saksıyı devirmemek için aracı dik tutarız; alıcının kapıda olması beklemeyi kısaltır.",
      "Kısa bir ışık notu yeterlidir. Ofis tesliminde kat mesajda yazılır. Saksı atölyede, fotoğraftaki düzene göre hazırlanır ve dik taşınır.",
      "Teslim öncesi alıcı bilgilendirilir. Orkide taze ve özenli hazırlanır; Bursa içinde aynı gün teslim planlanır.",
    ],
  },
  {
    slug: "celenk-siparisi",
    name: "Çelenk siparişi",
    path: "/rehber/celenk-siparisi",
    description: "Bursa çelenk siparişinde ölçü, renk ve kurdele metni.",
    body: [
      "Metni karakter karakter kontrol edin. İsim ve unvan teslimden sonra düzelmez. Kapı önü ile salon çelengi ölçek olarak ayrıdır.",
      "Anma saatine yetişmesi için erken yazın. Vitrindeki çelenk fotoğrafları ölçü hakkında fikir verir; net santimi mesajda konuşuruz.",
    ],
  },
  {
    slug: "ayni-gun-teslim",
    name: "Aynı gün teslim",
    path: "/rehber/ayni-gun-teslim",
    description: "Bursa’da aynı gün çiçek teslimi. Hat 7/24 açıktır.",
    body: [
      "Bursa ili içinde aynı gün teslim ederiz. İlçe ve mahalle mesajda yazılır. Çiçek taze hazırlanır, teslim öncesi alıcı bilgilendirilir.",
      "Gece veya gündüz düşen mesajlar aynı hattadır. Çiçek atölyede taze hazırlanır. Teslim öncesi alıcı bilgilendirilir; kapıda bekleme kısalır.",
      "Çelenk ve özel tasarımda ölçü ile metni baştan yazın. Hastane, site ve iş yeri adreslerinde alıcının telefonu işe yarar.",
      "Karacabey, Mustafakemalpaşa, Yenişehir, İznik gibi uzun güzergâhlarda da aynı gün teslim planlarız. Adresi mahalle ve sokakla birlikte yazın.",
    ],
  },
  {
    slug: "kart-notu",
    name: "Kart notu nasıl yazılır?",
    path: "/rehber/kart-notu",
    description: "Çiçek kartında kısa, okunaklı not için pratik çerçeve.",
    body: [
      "İki üç cümle yeter. Alıcının adı ve gönderenin adı karışmasın diye “kime / kimden” diye yazın. El yazısı okunaklı olsun diye notu mesajda basılı metin olarak isteriz.",
      "Çelenk kurdelesi karttan ayrıdır; orada da metni ayrıca belirtin.",
    ],
  },
  {
    slug: "buket-secimi",
    name: "Buket seçerken",
    path: "/rehber/buket-secimi",
    description: "Gül, zambak ve kır buketi arasında Bursa teslimi için sade bir seçim rehberi.",
    body: [
      "Kırmızı gül klasik kutlama dilidir. Zambak kokuludur; kapalı ofiste rahatsız edebilir. Kır buketi rengi dağıtır, teşekkür ve doğum gününde sakin durur.",
      "Fotoğraftaki sap ve ambalaj teslimde referanstır. Görseller kendi atölye çekimlerimizdir. Kart notu ilettiğiniz cümleyle yazılır.",
    ],
  },
  {
    slug: "site-guvenlikli-teslim",
    name: "Site ve güvenlikli teslim",
    path: "/rehber/site-guvenlikli-teslim",
    description: "Bursa’da site, güvenlik ve işyeri girişinde çiçek tesliminin nasıl konuşulduğu.",
    body: [
      "Nilüfer’de Ataevler ve benzeri sitelerde blok, daire ve alıcının telefonu mesajda yazılır. Görevli alıcının adını sorduğunda mesajdaki isimle aynı ad geçmelidir.",
      "İş yeri ve hastanede kat ile birim yazılır. Alıcıya önceden haber verilir. Kampüs içi teslim Görükle’de çoğu zaman kapıda biter.",
      "Çelenk gibi büyük düzenler asansör ve kapı genişliği ister. Ölçüyü baştan yazın. Form veya üyelik açılmaz; blok ve alıcıyı yazışmada iletmeniz yeter.",
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((item) => item.slug === slug);
}
