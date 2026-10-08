import { Link } from "react-router-dom";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { getDistrictAreas, getHubArea, getNeighborhoods } from "@/config/areas";
import { categories } from "@/config/categories";
import { buildWhatsAppUrl, generalWhatsAppMessage, site } from "@/config/site";

export function SiteFooter() {
  const hub = getHubArea();
  const districts = getDistrictAreas();
  const neighborhoods = getNeighborhoods();

  return (
    <footer className="border-t border-stone-200/80 bg-[#f3eee7]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 break-words sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <h2 className="text-[11px] tracking-[0.18em] text-stone-500 uppercase">Kurumsal</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li>
              <Link to="/hakkimizda" className="hover:text-stone-900">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/iletisim" className="hover:text-stone-900">
                İletişim
              </Link>
            </li>
            <li>
              <Link to="/rehber" className="hover:text-stone-900">
                Rehber
              </Link>
            </li>
            <li>
              <Link to="/ozel-tasarim" className="hover:text-stone-900">
                Özel tasarım
              </Link>
            </li>
            <li>
              <Link to="/ozel-gunler" className="hover:text-stone-900">
                Özel günler
              </Link>
            </li>
            <li>
              <Link to="/gizlilik-politikasi" className="hover:text-stone-900">
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link to="/cerez-politikasi" className="hover:text-stone-900">
                Çerez Politikası
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.18em] text-stone-500 uppercase">Mağaza</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/magaza/${category.slug}`} className="hover:text-stone-900">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.18em] text-stone-500 uppercase">Bursa Teslimatı</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            {hub ? (
              <li>
                <Link to={hub.path} className="hover:text-stone-900">
                  {hub.shortName}
                </Link>
              </li>
            ) : null}
            {districts.map((area) => (
              <li key={area.path}>
                <Link to={area.path} className="hover:text-stone-900">
                  {area.shortName}
                </Link>
              </li>
            ))}
            {neighborhoods.map((area) => (
              <li key={area.path}>
                <Link to={area.path} className="hover:text-stone-900">
                  {area.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] tracking-[0.18em] text-stone-500 uppercase">İletişim</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            <li>
              <a href={buildWhatsAppUrl(generalWhatsAppMessage())} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>{site.areaServed}</li>
            <li>{site.hoursDisplay}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200/80 px-4 py-6 text-center">
        <BrandLogo className="mx-auto h-12 max-w-[14rem] md:h-14 md:max-w-[16rem]" />
        <p className="mt-3 text-xs text-stone-500">{site.name}</p>
      </div>
    </footer>
  );
}
