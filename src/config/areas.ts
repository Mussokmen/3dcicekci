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
      "Heykel çevresindeki ofisler, Çekirge’deki oteller ve evler, Demirtaş’taki iş yerleri ve Soğanlı’daki konutlar aynı ilçenin farklı yüzleridir. Siparişte mahalle ve alıcı adı yazılır. Kart notu kısa tutulabilir.",
      "Buket ve çelenk, atölyede taze çiçekle hazırlanır. Fotoğraflar kendi çekimlerimizdir; teslim, görseldeki düzeni esas alır. Kurdele metni mesajdaki yazıyla işlenir ve teslimden önce kontrol edilir.",
      "Teslim öncesi alıcıya haber verilir. Kart notu ayrıca iletilir; metin sade ve okunaklı tutulur.",
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
      "Site adresinde blok ve daire, konutta sokak ve kapı yazılır. Kart notu aynı mesajda iletilir.",
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
      "Taze çiçek teslime yakın hazırlanır. Dar sokakta bina adı ve daire, çiçeğin doğru kata çıkmasını sağlar.",
      "Yıldırım çiçekçisi olarak aynı gün teslimi Bursa ili içinde planlarız. Hediye kutusu yolda formunu koruduğu için sık tercih edilir.",
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
      "Sahil kesimi ile iç mahalleler aynı ilçededir; siparişte mahalle adı açık yazılır. Kart notu kısa tutulur ve mesajdaki metinle yazılır.",
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
      "Mahalle, sokak ve alıcı adı mesajda yer alır. Çiçek taze hazırlanır.",
      "Hediye kutuları yolda formunu korur. Buketler atölyede taze hazırlanır. Fotoğraflar kendi çekimlerimizdir.",
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
      "Fabrika girişinde teslim noktası ve alıcı adı mesajda belirtilir. “İnegöl sanayi” tek başına bir adres değildir. Teslim öncesi alıcıya haber verilir.",
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
      "Yeni sitelerde blok, daire ve alıcının telefonu mesajda durur. Büyük düzenlerde ölçü baştan belirtilir.",
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
      "Çelenkte kurdele metni erken yazılır ve teslimden önce okunur. Teslim öncesi alıcıya haber verilir.",
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
      "Kutu düzeni uzun yolda formunu korur. Çelenkte ölçü ve kurdele baştan netleşir. Fotoğraflar kendi atölye çekimlerimizdir.",
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
      "Kart notu kısa ve okunaklı yazılır. Hafta sonu ziyaretlerinde cadde veya konak adı ayrıca yazılır.",
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
      "Kutu hediyeler yolculukta formunu korur. Buketler atölyede taze çiçekle hazırlanır. Çelenkte renk, ölçü ve kurdele ayrı ayrı belirtilir; metin teslimden önce kontrol edilir.",
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
      "“Fabrika yanı” tek başına adres değildir. Cadde ve firma adı mesajda yer alır. Teslim öncesi alıcıya haber verilir.",
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
      "Benzer köy adlarında cadde veya mevki de yazılır. Ekip, çiçeği dikkatle ulaştırır.",
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
      "Kutu düzeni uzun yolda formunu korur. Buketler atölyede taze çiçekle hazırlanır. Görseller kendi atölye çekimlerimizdir.",
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
      "Yol, yüksek kesimde ilerler. Teslim öncesi alıcıya haber verilir.",
      "Buket atölyede taze hazırlanır ve ambalaj serin yolda da korunur. Çelenkte metin mesajdaki yazıyla işlenir, teslimden önce okunur. Fotoğraflar kendi çekimlerimizdir.",
      "Kart notu aile ziyaretlerinde ayrıca yazılır. Yayla evlerinde cadde yerine mevki adı yazılır.",
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
      "Çekirge’ye çiçek gönderimi. Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Çekirge, Osmangazi’ye bağlı, Bursa’nın eski semtlerindendir ve kaplıcalarıyla bilinir. Hüdavendigar Külliyesi buradadır; semt Hüdavendigar ve I. Murat adlarıyla da anılmıştır. Mevlid yazarı Süleyman Çelebi’nin mezarı, Lâmi Çelebi Mescidi ve Karagöz ile Hacivat’ın temsilî mezarı da bu mahallededir.",
      "Çekirge’ye çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Kaplıca ziyaretine Çekirge için [buket](/magaza/buketler) götürülür. Konakta duracak bir bitki [orkide](/magaza/orkideler) olur. Masaya [kutu çiçek](/magaza/kutular) bırakılır. Anma gününde [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Heykel’e çiçek gönderimi. Heykel, Bursa’nın tarihî merkezinde, Atatürk heykelinin bulunduğu Hükümet Meydanı ve çevresine verilen addır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Heykel, Bursa’nın tarihî merkezinde, Atatürk heykelinin bulunduğu Hükümet Meydanı ve çevresine verilen addır. Anıtı heykeltıraş Nijat Sirel yapmıştır; 29 Ekim 1931’de açılmıştır. Bronz heykel, mermer kaide üzerinde atlı bir kumandan olarak durur.",
      "Heykel çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Heykel içindeki bir iş yerine [kutu çiçek](/magaza/kutular) uygundur. Ziyarete [buket](/magaza/buketler), kalıcı bitkiye [orkide](/magaza/orkideler) eşlik eder. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Demirtaş’a çiçek gönderimi. Demirtaş, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Demirtaş, Osmangazi’ye bağlı bir mahalledir. Bir dönem ayrı belediyeydi; eski belediye binası bugün halk eğitim merkezi olarak kullanılır. TOFAŞ fabrikası bu semttedir.",
      "Demirtaş çevresindeki iş yerlerine, muayenehanelere ve hastanelere çiçek gönderiyoruz. Açılış, tebrik ve geçmiş olsun siparişleri atölyemizde taze hazırlanır ve şık bir ambalajla teslim edilir. Kart notunu siz belirlersiniz.",
      "Demirtaş adresinde açılış ve teşekkür [buket](/magaza/buketler) ile karşılanır. Ofiste kalacak bitki [orkide](/magaza/orkideler), derli armağan [kutu çiçek](/magaza/kutular) olur. Anma gününde [çelenk](/magaza/celenkler) bağlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Soğanlı’ya çiçek gönderimi. Soğanlı, Osmangazi’ye bağlı bir mahalledir.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Soğanlı, Osmangazi’ye bağlı bir mahalledir. Osmangazi Belediyesi’nin Soğanlı Millet Bahçesi burada kurulmuştur; meyve bahçeleri, çocuk oyun alanları ve spor sahaları bu bahçededir.",
      "Soğanlı’ya çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Soğanlı evine yıl dönümünde [buket](/magaza/buketler) götürülür. Yeni evde duracak bitki [orkide](/magaza/orkideler) olur. Kutlama masasına [kutu çiçek](/magaza/kutular) bırakılır. Anma ve cenaze için [çelenk](/magaza/celenkler) hazırlanır.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
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
      "Hamitler’e çiçek gönderimi. Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Hamitler, Osmangazi’ye bağlı bir mahalledir ve Bursa Organize Sanayi Bölgesi’nin karşısındadır. Şehrin en büyük mezarlığı olan Hamitler Mezarlığı bu mahallededir.",
      "Hamitler’e çiçek siparişlerinizi eve, iş yerine veya hastaneye teslim ediyoruz. Çiçekler atölyemizde taze olarak hazırlanır ve özenle paketlenir. Kart notunuz, belirlediğiniz cümleyle siparişe eklenir.",
      "Hamitler Mezarlığı için [çelenk](/magaza/celenkler) hazırlanır; kurdele metnini siz yazarsınız. Eve gidecek ziyarette [buket](/magaza/buketler) seçilir. Evde duracak bitki [orkide](/magaza/orkideler), küçük armağan [kutu çiçek](/magaza/kutular) olur.",
      "Siparişinizi WhatsApp düğmesinden kolayca iletebilirsiniz.",
    ],
  },
  {
    slug: "ihsaniye",
    name: "İhsaniye",
    shortName: "İhsaniye",
    path: "/bursa/ihsaniye",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "ozluce",
    name: "Özlüce",
    shortName: "Özlüce",
    path: "/bursa/ozluce",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbySlugs: ["19-mayis", "yuzuncuyil"],
    nearbyPrecise: true,
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
  {
    slug: "fsm",
    name: "FSM",
    shortName: "FSM",
    path: "/bursa/fsm",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "camlica",
    name: "Çamlıca",
    shortName: "Çamlıca",
    path: "/bursa/camlica",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "odunluk",
    name: "Odunluk",
    shortName: "Odunluk",
    path: "/bursa/odunluk",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "ertugrul",
    name: "Ertuğrul",
    shortName: "Ertuğrul",
    path: "/bursa/ertugrul",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbySlugs: ["29-ekim", "yuzuncuyil"],
    nearbyPrecise: true,
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
  {
    slug: "gorukle",
    name: "Görükle",
    shortName: "Görükle",
    path: "/bursa/gorukle",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbySlugs: ["irfaniye", "dumlupinar"],
    nearbyPrecise: true,
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
  {
    slug: "ataevler",
    name: "Ataevler",
    shortName: "Ataevler",
    path: "/bursa/ataevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "balat",
    name: "Balat",
    shortName: "Balat",
    path: "/bursa/balat",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "besevler",
    name: "Beşevler",
    shortName: "Beşevler",
    path: "/bursa/besevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    nearbyPrecise: false,
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
  {
    slug: "erikli",
    name: "Erikli",
    shortName: "Erikli",
    path: "/bursa/erikli",
    kind: "neighborhood",
    parentSlug: "yildirim",
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
  {
    slug: "millet",
    name: "Millet",
    shortName: "Millet",
    path: "/bursa/millet",
    kind: "neighborhood",
    parentSlug: "yildirim",
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
  {
    slug: "arabayatagi",
    name: "Arabayatağı",
    shortName: "Arabayatağı",
    path: "/bursa/arabayatagi",
    kind: "neighborhood",
    parentSlug: "yildirim",
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
  {
    slug: "esenevler",
    name: "Esenevler",
    shortName: "Esenevler",
    path: "/bursa/esenevler",
    kind: "neighborhood",
    parentSlug: "yildirim",
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
];

const legacyNearby: Record<string, string[]> = {
  ihsaniye: ["balat", "kultur", "besevler", "konak"],
  ataevler: ["besevler", "ozluce", "camlica", "balat"],
  besevler: ["ataevler", "balat", "gorukle", "ihsaniye"],
  camlica: ["ozluce", "ertugrul", "ataevler", "alaaddinbey"],
  balat: ["ihsaniye", "besevler", "ataevler", "kultur"],
  odunluk: ["ozluce", "ihsaniye", "fsm", "kultur"],
  ozluce: ["19-mayis", "yuzuncuyil"],
  ertugrul: ["29-ekim", "yuzuncuyil"],
  gorukle: ["irfaniye", "dumlupinar"],
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
