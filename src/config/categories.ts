export type Category = {
  slug: string;
  name: string;
  description: string;
  showcaseProductSlug: string;
};

export const categories: Category[] = [
  {
    slug: "buketler",
    name: "Buketler",
    description: "Gül, zambak, papatya ve mevsim buketleri.",
    showcaseProductSlug: "klasik-kirmizi-gul-buketi",
  },
  {
    slug: "karisik-buketler",
    name: "Karışık Buketler",
    description:
      "Bursa karışık buket siparişlerinde gül, zambak, kasımpatı ve mevsim çiçekleri bir araya gelir. Karışık çiçek buketi atölyede taze hazırlanır.",
    showcaseProductSlug: "pastel-karisik-buket",
  },
  {
    slug: "orkideler",
    name: "Orkideler",
    description: "Saksılı orkide ve hediye orkide aranjmanları.",
    showcaseProductSlug: "beyaz-orhide-seramik-saksi",
  },
  {
    slug: "kutular",
    name: "Kutular",
    description: "Gül kutuları ve çikolatalı hediye kutuları.",
    showcaseProductSlug: "kare-kutu-gul-ferrero",
  },
  {
    slug: "celenkler",
    name: "Çelenkler",
    description: "Kapı önü ve özel gün çelenkleri.",
    showcaseProductSlug: "kirmizi-beyaz-halka-celenk",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
