export const site = {
  name: "Bursa'nın Çiçekçisi",
  url: "https://example.com",
  defaultTitle: "Bursa'nın Çiçekçisi",
  defaultDescription: "Buket, orkide, kutu ve çelenk aranjmanları.",
  /**
   * PLACEHOLDER — gerçek WhatsApp numarası henüz yok.
   * Ülke kodu ile, boşluksuz yazın. Örnek: 905551112233
   */
  whatsappNumber: "90XXXXXXXXXX",
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function defaultWhatsAppMessage(productName: string) {
  return `Merhaba, ${productName} hakkında sipariş vermek istiyorum.`;
}
