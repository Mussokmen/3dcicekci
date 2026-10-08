import { useEffect } from "react";
import { absoluteUrl, floristJsonLd, pageUrl, site } from "@/config/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type SeoProps = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel='${rel}']`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  jsonLd,
  breadcrumbs,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;
    const desc = description ?? site.defaultDescription;
    const url = pageUrl(path);
    const imageUrl = absoluteUrl(image ?? site.ogImagePath);

    document.title = fullTitle;
    upsertMeta("meta[name='description']", { name: "description", content: desc });
    upsertMeta("meta[property='og:title']", { property: "og:title", content: fullTitle });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: desc,
    });
    upsertMeta("meta[property='og:url']", { property: "og:url", content: url });
    upsertMeta("meta[property='og:type']", { property: "og:type", content: type });
    upsertMeta("meta[property='og:locale']", { property: "og:locale", content: site.locale });
    upsertMeta("meta[property='og:image']", { property: "og:image", content: imageUrl });
    upsertMeta("meta[name='twitter:card']", { name: "twitter:card", content: "summary_large_image" });
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title", content: fullTitle });
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description", content: desc });
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image", content: imageUrl });
    upsertLink("canonical", url);

    if (site.searchConsoleVerification) {
      upsertMeta("meta[name='google-site-verification']", {
        name: "google-site-verification",
        content: site.searchConsoleVerification,
      });
    } else {
      document.head.querySelector("meta[name='google-site-verification']")?.remove();
    }

    if (site.analyticsMeasurementId.startsWith("G-")) {
      const existing = document.getElementById("ga-gtag");
      if (!existing) {
        const script = document.createElement("script");
        script.id = "ga-gtag";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${site.analyticsMeasurementId}`;
        document.head.appendChild(script);
        const inline = document.createElement("script");
        inline.id = "ga-gtag-inline";
        inline.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.analyticsMeasurementId}');`;
        document.head.appendChild(inline);
      }
    }

    upsertJsonLd("jsonld-florist", floristJsonLd());

    if (breadcrumbs && breadcrumbs.length > 0) {
      upsertJsonLd("jsonld-breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: pageUrl(item.path),
        })),
      });
    } else {
      document.getElementById("jsonld-breadcrumb")?.remove();
    }

    if (jsonLd) {
      upsertJsonLd("jsonld-page", Array.isArray(jsonLd) ? jsonLd : jsonLd);
    } else {
      document.getElementById("jsonld-page")?.remove();
    }
  }, [
    title,
    description,
    path,
    image,
    type,
    JSON.stringify(jsonLd ?? null),
    JSON.stringify(breadcrumbs ?? null),
  ]);

  return null;
}
