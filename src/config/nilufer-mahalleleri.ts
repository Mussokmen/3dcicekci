/**
 * Nilüfer mahalleleri. Her kayıt konumu, teslimi ve uygun ürünü anlatır.
 */
export type NiluferNeighborhoodDraft = {
  slug: string;
  shortName: string;
  description: string;
  relatedCategorySlugs: string[];
  nearbySlugs: string[];
  precise: boolean;
  body: string[];
};

/** Ayrıntısı sakin tutulan mahalleler: konum ve kapı yeter. */
export const generalNiluferSlugs = [
  "baris",
  "cumhuriyet",
  "fethiye",
  "esentepe",
  "konak",
  "kultur",
  "karaman",
  "ucevler",
  "altinsehir",
  "23-nisan",
  "29-ekim",
  "19-mayis",
  "yuzuncuyil",
  "ahmet-yesevi",
  "demirci",
  "isiktepe",
  "atlas",
  "gumustepe",
  "gungoren",
  "dogankoy",
  "gokce",
  "karacaoba",
] as const;

export const niluferNeighborhoodDrafts: NiluferNeighborhoodDraft[] = [
  {
    slug: "baris",
    shortName: "Barış",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cumhuriyet", "esentepe", "konak", "kultur"],
    description:
      "Barış’a çiçek gönderimi. Barış, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Barış, Nilüfer’in merkez mahallelerindendir. Gazi Osman Paşa Caddesi’nde Dostluk Parkı bulunur. Perşembe günleri Aslanbey Sokak’ta semt pazarı kurulur.",
      "Barış’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Barış için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Barış siparişinin kartında sizin sözünüzle durur. Aslanbey Sokak ve Gazi Osman Paşa Caddesi adreslerinde sokak adı ayrıca yazılır.",
      "Doğum günü ve yıl dönümünde Barış evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Karttaki cümleyi ve Barış adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "cumhuriyet",
    shortName: "Cumhuriyet",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["baris", "19-mayis", "esentepe", "karaman"],
    description:
      "Cumhuriyet’e çiçek gönderimi. Cumhuriyet, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Cumhuriyet, Nilüfer’in merkez mahallelerindendir. Mavi Sokak’taki kapalı pazarda çarşamba günü giyim, cuma günü semt pazarı kurulur. Nilüfer Hatun Caddesi’nde Podyumpark, Gazi Caddesi’nde Tekelioğlu Parkı vardır.",
      "Çiçek, Cumhuriyet adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Cumhuriyet çiçeği, ambalajı bozulmadan teslim edilir. Cumhuriyet’e gidecek kartın metnini siz belirlersiniz. Mavi Sokak adresinde kapalı pazarın hangi günü olduğu siparişte belirtilir.",
      "Cumhuriyet evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Cumhuriyet adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  {
    slug: "fethiye",
    shortName: "Fethiye",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ertugrul", "ozluce", "kultur", "konak"],
    description:
      "Fethiye’ye çiçek gönderimi. Fethiye, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Fethiye, Nilüfer’in merkez mahallelerindendir. Ulu Caddesi’nde NİLSEM meslek edindirme birimi, Hüseyin Ormanlı Caddesi’nde Fethiye Sosyal Yaşam Alanı ve pazarın üst katındaki Kadın ve Çocuk Akademisi bulunur. Huzur Caddesi’ndeki Şükrü Nail Gündoğdu Parkı mahallenin açık alanıdır. Perşembe günleri Fatih Sokak’ta kapalı semt pazarı kurulur.",
      "Fethiye için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Fethiye için atölyede taze tutulur ve özenli ambalajlanır. Fethiye kartındaki cümle size aittir. Ulu Caddesi, Hüseyin Ormanlı Caddesi ya da Fatih Sokak geçiyorsa sokak adı açık yazılır.",
      "Doğum gününde Fethiye evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan Fethiye adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "esentepe",
    shortName: "Esentepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cumhuriyet", "konak", "altinsehir", "karaman"],
    description:
      "Esentepe’ye çiçek gönderimi. Esentepe, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Esentepe, Nilüfer’in merkez mahallelerindendir. Salı günleri İskan Sokak’ta, muhtarlığın yanında semt pazarı kurulur. Tuna Caddesi’nde Eğridere Parkı bulunur.",
      "Esentepe’ye çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Esentepe için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Esentepe siparişinin kartında sizin sözünüzle durur. İskan Sokak ve Tuna Caddesi adreslerinde sokak adı ayrıca istenir.",
      "Doğum günü ve yıl dönümünde Esentepe evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Karttaki cümleyi ve Esentepe adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "konak",
    shortName: "Konak",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ihsaniye", "kultur", "baris", "esentepe"],
    description:
      "Konak’a çiçek gönderimi. Konak, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Konak, Nilüfer’in merkez mahallelerindendir. Seçkin Sokak’taki kapalı pazarda çarşamba günü üretici pazarı, perşembe günü giyim pazarı, pazar günü semt pazarı kurulur. Hayrettin Karaca Parkı da bu mahallededir.",
      "Konak için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Konak için atölyede taze tutulur ve özenli ambalajlanır. Konak kartındaki cümle size aittir. Seçkin Sokak adresinde pazarın hangi günü kurulduğu birlikte yazılır.",
      "Konak evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan Konak adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "kultur",
    shortName: "Kültür",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ihsaniye", "balat", "fethiye", "konak"],
    description:
      "Kültür’e çiçek gönderimi. Kültür, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Kültür, Nilüfer’in merkez mahallelerindendir. Perşembe günleri Bolu Sokak’taki kapalı alanda semt pazarı kurulur. Kestanelik Parkı mahallenin bilinen yeşil alanıdır.",
      "Kültür’e çiçek ev, iş yeri veya hastane adresine hazırlanır. Kültür siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Kültür siparişinde siz yazarsınız. Bolu Sokak çevresindeki apartmanlarda blok ve daire istenir.",
      "Doğum günü ve yıl dönümünde Kültür evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını Kültür diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "karaman",
    shortName: "Karaman",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["altinsehir", "23-nisan", "esentepe", "cumhuriyet"],
    description:
      "Karaman’a çiçek gönderimi. Karaman, Nilüfer’in merkez mahallelerindendir ve Bursa-Mudanya yolunun batısında, eski bir vakıf köyünün yerinde 1987’de kurulmuştur.",
    body: [
      "Karaman, Nilüfer’in merkez mahallelerindendir ve Bursa-Mudanya yolunun batısında, eski bir vakıf köyünün yerinde 1987’de kurulmuştur. Tuna Caddesi ile Fulya Sokak’ta çarşamba semt pazarı ve pazar günü üretici pazarı kurulur. Kültür Caddesi’nde Koca Muhtar Parkı bulunur.",
      "Karaman’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Karaman için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Karaman siparişinin kartında sizin sözünüzle durur. Tuna Caddesi ve Fulya Sokak adreslerinde cadde adı açık yazılır.",
      "Doğum gününde Karaman evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Karttaki cümleyi ve Karaman adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "ucevler",
    shortName: "Üçevler",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gumustepe", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Üçevler’e çiçek gönderimi. Üçevler, Nilüfer’e bağlı bir mahalledir ve Bursa merkezine 14 kilometre uzaktadır.",
    body: [
      "Üçevler, Nilüfer’e bağlı bir mahalledir ve Bursa merkezine 14 kilometre uzaktadır. Dumlupınar Caddesi ile Kevser Sokak’ta pazartesi giyim pazarı, cuma günü semt pazarı kurulur. Nilüfer Caddesi’nde Küçük Sanayi Camii bulunur.",
      "Çiçek, Üçevler adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Üçevler çiçeği, ambalajı bozulmadan teslim edilir. Üçevler’e gidecek kartın metnini siz belirlersiniz. Dumlupınar Caddesi ya da Nilüfer Caddesi geçiyorsa cadde adı yazılır.",
      "Üçevler adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Alıcının adını, Üçevler adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "altinsehir",
    shortName: "Altınşehir",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["23-nisan"],
    description:
      "Altınşehir’e çiçek gönderimi. Altınşehir, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Altınşehir, Nilüfer’in merkez mahallelerindendir. 23 Nisan Mahallesi bu mahalleden ayrılan kesimin adıdır. 233. Sokak’ta, muhtarlığın yanında cumartesi semt pazarı ve pazar günü giyim pazarı kurulur. Nebahat Şahinkaya Parkı mahalledeki parklardan biridir.",
      "Çiçek, Altınşehir adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Altınşehir çiçeği, ambalajı bozulmadan teslim edilir. Altınşehir’e gidecek kartın metnini siz belirlersiniz. 233. Sokak adresinde sokak numarası ayrıca yazılır.",
      "Doğum gününde Altınşehir evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Alıcının adını, Altınşehir adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "23-nisan",
    shortName: "23 Nisan",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["altinsehir"],
    description:
      "23 Nisan’a çiçek gönderimi. 23 Nisan, Nilüfer’in merkez mahallelerindendir ve Altınşehir’den ayrılan kesimde kurulmuştur.",
    body: [
      "23 Nisan, Nilüfer’in merkez mahallelerindendir ve Altınşehir’den ayrılan kesimde kurulmuştur. Salı günleri Araslı Sokak üzerinde sokak pazarı kurulur. Karacaoğlan Caddesi’nde 23 Nisan Parkı bulunur.",
      "23 Nisan’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. 23 Nisan için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, 23 Nisan siparişinin kartında sizin sözünüzle durur. Araslı Sokak ya da Karacaoğlan Caddesi adresinde sokak adı açık yazılır.",
      "Doğum gününde 23 Nisan evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Karttaki cümleyi ve 23 Nisan adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "29-ekim",
    shortName: "29 Ekim",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ertugrul"],
    description:
      "29 Ekim’e çiçek gönderimi. 29 Ekim, Nilüfer’in merkez mahallelerindendir ve Ertuğrul’dan ayrılan kesimde yer alır.",
    body: [
      "29 Ekim, Nilüfer’in merkez mahallelerindendir ve Ertuğrul’dan ayrılan kesimde yer alır. Uğur Mumcu Bulvarı’nda bir park, mahalle içinde de 29 Ekim Parkı bulunur.",
      "Çiçek, 29 Ekim adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan 29 Ekim çiçeği, ambalajı bozulmadan teslim edilir. 29 Ekim’e gidecek kartın metnini siz belirlersiniz. Uğur Mumcu Bulvarı adresinde bulvar adı ayrıca yazılır.",
      "Doğum günü ve yıl dönümünde 29 Ekim evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, 29 Ekim adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "19-mayis",
    shortName: "19 Mayıs",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ozluce"],
    description:
      "19 Mayıs’a çiçek gönderimi. 19 Mayıs, Nilüfer’in merkez mahallelerindendir ve Özlüce’den ayrılan kesimdedir.",
    body: [
      "19 Mayıs, Nilüfer’in merkez mahallelerindendir ve Özlüce’den ayrılan kesimdedir. Side Caddesi’ndeki kapalı pazar Batıkent adıyla da anılır; salı günü giyim, pazar günü semt pazarı kurulur. Sevgi Caddesi’nde Sevgi Parkı bulunur.",
      "19 Mayıs’a çiçek ev, iş yeri veya hastane adresine hazırlanır. 19 Mayıs siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu 19 Mayıs siparişinde siz yazarsınız. Side Caddesi adresinde kapalı pazarın günü birlikte belirtilir.",
      "Doğum günü ve yıl dönümünde 19 Mayıs evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını 19 Mayıs diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "yuzuncuyil",
    shortName: "Yüzüncüyıl",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ozluce", "ertugrul"],
    description:
      "Yüzüncüyıl’a çiçek gönderimi. Yüzüncüyıl, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Yüzüncüyıl, Nilüfer’in merkez mahallelerindendir. 2008’de Özlüce’nin bölünmesiyle kurulmuştur; kuzeyinde Özlüce, doğusunda Ertuğrul, güneyinde İzmir Yolu, batısında Uludağ Üniversitesi yerleşkesi vardır. 2011’den beri BursaRay mahallenin içinden geçer. Prof. Dr. Erdal İnönü Caddesi’nde Sunpark Plaza bulunur.",
      "Yüzüncüyıl’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Yüzüncüyıl için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Yüzüncüyıl siparişinin kartında sizin sözünüzle durur. Erdal İnönü Caddesi ya da İzmir Yolu tarafındaki adreste cadde adı yazılır.",
      "Doğum gününde Yüzüncüyıl evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Karttaki cümleyi ve Yüzüncüyıl adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "dumlupinar",
    shortName: "Dumlupınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "irfaniye"],
    description:
      "Dumlupınar’a çiçek gönderimi. Dumlupınar, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Dumlupınar, Nilüfer’in merkez mahallelerindendir. Kuzeyinde, Fevzi Çakmak Caddesi’nin ötesinde Görükle başlar; batısında İrfaniye yer alır. Fevzi Çakmak Caddesi’nde Motormeşeler Parkı bulunur.",
      "Dumlupınar’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Dumlupınar için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Dumlupınar siparişinin kartında sizin sözünüzle durur. Fevzi Çakmak Caddesi adresinde cadde adı açık yazılır.",
      "Doğum gününde Dumlupınar evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Karttaki cümleyi ve Dumlupınar adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "balkan",
    shortName: "Balkan",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kurtulus"],
    description:
      "Balkan’a çiçek gönderimi. Balkan, Nilüfer’in merkez mahallelerindendir ve Kurtuluş’un yanında, eski Görükle Zafer kesiminde yer alır.",
    body: [
      "Balkan, Nilüfer’in merkez mahallelerindendir ve Kurtuluş’un yanında, eski Görükle Zafer kesiminde yer alır. Atatürk Bulvarı’nda Ali Durmaz Stadyumu ve Tuna İmam Hatip Ortaokulu bulunur. Pazar günleri Mevlana Sokak’ta semt pazarı kurulur.",
      "Balkan için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Balkan için atölyede taze tutulur ve özenli ambalajlanır. Balkan kartındaki cümle size aittir. Atatürk Bulvarı ya da Mevlana Sokak adresinde cadde adı yazılır.",
      "Balkan evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Balkan için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "kurtulus",
    shortName: "Kurtuluş",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["balkan"],
    description:
      "Kurtuluş’a çiçek gönderimi. Kurtuluş, Nilüfer’de Balkan Mahallesi’nin yanında yer alan bir konut mahallesidir.",
    body: [
      "Kurtuluş, Nilüfer’de Balkan Mahallesi’nin yanında yer alan bir konut mahallesidir. Eski adı Görükle Kurtuluş’tur. Armutlu Caddesi’nde çarşamba günleri semt pazarı kurulur; Şahinler Anadolu Lisesi de bu mahallededir. 36. Sokak’ta Cumhuriyet Parkı bulunur.",
      "Kurtuluş’a çiçek ev, iş yeri veya hastane adresine hazırlanır. Kurtuluş siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Kurtuluş siparişinde siz yazarsınız. Armutlu Caddesi adresinde cadde adı, okul siparişinde alıcının adı yazılır.",
      "Doğum günü ve yıl dönümünde Kurtuluş evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Kurtuluş adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "30-agustos-zafer",
    shortName: "30 Ağustos Zafer",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "tahtali", "hasanaga"],
    description:
      "30 Ağustos Zafer’e çiçek gönderimi. 30 Ağustos Zafer, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "30 Ağustos Zafer, Nilüfer’in merkez mahallelerindendir. Eski adı Kayapa Çamlık’tır; kuzeyinde Görükle, doğusunda Tahtalı, batısında Hasanağa bulunur. Çamlık Bulvarı’ndaki park mahallenin açık alanıdır. Fatih Caddesi’nde çarşamba sabahları sokak pazarı kurulur.",
      "30 Ağustos Zafer için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, 30 Ağustos Zafer için atölyede taze tutulur ve özenli ambalajlanır. 30 Ağustos Zafer kartındaki cümle size aittir. Fatih Caddesi geçiyorsa mahalle adı 30 Ağustos Zafer olarak yazılır.",
      "Doğum günü ve yıl dönümünde 30 Ağustos Zafer evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "30 Ağustos Zafer için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "minarelicavus",
    shortName: "Minareliçavuş",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["alaaddinbey", "ozluce", "cali", "yaylacik"],
    description:
      "Minareliçavuş’a çiçek gönderimi. Minareliçavuş, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Minareliçavuş, Nilüfer’in merkez mahallelerindendir. Pazartesi günleri Merkez Sokak’ta semt pazarı kurulur. Selvi Caddesi’nde spor tesisleri, mahalle içinde Çavuş Parkı bulunur.",
      "Çiçek, Minareliçavuş adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Minareliçavuş çiçeği, ambalajı bozulmadan teslim edilir. Minareliçavuş’a gidecek kartın metnini siz belirlersiniz. Merkez Sokak ve Selvi Caddesi adreslerinde sokak adı açık yazılır.",
      "Doğum gününde Minareliçavuş evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Alıcının adını, Minareliçavuş adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "alaaddinbey",
    shortName: "Alaaddinbey",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ozluce", "minarelicavus", "yaylacik", "urunlu"],
    description:
      "Alaaddinbey’e çiçek gönderimi. Alaaddinbey, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Alaaddinbey, Nilüfer’in kırsal mahallelerindendir. Nilüfer Belediyesi’nin 2017 tarihli açıklamasında göç alan ve konutun geliştiği bir mahalle olarak geçer.",
      "Alaaddinbey’e çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Alaaddinbey için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Alaaddinbey siparişinin kartında sizin sözünüzle durur. Alaaddinbey için kapı numarası siparişte durur.",
      "Bayramda ve aile ziyaretinde Alaaddinbey’e [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "WhatsApp mesajında Alaaddinbey adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  {
    slug: "ahmet-yesevi",
    shortName: "Ahmet Yesevi",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["minarelicavus", "isiktepe", "demirci", "ucevler"],
    description:
      "Ahmet Yesevi’ye çiçek gönderimi. Ahmet Yesevi, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Ahmet Yesevi, Nilüfer’in merkez mahallelerindendir. Perşembe günleri Hürriyet Caddesi ile Atabey Sokak’ta semt pazarı kurulur. Ahmet Yesevi Parkı ve Frezye Parkı mahalledeki açık alanlardandır.",
      "Ahmet Yesevi’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. Ahmet Yesevi siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Ahmet Yesevi siparişinde siz yazarsınız. Hürriyet Caddesi ya da Atabey Sokak adresinde sokak adı yazılır.",
      "Doğum günü ve yıl dönümünde Ahmet Yesevi evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını Ahmet Yesevi diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "kizilcikli",
    shortName: "Kızılcıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "kayapa", "hasanaga"],
    description:
      "Kızılcıklı’ya çiçek gönderimi. Kızılcıklı, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Kızılcıklı, Nilüfer’in merkez mahallelerindendir. Eski adı Hasanağa Kızılcıklı’dır. Kuzeyinde Görükle, doğusunda Kayapa, güneyinde Hasanağa bulunur; batı sınırı Pazar Caddesi’dir. Cumartesi günleri Kemerli Sokak’ta pazar kurulur.",
      "Çiçek, Kızılcıklı adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Kızılcıklı çiçeği, ambalajı bozulmadan teslim edilir. Kızılcıklı’ya gidecek kartın metnini siz belirlersiniz. Pazar Caddesi ya da Kemerli Sokak adresinde cadde adı açık yazılır.",
      "Doğum günü ve yıl dönümünde Kızılcıklı evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, Kızılcıklı adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "demirci",
    shortName: "Demirci",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cali", "minarelicavus", "isiktepe", "ahmet-yesevi"],
    description:
      "Demirci’ye çiçek gönderimi. Demirci, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Demirci, Nilüfer’in kırsal mahallelerindendir. Salı günleri Karamel Sokak’ta semt pazarı kurulur. Kavaklıdere Caddesi’nde Doğa Parkı, mahalle içinde Demirci Parkı bulunur.",
      "Demirci’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. Demirci siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Demirci siparişinde siz yazarsınız. Karamel Sokak adresinde sokak adı ayrıca yazılır.",
      "Bayramda ve aile ziyaretinde Demirci’ye [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Demirci adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "isiktepe",
    shortName: "Işıktepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["demirci", "ahmet-yesevi", "ucevler", "gumustepe"],
    description:
      "Işıktepe’ye çiçek gönderimi. Işıktepe, Nilüfer’in merkez mahallelerindendir.",
    body: [
      "Işıktepe, Nilüfer’in merkez mahallelerindendir. Çarşamba günleri Mor Sokak üzerinde semt pazarı kurulur. Eflatun Caddesi’nde Rüveyde Dörtçelik İlkokulu, mahallede Zakkum Parkı bulunur.",
      "Işıktepe için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Işıktepe için atölyede taze tutulur ve özenli ambalajlanır. Işıktepe kartındaki cümle size aittir. Mor Sokak ve Eflatun Caddesi adreslerinde sokak adı yazılır.",
      "Doğum gününde Işıktepe evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan Işıktepe adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "akcalar",
    shortName: "Akçalar",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "fadilli", "hasanaga", "inegazi"],
    description:
      "Akçalar’a çiçek gönderimi. Akçalar, Nilüfer’in kırsal mahallelerindendir ve Uluabat Gölü’nün doğu kıyısındadır.",
    body: [
      "Akçalar, Nilüfer’in kırsal mahallelerindendir ve Uluabat Gölü’nün doğu kıyısındadır. Adını yöredeki akça ağacından alır; sınırlarında Aktopraklık Höyüğü bulunur ve at müsabakalarına ev sahipliği yapar. Eski Zafer ile Kurtuluş mahalleleri birleşerek bugünkü Akçalar’ı oluşturur. Cuma günleri Balıkçı Yolu Caddesi’ndeki Pazar Sokak’ta semt pazarı kurulur.",
      "Akçalar’a çiçek ev, iş yeri veya hastane adresine hazırlanır. Akçalar siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Akçalar siparişinde siz yazarsınız. Pazar Sokak adresinde mahalle adı Akçalar olarak yazılır.",
      "Bayramda ve aile ziyaretinde Akçalar’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Akçalar adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "atlas",
    shortName: "Atlas",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ucpinar", "kadriye", "kurucesme", "dagyenice"],
    description:
      "Atlas’a çiçek gönderimi. Atlas, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Atlas, Nilüfer’in kırsal mahallelerindendir. İlçenin güneybatısında, Çalı-Kadriye yolu üzerinde ve kent merkezine 26 kilometre uzaktadır.",
      "Çiçek, Atlas adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Atlas çiçeği, ambalajı bozulmadan teslim edilir. Atlas’a gidecek kartın metnini siz belirlersiniz. Çalı-Kadriye yolu üzerindeki ev adresinde sokak ve kapı birlikte yazılır.",
      "Atlas evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Beğendiğiniz düzeni WhatsApp’tan, Atlas adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  {
    slug: "ayvakoy",
    shortName: "Ayvaköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["uncukuru", "korubasi", "fadilli", "maksempinar"],
    description:
      "Ayvaköy’e çiçek gönderimi. Ayvaköy, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Ayvaköy, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 44 kilometre uzaklıktadır.",
      "Ayvaköy’e çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Ayvaköy için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Ayvaköy siparişinin kartında sizin sözünüzle durur. Ayvaköy için kapı numarası siparişte durur.",
      "Ayvaköy evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp mesajında Ayvaköy adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  {
    slug: "badirga",
    shortName: "Badırga",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "buyukbalikli", "baskoy"],
    description:
      "Badırga’ya çiçek gönderimi. Badırga, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Badırga, Nilüfer’in kırsal mahallelerindendir. Bursa merkezine 40 kilometre, İzmir yolu asfaltına 6 kilometre uzaklıktadır.",
      "Çiçek, Badırga adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Badırga çiçeği, ambalajı bozulmadan teslim edilir. Badırga’ya gidecek kartın metnini siz belirlersiniz. Badırga’ya gidecek adreste mahalle ve kapı birlikte belirtilir.",
      "Badırga evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Alıcının adını, Badırga adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "baskoy",
    shortName: "Başköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "catalagil", "akcalar", "buyukbalikli"],
    description:
      "Başköy’e çiçek gönderimi. Başköy, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Başköy, Nilüfer’in kırsal mahallelerindendir. 1530 kayıtlarında Bulgarlar, 1890 kayıtlarında Bulgarköy adıyla geçer; Yunanistan’ın Grevene yöresinden gelen mübadiller burada yerleşmiştir. Eski köy okulu, Nilüfer Belediyesi’nce Başköy Bisiklet Evi olarak düzenlenmiştir.",
      "Çiçek, Başköy adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Başköy çiçeği, ambalajı bozulmadan teslim edilir. Başköy’e gidecek kartın metnini siz belirlersiniz. Başköy’e gidecek adreste mahalle ve kapı birlikte belirtilir.",
      "Başköy evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, Başköy adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "buyukbalikli",
    shortName: "Büyükbalıklı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "konakli", "cayli", "baskoy"],
    description:
      "Büyükbalıklı’ya çiçek gönderimi. Büyükbalıklı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Büyükbalıklı, Nilüfer’in kırsal mahallelerindendir. Eski adı Görükle Büyükbalıklı’dır. Adı, köy meydanındaki tarihi havuzda yaşayan balıklardan gelir. Bursa il merkezine 30 kilometre uzaklıktadır.",
      "Büyükbalıklı’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Büyükbalıklı siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Büyükbalıklı siparişinde siz yazarsınız. Büyükbalıklı adresinde mahalle adı ve kapı numarası yeter.",
      "Büyükbalıklı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Büyükbalıklı adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "cali",
    shortName: "Çalı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["yaylacik", "ertugrul", "alaaddinbey", "demirci"],
    description:
      "Çalı’ya çiçek gönderimi. Çalı, Nilüfer’in güneybatısında bir mahalledir.",
    body: [
      "Çalı, Nilüfer’in güneybatısında bir mahalledir. Osmanlı döneminden beri yağlı güreş geleneği burada yaşar. 1988-1989’da Çalı Sanayi Bölgesi kurulmuştur. Cuma günleri Değirmen Caddesi’nde semt pazarı, mahallede Gençlik Parkı bulunur.",
      "Çalı’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Çalı siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Çalı siparişinde siz yazarsınız. Sanayi sitesindeki iş yeri siparişinde firma adı, ev adresinde sokak yazılır.",
      "Çalı adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan mahalle adını Çalı diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "catalagil",
    shortName: "Çatalağıl",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["baskoy", "inegazi", "akcalar", "hasanaga"],
    description:
      "Çatalağıl’a çiçek gönderimi. Çatalağıl, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Çatalağıl, Nilüfer’in kırsal mahallelerindendir. Adı 1604 kayıtlarında Çatalağıl, 1890 kayıtlarında Konstantinati olarak geçer. Bursa il merkezine 34 kilometre uzaklıktadır.",
      "Çatalağıl için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Çatalağıl için atölyede taze tutulur ve özenli ambalajlanır. Çatalağıl kartındaki cümle size aittir. Siparişte Çatalağıl adının yanında kapı numarasını da yazmanız yeter.",
      "Bayramda ve aile ziyaretinde Çatalağıl’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "WhatsApp’tan Çatalağıl adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "cayli",
    shortName: "Çaylı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "yolcati", "buyukbalikli", "konakli"],
    description:
      "Çaylı’ya çiçek gönderimi. Çaylı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Çaylı, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 34 kilometre, Nilüfer ilçe merkezine 25 kilometre uzaklıktadır.",
      "Çaylı için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Çaylı için atölyede taze tutulur ve özenli ambalajlanır. Çaylı kartındaki cümle size aittir. Siparişte Çaylı adının yanında kapı numarasını da yazmanız yeter.",
      "Çaylı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan Çaylı adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "dagyenice",
    shortName: "Dağyenice",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["tahtali", "atlas", "yaylacik", "kadriye"],
    description:
      "Dağyenice’ye çiçek gönderimi. Dağyenice, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Dağyenice, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 17 kilometre uzaklıktadır. Mahallede Dağyenice Gölü bulunur.",
      "Dağyenice’ye çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Dağyenice için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Dağyenice siparişinin kartında sizin sözünüzle durur. Dağyenice için kapı numarası siparişte durur.",
      "Dağyenice evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Karttaki cümleyi ve Dağyenice adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "dogankoy",
    shortName: "Doğanköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["karacaoba", "gungoren", "gokce", "kadriye"],
    description:
      "Doğanköy’e çiçek gönderimi. Doğanköy, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Doğanköy, Nilüfer’in kırsal mahallelerindendir. Eski bir çiftlik yerleşimidir; Bulgaristan’dan gelen göçle büyümüş, ardından Gümüşhane’den de aileler yerleşmiştir. Bursa il merkezine 17 kilometre uzaklıktadır. Gümüş Caddesi ve Göçmen Caddesi’nde çocuk parkları bulunur.",
      "Doğanköy’e çiçek ev, iş yeri veya hastane adresine hazırlanır. Doğanköy siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Doğanköy siparişinde siz yazarsınız. Gümüş Caddesi ile Göçmen Caddesi adreslerinde cadde adı yazılır.",
      "Doğum günü ve yıl dönümünde Doğanköy evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını Doğanköy diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "fadilli",
    shortName: "Fadıllı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "ayvakoy", "akcalar", "uncukuru"],
    description:
      "Fadıllı’ya çiçek gönderimi. Fadıllı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Fadıllı, Nilüfer’in kırsal mahallelerindendir. Mezarlığında 17. yüzyıl sonları ile 18. yüzyıl başlarına giden mezar taşları durur. Bursa il merkezine 39 kilometre uzaklıktadır.",
      "Fadıllı’ya çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Fadıllı için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Fadıllı siparişinin kartında sizin sözünüzle durur. Fadıllı için kapı numarası siparişte durur.",
      "Fadıllı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp mesajında Fadıllı adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  {
    slug: "gokce",
    shortName: "Gökçe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gungoren", "dagyenice"],
    description:
      "Gökçe’ye çiçek gönderimi. Gökçe, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Gökçe, Nilüfer’in kırsal mahallelerindendir. Eski adı Ermiye’dir. Geçimde zeytin ve hayvancılık yer alır.",
      "Gökçe’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. Gökçe siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Gökçe siparişinde siz yazarsınız. Gökçe adresinde mahalle adı ve kapı numarası yeter.",
      "Gökçe evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan mahalle adını Gökçe diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "golyazi",
    shortName: "Gölyazı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["akcalar", "inegazi", "hasanaga", "fadilli"],
    description:
      "Gölyazı’ya çiçek gönderimi. Gölyazı, Nilüfer’in kırsal mahallelerindendir ve Uluabat Gölü kıyısında, iki alçak tepeden oluşan küçük bir yarımadada kuruludur.",
    body: [
      "Gölyazı, Nilüfer’in kırsal mahallelerindendir ve Uluabat Gölü kıyısında, iki alçak tepeden oluşan küçük bir yarımadada kuruludur. Bursa-İzmir karayolunun 35. kilometresinden güneye sapılınca 7 kilometre içeridedir. Eski adı Apolyont’tur; karaya yakın tepede Apollonia nekropolü, göl yükselince ada olan tepede ise ince uzun taş köprüyle ulaşılan tuğla duvarlı tarihî Rum evleri vardır. Geçim tarım, balıkçılık ve turizmdir. Cumhuriyet Caddesi’nde Gölyazı Parkı ve cuma günleri kurulan sokak pazarı bulunur.",
      "Gölyazı için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Gölyazı için atölyede taze tutulur ve özenli ambalajlanır. Gölyazı kartındaki cümle size aittir. Ada kesimindeki ev için sokak ve kapı numarası birlikte istenir.",
      "Gölyazı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Gölyazı için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "gumustepe",
    shortName: "Gümüştepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ucevler", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Gümüştepe’ye çiçek gönderimi. Gümüştepe, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Gümüştepe, Nilüfer’in kırsal mahallelerindendir. Eski adı Misi’dir. Orhaneli yolu üzerinde, ormanlık tepelerin arasında kuruludur; ortasından Nilüfer Çayı geçer. Asma yaprağı, misket üzümü ve pekmeziyle bilinir. 17. ve 18. yüzyıldan yapıları durur; 1989’da sit alanı ilan edilmiştir.",
      "Gümüştepe için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Gümüştepe için atölyede taze tutulur ve özenli ambalajlanır. Gümüştepe kartındaki cümle size aittir. Orhaneli yolu üzerindeki ev adresinde sokak ve kapı birlikte yazılır.",
      "Gümüştepe evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan Gümüştepe adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "gungoren",
    shortName: "Güngören",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gokce", "atlas"],
    description:
      "Güngören’e çiçek gönderimi. Güngören, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Güngören, Nilüfer’in kırsal mahallelerindendir. 1877-1878 savaşından sonra İslimye’den gelen muhacirler kurmuştur; 1892’de adı Mamuretülhamidiye olarak kayda geçmiştir. Mahallede mermer ocağı bulunur.",
      "Güngören’e çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Güngören için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Güngören siparişinin kartında sizin sözünüzle durur. Güngören için kapı numarası siparişte durur.",
      "Güngören evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp mesajında Güngören adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  {
    slug: "hasanaga",
    shortName: "Hasanağa",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kizilcikli", "30-agustos-zafer"],
    description:
      "Hasanağa’ya çiçek gönderimi. Hasanağa, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Hasanağa, Nilüfer’in kırsal mahallelerindendir. Kızılcıklı’nın güneyinde, 30 Ağustos Zafer’in batısındadır. Perşembe günleri Cumhuriyet Caddesi üzerinde sokak pazarı kurulur. Pazar Caddesi’nde Gençlik Parkı bulunur.",
      "Hasanağa’ya çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Hasanağa için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Hasanağa siparişinin kartında sizin sözünüzle durur. Cumhuriyet Caddesi adresinde cadde adı açık yazılır.",
      "Bayramda ve aile ziyaretinde Hasanağa’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Karttaki cümleyi ve Hasanağa adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "inegazi",
    shortName: "İnegazi",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "akcalar", "catalagil", "hasanaga"],
    description:
      "İnegazi’ye çiçek gönderimi. İnegazi, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "İnegazi, Nilüfer’in kırsal mahallelerindendir. Yerleşimin tarihi Bizans dönemine kadar iner. Bursa il merkezine 27 kilometre uzaklıktadır.",
      "Çiçek, İnegazi adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan İnegazi çiçeği, ambalajı bozulmadan teslim edilir. İnegazi’ye gidecek kartın metnini siz belirlersiniz. İnegazi’ye gidecek adreste mahalle ve kapı birlikte belirtilir.",
      "İnegazi evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Alıcının adını, İnegazi adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  {
    slug: "irfaniye",
    shortName: "İrfaniye",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "dumlupinar"],
    description:
      "İrfaniye’ye çiçek gönderimi. İrfaniye, Nilüfer’de Görükle ve Dumlupınar’ın batısında yer alan bir mahalledir.",
    body: [
      "İrfaniye, Nilüfer’de Görükle ve Dumlupınar’ın batısında yer alan bir mahalledir. Eski adı Görükle İrfaniye’dir. 1. Meltem Sokak’ta çocuk oyun parkı bulunur.",
      "İrfaniye’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. İrfaniye siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu İrfaniye siparişinde siz yazarsınız. 1. Meltem Sokak adresinde sokak adı yazılır.",
      "İrfaniye evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "İrfaniye adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "kadriye",
    shortName: "Kadriye",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["atlas", "ucpinar", "kurucesme", "korubasi"],
    description:
      "Kadriye’ye çiçek gönderimi. Kadriye, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Kadriye, Nilüfer’in kırsal mahallelerindendir. 1877-1878 savaşından sonra İslimye’den gelen muhacirler, Atlas köyü civarındaki Karaören mevkiinde kurmuştur; 1890’da adı Kadiriye olarak yazılmıştır. Uludağ’ın güneybatı yamaçlarındadır, Üçpınar ve Güngören ile komşudur.",
      "Çiçek, Kadriye adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Kadriye çiçeği, ambalajı bozulmadan teslim edilir. Kadriye’ye gidecek kartın metnini siz belirlersiniz. Kadriye’ye gidecek adreste mahalle ve kapı birlikte belirtilir.",
      "Kadriye evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Kadriye adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  {
    slug: "karacaoba",
    shortName: "Karacaoba",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "gungoren", "gokce", "atlas"],
    description:
      "Karacaoba’ya çiçek gönderimi. Karacaoba, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Karacaoba, Nilüfer’in kırsal mahallelerindendir. 1890 kayıtlarında adı Karacaova olarak geçer. Daha önce Karacabey’e bağlıydı. Bursa il merkezine 32 kilometre uzaklıktadır.",
      "Karacaoba için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Karacaoba için atölyede taze tutulur ve özenli ambalajlanır. Karacaoba kartındaki cümle size aittir. Siparişte Karacaoba adının yanında kapı numarasını da yazmanız yeter.",
      "Karacaoba evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Karacaoba için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "kayapa",
    shortName: "Kayapa",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kizilcikli"],
    description:
      "Kayapa’ya çiçek gönderimi. Kayapa, Nilüfer’in kırsal mahallelerindendir ve Kızılcıklı’nın doğusundadır.",
    body: [
      "Kayapa, Nilüfer’in kırsal mahallelerindendir ve Kızılcıklı’nın doğusundadır. Eski Kayapa İstiklal ile Kayapa Zafer’in birleşmesiyle bu adı almıştır. Atatürk Caddesi’nde Kayapa Parkı, Fevzi Çakmak Caddesi’nde perşembe günleri sokak pazarı bulunur.",
      "Kayapa için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Kayapa için atölyede taze tutulur ve özenli ambalajlanır. Kayapa kartındaki cümle size aittir. Fevzi Çakmak Caddesi geçiyorsa mahalle adı Kayapa olarak yazılır.",
      "Kayapa evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan Kayapa adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "konakli",
    shortName: "Konaklı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "buyukbalikli", "cayli", "yolcati"],
    description:
      "Konaklı’ya çiçek gönderimi. Konaklı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Konaklı, Nilüfer’in kırsal mahallelerindendir. Eski adı Zirafta’dır ve Manav mahallesi olarak bilinir. 93 Harbi’nden sonra Bulgaristan’dan gelen aileler de burada yerleşmiştir.",
      "Konaklı için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Konaklı için atölyede taze tutulur ve özenli ambalajlanır. Konaklı kartındaki cümle size aittir. Siparişte Konaklı adının yanında kapı numarasını da yazmanız yeter.",
      "Konaklı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Konaklı için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "korubasi",
    shortName: "Korubaşı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["uncukuru", "maksempinar", "ayvakoy", "ucpinar"],
    description:
      "Korubaşı’ya çiçek gönderimi. Korubaşı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Korubaşı, Nilüfer’in kırsal mahallelerindendir. Eski adı Balyaz’dır. 1423’te su bulunduğu için Rum yerleşimi olarak kullanılmış, o dönemki adı Kalemita’dır. Bursa il merkezine 38 kilometre uzaklıktadır.",
      "Korubaşı’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Korubaşı siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Korubaşı siparişinde siz yazarsınız. Korubaşı adresinde mahalle adı ve kapı numarası yeter.",
      "Korubaşı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Korubaşı adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "kurucesme",
    shortName: "Kuruçeşme",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["maksempinar", "uncukuru", "ucpinar", "atlas"],
    description:
      "Kuruçeşme’ye çiçek gönderimi. Kuruçeşme, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Kuruçeşme, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 32 kilometre, Nilüfer ilçe merkezine 23 kilometre uzaklıktadır.",
      "Kuruçeşme’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. Kuruçeşme siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Kuruçeşme siparişinde siz yazarsınız. Kuruçeşme adresinde mahalle adı ve kapı numarası yeter.",
      "Kuruçeşme evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan mahalle adını Kuruçeşme diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  {
    slug: "maksempinar",
    shortName: "Maksempınar",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kurucesme", "uncukuru", "korubasi", "ayvakoy"],
    description:
      "Maksempınar’a çiçek gönderimi. Maksempınar, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Maksempınar, Nilüfer’in kırsal mahallelerindendir. Büyükşehir düzenlemesine kadar köy olarak kayıtlıydı.",
      "Maksempınar’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Maksempınar için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Maksempınar siparişinin kartında sizin sözünüzle durur. Maksempınar için kapı numarası siparişte durur.",
      "Bayramda ve aile ziyaretinde Maksempınar’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Karttaki cümleyi ve Maksempınar adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  {
    slug: "tahtali",
    shortName: "Tahtalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["30-agustos-zafer"],
    description:
      "Tahtalı’ya çiçek gönderimi. Tahtalı, Nilüfer’in kırsal mahallelerindendir ve 30 Ağustos Zafer’in doğusundadır.",
    body: [
      "Tahtalı, Nilüfer’in kırsal mahallelerindendir ve 30 Ağustos Zafer’in doğusundadır. Çınar Sokak’ta Tahtalı Meydanı bulunur.",
      "Tahtalı için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Tahtalı için atölyede taze tutulur ve özenli ambalajlanır. Tahtalı kartındaki cümle size aittir. Çınar Sokak ve meydan çevresindeki ev adresinde sokak adı yazılır.",
      "Tahtalı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan Tahtalı adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "uncukuru",
    shortName: "Unçukuru",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["maksempinar", "korubasi", "ayvakoy", "kurucesme"],
    description:
      "Unçukuru’ya çiçek gönderimi. Unçukuru, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Unçukuru, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 37 kilometre uzaklıktadır.",
      "Unçukuru’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Unçukuru siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Unçukuru siparişinde siz yazarsınız. Unçukuru adresinde mahalle adı ve kapı numarası yeter.",
      "Bayramda ve aile ziyaretinde Unçukuru’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Unçukuru adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  {
    slug: "ucpinar",
    shortName: "Üçpınar",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kadriye", "atlas", "kurucesme", "korubasi"],
    description:
      "Üçpınar’a çiçek gönderimi. Üçpınar, Nilüfer’in kırsal mahallelerindendir ve Uludağ’ın güneybatı yamaçlarındadır.",
    body: [
      "Üçpınar, Nilüfer’in kırsal mahallelerindendir ve Uludağ’ın güneybatı yamaçlarındadır. 1877-1878 savaşından sonra İslimye’den gelen muhacirler kurmuştur; adını Üçpınar Çeşmesi’nden alır, 1892’de köy olarak kayda geçmiştir. Eski köy okulu Nilüfer Belediyesi’nce Üçpınar Evi olmuştur. Mysia Yolları’nın yürüyüş ve bisiklet parkurları bu mahalleden geçer.",
      "Çiçek, Üçpınar adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Üçpınar çiçeği, ambalajı bozulmadan teslim edilir. Üçpınar’a gidecek kartın metnini siz belirlersiniz. Üçpınar’a gidecek adreste mahalle ve kapı birlikte belirtilir.",
      "Üçpınar evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Beğendiğiniz düzeni WhatsApp’tan, Üçpınar adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  {
    slug: "urunlu",
    shortName: "Ürünlü",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["alaaddinbey", "yaylacik", "cali", "minarelicavus"],
    description:
      "Ürünlü’ye çiçek gönderimi. Ürünlü, Nilüfer’in kırsal mahallelerindendir ve tarihi kayıtlarda Kite adıyla da bilinir.",
    body: [
      "Ürünlü, Nilüfer’in kırsal mahallelerindendir ve tarihi kayıtlarda Kite adıyla da bilinir. Bizans döneminde Bursa ile Gölyazı arasındaki ovada bir kale merkeziydi; Osmanlı döneminde çevredeki köylerin bağlı olduğu bir kazaydı. Ürünlü Caddesi’nde Ürünlü İlkokulu bulunur.",
      "Ürünlü için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Ürünlü için atölyede taze tutulur ve özenli ambalajlanır. Ürünlü kartındaki cümle size aittir. Ürünlü Caddesi adresinde cadde adı açık yazılır.",
      "Ürünlü evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "WhatsApp’tan Ürünlü adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  {
    slug: "yaylacik",
    shortName: "Yaylacık",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cali", "alaaddinbey", "urunlu", "tahtali"],
    description:
      "Yaylacık’a çiçek gönderimi. Yaylacık, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Yaylacık, Nilüfer’in kırsal mahallelerindendir. Müslüman ve Rum halk Birinci Dünya Savaşı’na kadar burada birlikte yaşamıştır. Eski caminin bahçesinde tarihi bir çınar vardır. Bursa il merkezine 19 kilometre uzaklıktadır.",
      "Yaylacık için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Yaylacık için atölyede taze tutulur ve özenli ambalajlanır. Yaylacık kartındaki cümle size aittir. Siparişte Yaylacık adının yanında kapı numarasını da yazmanız yeter.",
      "Yaylacık evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Yaylacık için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  {
    slug: "yolcati",
    shortName: "Yolçatı",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "badirga", "buyukbalikli"],
    description:
      "Yolçatı’ya çiçek gönderimi. Yolçatı, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Yolçatı, Nilüfer’in kırsal mahallelerindendir. Eski adı Göbelye’dir. Çelebi Sokak’ta Yolçatı Parkı bulunur. Bursa il merkezine 28 kilometre uzaklıktadır.",
      "Yolçatı’ya çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Yolçatı için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Yolçatı siparişinin kartında sizin sözünüzle durur. Çelebi Sokak adresinde sokak adı açık yazılır.",
      "Bayramda ve aile ziyaretinde Yolçatı’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "WhatsApp mesajında Yolçatı adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
];

export const legacyNeighborhoodCopy: Record<
  string,
  { description: string; body: string[]; relatedCategorySlugs: string[] }
> = {
  "ihsaniye": {
    description:
      "İhsaniye’ye çiçek gönderimi. İhsaniye, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "İhsaniye, Nilüfer’in merkez mahallelerindendir. Fatih Sultan Mehmet Bulvarı bu mahallededir ve İzmir Yolu’nu Mudanya yoluna bağlar. Ahmet Vefik Paşa Caddesi’ndeki kapalı pazarda cumartesi günleri semt pazarı ve giyim pazarı kurulur. Aynı yerde ayda bir el emeği pazarı ve antika pazarı da açılır.",
      "İhsaniye’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. İhsaniye siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu İhsaniye siparişinde siz yazarsınız. Ahmet Vefik Paşa Caddesi adresinde cadde adı ve daire numarası yazılır.",
      "İhsaniye evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "İhsaniye adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "ozluce": {
    description:
      "Özlüce’ye çiçek gönderimi. Özlüce, Nilüfer’e bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Özlüce, Nilüfer’e bağlı bir mahalledir. 19 Mayıs ve Yüzüncüyıl bu mahalleden ayrılan kesimlerdir; Yüzüncüyıl’ın kuzeyinde kalır. Çarşamba günleri Özer Sokak’ta semt pazarı kurulur. İnesi Parkı mahalledeki parklardan biridir.",
      "Çiçek, Özlüce adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Özlüce çiçeği, ambalajı bozulmadan teslim edilir. Özlüce’ye gidecek kartın metnini siz belirlersiniz. Özer Sokak adresinde sokak adı açık yazılır.",
      "Özlüce evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Özlüce adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  "fsm": {
    description:
      "FSM’ye çiçek gönderimi. FSM, Nilüfer’de Fatih Sultan Mehmet Bulvarı çevresi için kullanılan kısa addır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "FSM, Nilüfer’de Fatih Sultan Mehmet Bulvarı çevresi için kullanılan kısa addır. Bulvar İhsaniye Mahallesi’ndedir ve İzmir Yolu’nu Mudanya yoluna bağlar. Üzerinde hastaneler, muayenehaneler ve iş yerleri sıralanır.",
      "Çiçek, FSM adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan FSM çiçeği, ambalajı bozulmadan teslim edilir. FSM’ye gidecek kartın metnini siz belirlersiniz. Bulvar üzerindeki iş yeri ya da hastane adresinde bina adı yazılır.",
      "FSM içinde bir açılışta [kutu çiçek](/magaza/kutular) ya da [buket](/magaza/buketler) düşünülür. Masada duracak bitki için [orkide](/magaza/orkideler) seçilir. Eve gidecek doğum gününde [buket](/magaza/buketler) de uygundur. Anma için [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, FSM adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "camlica": {
    description:
      "Çamlıca’ya çiçek gönderimi. Çamlıca, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çamlıca, Nilüfer’in merkez mahallelerindendir. Kavakdere Caddesi ile Ardalı Sokak’taki kapalı pazarda çarşamba semt pazarı ve cumartesi üretici pazarı kurulur. Japon Parkı ve Azerbaycan Parkı mahalledeki açık alanlardandır.",
      "Çiçek, Çamlıca adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Çamlıca çiçeği, ambalajı bozulmadan teslim edilir. Çamlıca’ya gidecek kartın metnini siz belirlersiniz. Kavakdere Caddesi adresinde cadde adı yazılır.",
      "Doğum gününde Çamlıca evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Alıcının adını, Çamlıca adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "odunluk": {
    description:
      "Odunluk’a çiçek gönderimi. Odunluk, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Odunluk, Nilüfer’in merkez mahallelerindendir. Odunluk Caddesi’nde Hüdavendigar spor tesisleri, Orhangazi Caddesi’nde bir eğitim alanı bulunur.",
      "Odunluk için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Odunluk için atölyede taze tutulur ve özenli ambalajlanır. Odunluk kartındaki cümle size aittir. Odunluk Caddesi ya da Orhangazi Caddesi adresinde cadde adı yazılır.",
      "Doğum gününde Odunluk evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan Odunluk adresini, alıcıyı ve kart notunu iletebilirsiniz.",
    ],
  },
  "ertugrul": {
    description:
      "Ertuğrul’a çiçek gönderimi. Ertuğrul, Nilüfer’de Bursa-Karacabey yolu üzerinde bir mahalledir ve Yüzüncüyıl’ın doğusunda, 29 Ekim’in yanında yer alır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ertuğrul, Nilüfer’de Bursa-Karacabey yolu üzerinde bir mahalledir ve Yüzüncüyıl’ın doğusunda, 29 Ekim’in yanında yer alır. Eski adı Çayırköy’dür. Çarşamba günleri 153. Sokak’ta semt pazarı kurulur. Emek Sokak’ta Zeki Müren Lisesi bulunur.",
      "Ertuğrul’a çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Ertuğrul için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Ertuğrul siparişinin kartında sizin sözünüzle durur. 153. Sokak ve Emek Sokak adreslerinde sokak numarası açık yazılır.",
      "Doğum günü ve yıl dönümünde Ertuğrul evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp mesajında Ertuğrul adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  "gorukle": {
    description:
      "Görükle’ye çiçek gönderimi. Görükle, Nilüfer’de Bursa-İzmir karayolunun hemen yanında, ağırlıklı olarak öğrencilerin yaşadığı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Görükle, Nilüfer’de Bursa-İzmir karayolunun hemen yanında, ağırlıklı olarak öğrencilerin yaşadığı bir mahalledir. Cumhuriyet öncesinde Rum köyüydü; mübadeleden sonra Uludağ Üniversitesi’nin ana yerleşkesi köy merası üzerine kurulunca yurtların bulunduğu bir kentsel alana döndü. Kuzeyinde Nilüfer Çayı, batısında İrfaniye, güneyinde Fevzi Çakmak Caddesi ile İzmir Yolu, doğusunda üniversite arazisi bulunur. Yerleşim Caddesi mahallenin bilinen caddesidir; Rıza Ağa Mübadele Kahvesi ile yanındaki Mübadele Evi 2016’da açılmıştır. Portakal Sokak’taki kapalı pazarda salı günü üretici, cuma günü giyim, cumartesi günü semt pazarı kurulur.",
      "Çiçek, Görükle adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Görükle çiçeği, ambalajı bozulmadan teslim edilir. Görükle’ye gidecek kartın metnini siz belirlersiniz. Yurt siparişinde alıcının adı ve blok, iş yerinde firma adı yazılır.",
      "Mezuniyet ve doğum gününde Görükle için [buket](/magaza/buketler) istenir. Öğrenci odasında duracak bir bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Tören ve anma için [çelenk](/magaza/celenkler) kurdele metniyle hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Görükle adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  "ataevler": {
    description:
      "Ataevler’e çiçek gönderimi. Ataevler, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ataevler, Nilüfer’in merkez mahallelerindendir. Pazar günleri Yılmaz Akkılıç Caddesi’nde kapalı semt pazarı kurulur. Aynı caddede Yılmaz Akkılıç Parkı, Nene Hatun Caddesi’nde Gezi Parkı, Selçukbey Sokak’ta Naim Süleymanoğlu Dinlenme Parkı bulunur.",
      "Ataevler’e çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Ataevler için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Ataevler siparişinin kartında sizin sözünüzle durur. Site adresinde blok ve daire, Yılmaz Akkılıç Caddesi geçiyorsa cadde adı yazılır.",
      "Ataevler evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp mesajında Ataevler adresiyle birlikte kartta okunacak cümleyi iletebilirsiniz.",
    ],
  },
  "balat": {
    description:
      "Balat’a çiçek gönderimi. Balat, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Balat, Nilüfer’in merkez mahallelerindendir. Cumartesi günleri Bağ Sokak’ta kapalı semt pazarı kurulur. Bağ Sokak’ta Balat Meydanı, Ahi Evran Caddesi’nde Balat Atatürk Ormanı bulunur.",
      "Çiçek, Balat adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Balat çiçeği, ambalajı bozulmadan teslim edilir. Balat’a gidecek kartın metnini siz belirlersiniz. Bağ Sokak ve Ahi Evran Caddesi adreslerinde sokak adı yazılır.",
      "Doğum günü ve yıl dönümünde Balat evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, Balat adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "besevler": {
    description:
      "Beşevler’e çiçek gönderimi. Beşevler, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Beşevler, Nilüfer’in merkez mahallelerindendir. Cumartesi günleri Beydağı Sokak’ta kapalı semt pazarı kurulur. Seyran Sokak’ta Prof. Dr. H. Ruhi Ekingen Parkı ve mahallede Buket Parkı bulunur.",
      "Beşevler’e çiçek gönderiminde teslimat evde, iş yerinde veya hastanede olur. Beşevler için seçilen düzen atölyede tamamlanır, ambalaj ayrıca korunur. Kısa dilek, Beşevler siparişinin kartında sizin sözünüzle durur. Beydağı Sokak ya da Seyran Sokak adresinde sokak adı açık yazılır.",
      "Doğum günü ve yıl dönümünde Beşevler evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Karttaki cümleyi ve Beşevler adresini WhatsApp mesajına yazmanız yeterli.",
    ],
  },
  "cekirge": {
    description:
      "Çekirge’ye çiçek gönderimi. Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir. Hüdavendigar Külliyesi buradadır; semt Hüdavendigar ve I. Murat adlarıyla da anılmıştır. Mevlid yazarı Süleyman Çelebi’nin mezarı, Lâmi Çelebi Mescidi ve Karagöz ile Hacivat’ın temsilî mezarı da bu mahallededir.",
      "Çekirge’ye çiçek ev, iş yeri veya hastane adresine hazırlanır. Çekirge siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Çekirge siparişinde siz yazarsınız. Kaplıca, konak ya da apartman adresinde bina adı açık yazılır.",
      "Kaplıca ziyaretine Çekirge için [buket](/magaza/buketler) götürülür. Konakta duracak bir bitki [orkide](/magaza/orkideler) olur. Masaya [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Çekirge adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "heykel": {
    description:
      "Heykel’e çiçek gönderimi. Heykel, Osmangazi Belediyesi’nin mahalle listesinde ayrı bir ad olarak yer almaz.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Heykel, Osmangazi Belediyesi’nin mahalle listesinde ayrı bir ad olarak yer almaz. Bursa’da bu ad, Atatürk heykelinin bulunduğu Hükümet Meydanı çevresi için kullanılır.",
      "Çiçek, Heykel adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Heykel çiçeği, ambalajı bozulmadan teslim edilir. Heykel’e gidecek kartın metnini siz belirlersiniz. Hükümet Meydanı çevresindeki adreste bina adı yazılır.",
      "Heykel içindeki bir iş yerine [kutu çiçek](/magaza/kutular) uygundur. Ziyarete [buket](/magaza/buketler), kalıcı bitkiye [orkide](/magaza/orkideler) eşlik eder. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Heykel adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  "demirtas": {
    description:
      "Demirtaş’a çiçek gönderimi. Demirtaş, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’ye bağlı bir mahalledir. Bir dönem ayrı belediyeydi; eski belediye binası bugün halk eğitim merkezi olarak kullanılır. TOFAŞ fabrikası bu semttedir.",
      "Demirtaş’a çiçek ev, iş yeri veya hastane adresine hazırlanır. Demirtaş siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Demirtaş siparişinde siz yazarsınız. Fabrika ya da iş yeri siparişinde firma adı ve alıcının adı yazılır.",
      "Demirtaş adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan mahalle adını Demirtaş diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  "soganli": {
    description:
      "Soğanlı’ya çiçek gönderimi. Soğanlı, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Soğanlı, Osmangazi’ye bağlı bir mahalledir. Osmangazi Belediyesi’nin Soğanlı Millet Bahçesi burada kurulmuştur; meyve bahçeleri, çocuk oyun alanları ve spor sahaları bu bahçededir.",
      "Soğanlı’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Soğanlı siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Soğanlı siparişinde siz yazarsınız. Soğanlı adresinde mahalle adı ve kapı numarası yeter.",
      "Soğanlı evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Soğanlı adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "hamitler": {
    description:
      "Hamitler’e çiçek gönderimi. Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır. Şehrin en büyük mezarlığı olan Hamitler Mezarlığı bu mahallededir.",
      "Çiçek, Hamitler adresine ev, iş yeri veya hastane için hazırlanır. Atölyede taze hazırlanan Hamitler çiçeği, ambalajı bozulmadan teslim edilir. Hamitler’e gidecek kartın metnini siz belirlersiniz. Mezarlık ziyaretinde isim, iş yeri adresinde firma adı ayrıca yazılır.",
      "Hamitler Mezarlığı için [çelenk](/magaza/celenkler) hazırlanır; kurdele metnini siz yazarsınız. Eve gidecek ziyarette [buket](/magaza/buketler) seçilir. Evde duracak bitki [orkide](/magaza/orkideler), küçük armağan [kutu çiçek](/magaza/kutular) olur.",
      "Alıcının adını, Hamitler adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "erikli": {
    description:
      "Erikli’ye çiçek gönderimi. Erikli, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Erikli, Yıldırım’a bağlı bir mahalledir. 3. Cadde’de Erikli Kapalı Yüzme Havuzu vardır. 2024’te açılan Erikli Aile Sağlığı Merkezi de bu mahallededir.",
      "Erikli için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Erikli için atölyede taze tutulur ve özenli ambalajlanır. Erikli kartındaki cümle size aittir. 3. Cadde adresinde cadde adı yazılır.",
      "Doğum günü ve yıl dönümünde Erikli evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Erikli için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  "millet": {
    description:
      "Millet’e çiçek gönderimi. Millet, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Millet, Yıldırım’a bağlı bir mahalledir. Yıldırım Belediyesi burada 3111 ada kentsel dönüşüm projesi yürütür; planda konutla birlikte bir çarşı alanı vardır.",
      "Millet için hazırlanan çiçek eve, iş yerine ya da hastaneye gider. Düzen, Millet için atölyede taze tutulur ve özenli ambalajlanır. Millet kartındaki cümle size aittir. Siparişte Millet adının yanında kapı numarasını da yazmanız yeter.",
      "Doğum günü ve yıl dönümünde Millet evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Millet için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  "arabayatagi": {
    description:
      "Arabayatağı’ya çiçek gönderimi. Arabayatağı, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Arabayatağı, Yıldırım’a bağlı bir mahalledir. 93 Harbi’nden sonra göç edenlerin kurduğu bir köydü; Yıldırım ilçe olunca mahalle olmuştur. Güneyinde Ankara Caddesi vardır. Bu cadde girişinde Arabayatağı Fırını bilinir ve mahallenin güneyinden BursaRay geçer.",
      "Arabayatağı’ya çiçek ev, iş yeri veya hastane adresine hazırlanır. Arabayatağı siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Arabayatağı siparişinde siz yazarsınız. Ankara Caddesi adresinde cadde adı yazılır.",
      "Doğum gününde Arabayatağı evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Arabayatağı adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "esenevler": {
    description:
      "Esenevler’e çiçek gönderimi. Esenevler, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Esenevler, Yıldırım’a bağlı bir mahalledir. Erdoğan Caddesi ile 2. Cadde, belediyenin yol çalışmasında Ankara Yolu’na bağlanan güzergâh olarak geçer. Bu hat Yiğitler ve 75. Yıl mahallelerinin de ulaşımındadır.",
      "Esenevler’e çiçek ev, iş yeri veya hastane adresine hazırlanır. Esenevler siparişi atölyede taze kurulur; ambalaj yola çıkana kadar korunur. Kart notunu Esenevler siparişinde siz yazarsınız. Erdoğan Caddesi adresinde cadde adı yazılır.",
      "Esenevler evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını Esenevler diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
};
