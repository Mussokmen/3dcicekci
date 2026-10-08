import { Link } from "react-router-dom";
import AnimatedHeroDemo from "@/components/ui/hero-3-demo";
import buketBanner from "@/assets/banners/buket-banner.webp";
import orkideBanner from "@/assets/banners/orkide-banner.webp";
import heroBackground from "@/assets/hero-bg.webp";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomeCategoryStrip } from "@/components/home/HomeCategoryStrip";
import { HomeLeadProducts } from "@/components/home/HomeLeadProducts";
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
      <main id="icerik" tabIndex={-1} className="relative bg-[#f7f3ee] outline-none">
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
        <div className="relative">
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
          <div className="relative z-10 pt-14">
            <AnimatedHeroDemo />
          </div>
        </div>
        <HomeLeadProducts />
        <section className="relative z-10 grid w-full shrink-0 grid-cols-1 gap-2 bg-[#f7f3ee] px-2 py-1.5 min-[700px]:grid-cols-2 md:gap-2.5 md:px-3 md:py-2">
          <Link to="/magaza/buketler" className="relative block min-w-0">
            <img
              src={buketBanner}
              alt="Mükemmel Buketler — Buketler kategorisi"
              className="h-auto w-full rounded-2xl object-contain shadow-lg"
            />
            <span className="absolute top-[58%] left-[5%] flex h-[12%] w-[28%] items-center justify-center rounded-full bg-[#f6f1e8] text-[clamp(0.7rem,1.6vw,1rem)] font-semibold text-stone-900 shadow-sm">
              Buketler
            </span>
          </Link>
          <Link to="/magaza/orkideler" className="relative block min-w-0">
            <img
              src={orkideBanner}
              alt="Renkli Orkideler — Orkideler kategorisi"
              className="h-auto w-full rounded-2xl object-contain shadow-lg"
            />
            <span className="absolute top-[58%] left-[5%] flex h-[12%] w-[28%] items-center justify-center rounded-full bg-[#f6f1e8] text-[clamp(0.7rem,1.6vw,1rem)] font-semibold text-stone-900 shadow-sm">
              Orkideler
            </span>
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
