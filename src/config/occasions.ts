export type Occasion = {
  slug: string;
  name: string;
  path: string;
  description: string;
  categorySlugs: string[];
  body: string[];
};

export const occasions: Occasion[] = [
  {
    slug: "dogum-gunu",
    name: "Bursa Doğum Günü Çiçeği",
    path: "/ozel-gunler/dogum-gunu",
    description: "Bursa’da doğum günü için buket ve hediye kutusu. Sipariş WhatsApp’tan.",
    categorySlugs: ["buketler", "kutular"],
    body: [
      "Doğum gününde renk ve ölçü, alıcının evine veya ofisine göre değişir. Vitrindeki buket ve kutulardan birini seçip mahalle ile saati yazmanız yeterli. Pasta veya balon vaat etmiyoruz; çiçek düzenini fotoğraftaki gibi hazırlarız.",
      "Kart notunu kısa tutmak teslimde okunmayı kolaylaştırır. Aynı gün yetişip yetişmeyeceğini stok ve yola bakarak söyleriz.",
    ],
  },
  {
    slug: "tesekkur",
    name: "Teşekkür Buketi",
    path: "/ozel-gunler/tesekkur",
    description: "Bursa’da teşekkür ve ziyaret için sade buketler.",
    categorySlugs: ["buketler"],
    body: [
      "Teşekkür düzeninde abartısız bir buket çoğu zaman daha doğru durur. Mevsim çiçeği veya sade gül, işyeri masasına da ev holüne de uyar.",
      "Teslimi alıcının müsait olduğu saate denk getirmek için WhatsApp’ta kısa bir pencere konuşuruz. Fiyat listesi uydurmayız; ürünü seçip yazın.",
    ],
  },
  {
    slug: "hasta-ziyareti",
    name: "Hasta Ziyareti Çiçeği",
    path: "/ozel-gunler/hasta-ziyareti",
    description: "Hastane ve ev ziyareti için orkide ve hafif buketler, Bursa teslimi.",
    categorySlugs: ["orkideler", "buketler"],
    body: [
      "Hastane odasında ağır kokulu veya çok büyük aranjman rahatsız edebilir. Saksılı orkide veya küçük buket sık tercih edilir. Hastane giriş kuralları varsa teslim noktasını mesajda belirtin.",
      "Osmangazi ve Nilüfer’deki sağlık kuruluşlarına teslim, ziyaret saatine bağlıdır. Güvenlik kaydı için alıcı adı şarttır.",
    ],
  },
  {
    slug: "cenaze-celenk",
    name: "Cenaze Çelenk Siparişi",
    path: "/ozel-gunler/cenaze-celenk",
    description: "Bursa’da kapı önü ve anma için çelenk. Metin ve ölçü WhatsApp’tan.",
    categorySlugs: ["celenkler"],
    body: [
      "Çelenk siparişinde renk, ölçü ve kurdele metni baştan net olmalıdır. Yanlış yazılan isim teslimde düzeltilemez. Kapı önü, salon veya araç süslemesi ayrı ölçek ister.",
      "Anma ve taziye teslimleri saate duyarlıdır. Mümkün olan en erken mesaj, hazırlık için yer açar. Stok yoksa mevcut çelenk fotoğraflarından alternatif gösteririz.",
    ],
  },
  {
    slug: "ofis-orkide",
    name: "Ofis ve Saksı Orkide",
    path: "/ozel-gunler/ofis-orkide",
    description: "Bursa ofis ve ev için saksılı orkide teslimi.",
    categorySlugs: ["orkideler"],
    body: [
      "Ofis tesliminde kabul saati ve kat bilgisi olmadan bekletmek orkideye zarar verir. Fotoğraftaki saksı ve dal sayısıyla teslimi eşleştirmeye çalışırız; tek dal ile dolu saksıyı karıştırmayın.",
      "Işık ve sulama notunu kısa tutarız; bakım vaadi veya garanti uydurmayız. Nilüfer ve Osmangazi işyerlerinde bu ürün sık seçilir.",
    ],
  },
  {
    slug: "hediye-kutusu",
    name: "Hediye Gül Kutusu",
    path: "/ozel-gunler/hediye-kutusu",
    description: "Bursa’da çikolatalı ve gül kutuları. WhatsApp sipariş.",
    categorySlugs: ["kutular"],
    body: [
      "Kutu düzenleri yolda saplı bukete göre daha az bozulur. İçindeki çikolata markası fotoğrafta görünür; stok yoksa kutuyu değiştirmeden söylemeyiz, alternatif konuşuruz.",
      "Sevgililer günü ve doğum günü yoğunluğunda saati erken yazın. Teslim Bursa ili içinde, mahalle tarifine göredir.",
    ],
  },
];

export function getOccasionBySlug(slug: string) {
  return occasions.find((item) => item.slug === slug);
}
