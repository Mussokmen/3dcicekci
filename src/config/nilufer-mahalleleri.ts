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
      "Barış’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Barış evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Cumhuriyet’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Cumhuriyet evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Fethiye’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Fethiye evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Esentepe’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Esentepe evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Konak’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Konak evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Kültür’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Kültür evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Karaman’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Karaman evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Üçevler çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Üçevler adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Altınşehir’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Altınşehir evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "23 Nisan’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde 23 Nisan evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "29 Ekim’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde 29 Ekim evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "19 Mayıs’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde 19 Mayıs evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Yüzüncüyıl’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Yüzüncüyıl evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Dumlupınar’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Dumlupınar evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Balkan’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Balkan evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Kurtuluş’taki yurt, site ve evlere çiçek gönderebilirsiniz. Mezuniyet, doğum günü ve tebrik siparişleri atölyemizde taze hazırlanır ve özenle paketlenir. Kartınıza yazmak istediğiniz cümleyi eklememiz yeterlidir.",
      "Doğum günü ve yıl dönümünde Kurtuluş evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "30 Ağustos Zafer’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde 30 Ağustos Zafer evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Minareliçavuş’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Minareliçavuş evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Alaaddinbey’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Alaaddinbey’e [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Ahmet Yesevi’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Ahmet Yesevi evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Kızılcıklı’ya çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Kızılcıklı evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Demirci’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Demirci’ye [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Işıktepe’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Işıktepe evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Akçalar’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Akçalar’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Atlas, Nilüfer’in kırsal mahallelerindendir. İlçenin güneybatısında, Çalı-Kadriye yolu üzerinde ve kent merkezine 26 kilometre uzaktadır. Osmanlı defterlerinde eski adı Atlaslı olarak geçer.",
      "Atlas’taki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Atlas evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Ayvaköy, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 44 kilometre uzaklıktadır. Ayvaini Mağarası’nın bir girişi bu mahallenin yakınındadır.",
      "Ayvaköy’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Ayvaköy evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Badırga, Nilüfer’in kırsal mahallelerindendir. Bursa merkezine 40 kilometre, Nilüfer ilçe merkezine 31 kilometre, İzmir yolu asfaltına 6 kilometre uzaklıktadır.",
      "Badırga’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Badırga evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Başköy’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Başköy evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Büyükbalıklı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Büyükbalıklı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Çalı çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Çalı adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Çatalağıl’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Çatalağıl’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Çaylı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Çaylı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Dağyenice’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Dağyenice evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Doğanköy’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Doğum günü ve yıl dönümünde Doğanköy evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Fadıllı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Fadıllı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Gökçe’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Gökçe evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Gölyazı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Gölyazı evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Gümüştepe’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Gümüştepe evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Güngören’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Güngören evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Hasanağa’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Hasanağa’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "İnegazi’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "İnegazi evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "İrfaniye’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "İrfaniye evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Kadriye’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Kadriye evine aile ziyaretinde [buket](/magaza/buketler) götürülür. Bayramda evde kalacak bitki [orkide](/magaza/orkideler) olur. Sofraya [kutu çiçek](/magaza/kutular) bırakılır. Cenaze ve anmada [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Karacaoba’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Karacaoba evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Kayapa’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Kayapa evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Konaklı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Konaklı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Korubaşı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Korubaşı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Kuruçeşme’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Kuruçeşme evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Maksempınar’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Maksempınar’a [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Tahtalı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Tahtalı evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Unçukuru, Nilüfer’in kırsal mahallelerindendir. Bursa il merkezine 37 kilometre, Nilüfer ilçe merkezine 29 kilometre uzaklıktadır.",
      "Unçukuru’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Unçukuru’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Üçpınar’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Üçpınar evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Ürünlü’deki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Ürünlü evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Yaylacık’taki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Yaylacık evine bayramlık [buket](/magaza/buketler) yakışır. Saksıda duracak [orkide](/magaza/orkideler), elde götürülecek [kutu çiçek](/magaza/kutular) ayrı seçilir. Anma gününün çiçeği [çelenk](/magaza/celenkler) olur.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "Yolçatı’daki yakınlarınıza bayram, ziyaret ve özel günler için çiçek gönderebilirsiniz. Siparişiniz atölyemizde taze hazırlanır ve yolda bozulmaması için özenle paketlenir. Dilerseniz kısa bir kart notu ekleriz.",
      "Bayramda ve aile ziyaretinde Yolçatı’ya [buket](/magaza/buketler) götürülür. Evde duracak bitki için [orkide](/magaza/orkideler) seçilir. Küçük armağan [kutu çiçek](/magaza/kutular) olur. Anma için [çelenk](/magaza/celenkler) bağlanır; kurdele metnini siz yazarsınız.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
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
      "İhsaniye’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "İhsaniye evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "ozluce": {
    description:
      "Özlüce’ye çiçek gönderimi. Özlüce, Nilüfer’e bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Özlüce, Nilüfer’e bağlı bir mahalledir. 19 Mayıs ve Yüzüncüyıl bu mahalleden ayrılan kesimlerdir; Yüzüncüyıl’ın kuzeyinde kalır. Çarşamba günleri Özer Sokak’ta semt pazarı kurulur. İnesi Parkı mahalledeki parklardan biridir.",
      "Özlüce’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Özlüce evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "fsm": {
    description:
      "FSM’ye çiçek gönderimi. FSM, Nilüfer’de Fatih Sultan Mehmet Bulvarı çevresi için kullanılan kısa addır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "FSM, Nilüfer’de Fatih Sultan Mehmet Bulvarı çevresi için kullanılan kısa addır. Bulvar İhsaniye Mahallesi’ndedir ve İzmir Yolu’nu Mudanya yoluna bağlar. Üzerinde hastaneler, muayenehaneler ve iş yerleri sıralanır.",
      "FSM çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "FSM içinde bir açılışta [kutu çiçek](/magaza/kutular) ya da [buket](/magaza/buketler) düşünülür. Masada duracak bitki için [orkide](/magaza/orkideler) seçilir. Eve gidecek doğum gününde [buket](/magaza/buketler) de uygundur. Anma için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "camlica": {
    description:
      "Çamlıca’ya çiçek gönderimi. Çamlıca, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çamlıca, Nilüfer’in merkez mahallelerindendir. Kavakdere Caddesi ile Ardalı Sokak’taki kapalı pazarda çarşamba semt pazarı ve cumartesi üretici pazarı kurulur. Japon Parkı ve Azerbaycan Parkı mahalledeki açık alanlardandır.",
      "Çamlıca’ya çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Çamlıca evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "odunluk": {
    description:
      "Odunluk’a çiçek gönderimi. Odunluk, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Odunluk, Nilüfer’in merkez mahallelerindendir. Odunluk Caddesi’nde Hüdavendigar spor tesisleri, Orhangazi Caddesi’nde bir eğitim alanı bulunur.",
      "Odunluk’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Odunluk evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "ertugrul": {
    description:
      "Ertuğrul’a çiçek gönderimi. Ertuğrul, Nilüfer’de Bursa-Karacabey yolu üzerinde bir mahalledir ve Yüzüncüyıl’ın doğusunda, 29 Ekim’in yanında yer alır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ertuğrul, Nilüfer’de Bursa-Karacabey yolu üzerinde bir mahalledir ve Yüzüncüyıl’ın doğusunda, 29 Ekim’in yanında yer alır. Eski adı Çayırköy’dür. Çarşamba günleri 153. Sokak’ta semt pazarı kurulur. Emek Sokak’ta Zeki Müren Lisesi bulunur.",
      "Ertuğrul’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Ertuğrul evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "gorukle": {
    description:
      "Görükle’ye çiçek gönderimi. Görükle, Nilüfer’de Bursa-İzmir karayolunun hemen yanında, ağırlıklı olarak öğrencilerin yaşadığı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Görükle, Nilüfer’de Bursa-İzmir karayolunun hemen yanında, ağırlıklı olarak öğrencilerin yaşadığı bir mahalledir. Cumhuriyet öncesinde Rum köyüydü; mübadeleden sonra Uludağ Üniversitesi’nin ana yerleşkesi köy merası üzerine kurulunca yurtların bulunduğu bir kentsel alana döndü. Kuzeyinde Nilüfer Çayı, batısında İrfaniye, güneyinde Fevzi Çakmak Caddesi ile İzmir Yolu, doğusunda üniversite arazisi bulunur. Yerleşim Caddesi mahallenin bilinen caddesidir; Rıza Ağa Mübadele Kahvesi ile yanındaki Mübadele Evi 2016’da açılmıştır. Portakal Sokak’taki kapalı pazarda salı günü üretici, cuma günü giyim, cumartesi günü semt pazarı kurulur.",
      "Görükle’deki yurt, site ve evlere çiçek gönderebilirsiniz. Mezuniyet, doğum günü ve tebrik siparişleri atölyemizde taze hazırlanır ve özenle paketlenir. Kartınıza yazmak istediğiniz cümleyi eklememiz yeterlidir.",
      "Mezuniyet ve doğum gününde Görükle için [buket](/magaza/buketler) istenir. Öğrenci odasında duracak bir bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Tören ve anma için [çelenk](/magaza/celenkler) kurdele metniyle hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "ataevler": {
    description:
      "Ataevler’e çiçek gönderimi. Ataevler, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ataevler, Nilüfer’in merkez mahallelerindendir. Pazar günleri Yılmaz Akkılıç Caddesi’nde kapalı semt pazarı kurulur. Aynı caddede Yılmaz Akkılıç Parkı, Nene Hatun Caddesi’nde Gezi Parkı, Selçukbey Sokak’ta Naim Süleymanoğlu Dinlenme Parkı bulunur.",
      "Ataevler’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Ataevler evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "balat": {
    description:
      "Balat’a çiçek gönderimi. Balat, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Balat, Nilüfer’in merkez mahallelerindendir. Cumartesi günleri Bağ Sokak’ta kapalı semt pazarı kurulur. Bağ Sokak’ta Balat Meydanı, Ahi Evran Caddesi’nde Balat Atatürk Ormanı bulunur.",
      "Balat’a çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Balat evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "besevler": {
    description:
      "Beşevler’e çiçek gönderimi. Beşevler, Nilüfer’in merkez mahallelerindendir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Beşevler, Nilüfer’in merkez mahallelerindendir. Cumartesi günleri Beydağı Sokak’ta kapalı semt pazarı kurulur. Seyran Sokak’ta Prof. Dr. H. Ruhi Ekingen Parkı ve mahallede Buket Parkı bulunur.",
      "Beşevler’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Beşevler evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "cekirge": {
    description:
      "Çekirge’ye çiçek gönderimi. Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir. Hüdavendigar Külliyesi buradadır; semt Hüdavendigar ve I. Murat adlarıyla da anılmıştır. Mevlid yazarı Süleyman Çelebi’nin mezarı, Lâmi Çelebi Mescidi ve Karagöz ile Hacivat’ın temsilî mezarı da bu mahallededir.",
      "Çekirge’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Kaplıca ziyaretine Çekirge için [buket](/magaza/buketler) götürülür. Konakta duracak bir bitki [orkide](/magaza/orkideler) olur. Masaya [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "heykel": {
    description:
      "Heykel’e çiçek gönderimi. Heykel, Bursa’nın tarihî merkezinde, Atatürk heykelinin bulunduğu Hükümet Meydanı ve çevresine verilen addır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Heykel, Bursa’nın tarihî merkezinde, Atatürk heykelinin bulunduğu Hükümet Meydanı ve çevresine verilen addır. Anıtı heykeltıraş Nijat Sirel yapmıştır; 29 Ekim 1931’de açılmıştır. Bronz heykel, mermer kaide üzerinde atlı bir kumandan olarak durur.",
      "Heykel çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Heykel içindeki bir iş yerine [kutu çiçek](/magaza/kutular) uygundur. Ziyarete [buket](/magaza/buketler), kalıcı bitkiye [orkide](/magaza/orkideler) eşlik eder. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "demirtas": {
    description:
      "Demirtaş’a çiçek gönderimi. Demirtaş, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’ye bağlı bir mahalledir. Bir dönem ayrı belediyeydi; eski belediye binası bugün halk eğitim merkezi olarak kullanılır. TOFAŞ fabrikası bu semttedir.",
      "Demirtaş çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Demirtaş adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "soganli": {
    description:
      "Soğanlı’ya çiçek gönderimi. Soğanlı, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Soğanlı, Osmangazi’ye bağlı bir mahalledir. Osmangazi Belediyesi’nin Soğanlı Millet Bahçesi burada kurulmuştur; meyve bahçeleri, çocuk oyun alanları ve spor sahaları bu bahçededir.",
      "Soğanlı’ya çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Soğanlı evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "hamitler": {
    description:
      "Hamitler’e çiçek gönderimi. Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır. Şehrin en büyük mezarlığı olan Hamitler Mezarlığı bu mahallededir.",
      "Hamitler’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Hamitler Mezarlığı için [çelenk](/magaza/celenkler) hazırlanır; kurdele metnini siz yazarsınız. Eve gidecek ziyarette [buket](/magaza/buketler) seçilir. Evde duracak bitki [orkide](/magaza/orkideler), küçük armağan [kutu çiçek](/magaza/kutular) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "erikli": {
    description:
      "Erikli’ye çiçek gönderimi. Erikli, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Erikli, Yıldırım’a bağlı bir mahalledir. 3. Cadde’de Erikli Kapalı Yüzme Havuzu vardır. 2024’te açılan Erikli Aile Sağlığı Merkezi de bu mahallededir.",
      "Erikli’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Erikli evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "millet": {
    description:
      "Millet’e çiçek gönderimi. Millet, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Millet, Yıldırım’a bağlı bir mahalledir. Yıldırım Belediyesi burada 3111 ada kentsel dönüşüm projesi yürütür; planda konutla birlikte bir çarşı alanı vardır.",
      "Millet’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum günü ve yıl dönümünde Millet evine [buket](/magaza/buketler) gider. Evde kalacak bitki için [orkide](/magaza/orkideler) uygundur. Masaya küçük bir [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Sipariş vermek için WhatsApp düğmesini kullanabilirsiniz.",
    ],
  },
  "arabayatagi": {
    description:
      "Arabayatağı’ya çiçek gönderimi. Arabayatağı, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Arabayatağı, Yıldırım’a bağlı bir mahalledir. 93 Harbi’nden sonra göç edenlerin kurduğu bir köydü; Yıldırım ilçe olunca mahalle olmuştur. Güneyinde Ankara Caddesi vardır. Bu cadde girişinde Arabayatağı Fırını bilinir ve mahallenin güneyinden BursaRay geçer.",
      "Arabayatağı’ya çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Doğum gününde Arabayatağı evine [buket](/magaza/buketler) götürülür. Birkaç gün duracak [orkide](/magaza/orkideler) ya da [kutu çiçek](/magaza/kutular) de seçilebilir. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  "esenevler": {
    description:
      "Esenevler’e çiçek gönderimi. Esenevler, Yıldırım’a bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Esenevler, Yıldırım’a bağlı bir mahalledir. Erdoğan Caddesi ile 2. Cadde, belediyenin yol çalışmasında Ankara Yolu’na bağlanan güzergâh olarak geçer. Bu hat Yiğitler ve 75. Yıl mahallelerinin de ulaşımındadır.",
      "Esenevler’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Esenevler evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
};
