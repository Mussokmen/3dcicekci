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
      "Nilüfer Barış çiçek siparişi: apartman ve site kapısına buket, orkide ve kutu. Barış’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Barış, Nilüfer’in doğu yakasında, apartmanların ve sitelerin bir arada bulunduğu bir konut mahallesidir. Caddeye bakan binalarla site içindeki bloklar aynı mahallede yaşar. Zemin katlarda zaman zaman küçük iş yerleri görülür; üst katlar ise eve dönüşün adresidir. Günlük hayat evlerin içinde akar.",
      "Cumhuriyet, Esentepe, Konak ve Kültür yakın çevrededir. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Barış çiçekçi hizmeti, Barış’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "cumhuriyet",
    shortName: "Cumhuriyet",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["baris", "19-mayis", "esentepe", "karaman"],
    description:
      "Nilüfer Cumhuriyet çiçek siparişi: daire ve ofis için orkide ile buket. Cumhuriyet’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Cumhuriyet, Nilüfer’in doğusunda yerleşik bir konut mahallesidir. Mahalle, doğu Nilüfer’in tanıdık apartman çevresindedir. Akşamüstü ziyaretler ve masa üstü hediyeler burada sık görülür.",
      "Barış, 19 Mayıs, Esentepe ve Karaman yakın çevrededir. Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Nilüfer Cumhuriyet çiçek siparişi, mahallenin kendi hayatına uyar. Cumhuriyet çiçekçi olarak Cumhuriyet’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "fethiye",
    shortName: "Fethiye",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ertugrul", "ozluce", "kultur", "konak"],
    description:
      "Nilüfer Fethiye çiçek siparişi: site ve cadde üzerindeki dairelere buket, orkide ve kutu. Fethiye’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Fethiye, Nilüfer’in doğu yakasında, Ertuğrul ve Özlüce’ye komşu bir konut mahallesidir. Cadde üzerindeki binalarda zemin katlarda küçük dükkânlar, üst katlarda daireler görülür. Mahalle, Bursa’nın batısındaki yerleşik konut hayatının içindedir.",
      "Kültür ve Konak yakın çevrededir. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Fethiye’ye çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Fethiye çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "esentepe",
    shortName: "Esentepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cumhuriyet", "konak", "altinsehir", "karaman"],
    description:
      "Nilüfer Esentepe çiçek siparişi: blok ve cadde apartmanına buket ile orkide. Esentepe’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Esentepe, Nilüfer’in doğusunda, yeni bloklarla cadde üzerindeki daha eski apartmanların bir arada durduğu bir konut mahallesidir. Mahalle, doğu Nilüfer’in yerleşik hayatının parçasıdır. Aile ziyaretleri, küçük kutlamalar ve ofis masasına bırakılan hediyeler burada yan yana gelir.",
      "Cumhuriyet, Konak, Altınşehir ve Karaman yakın çevrededir. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Esentepe çiçekçi hizmeti, Esentepe’ye çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "konak",
    shortName: "Konak",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ihsaniye", "kultur", "baris", "esentepe"],
    description:
      "Nilüfer Konak çiçek siparişi: İhsaniye ve Kültür çevresinde daire ile iş yerine kutu ve buket. Konak’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Konak, İhsaniye ve Kültür’e yakın, cadde üzerindeki adreslerin sıklaştığı bir Nilüfer mahallesidir. İş yeri katı ile daire girişi burada yan yana durabilir. Mahalle, apartman ve küçük ofislerin bulunduğu bir çevredir. Kuzeybatıdaki Konaklı başka bir mahalledir. Konak, Nilüfer’in doğu yakasındadır.",
      "Barış ve Esentepe yakın çevrededir. Kutlama evin içinde, açılış dükkânın gününde, anma ailenin istediği sadelikte geçer. Teşekkür ile geçmiş olsun, komşuluğun doğal parçasıdır. Yıl dönümü burada gösterişsiz, içten bir armağan ister. Cadde kalabalık olsa da ziyaretler tanıdıktır. Çiçek, bu tanışıklığın dilidir. İş yeri ile ev aynı mahallede yan yana durur; hazırlık ikisine de uyar. Caddeye bakan bir iş yerine derli bir düzen, eve ise daha sıcak bir buket yakışır. Anma günü beyaz ve sade tutulur. Yakın mahalleler ayrı adreslerdir. Çiçek, bu mahallenin kendi gününe göre hazırlanır. Dükkân ile daire aynı mahallede yan yanadır. Çiçek, açılışta derli, evde daha sıcak durur. İyi dilek kısa, hazırlık özenlidir. Yakın mahalleler aynı çevrenin ayrı adresleridir. Konak’a çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Konak çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "kultur",
    shortName: "Kültür",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ihsaniye", "balat", "fethiye", "konak"],
    description:
      "Nilüfer Kültür çiçek siparişi: İhsaniye’ye yakın daire ve ofise orkide ile kutu. Kültür’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kültür, İhsaniye’ye yakın, Nilüfer’in doğu tarafında cadde ile sitenin iç içe geçtiği bir konut mahallesidir. Mahalle, günlük ziyaretlerin ve küçük ofis hediyelerinin sık görüldüğü yerleşik bir çevredir. Çiçek bir hol ya da bir çalışma masası için hazırlanır.",
      "Balat, Fethiye ve Konak yakın çevrededir. İnsanlar birbirini kaldırımdan ve uzun süredir oturdukları binalardan tanır. Doğum günü ve yıl dönümü evde kutlanır. Açılış ve teşekkür iş yerinde daha sade tutulur. Geçmiş olsun kısa bir ziyaretle iletilir; anma günü ağırbaşlı kalır. Mahallenin hareketi caddededir, asıl hayat ise bu evlerin içindedir. Çiçek ikisine de uyar. Komşuluk, dükkândan ve apartmandan yıllardır süren bir tanışıklıktır. Caddeye bakan bir iş yerine derli bir düzen, eve ise daha sıcak bir buket yakışır. Anma günü beyaz ve sade tutulur. Yakın mahalleler ayrı adreslerdir. Çiçek, bu mahallenin kendi gününe göre hazırlanır. Dükkân ile daire aynı mahallede yan yanadır. Çiçek, açılışta derli, evde daha sıcak durur. İyi dilek kısa, hazırlık özenlidir. Yakın mahalleler aynı çevrenin ayrı adresleridir. Kültür çiçekçi arayanlar Kültür’e çiçek göndermeyi bu çevre için ister. Nilüfer Kültür çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "karaman",
    shortName: "Karaman",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["altinsehir", "23-nisan", "esentepe", "cumhuriyet"],
    description:
      "Nilüfer Karaman çiçek siparişi: doğu yakasındaki apartmana buket ve çelenk. Karaman’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Karaman, Nilüfer’in doğusunda, 23 Nisan, 29 Ekim ve Altınşehir gibi adların bulunduğu konut çevresinin içindedir. Apartmanlar yerleşiktir; site blokları da yer yer aynı mahallede görülür. Mahalle, takvimden alınmış komşu isimlerin arasında durur ve günlük hayatı daire ziyaretleriyle akar.",
      "Esentepe ve Cumhuriyet yakın çevrededir. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Karaman çiçekçi hizmeti, Karaman’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  {
    slug: "ucevler",
    shortName: "Üçevler",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gumustepe", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Nilüfer Üçevler çiçek siparişi: sokak ve blok adresine buket ile kutu. Üçevler’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Üçevler, Nilüfer’de konutun sürdüğü, tek bir caddeyle değil sokak ve apartman adlarıyla bulunan bir mahalledir. Mahalle, oturanların birbirini apartman adıyla tanıdığı bir çevredir.",
      "Gümüştepe, Işıktepe, Ahmet Yesevi ve Demirci yakın çevrededir. Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Nilüfer Üçevler çiçek siparişi, mahallenin kendi hayatına uyar. Üçevler çiçekçi olarak Üçevler’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "altinsehir",
    shortName: "Altınşehir",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["karaman", "29-ekim", "esentepe", "yuzuncuyil"],
    description:
      "Nilüfer Altınşehir çiçek siparişi: doğu konut mahallesine orkide ve kutu. Altınşehir’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Altınşehir, Nilüfer’in doğu konut mahallelerinden biridir. Apartmanlar yerleşiktir; yeni bloklar da aynı çevrede yer alır. Mahalle, 29 Ekim, Karaman ve Yüzüncüyıl’ın yakınında, ailelerin oturduğu bir taraftadır. Kutlamalar çoğu zaman kalabalık bir salon yerine evin içinde yapılır.",
      "Esentepe de bu çevrenin komşusudur. Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Nilüfer Altınşehir çiçek siparişi, mahallenin kendi hayatına uyar. Altınşehir çiçekçi olarak Altınşehir’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "23-nisan",
    shortName: "23 Nisan",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["19-mayis", "29-ekim", "yuzuncuyil", "kultur"],
    description:
      "Nilüfer 23 Nisan çiçek siparişi: aile apartmanına kutu ve buket. 23 Nisan’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "23 Nisan, Nilüfer’in doğusunda ailelerin oturduğu bir apartman mahallesidir. 19 Mayıs, 29 Ekim ve Yüzüncüyıl aynı doğu çevresinin komşu mahalleleridir. Sokaklar yerleşiktir.",
      "Kültür de bu çevrenin komşusudur. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. 23 Nisan çiçekçi hizmeti, 23 Nisan’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "29-ekim",
    shortName: "29 Ekim",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["23-nisan", "19-mayis", "altinsehir", "yuzuncuyil"],
    description:
      "Nilüfer 29 Ekim çiçek siparişi: doğu apartmanına buket ve orkide. 29 Ekim’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "29 Ekim, Nilüfer’in doğu konut tarafında, 23 Nisan ve 19 Mayıs ile aynı adlandırmanın komşu mahallesidir. Kapı bir daire girişidir. Apartmanlar yerleşiktir; bazı adresler site düzenindedir. Mahalle, ailelerin oturduğu sakin bir çevredir.",
      "Altınşehir ve Yüzüncüyıl yakın çevrededir. Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Nilüfer 29 Ekim çiçek siparişi, mahallenin kendi hayatına uyar. 29 Ekim çiçekçi olarak 29 Ekim’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "19-mayis",
    shortName: "19 Mayıs",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["23-nisan", "29-ekim", "cumhuriyet", "yuzuncuyil"],
    description:
      "Nilüfer 19 Mayıs çiçek siparişi: doğu apartmanına buket ve kutu. 19 Mayıs’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "19 Mayıs, Nilüfer’in doğusunda, cumhuriyet takviminden ad almış konut mahallelerinden biridir. 23 Nisan, 29 Ekim ve Yüzüncüyıl yakın komşulardır. Mahallede gençlerin ve ailelerin kutlamaları, özellikle doğum günleri, çiçeğin sık sebebidir.",
      "Cumhuriyet de bu çevrenin komşusudur. Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. 19 Mayıs çiçekçi arayanlar 19 Mayıs’a çiçek göndermeyi bu çevre için ister. Nilüfer 19 Mayıs çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "yuzuncuyil",
    shortName: "Yüzüncüyıl",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["23-nisan", "29-ekim", "19-mayis", "altinsehir"],
    description:
      "Nilüfer Yüzüncüyıl çiçek siparişi: doğu konuta orkide ve buket. Yüzüncüyıl’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Yüzüncüyıl, Nilüfer’in doğu konut çevresinde yerleşik bir mahalledir. 23 Nisan, 29 Ekim ve 19 Mayıs ile aynı tarafta durur. Apartmanlar düzenlidir. Kutlamalar çoğu zaman dairenin içinde, küçük bir masa etrafında olur.",
      "Altınşehir de bu çevrenin komşusudur. Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Yüzüncüyıl çiçekçi hizmeti, Yüzüncüyıl’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "dumlupinar",
    shortName: "Dumlupınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "balkan", "besevler", "kurtulus"],
    description:
      "Nilüfer Dumlupınar çiçek siparişi: Görükle çevresinde yurt ve apartmana buket ile orkide. Dumlupınar’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Dumlupınar, Nilüfer’de Görükle ve üniversite çevresine yakın bir konut mahallesidir. Mahalle, kampüs hayatının hemen yanında, öğrencilerin ve ailelerin bir arada oturduğu bir çevredir.",
      "Balkan, Beşevler ve Kurtuluş yakın çevrededir. Üniversite kuşağında siteler, apartmanlar ve öğrenci evleri iç içedir. Mezuniyet günü daha canlı, teşekkür daha sade, anma daha ağırbaşlı bir düzen ister. Bir odaya bırakılacak küçük bir jest ile bir ailenin evindeki kutlama aynı çevreden çıkar. Çiçek, günün sebebine göre bu iki ölçüden birine uyar. Yakın mahalleler aynı üniversite çevresinin diğer duraklarıdır. Mezuniyette daha canlı bir buket, odada birkaç gün duracak bir orkide, anmada sade bir düzen seçilir. Yurt, site ve aile evi aynı kuşaktadır. Çiçek, bu üç hâlin ölçüsüne göre hazırlanır. Kampüs kuşağında bir oda ile bir aile evi yan yanadır. Çiçek, mezuniyette daha canlı, teşekkürde daha sade durur. İyi dilek kısa tutulur. Yakın mahalleler aynı üniversite çevresinin duraklarıdır. Dumlupınar çiçekçi hizmeti, Dumlupınar’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "balkan",
    shortName: "Balkan",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "dumlupinar", "kurtulus", "besevler"],
    description:
      "Nilüfer Balkan çiçek siparişi: Görükle kuşağında site ve apartmana buket ile kutu. Balkan’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Balkan, Görükle tarafında, Kurtuluş ile İzmir yolu üzerindeki konutların arasında duran bir Nilüfer mahallesidir. Eski adı Zafer olarak da bilinir; güncel mahalle adı Balkan’dır. Mahalle, üniversite çevresinin konut tarafındadır.",
      "Dumlupınar ve Beşevler yakın çevrededir. Üniversite kuşağında siteler, apartmanlar ve öğrenci evleri iç içedir. Mezuniyet günü daha canlı, teşekkür daha sade, anma daha ağırbaşlı bir düzen ister. Bir odaya bırakılacak küçük bir jest ile bir ailenin evindeki kutlama aynı çevreden çıkar. Çiçek, günün sebebine göre bu iki ölçüden birine uyar. Yakın mahalleler aynı üniversite çevresinin diğer duraklarıdır. Mezuniyette daha canlı bir buket, odada birkaç gün duracak bir orkide, anmada sade bir düzen seçilir. Yurt, site ve aile evi aynı kuşaktadır. Çiçek, bu üç hâlin ölçüsüne göre hazırlanır. Kampüs kuşağında bir oda ile bir aile evi yan yanadır. Çiçek, mezuniyette daha canlı, teşekkürde daha sade durur. İyi dilek kısa tutulur. Yakın mahalleler aynı üniversite çevresinin duraklarıdır. Balkan’a çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Balkan çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "kurtulus",
    shortName: "Kurtuluş",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["balkan", "gorukle", "dumlupinar", "besevler"],
    description:
      "Nilüfer Kurtuluş çiçek siparişi: Görükle tarafındaki konuta kutu ve buket. Kurtuluş’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kurtuluş, Görükle’nin konut tarafında, Balkan ve Dumlupınar’a komşu bir Nilüfer mahallesidir. Akçalar’da eskiden kullanılan Kurtuluş adı başka bir yerdir. Mahalle, öğrencilerin ve ailelerin bir arada oturduğu bir çevredir.",
      "Beşevler de bu çevrenin komşusudur. Mezuniyet, doğum günü ve teşekkür burada sık görülür. Aile ziyareti site dairelerinde, küçük bir kutlama öğrenci evlerinde karşılanır. Yıl dönümü ve geçmiş olsun da aynı çevreden istenir. Anma günü sade tutulur. Kampüs kuşağının kalabalığı ile ailelerin oturduğu bloklar bir aradadır. Çiçek, bu iki hayatın gününe göre seçilir. Yurt odası, site dairesi ve cadde üzerindeki ev aynı çevredendir. Mezuniyette daha canlı bir buket, odada birkaç gün duracak bir orkide, anmada sade bir düzen seçilir. Yurt, site ve aile evi aynı kuşaktadır. Çiçek, bu üç hâlin ölçüsüne göre hazırlanır. Kampüs kuşağında bir oda ile bir aile evi yan yanadır. Çiçek, mezuniyette daha canlı, teşekkürde daha sade durur. İyi dilek kısa tutulur. Yakın mahalleler aynı üniversite çevresinin duraklarıdır. Kurtuluş çiçekçi arayanlar Kurtuluş’a çiçek göndermeyi bu çevre için ister. Nilüfer Kurtuluş çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "30-agustos-zafer",
    shortName: "30 Ağustos Zafer",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "tahtali", "hasanaga", "kayapa"],
    description:
      "Nilüfer 30 Ağustos Zafer çiçek siparişi: Görükle, Tahtalı ve Hasanağa arasındaki konuta buket ve orkide. 30 Ağustos Zafer’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "30 Ağustos Zafer, Nilüfer’de eski Kayapa Çamlık adıyla da aranan bir konut mahallesidir. Kuzeyinde Görükle, doğusunda Tahtalı, güneyinde Bursa Yolu, batısında Hasanağa vardır. Mahalle, kendi konut sokaklarında yaşar.",
      "Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. 30 Ağustos Zafer’e çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer 30 Ağustos Zafer çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "minarelicavus",
    shortName: "Minareliçavuş",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["alaaddinbey", "ozluce", "cali", "yaylacik"],
    description:
      "Nilüfer Minareliçavuş çiçek siparişi: batıda büyüyen konuta orkide, kutu ve buket. Minareliçavuş’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Minareliçavuş, Nilüfer’in batısında konutun yeni yeni çoğaldığı mahallelerdendir. Özlüce ve Alaaddinbey’e yakındır; Çalı ve Yaylacık da aynı geniş çevrededir. Yeni siteler ile daha eski sokak evleri yan yana bulunabilir. Mahalle, taşınan ailelerin ve yeni dairelerin sık görüldüğü bir taraftadır.",
      "Aile kutlamaları, yeni eve taşınma, doğum günü ve yıl dönümü burada sık görülür. Teşekkür ile geçmiş olsun kısa bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Yeni taşınan bir aile ile yıllardır oturan bir komşu aynı çevreyi paylaşır. Çiçek, bir dairenin gününe göre, evin ölçüsünde hazırlanır. Geniş konut blokları ile cadde üzerindeki binalar bu mahallede iç içedir. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Nilüfer Minareliçavuş çiçek siparişi, mahallenin kendi hayatına uyar. Minareliçavuş çiçekçi olarak Minareliçavuş’a çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "alaaddinbey",
    shortName: "Alaaddinbey",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ozluce", "minarelicavus", "yaylacik", "urunlu"],
    description:
      "Nilüfer Alaaddinbey çiçek siparişi: batı konutuna buket ve orkide. Tepecik Höyüğü bu çevrededir. Alaaddinbey’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Alaaddinbey, Nilüfer’in batısında konutun hızla çoğaldığı mahallelerdendir. Yeni siteler, geniş caddeler ve hâlâ açık kalan tarla kenarları aynı çevrede görülür. Tepecik Höyüğü bu tarafın bilinen yükseltisidir. Özlüce, Minareliçavuş, Yaylacık ve Ürünlü yakın komşulardır. Mahalle, yeni taşınan ailelerin kutlamalarına sık ev sahipliği yapar.",
      "Geniş konut blokları ile cadde üzerindeki binalar aynı mahallede yaşar. Yeni evde uzun süre kalacak bir hediye, kutlamada elde taşınacak bir buket düşünülür. Geçmiş olsun ve anma daha sade tutulur. Aileler birbirini blokundan ve sokağından tanır. Çiçek bu komşuluğun içine nazik bir ziyaret olarak girer. Yerleşik hayat, dairenin içindeki kutlamalarda sürer. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Alaaddinbey çiçekçi hizmeti, Alaaddinbey’e çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "ahmet-yesevi",
    shortName: "Ahmet Yesevi",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["minarelicavus", "isiktepe", "demirci", "ucevler"],
    description:
      "Nilüfer Ahmet Yesevi çiçek siparişi: apartman ya da sokak adresine buket ve kutu. Ahmet Yesevi’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kimi adres sokak ve numara ile, kimi adres doğrudan bina unvanıyla bulunur. Mahalle, Minareliçavuş, Işıktepe, Demirci ve Üçevler’in yakınında, oturanların birbirini bina adıyla tanıdığı bir çevredir.",
      "Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Ahmet Yesevi çiçekçi arayanlar Ahmet Yesevi’ye çiçek göndermeyi bu çevre için ister. Nilüfer Ahmet Yesevi çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "kizilcikli",
    shortName: "Kızılcıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "kayapa", "hasanaga", "30-agustos-zafer"],
    description:
      "Nilüfer Kızılcıklı çiçek siparişi: Görükle ile Hasanağa arasında buket ve kutu. Batı kenarı Pazar Caddesi’dir. Kızılcıklı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kızılcıklı, eski Hasanağa Kızılcıklı adıyla da aranan bir Nilüfer mahallesidir. Kuzeyinde Görükle, doğusunda Kayapa, güneyinde Hasanağa’nın köy içi, batısında Pazar Caddesi vardır. Hasanağa ayrı bir mahalledir. Mahalle, hem konutun hem küçük işletmenin görüldüğü bir geçiş yeridir.",
      "30 Ağustos Zafer de bu çevrenin komşusudur. Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Kızılcıklı çiçek siparişi, mahallenin kendi hayatına uyar. Kızılcıklı çiçekçi olarak Kızılcıklı’ya çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "demirci",
    shortName: "Demirci",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cali", "minarelicavus", "isiktepe", "ahmet-yesevi"],
    description:
      "Nilüfer Demirci çiçek siparişi: batıdaki sakin konuta buket ve çelenk. Demirci’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Demirci, Nilüfer’in batısında, Çalı koridorunun karmaşasından daha sakin bir konut mahallesidir. Sokaklar ve avlular sürer; büyük bir sanayi kapısı bu mahallenin gündelik adresi değildir. Minareliçavuş, Işıktepe ve Ahmet Yesevi yakın çevrededir.",
      "Aileler birbirini sokaktan ve uzun süredir oturdukları binalardan tanır. Doğum günü ile yıl dönümü evin içinde kutlanır. Teşekkür ve geçmiş olsun kısa bir ziyaretle iletilir. Anma günü ağırbaşlı kalır. Cadde üzerindeki küçük iş yerlerinde açılış da görülür. Asıl hayat dairelerin içindedir; çiçek de o evin gününe göre seçilir. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Zemin katlardaki dükkânlar mahallenin gündüz yüzünü tamamlar. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Demirci çiçekçi arayanlar Demirci’ye çiçek göndermeyi bu çevre için ister. Nilüfer Demirci çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "isiktepe",
    shortName: "Işıktepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["demirci", "ahmet-yesevi", "ucevler", "gumustepe"],
    description:
      "Nilüfer Işıktepe çiçek siparişi: sokak ve daire adresine orkide ile buket. Işıktepe’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Işıktepe, Nilüfer’in yerleşik konut mahallelerinden biridir. Adres, sokak ve daire ile birlikte bulunur. Bazı binalar site düzenindedir, bazıları doğrudan sokağa bakar. Demirci, Ahmet Yesevi, Üçevler ve Gümüştepe yakın çevrededir.",
      "Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Işıktepe’ye çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Işıktepe çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "akcalar",
    shortName: "Akçalar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "fadilli", "hasanaga", "inegazi"],
    description:
      "Nilüfer Akçalar çiçek siparişi: batıda buket ve orkide. Aktopraklık Höyüğü bu çevrededir. Akçalar’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Akçalar, Nilüfer’in batısında, köy karakterini sürdüren bir mahalledir. Aktopraklık Höyüğü bu çevrededir. Gölyazı’nın yarımadasına göre Akçalar daha içeride, kendi evlerinin arasında durur. Eski kayıtlarda Zafer ve Kurtuluş adları da geçer; güncel mahalle adı Akçalar’dır. Nilüfer’deki Kurtuluş mahallesi başka bir yerdir.",
      "Fadıllı, Hasanağa ve İnegazi yakın çevrededir. Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Akçalar çiçekçi arayanlar Akçalar’a çiçek göndermeyi bu çevre için ister. Nilüfer Akçalar çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "atlas",
    shortName: "Atlas",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ucpinar", "kadriye", "kurucesme", "dagyenice"],
    description:
      "Nilüfer Atlas çiçek siparişi: güneydeki köy evine buket ve kutu. Atlas’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Atlas, Nilüfer’in güneyinde köy düzeninin sürdüğü mahallelerdendir. Kadriye, Üçpınar ve Kuruçeşme aynı çevrededir. Evler sokak ve avlu ile bulunur; site dili burada az kullanılır. Yol, kentin apartman mahallelerine göre uzundur.",
      "Dağyenice de bu çevrenin komşusudur. Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Atlas çiçek siparişi, mahallenin kendi hayatına uyar. Atlas çiçekçi olarak Atlas’a çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "ayvakoy",
    shortName: "Ayvaköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["uncukuru", "korubasi", "fadilli", "maksempinar"],
    description:
      "Nilüfer Ayvaköy çiçek siparişi: güneybatıda buket ve kutu. Ayva Köy yazımı da aynı kapıya gider. Ayvaköy’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Ayvaköy, Nilüfer’in güneybatısındaki köy mahallelerindendir. Ayva Köy yazımı da aynı yeri anlatır. Unçukuru, Korubaşı ve Maksempınar güneydeki komşulardır. Fadıllı, Uluabat tarafına daha yakındır.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Ayvaköy çiçekçi hizmeti, Ayvaköy’e çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "badirga",
    shortName: "Badırga",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "buyukbalikli", "baskoy"],
    description:
      "Nilüfer Badırga çiçek siparişi: kuzeybatıdaki köy evine buket ve çelenk. Badırga’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Badırga, Nilüfer’in kuzeybatısındaki köy mahallelerindendir. Çaylı, Konaklı, Büyükbalıklı ve Başköy aynı kırsal çevrenin komşularıdır. Evler avlu ve sokakla bulunur.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Badırga çiçek siparişi, mahallenin kendi hayatına uyar. Badırga çiçekçi olarak Badırga’ya çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "baskoy",
    shortName: "Başköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "catalagil", "akcalar", "buyukbalikli"],
    description:
      "Nilüfer Başköy çiçek siparişi: Badırga ile Akçalar arasındaki köy evine buket ve kutu. Başköy’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Başköy, Nilüfer’in batısında Badırga ile Akçalar arasında kalan bir köy mahallesidir. Çatalağıl aynı hatta, Büyükbalıklı kuzeybatıdadır. Avlu kapıları ve sokak evleri mahallenin gündelik adresidir.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Başköy çiçek siparişi, mahallenin kendi hayatına uyar. Başköy çiçekçi olarak Başköy’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "buyukbalikli",
    shortName: "Büyükbalıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "konakli", "cayli", "baskoy"],
    description:
      "Nilüfer Büyükbalıklı çiçek siparişi: kuzeybatıda ev kapısına buket ve kutu. Büyükbalıklı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Büyükbalıklı, Nilüfer’in kuzeybatısında Badırga ve Konaklı ile aynı köy çevresindedir. Çaylı kuzeye, Başköy güneybatıya düşer. Ev kapıları avluya bakar.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Büyükbalıklı çiçekçi arayanlar Büyükbalıklı’ya çiçek göndermeyi bu çevre için ister. Nilüfer Büyükbalıklı çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "cali",
    shortName: "Çalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["yaylacik", "ertugrul", "alaaddinbey", "demirci"],
    description:
      "Nilüfer Çalı çiçek siparişi: İzmir yolu üzerinde eve ve iş yerine buket, kutu ve orkide. Çalı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Çalı, İzmir yolu üzerinde, konut ile sanayinin aynı çevre içinde görüldüğü bir Nilüfer mahallesidir. Yaylacık, Ertuğrul, Alaaddinbey ve Demirci yakın komşulardır.",
      "Evlerde doğum günü, teşekkür ve geçmiş olsun; iş yerlerinde açılış ve kutlama görülür. Anma günü ayrı bir ağırbaşlılık ister. Yol üzerindeki hareket ile iç sokaktaki ev hayatı aynı çevrededir. Çiçek, evdeki ziyarete ya da iş yerindeki güne göre seçilir. İkisi de sade ve özenli tutulur. İzmir yolu bu çevrenin omurgasıdır; mahalle ise o yolun kenarındaki evlerde ve iş yerlerinde yaşar. Eve teşekkür buketi, iş yerine açılış düzeni, anmaya beyaz bir çelenk yakışır. İzmir yolu üzerindeki komşular ayrı mahallelerdir. Çiçek, evin ya da iş yerinin gününe göre seçilir. Yolun kenarında ev ve iş yeri ayrı anlamlar taşır. Çiçek, teşekkürde sade, açılışta daha derli durur. İyi dilek kısa tutulur. Komşu mahalleler aynı koridorun ayrı adresleridir. Çiçek, seçilen güne uyar. Çalı çiçekçi arayanlar Çalı’ya çiçek göndermeyi bu çevre için ister. Nilüfer Çalı çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "catalagil",
    shortName: "Çatalağıl",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["baskoy", "inegazi", "akcalar", "hasanaga"],
    description:
      "Nilüfer Çatalağıl çiçek siparişi: Başköy ve İnegazi hattındaki köy evine buket ve çelenk. Çatalağıl’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Çatalağıl, Nilüfer’in batısında, Başköy ile İnegazi hattında eski bir köy mahallesidir. Akçalar ve Hasanağa aynı geniş çevrenin diğer duraklarıdır. Evler mevki ve sokakla bulunur. Aile ziyaretleri burada sade ve içten karşılanır.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Çatalağıl’a çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Çatalağıl çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "cayli",
    shortName: "Çaylı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "yolcati", "buyukbalikli", "konakli"],
    description:
      "Nilüfer Çaylı çiçek siparişi: Badırga’nın doğusundaki köy evine buket ve kutu. Çaylı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Çaylı, Nilüfer’in kuzeyinde, Badırga’nın doğusuna düşen bir köy mahallesidir. Yolçatı aynı kuzey hattında, Büyükbalıklı ve Konaklı kuzeybatıdadır. Ziyaret ve bayram burada çiçeğin sık sebebidir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Çaylı’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Çaylı çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "dagyenice",
    shortName: "Dağyenice",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["tahtali", "atlas", "yaylacik", "kadriye"],
    description:
      "Nilüfer Dağyenice çiçek siparişi: güney eteklerde buket ve orkide. Dağyenice’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Dağyenice, Nilüfer’in güney eteklerinde, Tahtalı ile Atlas arasında kalan bir köy mahallesidir. Yaylacık ova tarafına, Kadriye daha uzağa düşer.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Dağyenice çiçekçi hizmeti, Dağyenice’ye çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  {
    slug: "dogankoy",
    shortName: "Doğanköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["karacaoba", "gungoren", "gokce", "kadriye"],
    description:
      "Nilüfer Doğanköy çiçek siparişi: kırsal mahallede avlu kapısına buket ve kutu. Doğanköy’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Doğanköy, Nilüfer’in kırsalında mevkiyle bulunan bir köy mahallesidir. Karacaoba, Güngören ve Gökçe aynı çevrenin komşularıdır. Evler avlu numarasıyla ayrılır. Kentteki site bloklarından farklı olarak adres, sokak ve avlu ile kurulur.",
      "Kadriye de bu çevrenin komşusudur. Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Doğanköy çiçekçi arayanlar Doğanköy’e çiçek göndermeyi bu çevre için ister. Nilüfer Doğanköy çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "fadilli",
    shortName: "Fadıllı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "ayvakoy", "akcalar", "uncukuru"],
    description:
      "Nilüfer Fadıllı çiçek siparişi: Gölyazı’nın güneybatısında, Uluabat tarafındaki köy evine buket ve orkide. Fadıllı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Fadıllı, Gölyazı’nın güneybatısında, Uluabat tarafına bakan bir köy mahallesidir. Ayvaköy ve Unçukuru güneyde, Akçalar batıdadır. Fadıllı kendi köy kapısıdır; gölün yarımadasındaki taş ev başka bir mahalledir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Fadıllı çiçekçi hizmeti, Fadıllı’ya çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "gokce",
    shortName: "Gökçe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gungoren", "dagyenice"],
    description:
      "Nilüfer Gökçe çiçek siparişi: köy mahallesinde buket ve kutu. Gökçe’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Gökçe, Nilüfer’in kırsal mahallelerinden biridir. Doğanköy, Karacaoba ve Güngören aynı çevrede anılır. Evler sokak, kapı numarası ve alıcı ile bulunur.",
      "Dağyenice de bu çevrenin komşusudur. Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Gökçe çiçekçi arayanlar Gökçe’ye çiçek göndermeyi bu çevre için ister. Nilüfer Gökçe çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "golyazi",
    shortName: "Gölyazı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["akcalar", "inegazi", "hasanaga", "fadilli"],
    description:
      "Nilüfer Gölyazı çiçek siparişi: Uluabat yarımadasında buket, orkide ve kutu. Gölyazı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Gölyazı, Nilüfer’in güneybatısında Uluabat Gölü’ne uzanan tarihî bir yarımadadır. Gölün eski adı Apolyont’tur; antik yerleşim Apollonia adıyla anılır. Dar sokaklar, taş evler ve göl kıyısı mahalleyi Nilüfer’in apartman bölgelerinden ayırır. Hafta sonları ziyaretçi artar.",
      "Akçalar, İnegazi, Hasanağa ve Fadıllı yakın çevrededir. Kıyıda hayat evin ve avlunun ölçüsündedir. Yıl dönümü, geçmiş olsun ve teşekkür tanıdık bir ziyaretin parçasıdır. Anma günü ağırbaşlı tutulur. Küçük bir dükkânın günü olursa düzen daha derli seçilir. Dışarıdan gelen kalabalık çekilince mahalle kendi sakinliğine döner. Çiçek bu sakinliğin içine, iyi bir dilek olarak girer. Armağan, ailenin kendi masasına göre sade tutulur. Kırmızı gül bir kutlamada, mevsim çiçeği bir teşekkürde, beyaz düzen bir anmada daha yerinde durur. İçerideki köyler ayrı mahallelerdir; kıyıdaki armağan bu evlere gelir. Boy ve renk, evin ölçüsüne göre seçilir. Hafta sonunun kalabalığı çekilince mahalle yine oturanların evine döner. Çiçek o eve, günün anlamına göre bırakılır. İyi dilek kısa, hazırlık özenlidir. Kıyıdaki evin ölçüsü sakindir. Çiçek de o sakinliğe uyar. Gölyazı’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Gölyazı çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "gumustepe",
    shortName: "Gümüştepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["ucevler", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Nilüfer Gümüştepe çiçek siparişi: apartman ve sokak adresine orkide ile buket. Gümüştepe’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Gümüştepe, Nilüfer’de daire kapısının sokak numarasıyla bulunduğu bir konut mahallesidir. Üçevler, Işıktepe, Ahmet Yesevi ve Demirci yakın çevrededir.",
      "Yerleşik apartman hayatında kutlamalar çoğu zaman evin içinde olur. Yıl dönümü, teşekkür ve geçmiş olsun bu dairelerin alışıldık sebepleridir. Anma daha ağırbaşlı, açılış daha sade tutulur. Komşuluk, aynı binada yıllardır oturan ailelerin arasındadır. Çiçek, günün anlamına göre ve bu tanışıklığın ölçüsünde hazırlanır. Cadde ile iç sokak aynı mahalleyi kurar. Yeni gelen bir komşu ile eski bir bina sakini yan yanadır. Kutlamada gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen daha yerinde durur. Komşu mahalleler ayrı adreslerdir. Çiçek, bu dairenin gününe göre sade hazırlanır. Boy, evin ölçüsüne göre seçilir. Dairelerin içindeki kutlama, mahallenin asıl günüdür. Çiçek o güne göre sade hazırlanır. Komşu adres ayrı bir mahalle adıyla anılır. İyi dilek kısa tutulur. Yakın mahalleler aynı konut kuşağının ayrı adresleridir. Gümüştepe’ye çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Gümüştepe çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  {
    slug: "gungoren",
    shortName: "Güngören",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gokce", "atlas"],
    description:
      "Nilüfer Güngören çiçek siparişi: köy içi kapıya buket ve çelenk. Güngören’e çiçek gönderimi aynı gün planlanır.",
    body: [
      "Güngören, Nilüfer kırsalında mevkiyle bulunan bir köy mahallesidir. Doğanköy, Karacaoba ve Gökçe aynı çevrededir. Evler kapı numarasıyla ayrılır. Çelenk ile buket burada yan yana istenebilir.",
      "Atlas de bu çevrenin komşusudur. Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Güngören çiçekçi hizmeti, Güngören’e çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "hasanaga",
    shortName: "Hasanağa",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kizilcikli", "kayapa", "30-agustos-zafer", "golyazi"],
    description:
      "Nilüfer Hasanağa çiçek siparişi: Kızılcıklı’nın güneyindeki köy içine buket ve kutu. Hasanağa’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Hasanağa, Kızılcıklı’nın güneyindeki köy içi mahallesidir. Kayapa doğuda, 30 Ağustos Zafer kuzeydedir. Gölyazı ise daha güneybatıda, gölün yarımadasındadır. Eski Hasanağa Kızılcıklı bugün Kızılcıklı adıyla ayrıdır. Mahalle, aile ziyaretlerinin ve bayramların sürdüğü bir yerdir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Hasanağa çiçekçi hizmeti, Hasanağa’ya çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "inegazi",
    shortName: "İnegazi",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["golyazi", "akcalar", "catalagil", "hasanaga"],
    description:
      "Nilüfer İnegazi çiçek siparişi: Gölyazı ve Akçalar çevresindeki köy evine buket ve orkide. İnegazi’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "İnegazi, Nilüfer’in batı-güneybatısında, Gölyazı ve Akçalar ile aynı geniş çevrede duran bir köy mahallesidir. Çatalağıl ve Hasanağa hattın diğer duraklarıdır.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer İnegazi çiçek siparişi, mahallenin kendi hayatına uyar. İnegazi çiçekçi olarak İnegazi’ye çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  {
    slug: "irfaniye",
    shortName: "İrfaniye",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["gorukle", "balkan", "dumlupinar", "besevler"],
    description:
      "Nilüfer İrfaniye çiçek siparişi: Görükle’nin batısında site, ev ve küçük iş yerine buket ile kutu. İrfaniye’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "İrfaniye, Görükle’nin batısına düşen bir Nilüfer mahallesidir. Balkan ve Dumlupınar üniversite çevresinin mahalle kapılarıdır; Beşevler ise daha merkezi konuttadır. Mahalle, kampüs kalabalığının hemen kıyısında, kendi sokaklarında yaşar.",
      "Mezuniyet, doğum günü ve teşekkür burada sık görülür. Aile ziyareti site dairelerinde, küçük bir kutlama öğrenci evlerinde karşılanır. Yıl dönümü ve geçmiş olsun da aynı çevreden istenir. Anma günü sade tutulur. Kampüs kuşağının kalabalığı ile ailelerin oturduğu bloklar bir aradadır. Çiçek, bu iki hayatın gününe göre seçilir. Yurt odası, site dairesi ve cadde üzerindeki ev aynı çevredendir. Mezuniyette daha canlı bir buket, odada birkaç gün duracak bir orkide, anmada sade bir düzen seçilir. Yurt, site ve aile evi aynı kuşaktadır. Çiçek, bu üç hâlin ölçüsüne göre hazırlanır. Kampüs kuşağında bir oda ile bir aile evi yan yanadır. Çiçek, mezuniyette daha canlı, teşekkürde daha sade durur. İyi dilek kısa tutulur. Yakın mahalleler aynı üniversite çevresinin duraklarıdır. İrfaniye çiçekçi arayanlar İrfaniye’ye çiçek göndermeyi bu çevre için ister. Nilüfer İrfaniye çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "kadriye",
    shortName: "Kadriye",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["atlas", "ucpinar", "kurucesme", "korubasi"],
    description:
      "Nilüfer Kadriye çiçek siparişi: ova kenarındaki güney eve buket ve kutu. Kadriye’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kadriye, Nilüfer’in güneyindeki köy mahallelerindendir. Atlas ve Üçpınar aynı çevrede, Kuruçeşme ve Korubaşı biraz daha içeridedir. Yol, apartman mahallelerine göre uzundur.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Kadriye çiçek siparişi, mahallenin kendi hayatına uyar. Kadriye çiçekçi olarak Kadriye’ye çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "karacaoba",
    shortName: "Karacaoba",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["dogankoy", "gungoren", "gokce", "atlas"],
    description:
      "Nilüfer Karacaoba çiçek siparişi: kırsal mahallede ev kapısına buket ve orkide. Karacaoba’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Karacaoba, Nilüfer kırsalında ev numarasıyla ayırt edilen bir köy mahallesidir. Doğanköy, Güngören ve Gökçe komşudur. Bayram ve teşekkür bu avlularda sık görülür.",
      "Atlas de bu çevrenin komşusudur. Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Karacaoba’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Karacaoba çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "kayapa",
    shortName: "Kayapa",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kizilcikli", "30-agustos-zafer", "tahtali", "hasanaga"],
    description:
      "Nilüfer Kayapa çiçek siparişi: eski İstiklal ve Zafer adresleriyle bugünkü kapıya buket, kutu ve orkide. Kayapa’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kayapa, eski İstiklal ve Zafer mahallelerinin birleşmesiyle oluşan bir Nilüfer mahallesidir. Kızılcıklı batıda, 30 Ağustos Zafer kuzeyde, Tahtalı doğuda, Hasanağa güneyde kalır. İki eski parçanın girişleri farklı sokaklara bakabilir. Ev ve küçük iş yeri burada yan yana görülür.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Kayapa’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Kayapa çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "konakli",
    shortName: "Konaklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["badirga", "buyukbalikli", "cayli", "yolcati"],
    description:
      "Nilüfer Konaklı çiçek siparişi: kuzeybatıda Badırga kuşağındaki bahçe kapısına kutu ve buket. Doğudaki Konak ayrıdır. Konaklı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Konaklı, Nilüfer’in kuzeybatısında Badırga, Büyükbalıklı ve Çaylı ile aynı köy hattındadır. Yolçatı kuzeydedir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Konaklı’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Konaklı çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "korubasi",
    shortName: "Korubaşı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["uncukuru", "maksempinar", "ayvakoy", "ucpinar"],
    description:
      "Nilüfer Korubaşı çiçek siparişi: güneyde koru kenarındaki köy evine buket ve orkide. Korubaşı’na çiçek gönderimi aynı gün planlanır.",
    body: [
      "Korubaşı, Nilüfer’in güneyinde Unçukuru, Maksempınar ve Ayvaköy ile aynı köy çevresindedir. Üçpınar daha aşağıda kalır. Güney sokağı, apartman sitesinden ayrı bir düzendedir. Aile ziyaretleri burada sade karşılanır.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Korubaşı çiçekçi arayanlar Korubaşı’ya çiçek göndermeyi bu çevre için ister. Nilüfer Korubaşı çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "kurucesme",
    shortName: "Kuruçeşme",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["maksempinar", "uncukuru", "ucpinar", "atlas"],
    description:
      "Nilüfer Kuruçeşme çiçek siparişi: Maksempınar kuşağındaki güney eve buket ve kutu. Kuruçeşme’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Kuruçeşme, güneyde Maksempınar, Unçukuru, Üçpınar ve Atlas ile aynı köy çevresindedir. İlçe satırı Nilüfer, mahalle satırı Kuruçeşme diye açılır. Yol uzundur.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Kuruçeşme çiçekçi arayanlar Kuruçeşme’ye çiçek göndermeyi bu çevre için ister. Nilüfer Kuruçeşme çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  {
    slug: "maksempinar",
    shortName: "Maksempınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kurucesme", "uncukuru", "korubasi", "ayvakoy"],
    description:
      "Nilüfer Maksempınar çiçek siparişi: güneyde buket ve orkide. Maksem Pınarı yazımı da aynı avluya gelir. Maksempınar’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Maksempınar, güney Nilüfer’de pınar yazımıyla da aranan bir köy yerleşimidir. Kuruçeşme, Unçukuru, Korubaşı ve Ayvaköy komşu mahallelerdir. Maksem Pınarı yazımı da aynı köyü anlatır.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Maksempınar çiçekçi hizmeti, Maksempınar’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "tahtali",
    shortName: "Tahtalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kayapa", "30-agustos-zafer", "yaylacik", "dagyenice"],
    description:
      "Nilüfer Tahtalı çiçek siparişi: Kayapa’nın doğusunda köy kapısı ve yol kenarı konuta buket ile kutu. Tahtalı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Tahtalı, 30 Ağustos Zafer’in doğusu ile Kayapa’nın doğu komşusu olan bir köy mahallesidir. Yaylacık ve Dağyenice güneye doğru diğer duraklardır. Çevrenin eski yerleşim izleri buradadır.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Tahtalı’ya çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Tahtalı çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  {
    slug: "uncukuru",
    shortName: "Unçukuru",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["maksempinar", "korubasi", "ayvakoy", "kurucesme"],
    description:
      "Nilüfer Unçukuru çiçek siparişi: Maksempınar komşuluğundaki güney eve buket ve kutu. Unçukuru’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Unçukuru, Nilüfer’in güneyinde Maksempınar, Korubaşı, Ayvaköy ve Kuruçeşme ile birlikte köy mahallelerindendir. Güney yolu uzundur. Bayram ve aile ziyareti burada çiçeğin sık sebebidir.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Unçukuru çiçekçi arayanlar Unçukuru’ya çiçek göndermeyi bu çevre için ister. Nilüfer Unçukuru çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "ucpinar",
    shortName: "Üçpınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["kadriye", "atlas", "kurucesme", "korubasi"],
    description:
      "Nilüfer Üçpınar çiçek siparişi: Atlas kuşağındaki güney eve buket ve orkide. Üçpınar’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Üçpınar, güney Nilüfer’de Kadriye ve Atlas’ın yanında duran bir köy yerleşimidir. Kuruçeşme ile Korubaşı ova içine daha yakındır. Yol, kent merkezine göre uzundur. Aile ziyaretleri sade bir kartla gelir.",
      "Evler bahçelidir; sokaklar ve avlular sakindir. İnsanlar birbirini yıllardır, kapıdan ve komşu avludan tanır. Bayramda evler birbirine açılır; teşekkür, geçmiş olsun ve anma bu ziyaretlerin içindedir. Doğum günü avluda da, evin odasında da kutlanabilir. Akrabalık burada içeri buyur edilen bir misafirliktir. Çiçek, bu misafirliğin iyi dileği olarak hazırlanır. Komşu köyler aynı kırsal çevrededir; her birinin kendi adı ve kendi avlusu vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Nilüfer Üçpınar çiçek siparişi, mahallenin kendi hayatına uyar. Üçpınar çiçekçi olarak Üçpınar’a çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  {
    slug: "urunlu",
    shortName: "Ürünlü",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["alaaddinbey", "yaylacik", "cali", "minarelicavus"],
    description:
      "Nilüfer Ürünlü çiçek siparişi: batıda tarla kenarı ve yeni blok için buket ile kutu. Ürünlü’ye çiçek gönderimi aynı gün planlanır.",
    body: [
      "Ürünlü, Nilüfer’in batısında, Alaaddinbey ve Yaylacık ile birlikte açık alanın korunduğu kesimdedir. Tarla kenarındaki ev ile yeni blok aynı mahallede görülebilir. Çalı koridoru ve Minareliçavuş’un büyüyen konutu bu batının diğer duraklarıdır. Aile ziyareti ve yeni ev burada sık sebeptir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Ürünlü’ye çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Ürünlü çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  {
    slug: "yaylacik",
    shortName: "Yaylacık",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cali", "alaaddinbey", "urunlu", "tahtali"],
    description:
      "Nilüfer Yaylacık çiçek siparişi: Çalı yakınında eve, tarla kenarına ve iş yerine orkide ile buket. Yaylacık’a çiçek gönderimi aynı gün planlanır.",
    body: [
      "Yaylacık, Çalı koridoruna yakın, Nilüfer’in batı-güney kesimindeki bir mahalledir. Ürünlü ve Alaaddinbey ile birlikte açık alanın durduğu kesimde anılır. Tahtalı doğu tarafındadır.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Yaylacık’a çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Yaylacık çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  {
    slug: "yolcati",
    shortName: "Yolçatı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "badirga", "buyukbalikli"],
    description:
      "Nilüfer Yolçatı çiçek siparişi: Çaylı kuşağındaki kuzey avlu kapısına kutu ve buket. Yolçatı’ya çiçek gönderimi aynı gün planlanır.",
    body: [
      "Yolçatı, Nilüfer’in kuzeyinde Çaylı, Konaklı, Badırga ve Büyükbalıklı ile aynı köy çevresinde durur. Kuzey hattındaki bu köyler yan yana olsa da her birinin kapısı kendisinindir.",
      "Hayat sokakta, avluda ve bahçe kapısında akar. Yıl dönümü ile teşekkür tanıdık bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Bayramda evler birbirine açılır; çiçek o günün iyi dileğini taşır. Köyün sakin ölçüsü, hazırlığın da ölçüsüdür. İnsanlar birbirini uzun yıllardır tanır. Mevsimin çiçekleri bu avlulara yakışır. Her köyün kendi evi, kendi adı ve kendi sakinliği vardır. Bayramda mevsim buketi, evde kalacak bir hediyede orkide, anmada beyaz ve sade bir düzen düşünülür. Komşu köy ayrı bir addır; armağan bu avluya gelir. Çiçek, evin ölçüsünde ve iyi dilekle hazırlanır. Düğün ve bayram, köyde çiçeğin dolu günleridir. Sıradan bir uğrakta mevsim buketi yeter. Çiçek bu avlunun ölçüsünde kalır. İyi dilek kısa tutulur. Komşu köy kendi adıyla anılır. Çiçek, bu avluya ve bu güne göre hazırlanır. Bayramda dilek daha dolu tutulur. Yolçatı çiçekçi hizmeti, Yolçatı’ya çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
];

export const legacyNeighborhoodCopy: Record<
  string,
  { description: string; body: string[]; relatedCategorySlugs: string[] }
> = {
  "ihsaniye": {
    description: "Nilüfer İhsaniye çiçek siparişi: cadde ve apartman kapısına buket, orkide ve kutu. İhsaniye’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "İhsaniye, Nilüfer’in doğu-merkezinde, konutlarla küçük iş yerlerinin iç içe olduğu hareketli bir mahalledir. Balat ve Kültür hemen yakındadır; Beşevler ile Konak da aynı çevrenin parçasıdır. Cadde üzerinde dükkânlar, ara sokaklarda apartmanlar görülür.",
      "İnsanlar birbirini kaldırımdan ve uzun süredir oturdukları binalardan tanır. Doğum günü ve yıl dönümü evde kutlanır. Açılış ve teşekkür iş yerinde daha sade tutulur. Geçmiş olsun kısa bir ziyaretle iletilir; anma günü ağırbaşlı kalır. Mahallenin hareketi caddededir, asıl hayat ise bu evlerin içindedir. Çiçek ikisine de uyar. Komşuluk, dükkândan ve apartmandan yıllardır süren bir tanışıklıktır. Caddeye bakan bir iş yerine derli bir düzen, eve ise daha sıcak bir buket yakışır. Anma günü beyaz ve sade tutulur. Yakın mahalleler ayrı adreslerdir. Çiçek, bu mahallenin kendi gününe göre hazırlanır. Dükkân ile daire aynı mahallede yan yanadır. Çiçek, açılışta derli, evde daha sıcak durur. İyi dilek kısa, hazırlık özenlidir. Yakın mahalleler aynı çevrenin ayrı adresleridir. İhsaniye çiçekçi arayanlar İhsaniye’ye çiçek göndermeyi bu çevre için ister. Nilüfer İhsaniye çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  "ozluce": {
    description: "Nilüfer Özlüce çiçek siparişi: site ve apartman kapısına buket, orkide ve kutu. Özlüce’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Özlüce, Nilüfer’in batısında geniş site blokları ve apartmanların bir arada bulunduğu büyük bir konut mahallesidir. Çamlıca, Ertuğrul, Ataevler ve Odunluk yakın çevrededir. Mahalle yerleşiktir; aynı site içinde birden fazla blok yan yana durur.",
      "Aile kutlamaları, yeni eve taşınma, doğum günü ve yıl dönümü burada sık görülür. Teşekkür ile geçmiş olsun kısa bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Yeni taşınan bir aile ile yıllardır oturan bir komşu aynı çevreyi paylaşır. Çiçek, bir dairenin gününe göre, evin ölçüsünde hazırlanır. Geniş konut blokları ile cadde üzerindeki binalar bu mahallede iç içedir. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Nilüfer Özlüce çiçek siparişi, mahallenin kendi hayatına uyar. Özlüce çiçekçi olarak Özlüce’ye çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  "fsm": {
    description: "Nilüfer FSM çiçek siparişi: Fatih Sultan Mehmet Bulvarı çevresindeki ofis ve konuta buket ile orkide. FSM’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "FSM, Nilüfer’de Fatih Sultan Mehmet Bulvarı boyunca uzanan iş yerleri ve konutların bulunduğu bir hattır. Odunluk, İhsaniye, Özlüce ve Kültür yakın çevrededir. Cadde üzerinde ofisler, plazalar ve zemin kat dükkânları görülür; ara sokaklarda daireler vardır.",
      "Açılış, terfi ve teşekkür iş gününün vesileleridir. Yıl dönümü ve doğum günü akşam, çevredeki evlerde anılır. Anma günü daha ağırbaşlı tutulur. Masa üstünde duracak bir hediye ile akşam götürülecek bir ziyaret buketi bu hatta birlikte düşünülür. İş günü hareketlidir; çiçek ise sade ve derli kalır. Plazalar, ofisler ve ara sokaktaki daireler birbirine yakındır. Hazırlık, günün anlamına göre tamamlanır. Masada duracak bir orkide, açılışta derli bir kutu, akşam ziyaretinde bir buket düşünülür. Ofis ile ev bu hatta yakındır. Çiçek, iş gününün teşekkürüne de evin kutlamasına da uyar. İş gününün teşekkürü ile evin kutlaması bu hatta birlikte düşünülür. Çiçek, seçilen güne göre derli ya da sıcak hazırlanır. İyi dilek kısa tutulur. Yakın mahalleler aynı ofis hattının komşularıdır. Nilüfer FSM çiçek siparişi, mahallenin kendi hayatına uyar. FSM çiçekçi olarak FSM’ye çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  "camlica": {
    description: "Nilüfer Çamlıca çiçek siparişi: konut mahallesinde buket, kutu ve orkide. Çamlıca’ya çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çamlıca, Nilüfer’in batısında, Özlüce ve Ertuğrul’a komşu bir konut mahallesidir. Ataevler ve Alaaddinbey de yakın çevrededir. Apartmanlar ve site blokları yan yana bulunur.",
      "Aile kutlamaları, yeni eve taşınma, doğum günü ve yıl dönümü burada sık görülür. Teşekkür ile geçmiş olsun kısa bir ziyaretin armağanıdır. Anma günü ağırbaşlı tutulur. Yeni taşınan bir aile ile yıllardır oturan bir komşu aynı çevreyi paylaşır. Çiçek, bir dairenin gününe göre, evin ölçüsünde hazırlanır. Geniş konut blokları ile cadde üzerindeki binalar bu mahallede iç içedir. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Nilüfer Çamlıca çiçek siparişi, mahallenin kendi hayatına uyar. Çamlıca çiçekçi olarak Çamlıca’ya çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  "odunluk": {
    description: "Nilüfer Odunluk çiçek siparişi: ofis, plaza ve konuta orkide ile buket. Odunluk’a çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Odunluk, Nilüfer’de ofislerin, plazaların ve konutların bir arada bulunduğu bir mahalledir. Özlüce, İhsaniye, FSM hattı ve Kültür yakın çevrededir. Zemin katlarda dükkânlar, üst katlarda ofisler görülür.",
      "İş yerinde açılış ve teşekkür, evde yıl dönümü ve geçmiş olsun öne çıkar. Terfi ve yeni bir masa, küçük ama özenli bir armağan ister. Anma günü ayrı bir ciddiyetle tutulur. Bulvar çevresinin temposu ile ara sokaktaki evin sakinliği yan yanadır. Çiçek, bu iki güne göre hazırlanır. Teşekkür iş yerine, kutlama eve yakışır. Masada duracak bir orkide, açılışta derli bir kutu, akşam ziyaretinde bir buket düşünülür. Ofis ile ev bu hatta yakındır. Çiçek, iş gününün teşekkürüne de evin kutlamasına da uyar. İş gününün teşekkürü ile evin kutlaması bu hatta birlikte düşünülür. Çiçek, seçilen güne göre derli ya da sıcak hazırlanır. İyi dilek kısa tutulur. Yakın mahalleler aynı ofis hattının komşularıdır. Odunluk’a çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Nilüfer Odunluk çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Aile ziyaretine [buketler](/magaza/buketler), yeni eve ya da masaya bırakılacak hediyeye [orkideler](/magaza/orkideler) yakışır. Küçük bir kutlamada [çiçek kutuları](/magaza/kutular) düzenli bir armağan olur. Açılış için mevsim buketi, anma günü için [çelenkler](/magaza/celenkler) seçilir. Kurdele yazısı, siparişte ilettiğiniz isimle hazırlanır. Evdeki bir kutlama ile iş yerindeki bir teşekkür aynı özeni görür.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  "ertugrul": {
    description: "Nilüfer Ertuğrul çiçek siparişi: Özlüce’ye komşu apartman ve site kapısına buket ile kutu. Ertuğrul’a çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ertuğrul, Nilüfer’in batısında, Özlüce ve Çamlıca’ya komşu bir konut mahallesidir. Alaaddinbey ve Fethiye de yakın çevrededir. Apartmanlar ve site blokları yerleşiktir. Cadde üzerindeki binalarla iç kısımdaki bloklar aynı mahallede yaşar.",
      "Geniş konut blokları ile cadde üzerindeki binalar aynı mahallede yaşar. Yeni evde uzun süre kalacak bir hediye, kutlamada elde taşınacak bir buket düşünülür. Geçmiş olsun ve anma daha sade tutulur. Aileler birbirini blokundan ve sokağından tanır. Çiçek bu komşuluğun içine nazik bir ziyaret olarak girer. Yerleşik hayat, dairenin içindeki kutlamalarda sürer. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Ertuğrul çiçekçi hizmeti, Ertuğrul’a çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  "gorukle": {
    description: "Nilüfer Görükle çiçek siparişi: üniversite çevresindeki site, yurt ve eve buket ile orkide. Görükle’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Görükle, Nilüfer’in güneybatısında, Uludağ Üniversitesi çevresinde yerleşik bir mahalledir. Siteler, yurtlar ve apartmanlar bir aradadır. Balkan, Kızılcıklı, Beşevler ve Dumlupınar yakın çevrededir.",
      "Mezuniyet, doğum günü ve teşekkür burada sık görülür. Aile ziyareti site dairelerinde, küçük bir kutlama öğrenci evlerinde karşılanır. Yıl dönümü ve geçmiş olsun da aynı çevreden istenir. Anma günü sade tutulur. Kampüs kuşağının kalabalığı ile ailelerin oturduğu bloklar bir aradadır. Çiçek, bu iki hayatın gününe göre seçilir. Yurt odası, site dairesi ve cadde üzerindeki ev aynı çevredendir. Mezuniyette daha canlı bir buket, odada birkaç gün duracak bir orkide, anmada sade bir düzen seçilir. Yurt, site ve aile evi aynı kuşaktadır. Çiçek, bu üç hâlin ölçüsüne göre hazırlanır. Kampüs kuşağında bir oda ile bir aile evi yan yanadır. Çiçek, mezuniyette daha canlı, teşekkürde daha sade durur. İyi dilek kısa tutulur. Yakın mahalleler aynı üniversite çevresinin duraklarıdır. Nilüfer Görükle çiçek siparişi, mahallenin kendi hayatına uyar. Görükle çiçekçi olarak Görükle’ye çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  "ataevler": {
    description: "Nilüfer Ataevler çiçek siparişi: güvenlikli site bloklarına buket, orkide ve kutu. Ataevler’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Ataevler, Nilüfer’de geniş site bloklarıyla tanınan bir konut mahallesidir. Beşevler, Özlüce, Çamlıca ve Balat yakın çevrededir. Doğum günü, yıl dönümü ve yeni eve taşınma burada sık hazırlanır.",
      "Geniş konut blokları ile cadde üzerindeki binalar aynı mahallede yaşar. Yeni evde uzun süre kalacak bir hediye, kutlamada elde taşınacak bir buket düşünülür. Geçmiş olsun ve anma daha sade tutulur. Aileler birbirini blokundan ve sokağından tanır. Çiçek bu komşuluğun içine nazik bir ziyaret olarak girer. Yerleşik hayat, dairenin içindeki kutlamalarda sürer. Yeni evde uzun süre kalacak bir orkide, kutlamada bir buket, anmada sade bir düzen seçilir. Komşu mahallelerin siteleri ayrıdır. Çiçek, bu dairenin gününe ve evin ölçüsüne göre hazırlanır. Yeni taşınan aile ile eski komşu aynı çevreyi paylaşır. Çiçek, yeni evde kalıcı, kutlamada elde götürülecek bir armağan olabilir. İyi dilek kısa tutulur. Komşu sitenin kapısı ayrı bir mahalle adıyla anılır. Ataevler çiçekçi hizmeti, Ataevler’e çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü buketi [buketler](/magaza/buketler) sayfasından, evde kalacak hediye [orkideler](/magaza/orkideler) sayfasından seçilebilir. Sade bir kutu düzeni için [çiçek kutuları](/magaza/kutular) vardır. Anma gününün çiçeği [çelenkler](/magaza/celenkler) olur. Geçmiş olsun ve açılışta mevsim çiçekleri de hazırlanır. Günün anlamı neyse çiçek de o anlama göre özenle hazırlanır.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  "balat": {
    description: "Nilüfer Balat çiçek siparişi: cadde dükkânı ve konut kapısına buket ile kutu. Balat’a çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Balat, Nilüfer’de cadde ticaretinin ve konutların bir arada bulunduğu bir mahalledir. İhsaniye, Beşevler, Ataevler ve Kültür yakın çevrededir. Zemin katlarda dükkânlar, üst katlarda daireler görülür.",
      "İnsanlar birbirini kaldırımdan ve uzun süredir oturdukları binalardan tanır. Doğum günü ve yıl dönümü evde kutlanır. Açılış ve teşekkür iş yerinde daha sade tutulur. Geçmiş olsun kısa bir ziyaretle iletilir; anma günü ağırbaşlı kalır. Mahallenin hareketi caddededir, asıl hayat ise bu evlerin içindedir. Çiçek ikisine de uyar. Komşuluk, dükkândan ve apartmandan yıllardır süren bir tanışıklıktır. Caddeye bakan bir iş yerine derli bir düzen, eve ise daha sıcak bir buket yakışır. Anma günü beyaz ve sade tutulur. Yakın mahalleler ayrı adreslerdir. Çiçek, bu mahallenin kendi gününe göre hazırlanır. Dükkân ile daire aynı mahallede yan yanadır. Çiçek, açılışta derli, evde daha sıcak durur. İyi dilek kısa, hazırlık özenlidir. Yakın mahalleler aynı çevrenin ayrı adresleridir. Nilüfer Balat çiçek siparişi, mahallenin kendi hayatına uyar. Balat çiçekçi olarak Balat’a çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  "besevler": {
    description: "Nilüfer Beşevler çiçek siparişi: ev ve ofis kapısına buket, orkide ve kutu. Beşevler’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Beşevler, Nilüfer’de konutların ve ofislerin bir arada bulunduğu yerleşik bir mahalledir. Ataevler, Balat, Görükle ve İhsaniye yakın çevrededir. Apartmanlar düzenlidir; bazı sokaklarda iş yerleri de vardır. Gün içinde hem ev ziyareti hem masa hediyesi hazırlanabilir.",
      "Kutlama evin içinde, açılış dükkânın gününde, anma ailenin istediği sadelikte geçer. Teşekkür ile geçmiş olsun, komşuluğun doğal parçasıdır. Yıl dönümü burada gösterişsiz, içten bir armağan ister. Cadde kalabalık olsa da ziyaretler tanıdıktır. Çiçek, bu tanışıklığın dilidir. İş yeri ile ev aynı mahallede yan yana durur; hazırlık ikisine de uyar. Caddeye bakan bir iş yerine derli bir düzen, eve ise daha sıcak bir buket yakışır. Anma günü beyaz ve sade tutulur. Yakın mahalleler ayrı adreslerdir. Çiçek, bu mahallenin kendi gününe göre hazırlanır. Dükkân ile daire aynı mahallede yan yanadır. Çiçek, açılışta derli, evde daha sıcak durur. İyi dilek kısa, hazırlık özenlidir. Yakın mahalleler aynı çevrenin ayrı adresleridir. Beşevler çiçekçi hizmeti, Beşevler’e çiçek göndermek isteyenlere mahallenin gündelik düzenine uygun bir hazırlık sunar. Kısa bir dilek, kartta sizin sözünüzle durur.",
      "Yıl dönümü ve doğum günü için [buketler](/magaza/buketler) öne çıkar. Ofis masası ya da ev holü için [orkideler](/magaza/orkideler) uygun bir hediyedir. Daha derli bir sunum isteyenler [çiçek kutuları](/magaza/kutular) sayfasına bakabilir. Anma günlerinde [çelenkler](/magaza/celenkler) hazırlanır. Geçmiş olsun ve teşekkürde mevsim çiçekleri yeterlidir. Sade bir ziyaret ile daha dolu bir kutlama yan yana düşünülebilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  "cekirge": {
    description: "Osmangazi Çekirge çiçek siparişi: kaplıca çevresindeki otel, ev ve iş yerine buket ile orkide. Çekirge’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çekirge, Osmangazi’de kaplıca otelleri ve köklü konutların bulunduğu bilinen bir semttir. Yokuş boyunca oteller, evler ve küçük iş yerleri yan yana durur. Semt, Bursa’nın tanıdık konuk ağırlama çevresindendir.",
      "Yokuş boyunca kaplıca otelleri, köklü evler ve küçük iş yerleri bir aradadır. Geçmiş olsun, teşekkür ve yıl dönümü bu semtte sık görülür. Otelde kalan bir konuğa, evdeki bir ziyarete ya da küçük bir iş yerine çiçek yollanır. Anma günü daha ağırbaşlı tutulur. Semt, Bursa’nın uzun süredir misafir ağırlayan yüzlerindendir. Çiçek de bu tanışıklığa uygun, özenli bir jest olarak hazırlanır. Yokuşun evleri ile oteller aynı semtin iki yüzüdür. Kırmızı gül kutlamada, sade bir mevsim buketi geçmiş olsunda, beyaz bir düzen anmada seçilir. Otel, ev ve küçük iş yeri aynı yokuştadır; çiçek her birinin kendi hâline uyar. Karttaki ad açık ve kısa kalır. Yokuşun otelleri ve köklü evleri aynı semtin iki yüzüdür. Çiçek, konuğa da ev sahibine de aynı özenle hazırlanır. İyi dilek kısa tutulur. Semtin köklü hâli, armağanın da ölçüsüdür. Çekirge çiçekçi arayanlar Çekirge’ye çiçek göndermeyi bu çevre için ister. Osmangazi Çekirge çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  "heykel": {
    description: "Osmangazi Heykel çiçek siparişi: şehir merkezindeki ofis, mağaza ve konuta buket ile orkide. Heykel’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Heykel, Osmangazi’de Atatürk anıtının çevresindeki şehir merkezidir. Çarşı, ofisler ve üst katlardaki iş yerleri bir aradadır.",
      "Çarşı, pasajlar ve ofisler gün boyu açıktır. Açılış, teşekkür ve yıl dönümü bu caddelerde sık istenir. Doğum günü akşam, merkeze yakın bir adreste anılabilir. Anma günü ayrı bir ağırbaşlılık ister. Kalabalığın içinde çiçek, kısa ve yerinde bir jest olarak durur. Çekirge’nin yokuşu, Demirtaş’ın iş yerleri ve Soğanlı’nın konutları bu meydanın dışında kalır. Heykel ise şehrin buluşma yeridir. Hazırlık, günün sebebine ve mekânın ölçüsüne göre tamamlanır. Açılışta gül, teşekkürde mevsim çiçeği, anmada beyaz bir düzen düşünülür. Çekirge, Demirtaş ve Soğanlı bu meydanın dışındadır. Heykel’de armağan kalabalığın içinde sade kalır. Boy, mekânın ölçüsüne göre seçilir. Meydanın çevresindeki ofisler ve mağazalar gün boyu açıktır. Çiçek bu kalabalığın içinde sade bir jest olarak kalır. İyi dilek kısa, hazırlık özenlidir. Merkezde armağan kısa, temiz ve yerinde durur. Osmangazi Heykel çiçek siparişi, mahallenin kendi hayatına uyar. Heykel çiçekçi olarak Heykel’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlama günlerinde [buketler](/magaza/buketler) elden verilir. Evde ya da iş yerinde birkaç gün duracak bir jest için [orkideler](/magaza/orkideler) saksısıyla hazırlanır. Toplu durmasını istediğiniz hediyede [çiçek kutuları](/magaza/kutular) tercih edilir. Taziye ve anmada [çelenkler](/magaza/celenkler) kullanılır; kurdeledeki ad siparişle birlikte yazılır. Düzen, evin ölçüsüne ve günün sebebine göre kurulur.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  "demirtas": {
    description: "Osmangazi Demirtaş çiçek siparişi: sanayi ve çevre konuta buket, çelenk ve kutu. Demirtaş’a çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’de sanayi tesislerinin ve çevre konutların bulunduğu bir bölgedir.",
      "Açılış, teşekkür ve geçmiş olsun iş yerlerinde sık görülür. Çevre konutlarda doğum günü, yıl dönümü ve anma da hazırlanır. Geniş tesisler ile evler aynı bölgede durur. Çiçek, günün sebebine göre bir iş yerine ya da bir aileye göre seçilir. İş yerinde düzen daha derli, evde ise daha sıcak tutulur. İkisi de aynı özenle hazırlanır. Bölgenin günü bu iki ölçü arasında akar. İş yerinde derli bir düzen, evde daha sıcak bir buket, anmada beyaz bir çelenk düşünülür. Tesis ile konut aynı kesimde olsa da günün anlamı ayrıdır. Çiçek, seçilen anlama göre hazırlanır. Tesisin açılışı ile evin ziyareti ayrı anlamlar taşır. Çiçek her birinde kendi ölçüsünde kalır. İyi dilek kısa, hazırlık özenlidir. İş yeri ve çevre ev, aynı bölgenin iki yüzüdür. Çiçek ikisine de uyar. Demirtaş çiçekçi arayanlar Demirtaş’a çiçek göndermeyi bu çevre için ister. Osmangazi Demirtaş çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Siparişinizi WhatsApp düğmesinden iletebilirsiniz.",
    ],
  },
  "soganli": {
    description: "Osmangazi Soğanlı çiçek siparişi: konut mahallesinde buket, orkide ve kutu. Soğanlı’ya çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Soğanlı, Osmangazi’de apartmanların bulunduğu yerleşik bir konut mahallesidir. Doğum günü, teşekkür ve geçmiş olsun burada sade karşılanır. Mahalle, şehir içindeki tanıdık apartman düzenindedir.",
      "Sokaklar tanıdıktır; aileler uzun süredir bu yokuşta oturur. Doğum günü, teşekkür, geçmiş olsun ve anma evlerde sade karşılanır. Ara sıra zemin kattaki küçük bir iş yerinin açılışı da aynı çevrede görülür. Yokuşun apartmanları birbirine yakındır. Komşuluk, kapı komşuluğudur. Çiçek, bu yokuştaki bir eve nazik bir ziyaret olarak gelir ve günün anlamına göre seçilir. Her ev kendi sokağındadır. Yokuştaki bir eve sade bir buket, birkaç gün kalacak bir hediyeye orkide, anmaya beyaz bir düzen yakışır. Komşu mahalleler aynı yamacın ayrı sokaklarıdır. Çiçek, bu evin ölçüsünde hazırlanır. Bu yokuşta komşuluk yıllardır sürer. Çiçek, eve nazik bir ziyaret olarak gelir. İyi dilek kısa, hazırlık özenlidir. Komşu yokuş ayrı bir mahalledir. Çiçek, bu evin ölçüsünde hazırlanır. Aileler birbirini yıllardır tanır. Hazırlık atölyede taze tamamlanır. Soğanlı çiçekçi arayanlar Soğanlı’ya çiçek göndermeyi bu çevre için ister. Osmangazi Soğanlı çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Siparişi WhatsApp düğmesi üzerinden yazmanız yeterlidir.",
    ],
  },
  "hamitler": {
    description: "Osmangazi Hamitler çiçek siparişi: konut ve çevre iş yerine buket ile çelenk. Hamitler’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Hamitler, Osmangazi’de konutların bulunduğu, organize sanayi yönüne doğru uzanan bir mahalledir. Apartmanlar ve müstakil düzenli evler aynı çevrede görülebilir. Adres, sokak ve alıcıyla kurulur.",
      "Açılış, teşekkür ve geçmiş olsun iş yerlerinde sık görülür. Çevre konutlarda doğum günü, yıl dönümü ve anma da hazırlanır. Geniş tesisler ile evler aynı bölgede durur. Çiçek, günün sebebine göre bir iş yerine ya da bir aileye göre seçilir. İş yerinde düzen daha derli, evde ise daha sıcak tutulur. İkisi de aynı özenle hazırlanır. Bölgenin günü bu iki ölçü arasında akar. İş yerinde derli bir düzen, evde daha sıcak bir buket, anmada beyaz bir çelenk düşünülür. Tesis ile konut aynı kesimde olsa da günün anlamı ayrıdır. Çiçek, seçilen anlama göre hazırlanır. Tesisin açılışı ile evin ziyareti ayrı anlamlar taşır. Çiçek her birinde kendi ölçüsünde kalır. İyi dilek kısa, hazırlık özenlidir. İş yeri ve çevre ev, aynı bölgenin iki yüzüdür. Çiçek ikisine de uyar. Osmangazi Hamitler çiçek siparişi, mahallenin kendi hayatına uyar. Hamitler çiçekçi olarak Hamitler’e çiçek göndermeyi bu sokaklar için üstleniriz. Karta geçecek cümleyi siz kurarsınız.",
      "Kutlamaya [buketler](/magaza/buketler) eşlik eder. Birkaç gün kalacak saksı hediyesi [orkideler](/magaza/orkideler) ile karşılanır. İş yeri açılışında daha toplu bir armağan için [çiçek kutuları](/magaza/kutular) uygundur. Taziye ve anmada [çelenkler](/magaza/celenkler) hazırlanır; isim kurdeleye siparişteki yazıyla geçer. Açılışta derli, ziyarette sıcak, anmada ağırbaşlı bir düzen kurulur.",
      "Seçiminizi WhatsApp düğmesine yazmanız yeterlidir.",
    ],
  },
  "erikli": {
    description: "Yıldırım Erikli çiçek siparişi: yamaçtaki apartman kapısına buket ve kutu. Erikli’ye çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Erikli, Yıldırım’da yamaca yaslanmış apartmanların bulunduğu bir konut mahallesidir. Sokaklar yokuşludur; binalar birbirine yakındır. Aynı yokuşta birden fazla apartman yan yana durabilir. Mahalle, ailelerin oturduğu yerleşik bir çevredir.",
      "Yamaca yaslanmış apartmanlarda hayat yerleşiktir. Yıl dönümü ve doğum günü evin içinde kutlanır. Teşekkür kısa bir ziyaretle iletilir. Anma günü ailenin istediği ağırbaşlılıkta kalır. Komşuluk, aynı sokağı yıllardır paylaşan ailelerin arasındadır. Çiçek de bu yerleşik ölçünün içinde hazırlanır. İlçenin diğer mahalleleri aynı yamacın komşularıdır. Yokuştaki bir eve sade bir buket, birkaç gün kalacak bir hediyeye orkide, anmaya beyaz bir düzen yakışır. Komşu mahalleler aynı yamacın ayrı sokaklarıdır. Çiçek, bu evin ölçüsünde hazırlanır. Bu yokuşta komşuluk yıllardır sürer. Çiçek, eve nazik bir ziyaret olarak gelir. İyi dilek kısa, hazırlık özenlidir. Komşu yokuş ayrı bir mahalledir. Çiçek, bu evin ölçüsünde hazırlanır. Aileler birbirini yıllardır tanır. Hazırlık atölyede taze tamamlanır. Erikli’ye çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Yıldırım Erikli çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  "millet": {
    description: "Yıldırım Millet çiçek siparişi: sık konut dokusundaki daire kapısına buket ve orkide. Millet’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Millet, Yıldırım’da apartmanların sık bulunduğu bir konut mahallesidir. Sokaklar yerleşiktir; daireler birbirine yakındır. Mahalle, aile yaşamının içindedir. Ara sıra zemin katta küçük bir iş yeri de görülebilir.",
      "Yamaca yaslanmış apartmanlarda hayat yerleşiktir. Yıl dönümü ve doğum günü evin içinde kutlanır. Teşekkür kısa bir ziyaretle iletilir. Anma günü ailenin istediği ağırbaşlılıkta kalır. Komşuluk, aynı sokağı yıllardır paylaşan ailelerin arasındadır. Çiçek de bu yerleşik ölçünün içinde hazırlanır. İlçenin diğer mahalleleri aynı yamacın komşularıdır. Yokuştaki bir eve sade bir buket, birkaç gün kalacak bir hediyeye orkide, anmaya beyaz bir düzen yakışır. Komşu mahalleler aynı yamacın ayrı sokaklarıdır. Çiçek, bu evin ölçüsünde hazırlanır. Bu yokuşta komşuluk yıllardır sürer. Çiçek, eve nazik bir ziyaret olarak gelir. İyi dilek kısa, hazırlık özenlidir. Komşu yokuş ayrı bir mahalledir. Çiçek, bu evin ölçüsünde hazırlanır. Aileler birbirini yıllardır tanır. Hazırlık atölyede taze tamamlanır. Millet’e çiçek göndermek, buradaki ziyaretlerin ve kutlamaların parçasıdır. Yıldırım Millet çiçek siparişini sade ve özenli hazırlarız. İsim ve kısa dilek kartta yerini bulur.",
      "Doğum gününde [buketler](/magaza/buketler), evde kalacak hediyede [orkideler](/magaza/orkideler) sık istenir. Daha derli bir hediye için [çiçek kutuları](/magaza/kutular) bakılır. Aile büyüğü için anma gününde [çelenkler](/magaza/celenkler) düzenlenir. Teşekkür ziyaretinde mevsim buketi yerinde bir seçimdir. Armağan, gideceği evin ölçüsüne göre seçilir.",
      "Hazır olduğunuzda WhatsApp düğmesinden bize yazabilirsiniz.",
    ],
  },
  "arabayatagi": {
    description: "Yıldırım Arabayatağı çiçek siparişi: doğu yakasındaki konut kapısına buket ve kutu. Arabayatağı’na çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Arabayatağı, Yıldırım’ın doğusunda apartmanların bulunduğu bir konut mahallesidir. Aileler burada uzun süredir oturur. Aynı caddede birden fazla bina yan yana durabilir.",
      "Sokaklar tanıdıktır; aileler uzun süredir bu yokuşta oturur. Doğum günü, teşekkür, geçmiş olsun ve anma evlerde sade karşılanır. Ara sıra zemin kattaki küçük bir iş yerinin açılışı da aynı çevrede görülür. Yokuşun apartmanları birbirine yakındır. Komşuluk, kapı komşuluğudur. Çiçek, bu yokuştaki bir eve nazik bir ziyaret olarak gelir ve günün anlamına göre seçilir. Her ev kendi sokağındadır. Yokuştaki bir eve sade bir buket, birkaç gün kalacak bir hediyeye orkide, anmaya beyaz bir düzen yakışır. Komşu mahalleler aynı yamacın ayrı sokaklarıdır. Çiçek, bu evin ölçüsünde hazırlanır. Bu yokuşta komşuluk yıllardır sürer. Çiçek, eve nazik bir ziyaret olarak gelir. İyi dilek kısa, hazırlık özenlidir. Komşu yokuş ayrı bir mahalledir. Çiçek, bu evin ölçüsünde hazırlanır. Aileler birbirini yıllardır tanır. Hazırlık atölyede taze tamamlanır. Arabayatağı çiçekçi arayanlar Arabayatağı’ya çiçek göndermeyi bu çevre için ister. Yıldırım Arabayatağı çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Doğum günü ve yıl dönümünde [buketler](/magaza/buketler) klasik bir seçimdir. Birkaç gün evde kalacak hediye için [orkideler](/magaza/orkideler) uygundur. Derli toplu bir armağan isteyenler [çiçek kutuları](/magaza/kutular) arasından seçer. Anma ve taziye günlerinde [çelenkler](/magaza/celenkler) hazırlanır; kurdeledeki isim siparişle birlikte iletilir. Teşekkür ve geçmiş olsun ziyaretlerinde mevsim buketi sade durur. Renk ve boy, günün anlamına göre birlikte seçilir.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
  "esenevler": {
    description: "Yıldırım Esenevler çiçek siparişi: Uludağ eteklerindeki konut kapısına buket ve çelenk. Esenevler’e çiçek gönderimi aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Esenevler, Yıldırım’da Uludağ eteklerine yakın konutların bulunduğu bir mahalledir. Doğum günü, teşekkür ve anma burada hazırlanan sebeplerdendir. Mahalle yerleşik bir aile çevresidir.",
      "Sokaklar tanıdıktır; aileler uzun süredir bu yokuşta oturur. Doğum günü, teşekkür, geçmiş olsun ve anma evlerde sade karşılanır. Ara sıra zemin kattaki küçük bir iş yerinin açılışı da aynı çevrede görülür. Yokuşun apartmanları birbirine yakındır. Komşuluk, kapı komşuluğudur. Çiçek, bu yokuştaki bir eve nazik bir ziyaret olarak gelir ve günün anlamına göre seçilir. Her ev kendi sokağındadır. Yokuştaki bir eve sade bir buket, birkaç gün kalacak bir hediyeye orkide, anmaya beyaz bir düzen yakışır. Komşu mahalleler aynı yamacın ayrı sokaklarıdır. Çiçek, bu evin ölçüsünde hazırlanır. Bu yokuşta komşuluk yıllardır sürer. Çiçek, eve nazik bir ziyaret olarak gelir. İyi dilek kısa, hazırlık özenlidir. Komşu yokuş ayrı bir mahalledir. Çiçek, bu evin ölçüsünde hazırlanır. Aileler birbirini yıllardır tanır. Hazırlık atölyede taze tamamlanır. Esenevler çiçekçi arayanlar Esenevler’e çiçek göndermeyi bu çevre için ister. Yıldırım Esenevler çiçek siparişi, günün sebebine göre hazırlanır. Karttaki sözü siz seçersiniz; hazırlık o cümleye göre tamamlanır.",
      "Ziyaret buketi [buketler](/magaza/buketler) arasından, kalıcı bir masa hediyesi [orkideler](/magaza/orkideler) arasından seçilir. Açılış ve teşekkürde sade bir düzen, özel bir günde ise [çiçek kutuları](/magaza/kutular) düşünülebilir. Anma ve taziye için [çelenkler](/magaza/celenkler) hazırlanır; kurdele metni baştan iletilir. Karttaki dilek, sizin seçtiğiniz sözle yazılır.",
      "Beğendiğiniz düzeni WhatsApp düğmesinden bize iletebilirsiniz.",
    ],
  },
};
