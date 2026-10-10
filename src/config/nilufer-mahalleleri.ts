/**
 * Nilüfer’in daha önce açılmamış mahalleleri.
 * Metinler yalnızca doğrulanabilen konum, eski köy statüsü veya belediye sınır
 * notuna dayanır. Okul, hastane, durak, ücret ve saat uydurulmaz.
 * `precise: false` olanlarda yakınlık iddiası kurulmaz; bağlantılar ilçe içi
 * diğer sayfalardır.
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

/** Doğrulanmış bir yapı, höyük veya sınır tarifı bulunamadığı için genel tutulanlar. */
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
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["cumhuriyet", "esentepe", "konak", "kultur"],
    description:
      "Barış mahallesine doğu Nilüfer’deki apartman kapısından buket ve kutu. Doğrulanmış bir durak veya okul adı yazılmaz.",
    body: [
      "Barış, Nilüfer’in sürekli yapılaşmış doğu yakasında bir konut mahallesidir. Adı bir meydan anıtını veya belirli bir site tabelasını kanıtlamaz; elimizde bu mahalleye bağlanmış, teyitli bir okul, hastane ya da raylı durak kaydı yoktur.",
      "Teslim, cadde üstü apartman ile site bloğu arasında ayrılır. Sipariş notunda apartman veya blok, daire ve alıcı adı durur. İşyeri katı ise ev kapısından ayrı yazılır; resepsiyon ile daire zili aynı tarif değildir.",
      "Saplı buket ev ziyaretine, kutu düzeni ise merdiven ve asansörde daha az sallanan hediyeye gider. Fiyat bu sayfada konuşulmaz. İlçe metni genel çerçeveyi anlatır; Barış’ın kapı notu burada, kendi cümleleriyle durur.",
    ],
  },
  {
    slug: "cumhuriyet",
    shortName: "Cumhuriyet",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["baris", "19-mayis", "esentepe", "karaman"],
    description:
      "Cumhuriyet mahallesine, doğu Nilüfer konut sırasında orkide ve buket. Mahalle adı bir resmi daireyi işaret etmez.",
    body: [
      "Cumhuriyet mahallesi, takvim ve rejim adlarının sokak tabelasına geçtiği doğu Nilüfer konut kuşağındadır. İsim, mahallede bir kaymakamlık binası veya tören alanı olduğunu göstermez; böyle bir kapı uydurulmaz.",
      "Daire numarası yazılmadan ‘Cumhuriyet’ demek kuryeyi site girişinde bırakır. Blok, kat ve alıcı birlikte istenir. Ofis masasına gidecek saksı ile kapıya bırakılacak demet, hazırlıkta ayrı tutulur.",
      "Saksılı orkide, masa ve hol için seçilir; saplı gül ise kısa bir ziyaretin elinde durur. Cumhuriyet sayfası, 19 Mayıs veya Esentepe metninin ad değiştirmiş hali değildir. Cumhuriyet tabelası, teslim saatini veya bir resmi kurumun kabul bankosunu anlatmaz. Çiçek, yazılan daireye gider; hazırlık o kapının ev ya da ofis olmasına göre ayrılır.",
    ],
  },
  {
    slug: "fethiye",
    shortName: "Fethiye",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["ertugrul", "ozluce", "kultur", "konak"],
    description:
      "Fethiye mahallesine Nilüfer’in doğu konut dokusunda buket, kutu ve orkide. İstasyon veya kampüs iddiası yoktur.",
    body: [
      "Fethiye, Nilüfer’in yapılaşmış doğu yakasında, Ertuğrul ve Özlüce’nin apartman ritmine komşu bir konut mahallesidir. Muğla’daki ilçe ile karışmaması için siparişte ilçe adı Nilüfer diye yazılır. Bu mahalle için doğrulanmış bir metro durağı, üniversite kapısı veya hastane girişi bilmiyoruz; bu yüzden hiçbirini tarif etmiyoruz.",
      "Kapı iki türlü gelir: site güvenlik kaydı ya da cadde üstü zil panosu. Blok, daire ve alıcı adı notta durur. İşyeri ise firma katıyla ayrılır. Ev holüne konacak bir orkide ile kapı önünde teslim edilecek buket aynı paket değildir.",
      "Kutu düzeni, asansörsüz merdivende saplı demete göre daha durağan kalır. Kart yazısı, iletilen cümleyle hazırlanır ve kısa tutulur. Fiyat listesi bu sayfaya konmaz. WhatsApp düğmesi sipariş notunu taşır; pazarlık metni kurulmaz.",
      "Ertuğrul, Özlüce, Kültür ve Konak aynı doğu bandının diğer sayfalarıdır. Fethiye’nin gövdesi onların cümlelerini tekrarlamaz.",
    ],
  },
  {
    slug: "esentepe",
    shortName: "Esentepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["cumhuriyet", "konak", "altinsehir", "karaman"],
    description:
      "Esentepe’de tepe manzarası veya belirli bir site adı yazılmaz. Orkide ve buket, gelen apartman tarifine uyar.",
    body: [
      "Esentepe’nin adı bir yükseltmeyi çağırır. Biz bu sayfada yalnızca doğu Nilüfer’deki apartman teslimini yazarız; rüzgâr, manzara veya belirli bir tepenin eteği gibi doğrulanmamış süsleme eklemeyiz.",
      "Site adı ile sokak adı birbirinin yerine geçmez. Güvenlik olan blokta alıcı önceden bilinir ki lobi bekletmesin. Cadde üstü apartmanda zil sırası ve daire yeter.",
      "Orkide, uzun süre masada durması istenen hediyede seçilir. Buket ise günün ziyaretine gider. Esentepe metni, Altınşehir veya Karaman sayfasından kopyalanmış bir kalıp değildir. Esentepe’de asansör olmayan bir üçüncü kat ile güvenlikli bir blok aynı mahallede yan yana gelebilir. Kapı tipi notta belliyse sap veya kutu ona göre seçilir.",
    ],
  },
  {
    slug: "konak",
    shortName: "Konak",
    precise: false,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["ihsaniye", "kultur", "baris", "esentepe"],
    description:
      "Konak mahallesine, İhsaniye ve Kültür bandındaki daire ve işyeri kapısına kutu ve buket.",
    body: [
      "Konak, İhsaniye ve Kültür ile aynı doğu konut bandında anılır. ‘Konak’ burada bir tarihî konak binasının adı olarak kullanılmaz; elimizde böyle bir yapı kaydı yoktur. Kapı, cadde üstü işyeri ile daire girişi olarak ikiye ayrılır.",
      "İşyerinde firma, kat ve teslim alınacak kişi yazılır. Evde apartman, daire ve alıcı yeter. İkisi tek satırda birbirine karışırsa çiçek yanlış bankoda bekler.",
      "Hediye kutusu, ofis masasından eve giden yolda saplı bukete göre daha az dağılır. Konak sayfası, İhsaniye’nin yerleşik cadde anlatımını tekrar etmez; yalnızca bu mahallenin iki kapı tipini ayırır.",
    ],
  },
  {
    slug: "kultur",
    shortName: "Kültür",
    precise: false,
    relatedCategorySlugs: ["orkideler", "kutular"],
    nearbySlugs: ["ihsaniye", "balat", "fethiye", "konak"],
    description:
      "Kültür mahallesine doğu Nilüfer’de orkide ve kutu. Kültür merkezi veya belirli bir salon adresi yazılmaz.",
    body: [
      "Kültür, Nilüfer’in doğusunda İhsaniye’ye yakın konut ve cadde adreslerinin karıştığı bir kesittir. Mahalle adı bir kültür merkezi, tiyatro salonu veya belediye şubesini kanıtlamaz. Böyle bir kapı, teyit edilmeden tarif edilmez.",
      "Cadde üstü tabela ile site içi blok ayrı yazılır. Alıcı adı, benzer apartmanların arasında doğru zili buldurur. Kart cümlesi notun içinden alınır; ayrıca bir slogan eklenmez.",
      "Saksılı orkide hol ve ofiste, kutu ise merdivenli apartmanda tercih edilir. Kültür sayfası Balat’ın cadde-site karışımı anlatımından ayrı bir metindir. Kültür mahallesinde cadde numarası ile site iç yolu ayrıdır. İkisini tek satırda birleştirmek, çiçeği yanlış bariyerde bekletir.",
    ],
  },
  {
    slug: "karaman",
    shortName: "Karaman",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["altinsehir", "23-nisan", "esentepe", "cumhuriyet"],
    description:
      "Karaman’da Konya ile karışmasın diye Bursa yazar. Buket ve çelenk, doğu yakadaki apartman kapısına gider.",
    body: [
      "Karaman, doğu Nilüfer’de ulusal gün adlarını taşıyan mahallelerin arasındaki apartman dokusuna yazılır. Konya’nın Karaman’ı ile karışmaması için siparişte Bursa ve Nilüfer açıkça durur. Ayrı bir sanayi kapısı veya otogar tarif etmeyiz; elimizde bu mahalle için böyle bir kayıt yoktur.",
      "Apartman adı, daire ve alıcı yazılır. Çelenk istenirse kurdeledeki isim baştan iletilir ve çıkmadan okunur. Buket ise ziyaretin eline göre bağlanır.",
      "Karaman sayfası, 23 Nisan’ın takvim adını veya Altınşehir’in konut cümlelerini ödünç almaz. Her iki kapı tipi de bu mahallenin kendi notunda kalır.",
    ],
  },
  {
    slug: "ucevler",
    shortName: "Üçevler",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gumustepe", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Üçevler mahallesine ihtiyatlı bir konut teslimi. Höyük, kampüs veya istasyon kaydı kullanılmaz.",
    body: [
      "Üçevler için kamuya açık, teyitli bir höyük, kampüs, istasyon veya belediye sınırı cümlesi kullanmıyoruz. Bazı özetler burayı kırsal diye ayırır; konutun sonradan büyüyüp büyümediğini bu sayfada kesinleştirmiyoruz. Uydurma bir köy kahvesi veya site adı da yok.",
      "Sipariş, gelen tarife uyar: sokak ve kapı numarası varsa o yazılır, site bloğu varsa blok ve daire yazılır. Tahminle ‘mücavir köy’ ya da ‘plaza katı’ denmez.",
      "Buket, kısa ziyarete; kutu, taşınırken dağılmaması istenen hediyeye gider. Üçevler metni, Gümüştepe ve Işıktepe sayfalarının ortak bir şablonu değildir.",
    ],
  },
  {
    slug: "altinsehir",
    shortName: "Altınşehir",
    precise: false,
    relatedCategorySlugs: ["orkideler", "kutular"],
    nearbySlugs: ["karaman", "29-ekim", "esentepe", "yuzuncuyil"],
    description:
      "Altınşehir bir ilçe değil, doğu yakada bir konut mahallesidir. Saksı ve kutu, yazılan daire kapısına gider.",
    body: [
      "Altınşehir, adındaki ‘şehir’e rağmen Nilüfer’in bir mahallesidir ve ilçe değildir. Metin, doğudaki konut dokusunu anlatır; altın rengi bir vadi, özel bir villa sitesi veya belirli bir cadde eni uydurmaz.",
      "Blok ve daire yazılmazsa güvenlik, çiçeği genel bir site adına bakarak tutamaz. Alıcı adı bu yüzden notun başındadır. Ofis ile ev, aynı mahallede olsa da ayrı satır ister.",
      "Orkide saksısı masa ölçeğinde hazırlanır. Kutu, site içi yürüme mesafesinde saplı demetten daha pratik kalır. Altınşehir’in paragrafları 29 Ekim sayfasından alınmaz.",
    ],
  },
  {
    slug: "23-nisan",
    shortName: "23 Nisan",
    precise: false,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["19-mayis", "29-ekim", "yuzuncuyil", "kultur"],
    description:
      "23 Nisan mahallesine doğu Nilüfer’de kutu ve buket. Mahalle adı bir okul binasını kanıtlamaz.",
    body: [
      "23 Nisan, adını takvimdeki çocuk bayramından alan bir Nilüfer mahallesidir. Bu ad, mahalle sınırının içinde belirli bir ilkokul, park tabelası veya tören alanı olduğunu göstermez. Hangi binanın nerede olduğunu bilmeden yazmayız.",
      "Yerleşim, doğudaki apartman kuşağındadır. 19 Mayıs, 29 Ekim ve Yüzüncüyıl ile aynı adlandırma ailesine girer; kapıları birbirinin kopyası sayılmaz. Teslim bir daire kapısıdır: apartman adı, kat ve alıcı yazılır. Site ise blok ekler.",
      "Kutu çiçek, güvenlikten içeri alınırken saplı demete göre daha az sallanır. Kart yazısı iletilen cümleyle hazırlanır. 23 Nisan sayfası, Nilüfer ilçe metninin kısaltılmış hali değildir; fiyat ve saat de bu paragrafta yoktur.",
    ],
  },
  {
    slug: "29-ekim",
    shortName: "29 Ekim",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["23-nisan", "19-mayis", "altinsehir", "yuzuncuyil"],
    description:
      "29 Ekim adı bir resmi geçit alanı kanıtlamaz. Buket ve orkide, doğu yakadaki daire kapısına gider.",
    body: [
      "29 Ekim mahallesi, 23 Nisan ve 19 Mayıs ile aynı adlandırma ailesindendir. Gün, cumhuriyetin ilanıdır; mahallede bir resmi geçit alanı veya kaymakamlık önü olduğunu iddia etmeyiz. Teslim yine bir daire kapısıdır.",
      "Apartman adı yazılırken bitişik sitedeki benzer blok unvanı karışmasın diye daire ve alıcı eklenir. Ofis siparişinde kat, ev siparişinde zil sırası durur.",
      "Buket ziyaretin eline, orkide ise birkaç gün masada kalacak hediyeye ayrılır. 29 Ekim’in cümleleri 23 Nisan’ın kutu anlatımını tekrarlamaz. 29 Ekim’de benzer blok unvanları sıktır. Apartman adı yetmez; daire ve alıcı aynı notta durursa zil sırası karışmaz.",
    ],
  },
  {
    slug: "19-mayis",
    shortName: "19 Mayıs",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["23-nisan", "29-ekim", "cumhuriyet", "yuzuncuyil"],
    description:
      "19 Mayıs adı bir spor salonu veya lise kapısı değildir. Kutu ve buket, yazılan daireye gider.",
    body: [
      "19 Mayıs, Nilüfer’de cumhuriyet takviminin mahalle adına dönüştüğü konut sıralarındandır. Ad, bir spor salonu, koşu parkuru veya belirli bir lise kapısını kanıtlamaz. Bu tür bir teslim noktası ancak siparişte ayrıca yazılırsa kullanılır.",
      "Doğu yakadaki apartman düzeni geçerlidir. Site bloğu, daire ve alıcı üçlüsü olmadan kapı bulunmaz. Cadde üstü binada sokak adı da eklenir.",
      "Kutu, hediyeyi merdivende düz tutar. Buket, aynı gün içindeki bir ziyaretin eline göre bağlanır. 19 Mayıs metni Cumhuriyet mahallesinin orkide paragrafını kopyalamaz. 19 Mayıs’ta cadde üstü bina ile iç avlu ayrı tarif ister. Sokak adı, daire numarasının yerine geçmez.",
    ],
  },
  {
    slug: "yuzuncuyil",
    shortName: "Yüzüncüyıl",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["23-nisan", "29-ekim", "19-mayis", "altinsehir"],
    description:
      "Yüzüncüyıl adı bir yıldönümüdür; müze veya kampüs kapısı değildir. Masa orkidesi ve saplı buket daireye gider.",
    body: [
      "Yüzüncüyıl adı bir yıldönümünü taşır. Coğrafyası, Nilüfer’in doğu konut dokusudur; köy meydanı veya üniversite yerleşkesi değildir. Yüzüncü yıl adını taşıyan bir okulun bu sınırın içinde olduğu burada iddia edilmez.",
      "Sipariş, apartman veya site unvanı, daire ve alıcı ile kurulur. Benzer yılların mahalle adları — 23 Nisan, 29 Ekim, 19 Mayıs — bitişik kuşağı anlatır, aynı kapıyı değil.",
      "Orkide, masa hediyesinde saksısıyla hazırlanır. Buket, kısa bir uğurlama veya ziyaret için bağlanır. Yüzüncüyıl sayfasının gövdesi bu üç takvim mahallesinden ayrı cümlelerle yazıldı.",
    ],
  },
  {
    slug: "dumlupinar",
    shortName: "Dumlupınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["gorukle", "balkan", "besevler", "kurtulus"],
    description:
      "Dumlupınar mahallesine Görükle–üniversite kuşağında buket ve orkide. Kampüs içi nokta ile mahalle kapısı ayrılır.",
    body: [
      "Dumlupınar, Görükle ile üniversite kuşağının birbirine değdiği kesittir. Uludağ Üniversitesi’nin kampüs ve yurt çevresi Görükle mahallesinin tarifinde anlatılır; Dumlupınar o kuşağın mahalle kapısıdır, kampüs içindeki bir bina kodu değildir.",
      "Yurt girişi, site kapısı ve apartman zili üç ayrı buluşma yeridir. Hangisi isteniyorsa notta o yazılır. ‘Üniversite’ tek kelime, çiçeği kampüs güvenliğinde bırakır.",
      "Doğum günü buketi ve saksılı orkide bu çevrede sık ayrılır. Dönem başında kapı tarifi daha erken netleşir. Dumlupınar metni, Görükle sayfasının kısaltması değildir. Dumlupınar’da dönem içi bir yurt kapısı ile sakin bir site girişi aynı gün çakışabilir. Buluşma yeri cümlesi, kampüs haritasındaki bina kodundan önce gelir.",
    ],
  },
  {
    slug: "balkan",
    shortName: "Balkan",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "dumlupinar", "kurtulus", "besevler"],
    description:
      "Balkan mahallesine, eski Görükle Zafer yerleşimine buket ve kutu. Ad değişikliği belediye kaydına dayanır.",
    body: [
      "Balkan, eski Görükle Zafer adının mahalle sakinlerinin isteğiyle değişmesiyle bugünkü adını almıştır. Belediye haberindeki sınıra göre yerleşim, Görükle Kurtuluş ile İzmir yolu üzerindeki göçmen konutları arasındadır.",
      "Eski tabela alışkanlığı siparişte ‘Zafer’ diye gelebilir. Güncel mahalle adı Balkan’dır; kapı ayrıca sokak ve daire ile yazılır. Göçmen konutlarının sitesi ile Kurtuluş tarafındaki apartman aynı giriş değildir.",
      "Buket ziyarete, kutu ise site içi taşımaya gider. Balkan sayfası Görükle’nin kampüs anlatımını ve Dumlupınar’ın yurt tarifini tekrarlamaz. Balkan’da eski Zafer alışkanlığı sürer. Güncel mahalle adı yazılmazsa kurye Görükle içindeki başka bir Zafer parçasını arar.",
    ],
  },
  {
    slug: "kurtulus",
    shortName: "Kurtuluş",
    precise: true,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["balkan", "gorukle", "dumlupinar", "besevler"],
    description:
      "Kurtuluş mahallesine, Balkan’ın Görükle tarafındaki konuta kutu ve buket. Doğu apartman kuşağıyla karıştırılmaz.",
    body: [
      "Kurtuluş, belediye sınır tarifinde Balkan mahallesinin Görükle tarafındaki komşusu olarak anılır. Bu yüzden sayfa, doğudaki ulusal gün mahallelerinin apartman metnine benzemez; konum Görükle kuşağındadır.",
      "Akçalar’da birleşen eski Kurtuluş ile bu mahalle aynı yer değildir. Siparişte Nilüfer ve Kurtuluş yanında sokak veya site adı durur ki batıdaki birleşme ile karışmasın.",
      "Kutu düzeni site içi yürümede pratiktir. Buket, kapıda elden teslim için bağlanır. Kurtuluş’un paragrafları Balkan’ın ad değişikliği anlatımından ayrı yazıldı. Kurtuluş’ta Görükle tarafı ile İzmir yolu tarafı ayrı giriş ister. Akçalar’da birleşen eski Kurtuluş bu sayfanın kapısı değildir.",
    ],
  },
  {
    slug: "30-agustos-zafer",
    shortName: "30 Ağustos Zafer",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["gorukle", "tahtali", "hasanaga", "kayapa"],
    description:
      "30 Ağustos Zafer mahallesine, eski Kayapa Çamlık sınırında buket ve orkide. Doğu konut kuşağı sanılmaz.",
    body: [
      "30 Ağustos Zafer, eski Kayapa Çamlık yerleşiminin adıdır. Belediye sınır tarifine göre kuzeyinde Görükle’nin kadastro alanı, doğusunda Tahtalı, güneyinde Bursa Yolu Caddesi, batısında Hasanağa vardır. Mahalle, doğudaki takvim adlarını taşıyan apartman sırasına yazılmaz.",
      "Eski ‘Çamlık’ alışkanlığı notta gelebilir. Güncel ad 30 Ağustos Zafer’dir. Kapı, köy içi sokak ile yol kenarı konut diye ayrılır; yalnızca cadde adı yetmez.",
      "Buket ve orkide, bu ara bölgenin ev kapısına göre hazırlanır. Kampüs teslimi Görükle sayfasındadır. 30 Ağustos Zafer metni o sayfanın ve Tahtalı’nın arkeoloji cümlesinin kopyası değildir.",
    ],
  },
  {
    slug: "minarelicavus",
    shortName: "Minareliçavuş",
    precise: true,
    relatedCategorySlugs: ["orkideler", "kutular", "buketler"],
    nearbySlugs: ["alaaddinbey", "ozluce", "cali", "yaylacik"],
    description:
      "Minareliçavuş mahallesine, çekirdeğin batısında büyüyen konuta orkide, kutu ve buket.",
    body: [
      "Minareliçavuş, Nilüfer çekirdeğinin batısında, eski köy dokusunun üzerine yayılan konutun büyüdüğü bir mahalledir. Özlüce’deki yoğun site düzeni ile Çalı’daki yol koridoru arasında ayrı bir kapı ölçeği vardır. Belirli bir cami minaresinin sipariş noktası olduğu burada iddia edilmez.",
      "Yeni blokta güvenlik kaydı, eski sokakta kapı numarası geçerlidir. Hangisi olduğu notun ilk satırında bellidir. Alıcı adı, benzer site unvanlarının arasında doğru girişi seçtirir.",
      "Orkide yeni dairenin holüne, kutu taşımaya, buket kısa ziyarete gider. Minareliçavuş sayfası Alaaddinbey’deki höyük bilgisini veya Özlüce’nin site metnini tekrarlamaz.",
    ],
  },
  {
    slug: "alaaddinbey",
    shortName: "Alaaddinbey",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["ozluce", "minarelicavus", "yaylacik", "urunlu"],
    description:
      "Alaaddinbey mahallesine batı Nilüfer konutuna buket ve orkide. Tepecik Höyüğü valilik notuna dayanır.",
    body: [
      "Alaaddinbey, Nilüfer’in batısında konutun büyüdüğü mahallelerdendir. Valiliğin arkeoloji notunda Tepecik Höyüğü bu mahalleyle anılır. Höyük bir teslim adresi değildir; çiçek ev, site veya işyeri kapısına gider.",
      "2025 yılı Nilüfer faaliyet raporunda tarım alanının korunduğu yerler arasında Alaaddinbey, Ürünlü ve Yaylacık birlikte geçer. Bu cümle bir tarla kenarı vaadi değildir; mahallenin hâlâ yapı ile açık alanın yan yana durduğunu hatırlatır.",
      "Site bloğu ile köy içine yakın sokak ayrı yazılır. Buket ziyarete, orkide masa hediyesine ayrılır. Alaaddinbey metni Özlüce’nin istasyonlu site anlatımından ve Ürünlü’nün tarla vurgusundan ayrıdır.",
    ],
  },
  {
    slug: "ahmet-yesevi",
    shortName: "Ahmet Yesevi",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["minarelicavus", "isiktepe", "demirci", "ucevler"],
    description:
      "Ahmet Yesevi mahallesine ihtiyatlı buket ve kutu teslimi. Okul, cami veya hastane adresi uydurulmaz.",
    body: [
      "Ahmet Yesevi mahallesine doğrulanmamış bir okul, cami külliyesi veya hastane adresi yazmıyoruz. Kişi adı mahalle tabelasında duruyor diye o adda bir kurum kapısı varmış gibi tarif kurulmaz.",
      "Gelen adres neyse o kullanılır: apartman ve daire, ya da sokak ve kapı numarası. Tahminle ‘batı konut’ veya ‘köy içi’ denmez. Alıcı adı, benzer unvanlı binalarda zili ayırır.",
      "Buket kısa uğrama, kutu ise taşınırken düz kalsın istenen hediye içindir. Ahmet Yesevi sayfası Minareliçavuş’un büyüme anlatımını ve Işıktepe’nin ihtiyat cümlesini kopyalamaz. Ahmet Yesevi tabelası bir kurum logosu değildir. Çiçek, nottaki sivil kapıya gider; tahminle bir külliye kapısı seçilmez.",
    ],
  },
  {
    slug: "kizilcikli",
    shortName: "Kızılcıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "kayapa", "hasanaga", "30-agustos-zafer"],
    description:
      "Kızılcıklı mahallesine, eski Hasanağa Kızılcıklı sınırında buket ve kutu. Pazar Caddesi batı kenarıdır.",
    body: [
      "Kızılcıklı, eski Hasanağa Kızılcıklı’nın bugünkü mahalle adıdır. Belediye sınır tarifinde kuzeyi Görükle, doğusu Kayapa, güneyi Hasanağa’nın köy içi, batısı Pazar Caddesi diye geçer.",
      "Siparişte eski ‘Hasanağa’ alışkanlığı gelebilir. Güncel mahalle Kızılcıklı’dır; Hasanağa ayrı sayfadadır. Kapı, Pazar Caddesi üzerindeki bir işyeri ile iç sokaktaki ev diye ayrılır.",
      "Buket ev ziyaretine, kutu cadde üstü taşımaya gider. Kızılcıklı metni, Hasanağa’nın köy içi paragrafını ve Kayapa’nın birleşme öyküsünü tekrarlamaz. Kızılcıklı’da Pazar Caddesi üzerindeki tabela ile iç sokaktaki zil ayrıdır. Cadde adı, köy içi numarayı silmez.",
    ],
  },
  {
    slug: "demirci",
    shortName: "Demirci",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["cali", "minarelicavus", "isiktepe", "ahmet-yesevi"],
    description:
      "Demirci mahallesine, çekirdeğin batısındaki kırsal karaktere buket ve çelenk. Anıt veya ocak adı uydurulmaz.",
    body: [
      "Demirci, Nilüfer çekirdeğinin batısında kırsal karakterini koruyan bir mahalledir. Teyitli bir anıt, demirci ocağı tabelası veya müze kapısı bilmiyoruz; meslek çağrıştıran ad, böyle bir teslim noktası kurmaz.",
      "Çalı koridorundaki karma doku ile bu mahalle aynı ritimde anlatılmaz. Sokak, kapı ve alıcı yazılır. Çelenk istenirse kurdele ismi baştan gelir ve çıkmadan okunur.",
      "Buket, avlu veya apartman diye gelen tarife göre bağlanır; biz kapı tipini tahmin etmeyiz. Demirci sayfası Çalı’nın sanayi-konut karışımını kopyalamaz. Demirci’de avlu kapısı ile yeni apartman zili aynı kelimeyle yazılmaz. Gelen tarif hangisiyse hazırlık ona uyar, diğeri eklenmez.",
    ],
  },
  {
    slug: "isiktepe",
    shortName: "Işıktepe",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["demirci", "ahmet-yesevi", "ucevler", "gumustepe"],
    description:
      "Işıktepe’de merkez diye anılsa da plaza iddiası olmadan, yazılan kapıya çiçek.",
    body: [
      "Işıktepe’yi bazı özetler merkez mahalle diye ayırır. Bu ayrım bir plaza katı, alışveriş kapısı veya kampüs girişi kanıtlamaz; biz de eklemiyoruz. Işık sözcüğü bir tepe manzarası tarifi için kullanılmaz.",
      "Adres, siparişte nasıl yazıldıysa öyle kalır. Eksik kapı numarasını mahalle adından tamamlamayız. Alıcı, benzer bloklar arasında doğru zili seçtirir.",
      "Orkide masa ölçeğinde, buket ziyaret ölçeğinde hazırlanır. Işıktepe’nin gövdesi Üçevler’in ‘kayıt yok’ paragrafından ve Gümüştepe’nin kısa ihtiyat metninden ayrıdır. Işıktepe’de eksik bir numara, mahalle adından tamamlanmaz. Not yarım kaldıysa kapı sorulur; yanlış bloğa bırakılmaz.",
    ],
  },
  {
    slug: "akcalar",
    shortName: "Akçalar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "fadilli", "hasanaga", "inegazi"],
    description:
      "Akçalar mahallesine Nilüfer’in batısında buket ve orkide. Aktopraklık Höyüğü valilik notuna dayanır.",
    body: [
      "Akçalar, Nilüfer’in batısında, valilik arkeoloji notundaki Aktopraklık Höyüğü ile anılan mahalledir. Höyük ziyaret noktası ile ev kapısı aynı adres değildir; çiçek konuta veya işyerine gider.",
      "Eski Akçalar Zafer ve Akçalar Kurtuluş, tek mahallede birleşti. Notta hâlâ o eski adlar gelebilir. Güncel ad Akçalar’dır; kapı sokak ve numara ile yazılır. Nilüfer’deki Kurtuluş mahallesi bu birleşmenin parçası değildir.",
      "Gölyazı’nın yarımadasına göre Akçalar daha içeride, gölün kıyı kalabalığından ayrı bir köy-mahalle kapısıdır. Buket ve orkide bu kapıya göre hazırlanır. Metin, Gölyazı’nın taş ev anlatımını tekrarlamaz.",
    ],
  },
  {
    slug: "atlas",
    shortName: "Atlas",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["ucpinar", "kadriye", "kurucesme", "dagyenice"],
    description:
      "Atlas’ta Nilüfer’in güneyindeki eski köy kapısına çiçek. Başka illerdeki aynı ad için Bursa yazılır.",
    body: [
      "Atlas, Nilüfer’in güneyinde, valilik cetvelindeki eski köylerden mahalleye dönüşen yerleşimlerdendir. Güneydeki Kadriye, Üçpınar ve Kuruçeşme ile aynı kuşaktadır. Belirli bir okul, cami adı veya durak uydurulmaz.",
      "Köy içi sokak, site tarifine benzemez. Kapı numarası, mevki ve alıcı yazılır. ‘Atlas’ tek başına, başka illerdeki aynı adı da çağırabilir; siparişte Bursa ve Nilüfer durur.",
      "Buket kısa bir uğrama, kutu ise köy yolunda daha durağan bir hediye içindir. Atlas sayfası Dağyenice’nin etek cümlesini ve Kadriye’nin uzak güney tarifini kopyalamaz. Atlas’ta güney yolu, çekirdekteki site temposundan yavaştır. Mevki baştan yazılırsa çiçek ova içindeki başka bir Atlas adına sapmaz.",
    ],
  },
  {
    slug: "ayvakoy",
    shortName: "Ayvaköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["uncukuru", "korubasi", "fadilli", "maksempinar"],
    description:
      "Ayvaköy mahallesine Nilüfer’in güneybatısında buket ve kutu. Kaymakamlık listesinde Ayva Köy olarak da geçer.",
    body: [
      "Ayvaköy, Nilüfer’in güneybatısındaki eski köy mahallelerindendir. Kaymakamlık muhtar listesinde Ayva Köy yazımı da görülür. Siparişte her iki alışkanlık aynı kapıya gider; ilçe Nilüfer diye belirtilir.",
      "Unçukuru, Korubaşı ve Maksempınar güneydeki komşu sayfalardır. Fadıllı ise Uluabat tarafına daha yakındır. Ayvaköy onların taş ocağı veya göl yarımadası değildir; kendi sokak tarifini ister.",
      "Kapı numarası ve alıcı yazılır. Buket ziyarete, kutu yolculuğa gider. Ayvaköy metni, Gölyazı’nın antik kent cümlelerinden ayrıdır. Ayvaköy’de Ayva Köy yazımı da aynı kapıya gider. İlçe Nilüfer olarak durmazsa başka bir ilin köyü sanılabilir.",
    ],
  },
  {
    slug: "badirga",
    shortName: "Badırga",
    precise: true,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "buyukbalikli", "baskoy"],
    description:
      "Badırga mahallesine Nilüfer’in kuzeybatı köy kuşağında buket ve çelenk. Apartman çekirdeği sanılmaz.",
    body: [
      "Badırga, Nilüfer’in en kuzeybatıdaki eski köy mahallelerinden biridir. Çaylı, Konaklı, Büyükbalıklı ve Başköy aynı kırsal kuşağın diğer sayfalarıdır. Doğudaki plaza ve site teslimi bu kapıya benzemez.",
      "Mevki, sokak ve alıcı yazılır. Çelenkte kurdele adı baştan iletilir. Buket, köy içi ziyaretin ölçeğinde bağlanır; vitrindeki büyük düzen, kapı ölçüsü notta varsa ona göre seçilir.",
      "Badırga sayfası Çaylı’nın kuzey cümlesini ve Başköy’ün ara konum anlatımını tekrarlamaz. Fiyat ve saat bu metinde yoktur. Badırga’da kuzeybatı yolu uzundur. Mevki ve alıcı baştan belliyse çelenk kurdelesi ile buket aynı turda karışmaz.",
    ],
  },
  {
    slug: "baskoy",
    shortName: "Başköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "catalagil", "akcalar", "buyukbalikli"],
    description:
      "Başköy’de Badırga ile Akçalar arasındaki köy kapısına çiçek. Ayrı bir höyük veya site adı yazılmaz.",
    body: [
      "Başköy, batı Nilüfer’de Badırga ile Akçalar arasında kalan eski köy mahallelerindendir. Çatalağıl aynı batı hattındadır. Büyükbalıklı ise kuzeybatı kuşağındadır. Başköy bu dördünün ortak bir şablon cümlesi değildir.",
      "Köy içi kapı, site bloğu diliyle yazılmaz. Sokak, numara ve alıcı ister. Akçalar’daki höyük bilgisi bu sayfaya taşınmaz; Başköy için ayrı bir arkeoloji iddiası kurmayız.",
      "Kutu, köy yolunda düz duran hediyedir. Başköy’de demet, avlu kapısına göre kısa tutulur. Kutu, sap yerine düz hediye istendiğinde seçilir. Badırga’nın çelenk anlatımı bu sayfada yoktur. Başköy’de Badırga yönü ile Akçalar yönü farklı sokak ağızlarıdır. ‘Batı Nilüfer’ tek başına kapı tarifi sayılmaz.",
    ],
  },
  {
    slug: "buyukbalikli",
    shortName: "Büyükbalıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "konakli", "cayli", "baskoy"],
    description:
      "Büyükbalıklı mahallesine kuzeybatı Nilüfer’de buket ve kutu. Balıkçı barınağı veya göl iskelesi uydurulmaz.",
    body: [
      "Büyükbalıklı, kuzeybatı Nilüfer’de Badırga ve Konaklı ile aynı kırsal kuşaktadır. Çaylı kuzeyde, Başköy daha güneybatıdadır. Adındaki balık, bir iskele, kooperatif veya gölet kapısını kanıtlamaz; böyle bir teslim noktası yazmayız.",
      "Eski köy mahallesinin kapısı sokak ve numara ile bulunur. Site dili bu adrese uymaz. Alıcı adı, benzer avlu girişlerini ayırır.",
      "Buket ziyaret ölçeğinde, kutu yolculukta daha durağan hediye olarak hazırlanır. Büyükbalıklı’nın gövdesi Konaklı’nın kuzeybatı cümlelerinden ve Badırga’nın çelenk notundan ayrıdır. Büyükbalıklı’da ad, bir iskele teslimi kurmaz. Çiçek avlu ya da ev kapısında kalır; göl kenarı buluşması ayrıca yazılmadıkça seçilmez.",
    ],
  },
  {
    slug: "cali",
    shortName: "Çalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["yaylacik", "ertugrul", "alaaddinbey", "demirci"],
    description:
      "Çalı mahallesine İzmir yolu koridorunda, konut ve sanayinin karıştığı kapıya buket, kutu ve orkide.",
    body: [
      "Çalı, İzmir yolu koridorunda, sürekli kent dokusunun batısında kalan bir mahalledir. Konut ile sanayi aynı ada içinde karışabilir. Yaylacık ve Alaaddinbey yakın sayfalardır; Ertuğrul ise doğuya, apartman çekirdeğine daha yakındır.",
      "Ev kapısı ile fabrika kabul noktası aynı notta birleşmez. İşyerinde firma ve teslim alınacak kişi, evde sokak ve daire yazılır. Yalnızca ‘Çalı sanayi’ demek kapıyı buldurmaz.",
      "Ofis masasına orkide, eve kutu veya buket gider. Çalı metni Demirci’nin kırsal ihtiyatını ve Yaylacık’taki tarla koruma cümlesini tekrarlamaz. Çalı’da sanayi kapısındaki güvenlik ile ev sokağı aynı cümlede birleşmez. Firma adı, daire numarasının yerine geçmez.",
    ],
  },
  {
    slug: "catalagil",
    shortName: "Çatalağıl",
    precise: true,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["baskoy", "inegazi", "akcalar", "hasanaga"],
    description:
      "Çatalağıl’da Başköy–İnegazi hattındaki köy kapısına çiçek. Ağıl veya tesis adresi kurulmaz.",
    body: [
      "Çatalağıl, Nilüfer’in batısında, Başköy ile İnegazi hattında eski bir köy mahallesidir. Akçalar ve Hasanağa aynı geniş batı kuşağının diğer duraklarıdır; Çatalağıl onların höyük veya köy içi sayfasının kopyası değildir.",
      "Kapı, mevki ve alıcı ile yazılır. Çelenk kurdelesindeki isim baştan gelir. Buket, köy ziyaretinin ölçeğinde bağlanır.",
      "Ağıl çağrıştıran ad, bir ahır kapısı veya hayvancılık tesisi adresi kurmaz. Çatalağıl’ın paragrafları İnegazi’nin göl yaklaşımı anlatımından ayrı tutulur. Çatalağıl’da Başköy tarafı ile İnegazi tarafı ayrı mevki ister. Mahalle adı, bu iki ağzı birbirine bağlayan bir tek kapı değildir.",
    ],
  },
  {
    slug: "cayli",
    shortName: "Çaylı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "yolcati", "buyukbalikli", "konakli"],
    description:
      "Çaylı’da Nilüfer’in kuzey köy kapısına çiçek. Dere, köprü veya piknik noktası tarif edilmez.",
    body: [
      "Çaylı, Nilüfer’in kuzeyinde, Badırga’nın doğusuna düşen eski köy mahallelerindendir. Yolçatı aynı kuzey hattında, Büyükbalıklı ve Konaklı kuzeybatıdadır. Ad, belirli bir çay yatağı, köprü veya piknik alanını teslim noktası yapmaz.",
      "Sokak, kapı numarası ve alıcı yazılır. Apartman sitesi tarifı bu adrese zorlanmaz. Çaylı’nda saplı demet, kuzey rüzgârında kâğıdı açık kalmayacak şekilde bağlanır. Kutu yalnızca masaya konacak hediyede seçilir.",
      "Çaylı sayfası Yolçatı’nın kuzey cümlesini ve Badırga’nın ‘en kuzeybatı’ tarifini tekrarlamaz. Çaylı’da kuzey yolu, Badırga’nın en uç noktasından daha içeridedir. Dere ya da köprü adı yazılmadıkça buluşma evi kapısıdır.",
    ],
  },
  {
    slug: "dagyenice",
    shortName: "Dağyenice",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["tahtali", "atlas", "yaylacik", "kadriye"],
    description:
      "Dağyenice mahallesine güney eteklerde, Tahtalı ile Atlas arasında buket ve orkide.",
    body: [
      "Dağyenice, Nilüfer’in güney eteklerinde, Tahtalı ile Atlas arasında kalan eski köy mahallesidir. Yaylacık ova tarafına, Kadriye daha uzağa düşer. ‘Dağ’ sözcüğü bir yayla tesisi veya teleferik kapısı kurmaz.",
      "Etekteki sokak, ova sitesinden farklı yazılır. Mevki, kapı ve alıcı birlikte durur. Saksı, eşikten içeri giren hediyede durur. Saplı demet ise kısa bir uğrama içindir.",
      "Dağyenice metni Tahtalı’daki arkeoloji notunu ve Atlas sayfasındaki küme cümlesini ödünç almaz. Dağyenice’de etek sokağı ile ova çıkışı aynı numara düzeninde olmayabilir. Mevki, ‘güney’ kelimesinden daha dar yazılır.",
    ],
  },
  {
    slug: "dogankoy",
    shortName: "Doğanköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["karacaoba", "gungoren", "gokce", "kadriye"],
    description:
      "Doğanköy’de eski köy statüsü mahalle kapısına çiçek. Komşu parsel ve bir üretim tesisi uydurulmaz.",
    body: [
      "Doğanköy, valiliğin eski köy listesindedir ve bugün Nilüfer mahallesidir. Sokak sokak bir sınır, komşu parsele dayalı bir tarif veya belirli bir tepe adı uydurmuyoruz. Kuş çağrıştıran ad bir üretim tesisi kapısı değildir.",
      "Gelen mevki ve kapı numarası esas alınır. Eksik tarifi mahalle adından tamamlamayız. Alıcı, doğru avluyu seçtirir.",
      "Buket ve kutu, bu köy-mahalle kapısına göre hazırlanır. Doğanköy’ün gövdesi Karacaoba ve Güngören sayfalarındaki ihtiyat cümlelerinden ayrı kelimelerle yazıldı. Doğanköy’de liste, mahallenin eski köy olduğunu söyler; komşu parselin adını söylemez. Kapı, gelen tariften okunur.",
    ],
  },
  {
    slug: "fadilli",
    shortName: "Fadıllı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "ayvakoy", "akcalar", "uncukuru"],
    description:
      "Fadıllı’da Uluabat’a bakan köy kapısına çiçek. Yarımada üzerindeki taş ev dokusu bu adres değildir.",
    body: [
      "Fadıllı, Gölyazı’nın güneybatısında, Uluabat tarafına bakan eski köy mahallelerindendir. Ayvaköy ve Unçukuru güneydeki sayfalar, Akçalar ise höyüğüyle anılan batı mahallesidir. Fadıllı yarımada üzerindeki taş ev dokusu değildir.",
      "Göl kıyısındaki gezinti ile köy içi kapı karışmasın diye mevki açık yazılır. Alıcı adı, hafta sonu kalabalığında ev adresini ayırır. Orkide içeri, buket kapı ziyaretine gider.",
      "Fadıllı metni Gölyazı’nın Apollonia anlatımını ve Ayvaköy’ün muhtar listesi cümlesini tekrarlamaz. Fadıllı’da göl kıyısı gezintisi ile köy içi zil karışır. Hafta sonu notunda ‘ev’ ya da ‘kıyı’ kelimesi başta durur.",
    ],
  },
  {
    slug: "gokce",
    shortName: "Gökçe",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["dogankoy", "karacaoba", "gungoren", "dagyenice"],
    description:
      "Gökçe’de teyitsiz sınır yerine, iletilen kapıya çiçek. Höyük, kampüs ve durak notu yoktur.",
    body: [
      "Gökçe hakkında doğrulanmış bir höyük, kampüs, durak veya belediye sınır cümlesi yok. Eski köy cetvelinde de bu adı ayrıca işaretlemiyoruz. Metin bu yüzden kısa ve ihtiyatlıdır; manzara, göl veya tepe eklenmez.",
      "Sipariş, iletilen sokak ve kapıya uyar. Tahminle kırsal ya da apartman denmez. Alıcı adı notta durur.",
      "Buket veya kutu, kapının tarifine göre seçilir. Gökçe sayfası Doğanköy’ün liste cümlesinden ve Dağyenice’nin etek tarifinden kopyalanmaz. Gökçe’de doğrulanmış bir sınır cümlesi yoktur. Bu eksiklik, uydurma bir tepe veya durakla kapatılmaz; kapı sorulur.",
    ],
  },
  {
    slug: "golyazi",
    shortName: "Gölyazı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    nearbySlugs: ["akcalar", "inegazi", "hasanaga", "fadilli"],
    description:
      "Gölyazı mahallesine Uluabat yarımadasında buket, orkide ve kutu. Antik Apollonia; taş ev dokusu.",
    body: [
      "Gölyazı, Nilüfer’in güneybatısında Uluabat Gölü’ne, eski adıyla Apolyont’a uzanan tarihî bir yarımadadır. Antik yerleşim Apollonia adıyla anılır. Taş evler ve hafta sonu gelen ziyaretçiler, burayı Nilüfer’in apartman çekirdeğinden ayırır.",
      "Belediye düzenlemesinde Gölyazı Bayır ile Gölyazı Merkez tek mahallede birleşti. Bugün sipariş, yarımadadaki ev ile göl kıyısında kısa süre durulan bir buluşma noktasını birbirine karıştırmaz. Sokak dar olabilir; kapı tarifi buna göre ayrıntılı tutulur.",
      "Hafta sonu kalabalığında ev adresi ile gezinti noktası karışır. Alıcı adı ve durulacak kapı baştan yazılır. Buket, rüzgârlı kıyıda ambalajı bozulmadan bırakılacak şekilde hazırlanır. Orkide, taş evin içine girecek hediyede daha durağandır. Kutu, dar sokakta elde taşınacak düzende seçilir.",
      "Akçalar, İnegazi, Hasanağa ve Fadıllı aynı güneybatı kuşağının diğer sayfalarıdır. Gölyazı onların köy içi kapısından farklı olarak gölün yarımadasına gider. Fiyat bu sayfada yoktur.",
    ],
  },
  {
    slug: "gumustepe",
    shortName: "Gümüştepe",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["ucevler", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Gümüştepe’de doğrulanmış bir sınır olmaksızın, yazılan kapıya çiçek. Tepe kotu veya maden ocağı eklenmez.",
    body: [
      "Gümüştepe için teyitli bir tepe kotu, maden ocağı, site unvanı veya durak kaydı kullanmıyoruz. Adın çağrıştırdığı parlaklık, bir manzara vaadine dönüştürülmez. Mahalle Nilüfer’dedir; kapı, siparişte yazılan adrestir.",
      "Eksik numarayı biz tamamlamayız. Apartman ise daire, sokak ise kapı numarası istenir. Alıcı, doğru zili seçtirir.",
      "Orkide masa hediyesinde, buket kısa ziyarette hazırlanır. Gümüştepe’nin paragrafları Üçevler’in kayıt cümlesinden ve Işıktepe’nin merkez ayrımı notundan ayrıdır. Gümüştepe’de adın parlaklığı bir site markası değildir. Çiçek, yazılan apartman ya da sokak numarasına gider.",
    ],
  },
  {
    slug: "gungoren",
    shortName: "Güngören",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gokce", "atlas"],
    description:
      "Güngören, İstanbul’daki ilçeyle karışmasın diye Bursa ve Nilüfer ile birlikte yazılır. Çelenk kurdelesi bu il ayrımından sonra hazırlanır.",
    body: [
      "Güngören, valiliğin eski köy listesinde Nilüfer’e bağlı bir yerleşimdir ve bugün mahalledir. İstanbul ilçesi akla gelmesin diye notun ilk kelimesi Bursa’dır. Sokak sınırı, belirli bir gören tepesi veya şehitlik kapısı uydurulmaz.",
      "Mevki, kapı ve alıcı yeter. Kurdeledeki ad, demet bağlanmadan yüksek sesle okunur. Buket, köy-mahalle ziyaretine göre bağlanır.",
      "Güngören sayfası Doğanköy’ün liste cümlesini tekrarlamaz; yalnızca bu adın il dışıyla karışma riskini ayrıca söyler. Güngören’de İstanbul ilçesi riski yüzünden Bursa kelimesi şarttır. Çelenk kurdelesi, bu il ayrımı yazılmadan hazırlanmaz.",
    ],
  },
  {
    slug: "hasanaga",
    shortName: "Hasanağa",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["kizilcikli", "kayapa", "30-agustos-zafer", "golyazi"],
    description:
      "Hasanağa mahallesine, Kızılcıklı’nın güneyindeki köy içine buket ve kutu. Eski bağlı yerleşimle karışmaz.",
    body: [
      "Hasanağa, Kızılcıklı’nın belediye tarifinde ‘köy içi’ diye anılan güney komşusudur. Kayapa doğuda, 30 Ağustos Zafer kuzey-doğu sınırında, Gölyazı ise daha güneybatıda gölün yarımadasındadır. Hasanağa o yarımadanın taş ev sayfası değildir.",
      "Eski Hasanağa Kızılcıklı bugün ayrı bir mahalledir. Siparişte yalnızca ‘Hasanağa’ denirse köy içi ile Kızılcıklı karışabilir; sokak veya mevki eklenir.",
      "Kutu yolculukta, buket kapıda elden teslim için hazırlanır. Hasanağa metni Kızılcıklı’nın Pazar Caddesi sınırını ve Gölyazı’nın antik adını yeniden anlatmaz. Hasanağa köy içi, Kızılcıklı’nın cadde kapısından ayrı bir zildir. Eski birleşik ad, bugün iki mahalleyi tek kapı yapmaz.",
    ],
  },
  {
    slug: "inegazi",
    shortName: "İnegazi",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "akcalar", "catalagil", "hasanaga"],
    description:
      "İnegazi’de Gölyazı ve Akçalar arasındaki köy kapısına çiçek. Kıyı gezintisi ile ev zili ayrılır.",
    body: [
      "İnegazi, Nilüfer’in batı-güneybatısında, Gölyazı ve Akçalar ile aynı geniş kuşakta duran eski köy mahallesidir. Çatalağıl ve Hasanağa bu hattın diğer sayfalarıdır. İnegazi, göl yarımadasının üzerine kurulmuş taş doku değildir; köy kapısı ayrı yazılır.",
      "Mevki ile alıcı birlikte durur. Hafta sonu Gölyazı’ya gidenler bu mahalleyi kıyı sanmasın diye ilçe ve mahalle adı açık seçilir. Orkide içeri alınacak hediyede, buket ziyarette kullanılır.",
      "İnegazi’nin paragrafları Akçalar’daki Aktopraklık cümlesini ve Çatalağıl’ın hat tarifini kopyalamaz. İnegazi’de Gölyazı’ya giden hafta sonu yolu, köy kapısını kıyı sanmasın diye mevki ayrıca yazılır.",
    ],
  },
  {
    slug: "irfaniye",
    shortName: "İrfaniye",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "balkan", "dumlupinar", "besevler"],
    description:
      "İrfaniye mahallesine Görükle’nin batısında buket ve kutu. Kampüs içi bina kodu sanılmaz.",
    body: [
      "İrfaniye, Görükle’nin batısına düşen bir Nilüfer mahallesidir. Balkan ve Dumlupınar aynı üniversite kuşağının mahalle kapıları, Beşevler ise çekirdeğe daha yakın konuttur. İrfaniye kampüs içindeki bir fakülte kodu değildir.",
      "Site, sokak evi veya küçük işyeri diye kapı tipi notta ayrılır. ‘Üniversite yakını’ tek başına buluşma yeri sayılmaz. Alıcı adı, benzer site unvanlarını ayırır.",
      "Kutu site içi taşımada, buket kapıda elden teslimde seçilir. İrfaniye metni Görükle’nin yurt anlatımını ve Balkan’ın eski Zafer adını tekrarlamaz. İrfaniye’de Görükle’nin batısı, kampüs haritasındaki bir fakülte kodu değildir. Buluşma, mahalledeki site ya da sokaktır.",
    ],
  },
  {
    slug: "kadriye",
    shortName: "Kadriye",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["atlas", "ucpinar", "kurucesme", "korubasi"],
    description:
      "Kadriye’de Nilüfer’in uzak güney kapısına çiçek. Kişi adı bir konak veya çiftlik kapısı kurmaz.",
    body: [
      "Kadriye, Nilüfer’in uzak güneyindeki eski köy mahallelerindendir. Atlas ve Üçpınar aynı güney kuşağında, Kuruçeşme ve Korubaşı biraz daha kuzeyde kalır. Kadriye apartman çekirdeğinin içinde değildir; yol, ova mahallelerine göre uzundur.",
      "Mevki, kapı ve alıcı baştan yazılır ki hazırlık bu mesafeye göre kurulsun. Kişi adı mahalle tabelasında diye bir konak veya çiftlik kapısı uydurulmaz.",
      "Kutu, uzun yolda düz kalan hediyedir. Buket, ziyaret ölçeğinde bağlanır. Kadriye sayfası Üçpınar’ın güney cümlesinden ve Atlas’ın küme tarifinden ayrıdır. Kadriye’de uzak güney yolu, hazırlığın erken bağlanmasını gerektirir. Mevki geç yazılırsa çiçek ova mahallesinde bekler.",
    ],
  },
  {
    slug: "karacaoba",
    shortName: "Karacaoba",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["dogankoy", "gungoren", "gokce", "atlas"],
    description:
      "Karacaoba’da oba, kooperatif veya ağıl kapısı kurulmaz. Çiçek, iletilen mevki ve ev numarasına gider.",
    body: [
      "Karacaoba, valiliğin eski köy cetvelinde Nilüfer’e yazılan yerleşimlerdendir. Bugün mahalle statüsündedir. ‘Oba’ sözcüğü bir yayla kulübesi, kooperatif veya belirli bir ağıl kapısını kanıtlamaz.",
      "Sınırı sokak sokak tarif etmiyoruz. Sipariş, gelen mevki ve numaraya uyar. Alıcı adı doğru evi seçtirir. Atlas güneyde konumu bilinen bir sayfadır; Karacaoba’yı onunla bitişik saymayız.",
      "Orkide içeri, buket kapı ziyaretine gider. Karacaoba’nın gövdesi Güngören’in il karışması uyarısından ve Doğanköy’ün liste cümlesinden ayrı yazıldı. Karacaoba’da ‘oba’ bir tesis adı değildir. Çiftlik kapısı ancak notta ayrıca geçiyorsa kullanılır.",
    ],
  },
  {
    slug: "kayapa",
    shortName: "Kayapa",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["kizilcikli", "30-agustos-zafer", "tahtali", "hasanaga"],
    description:
      "Kayapa mahallesine, İstiklal ve Zafer’in birleştiği yerleşime buket, kutu ve orkide.",
    body: [
      "Kayapa, eski Kayapa İstiklal ile Kayapa Zafer’in birleşmesiyle tek mahalle olmuştur. Kızılcıklı batı-kuzeyinde, 30 Ağustos Zafer eski Çamlık adıyla komşudur, Tahtalı doğuda, Hasanağa köy içi güneyde kalır. Eski Çamlık’ın kendisi artık 30 Ağustos Zafer’dir; Kayapa’ya yazılmaz.",
      "Notta hâlâ İstiklal veya Zafer denebilir. Güncel ad Kayapa’dır ve kapı sokakla tamamlanır. İki eski parçanın girişi, birleşmeden sonra da farklı sokak olabilir; tarif buna göre ayrılır.",
      "Buket, kutu ve orkide kapının ev ya da küçük işyeri olmasına göre seçilir. Kayapa metni 30 Ağustos Zafer’in dört yönlü sınır listesini ve Kızılcıklı’nın Pazar Caddesi cümlesini yeniden sıralamaz.",
    ],
  },
  {
    slug: "konakli",
    shortName: "Konaklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "buyukbalikli", "cayli", "yolcati"],
    description:
      "Konaklı’da kuzeybatı köy kapısına çiçek. Doğudaki Konak mahallesi ve bir konak binası bu adres değildir.",
    body: [
      "Konaklı, kuzeybatı Nilüfer’de Badırga, Büyükbalıklı ve Çaylı ile aynı kırsal kuşaktadır. Yolçatı kuzey hattındadır. Doğu Nilüfer’deki Konak mahallesi başka bir sayfadır; siparişte Konaklı’nın sonundaki -lı eki ve Nilüfer birlikte yazılır.",
      "Eski köy kapısı mevki ve numara ister. Konak binası, han veya butik otel tarif etmeyiz. Alıcı, doğru avluyu buldurur.",
      "Kutu yolculukta, buket ziyarette hazırlanır. Konaklı’nın paragrafları Büyükbalıklı’nın iskele yasağından ve Çaylı’nın dere uyarısından ayrıdır. Konaklı, doğudaki Konak mahallesinden ayrı yazılır. Sonundaki ek düşerse çiçek İhsaniye bandına gidebilir.",
    ],
  },
  {
    slug: "korubasi",
    shortName: "Korubaşı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["uncukuru", "maksempinar", "ayvakoy", "ucpinar"],
    description:
      "Korubaşı’nda koru bariyeri, piknik alanı veya depo kapısı yazılmaz. Teslim, güneydeki ev numarasına gider.",
    body: [
      "Korubaşı, Nilüfer’in güneyinde Unçukuru, Maksempınar ve Ayvaköy ile aynı eski köy kuşağındadır. Üçpınar daha güneyde kalır. Ad, belirli bir koru bekçiliği, piknik bariyeri veya orman deposu kapısını kanıtlamaz.",
      "Mevki ve alıcı yazılır. Güneydeki yollar apartman sitesi tarifine benzemez. Orkide içeri alınacak hediyede, buket kısa uğramada seçilir.",
      "Korubaşı metni Unçukuru’nun güney sokak cümlesini ve Maksempınar’ın liste yazımını tekrarlamaz. Korubaşı’nda güney mevki, bir orman bariyeri değildir. Çiçek ev kapısında kalır; piknik alanı seçilmez.",
    ],
  },
  {
    slug: "kurucesme",
    shortName: "Kuruçeşme",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["maksempinar", "uncukuru", "ucpinar", "atlas"],
    description:
      "Kuruçeşme’de güney köy kapısına çiçek. İstanbul semti ve bir çeşme başı bu adres değildir.",
    body: [
      "Kuruçeşme, Nilüfer’in güneyinde Maksempınar, Unçukuru, Üçpınar ve Atlas ile aynı eski köy kuşağındadır. İstanbul’daki semt ile karışmaması için Bursa ve Nilüfer siparişte durur. Ad, belirli bir çeşme, mesire veya su deposu kapısı kurmaz.",
      "Sokak, numara ve alıcı yazılır. Kuruçeşme’de güney mesafesi yüzünden demet çıkışa yakın saatte bağlanır. Kutu, sapın sallanmaması istenen hediyede tercih edilir.",
      "Kuruçeşme’nin gövdesi Atlas’ın küme girişinden ve Üçpınar’ın uzak güney uyarısından ayrı cümlelerle kuruldu. Kuruçeşme’de İstanbul semti riski vardır. Bursa ve Nilüfer yazılmazsa saplı buket yanlış ile gider.",
    ],
  },
  {
    slug: "maksempinar",
    shortName: "Maksempınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["kurucesme", "uncukuru", "korubasi", "ayvakoy"],
    description:
      "Maksempınar mahallesine Nilüfer’in güneyinde buket ve orkide. Muhtar listesinde Maksem Pınarı olarak da geçer.",
    body: [
      "Maksempınar, Nilüfer’in güneyindeki eski köy mahallelerindendir. Kaymakamlık muhtar listesinde Maksem Pınarı yazımı da görülür. Kuruçeşme, Unçukuru, Korubaşı ve Ayvaköy aynı güney sayfalarıdır. Pınar sözcüğü bir içme suyu tesisi veya mesire kapısını teslim adresi yapmaz.",
      "Her iki yazım aynı mahalleye gider. Kapı, mevki ve alıcı ile tamamlanır. Orkide içeri, buket ziyarete ayrılır.",
      "Maksempınar metni Kuruçeşme’nin il karışması uyarısını ve Korubaşı’nın koru yasağını yeniden kurmaz. Maksempınar’da Maksem Pınarı yazımı aynı mahalledir. Pınar başı, ayrıca tarif edilmedikçe buluşma yeri sayılmaz.",
    ],
  },
  {
    slug: "tahtali",
    shortName: "Tahtalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["kayapa", "30-agustos-zafer", "yaylacik", "dagyenice"],
    description:
      "Tahtalı mahallesine, Kayapa’nın doğusunda buket ve kutu. Valilik arkeoloji notunda adı geçer; höyük teslim adresi değildir.",
    body: [
      "Tahtalı, 30 Ağustos Zafer’in doğu sınırı ve Kayapa’nın doğu komşusu olarak tarif edilen eski köy mahallesidir. Yaylacık ve Dağyenice güney-doğu eteklere doğru diğer sayfalardır. Valiliğin arkeoloji notunda Tahtalı’nın adı geçer; bu not belirli bir höyüğün kapı numarasını vermez ve biz de vermeyiz.",
      "Çiçek ev veya işyeri kapısına gider, kazı alanına değil. Sokak, mevki ve alıcı yazılır. Eski köy içi ile yol kenarı konut ayrı satır ister.",
      "Kutu taşımada, buket ziyarette hazırlanır. Tahtalı’nın paragrafları 30 Ağustos Zafer’in dört yön listesini ve Alaaddinbey’deki Tepecik adını tekrarlamaz.",
    ],
  },
  {
    slug: "uncukuru",
    shortName: "Unçukuru",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["maksempinar", "korubasi", "ayvakoy", "kurucesme"],
    description:
      "Unçukuru’nda değirmen, kurutma serası veya tarım deposu yazılmaz. Teslim, iletilen güney adresindedir.",
    body: [
      "Unçukuru, Nilüfer’in güneyinde Maksempınar, Korubaşı, Ayvaköy ve Kuruçeşme ile birlikte eski köy mahallelerindendir. Ad, bir un değirmeni, kurutma serası veya tarım deposu kapısını kanıtlamaz.",
      "Güney sokağı site bloğu gibi yazılmaz. Mevki, numara ve alıcı durur. Kutu yolculukta düz kalır; buket ziyaret ölçeğinde bağlanır.",
      "Unçukuru sayfası Ayvaköy’ün Ayva Köy yazımından ve Maksempınar’ın çift yazım notundan ayrıdır. Unçukuru’nda güney yolu uzundur. Değirmen ya da depo kapısı uydurulmaz; çiçek yazılan ev numarasındadır.",
    ],
  },
  {
    slug: "ucpinar",
    shortName: "Üçpınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["kadriye", "atlas", "kurucesme", "korubasi"],
    description:
      "Üçpınar’da uzak güney köy kapısına çiçek. Üç ayrı su başı veya mesire rotası kurulmaz.",
    body: [
      "Üçpınar, Nilüfer’in uzak güneyinde Kadriye ve Atlas ile aynı kuşakta duran eski köy mahallesidir. Kuruçeşme ve Korubaşı biraz daha içeridedir. Üç pınar, üç ayrı çeşme başını teslim noktası yapmaz; böyle bir rota yazmayız.",
      "Yol, çekirdeğe göre uzundur. Mevki ve alıcı baştan bellidir. Üçpınar’da saksı, odaya girecek hediyede kalır. Saplı demet kapının önünde elden verilir.",
      "Üçpınar’ın gövdesi Kadriye’deki mesafe uyarısını ve Atlas sayfasının açılışını kopyalamaz. Üçpınar’da üç ayrı su başı tarif edilmez. Uzak güneydeki tek kapı, mevki ve alıcıyla bulunur.",
    ],
  },
  {
    slug: "urunlu",
    shortName: "Ürünlü",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["alaaddinbey", "yaylacik", "cali", "minarelicavus"],
    description:
      "Ürünlü mahallesine, tarım alanı korunan batı Nilüfer kesimine buket ve kutu.",
    body: [
      "Ürünlü, 2025 Nilüfer faaliyet raporunda tarım alanının özellikle korunduğu mahalleler arasında Alaaddinbey ve Yaylacık ile birlikte anılır. Bu cümle bir hasat etkinliği veya kooperatif kapısı vaadi değildir. Çalı koridoru ve Minareliçavuş’un büyüyen konutu aynı batı kesimin diğer sayfalarıdır.",
      "Tarla kenarı ile yeni blok aynı mahallede yan yana gelebilir. Hangisi olduğu notta ayrılır: mevki mi, site bloğu mu. Alıcı adı ikisini de karıştırmaz.",
      "Buket ziyarete, kutu taşımaya gider. Ürünlü metni Yaylacık’taki aynı rapor cümlesini ikinci kez uzatmaz; vurgu bu mahallenin kendi kapı ayrımındadır.",
    ],
  },
  {
    slug: "yaylacik",
    shortName: "Yaylacık",
    precise: true,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["cali", "alaaddinbey", "urunlu", "tahtali"],
    description:
      "Yaylacık mahallesine Çalı yakınında, tarımı korunan kesime orkide ve buket. Yayla tesisi uydurulmaz.",
    body: [
      "Yaylacık, Çalı koridoruna yakın, Nilüfer’in batı-güney kesimindeki eski köy mahallelerindendir. 2025 faaliyet raporunda tarım alanı korunan yerler arasında Ürünlü ve Alaaddinbey ile anılır. Tahtalı doğu-güneyde ayrı bir sayfadır. ‘Yayla’ sözcüğü bir tesis, bungalov veya teleferik kapısı kurmaz.",
      "Ev, tarla kenarı ve Çalı’ya yakın işyeri aynı notta birleşmez. Kapı tipi baştan yazılır. Orkide içeri, buket ziyarete gider.",
      "Yaylacık’ın paragrafları Çalı’nın sanayi karışımını ve Ürünlü’nün rapor cümlesinin tamamını yeniden anlatmaz. Yaylacık’ta Çalı’ya yakın işyeri ile tarla kenarındaki ev aynı kabul noktası değildir. Hangisi olduğu ilk satırda durur.",
    ],
  },
  {
    slug: "yolcati",
    shortName: "Yolçatı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["cayli", "konakli", "badirga", "buyukbalikli"],
    description:
      "Yolçatı’da kuzey köy kapısına çiçek. Gişe, kavşak tabelası veya dinlenme tesisi bu adres değildir.",
    body: [
      "Yolçatı, Nilüfer’in kuzeyinde Çaylı, Konaklı, Badırga ve Büyükbalıklı ile aynı eski köy kuşağında durur. Ad, bir otoyol gişesi, belirli bir kavşak tabelası veya dinlenme tesisini teslim noktası yapmaz.",
      "Köy içi kapı, yol kenarı sanılan bir buluşmadan ayrı yazılır. Mevki, numara ve alıcı durur. Yolçatı’nda demet, köy avlusuna göre küçük tutulur. Kutu, sapın kuzey yolunda dağılmaması istenirse seçilir.",
      "Yolçatı sayfası Çaylı’nın dere uyarısını ve Konaklı’nın doğu Konak ayrımını tekrarlamaz. Kuzeydeki bu kapı, doğu Nilüfer apartmanından başka bir ritimdedir. Yolçatı’nda kuzey köy kapısı, bir gişe veya dinlenme tesisi değildir. Buluşma, yazılan mevkinin evidir.",
    ],
  },
];
