import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { buildWhatsAppUrl, homeIntro } from "@/config/site";

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      title={
        <>
          Küçük Bir Çiçek,
          <br />
          Büyük Bir His
        </>
      }
      description={homeIntro}
      ctaText="Çiçekleri Keşfet"
      ctaHref="/magaza"
      secondaryCtaText="WhatsApp'tan Sipariş Ver"
      secondaryCtaHref={buildWhatsAppUrl("Merhaba, çiçek siparişi vermek istiyorum.")}
    />
  );
};

export default AnimatedHeroDemo;
