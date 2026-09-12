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
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "bursa",
    name: "Bursa Çiçek Gönderimi",
    shortName: "Bursa Geneli",
    path: "/bursa",
    kind: "hub",
    description:
      "Bursa ili genelinde buket, orkide, kutu ve çelenk teslimi. Sipariş WhatsApp üzerinden alınır.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular", "celenkler"],
    body: [
      "Bursa’da çiçek siparişi çoğu zaman bir mahalleye, bir saate ve bir karta bağlıdır. İl genelinde teslim planlarız; stok veya teslim dakikası uydurmayız.",
      "Sipariş vitrindeki fotoğraftan başlar. Mahalle, bina tarifi ve kart notunu WhatsApp’ta yazmanız yeter.",
    ],
  },
  {
    slug: "osmangazi",
    name: "Osmangazi Çiçek Gönderimi",
    shortName: "Osmangazi",
    path: "/bursa/osmangazi",
    kind: "district",
    description: "Osmangazi ve kent merkezine buket, orkide ve çelenk teslimi.",
    relatedCategorySlugs: ["buketler", "celenkler"],
    body: [
      "Osmangazi, işyeri, hastane ve ev teslimlerinin iç içe geçtiği bir ilçedir. Trafik ve giriş katları WhatsApp tarifinde işe yarar: sokak adı, kapı tarifi, varsa güvenlik. Merkezde öğle saatleri yoğun olabilir; teslim penceresini birlikte sıkılaştırırız.",
      "Bu bölgede sık istenenler kırmızı gül buketi, masa çiçeği ve kapı önü çelenkleridir. Çelenk metnini net yazmanız, yanlış yazımı önler. Fotoğraftaki ürünle teslimin aynı dilde olmasına bakıyoruz; stok yoksa alternatifini söyler, uydurma fiyat yazmayız.",
      "Hastane ve kamu binalarında ziyaret saati ve güvenlik kaydı teslimi etkiler. Alıcı adı ve mümkünse ikinci bir telefon, kapıda beklemeyi kısaltır. Çiçeği sıcakta bekletmemek için dar bir saat aralığı konuşmayı tercih ederiz.",
      "Heykel, Setbaşı ve çevresindeki işyerlerinde öğle arası teslim sık sorulur. Kabul saati yoksa aranjmanı bekletmeyiz; ertesi güne kaydırmayı açıkça söyleriz. Bursa genel teslim notları için hub sayfasına da bakabilirsiniz.",
    ],
  },
  {
    slug: "nilufer",
    name: "Nilüfer Çiçek Gönderimi",
    shortName: "Nilüfer",
    path: "/bursa/nilufer",
    kind: "district",
    description: "Nilüfer’de Ataevler, Balat, Beşevler ve Görükle dahil çiçek teslimi.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    body: [
      "Nilüfer siteleri, üniversite çevresi ve yeni mahalleleriyle teslim tarifi genelde site adı ve blok üzerinden yürür. Güvenlik varsa ziyaretçi kaydı için alıcı telefonunu mesajda belirtmek işi kısaltır.",
      "Ataevler, Balat ve Beşevler için ayrı kısa sayfalarımız var; Görükle’ye de üniversite ve yurt teslimlerinde sık gidilir. Hediye kutusu ve orkide, ev ve ofis girişlerinde buketten daha uzun durduğu için burada sık seçilir.",
      "Site yönetimleri kuryeyi bazen lobide karşılar. Daire numarası, blok ve varsa interkom kodu yanlış kapıyı azaltır. Çelenk gibi büyük düzenler asansör ve kapı genişliği ister; ölçüyü baştan yazın.",
      "İşyeri teslimlerinde kat ve kabul saati olmadan bekletmek orkideye zarar verir. Nilüfer güzergâhı merkezden daha akıcı olabilir; yine de aynı gün sözü vermeyiz, mesajdaki saate bakarız.",
    ],
  },
  {
    slug: "yildirim",
    name: "Yıldırım Çiçek Gönderimi",
    shortName: "Yıldırım",
    path: "/bursa/yildirim",
    kind: "district",
    description: "Yıldırım ilçesine buket, kutu ve çelenk gönderimi.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Yıldırım’da teslimler mahalle sokakları ve apartman girişleriyle netleşir. Dar sokak veya tek yön varsa kurye notu mesajda işe yarar. Aile ziyareti ve özel gün buketleri bu ilçede sık sorulur.",
      "Çikolatalı gül kutusu ve mevsim buketi, teşekkür ve doğum günü için vitrindeki örneklerden seçilebilir. Çelenk taleplerinde ölçü ve metni baştan yazın; yanlış semte gitmemesi için mahalleyi de açık belirtin.",
      "Apartman adı ile sokak adını birlikte yazmak, özellikle benzer isimli mahallelerde karışıklığı keser. Kart notunu aynı mesajda gönderin; teslimden sonra metin düzeltilmez.",
      "Taziye ve kapı önü çelenkleri saate duyarlıdır. Erken yazılan sipariş, hazırlık için yer açar. Stok yoksa mevcut çelenk fotoğraflarından alternatif gösteririz.",
    ],
  },
  {
    slug: "mudanya",
    name: "Mudanya Çiçek Gönderimi",
    shortName: "Mudanya",
    path: "/bursa/mudanya",
    kind: "district",
    description: "Mudanya ve sahil bandına çiçek ve orkide teslimi.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Mudanya, Bursa merkezine göre yol süresi uzayan bir güzergâhtır. Aynı gün teslim, mesaj saati ve hava durumuna bağlıdır; sahil ve yazlık adreslerde bina tarifi özellikle net olsun.",
      "Misafir ağırlama ve ev hediyesi için orkide ve kır buketi sık bakılır. Taze çiçeği sıcakta bekletmemek için teslim saatini dar bir aralıkta konuşmayı tercih ederiz.",
      "Yazlık ve site girişlerinde güvenlik kaydı yaygındır. Alıcıyı önceden haberdar etmek, kapıda beklemeyi kısaltır. Rüzgârlı sahil tesliminde ambalajı son ana kadar koruruz.",
      "Feribot ve sahil trafiği öğleden sonra uzayabilir. Bu yüzden “garanti aynı gün” yazmayız; Mudanya siparişini mümkünse sabah konuşmak daha gerçekçidir.",
    ],
  },
  {
    slug: "gemlik",
    name: "Gemlik Çiçek Gönderimi",
    shortName: "Gemlik",
    path: "/bursa/gemlik",
    kind: "district",
    description: "Gemlik’e buket, orkide ve hediye kutusu gönderimi.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Gemlik teslimi il merkezi dışına çıktığı için saati baştan konuşmak gerekir. İşyeri ve ev adreslerinde kat ve kapı tarifi, ikinci bir telefon numarası işe yarar.",
      "Teşekkür ve kutlama için kutu düzenleri yolda bozulmaya daha az yatkındır; uzun saplı buketlerde ambalajı teslime kadar koruruz. Stok yoksa açıkça söyleriz.",
      "Sanayi ve ofis teslimlerinde öğle kabul saati sık çıkar. Aranjmanı kapıda bekletmektense pencereyi birlikte kaydırırız.",
      "Sahil bandı ve iç mahalleler aynı ilçe olsa da yol süresi değişir. Mahalle adını net yazın; “Gemlik merkez” tek başına yetmeyebilir.",
    ],
  },
  {
    slug: "gorukle",
    name: "Görükle Çiçek Gönderimi",
    shortName: "Görükle",
    path: "/bursa/gorukle",
    kind: "district",
    parentSlug: "nilufer",
    description: "Görükle ve üniversite çevresine çiçek ve orkide teslimi.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Görükle teslimlerinde yurt, kampüs yakını ve site girişleri sık çıkar. Alıcının müsait olduğu saat ve kapı tarifi olmadan bekletmek çiçeğe zarar verir; bu yüzden mesajda net bir pencere isteriz.",
      "Doğum günü buketi ve saksılı orkide burada sık bakılır. Kampüs içi teslim mümkün olmayabilir; kapı veya anlaşmalı nokta WhatsApp’ta konuşulur. Nilüfer genel bilgi için ilçe sayfasına da bakabilirsiniz.",
      "Yurt girişlerinde ziyaretçi kaydı ve kimlik istenebilir. Alıcıyı haberdar etmek, kuryenin bekletilmesini azaltır.",
      "Dönem başı ve mezuniyet günlerinde yoğunluk artar. Erken yazmak, hayır dememek için en dürüst yoldur. Fiyat veya stok uydurmayız.",
    ],
  },
  {
    slug: "inegol",
    name: "İnegöl Çiçek Gönderimi",
    shortName: "İnegöl",
    path: "/bursa/inegol",
    kind: "district",
    description: "İnegöl’e buket, kutu ve çelenk gönderimi.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "İnegöl, Bursa merkezine göre daha uzun bir güzergâhtır. Aynı gün sözü vermek yerine mesajdaki saate göre mümkün olup olmadığını söyleriz. İşyeri teslimlerinde kabul saati önemlidir.",
      "Mobilya ve sanayi çevresinde teşekkür buketi ile çelenk talepleri ayrı yürür. Çelenkte metin, renk ve duracağı yer (kapı, salon) baştan yazılmalıdır.",
      "Fabrika girişlerinde güvenlik ve teslim noktası ayrıca konuşulur. “İnegöl sanayi” tek başına adres sayılmaz; cadde veya kapı tarifi isteriz.",
      "Aile ve taziye teslimleri mahalle sokaklarında netleşir. Kart ve kurdele metnini karakter karakter kontrol edin; teslimden sonra düzeltilemez.",
    ],
  },
  {
    slug: "gursu",
    name: "Gürsu Çiçek Gönderimi",
    shortName: "Gürsu",
    path: "/bursa/gursu",
    kind: "district",
    description: "Gürsu’ya buket, kutu ve ev hediyesi çiçek teslimi.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Gürsu, Yıldırım ve Kestel’e komşu bir güzergâhtır. Teslim mahalle ve site adıyla netleşir; sadece “Gürsu” yazmak kapıyı bulmaya yetmeyebilir.",
      "Ev ziyareti ve doğum günü için mevsim buketi ile kutu düzenleri sık bakılır. Yolda saplı buketi koruruz; sıcakta bekletmemek için saat aralığını dar tutarız.",
      "Yeni konut sitelerinde blok ve daire numarası, güvenlik kaydı için alıcı telefonu işe yarar. Çelenk ölçüsünü kapı genişliğine göre konuşuruz.",
      "Merkeze göre yol kısa olsa da aynı gün, mesajın saatine bağlıdır. Stok yoksa alternatifini söyleriz; sahte etiket yok.",
    ],
  },
  {
    slug: "kestel",
    name: "Kestel Çiçek Gönderimi",
    shortName: "Kestel",
    path: "/bursa/kestel",
    kind: "district",
    description: "Kestel’e buket, orkide ve çelenk gönderimi.",
    relatedCategorySlugs: ["buketler", "orkideler", "celenkler"],
    body: [
      "Kestel teslimi hem yerleşim hem sanayi adresleri çıkarır. Fabrika kapısı ile ev sokağı aynı mesajda karışmasın diye adres tipini belirtin.",
      "Teşekkür buketi işyerlerinde, orkide ev ve ofis masasında sık seçilir. Fotoğraftaki saksı ve dal sayısı teslimde referanstır.",
      "Sanayi girişinde kabul saati ve güvenlik noktası yoksa bekletmeyiz; pencereyi kaydırırız. Taziye çelenklerinde metni erken yazın.",
      "Gürsu ve Yıldırım’a yakın mahallelerde semt adını açık yazın. Bursa ili içindeyiz; dakikayı garanti etmeyiz.",
    ],
  },
  {
    slug: "yenisehir",
    name: "Yenişehir Çiçek Gönderimi",
    shortName: "Yenişehir",
    path: "/bursa/yenisehir",
    kind: "district",
    description: "Yenişehir’e buket, kutu ve çelenk teslimi.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Yenişehir, Bursa merkezine göre yol süresi uzayan bir ilçedir. Aynı gün, sabah düşen mesajlarda konuşulur; akşam siparişi çoğu zaman ertesi güne kalır.",
      "Ev ve işyeri teslimlerinde mahalle ile cadde adını birlikte isteyoruz. Kutu düzenleri uzun yolda bukete göre daha az bozulur.",
      "Çelenk ve anma saatine yetişmesi için mümkün olan en erken yazışma gerekir. Ölçü ve kurdele metni baştan net olsun.",
      "Hava ve tarım takvimi yolu etkileyebilir. Teslimi dar pencerede tutar, stok veya fiyat uydurmayız.",
    ],
  },
  {
    slug: "iznik",
    name: "İznik Çiçek Gönderimi",
    shortName: "İznik",
    path: "/bursa/iznik",
    kind: "district",
    description: "İznik’e buket, orkide ve hediye çiçek gönderimi.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "İznik güzergâhı göl ve tarihî merkez nedeniyle yol süresini uzatır. Teslimi “hemen çıkar” diye yazmayız; mesajdaki güne göre planlarız.",
      "Misafir ve ev hediyesi için kır buketi ile saksılı orkide sık bakılır. Yazın sıcakta bekletmemek için alıcının kapıda olması önemlidir.",
      "Pansiyon, ev ve işyeri girişleri karışabilir. Konak adı veya cadde tarifi, yanlış kapıyı azaltır.",
      "Hafta sonu ziyaret yoğunluğu saati kaydırabilir. Erken yazın; çelenk gibi büyük işler için ayrıca ölçü konuşuruz.",
    ],
  },
  {
    slug: "karacabey",
    name: "Karacabey Çiçek Gönderimi",
    shortName: "Karacabey",
    path: "/bursa/karacabey",
    kind: "district",
    description: "Karacabey’e buket, kutu ve çelenk gönderimi.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Karacabey, il merkezine uzak bir güzergâhtır. Aynı gün teslim istisnadır; çoğu siparişi güne yayarak konuşuruz.",
      "İşyeri teşekkür buketi ve aile ziyareti kutuları vitrindeki örneklerden seçilir. Uzun yolda ambalajı teslime kadar koruruz.",
      "Köy ve belde adreslerinde tarifi daha ayrıntılı isteriz. “Karacabey çıkışı” tek başına yetmez.",
      "Taziye çelenklerinde metin ve saat baştan yazılmalıdır. Stok yoksa açıkça alternatif gösteririz.",
    ],
  },
  {
    slug: "mustafakemalpasa",
    name: "Mustafakemalpaşa Çiçek Gönderimi",
    shortName: "Mustafakemalpaşa",
    path: "/bursa/mustafakemalpasa",
    kind: "district",
    description: "Mustafakemalpaşa’ya buket, kutu ve çelenk teslimi.",
    relatedCategorySlugs: ["buketler", "kutular", "celenkler"],
    body: [
      "Mustafakemalpaşa teslimi merkezden uzun sürer. Mesajın düştüğü saate göre o gün veya ertesi gün deriz; garanti cümlesi kurmayız.",
      "Ev ve esnaf adreslerinde cadde ile kapı tarifi birlikte işe yarar. Kutu hediyeler yolda daha durağandır.",
      "Çelenk taleplerinde renk, ölçü ve kurdele ayrı yürür. Yanlış yazılan isim teslimde düzelmez.",
      "Yol ve hava durumunu gizlemeyiz. Alıcı telefonu, kapıda beklemeyi kısaltır.",
    ],
  },
  {
    slug: "orhangazi",
    name: "Orhangazi Çiçek Gönderimi",
    shortName: "Orhangazi",
    path: "/bursa/orhangazi",
    kind: "district",
    description: "Orhangazi’ye buket, orkide ve hediye kutusu teslimi.",
    relatedCategorySlugs: ["buketler", "orkideler", "kutular"],
    body: [
      "Orhangazi, Gemlik–İznik hattına yakın bir güzergâhtır. Yol süresi güne ve trafiğe göre değişir; saati baştan konuşuruz.",
      "Ev hediyesi orkide ve teşekkür buketi sık bakılır. Saksıyı devirmemek için alıcının karşılaması iyidir.",
      "Sanayi ve yerleşim karışık adreslerde “fabrika yanı” yetmez; kapı veya cadde tarifi isteriz.",
      "Aynı gün, erken mesajlarda mümkün olabilir. Akşam siparişini zorlamayız; çiçeği sıcakta bekletmeyiz.",
    ],
  },
  {
    slug: "ataevler",
    name: "Ataevler Çiçekçilik",
    shortName: "Ataevler",
    path: "/bursa/ataevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description: "Ataevler ve çevresine taze buket ve orkide teslimatı.",
    relatedCategorySlugs: ["buketler", "orkideler"],
    body: [
      "Ataevler sitelerinde teslim genelde blok ve daire numarasıyla yürür. Güvenlik varsa ziyaretçi kaydı için alıcıyı önceden haberdar etmek teslimi kısaltır.",
      "Nilüfer içindeki bu mahallede ev hediyesi orkide ve klasik gül buketi sık seçilir. Teslim saatini site giriş kurallarına göre daraltırız; stok veya fiyat uydurmayız.",
      "Asansör ve lobi tesliminde büyük çelenk ayrı konuşulur. Kart notunu aynı WhatsApp mesajında gönderin.",
    ],
  },
  {
    slug: "balat",
    name: "Balat Çiçekçilik",
    shortName: "Balat",
    path: "/bursa/balat",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description: "Balat bölgesine özenle hazırlanan çiçek aranjmanları.",
    relatedCategorySlugs: ["buketler", "kutular"],
    body: [
      "Balat’ta cadde ve site karışık adresler çıkar. Apartman adı ile sokak adını birlikte yazmak yanlış kapıyı azaltır. Nilüfer güzergâhındayız; saat aralığını yola göre konuşuruz.",
      "Teşekkür ve doğum günü için mevsim buketi ile kutu düzenleri vitrinde durur. Kart notunu aynı WhatsApp mesajında göndermeniz yeterli.",
      "İşyeri teslimlerinde kat bilgisi olmadan bekletmeyiz. Stok yoksa alternatifini söyleriz.",
    ],
  },
  {
    slug: "besevler",
    name: "Beşevler Çiçekçilik",
    shortName: "Beşevler",
    path: "/bursa/besevler",
    kind: "neighborhood",
    parentSlug: "nilufer",
    description: "Beşevler’e hediye kutusu, buket ve orkide gönderimi.",
    relatedCategorySlugs: ["kutular", "orkideler", "buketler"],
    body: [
      "Beşevler Nilüfer’de ev ve ofis teslimlerinin karıştığı bir mahalledir. İşyeri girişinde kabul saati, evde ise kapı tarifi mesajda durmalıdır.",
      "Hediye kutusu ve orkide, masada durması istenen düzenlerde sık bakılır. Büyük çelenk için ölçü ve metni ayrıca yazın; aksi halde yanlış ölçekte hazırlık olur.",
      "Nilüfer ilçe notları ve Görükle teslimi ayrı sayfalardadır. Kopya mahalle metniyle onlarca URL açmıyoruz.",
    ],
  },
];

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
  return serviceAreas.filter((area) => area.parentSlug === parentSlug);
}

export function getHubArea() {
  return serviceAreas.find((area) => area.kind === "hub");
}
