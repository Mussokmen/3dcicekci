import { legacyNeighborhoodCopy, niluferNeighborhoodDrafts } from "./nilufer-mahalleleri.ts";

export type AreaKind = "hub" | "district" | "neighborhood";

export type ServiceArea = {
  slug: string;
  name: string;
  path: string;
  shortName: string;
  description: string;
  kind: AreaKind;
  parentSlug?: string;
  body: string[];
  relatedCategorySlugs: string[];
  /** Komşu veya aynı ilçedeki ilgili mahalleler. */
  nearbySlugs?: string[];
  /** false ise bağlantı “yakın” diye sunulmaz. */
  nearbyPrecise?: boolean;
};

const baseServiceAreas: ServiceArea[] = [
  {
    slug: "bursa",
    name: "Bursa Çiçek Gönderimi",
    shortName: "Bursa Geneli",
    path: "/bursa",
    kind: "hub",
    description:
      "Bursa ili genelinde buket, orkide, kutu ve çelenk. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Bursa’nın Çiçekçisi, il genelinde taze çiçek hazırlayan yerel bir atölyedir. Buket, orkide, kutu ve çelenk atölyede taze hazırlanır.",
      "Aranjman, kendi atölyemizde çekilmiş fotoğraftaki düzene göre özenle hazırlanır. Teslim öncesi alıcı bilgilendirilir; kart notu mesajdaki metinle yazılır.",
      "Aynı gün teslim Bursa ili içindedir. Mahalle, alıcı adı ve kart notu mesajda yer alır. Ekip, çiçeği yola yakın tamamlar.",
    ],
  },
  {
    slug: "osmangazi",
    name: "Osmangazi Çiçek Gönderimi",
    shortName: "Osmangazi",
    path: "/bursa/osmangazi",
    kind: "district",
    description:
      "Osmangazi çiçekçisi: merkezde işyeri, hastane ve ev teslimi. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Osmangazi, Bursa’nın idari ve ticari kalbidir. Çiçek siparişi burada çoğu zaman bir işyeri katına, bir hastane girişine ya da bir apartman kapısına gider. Bursa’nın Çiçekçisi bu teslimleri aynı gün planlar.",
      "Heykel çevresindeki ofisler, Çekirge’deki otel ve evler, Demirtaş sanayi kapıları ve Soğanlı konutları aynı ilçede olsa da kapı tarifi değişir. Mesajda mahalle, alıcı adı ve varsa kat bilgisi yer alır. Not kısa tutulur; mahalle ve alıcı yeter.",
      "Buket ve çelenk, atölyede taze çiçekle hazırlanır. Fotoğraflar kendi çekimlerimizdir; teslim, görseldeki düzeni esas alır. Kurdele metni mesajdaki yazıyla işlenir ve teslimden önce kontrol edilir.",
      "Teslim öncesi alıcı bilgilendirilir. Güvenlik kaydı olan binalarda isim uyumu, çiçeğin bekletilmeden ulaşmasını sağlar. Kart notu ayrıca iletilir; metin sade ve okunaklı tutulur.",
      "Osmangazi çiçekçisi arayanlar vitrindeki kırmızı gül, masa çiçeği ve kapı önü çelenklerine buradan geçer. Hazırlık özenlidir, teslim dikkatlidir. İlçe içindeki Çekirge, Heykel, Demirtaş, Soğanlı ve Hamitler için ayrı mahalle notları da vardır.",
    ],
  },
  {
    slug: "nilufer",
    name: "Nilüfer Çiçek Gönderimi",
    shortName: "Nilüfer",
    path: "/bursa/nilufer",
    kind: "district",
    description:
      "Nilüfer çiçek siparişi: site, ofis ve ev teslimi. Buket, orkide ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    body: [
      "Nilüfer, site blokları, plaza katları ve yeni konut dokusuyla teslim tarifinin net yazıldığı bir ilçedir. Blok, daire ve alıcı adı mesajda durur.",
      "Doğudaki apartman kuşağı, Görükle’deki üniversite çevresi, Çalı hattındaki karma doku ve Uluabat ile kuzeybatıdaki eski köy mahalleleri aynı ilçe sınırındadır. Görükle ilçe değil mahalledir. FSM, Fatih Sultan Mehmet bulvarı boyunca ofis ve konutun sıralandığı kesittir.",
      "Orkide ve hediye kutusu, ofis masası ile ev holünde sık seçilir. Aranjman atölyede, kendi fotoğraflarımızdaki saksı ve ambalaja göre hazırlanır. Taze çiçek yola yakın tamamlanır.",
      "Site girişinde güvenlik kaydı yaygındır. Teslim öncesi alıcı bilgilendirilir; böylece kurye lobide bekletilmez. Kart notu aynı mesajda yazılır.",
      "Nilüfer çiçekçisi araması, aynı gün teslim ve dikkatli kapı teslimi ister. Ekip Bursa’dadır. Büyük düzenlerde ölçü mesajda baştan belirtilir; hazırlık buna göre ilerler.",
    ],
  },
  {
    slug: "yildirim",
    name: "Yıldırım Çiçek Gönderimi",
    shortName: "Yıldırım",
    path: "/bursa/yildirim",
    kind: "district",
    description:
      "Yıldırım çiçek gönderimi: mahalle kapısı, aile ziyareti ve çelenk. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Yıldırım’da çiçek siparişi mahalle sokağı ve apartman girişi üzerinden yürür. Erikli, Millet, Arabayatağı ve Esenevler aynı ilçede olsa da yokuş, site ve çarşı dokusu birbirinden ayrılır.",
      "Aile ziyareti, teşekkür buketi ve kapı önü çelenk bu ilçede sık hazırlanır. Mahalle adı, alıcı ve kart notu birlikte yazılır.",
      "Çelenkte kurdele metni mesajdaki harflerle işlenir. İsim teslimden önce okunur. Fotoğraflar kendi atölye çekimlerimizdir; ölçü bu görsellerle anlatılır.",
      "Taze çiçek teslime yakın hazırlanır. Teslim öncesi alıcı bilgilendirilir. Dar sokakta kapı tarifi, çiçeğin doğru girişe bırakılmasını sağlar.",
      "Yıldırım çiçekçisi olarak aynı gün teslimi Bursa ili içinde planlarız. Kutu düzeni yolculukta saplı bukete göre daha durağan kaldığı için hediye tesliminde sık tercih edilir.",
    ],
  },
  {
    slug: "mudanya",
    name: "Mudanya Çiçek Gönderimi",
    shortName: "Mudanya",
    path: "/bursa/mudanya",
    kind: "district",
    description:
      "Mudanya çiçek siparişi: sahil ve yazlık adreslerine buket ve orkide. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Mudanya, Bursa merkezine göre sahil boyunca uzayan bir güzergâhtır. Çiçek siparişi ev, yazlık site ve misafir ağırlanan kapılar için aynı gün planlanır.",
      "Bina tarifi, site adı ve alıcı bilgisi mesajda net yazılır. Teslim öncesi alıcı bilgilendirilir; rüzgârlı sahilde ambalaj son ana kadar korunur.",
      "Orkide ve kır buketi burada sık seçilir. Hazırlık atölyede, kendi çektiğimiz fotoğraftaki düzene göre yapılır. Taze çiçek sıcakta bekletilmeden yola çıkar.",
      "Sahil bandı ile iç mahalle aynı ilçe olsa da kapı tarifi değişir. Kart notu kısa tutulur ve mesajdaki metinle yazılır.",
      "Mudanya çiçekçisi arayanlar için vitrin, buket ve orkide üzerinden ilerler. Ekip yereldir; teslim dikkatli ve zamanında tamamlanır.",
    ],
  },
  {
    slug: "gemlik",
    name: "Gemlik Çiçek Gönderimi",
    shortName: "Gemlik",
    path: "/bursa/gemlik",
    kind: "district",
    description:
      "Gemlik çiçek siparişi: körfezde ev ve işyeri teslimi. Buket ve hediye kutusu kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Gemlik, körfez kıyısında hem yerleşim hem işyeri adreslerinin karıştığı bir ilçedir. Çiçek siparişi ev kapısı ile sanayi kabul noktası için ayrı tarif ister.",
      "Mahalle, kapı tarifi ve alıcı adı mesajda yer alır. Teslim öncesi bilgilendirme yapılır; çiçek kapıda bekletilmez.",
      "Hediye kutuları yolculukta saplı bukete göre daha durağan durur. Buketler atölyede taze hazırlanır ve ambalaj teslime kadar korunur. Fotoğraflar kendi çekimlerimizdir.",
      "Sahil ile iç mahalle aynı ilçe adını taşır; bu yüzden yalnızca “Gemlik” yazmak yetmez. Kart notu aynı mesajda iletilir.",
      "Gemlik çiçekçisi olarak aynı gün teslimi Bursa ili içinde yürütürüz. Hazırlık özenlidir, teslim dikkatlidir.",
    ],
  },
  {
    slug: "inegol",
    name: "İnegöl Çiçek Gönderimi",
    shortName: "İnegöl",
    path: "/bursa/inegol",
    kind: "district",
    description:
      "İnegöl çiçek gönderimi: işyeri teşekkürü, aile ziyareti ve çelenk. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "İnegöl, Bursa’nın doğusunda mobilya ve sanayi dokusuyla bilinen bir ilçedir. Çiçek siparişi burada işyeri teşekkürü, aile kapısı ve çelenk olarak ayrılır.",
      "Fabrika girişinde teslim noktası ve alıcı adı mesajda belirtilir. “İnegöl sanayi” tek başına kapı tarifi değildir. Teslim öncesi alıcı bilgilendirilir.",
      "Çelenkte renk, duracağı yer ve kurdele metni baştan yazılır. Metin teslimden önce okunur. Buket ve kutu, atölyede taze çiçekle, kendi fotoğraflarımızdaki düzene göre hazırlanır.",
      "Yol, merkezden uzundur; hazırlık buna göre erken tamamlanır ve teslim zamanında yapılır. Kart notu aile ziyaretlerinde ayrıca yazılır.",
      "İnegöl çiçekçisi araması, aynı gün teslim ve düzenli bir karşılama ister. Ekip Bursa’dadır; çiçek özenle yola çıkar.",
    ],
  },
  {
    slug: "gursu",
    name: "Gürsu Çiçek Gönderimi",
    shortName: "Gürsu",
    path: "/bursa/gursu",
    kind: "district",
    description:
      "Gürsu çiçek siparişi: site ve ev kapısına buket ve kutu. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Gürsu, Yıldırım ile Kestel arasında konutun yoğunlaştığı bir ilçedir. Çiçek siparişi site bloğu, daire numarası ve mahalle adıyla netleşir.",
      "Yalnızca ilçe adı kapıyı bulmaya yetmez. Alıcı teslim öncesi bilgilendirilir. Kart notu aynı mesajda yazılır.",
      "Doğum günü ve ev ziyareti için mevsim buketi ile kutu düzeni sık hazırlanır. Çiçek atölyede tazedir; ambalaj yolda korunur. Görseller kendi çekimlerimizdir.",
      "Yeni sitelerde güvenlik kaydı için alıcı telefonu mesajda durur. Büyük düzenlerde kapı ölçüsü baştan belirtilir.",
      "Gürsu çiçekçisi olarak aynı gün teslimi Bursa ili içinde yürütürüz. Hazırlık özenli, teslim dikkatlidir.",
    ],
  },
  {
    slug: "kestel",
    name: "Kestel Çiçek Gönderimi",
    shortName: "Kestel",
    path: "/bursa/kestel",
    kind: "district",
    description:
      "Kestel çiçek gönderimi: ev sokağı ve sanayi kapısı. Buket, orkide ve çelenk kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "celenkler"],
    body: [
      "Kestel’de çiçek siparişi iki ayrı kapıya gider: konut sokağı ve sanayi girişi. Adres tipinin mesajda belirtilmesi, hazırlığın doğru ölçekte yapılmasını sağlar.",
      "Teşekkür buketi işyerinde, orkide ev ve ofis masasında sık seçilir. Fotoğraftaki saksı ve dal, teslimde referanstır; görseller atölyede çekilmiştir.",
      "Çelenkte kurdele metni erken yazılır ve teslimden önce okunur. Teslim öncesi alıcı bilgilendirilir; çiçek kabul noktasında bekletilmez.",
      "Gürsu ve Yıldırım’a yakın mahallelerde semt adı açık yazılır. Kart notu ev teslimlerinde ayrıca iletilir.",
      "Kestel çiçekçisi arayanlar için aynı gün teslim Bursa ili içinde planlanır. Ekip yereldir; hazırlık tazedir.",
    ],
  },
  {
    slug: "yenisehir",
    name: "Yenişehir Çiçek Gönderimi",
    shortName: "Yenişehir",
    path: "/bursa/yenisehir",
    kind: "district",
    description:
      "Yenişehir çiçek siparişi: ova üzerindeki ev ve işyerine buket, kutu ve çelenk. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Yenişehir, Bursa ovasında merkezden ayrı bir ilçedir. Çiçek siparişi ev, işyeri ve anma için aynı gün planlanır; yolculuk hazırlığın erken başlamasıyla karşılanır.",
      "Mahalle ve cadde adı birlikte yazılır. Teslim öncesi alıcı bilgilendirilir. Kart notu mesajdaki metinle hazırlanır.",
      "Kutu düzeni uzun yolda bukete göre daha durağan kalır. Çelenkte ölçü ve kurdele baştan netleşir. Fotoğraflar kendi atölye çekimlerimizdir.",
      "Taze çiçek atölyede özenle hazırlanır ve ambalaj teslime kadar korunur. Alıcı adı, kapıda doğru kişiyi bulmayı sağlar.",
      "Yenişehir çiçekçisi olarak teslimi zamanında ve dikkatli tamamlarız. Ekip Bursa’dadır.",
    ],
  },
  {
    slug: "iznik",
    name: "İznik Çiçek Gönderimi",
    shortName: "İznik",
    path: "/bursa/iznik",
    kind: "district",
    description:
      "İznik çiçek siparişi: göl kıyısı, ev ve konak kapısı. Buket ve orkide aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "İznik, göl ve tarihî merkez nedeniyle yolu kendine özgü bir ilçedir. Çiçek siparişi ev, konak ve işyeri kapısı için aynı gün planlanır.",
      "Pansiyon ile ev girişi karışabildiği için konak adı veya cadde tarifi mesajda yer alır. Teslim öncesi alıcı bilgilendirilir.",
      "Kır buketi ve saksılı orkide misafir hediyesinde sık seçilir. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır. Taze çiçek sıcakta bekletilmeden yola çıkar.",
      "Kart notu kısa ve okunaklı yazılır. Hafta sonu ziyaretlerinde kapı tarifi ayrıca netleşir.",
      "İznik çiçekçisi araması, dikkatli bir teslim ve düzenli bir aranjman ister. Ekip yereldir; teslim zamanında tamamlanır.",
    ],
  },
  {
    slug: "karacabey",
    name: "Karacabey Çiçek Gönderimi",
    shortName: "Karacabey",
    path: "/bursa/karacabey",
    kind: "district",
    description:
      "Karacabey çiçek gönderimi: ilçe merkezi, belde ve işyeri. Buket, kutu ve çelenk kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Karacabey, Bursa’nın batısında geniş bir ilçedir. Çiçek siparişi ilçe merkezi, belde ve işyeri için ayrı tarif ister. “Karacabey çıkışı” tek başına kapı bilgisi değildir.",
      "Mahalle veya belde adı, alıcı ve kart notu mesajda durur. Teslim öncesi bilgilendirme yapılır.",
      "İşyeri teşekkür buketi ve aile ziyareti kutuları vitrindeki örneklerden seçilir. Uzun yolda ambalaj korunur. Çiçek atölyede taze hazırlanır; fotoğraflar kendi çekimlerimizdir.",
      "Çelenkte metin ve duracağı yer baştan yazılır. Kurdele teslimden önce okunur.",
      "Karacabey çiçekçisi olarak aynı gün teslimi planlar, çiçeği dikkatle ulaştırırız. Ekip Bursa’dadır.",
    ],
  },
  {
    slug: "mustafakemalpasa",
    name: "Mustafakemalpaşa Çiçek Gönderimi",
    shortName: "Mustafakemalpaşa",
    path: "/bursa/mustafakemalpasa",
    kind: "district",
    description:
      "Mustafakemalpaşa çiçek siparişi: esnaf, ev ve çelenk teslimi. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Mustafakemalpaşa, Bursa’nın güneybatısında esnaf çarşısı ve konut sokaklarının iç içe olduğu bir ilçedir. Çiçek siparişi cadde tarifi ve alıcı adıyla netleşir.",
      "Teslim öncesi alıcı bilgilendirilir. Kart notu mesajdaki cümleyle yazılır.",
      "Kutu hediyeler yolculukta durağan kalır. Buketler atölyede taze çiçekle hazırlanır. Çelenkte renk, ölçü ve kurdele ayrı ayrı belirtilir; metin teslimden önce kontrol edilir.",
      "Fotoğraflar kendi atölyemizde çekilmiştir. Teslim, görseldeki düzeni esas alır.",
      "Mustafakemalpaşa çiçekçisi arayanlar için aynı gün teslim Bursa ili içinde planlanır. Hazırlık özenli, teslim dikkatlidir.",
    ],
  },
  {
    slug: "orhangazi",
    name: "Orhangazi Çiçek Gönderimi",
    shortName: "Orhangazi",
    path: "/bursa/orhangazi",
    kind: "district",
    description:
      "Orhangazi çiçek siparişi: Gemlik–İznik hattında ev ve işyeri. Buket, orkide ve kutu kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    body: [
      "Orhangazi, Gemlik ile İznik arasında hem yerleşim hem sanayi kapısı barındırır. Çiçek siparişi ev hediyesi ile işyeri teşekkürü olarak ayrılır.",
      "“Fabrika yanı” tek başına adres değildir. Cadde veya kapı tarifi mesajda yer alır. teslim öncesi alıcı bilgilendirilir.",
      "Orkide ve teşekkür buketi sık seçilir. Saksı devrilmeden taşınır. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır.",
      "Kart notu kısa tutulur. Taze çiçek yola yakın tamamlanır ve ambalaj korunur.",
      "Orhangazi çiçekçisi olarak aynı gün teslimi planlarız. Ekip Bursa’dadır; teslim zamanında ve dikkatli yapılır.",
    ],
  },
  {
    slug: "buyukorhan",
    name: "Büyükorhan Çiçek Gönderimi",
    shortName: "Büyükorhan",
    path: "/bursa/buyukorhan",
    kind: "district",
    description:
      "Büyükorhan çiçek siparişi: güneydeki köy ve ilçe merkezi. Buket ve çelenk aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Büyükorhan, Bursa’nın güneyinde Uludağ’ın arka yamaçlarına yaslanan bir ilçedir. Çiçek siparişi ilçe merkezi ve köy kapısı için ayrıntılı tarif ister.",
      "Yol, dağ eteğinde uzar. mahalle veya köy adı, alıcı ve kart notu mesajda durur. Teslim öncesi bilgilendirme yapılır.",
      "Buket atölyede taze hazırlanır, ambalaj yol boyunca korunur. Çelenkte kurdele metni baştan yazılır ve teslimden önce okunur. Fotoğraflar kendi çekimlerimizdir.",
      "Kapı tarifi, benzer köy adlarının karışmaması için cadde veya mevki ile birlikte istenir. Ekip, çiçeği dikkatle ulaştırır.",
      "Büyükorhan çiçekçisi araması, aynı gün teslim ve sade bir aranjmanla karşılanır. Hazırlık özenlidir.",
    ],
  },
  {
    slug: "harmancik",
    name: "Harmancık Çiçek Gönderimi",
    shortName: "Harmancık",
    path: "/bursa/harmancik",
    kind: "district",
    description:
      "Harmancık çiçek gönderimi: küçük ilçe merkezi ve köy kapısı. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Harmancık, Bursa’nın güneyinde seyrek yerleşimli bir ilçedir. Çiçek siparişi merkezdeki ev ve köy kapısı için kişi adı ve mevkiyle netleşir.",
      "Teslim öncesi alıcı bilgilendirilir. Kart notu mesajdaki metinle yazılır.",
      "Kutu düzeni uzun yolda bukete göre daha durağan kalır. Buketler atölyede taze çiçekle hazırlanır. Görseller kendi atölye çekimlerimizdir.",
      "Köy tesliminde tarif, ilçe adından daha ayrıntılı yazılır. Ekip çiçeği zamanında ve dikkatli götürür.",
      "Harmancık çiçekçisi olarak aynı gün teslimi Bursa ili içinde planlarız. Hazırlık özenlidir.",
    ],
  },
  {
    slug: "keles",
    name: "Keles Çiçek Gönderimi",
    shortName: "Keles",
    path: "/bursa/keles",
    kind: "district",
    description:
      "Keles çiçek siparişi: Uludağ’ın güney yaylasında ev ve köy teslimi. Buket aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Keles, Uludağ’ın güney eteğinde yayla karakteri taşıyan bir ilçedir. Çiçek siparişi ilçe merkezi ve köy evi için mevki tarifiyle yürür.",
      "Yol, yüksek kesimde ilerler. Alıcı teslim öncesi bilgilendirilir; çiçek kapıda bekletilmez.",
      "Buket atölyede taze hazırlanır ve ambalaj serin yolda da korunur. Çelenkte metin mesajdaki yazıyla işlenir, teslimden önce okunur. Fotoğraflar kendi çekimlerimizdir.",
      "Kart notu aile ziyaretlerinde ayrıca yazılır. Kapı tarifi, yayla evlerinde cadde yerine mevki adıyla netleşir.",
      "Keles çiçekçisi arayanlar için aynı gün teslim planlanır. Ekip Bursa’dadır; teslim dikkatlidir.",
    ],
  },
  {
    slug: "orhaneli",
    name: "Orhaneli Çiçek Gönderimi",
    shortName: "Orhaneli",
    path: "/bursa/orhaneli",
    kind: "district",
    description:
      "Orhaneli çiçek siparişi: güneybatıda ilçe merkezi ve köy. Buket, kutu ve çelenk kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Orhaneli, Bursa’nın güneybatısında ilçe merkezi, köy ve işyeri kapılarının dağıldığı bir yerleşimdir. Çiçek siparişi bu kapıları birbirine karıştırmadan planlanır.",
      "Mevki, alıcı adı ve kart notu mesajda yer alır. Teslim öncesi bilgilendirme yapılır.",
      "Teşekkür buketi ve kutu hediye vitrindeki örneklerden seçilir. Çelenkte kurdele metni baştan yazılır. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır.",
      "Taze çiçek yola yakın tamamlanır. Uzun güzergâhta ambalaj korunur. Ekip teslimi zamanında tamamlar.",
      "Orhaneli çiçekçisi olarak aynı gün teslimi Bursa ili içinde yürütürüz. Hazırlık özenli, teslim dikkatlidir.",
    ],
  },
  {
    slug: "cekirge",
    name: "Çekirge",
    shortName: "Çekirge",
    path: "/bursa/cekirge",
    kind: "neighborhood",
    parentSlug: "osmangazi",
    description:
      "Çekirge çiçek siparişi: yokuştaki otel, ev ve kaplıca çevresi. Buket aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Çekirge, Osmangazi’nin yokuşundaki evleri ve konaklama kapılarıyla ayrı bir teslim dokusudur. Çiçek siparişi otel resepsiyonu ile apartman kapısını birbirinden ayırır.",
      "Otel adı veya sokak tarifi, alıcı adı ve kart notu mesajda durur. Teslim öncesi alıcı bilgilendirilir.",
      "Buket ve orkide atölyede taze hazırlanır. Fotoğraflar kendi çekimlerimizdir. Yokuşta ambalaj son ana kadar korunur.",
      "Teslim aynı gün ve dikkatli yapılır.",
    ],
  },
  {
    slug: "heykel",
    name: "Heykel",
    shortName: "Heykel",
    path: "/bursa/heykel",
    kind: "neighborhood",
    parentSlug: "osmangazi",
    description:
      "Heykel çiçek siparişi: kent meydanı çevresinde ofis ve işyeri. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Heykel, Bursa’nın merkez meydanı ve çevresindeki ofis katlarıdır. Çiçek siparişi burada çoğu zaman bir resepsiyon bankosuna veya bir işyeri katına gider.",
      "İşyeri adı, kat ve alıcı mesajda yer alır. Teslim öncesi bilgilendirme yapılır; aranjman lobide bekletilmez.",
      "Masa çiçeği ve teşekkür buketi sık seçilir. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır. Kart notu kısa yazılır.",
      "Heykel, Osmangazi’nin merkez meydanındadır. Aynı gün teslim planlanır, teslim dikkatlidir.",
    ],
  },
  {
    slug: "demirtas",
    name: "Demirtaş",
    shortName: "Demirtaş",
    path: "/bursa/demirtas",
    kind: "neighborhood",
    parentSlug: "osmangazi",
    description:
      "Demirtaş çiçek gönderimi: organize sanayi ve işyeri kapısı. Buket ve çelenk işyeri kapısına gider.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’de organize sanayi ve geniş işyeri kapılarının bulunduğu bölgedir. Çiçek siparişi güvenlik noktasında alıcı adı ve firma adıyla yürür.",
      "Teslim öncesi ilgili kişi bilgilendirilir. Kapı tarifi, sanayi sitesi adıyla birlikte yazılır.",
      "Teşekkür buketi ve çelenk sık hazırlanır. Kurdele metni mesajdaki yazıyla işlenir. Çiçek atölyede taze hazırlanır; fotoğraflar kendi çekimlerimizdir.",
      "Demirtaş teslimi, Osmangazi’nin konut sokaklarından ayrı planlanır. Aynı gün teslim dikkatle tamamlanır.",
    ],
  },
  {
    slug: "soganli",
    name: "Soğanlı",
    shortName: "Soğanlı",
    path: "/bursa/soganli",
    kind: "neighborhood",
    parentSlug: "osmangazi",
    description:
      "Soğanlı çiçek siparişi: botanik park çevresinde yoğun konut. Buket ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Soğanlı, Osmangazi’de botanik parkın çevresine yayılan yoğun bir konut mahallesidir. Çiçek siparişi apartman adı ve daire ile netleşir.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu aile ziyareti ve doğum günü için aynı mesajda yazılır.",
      "Mevsim buketi ve hediye kutusu sık seçilir. Hazırlık atölyede taze çiçekle yapılır. Görseller kendi çekimlerimizdir.",
      "Soğanlı, merkez işyeri tesliminden ayrı bir kapı düzenidir. Aynı gün teslim Bursa içinde planlanır.",
    ],
  },
  {
    slug: "hamitler",
    name: "Hamitler",
    shortName: "Hamitler",
    path: "/bursa/hamitler",
    kind: "neighborhood",
    parentSlug: "osmangazi",
    description:
      "Hamitler çiçek siparişi: Nilüfer sınırına yakın konut ve işyeri. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Hamitler, Osmangazi’nin Nilüfer’e yaklaşan konut ve küçük işyeri dokusudur. Çiçek siparişi ev kapısı ile dükkân girişini ayırarak planlanır.",
      "Mahalle içi tarif, alıcı adı ve kart notu mesajda durur. Teslim öncesi bilgilendirme yapılır.",
      "Buket ve orkide atölyede özenle hazırlanır. Taze çiçek yola yakın tamamlanır. Fotoğraflar kendi atölyemizde çekilmiştir.",
      "Hamitler, Osmangazi’nin Nilüfer’e yaklaşan kapısıdır. Aynı gün teslim dikkatli yapılır.",
    ],
  },
  {
    slug: "ihsaniye",
    name: "İhsaniye",
    shortName: "İhsaniye",
    path: "/bursa/ihsaniye",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "İhsaniye çiçek siparişi: Nilüfer’de yerleşik konut ve cadde. Buket ve orkide aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "İhsaniye, Nilüfer’de cadde üstü işyerleri ile yerleşik apartmanların bir arada durduğu bir mahalledir. Çiçek siparişi ev kapısı ve ofis katı için ayrı yazılır.",
      "Apartman veya işyeri adı, alıcı ve kart notu mesajda yer alır. Teslim öncesi alıcı bilgilendirilir.",
      "Klasik gül buketi ve saksılı orkide burada sık seçilir. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır. Taze çiçek bekletilmeden yola çıkar.",
      "İhsaniye, Nilüfer’in doğu yakasında cadde ile apartmanın bir arada durduğu kapıdır. Aynı gün teslim planlanır ve dikkatle tamamlanır.",
    ],
  },
  {
    slug: "ozluce",
    name: "Özlüce",
    shortName: "Özlüce",
    path: "/bursa/ozluce",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Özlüce çiçek gönderimi: yeni siteler ve geniş bloklar. Orkide ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["orkideler", "kutular"],
    body: [
      "Özlüce, Nilüfer’in batısında geniş sitelerin ve yeni blokların bulunduğu bir mahalledir. Çiçek siparişi site adı, blok ve daire ile yürür.",
      "Güvenlik kaydı için alıcı önceden bilgilendirilir. Kart notu aynı mesajda yazılır.",
      "Orkide ve hediye kutusu, ev holü ve misafir hediyesinde sık hazırlanır. Saksı ve kutu atölyede, kendi çekimlerimizdeki görünüme göre tamamlanır.",
      "Özlüce teslimi, Nilüfer’in eski mahallelerinden farklı bir kapı düzenidir. Aynı gün teslim dikkatli yapılır.",
    ],
  },
  {
    slug: "fsm",
    name: "FSM",
    shortName: "FSM",
    path: "/bursa/fsm",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "FSM çiçek siparişi: Fatih Sultan Mehmet bulvarı boyunca ofis ve konut. Teslim aynı gün planlanır.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "FSM, Nilüfer’de Fatih Sultan Mehmet bulvarı boyunca dizilen ofisler ve konutlarla anılır. Çiçek siparişi plaza katı ile apartman kapısını ayırır.",
      "Bina adı, kat ve alıcı mesajda durur. Teslim öncesi bilgilendirme yapılır; aranjman resepsiyonda bekletilmez.",
      "Masa orkidesi ve teşekkür buketi sık seçilir. Hazırlık atölyede taze çiçekle yapılır. Fotoğraflar kendi çekimlerimizdir.",
      "FSM, Nilüfer’de bulvar boyunca ofis ritmiyle yürür. Aynı gün teslim zamanında tamamlanır.",
    ],
  },
  {
    slug: "camlica",
    name: "Çamlıca",
    shortName: "Çamlıca",
    path: "/bursa/camlica",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Çamlıca çiçek siparişi: Nilüfer’de site içi ev teslimi. Buket ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Çamlıca, Nilüfer’de site içi yaşamın belirgin olduğu bir mahalledir. Çiçek siparişi blok, daire ve güvenlik kaydıyla planlanır.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu doğum günü ve teşekkür için mesajdaki metinle yazılır.",
      "Buket ve kutu atölyede özenle hazırlanır. Taze çiçek yola yakın tamamlanır. Görseller kendi atölye çekimlerimizdir.",
      "Çamlıca, Özlüce ve İhsaniye ile komşu olsa da kapı düzeni ayrıdır. Aynı gün teslim dikkatle yapılır.",
    ],
  },
  {
    slug: "odunluk",
    name: "Odunluk",
    shortName: "Odunluk",
    path: "/bursa/odunluk",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Odunluk çiçek gönderimi: plaza ve ofis katı. Orkide ve buket aynı gün hazırlanır.",
    relatedCategorySlugs: ["orkideler", "buketler"],
    body: [
      "Odunluk, Nilüfer’de plaza ve ofis katlarının toplandığı bir iş mahallesidir. Çiçek siparişi firma adı, kat ve alıcı ile yürür.",
      "Teslim öncesi ilgili kişi bilgilendirilir. Kart notu masa hediyesinde kısa tutulur.",
      "Saksılı orkide ofiste sık seçilir. Saksı atölyede hazırlanır, fotoğraftaki dal düzeni esas alınır. Buketler taze çiçekle tamamlanır.",
      "Odunluk teslimi konut sitesinden farklıdır; kabul noktası mesajda yazılır. Aynı gün teslim zamanında yapılır.",
    ],
  },
  {
    slug: "ertugrul",
    name: "Ertuğrul",
    shortName: "Ertuğrul",
    path: "/bursa/ertugrul",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Ertuğrul çiçek siparişi: Nilüfer’de yerleşik apartmanlar. Buket ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Ertuğrul, Nilüfer’de Özlüce’ye komşu, yerleşik apartman dokusu olan bir mahalledir. Çiçek siparişi apartman adı ve daire numarasıyla netleşir.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu aynı mesajda iletilir.",
      "Mevsim buketi ve hediye kutusu ev ziyaretinde sık hazırlanır. Çiçek atölyede tazedir; ambalaj yolda korunur. Fotoğraflar kendi çekimlerimizdir.",
      "Ertuğrul, Nilüfer’de plaza katından çok ev kapısının yazıldığı bir mahalledir. Aynı gün teslim dikkatli tamamlanır.",
    ],
  },
  {
    slug: "gorukle",
    name: "Görükle",
    shortName: "Görükle",
    path: "/bursa/gorukle",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Görükle çiçek siparişi: Nilüfer mahallesi, üniversite ve yurt çevresi. Buket ve orkide yurt ve site kapısına gider.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Görükle bir ilçe değildir; Nilüfer’in üniversite ve yurt çevresindeki mahallesidir. Çiçek siparişi yurt girişi, site kapısı ve kampüs çevresi için ayrı tarif ister.",
      "Kampüs içi nokta ile mahalle kapısı aynı şey değildir. Buluşma kapısı mesajda yazılır. Teslim öncesi alıcı bilgilendirilir.",
      "Doğum günü buketi ve saksılı orkide sık seçilir. Hazırlık atölyede, kendi fotoğraflarımızdaki düzene göre yapılır. Taze çiçek bekletilmeden teslim edilir.",
      "Dönem başı ve mezuniyet günlerinde hazırlık erken başlar. Kart notu mesajdaki metinle yazılır. Görükle kapısı kendi sokağı, yurt girişi ve site adıyla yazılır.",
    ],
  },
  {
    slug: "ataevler",
    name: "Ataevler",
    shortName: "Ataevler",
    path: "/bursa/ataevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Ataevler çiçek siparişi: Nilüfer sitelerinde blok ve daire teslimi. Buket ve orkide ev ile ofise gider.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Ataevler, Nilüfer’de site blokları ve daire numarasıyla tarif edilen bir mahalledir. Çiçek siparişi güvenlik kaydı düşünülerek planlanır.",
      "Blok, daire ve alıcı adı mesajda durur. Teslim öncesi alıcı bilgilendirilir; kurye lobide bekletilmez.",
      "Ev hediyesi orkide ve klasik gül buketi sık seçilir. Hazırlık atölyede taze çiçekle yapılır. Fotoğraflar kendi çekimlerimizdir.",
      "Büyük düzenlerde asansör ve kapı ölçüsü mesajda belirtilir. Kart notu aynı mesajda yazılır. Ataevler, Nilüfer genelinden ayrı bir site teslimidir.",
    ],
  },
  {
    slug: "balat",
    name: "Balat",
    shortName: "Balat",
    path: "/bursa/balat",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Balat çiçek gönderimi: cadde ve sitenin iç içe olduğu Nilüfer mahallesi. Buket ve kutu kapıya göre hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Balat, Nilüfer’de cadde üstü adresler ile site girişlerinin karıştığı bir mahalledir. Çiçek siparişi apartman adı ve sokak adını birlikte ister.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu teşekkür ve doğum günü için mesajda yazılır.",
      "Mevsim buketi ve kutu düzeni vitrindeki örneklerden seçilir. Çiçek atölyede taze hazırlanır; ambalaj korunur. Görseller kendi çekimlerimizdir.",
      "İşyeri katı ile ev kapısı ayrı yazılır. Balat teslimi, Nilüfer ilçe notundan bağımsız bir kapı tarifidir. Aynı gün teslim dikkatli yapılır.",
    ],
  },
  {
    slug: "besevler",
    name: "Beşevler",
    shortName: "Beşevler",
    path: "/bursa/besevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description:
      "Beşevler çiçek siparişi: Nilüfer’de ev ve ofis kapısı. Kutu, buket ve orkide aynı gün hazırlanır.",
    relatedCategorySlugs: ["kutular", "orkideler", "buketler"],
    body: [
      "Beşevler, Nilüfer’de ev ziyareti ile ofis tesliminin aynı mahallede buluştuğu bir bölgedir. Çiçek siparişi kabul saati ve kapı tarifini birlikte ister.",
      "İşyerinde kat, evde daire numarası yazılır. Teslim öncesi alıcı bilgilendirilir.",
      "Hediye kutusu ve orkide masada durması istenen düzenlerde sık hazırlanır. Buketler taze çiçekle, atölyede tamamlanır. Fotoğraflar kendi çekimlerimizdir.",
      "Beşevler’de ev ziyareti ile ofis aynı gün içinde yan yana gelir. Teslim zamanında ve dikkatli yapılır. Kart notu mesajdaki metinle yazılır.",
    ],
  },
  {
    slug: "erikli",
    name: "Erikli",
    shortName: "Erikli",
    path: "/bursa/erikli",
    kind: "neighborhood",
    parentSlug: "yildirim",
    description:
      "Erikli çiçek siparişi: Yıldırım’da yokuş ve apartman kapısı. Buket aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Erikli, Yıldırım’ın yokuşlu konut mahallelerindendir. Çiçek siparişi apartman girişi ve sokak adıyla netleşir.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu aile ziyareti için aynı mesajda yazılır.",
      "Mevsim buketi ve kutu atölyede taze hazırlanır. Ambalaj yokuşta da korunur. Fotoğraflar kendi çekimlerimizdir.",
      "Erikli, Yıldırım’ın yokuşlu sokaklarından biridir. Aynı gün teslim dikkatli tamamlanır.",
    ],
  },
  {
    slug: "millet",
    name: "Millet",
    shortName: "Millet",
    path: "/bursa/millet",
    kind: "neighborhood",
    parentSlug: "yildirim",
    description:
      "Millet çiçek gönderimi: Yıldırım’da sık dokulu mahalle. Buket ve çelenk aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Millet, Yıldırım’da apartmanların sık dizildiği bir mahalledir. Çiçek siparişi benzer apartman adlarının karışmaması için sokakla birlikte yazılır.",
      "Teslim öncesi alıcı bilgilendirilir. Kart notu mesajdaki metinle hazırlanır.",
      "Aile buketi ve kapı önü çelenk burada ayrı hazırlanır. Kurdele metni teslimden önce okunur. Çiçek atölyede tazedir; görseller kendi çekimlerimizdir.",
      "Millet, Yıldırım’da apartmanların sık dizildiği bir sokaktır. Aynı gün teslim zamanında yapılır.",
    ],
  },
  {
    slug: "arabayatagi",
    name: "Arabayatağı",
    shortName: "Arabayatağı",
    path: "/bursa/arabayatagi",
    kind: "neighborhood",
    parentSlug: "yildirim",
    description:
      "Arabayatağı çiçek siparişi: Yıldırım’ın doğu konutları. Buket ve kutu aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Arabayatağı, Yıldırım’ın doğusunda konutun yayıldığı bir mahalledir. Çiçek siparişi mahalle içi cadde ve daire ile yürür.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu kısa ve okunaklı yazılır.",
      "Hediye kutusu yolculukta durağan kalır. Buketler atölyede taze çiçekle hazırlanır. Fotoğraflar kendi atölyemizde çekilmiştir.",
      "Arabayatağı, Erikli ve Esenevler’den farklı bir kapı düzenidir. Aynı gün teslim dikkatle tamamlanır.",
    ],
  },
  {
    slug: "esenevler",
    name: "Esenevler",
    shortName: "Esenevler",
    path: "/bursa/esenevler",
    kind: "neighborhood",
    parentSlug: "yildirim",
    description:
      "Esenevler çiçek gönderimi: teleferik eteklerine yakın Yıldırım mahallesi. Buket aynı gün hazırlanır.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Esenevler, Yıldırım’da Uludağ eteklerine yakın konutların bulunduğu bir mahalledir. Çiçek siparişi yokuş ve site girişine göre tarif edilir.",
      "Alıcı teslim öncesi bilgilendirilir. Kart notu mesajda yazılır.",
      "Buket atölyede taze hazırlanır; ambalaj korunur. Çelenkte kurdele metni baştan iletilir ve teslimden önce okunur. Görseller kendi çekimlerimizdir.",
      "Esenevler, Yıldırım’ın çarşı içi tesliminden ayrıdır. Aynı gün teslim zamanında ve dikkatli yapılır.",
    ],
  },
];

const legacyNearby: Record<string, string[]> = {
  ihsaniye: ["balat", "kultur", "besevler", "konak"],
  ataevler: ["besevler", "ozluce", "camlica", "balat"],
  besevler: ["ataevler", "balat", "gorukle", "ihsaniye"],
  camlica: ["ozluce", "ertugrul", "ataevler", "alaaddinbey"],
  balat: ["ihsaniye", "besevler", "ataevler", "kultur"],
  odunluk: ["ozluce", "ihsaniye", "fsm", "kultur"],
  ozluce: ["camlica", "ertugrul", "ataevler", "odunluk"],
  ertugrul: ["ozluce", "camlica", "alaaddinbey", "fethiye"],
  gorukle: ["balkan", "kizilcikli", "besevler", "dumlupinar"],
  fsm: ["odunluk", "ihsaniye", "ozluce", "kultur"],
};

function dativePlace(name: string) {
  const vowels = "aeıioöuü";
  const lower = name.toLocaleLowerCase("tr");
  let vowel = "e";
  for (let index = lower.length - 1; index >= 0; index -= 1) {
    if (vowels.includes(lower[index] ?? "")) {
      vowel = lower[index] ?? "e";
      break;
    }
  }
  const front = "eiöü".includes(vowel);
  const endsWithVowel = vowels.includes(lower[lower.length - 1] ?? "");
  const suffix = endsWithVowel ? (front ? "ye" : "ya") : front ? "e" : "a";
  return `${name}’${suffix}`;
}

function neighborhoodTitle(shortName: string) {
  if (shortName === "FSM") return "FSM’ye Çiçek Gönderimi";
  return `${dativePlace(shortName)} Çiçek Gönderimi`;
}

const draftedNeighborhoods: ServiceArea[] = niluferNeighborhoodDrafts.map((draft) => ({
  slug: draft.slug,
  shortName: draft.shortName,
  name: draft.shortName,
  path: `/bursa/${draft.slug}`,
  kind: "neighborhood",
  parentSlug: "nilufer",
  description: draft.description,
  body: draft.body,
  relatedCategorySlugs: draft.relatedCategorySlugs,
  nearbySlugs: draft.nearbySlugs,
  nearbyPrecise: draft.precise,
}));

export const serviceAreas: ServiceArea[] = [...baseServiceAreas, ...draftedNeighborhoods].map(
  (area) => {
    if (area.kind !== "neighborhood") return area;
    const refreshed = legacyNeighborhoodCopy[area.slug];
    return {
      ...area,
      name: neighborhoodTitle(area.shortName),
      nearbySlugs: area.nearbySlugs ?? legacyNearby[area.slug],
      ...(refreshed
        ? {
            description: refreshed.description,
            body: refreshed.body,
            relatedCategorySlugs: refreshed.relatedCategorySlugs,
          }
        : {}),
    };
  },
);

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getDistrictAreas() {
  return serviceAreas.filter((area) => area.kind === "district");
}

export function getNeighborhoods() {
  return serviceAreas.filter((area) => area.kind === "neighborhood");
}

export function getNeighborhoodsByParent(parentSlug: string) {
  return serviceAreas
    .filter((area) => area.parentSlug === parentSlug)
    .slice()
    .sort((a, b) => a.shortName.localeCompare(b.shortName, "tr"));
}

export function getHubArea() {
  return serviceAreas.find((area) => area.kind === "hub");
}
