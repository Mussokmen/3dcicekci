import { Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedHeroDemo from "@/components/ui/hero-3-demo";
import buketBanner from "@/assets/banners/buket-banner.jpg";
import orkideBanner from "@/assets/banners/orkide-banner.jpg";
import heroBackground from "@/assets/hero-bg.jpg";
import { Seo } from "@/components/Seo";
import { site } from "@/config/site";

export function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("home-lock");

    return () => {
      document.documentElement.classList.remove("home-lock");
    };
  }, []);

  return (
    <main className="relative flex h-svh flex-col overflow-hidden">
      <Seo title={site.defaultTitle} description={site.defaultDescription} path="/" />
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/30" aria-hidden="true" />

      <Link
        to="/magaza"
        className="absolute top-4 right-4 z-30 text-sm text-stone-800/80 transition-colors hover:text-stone-950"
      >
        Mağaza
      </Link>

      <div className="relative z-10 flex min-h-0 h-full flex-1 flex-col">
        <AnimatedHeroDemo />
      </div>

      <section className="relative z-10 grid shrink-0 grid-cols-2 gap-2 px-1 pb-1.5 md:gap-2.5 md:px-1.5 md:pb-2">
        <Link to="/magaza/buketler" className="block">
          <img
            src={buketBanner}
            alt="Mükemmel Buketler — WhatsApp sipariş"
            className="w-full rounded-2xl object-contain shadow-lg"
          />
        </Link>
        <Link to="/magaza/orkideler" className="block">
          <img
            src={orkideBanner}
            alt="Renkli Orkideler — WhatsApp sipariş"
            className="w-full rounded-2xl object-contain shadow-lg"
          />
        </Link>
      </section>
    </main>
  );
}
