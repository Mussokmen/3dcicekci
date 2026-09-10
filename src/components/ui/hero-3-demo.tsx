import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { getProductBySlug } from "@/config/products";
import { buildWhatsAppUrl } from "@/config/site";

const marqueeFiles = import.meta.glob("../../assets/marquee/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const MARQUEE_ITEMS = Object.entries(marqueeFiles).map(([path, src]) => {
  const filename = path.split("/").pop() ?? "";
  const slug = filename.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  const product = getProductBySlug(slug);

  return {
    src,
    href: `/urun/${slug}`,
    alt: product?.name ?? slug,
  };
});

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Küçük Bir Çiçek, Büyük Bir His"
      title={
        <>
          Küçük Bir Çiçek,
          <br />
          Büyük Bir His
        </>
      }
      description="Sevdiklerinize en güzel duyguları, özenle hazırlanmış taze çiçeklerle gönderin. Bursa'nın her köşesine sevginizi ulaştıralım."
      ctaText="Çiçekleri Keşfet"
      ctaHref="/magaza"
      secondaryCtaText="WhatsApp'tan Sipariş Ver"
      secondaryCtaHref={buildWhatsAppUrl("Merhaba, çiçek siparişi vermek istiyorum.")}
      images={MARQUEE_ITEMS}
    />
  );
};

export default AnimatedHeroDemo;
