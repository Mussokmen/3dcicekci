import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.webp";
import { buildWhatsAppUrl, generalWhatsAppMessage } from "@/config/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden">
      <img
        src={heroBackground}
        alt=""
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#f7f3ee]/45" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
          Küçük Bir Çiçek,
          <br />
          Büyük Bir His
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 md:text-lg">
          Sevdiklerinize en güzel duyguları, özenle hazırlanmış taze çiçeklerle gönderin.
          Bursa’nın her köşesine sevginizi ulaştıralım.
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/magaza"
            className="inline-flex min-h-11 items-center justify-center bg-stone-900 px-6 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            Çiçekleri Keşfet
          </Link>
          <a
            href={buildWhatsAppUrl(generalWhatsAppMessage())}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-stone-400/80 bg-white/70 px-6 text-sm font-medium text-stone-900 backdrop-blur-sm transition-colors hover:bg-white"
          >
            WhatsApp’tan Sipariş Ver
          </a>
        </div>
      </div>
    </section>
  );
}
