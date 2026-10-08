import { Link } from "react-router-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Seo } from "@/components/Seo";

export function NotFoundPage() {
  return (
    <div className="min-h-svh bg-[#f7f3ee] pt-14 text-stone-900">
      <SiteHeader />
      <main id="icerik" tabIndex={-1} className="flex min-h-[70svh] flex-col items-center justify-center px-4 text-center outline-none">
        <Seo
          title="Sayfa bulunamadı"
          description="Aradığınız sayfa yok. Mağaza veya Bursa teslimat sayfalarına dönebilirsiniz."
          path="/404"
        />
        <h1 className="text-3xl tracking-tight text-stone-900">Sayfa bulunamadı</h1>
        <p className="mt-4 max-w-md text-sm text-stone-600">
          Link kırık olabilir. Ana sayfa, mağaza veya Bursa teslimat sayfasından devam edin.
        </p>
        <p className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="underline-offset-4 hover:underline">
            Ana sayfa
          </Link>
          <Link to="/magaza" className="underline-offset-4 hover:underline">
            Mağaza
          </Link>
          <Link to="/bursa" className="underline-offset-4 hover:underline">
            Bursa teslimatı
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
