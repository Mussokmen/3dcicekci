import { defaultWhatsAppMessage } from "@/config/site";
import { categories } from "@/config/categories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  featured: boolean;
  whatsappMessage: string;
  price?: number;
};

type ProductRecord = {
  slug: string;
  name: string;
  category: string;
  description: string;
  file: string;
  gallery?: string[];
  featured?: boolean;
};

const catalogImages = import.meta.glob("../assets/urunler/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function catalogImage(filename: string) {
  const match = Object.entries(catalogImages).find(([path]) =>
    path.replaceAll("\\", "/").endsWith(`/${filename}`),
  );

  if (!match) {
    throw new Error(`Ürün görseli bulunamadı: ${filename}`);
  }

  return match[1];
}

const records: ProductRecord[] = [
  {
    slug: "klasik-kirmizi-gul-buketi",
    name: "Klasik Kırmızı Gül Buketi",
    category: "buketler",
    description: "Klasik kırmızı gül buketi: elde toplanmış kırmızı güller.",
    file: "klasik-kirmizi-gul-buketi.webp",
    featured: true,
  },
  {
    slug: "beyaz-gul-buketi",
    name: "Beyaz Gül Buketi",
    category: "buketler",
    description: "Beyaz güllerle hazırlanmış buket; kırmızı klasik olandan rengi ayrı.",
    file: "beyaz-gul-buketi.webp",
    featured: true,
  },
  {
    slug: "kirmizi-gul-kubbe-buketi",
    name: "Kırmızı Gül Kubbe Buketi",
    category: "buketler",
    description: "Kırmızı güller bu bukette kubbe gibi yuvarlak duruyor.",
    file: "kirmizi-gul-kubbe-buketi.webp",
    featured: true,
  },
  {
    slug: "kirmizi-gul-kubbe-el",
    name: "Kırmızı Gül Kubbe Buketi (El)",
    category: "buketler",
    description: "Kırmızı gül kubbesinin elde tutulan ayrı karesi.",
    file: "kirmizi-gul-kubbe-el.webp",
  },
  {
    slug: "senin-icin-kirmizi-gul-buketi",
    name: "Senin İçin Kırmızı Gül Buketi",
    category: "buketler",
    description: "Kırmızı güllerle kurulan hediye buketi; adında senin için geçiyor.",
    file: "senin-icin-kirmizi-gul-buketi.webp",
    featured: true,
  },
  {
    slug: "kirmizi-gul-cipsofilya-buketi",
    name: "Kırmızı Gül Cipsofilya Buketi",
    category: "buketler",
    description: "Kırmızı güllerin arasına cipsofilya serpilmiş bir buket.",
    file: "kirmizi-gul-cipsofilya-buketi.webp",
  },
  {
    slug: "kirmizi-gul-yesil-buketi",
    name: "Kırmızı Gül Yeşil Buketi",
    category: "buketler",
    description: "Kırmızı güller yeşil yaprakla tamamlanan bir buket.",
    file: "kirmizi-gul-yesil-buketi.webp",
  },
  {
    slug: "palmiyeli-kirmizi-gul-buketi",
    name: "Palmiyeli Kırmızı Gül Buketi",
    category: "buketler",
    description: "Kırmızı gül buketinde palmiye yaprağı da görünüyor.",
    file: "palmiyeli-kirmizi-gul-buketi.webp",
    featured: true,
  },
  {
    slug: "papatya-buketi",
    name: "Papatya Buketi",
    category: "buketler",
    description: "Papatya başlarından kurulu bir buket.",
    file: "papatya-buketi.webp",
    featured: true,
  },
  {
    slug: "pembe-alstroemeria-buketi",
    name: "Pembe Alstroemeria Buketi",
    category: "buketler",
    description: "Pembe alstroemeria dallarından oluşan bir buket.",
    file: "pembe-alstroemeria-buketi.webp",
    featured: true,
  },
  {
    slug: "pembe-zambak-lizyantus-buketi",
    name: "Pembe Zambak Lizyantus Buketi",
    category: "buketler",
    description: "Pembe zambak ile lizyantus aynı bukette duruyor.",
    file: "pembe-zambak-lizyantus-buketi.webp",
    featured: true,
  },
  {
    slug: "pembe-zambak-buketi",
    name: "Pembe Zambak Buketi",
    category: "buketler",
    description: "Pembe zambaklardan kurulan bir buket.",
    file: "pembe-zambak-buketi.webp",
  },
  {
    slug: "lila-zambak-buketi",
    name: "Lila Zambak Buketi",
    category: "buketler",
    description: "Zambaklar bu bukette lila tonda toplanmış.",
    file: "lila-zambak-buketi.webp",
    featured: true,
  },
  {
    slug: "pudra-zambak-buketi",
    name: "Pudra Zambak Buketi",
    category: "buketler",
    description: "Zambaklar pudra, açık toz pembe tonda.",
    file: "pudra-zambak-buketi.webp",
  },
  {
    slug: "beyaz-zambak-buketi",
    name: "Beyaz Zambak Buketi",
    category: "buketler",
    description: "Beyaz zambaklardan kurulan bir buket.",
    file: "beyaz-zambak-buketi.webp",
  },
  {
    slug: "beyaz-zambak-gerbera-buketi",
    name: "Beyaz Zambak Gerbera Buketi",
    category: "buketler",
    description: "Beyaz zambakların yanında gerbera da var.",
    file: "beyaz-zambak-gerbera-buketi.webp",
  },
  {
    slug: "pembe-karanfil-buketi",
    name: "Pembe Karanfil Buketi",
    category: "buketler",
    description: "Pembe karanfillerden derlenmiş bir buket.",
    file: "pembe-karanfil-buketi.webp",
    featured: true,
  },
  {
    slug: "renkli-kasimpati-buketi",
    name: "Renkli Kasımpatı Buketi",
    category: "buketler",
    description: "Kasımpatılar bu bukette birden fazla renkte.",
    file: "renkli-kasimpati-buketi.webp",
    featured: true,
  },
  {
    slug: "pembe-mor-kasimpati-buketi",
    name: "Pembe Mor Kasımpatı Buketi",
    category: "buketler",
    description: "Pembe ve mor kasımpatılar bir arada; karışık renkli kasımpatıdan ayrı bir düzen.",
    file: "pembe-mor-kasimpati-buketi.webp",
  },
  {
    slug: "pembe-kir-buketi",
    name: "Pembe Kır Buketi",
    category: "buketler",
    description: "Pembe kır çiçeklerinden dağınık duran bir buket.",
    file: "pembe-kir-buketi.webp",
  },
  {
    slug: "pembe-mor-papatya-buketi",
    name: "Pembe Mor Papatya Buketi",
    category: "buketler",
    description: "Pembe ve mor papatyalar bir arada; düz papatya buketinden rengi ayrı.",
    file: "pembe-mor-papatya-buketi.webp",
  },
  {
    slug: "beyaz-orhide-seramik-saksi",
    name: "Beyaz Orkide Seramik Saksı",
    category: "orkideler",
    description: "Beyaz orkide, seramik saksıda.",
    file: "beyaz-orhide-seramik-saksi.webp",
    featured: true,
  },
  {
    slug: "mavi-orhide-gold-kafes",
    name: "Mavi Orkide Gold Kafes",
    category: "orkideler",
    description: "Mavi orkide; saksının yanında gold kafes duruyor.",
    file: "mavi-orhide-gold-kafes.webp",
    featured: true,
  },
  {
    slug: "mavi-orhide-sehpada",
    name: "Mavi Orkide",
    category: "orkideler",
    description: "Mavi orkide, sehpa üzerinde çekilmiş bir saksı.",
    file: "mavi-orhide-sehpada.webp",
  },
  {
    slug: "benekli-orhide",
    name: "Benekli Orkide",
    category: "orkideler",
    description: "Yaprakları benekli bir orkide.",
    file: "benekli-orhide.webp",
  },
  {
    slug: "benekli-orhide-kose",
    name: "Benekli Orkide (Köşe)",
    category: "orkideler",
    description: "Benekli orkidenin köşeden çekilmiş saksı karesi.",
    file: "benekli-orhide-kose.webp",
  },
  {
    slug: "beyaz-orhide-gun-isigi",
    name: "Beyaz Orkide",
    category: "orkideler",
    description: "Beyaz orkide, gün ışığında saksılı duruyor.",
    file: "beyaz-orhide-gun-isigi.webp",
  },
  {
    slug: "beyaz-orhide-salkim",
    name: "Beyaz Salkım Orkide",
    category: "orkideler",
    description: "Beyaz orkide salkım formunda.",
    file: "beyaz-orhide-salkim.webp",
  },
  {
    slug: "beyaz-orhide-tul-ambalaj",
    name: "Beyaz Orkide Tül Ambalaj",
    category: "orkideler",
    description: "Beyaz orkide tül ile sarılı.",
    file: "beyaz-orhide-tul-ambalaj.webp",
  },
  {
    slug: "dogum-gunu-beyaz-orhide",
    name: "Doğum Günü Beyaz Orkide",
    category: "orkideler",
    description: "Doğum günü için hazırlanmış beyaz orkide.",
    file: "dogum-gunu-beyaz-orhide.webp",
  },
  {
    slug: "dogum-gunu-orhide-masa",
    name: "Doğum Günü Orkide",
    category: "orkideler",
    description: "Doğum günü orkidesi, masa düzeninde çekilmiş.",
    file: "dogum-gunu-orhide-masa.webp",
  },
  {
    slug: "kapi-onunde-beyaz-orhide",
    name: "Beyaz Orkide Teslim",
    category: "orkideler",
    description: "Beyaz orkidenin teslim karesi; kapı önünde duruyor.",
    file: "kapi-onunde-beyaz-orhide.webp",
  },
  {
    slug: "krem-saksi-beyaz-orhide",
    name: "Krem Saksı Beyaz Orkide",
    category: "orkideler",
    description: "Beyaz orkide krem saksıda.",
    file: "krem-saksi-beyaz-orhide.webp",
  },
  {
    slug: "krem-saksi-orhide-tebrik",
    name: "Krem Saksı Orkide",
    category: "orkideler",
    description: "Krem saksıda orkide; tebrik düzeni olarak duruyor.",
    file: "krem-saksi-orhide-tebrik.webp",
  },
  {
    slug: "mor-orhide-hediye-paketi",
    name: "Mor Orkide Hediye Paketi",
    category: "orkideler",
    description: "Mor orkide, hediye paketiyle.",
    file: "mor-orhide-hediye-paketi.webp",
  },
  {
    slug: "mor-orhide-kartli",
    name: "Mor Orkide",
    category: "orkideler",
    description: "Mor orkide; yanında kart var.",
    file: "mor-orhide-kartli.webp",
  },
  {
    slug: "salkim-orhide-pencere",
    name: "Salkım Orkide",
    category: "orkideler",
    description: "Salkım orkide, pencere önünde.",
    file: "salkim-orhide-pencere.webp",
  },
  {
    slug: "baris-cicegi",
    name: "Barış Çiçeği",
    category: "orkideler",
    description: "Barış çiçeği, saksılı yeşil yaprak; vitrinde orkidelerle duruyor.",
    file: "baris-cicegi.webp",
  },
  {
    slug: "kare-kutu-gul-ferrero",
    name: "Kare Kutu Gül Ferrero",
    category: "kutular",
    description: "Kare kutuda gül ve Ferrero.",
    file: "kare-kutu-gul-ferrero.webp",
    featured: true,
  },
  {
    slug: "kirmizi-kalp-gul-ferrero",
    name: "Kırmızı Kalp Gül Ferrero",
    category: "kutular",
    description: "Kırmızı kalp kutuda gül ve Ferrero.",
    file: "kirmizi-kalp-gul-ferrero.webp",
  },
  {
    slug: "kalp-kutu-gul-ferrero-ayicik",
    name: "Kalp Kutu Gül Ferrero Ayıcık",
    category: "kutular",
    description: "Kalp kutuda gül, Ferrero ve ayıcık bir arada.",
    file: "kalp-kutu-gul-ferrero-ayicik.webp",
  },
  {
    slug: "kalp-kutu-gul-kinder",
    name: "Kalp Kutu Gül Kinder",
    category: "kutular",
    description: "Kalp kutuda gül ve Kinder.",
    file: "kalp-kutu-gul-kinder.webp",
  },
  {
    slug: "kalp-kutu-gul-nutella",
    name: "Kalp Kutu Gül Nutella",
    category: "kutular",
    description: "Kalp kutuda gül ve Nutella.",
    file: "kalp-kutu-gul-nutella.webp",
  },
  {
    slug: "kirmizi-kutu-gul-milka",
    name: "Kırmızı Kutu Gül Milka",
    category: "kutular",
    description: "Kırmızı kutuda gül ve Milka.",
    file: "kirmizi-kutu-gul-milka.webp",
  },
  {
    slug: "siyah-kutu-gul-bueno",
    name: "Siyah Kutu Gül Bueno",
    category: "kutular",
    description: "Siyah kutuda gül ve Bueno.",
    file: "siyah-kutu-gul-bueno.webp",
  },
  {
    slug: "yuvarlak-kutu-gul-kinder",
    name: "Yuvarlak Kutu Gül Kinder",
    category: "kutular",
    description: "Yuvarlak kutuda gül ve Kinder; kalp Kinder kutusundan formu ayrı.",
    file: "yuvarlak-kutu-gul-kinder.webp",
  },
  {
    slug: "kirmizi-beyaz-ayaga-celenk",
    name: "Kırmızı Beyaz Ayağa Çelenk",
    category: "celenkler",
    description: "Kırmızı ve beyaz çiçekli, ayakta duran çelenk.",
    file: "kirmizi-beyaz-ayaga-celenk.webp",
  },
  {
    slug: "kirmizi-beyaz-ciftli-celenk",
    name: "Kırmızı Beyaz Çiftli Çelenk",
    category: "celenkler",
    description: "İki parça halinde kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-ciftli-celenk.webp",
  },
  {
    slug: "kirmizi-beyaz-halka-celenk",
    name: "Kırmızı Beyaz Halka Çelenk",
    category: "celenkler",
    description: "Halka biçiminde kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-halka-celenk.webp",
  },
  {
    slug: "kirmizi-beyaz-oval-celenk",
    name: "Kırmızı Beyaz Oval Çelenk",
    category: "celenkler",
    description: "Oval kırmızı-beyaz çelenk; halka olandan formu ayrı.",
    file: "kirmizi-beyaz-oval-celenk.webp",
  },
  {
    slug: "pembe-mor-ciftli-celenk",
    name: "Pembe Mor Çiftli Çelenk",
    category: "celenkler",
    description: "Çiftli çelenk pembe ve mor; kırmızı-beyaz çiftten rengi ayrı.",
    file: "pembe-mor-ciftli-celenk.webp",
  },
];

export const products: Product[] = records.map((record) => {
  const image = catalogImage(record.file);
  const gallery = (record.gallery ?? [record.file]).map(catalogImage);

  return {
    id: record.slug,
    slug: record.slug,
    name: record.name,
    category: record.category,
    description: record.description,
    image,
    gallery,
    featured: Boolean(record.featured),
    whatsappMessage: defaultWhatsAppMessage(record.name),
  };
});

const categorySlugs = new Set(categories.map((category) => category.slug));

for (const product of products) {
  if (!categorySlugs.has(product.category)) {
    throw new Error(`Bilinmeyen kategori: ${product.category} (${product.slug})`);
  }
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getFeaturedProducts() {
  return getProductsBySlugs(featuredProductSlugs);
}

export function getBestsellerProducts() {
  return getProductsBySlugs(bestsellerProductSlugs);
}

export function getProductsBySlugs(slugs: readonly string[]) {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}

export function getCategoryName(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug)?.name ?? categorySlug;
}

/** Ana sayfa ve mağaza vitrini — öne çıkanlar slug listesiyle seçilir. */
export const featuredProductSlugs = [
  "klasik-kirmizi-gul-buketi",
  "beyaz-gul-buketi",
  "kirmizi-gul-kubbe-buketi",
  "senin-icin-kirmizi-gul-buketi",
  "papatya-buketi",
  "pembe-alstroemeria-buketi",
  "beyaz-orhide-seramik-saksi",
  "kare-kutu-gul-ferrero",
] as const;

/** Çok satanlar — popülerlik verisi olmadığı için manuel seçim. */
export const bestsellerProductSlugs = [
  "palmiyeli-kirmizi-gul-buketi",
  "pembe-zambak-lizyantus-buketi",
  "lila-zambak-buketi",
  "pembe-karanfil-buketi",
  "mavi-orhide-gold-kafes",
  "kalp-kutu-gul-ferrero-ayicik",
  "kirmizi-beyaz-halka-celenk",
  "renkli-kasimpati-buketi",
] as const;
