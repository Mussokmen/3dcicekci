import { useEffect } from "react";
import { site } from "@/config/site";

type SeoProps = {
  title: string;
  description?: string;
  path: string;
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

function upsertCanonical(href: string) {
  let element = document.head.querySelector("link[rel='canonical']");

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;
    const desc = description ?? site.defaultDescription;
    const url = `${site.url}${path}`;

    document.title = fullTitle;
    upsertMeta("meta[name='description']", { name: "description", content: desc });
    upsertMeta("meta[property='og:title']", { property: "og:title", content: fullTitle });
    upsertMeta("meta[property='og:description']", {
      property: "og:description",
      content: desc,
    });
    upsertMeta("meta[property='og:url']", { property: "og:url", content: url });
    upsertMeta("meta[property='og:type']", { property: "og:type", content: "website" });
    upsertCanonical(url);
  }, [title, description, path]);

  return null;
}
