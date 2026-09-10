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

const catalogImages = import.meta.glob("../assets/urunler/*.{jpeg,jpg,png,webp}", {
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
    description: "Kırmızı güllerden oluşan klasik el buketi.",
    file: "klasik-kirmizi-gul-buketi.jpeg",
    featured: true,
  },
  {
    slug: "beyaz-gul-buketi",
    name: "Beyaz Gül Buketi",
    category: "buketler",
    description: "Beyaz güllerle hazırlanmış buket.",
    file: "beyaz-gul-buketi.jpeg",
    featured: true,
  },
  {
    slug: "kirmizi-gul-kubbe-buketi",
    name: "Kırmızı Gül Kubbe Buketi",
    category: "buketler",
    description: "Kubbe formunda kırmızı gül buketi.",
    file: "kirmizi-gul-kubbe-buketi.jpeg",
    featured: true,
  },
  {
    slug: "kirmizi-gul-kubbe-el",
    name: "Kırmızı Gül Kubbe Buketi (El)",
    category: "buketler",
    description: "Elde sunumlu kırmızı gül kubbe buketi.",
    file: "kirmizi-gul-kubbe-el.jpeg",
  },
  {
    slug: "senin-icin-kirmizi-gul-buketi",
    name: "Senin İçin Kırmızı Gül Buketi",
    category: "buketler",
    description: "Kırmızı güllerle hazırlanmış hediye buketi.",
    file: "senin-icin-kirmizi-gul-buketi.jpeg",
    featured: true,
  },
  {
    slug: "kirmizi-gul-cipsofilya-buketi",
    name: "Kırmızı Gül Cipsofilya Buketi",
    category: "buketler",
    description: "Kırmızı gül ve cipsofilya buketi.",
    file: "kirmizi-gul-cipsofilya-buketi.jpeg",
  },
  {
    slug: "kirmizi-gul-yesil-buketi",
    name: "Kırmızı Gül Yeşil Buketi",
    category: "buketler",
    description: "Yeşil yeşilliklerle tamamlanmış kırmızı gül buketi.",
    file: "kirmizi-gul-yesil-buketi.jpeg",
  },
  {
    slug: "palmiyeli-kirmizi-gul-buketi",
    name: "Palmiyeli Kırmızı Gül Buketi",
    category: "buketler",
    description: "Palmiye detaylı kırmızı gül buketi.",
    file: "palmiyeli-kirmizi-gul-buketi.jpeg",
    featured: true,
  },
  {
    slug: "papatya-buketi",
    name: "Papatya Buketi",
    category: "buketler",
    description: "Papatyalardan oluşan buket.",
    file: "papatya-buketi.jpeg",
    featured: true,
  },
  {
    slug: "pembe-alstroemeria-buketi",
    name: "Pembe Alstroemeria Buketi",
    category: "buketler",
    description: "Pembe alstroemeria buketi.",
    file: "pembe-alstroemeria-buketi.jpeg",
    featured: true,
  },
  {
    slug: "pembe-zambak-lizyantus-buketi",
    name: "Pembe Zambak Lizyantus Buketi",
    category: "buketler",
    description: "Pembe zambak ve lizyantus buketi.",
    file: "pembe-zambak-lizyantus-buketi.jpeg",
    featured: true,
  },
  {
    slug: "pembe-zambak-buketi",
    name: "Pembe Zambak Buketi",
    category: "buketler",
    description: "Pembe zambak buketi.",
    file: "pembe-zambak-buketi.jpeg",
  },
  {
    slug: "lila-zambak-buketi",
    name: "Lila Zambak Buketi",
    category: "buketler",
    description: "Lila zambak buketi.",
    file: "lila-zambak-buketi.jpeg",
    featured: true,
  },
  {
    slug: "pudra-zambak-buketi",
    name: "Pudra Zambak Buketi",
    category: "buketler",
    description: "Pudra tonlarında zambak buketi.",
    file: "pudra-zambak-buketi.jpeg",
  },
  {
    slug: "beyaz-zambak-buketi",
    name: "Beyaz Zambak Buketi",
    category: "buketler",
    description: "Beyaz zambak buketi.",
    file: "beyaz-zambak-buketi.jpeg",
  },
  {
    slug: "beyaz-zambak-gerbera-buketi",
    name: "Beyaz Zambak Gerbera Buketi",
    category: "buketler",
    description: "Beyaz zambak ve gerbera buketi.",
    file: "beyaz-zambak-gerbera-buketi.jpeg",
  },
  {
    slug: "pembe-karanfil-buketi",
    name: "Pembe Karanfil Buketi",
    category: "buketler",
    description: "Pembe karanfil buketi.",
    file: "pembe-karanfil-buketi.jpeg",
    featured: true,
  },
  {
    slug: "renkli-kasimpati-buketi",
    name: "Renkli Kasımpatı Buketi",
    category: "buketler",
    description: "Karışık renkli kasımpatı buketi.",
    file: "renkli-kasimpati-buketi.jpeg",
    featured: true,
  },
  {
    slug: "pembe-mor-kasimpati-buketi",
    name: "Pembe Mor Kasımpatı Buketi",
    category: "buketler",
    description: "Pembe ve mor kasımpatı buketi.",
    file: "pembe-mor-kasimpati-buketi.jpeg",
  },
  {
    slug: "pembe-kir-buketi",
    name: "Pembe Kır Buketi",
    category: "buketler",
    description: "Pembe kır çiçeklerinden buket.",
    file: "pembe-kir-buketi.jpeg",
  },
  {
    slug: "pembe-mor-papatya-buketi",
    name: "Pembe Mor Papatya Buketi",
    category: "buketler",
    description: "Pembe ve mor papatya buketi.",
    file: "pembe-mor-papatya-buketi.jpeg",
  },
  {
    slug: "beyaz-orhide-seramik-saksi",
    name: "Beyaz Orkide Seramik Saksı",
    category: "orkideler",
    description: "Seramik saksıda beyaz orkide.",
    file: "beyaz-orhide-seramik-saksi.jpeg",
    featured: true,
  },
  {
    slug: "mavi-orhide-gold-kafes",
    name: "Mavi Orkide Gold Kafes",
    category: "orkideler",
    description: "Gold kafes detaylı mavi orkide.",
    file: "mavi-orhide-gold-kafes.jpeg",
    featured: true,
  },
  {
    slug: "mavi-orhide-sehpada",
    name: "Mavi Orkide",
    category: "orkideler",
    description: "Saksılı mavi orkide.",
    file: "mavi-orhide-sehpada.jpeg",
  },
  {
    slug: "benekli-orhide",
    name: "Benekli Orkide",
    category: "orkideler",
    description: "Benekli orkide.",
    file: "benekli-orhide.jpeg",
  },
  {
    slug: "benekli-orhide-kose",
    name: "Benekli Orkide (Köşe)",
    category: "orkideler",
    description: "Benekli orkide saksı aranjmanı.",
    file: "benekli-orhide-kose.jpeg",
  },
  {
    slug: "beyaz-orhide-gun-isigi",
    name: "Beyaz Orkide",
    category: "orkideler",
    description: "Saksılı beyaz orkide.",
    file: "beyaz-orhide-gun-isigi.jpeg",
  },
  {
    slug: "beyaz-orhide-salkim",
    name: "Beyaz Salkım Orkide",
    category: "orkideler",
    description: "Salkım formunda beyaz orkide.",
    file: "beyaz-orhide-salkim.jpeg",
  },
  {
    slug: "beyaz-orhide-tul-ambalaj",
    name: "Beyaz Orkide Tül Ambalaj",
    category: "orkideler",
    description: "Tül ambalajlı beyaz orkide.",
    file: "beyaz-orhide-tul-ambalaj.jpeg",
  },
  {
    slug: "dogum-gunu-beyaz-orhide",
    name: "Doğum Günü Beyaz Orkide",
    category: "orkideler",
    description: "Doğum günü için beyaz orkide.",
    file: "dogum-gunu-beyaz-orhide.jpeg",
  },
  {
    slug: "dogum-gunu-orhide-masa",
    name: "Doğum Günü Orkide",
    category: "orkideler",
    description: "Masa düzeninde doğum günü orkidesi.",
    file: "dogum-gunu-orhide-masa.jpeg",
  },
  {
    slug: "kapi-onunde-beyaz-orhide",
    name: "Beyaz Orkide Teslim",
    category: "orkideler",
    description: "Teslim görünümlü beyaz orkide.",
    file: "kapi-onunde-beyaz-orhide.jpeg",
  },
  {
    slug: "krem-saksi-beyaz-orhide",
    name: "Krem Saksı Beyaz Orkide",
    category: "orkideler",
    description: "Krem saksıda beyaz orkide.",
    file: "krem-saksi-beyaz-orhide.jpeg",
  },
  {
    slug: "krem-saksi-orhide-tebrik",
    name: "Krem Saksı Orkide",
    category: "orkideler",
    description: "Krem saksıda tebrik orkidesi.",
    file: "krem-saksi-orhide-tebrik.jpeg",
  },
  {
    slug: "mor-orhide-hediye-paketi",
    name: "Mor Orkide Hediye Paketi",
    category: "orkideler",
    description: "Hediye paketinde mor orkide.",
    file: "mor-orhide-hediye-paketi.jpeg",
  },
  {
    slug: "mor-orhide-kartli",
    name: "Mor Orkide",
    category: "orkideler",
    description: "Kartlı mor orkide.",
    file: "mor-orhide-kartli.jpeg",
  },
  {
    slug: "salkim-orhide-pencere",
    name: "Salkım Orkide",
    category: "orkideler",
    description: "Salkım orkide.",
    file: "salkim-orhide-pencere.jpeg",
  },
  {
    slug: "baris-cicegi",
    name: "Barış Çiçeği",
    category: "orkideler",
    description: "Saksılı barış çiçeği.",
    file: "baris-cicegi.jpeg",
  },
  {
    slug: "kare-kutu-gul-ferrero",
    name: "Kare Kutu Gül Ferrero",
    category: "kutular",
    description: "Kare kutuda gül ve Ferrero.",
    file: "kare-kutu-gul-ferrero.jpeg",
    featured: true,
  },
  {
    slug: "kirmizi-kalp-gul-ferrero",
    name: "Kırmızı Kalp Gül Ferrero",
    category: "kutular",
    description: "Kalp kutuda kırmızı gül ve Ferrero.",
    file: "kirmizi-kalp-gul-ferrero.jpeg",
  },
  {
    slug: "kalp-kutu-gul-ferrero-ayicik",
    name: "Kalp Kutu Gül Ferrero Ayıcık",
    category: "kutular",
    description: "Kalp kutuda gül, Ferrero ve ayıcık.",
    file: "kalp-kutu-gul-ferrero-ayicik.jpeg",
  },
  {
    slug: "kalp-kutu-gul-kinder",
    name: "Kalp Kutu Gül Kinder",
    category: "kutular",
    description: "Kalp kutuda gül ve Kinder.",
    file: "kalp-kutu-gul-kinder.jpeg",
  },
  {
    slug: "kalp-kutu-gul-nutella",
    name: "Kalp Kutu Gül Nutella",
    category: "kutular",
    description: "Kalp kutuda gül ve Nutella.",
    file: "kalp-kutu-gul-nutella.jpeg",
  },
  {
    slug: "kirmizi-kutu-gul-milka",
    name: "Kırmızı Kutu Gül Milka",
    category: "kutular",
    description: "Kırmızı kutuda gül ve Milka.",
    file: "kirmizi-kutu-gul-milka.jpeg",
  },
  {
    slug: "siyah-kutu-gul-bueno",
    name: "Siyah Kutu Gül Bueno",
    category: "kutular",
    description: "Siyah kutuda gül ve Bueno.",
    file: "siyah-kutu-gul-bueno.jpeg",
  },
  {
    slug: "yuvarlak-kutu-gul-kinder",
    name: "Yuvarlak Kutu Gül Kinder",
    category: "kutular",
    description: "Yuvarlak kutuda gül ve Kinder.",
    file: "yuvarlak-kutu-gul-kinder.jpeg",
  },
  {
    slug: "kirmizi-beyaz-ayaga-celenk",
    name: "Kırmızı Beyaz Ayağa Çelenk",
    category: "celenkler",
    description: "Ayağa kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-ayaga-celenk.jpeg",
  },
  {
    slug: "kirmizi-beyaz-ciftli-celenk",
    name: "Kırmızı Beyaz Çiftli Çelenk",
    category: "celenkler",
    description: "Çiftli kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-ciftli-celenk.jpeg",
  },
  {
    slug: "kirmizi-beyaz-halka-celenk",
    name: "Kırmızı Beyaz Halka Çelenk",
    category: "celenkler",
    description: "Halka formunda kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-halka-celenk.jpeg",
  },
  {
    slug: "kirmizi-beyaz-oval-celenk",
    name: "Kırmızı Beyaz Oval Çelenk",
    category: "celenkler",
    description: "Oval kırmızı-beyaz çelenk.",
    file: "kirmizi-beyaz-oval-celenk.jpeg",
  },
  {
    slug: "pembe-mor-ciftli-celenk",
    name: "Pembe Mor Çiftli Çelenk",
    category: "celenkler",
    description: "Çiftli pembe-mor çelenk.",
    file: "pembe-mor-ciftli-celenk.jpeg",
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
  return products.filter((product) => product.featured);
}

export function getCategoryName(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug)?.name ?? categorySlug;
}
