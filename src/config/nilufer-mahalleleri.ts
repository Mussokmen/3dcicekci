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
      "Barış’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Aslanbey Sokak ve Gazi Osman Paşa Caddesi adreslerinde sokak adı ayrıca yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir.",
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
      "Cumhuriyet için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Mavi Sokak adresinde kapalı pazarın hangi günü olduğu siparişte belirtilir. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çiçek Fethiye’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ulu Caddesi, Hüseyin Ormanlı Caddesi ya da Fatih Sokak geçiyorsa sokak adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Esentepe’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. İskan Sokak ve Tuna Caddesi adreslerinde sokak adı ayrıca istenir. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir.",
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
      "Konak için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Seçkin Sokak adresinde pazarın hangi günü kurulduğu birlikte yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Kültür’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Bolu Sokak çevresindeki apartmanlarda blok ve daire istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Çiçek Karaman’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Tuna Caddesi ve Fulya Sokak adreslerinde cadde adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Üçevler için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Dumlupınar Caddesi ya da Nilüfer Caddesi geçiyorsa cadde adı yazılır. İş yerinde firma adı ve alıcı birlikte durur.",
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
      "Çiçek Altınşehir’e ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. 233. Sokak adresinde sokak numarası ayrıca yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çiçek 23 Nisan’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Araslı Sokak ya da Karacaoğlan Caddesi adresinde sokak adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "29 Ekim’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Uğur Mumcu Bulvarı adresinde bulvar adı ayrıca yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "19 Mayıs’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Side Caddesi adresinde kapalı pazarın günü birlikte belirtilir. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çiçek Yüzüncüyıl’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Erdal İnönü Caddesi ya da İzmir Yolu tarafındaki adreste cadde adı yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çiçek Dumlupınar’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Fevzi Çakmak Caddesi adresinde cadde adı açık yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Balkan için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Atatürk Bulvarı ya da Mevlana Sokak adresinde cadde adı yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Kurtuluş’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Armutlu Caddesi adresinde cadde adı, okul siparişinde alıcının adı yazılır.",
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
      "30 Ağustos Zafer’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Fatih Caddesi geçiyorsa mahalle adı 30 Ağustos Zafer olarak yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çiçek Minareliçavuş’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Merkez Sokak ve Selvi Caddesi adreslerinde sokak adı açık yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Alaaddinbey’e çiçek gönderimi. Alaaddinbey, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Alaaddinbey, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Alaaddinbey’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Ahmet Yesevi’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Hürriyet Caddesi ya da Atabey Sokak adresinde sokak adı yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Kızılcıklı’ya çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Pazar Caddesi ya da Kemerli Sokak adresinde cadde adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Demirci’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Karamel Sokak adresinde sokak adı ayrıca yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Çiçek Işıktepe’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Mor Sokak ve Eflatun Caddesi adreslerinde sokak adı yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Akçalar’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Pazar Sokak adresinde mahalle adı Akçalar olarak yazılır. Ev adresinde kapı numarası da yazılır.",
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
      "Çiçek Atlas’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Çalı-Kadriye yolu üzerindeki ev adresinde sokak ve kapı birlikte yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Ayvaköy’e çiçek gönderimi. Ayvaköy, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Ayvaköy, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Ayvaköy için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Badırga’ya çiçek gönderimi. Badırga, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Badırga, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Badırga’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Başköy’e çiçek gönderimi. Başköy, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Başköy, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Başköy için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Büyükbalıklı, Nilüfer’in kırsal mahallelerindendir. Eski adı Görükle Büyükbalıklı’dır.",
      "Büyükbalıklı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde mahalle adı Büyükbalıklı olarak yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Çalı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Sanayi sitesindeki iş yeri siparişinde firma adı, ev adresinde sokak yazılır.",
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
      "Çatalağıl’a çiçek gönderimi. Çatalağıl, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Çatalağıl, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çatalağıl’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Çaylı’ya çiçek gönderimi. Çaylı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Çaylı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çaylı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Dağyenice’ye çiçek gönderimi. Dağyenice, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Dağyenice, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Dağyenice’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Doğanköy’e çiçek gönderimi. Doğanköy, Nilüfer’e bağlı bir mahalledir.",
    body: [
      "Doğanköy, Nilüfer’e bağlı bir mahalledir. Gümüş Caddesi ve Göçmen Caddesi’nde çocuk parkları bulunur.",
      "Doğanköy’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Gümüş Caddesi ile Göçmen Caddesi adreslerinde cadde adı açık yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Fadıllı’ya çiçek gönderimi. Fadıllı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Fadıllı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Fadıllı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Çiçek Gökçe’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Gölyazı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ada kesimindeki ev için sokak ve kapı numarası birlikte istenir.",
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
      "Çiçek Gümüştepe’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Orhaneli yolu üzerindeki ev adresinde sokak ve kapı birlikte yazılır. Teslimden önce alıcıya haber verilir.",
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
      "Güngören’e çiçek gönderimi. Güngören, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Güngören, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Güngören’e ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Hasanağa’ya çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Cumhuriyet Caddesi adresinde cadde adı açık yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir.",
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
      "İnegazi’ye çiçek gönderimi. İnegazi, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "İnegazi, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek İnegazi’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "İrfaniye için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Görükle adresinden ayrı durması için mahalle adı İrfaniye yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır.",
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
      "Kadriye’ye çiçek gönderimi. Kadriye, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Kadriye, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Kadriye için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Karacaoba’ya çiçek gönderimi. Karacaoba, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Karacaoba, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Karacaoba’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Çiçek Kayapa’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Fevzi Çakmak Caddesi geçiyorsa mahalle adı Kayapa olarak yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir.",
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
      "Konaklı’ya çiçek gönderimi. Konaklı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Konaklı, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Konaklı’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Korubaşı, Nilüfer’in kırsal mahallelerindendir. Eski adı Balyaz’dır.",
      "Çiçek Korubaşı’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde mahalle adı Korubaşı olarak yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Kuruçeşme’ye çiçek gönderimi. Kuruçeşme, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Kuruçeşme, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Kuruçeşme’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Maksempınar’a çiçek gönderimi. Maksempınar, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Maksempınar, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Maksempınar’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
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
      "Çiçek Tahtalı’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Çınar Sokak ve meydan çevresindeki ev adresinde sokak adı yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir.",
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
      "Unçukuru’ya çiçek gönderimi. Unçukuru, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Unçukuru, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Unçukuru’ya çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Üçpınar’a çiçek gönderimi. Üçpınar, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
    body: [
      "Üçpınar, Bursa’nın Nilüfer ilçesinde kırsal bir mahalledir.",
      "Çiçek Üçpınar’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
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
      "Ürünlü’ye çiçek gönderimi. Ürünlü, Nilüfer’in kırsal mahallelerindendir.",
    body: [
      "Ürünlü, Nilüfer’in kırsal mahallelerindendir. Ürünlü Caddesi’nde Ürünlü İlkokulu bulunur.",
      "Çiçek Ürünlü’ye ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ürünlü Caddesi adresinde cadde adı açık yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Yaylacık, Nilüfer’in kırsal mahallelerindendir. Mahallede Yaylacık İlkokulu bulunur.",
      "Çiçek Yaylacık’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Okul ya da ev adresinde alıcının adı ve sokak birlikte yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Yolçatı, Nilüfer’in kırsal mahallelerindendir. Çelebi Sokak’ta Yolçatı Parkı bulunur.",
      "Yolçatı’ya çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Çelebi Sokak adresinde sokak adı açık yazılır. Ev adresinde kapı numarası da yazılır. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir.",
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
      "İhsaniye, Nilüfer’in merkez mahallelerindendir. Ahmet Vefik Paşa Caddesi’ndeki kapalı pazarda cumartesi günleri semt pazarı ve giyim pazarı kurulur. Aynı yerde ayda bir el emeği pazarı ve antika pazarı da açılır.",
      "İhsaniye için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ahmet Vefik Paşa Caddesi adresinde cadde adı ve daire numarası yazılır.",
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
      "Özlüce için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Özer Sokak adresinde sokak adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
      "Özlüce evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Özlüce adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  "fsm": {
    description:
      "FSM’ye çiçek gönderimi. FSM, Nilüfer’e bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "FSM, Nilüfer’e bağlı bir mahalledir.",
      "FSM’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
      "Doğum günü ve yıl dönümünde FSM evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Alıcının adını, FSM adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "camlica": {
    description:
      "Çamlıca’ya çiçek gönderimi. Çamlıca, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çamlıca, Nilüfer’in merkez mahallelerindendir. Kavakdere Caddesi ile Ardalı Sokak’taki kapalı pazarda çarşamba semt pazarı ve cumartesi üretici pazarı kurulur. Japon Parkı ve Azerbaycan Parkı mahalledeki açık alanlardandır.",
      "Çiçek Çamlıca’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Kavakdere Caddesi adresinde cadde adı yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir.",
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
      "Çiçek Odunluk’a ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Odunluk Caddesi ya da Orhangazi Caddesi adresinde cadde adı yazılır. Apartman adresinde blok ve daire numarası istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir.",
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
      "Ertuğrul’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. 153. Sokak ve Emek Sokak adreslerinde sokak numarası açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Görükle için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Yurt siparişinde alıcının adı ve blok, iş yerinde firma adı yazılır.",
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
      "Ataevler için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Site adresinde blok ve daire, Yılmaz Akkılıç Caddesi geçiyorsa cadde adı yazılır.",
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
      "Balat’a çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Bağ Sokak ve Ahi Evran Caddesi adreslerinde sokak adı yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Beşevler’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Beydağı Sokak ya da Seyran Sokak adresinde sokak adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
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
      "Çekirge’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Kaplıca, konak ya da apartman adresinde bina adı açık yazılır. Apartman adresinde blok ve daire numarası istenir.",
      "Kaplıca ziyaretine Çekirge için [buket](/magaza/buketler) götürülür. Konakta duracak bir bitki [orkide](/magaza/orkideler) olur. Masaya [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Çekirge adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "heykel": {
    description:
      "Heykel’e çiçek gönderimi. Heykel, Bursa’nın Osmangazi ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Heykel, Bursa’nın Osmangazi ilçesine bağlı bir mahalledir.",
      "Çiçek Heykel’e ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
      "Doğum gününde Heykel evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Beğendiğiniz düzeni WhatsApp’tan, Heykel adresiyle birlikte haber verebilirsiniz.",
    ],
  },
  "demirtas": {
    description:
      "Demirtaş’a çiçek gönderimi. Demirtaş, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’ye bağlı bir mahalledir. Bir dönem ayrı belediyeydi; eski belediye binası bugün halk eğitim merkezi olarak kullanılır. TOFAŞ fabrikası bu semttedir.",
      "Demirtaş için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Fabrika ya da iş yeri siparişinde firma adı ve alıcının adı yazılır. Teslimden önce alıcıya haber verilir.",
      "Demirtaş adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "WhatsApp’tan mahalle adını Demirtaş diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
  "soganli": {
    description:
      "Soğanlı’ya çiçek gönderimi. Soğanlı, Bursa’nın Osmangazi ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Soğanlı, Bursa’nın Osmangazi ilçesine bağlı bir mahalledir.",
      "Soğanlı için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır.",
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
      "Hamitler için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Mezarlık ziyaretinde isim, iş yeri adresinde firma adı ayrıca yazılır. Teslimden önce alıcıya haber verilir. Kurdele yazısı, anma siparişinde ayrıca istenir.",
      "Hamitler Mezarlığı için [çelenk](/magaza/celenkler) hazırlanır; kurdele metnini siz yazarsınız. Eve gidecek ziyarette [buket](/magaza/buketler) seçilir. Evde duracak bitki [orkide](/magaza/orkideler), küçük armağan [kutu çiçek](/magaza/kutular) olur.",
      "Alıcının adını, Hamitler adresini ve kart notunu WhatsApp’tan yazmanız yeterli.",
    ],
  },
  "erikli": {
    description:
      "Erikli’ye çiçek gönderimi. Erikli, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Erikli, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
      "Erikli’ye çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
      "Doğum günü ve yıl dönümünde Erikli evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Erikli için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  "millet": {
    description:
      "Millet’e çiçek gönderimi. Millet, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Millet, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
      "Millet’e çiçek gönderiminde teslimat eve, siteye veya iş yerine yapılır. Düzen atölyede taze hazırlanır. Kart notunu siz belirlersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
      "Doğum günü ve yıl dönümünde Millet evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Millet için seçtiğiniz çiçeği ve kart notunu WhatsApp’tan gönderebilirsiniz.",
    ],
  },
  "arabayatagi": {
    description:
      "Arabayatağı’ya çiçek gönderimi. Arabayatağı, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Arabayatağı, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
      "Çiçek Arabayatağı’ya ev, site veya iş yeri için hazırlanır. Hazırlık atölyede yapılır. Karttaki sözü siz seçersiniz. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur. İlçe adı mahalle adıyla birlikte yazılır. Çiçeğin kime gideceği siparişte belirtilir.",
      "Doğum gününde Arabayatağı evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Arabayatağı adresini ve kart notunu WhatsApp’tan yazabilirsiniz.",
    ],
  },
  "esenevler": {
    description:
      "Esenevler’e çiçek gönderimi. Esenevler, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Esenevler, Bursa’nın Yıldırım ilçesine bağlı bir mahalledir.",
      "Esenevler için çiçek ev, site ya da iş yeri adresine hazırlanır. Buket atölyede taze tutulur. Karta yazılacak cümle sizindir. Ev adresinde sokak ve kapı numarası birlikte istenir. Teslimden önce alıcıya haber verilir. İş yeri siparişinde firma adı da yazılır. Kurdele yazısı, anma siparişinde ayrıca istenir. Alıcının adı siparişte ayrıca durur.",
      "Esenevler evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "WhatsApp’tan mahalle adını Esenevler diye, kapı numarasını ve kart notunu yazabilirsiniz.",
    ],
  },
};
