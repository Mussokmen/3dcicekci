import { Link } from "react-router-dom";
import buketBanner from "@/assets/banners/buket-banner.webp";
import orkideBanner from "@/assets/banners/orkide-banner.webp";

const banners = [
  {
    src: buketBanner,
    href: "/magaza/buketler",
    alt: "Mükemmel Buketler — Bursa buket vitrini",
    title: "Mükemmel Buketler",
  },
  {
    src: orkideBanner,
    href: "/magaza/orkideler",
    alt: "Renkli Orkideler — Bursa orkide vitrini",
    title: "Renkli Orkideler",
  },
] as const;

export function PromoBanners() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {banners.map((banner) => (
          <Link key={banner.href} to={banner.href} className="group block overflow-hidden bg-stone-100">
            <img
              src={banner.src}
              alt={banner.alt}
              loading="lazy"
              className="h-auto w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
            />
            <span className="sr-only">{banner.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
