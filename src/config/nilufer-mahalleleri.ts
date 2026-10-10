/**
 * Nilüfer mahalleleri. Her kayıt konumu, kapıyı ve uygun ürünü anlatır.
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
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["cumhuriyet", "esentepe", "konak", "kultur"],
    description:
      "Barış mahallesine, Nilüfer’in doğu yakasındaki apartman ve site kapısına buket ile kutu.",
    body: [
      "Barış, Nilüfer’in doğu yakasında apartmanların ve site bloklarının yan yana durduğu bir konut mahallesidir. Ziyaret, teşekkür ve ev hediyesi bu kapılardan içeri girer.",
      "Apartman unvanı, daire ve alıcı aynı notta durur. Güvenlikli sitede blok da eklenir. İşyeri katı ev zilinden ayrı yazılır; firma adı resepsiyondaki masayı buldurur.",
      "Saplı buket kısa bir uğramanın eline yakışır. Kutu düzeni merdiven ve asansörde daha durağan kalır. Kart cümlesi, ilettiğiniz kısa notla hazırlanır.",
    ],
  },
  {
    slug: "cumhuriyet",
    shortName: "Cumhuriyet",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["baris", "19-mayis", "esentepe", "karaman"],
    description:
      "Cumhuriyet mahallesine doğu Nilüfer konutunda orkide ve buket. Daire ile ofis katı ayrı yazılır.",
    body: [
      "Cumhuriyet, Nilüfer’in doğu konut sırasında yerleşik bir mahalledir. Aile ziyareti ile masa hediyesi aynı sokakta, farklı kapılara gider.",
      "Blok, kat ve alıcı birlikte istenir. Ofis siparişinde firma adı, ev siparişinde zil sırası durur. Benzer apartman unvanlarında daire numarası kapıyı ayırır.",
      "Saksılı orkide birkaç gün masada kalan hediyedir. Klasik gül, günün ziyaretine bağlanır. Doğum gününde kart, ilettiğiniz cümleyle yazılır.",
    ],
  },
  {
    slug: "fethiye",
    shortName: "Fethiye",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["ertugrul", "ozluce", "kultur", "konak"],
    description:
      "Fethiye mahallesine Nilüfer’in doğu konutunda buket, kutu ve orkide. Site ile cadde kapısı ayrıdır.",
    body: [
      "Fethiye, Nilüfer’in doğu yakasında, Ertuğrul ve Özlüce’nin apartman ritmine komşu bir konut mahallesidir. İlçe adı notta Nilüfer olarak durur. Kapı, site güvenlik kaydı ya da cadde üstü zil panosu olarak ikiye ayrılır.",
      "Blok, daire ve alıcı yazılır. İşyerinde firma katı eklenir. Ev holüne konacak orkide ile kapı önünde bırakılacak buket ayrı hazırlanır.",
      "Kutu, asansörsüz merdivende saplı demetten daha durağan kalır. Kart, iletilen cümleyle ve kısa tutulur. Teşekkür ve doğum günü bu mahallede sık hazırlanan iki geliş sebebidir.",
    ],
  },
  {
    slug: "esentepe",
    shortName: "Esentepe",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["cumhuriyet", "konak", "altinsehir", "karaman"],
    description:
      "Esentepe mahallesine doğu Nilüfer’de buket ve orkide. Güvenlikli blok ile cadde apartmanı ayrıdır.",
    body: [
      "Esentepe, Nilüfer’in doğusunda yerleşik apartman mahallelerindendir. Yeni blok ile cadde üstü bina aynı gün içinde yan yana gelebilir.",
      "Site adıyla sokak adı birbirinin yerine geçmez. Güvenlik olan blokta alıcı önceden bilinir. Cadde üstü binada zil sırası ve daire yeter.",
      "Orkide, uzun süre masada durması istenen hediyede seçilir. Buket, aynı günkü ziyaretin eline göre bağlanır. Yeni ev ve teşekkür notu kartta sade durur.",
    ],
  },
  {
    slug: "konak",
    shortName: "Konak",
    precise: false,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["ihsaniye", "kultur", "baris", "esentepe"],
    description:
      "Konak mahallesine, İhsaniye ve Kültür çevresindeki daire ve işyeri kapısına kutu ve buket.",
    body: [
      "Konak, İhsaniye ve Kültür ile aynı doğu konut bandında, cadde üstü adreslerin sıklaştığı bir mahalledir. İşyeri katı ile daire girişi burada yan yana durur.",
      "İşyerinde firma, kat ve teslim alınacak kişi yazılır. Evde apartman, daire ve alıcı yeter. İkisi ayrı satırda durursa çiçek doğru bankoya gider.",
      "Hediye kutusu, ofisten eve uzanan yolda saplı bukete göre daha derli toplu kalır. Tebrik ve teşekkür bu kapıda sık istenir.",
    ],
  },
  {
    slug: "kultur",
    shortName: "Kültür",
    precise: false,
    relatedCategorySlugs: ["orkideler", "kutular"],
    nearbySlugs: ["ihsaniye", "balat", "fethiye", "konak"],
    description:
      "Kültür mahallesine İhsaniye’ye yakın doğu Nilüfer’de orkide ve kutu. Cadde ile site bloğu ayrıdır.",
    body: [
      "Kültür, Nilüfer’in doğusunda İhsaniye’ye yakın, konut ve cadde adreslerinin karıştığı bir kesittir. Masa hediyesi ile kapı ziyareti aynı mahallede farklı hazırlanır.",
      "Cadde üstü tabela ile site içi blok ayrı satırdadır. Alıcı adı, benzer apartmanların arasında doğru zili buldurur. Kart, notunuzdaki cümleden alınır.",
      "Saksılı orkide hol ve ofiste, kutu ise merdivenli apartmanda rahat eder. Geçmiş olsun ve doğum günü burada sık yazılan iki karttır.",
    ],
  },
  {
    slug: "karaman",
    shortName: "Karaman",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["altinsehir", "23-nisan", "esentepe", "cumhuriyet"],
    description:
      "Karaman mahallesine doğu Nilüfer apartmanına buket ve çelenk. Daire ile işyeri katı ayrı yazılır.",
    body: [
      "Karaman, doğu Nilüfer’de takvim adlı mahallelerin arasındaki apartman dokusudur. Notun ilk satırı ilçeyi Nilüfer diye açar.",
      "Apartman adı, daire ve alıcı kapıyı buldurur. Çelenkte kurdele ismi baştan iletilir ve çıkmadan okunur. Buket, ziyaretin eline göre bağlanır.",
      "Aile kapısı ile işyeri katı ayrı not ister. Taziye düzeni ve teşekkür buketi bu mahallede yan yana hazırlanır.",
    ],
  },
  {
    slug: "ucevler",
    shortName: "Üçevler",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gumustepe", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Üçevler mahallesine buket ve kutu. Kapı, gelen sokak ya da blok tarifine göre hazırlanır.",
    body: [
      "Üçevler, Nilüfer’de sakin tempoda anılan bir konut mahallesidir. Çiçek, notta yazılan sokağa ya da site bloğuna gider.",
      "Sokak ve kapı numarası varsa onlar durur. Site ise blok ve daire ile tamamlanır. Alıcı adı, benzer girişlerin arasında doğru zili seçtirir.",
      "Buket kısa ziyarete, kutu taşınırken düzeni bozulmasın istenen hediyeye gider. Tebrik kartı kısa tutulur.",
    ],
  },
  {
    slug: "altinsehir",
    shortName: "Altınşehir",
    precise: false,
    relatedCategorySlugs: ["orkideler", "kutular"],
    nearbySlugs: ["karaman", "29-ekim", "esentepe", "yuzuncuyil"],
    description:
      "Altınşehir, Nilüfer’in doğu konut mahallelerindendir. Orkide ve kutu daire kapısına gider.",
    body: [
      "Altınşehir, Nilüfer’in doğu yakasında yerleşik bir konut mahallesidir. Ofis masası ile ev holü burada sık karşılanan iki yerdir.",
      "Blok ve daire yazılır; alıcı adı notun başındadır. Ofis ile ev aynı mahallede olsa da ayrı satır ister. Güvenlik kaydı olan sitede isim uyumu kapıyı hızlandırır.",
      "Orkide saksısı masa ölçeğinde hazırlanır. Kutu, site içindeki kısa yürüyüşte saplı demetten daha pratik kalır.",
    ],
  },
  {
    slug: "23-nisan",
    shortName: "23 Nisan",
    precise: false,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["19-mayis", "29-ekim", "yuzuncuyil", "kultur"],
    description:
      "23 Nisan mahallesine doğu Nilüfer’de kutu ve buket. Aile ziyareti ve doğum günü için daire kapısı.",
    body: [
      "23 Nisan, Nilüfer’in doğusunda ailelerin oturduğu bir apartman mahallesidir. Çocuk bayramının adı tabelada durur; teslim bir daire kapısına gider.",
      "19 Mayıs, 29 Ekim ve Yüzüncüyıl aynı doğu kuşağının komşu mahalleleridir. 23 Nisan’da apartman adı, kat ve alıcı yazılır. Sitede blok eklenir.",
      "Kutu çiçek, güvenlikten içeri alınırken saplı demete göre daha az sallanır. Doğum günü ve ziyaret buketi sık hazırlanır. Kart, ilettiğiniz cümleyle yazılır.",
    ],
  },
  {
    slug: "29-ekim",
    shortName: "29 Ekim",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["23-nisan", "19-mayis", "altinsehir", "yuzuncuyil"],
    description:
      "29 Ekim mahallesine doğu konut kuşağında gül buketi ve saksılı orkide. Apartman, daire ve alıcı birlikte yazılır.",
    body: [
      "29 Ekim, doğudaki apartman sırasında 23 Nisan ve 19 Mayıs’ın komşu mahallesidir. Kapı bir daire girişidir.",
      "Apartman unvanına daire ve alıcı eklenir. Ofiste kat, evde zil panosundaki sıra durur. Benzer bina adlarında bu üçlü kapıyı ayırır.",
      "Günün ziyaretine gül demeti, masada kalacak hediyeye saksı ayrılır. Tebrik cümlesi kartta kısa tutulur.",
    ],
  },
  {
    slug: "19-mayis",
    shortName: "19 Mayıs",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["23-nisan", "29-ekim", "cumhuriyet", "yuzuncuyil"],
    description:
      "19 Mayıs mahallesine doğu konut sırasında kutu ve saplı demet. Cadde binası ile iç avlu ayrı tarif edilir.",
    body: [
      "19 Mayıs, Nilüfer’in doğusunda cumhuriyet takviminden ad almış konut mahallelerindendir. Teslim, yerleşik bir apartman kapısıdır.",
      "Cadde üstü bina ile iç avlu ayrı yazılır. Site bloğu, daire ve alıcı üçlüsü kapıyı buldurur. Sokak adı, daire numarasının yanında durur.",
      "Kutu, hediyeyi merdivende düz tutar. Buket, aynı gün içindeki ziyarete bağlanır. Gençlik ve doğum günü notları bu mahallede sık gelir.",
    ],
  },
  {
    slug: "yuzuncuyil",
    shortName: "Yüzüncüyıl",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["23-nisan", "29-ekim", "19-mayis", "altinsehir"],
    description:
      "Yüzüncüyıl mahallesine doğu Nilüfer konutuna orkide ve buket. Daire kapısı ve masa hediyesi.",
    body: [
      "Yüzüncüyıl, Nilüfer’in doğu konut dokusunda yerleşik bir mahalledir. Yıldönümü tabelada durur; çiçek ev ve ofis kapısına gider.",
      "Apartman veya site unvanı, daire ve alıcı ile kurulur. 23 Nisan, 29 Ekim ve 19 Mayıs komşu kuşağın diğer mahalleleridir; her birinin kapısı kendi notuyla yazılır.",
      "Orkide masa hediyesinde saksısıyla hazırlanır. Buket, kısa bir uğurlama veya ziyaret için bağlanır.",
    ],
  },
  {
    slug: "dumlupinar",
    shortName: "Dumlupınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["gorukle", "balkan", "besevler", "kurtulus"],
    description:
      "Dumlupınar mahallesine Görükle–üniversite kuşağında buket ve orkide. Yurt girişi ile apartman ayrıdır.",
    body: [
      "Dumlupınar, Görükle ile üniversite kuşağının birbirine değdiği mahalledir. Kampüsün genel çevresi Görükle tarafında anlatılır; Dumlupınar o kuşağın mahalle kapısıdır.",
      "Yurt girişi, site kapısı ve apartman zili üç ayrı buluşma yeridir. Hangisi isteniyorsa notta o yazılır. Bina adı, ‘üniversite’ kelimesinin yanında durur.",
      "Doğum günü buketi ve saksılı orkide bu çevrede sık ayrılır. Dönem başında kapı tarifi erken netleşir. Kart, ilettiğiniz kısa cümleyle yazılır.",
    ],
  },
  {
    slug: "balkan",
    shortName: "Balkan",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "dumlupinar", "kurtulus", "besevler"],
    description:
      "Balkan mahallesine Görükle kuşağında buket ve kutu. Eski Zafer alışkanlığı da aynı kapıya gelir.",
    body: [
      "Balkan, Görükle kuşağında, Kurtuluş ile İzmir yolu üzerindeki konutların arasında duran bir mahalledir. Eski Zafer alışkanlığı da bu kapıya gelir; güncel ad Balkan’dır.",
      "Sokak ve daire yazılır. Göçmen konutlarının sitesi ile Kurtuluş tarafındaki apartman aynı giriş değildir. Alıcı adı doğru bariyeri seçtirir.",
      "Buket ziyarete, kutu site içi taşımaya gider. Teşekkür ve yeni ev bu mahallede sık hazırlanır.",
    ],
  },
  {
    slug: "kurtulus",
    shortName: "Kurtuluş",
    precise: true,
    relatedCategorySlugs: ["kutular", "buketler"],
    nearbySlugs: ["balkan", "gorukle", "dumlupinar", "besevler"],
    description:
      "Kurtuluş mahallesine Görükle tarafındaki konuta kutu ve buket. Sokak adı kapıyı netleştirir.",
    body: [
      "Kurtuluş, Balkan mahallesinin Görükle tarafındaki komşu konut mahallesidir. Akçalar’da anılan eski Kurtuluş parçası başka bir kapıdır; notta Nilüfer ve sokak birlikte durur.",
      "Site adı ile cadde üstü apartman ayrı yazılır. Alıcı, benzer unvanlı bloklarda doğru girişi seçtirir.",
      "Kutu, site içindeki yürüyüşte pratiktir. Buket, kapıda elden teslim için bağlanır. Doğum günü kartı iki cümleyi geçmez.",
    ],
  },
  {
    slug: "30-agustos-zafer",
    shortName: "30 Ağustos Zafer",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["gorukle", "tahtali", "hasanaga", "kayapa"],
    description:
      "30 Ağustos Zafer mahallesine, Görükle, Tahtalı ve Hasanağa arasındaki konuta buket ve orkide.",
    body: [
      "30 Ağustos Zafer, eski Kayapa Çamlık yerleşiminin bugünkü adıdır. Kuzeyinde Görükle, doğusunda Tahtalı, güneyinde Bursa Yolu, batısında Hasanağa vardır. Doğu yakadaki apartman sırasından ayrı bir kesittir.",
      "Eski Çamlık alışkanlığı da aynı mahalleye gelir. Kapı, iç sokak ile yol kenarı konut diye ayrılır. Alıcı adı notta durur.",
      "Buket ve orkide ev kapısına göre hazırlanır. Kampüs çevresi Görükle tarafında, bu mahalle kendi sokağında karşılanır.",
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
      "Minareliçavuş, Nilüfer çekirdeğinin batısında, eski sokakların üzerine yeni blokların yayıldığı bir mahalledir. Özlüce’nin yoğun sitesi ile Çalı’nın yol hattı arasında kendi kapı ölçeği vardır.",
      "Yeni blokta güvenlik kaydı, eski sokakta kapı numarası geçerlidir. Hangisi olduğu ilk satırda bellidir. Alıcı adı benzer site unvanlarını ayırır.",
      "Orkide yeni dairenin holüne, kutu taşımaya, buket kısa ziyarete gider. Yeni ev kutlaması burada sık istenir.",
    ],
  },
  {
    slug: "alaaddinbey",
    shortName: "Alaaddinbey",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["ozluce", "minarelicavus", "yaylacik", "urunlu"],
    description:
      "Alaaddinbey mahallesine batı Nilüfer konutuna buket ve orkide. Tepecik Höyüğü bu çevrenin bilinen yeridir.",
    body: [
      "Alaaddinbey, Nilüfer’in batısında konutun büyüdüğü mahallelerdendir. Tepecik Höyüğü bu çevrenin bilinen yükseltisidir. Çiçek ev, site veya işyeri kapısına gider.",
      "Ürünlü ve Yaylacık ile birlikte anılan açık alan, yeni blokların yanında durur. Site ile sokağa yakın ev ayrı yazılır. Alıcı adı doğru girişi seçtirir.",
      "Buket ziyarete, orkide masa hediyesine ayrılır. Yeni daireye saksı, kısa uğramaya gül demeti gider.",
    ],
  },
  {
    slug: "ahmet-yesevi",
    shortName: "Ahmet Yesevi",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["minarelicavus", "isiktepe", "demirci", "ucevler"],
    description:
      "Ahmet Yesevi mahallesine buket ve kutu. Apartman ya da sokak, notta nasıl yazıldıysa öyle hazırlanır.",
    body: [
      "Ahmet Yesevi, Nilüfer konutunda apartman unvanının okunarak yazıldığı bir mahalledir. Çiçek, nottaki bina ve daireye gider.",
      "Apartman ise daire, sokak ise kapı numarası durur. Alıcı adı benzer unvanlı binalarda zili ayırır. Kart cümlesi kısa tutulur.",
      "Buket kısa uğrama, kutu taşınırken düz kalsın istenen hediye içindir. Geçmiş olsun aranjmanı ile tebrik demeti ayrı kapılara gider.",
    ],
  },
  {
    slug: "kizilcikli",
    shortName: "Kızılcıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "kayapa", "hasanaga", "30-agustos-zafer"],
    description:
      "Kızılcıklı’ya, Görükle’nin güneyindeki konuta saplı demet ve kutu. Batı kenarı Pazar Caddesi’dir.",
    body: [
      "Kızılcıklı, eski Hasanağa Kızılcıklı adıyla da aranan mahalledir. Kuzeyinde Görükle, doğusunda Kayapa, güneyinde Hasanağa’nın köy içi, batısında Pazar Caddesi vardır.",
      "Hasanağa ayrı bir mahalledir. Kapı, Pazar Caddesi üzerindeki işyeri ile iç sokaktaki ev diye ayrılır. Alıcı adı doğru zili buldurur.",
      "Ev ziyaretine saplı demet, cadde üstü taşımaya kutu gider. Yeni ev notu kartta iki satırda kalır.",
    ],
  },
  {
    slug: "demirci",
    shortName: "Demirci",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["cali", "minarelicavus", "isiktepe", "ahmet-yesevi"],
    description:
      "Demirci’ye, çekirdeğin batısındaki sakin kapı için saplı demet ve anma düzeni.",
    body: [
      "Demirci, Nilüfer çekirdeğinin batısında, sokak ve avlu düzeninin sürdüğü bir mahalledir. Çalı koridorunun karma temposundan daha sakin bir kapıdır.",
      "Sokak, kapı ve alıcı yazılır. Çelenkte kurdele adı baştan gelir ve çıkmadan okunur. Ev ile küçük işyeri ayrı satırdadır.",
      "Buket ziyaret ölçeğinde bağlanır. Taziye düzeni istendiğinde ölçü notta baştan durur.",
    ],
  },
  {
    slug: "isiktepe",
    shortName: "Işıktepe",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["demirci", "ahmet-yesevi", "ucevler", "gumustepe"],
    description:
      "Işıktepe mahallesine orkide ve buket. Adres, sokak ve daire ile birlikte yazılır.",
    body: [
      "Işıktepe, Nilüfer’in yerleşik konut mahallelerindendir. Çiçek, nottaki bina girişine ve daireye gider.",
      "Daire numarası ve alıcı birlikte durur. Eksik kapı, mahalle adının yanına sokak eklenerek tamamlanır. Kart kısa tutulur.",
      "Orkide masa ölçeğinde, buket ziyaret ölçeğinde hazırlanır. Doğum günü demeti ile teşekkür orkidesi ayrı ölçekte hazırlanır.",
    ],
  },
  {
    slug: "akcalar",
    shortName: "Akçalar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "fadilli", "hasanaga", "inegazi"],
    description:
      "Akçalar mahallesine Nilüfer’in batısında buket ve orkide. Aktopraklık Höyüğü bu çevrededir.",
    body: [
      "Akçalar, Nilüfer’in batısında, Aktopraklık Höyüğü ile anılan bir mahalledir. Çiçek konut ve işyeri kapısına gider. Eski Zafer ve Kurtuluş alışkanlıkları da bugünkü Akçalar kapısına yazılır.",
      "Sokak ve numara ile alıcı birlikte durur. Nilüfer’deki Kurtuluş mahallesi ayrı bir adrestir; notta Akçalar açık seçilir.",
      "Gölyazı’nın yarımadasına göre Akçalar daha içeride, kendi köy-mahalle kapısıdır. Buket ve orkide bu kapıya göre hazırlanır.",
    ],
  },
  {
    slug: "atlas",
    shortName: "Atlas",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["ucpinar", "kadriye", "kurucesme", "dagyenice"],
    description:
      "Atlas’a, güneydeki köy evine gül demeti ve hediye kutusu.",
    body: [
      "Atlas, Nilüfer’in güneyinde, eski köy düzenini sürdüren mahallelerdendir. Kadriye, Üçpınar ve Kuruçeşme aynı kuşaktadır. Not, ilçeyi Nilüfer diye açar.",
      "Sokak, kapı numarası ve alıcı yeter. Mevki, site dilinden ayrı, köy içi tarifle gelir.",
      "Buket kısa bir uğrama, kutu güney yolunda durağan bir hediye içindir. Aile ziyareti burada sık hazırlanır.",
    ],
  },
  {
    slug: "ayvakoy",
    shortName: "Ayvaköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["uncukuru", "korubasi", "fadilli", "maksempinar"],
    description:
      "Ayvaköy mahallesine Nilüfer’in güneybatısında buket ve kutu. Ayva Köy yazımı da aynı kapıya gider.",
    body: [
      "Ayvaköy, Nilüfer’in güneybatısındaki eski köy mahallelerindendir. Ayva Köy yazımı da aynı kapıya gelir. Unçukuru, Korubaşı ve Maksempınar güneydeki komşulardır.",
      "Numara ile alıcı adı notun başında durur. Fadıllı, Uluabat tarafına daha yakındır; Ayvaköy kendi sokağıyla tarif edilir.",
      "Bayram ziyaretinde saplı demet, uzun güney yolunda kutu tercih edilir.",
    ],
  },
  {
    slug: "badirga",
    shortName: "Badırga",
    precise: true,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["cayli", "konakli", "buyukbalikli", "baskoy"],
    description:
      "Badırga mahallesine kuzeybatı Nilüfer’de avlu kapısına buket ve anma çelengi.",
    body: [
      "Badırga, Nilüfer’in kuzeybatısındaki eski köy mahallelerindendir. Çaylı, Konaklı, Büyükbalıklı ve Başköy aynı kırsal kuşağın komşularıdır.",
      "Mevki ve sokak, alıcı adıyla birlikte notun başında durur. Kurdeledeki isim, demetten önce kontrol edilir. Geniş düzenlerde kapı genişliği yazılır.",
      "Badırga’da saplı demet köy ziyaretine göre bağlanır. Konut ile bakkal kapısı notta ayrılır.",
    ],
  },
  {
    slug: "baskoy",
    shortName: "Başköy",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "catalagil", "akcalar", "buyukbalikli"],
    description:
      "Başköy’e, Badırga ile Akçalar arasındaki avluya saplı demet ve hediye kutusu.",
    body: [
      "Başköy, batı Nilüfer’de Badırga ile Akçalar’ın ortasında duran köy yerleşimidir. Çatalağıl aynı batı hattında, Büyükbalıklı kuzeybatıdadır.",
      "Sokak, numara ve alıcı ister. Badırga yönü ile Akçalar yönü farklı sokak ağızlarıdır; mevki notta ayrılır.",
      "Başköy’de demet, avlu kapısına göre kısa tutulur. Kutu, sap yerine düz hediye istendiğinde seçilir. Bayram ziyareti sık gelir.",
    ],
  },
  {
    slug: "buyukbalikli",
    shortName: "Büyükbalıklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "konakli", "cayli", "baskoy"],
    description:
      "Büyükbalıklı mahallesine kuzeybatı Nilüfer’de buket ve kutu. Teslim ev kapısınadır.",
    body: [
      "Büyükbalıklı, kuzeybatıda Badırga ve Konaklı’nın yanında duran kırsal yerleşimdir. Çaylı kuzeye, Başköy güneybatıya düşer. Çiçek ev kapısına gider.",
      "Sokak ile kapı numarası, alıcı adının yanında durur. Avlu girişi, site tarifinden ayrıdır.",
      "Buket ziyaret ölçeğinde, kutu yolculukta durağan hediye olarak hazırlanır. Büyükbalıklı’nda aile teşekkürü iki satırda kalır.",
    ],
  },
  {
    slug: "cali",
    shortName: "Çalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["yaylacik", "ertugrul", "alaaddinbey", "demirci"],
    description:
      "Çalı mahallesine İzmir yolu koridorunda buket, kutu ve orkide. Ev kapısı ile işyeri girişi ayrıdır.",
    body: [
      "Çalı, İzmir yolu koridorunda, sürekli kent dokusunun batısında kalan bir mahalledir. Konut ile sanayi aynı ada içinde yan yana gelebilir. Yaylacık ve Alaaddinbey yakın komşulardır.",
      "Evde sokak ve daire, işyerinde firma ve teslim alınacak kişi yazılır. Yalnızca ‘Çalı sanayi’ demek kapıyı buldurmaz; kabul noktası eklenir.",
      "Ofis masasına orkide, eve kutu veya buket gider. Teşekkür ile açılış çiçeği bu hatta sık ayrılır.",
    ],
  },
  {
    slug: "catalagil",
    shortName: "Çatalağıl",
    precise: true,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["baskoy", "inegazi", "akcalar", "hasanaga"],
    description:
      "Çatalağıl mahallesine batı Nilüfer’de, Başköy–İnegazi hattındaki köy kapısına buket ve çelenk.",
    body: [
      "Çatalağıl, Nilüfer’in batısında, Başköy ile İnegazi hattında eski bir köy mahallesidir. Akçalar ve Hasanağa aynı geniş kuşağın diğer duraklarıdır.",
      "Kapı, mevki ve alıcı ile yazılır. Çelenk kurdelesindeki isim baştan gelir. İki sokak ağzı varsa hangisi olduğu notta durur.",
      "Buket, köy ziyaretinin ölçeğinde bağlanır. Çatalağıl avlusunda kart, isim ve kısa bir cümleden ibarettir.",
    ],
  },
  {
    slug: "cayli",
    shortName: "Çaylı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "yolcati", "buyukbalikli", "konakli"],
    description:
      "Çaylı’ya, Badırga’nın doğusundaki kuzey avlusuna gül demeti ve kutu.",
    body: [
      "Çaylı, Nilüfer’in kuzeyinde, Badırga’nın doğusuna düşen eski köy mahallelerindendir. Yolçatı aynı kuzey hattında, Büyükbalıklı ve Konaklı kuzeybatıdadır.",
      "Sokak ile bina numarası, alıcı adının yanında durur. Buluşma evi kapısıdır; mevki notun başında durur.",
      "Çaylı’nda saplı demet, kuzey yoluna göre sıkı bağlanır. Kutu, masaya konacak hediyede seçilir. Ziyaret buketi sık istenir.",
    ],
  },
  {
    slug: "dagyenice",
    shortName: "Dağyenice",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["tahtali", "atlas", "yaylacik", "kadriye"],
    description:
      "Dağyenice mahallesine güney eteklerde buket ve orkide. Tahtalı ile Atlas arasındadır.",
    body: [
      "Dağyenice, Nilüfer’in güney eteklerinde, Tahtalı ile Atlas arasında kalan eski köy mahallesidir. Yaylacık ova tarafına, Kadriye daha uzağa düşer.",
      "Etekteki sokak, ova çıkışından ayrı yazılır. Mevki, kapı ve alıcı birlikte durur.",
      "Saksı, eşikten içeri giren hediyede durur. Saplı demet kısa bir uğrama içindir. Dağyenice’de kart, alıcı adıyla birlikte kısa kalır.",
    ],
  },
  {
    slug: "dogankoy",
    shortName: "Doğanköy",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["karacaoba", "gungoren", "gokce", "kadriye"],
    description:
      "Doğanköy’e saplı demet ve kutu. Sokak, kapı ve alıcı kırsal tarifte birlikte durur.",
    body: [
      "Doğanköy, kırsal Nilüfer’de avlu numarasıyla aranan bir yerleşimdir. Demet, söylenen kapıya bırakılır.",
      "Doğru avluyu alıcının adı seçtirir. Sokak, mahalle unvanının hemen altında yazılır.",
      "Doğanköy’de bayramda saplı demet, yağışlı günde kutu tercih edilir.",
    ],
  },
  {
    slug: "fadilli",
    shortName: "Fadıllı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "ayvakoy", "akcalar", "uncukuru"],
    description:
      "Fadıllı’ya, Gölyazı’nın güneybatısında Uluabat’a bakan avluya saplı demet ve saksı.",
    body: [
      "Fadıllı, Gölyazı’nın güneybatısında, Uluabat tarafına bakan eski köy mahallesidir. Ayvaköy ve Unçukuru güneyde, Akçalar batıdadır. Fadıllı kendi köy kapısıdır.",
      "Mevki açık yazılır. Alıcı adı, hafta sonu kalabalığında ev adresini ayırır. Ev ile kıyı buluşması ayrı satırdadır.",
      "Uluabat tarafındaki Fadıllı’da saksı içeri alınır, saplı demet eşikte kalır. Teşekkür iki satırda biter.",
    ],
  },
  {
    slug: "gokce",
    shortName: "Gökçe",
    precise: false,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["dogankoy", "karacaoba", "gungoren", "dagyenice"],
    description:
      "Gökçe’de gül demeti ve kutu düzeni. Sokak, numara ve alıcı notun başında durur.",
    body: [
      "Gökçe, Nilüfer’de sakin bir mahalle kapısıdır. Çiçek, yazılan sokak ve numaraya gider.",
      "Alıcı adı notta durur. Kart cümlesi kısa tutulur. Mevki, mahalle adının yanında yer alır.",
      "Buket ziyaret için, kutu taşınırken düzeni korunsun istenen hediye için hazırlanır.",
    ],
  },
  {
    slug: "golyazi",
    shortName: "Gölyazı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    nearbySlugs: ["akcalar", "inegazi", "hasanaga", "fadilli"],
    description:
      "Gölyazı mahallesine Uluabat yarımadasında buket, orkide ve kutu. Taş evler ve göl kıyısı.",
    body: [
      "Gölyazı, Nilüfer’in güneybatısında Uluabat Gölü’ne, eski adıyla Apolyont’a uzanan tarihî bir yarımadadır. Antik yerleşim Apollonia adıyla anılır. Taş evler ve hafta sonu gelen ziyaretçiler, burayı Nilüfer’in apartman çekirdeğinden ayırır.",
      "Sipariş, yarımadadaki ev ile göl kıyısında kısa süre durulan buluşma noktasını ayırır. Sokak dar olabilir; kapı tarifi buna göre ayrıntılı tutulur. Alıcı adı ve durulacak kapı baştan yazılır.",
      "Buket, rüzgârlı kıyıda ambalajı bozulmadan bırakılacak şekilde hazırlanır. Orkide, taş evin içine girecek hediyede daha durağandır. Kutu, dar sokakta elde taşınacak düzende seçilir.",
      "Akçalar, İnegazi, Hasanağa ve Fadıllı aynı güneybatı kuşağının komşu mahalleleridir. Gölyazı onların köy içinden ayrı olarak gölün yarımadasına gider.",
    ],
  },
  {
    slug: "gumustepe",
    shortName: "Gümüştepe",
    precise: false,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["ucevler", "isiktepe", "ahmet-yesevi", "demirci"],
    description:
      "Gümüştepe mahallesine orkide ve buket. Apartman ya da sokak numarası ile teslim edilir.",
    body: [
      "Gümüştepe, Nilüfer’de daire kapısının sokak numarasıyla bulunduğu bir konut mahallesidir. Aranjman, yazılan bina girişine gider.",
      "Daire ile alıcı aynı satırda durur. Kart iki cümleyi geçmez. Site bloğu varsa unvanın yanına eklenir.",
      "Orkide masa hediyesinde, buket kısa ziyarette hazırlanır. Gümüştepe’de teşekkür iki satırlık bir kartta kalır.",
    ],
  },
  {
    slug: "gungoren",
    shortName: "Güngören",
    precise: false,
    relatedCategorySlugs: ["buketler", "celenkler"],
    nearbySlugs: ["dogankoy", "karacaoba", "gokce", "atlas"],
    description:
      "Güngören mahallesine köy içi kapıya buket ve çelenk. Kurdele metni baştan yazılır.",
    body: [
      "Güngören, Nilüfer kırsalında mevkiyle tarif edilen bir köy mahallesidir. Çiçek, söylenen kapı numarasına gider.",
      "Alıcı notta durur. Kurdeledeki ad, demet bağlanmadan okunur. Konut girişi ile dükkân kabulü notta ayrı durur.",
      "Buket, köy-mahalle ziyaretine göre bağlanır. Güngören’de çelenk kurdelesi ile buket kartı ayrı satırda yazılır.",
    ],
  },
  {
    slug: "hasanaga",
    shortName: "Hasanağa",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["kizilcikli", "kayapa", "30-agustos-zafer", "golyazi"],
    description:
      "Hasanağa mahallesine, Kızılcıklı’nın güneyindeki köy içine buket ve kutu.",
    body: [
      "Hasanağa, Kızılcıklı’nın güneyindeki köy içi mahallesidir. Kayapa doğuda, 30 Ağustos Zafer kuzeydedir. Gölyazı ise daha güneybatıda, gölün yarımadasındadır.",
      "Eski Hasanağa Kızılcıklı bugün Kızılcıklı adıyla ayrıdır. Hasanağa siparişinde sokak veya mevki eklenir. Alıcı adı doğru evi seçtirir.",
      "Kutu yola, buket kapıda elden teslim için hazırlanır. Hasanağa’da ziyaret demeti ile teşekkür kutusu ayrı gelişlerde gider.",
    ],
  },
  {
    slug: "inegazi",
    shortName: "İnegazi",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["golyazi", "akcalar", "catalagil", "hasanaga"],
    description:
      "İnegazi’ye, Gölyazı ile Akçalar arasındaki bahçeye gül demeti ve orkide.",
    body: [
      "İnegazi, Nilüfer’in batı-güneybatısında, Gölyazı ve Akçalar ile aynı geniş kuşakta duran eski köy mahallesidir. Çatalağıl ve Hasanağa hattın diğer duraklarıdır.",
      "Mevki ile alıcı birlikte durur. İlçe ve mahalle adı açık seçilir. Ev kapısı, göl kıyısındaki gezintiden ayrı yazılır.",
      "İnegazi’de saksı odaya alınır, saplı demet ziyaret ölçeğinde bağlanır. Teşekkür iki satırda biter.",
    ],
  },
  {
    slug: "irfaniye",
    shortName: "İrfaniye",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["gorukle", "balkan", "dumlupinar", "besevler"],
    description:
      "İrfaniye mahallesine Görükle’nin batısında buket ve kutu. Site, sokak evi ve küçük işyeri ayrıdır.",
    body: [
      "İrfaniye, Görükle’nin batısına düşen bir Nilüfer mahallesidir. Balkan ve Dumlupınar üniversite kuşağının mahalle kapıları, Beşevler ise çekirdeğe daha yakın konuttur.",
      "Site, sokak evi veya küçük işyeri diye kapı tipi notta ayrılır. Buluşma, mahalledeki site ya da sokaktır. Alıcı adı benzer unvanları ayırır.",
      "Kutu site içi taşımada, buket kapıda elden teslimde seçilir. Doğum günü ve teşekkür burada sık hazırlanır.",
    ],
  },
  {
    slug: "kadriye",
    shortName: "Kadriye",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["atlas", "ucpinar", "kurucesme", "korubasi"],
    description:
      "Kadriye’de ova kenarındaki güney eve mevsim buketi ve hediye kutusu.",
    body: [
      "Kadriye, Nilüfer’in güneyindeki eski köy mahallelerindendir. Atlas ve Üçpınar aynı kuşakta, Kuruçeşme ve Korubaşı biraz daha içeridedir. Yol, ova mahallelerine göre uzundur.",
      "Mevki, kapı ve alıcı baştan yazılır. Hazırlık bu mesafeye göre erken tamamlanır.",
      "Kutu, uzun yolda düz kalan hediyedir. Buket, ziyaret ölçeğinde bağlanır. Kadriye’de kart, kapıya bırakılacaksa alıcı adı önde durur.",
    ],
  },
  {
    slug: "karacaoba",
    shortName: "Karacaoba",
    precise: false,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["dogankoy", "gungoren", "gokce", "atlas"],
    description:
      "Karacaoba mahallesine buket ve orkide. Mevki, kapı ve alıcı ile teslim edilir.",
    body: [
      "Karacaoba, kırsalda ev numarasıyla ayırt edilen bir yerleşimdir. Aranjman, tarif edilen bahçe kapısına gider.",
      "Doğru evi alıcının adı ayırır. Sokak satırı mahalle unvanından sonra gelir.",
      "Karacaoba’da saksı odaya, saplı demet eşik ziyaretine ayrılır. Bayram düzeni ile teşekkür saksısı ayrı boyda hazırlanır.",
    ],
  },
  {
    slug: "kayapa",
    shortName: "Kayapa",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular", "orkideler"],
    nearbySlugs: ["kizilcikli", "30-agustos-zafer", "tahtali", "hasanaga"],
    description:
      "Kayapa mahallesine buket, kutu ve orkide. Eski İstiklal ve Zafer adları da bugünkü kapıya gelir.",
    body: [
      "Kayapa, eski İstiklal ve Zafer parçalarının birleştiği mahalledir. Kızılcıklı batıda, 30 Ağustos Zafer eski Çamlık adıyla komşudur, Tahtalı doğuda, Hasanağa güneyde kalır.",
      "Notta hâlâ İstiklal veya Zafer denebilir. Güncel ad Kayapa’dır ve kapı sokakla tamamlanır. İki eski parçanın girişi farklı sokak olabilir; tarif buna göre ayrılır.",
      "Buket, kutu ve orkide kapının ev ya da küçük işyeri olmasına göre seçilir. Teşekkür kartı kısa tutulur.",
    ],
  },
  {
    slug: "konakli",
    shortName: "Konaklı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["badirga", "buyukbalikli", "cayli", "yolcati"],
    description:
      "Konaklı mahallesine kuzeybatıda, Badırga kuşağındaki bahçe kapısına kutu ve demet. Doğudaki Konak ayrıdır.",
    body: [
      "Konaklı, kuzeybatıda Badırga, Büyükbalıklı ve Çaylı’nın paylaştığı kırsal hattadır. Yolçatı kuzey hattındadır. Doğudaki Konak mahallesi başka bir kapıdır; notta Konaklı açık yazılır.",
      "Mevki ve numara ister. Alıcı, doğru avluyu buldurur.",
      "Kutu yola, buket ziyarete hazırlanır. Konaklı’da aile teşekkürü kartta bir iki cümleyle kalır.",
    ],
  },
  {
    slug: "korubasi",
    shortName: "Korubaşı",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["uncukuru", "maksempinar", "ayvakoy", "ucpinar"],
    description:
      "Korubaşı mahallesine güneyde, koru kenarındaki köy evine buket ve orkide.",
    body: [
      "Korubaşı, güneyde Unçukuru, Maksempınar ve Ayvaköy ile aynı köy kuşağındadır. Üçpınar daha aşağılarda kalır. Aranjman evin bahçe kapısına gider.",
      "Mevki ile alıcı notta yan yana durur. Güney sokağı, apartman sitesinden ayrı tarif edilir.",
      "Koru kenarında saksı içeri, saplı demet kısa uğramaya ayrılır. Ziyaret kartı iki satırdır.",
    ],
  },
  {
    slug: "kurucesme",
    shortName: "Kuruçeşme",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["maksempinar", "uncukuru", "ucpinar", "atlas"],
    description:
      "Kuruçeşme mahallesine güney Nilüfer’de, Maksempınar kuşağındaki eve buket ve kutu.",
    body: [
      "Kuruçeşme, güneyde Maksempınar, Unçukuru, Üçpınar ve Atlas ile aynı köy kuşağındadır. İlçe satırı Nilüfer, mahalle satırı Kuruçeşme diye açılır.",
      "Sokak, numara ve alıcı durur. Kuruçeşme’de güney mesafesi yüzünden demet çıkışa yakın saatte bağlanır.",
      "Kutu, sapın sallanmaması istenen hediyede tercih edilir. Kuruçeşme ziyaretinde kart, alıcının adıyla açılır.",
    ],
  },
  {
    slug: "maksempinar",
    shortName: "Maksempınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["kurucesme", "uncukuru", "korubasi", "ayvakoy"],
    description:
      "Maksempınar’a güneyde buket ve orkide. Maksem Pınarı diye yazılan not da bu avluya gelir.",
    body: [
      "Maksempınar, güney Nilüfer’de pınar yazımıyla da aranan bir köy yerleşimidir. Maksem Pınarı notu da aynı avluya gelir. Kuruçeşme, Unçukuru, Korubaşı ve Ayvaköy komşu mahallelerdir.",
      "Mevki ile alıcı notu tamamlar. Aranjman bahçe kapısında teslim edilir.",
      "Maksempınar’da orkide içeri, buket ziyarete ayrılır. Pınar yazımıyla gelen not da aynı avluya gider.",
    ],
  },
  {
    slug: "tahtali",
    shortName: "Tahtalı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["kayapa", "30-agustos-zafer", "yaylacik", "dagyenice"],
    description:
      "Tahtalı mahallesine, Kayapa’nın doğusunda buket ve kutu. Eski köy kapısı ve yol kenarı konut ayrıdır.",
    body: [
      "Tahtalı, 30 Ağustos Zafer’in doğusu ile Kayapa’nın doğu komşusu olarak duran eski köy mahallesidir. Yaylacık ve Dağyenice güneye doğru diğer duraklardır. Çevrenin arkeolojik geçmişi buradadır; aranjman evin kapısında teslim edilir.",
      "Sokak, mevki ve alıcı yazılır. Köy içi ile yol kenarı konut ayrı satır ister.",
      "Kutu taşımada, buket ziyarette hazırlanır. Tahtalı’da aile teşekkürü kısa bir cümleyle karta geçer.",
    ],
  },
  {
    slug: "uncukuru",
    shortName: "Unçukuru",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["maksempinar", "korubasi", "ayvakoy", "kurucesme"],
    description:
      "Unçukuru’da Maksempınar komşuluğundaki eve mevsim buketi ve kutu.",
    body: [
      "Unçukuru, Nilüfer’in güneyinde Maksempınar, Korubaşı, Ayvaköy ve Kuruçeşme ile birlikte eski köy mahallelerindendir. Çiçek, yazılan ev numarasına gider.",
      "Mevki, numara ve alıcı durur. Güney yolu uzundur; hazırlık buna göre erken bağlanır.",
      "Kutu yola, buket ziyaret ölçeğine göre hazırlanır. Unçukuru bayramında kart, isim ve bir dilekten oluşur.",
    ],
  },
  {
    slug: "ucpinar",
    shortName: "Üçpınar",
    precise: true,
    relatedCategorySlugs: ["buketler", "orkideler"],
    nearbySlugs: ["kadriye", "atlas", "kurucesme", "korubasi"],
    description:
      "Üçpınar’a, Atlas’ın yanındaki güney yerleşimde saksı ve saplı demet.",
    body: [
      "Üçpınar, güney Nilüfer’de Kadriye ve Atlas’ın yanında duran köy yerleşimidir. Kuruçeşme ile Korubaşı ova içine daha yakındır.",
      "Yol, çekirdeğe göre uzundur. Mevki ve alıcı baştan bellidir. Üçpınar’da saksı, odaya girecek hediyede kalır.",
      "Saplı demet kapının önünde elden verilir. Üçpınar ziyaretinde kart iki satırı geçmez.",
    ],
  },
  {
    slug: "urunlu",
    shortName: "Ürünlü",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["alaaddinbey", "yaylacik", "cali", "minarelicavus"],
    description:
      "Ürünlü mahallesine batıda, tarla kenarı ile yeni blok için saplı demet ve kutu.",
    body: [
      "Ürünlü, Nilüfer’in batısında, Alaaddinbey ve Yaylacık ile birlikte açık alanın korunduğu kesimdedir. Çalı koridoru ve Minareliçavuş’un büyüyen konutu aynı batının diğer duraklarıdır.",
      "Tarla kenarı ile yeni blok yan yana gelebilir. Mevki mi, site bloğu mu, notun ilk satırında bellidir. Alıcı adı ikisini ayırır.",
      "Ürünlü’de yeni bloğa kutu, tarla kenarındaki eve saplı demet gider.",
    ],
  },
  {
    slug: "yaylacik",
    shortName: "Yaylacık",
    precise: true,
    relatedCategorySlugs: ["orkideler", "buketler"],
    nearbySlugs: ["cali", "alaaddinbey", "urunlu", "tahtali"],
    description:
      "Yaylacık mahallesine Çalı yakınında orkide ve buket. Ev, tarla kenarı ve işyeri ayrı kapılardır.",
    body: [
      "Yaylacık, Çalı koridoruna yakın, Nilüfer’in batı-güney kesimindeki eski köy mahallesidir. Ürünlü ve Alaaddinbey ile birlikte açık alanın durduğu kesimde anılır. Tahtalı doğudadır.",
      "Ev, tarla kenarı ve Çalı’ya yakın işyeri ayrı yazılır. Kapı tipi baştan bellidir.",
      "Orkide içeri, buket ziyarete gider. Teşekkür kartı kısa tutulur.",
    ],
  },
  {
    slug: "yolcati",
    shortName: "Yolçatı",
    precise: true,
    relatedCategorySlugs: ["buketler", "kutular"],
    nearbySlugs: ["cayli", "konakli", "badirga", "buyukbalikli"],
    description:
      "Yolçatı mahallesine kuzey kuşakta, Çaylı komşuluğundaki bahçe kapısına kutu ve saplı demet.",
    body: [
      "Yolçatı, Nilüfer’in kuzeyinde Çaylı, Konaklı, Badırga ve Büyükbalıklı ile aynı eski köy kuşağında durur. Çiçek, yazılan mevkinin evine gider.",
      "Köy içi kapı, yol kenarındaki buluşmadan ayrı yazılır. Numara ve alıcı durur.",
      "Yolçatı’nda demet, köy avlusuna göre küçük tutulur. Kutu, sapın kuzey yolunda dağılmaması istendiğinde seçilir. Kuzey yolundaki ziyarette kart, alıcı adıyla başlar.",
    ],
  },
];
