import { Link } from "react-router-dom";
import { getDistrictAreas, getHubArea } from "@/config/areas";

export function BursaServiceAreas() {
  const hub = getHubArea();
  const districts = getDistrictAreas();

  return (
    <section className="bg-[#f3eee7]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-3xl tracking-tight text-stone-900">Bursa’nın her yerine çiçek</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          Bursa’nın on yedi ilçesine aynı gün teslim planlarız. Görükle bir ilçe değil, Nilüfer
          mahallesidir. Sipariş WhatsApp ile alınır; mahalle ve kart notu mesajda yazılır.
        </p>
        <p className="mt-3 text-sm text-stone-600">
          <Link to="/rehber/bursa-cicek-gonderimi" className="underline-offset-4 hover:underline">
            Teslim nasıl işler?
          </Link>
          {" · "}
          <Link to="/ozel-gunler" className="underline-offset-4 hover:underline">
            Özel günler
          </Link>
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hub ? (
            <li>
              <Link to={hub.path} className="block border-t border-stone-300 pt-4 hover:text-stone-950">
                <h3 className="text-lg text-stone-900">{hub.shortName}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{hub.description}</p>
              </Link>
            </li>
          ) : null}
          {districts.map((area) => (
            <li key={area.path}>
              <Link to={area.path} className="block border-t border-stone-300 pt-4 hover:text-stone-950">
                <h3 className="text-lg text-stone-900">{area.shortName}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{area.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

