import { Link } from "react-router-dom";
import AnimatedHeroDemo from "@/components/ui/hero-3-demo";
import buketBanner from "@/assets/banners/buket-banner.webp";
import orkideBanner from "@/assets/banners/orkide-banner.webp";
import heroBackground from "@/assets/hero-bg.webp";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomeCategoryStrip } from "@/components/home/HomeCategoryStrip";
import { HomeCustomDesign } from "@/components/home/HomeCustomDesign";
import { HomeVitrine } from "@/components/home/HomeVitrine";
import { TrustHighlights } from "@/components/content/TrustHighlights";
import { SeoContent } from "@/components/home/SeoContent";
import { BursaServiceAreas } from "@/components/home/BursaServiceAreas";
import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex h-svh flex-col overflow-hidden bg-[#f7f3ee]">
        <Seo
          title={site.defaultTitle}
          description={site.defaultDescription}
          path="/"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          }}
        />
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <img
            src={heroBackground}
            alt="Bursa çiçekçi vitrini, sakura fon"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-white/20" aria-hidden="true" />
          <div className="relative z-10 flex h-full min-h-0 flex-col pt-14">
            <AnimatedHeroDemo />
          </div>
        </div>
        <section className="relative z-10 grid w-full shrink-0 grid-cols-1 gap-2 bg-[#f7f3ee] px-2 py-1.5 min-[700px]:grid-cols-2 md:gap-2.5 md:px-3 md:py-2">
          <Link to="/magaza/buketler" className="block min-w-0">
            <img
              src={buketBanner}
              alt="Mükemmel Buketler — WhatsApp sipariş"
              className="h-auto w-full rounded-2xl object-contain shadow-lg"
            />
          </Link>
          <Link to="/magaza/orkideler" className="block min-w-0">
            <img
              src={orkideBanner}
              alt="Renkli Orkideler — WhatsApp sipariş"
              className="h-auto w-full rounded-2xl object-contain shadow-lg"
            />
          </Link>
        </section>
      </main>
      <HomeCategoryStrip />
      <HomeVitrine />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <TrustHighlights />
      </div>
      <HomeCustomDesign />
      <BursaServiceAreas />
      <SeoContent />
      <SiteFooter />
    </>
  );
}
