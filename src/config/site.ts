export const site = {
  name: "Bursa'nın Çiçekçisi",
  /**
   * PLACEHOLDER — gerçek kanonik adres bağlanınca güncellenir.
   * Search Console ve sitemap bu değeri kullanır.
   */
  url: "https://mussokmen.github.io/3dcicekci",
  defaultTitle: "Bursa'nın Çiçekçisi | Bursa Çiçek Siparişi",
  defaultDescription:
    "Bursa çiçekçi vitrini. 7/24 açığız; buket, orkide, kutu ve çelenk için aynı gün teslim. Sipariş WhatsApp üzerinden.",
  ogImagePath: "/og-cover.jpg",
  locale: "tr_TR",
  region: "Bursa",
  areaServed: "Bursa ili",
  hoursDisplay: "7/24 açık · Bursa içinde aynı gün teslim",
  whatsappNumber: "905417334396",
  phoneDisplay: "0541 733 43 96",
  phoneTel: "+905417334396",
  /**
   * PLACEHOLDER — cadde adresi netleşince doldurulacak. Sahte adres yok.
   */
  streetAddress: "",
  /**
   * PLACEHOLDER — Google İşletme profil URL’si. Sahte Haritalar linki yok.
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

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
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
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.ogImagePath),
    areaServed: [
      { "@type": "City", name: "Bursa" },
      { "@type": "AdministrativeArea", name: "Bursa ili" },
      ...[
        "Osmangazi",
        "Nilüfer",
        "Yıldırım",
        "Mudanya",
        "Gemlik",
        "Görükle",
        "İnegöl",
        "Gürsu",
        "Kestel",
        "Yenişehir",
        "İznik",
        "Karacabey",
        "Mustafakemalpaşa",
        "Orhangazi",
      ].map((name) => ({
        "@type": "AdministrativeArea",
        name,
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
