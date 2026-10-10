import { getDistrictAreas, getNeighborhoodsByParent } from "./areas.ts";

export const site = {
  name: "Bursa'nın Çiçekçisi",
  /** Search Console, sitemap ve kanonik adres bu değeri kullanır. */
  url: "https://bursacicekcisi.com",
  defaultTitle: "Bursa'nın Çiçekçisi | Bursa Çiçek Siparişi",
  defaultDescription:
    "Bursa çiçekçi vitrini. Buket, orkide, kutu ve çelenk atölyede taze hazırlanır; Bursa içinde aynı gün teslim edilir.",
  ogImagePath: "/og-cover.jpg",
  locale: "tr_TR",
  region: "Bursa",
  areaServed: "Bursa ili",
  hoursDisplay: "7/24 açık · Bursa içinde aynı gün teslim",
  whatsappNumber: "905417334396",
  phoneDisplay: "0541 733 43 96",
  phoneTel: "+905417334396",
  /**
   * PLACEHOLDER — cadde adresi netleşince doldurulacak.
   */
  streetAddress: "",
  /**
   * PLACEHOLDER — Google İşletme profil URL’si.
   */
  googleBusinessUrl: "",
  /**
   * PLACEHOLDER — Search Console HTML etiket kodu (yalnızca token).
   */
  searchConsoleVerification: "",
  /**
   * PLACEHOLDER — Google Analytics Measurement ID, örn. G-XXXXXXXX.
   */
  analyticsMeasurementId: "",
} as const;

export function hasPublicPhone() {
  return !site.whatsappNumber.includes("XXXX");
}

export function hasCanonicalDomain() {
  return !site.url.includes("example.com");
}

export function hasGoogleBusiness() {
  return site.googleBusinessUrl.startsWith("https://");
}

export const homeHeading = "Küçük Bir Çiçek, Büyük Bir His";

export const homeIntro =
  "Sevdiklerinize en güzel duyguları, özenle hazırlanmış taze çiçeklerle gönderin. Bursa’nın her köşesine sevginizi ulaştıralım.";

export const shopIntro =
  "Buket, karışık buket, orkide, kutu ve çelenk aranjmanları. Siparişler WhatsApp üzerinden alınır.";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

/** GitHub Pages iç sayfaları sondaki / ile sunar; ana sayfa / olarak kalır. */
export function pageUrl(path: string) {
  const origin = site.url.replace(/\/$/, "");
  if (path === "/" || path === "") return `${origin}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const slashed = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${origin}${slashed}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsAppMessage(productName: string) {
  return `Merhaba, ${productName} hakkında sipariş vermek istiyorum.`;
}

export function generalWhatsAppMessage() {
  return "Merhaba, çiçek siparişi vermek istiyorum.";
}

export function floristJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${site.url}/#florist`,
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.ogImagePath),
    logo: absoluteUrl("/logo.png"),
    areaServed: [
      { "@type": "City", name: "Bursa" },
      { "@type": "AdministrativeArea", name: "Bursa ili" },
      ...[...getDistrictAreas(), ...getNeighborhoodsByParent("nilufer")].map((area) => ({
        "@type": "AdministrativeArea",
        name: area.shortName,
      })),
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bursa",
      addressRegion: "Bursa",
      addressCountry: "TR",
      ...(site.streetAddress ? { streetAddress: site.streetAddress } : {}),
    },
    description: site.defaultDescription,
    openingHours: "Mo-Su 00:00-24:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "24:00",
    },
  };

  if (hasPublicPhone()) {
    data.telephone = site.phoneTel;
  }

  if (hasGoogleBusiness()) {
    data.sameAs = [site.googleBusinessUrl];
  }

  return data;
}
