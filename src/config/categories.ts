export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "buketler",
    name: "Buketler",
    description: "Gül, zambak, papatya ve mevsim buketleri.",
  },
  {
    slug: "orkideler",
    name: "Orkideler",
    description: "Saksılı orkide ve hediye orkide aranjmanları.",
  },
  {
    slug: "kutular",
    name: "Kutular",
    description: "Gül kutuları ve çikolatalı hediye kutuları.",
  },
  {
    slug: "celenkler",
    name: "Çelenkler",
    description: "Kapı önü ve özel gün çelenkleri.",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
