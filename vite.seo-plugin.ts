import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { categories } from "./src/config/categories.ts";
import { getDistrictAreas, getNeighborhoods, getServiceAreaBySlug } from "./src/config/areas.ts";
import { occasions } from "./src/config/occasions.ts";
import { guides } from "./src/config/guides.ts";
import { floristJsonLd, homeHeading, homeIntro, pageUrl, shopIntro, site } from "./src/config/site.ts";

type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

type RouteLink = {
  path: string;
  label: string;
};

type Crumb = {
  name: string;
  path: string;
};

type RouteMeta = {
  path: string;
  title: string;
  description: string;
  heading: string;
  summary: string;
  image?: OgImage;
  links?: RouteLink[];
  crumbs?: Crumb[];
};

function plainSummary(value: string) {
  return value.replace(/\[([^\]]+)\]\((\/[^)\s]+)\)/g, "$1");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function publicHref(routePath: string) {
  if (routePath === "/" || routePath === "") return "/";
  const normalized = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

function crumbs(...items: Crumb[]): Crumb[] {
  return items;
}

function webpSize(filePath: string) {
  const data = fs.readFileSync(filePath);
  if (data.subarray(0, 4).toString() !== "RIFF" || data.subarray(8, 12).toString() !== "WEBP") {
    return null;
  }

  let offset = 12;
  while (offset + 8 <= data.length) {
    const chunk = data.subarray(offset, offset + 4).toString();
    const size = data.readUInt32LE(offset + 4);
    const payload = data.subarray(offset + 8, offset + 8 + size);

    if (chunk === "VP8X" && payload.length >= 10) {
      return {
        width: 1 + payload[4] + (payload[5] << 8) + (payload[6] << 16),
        height: 1 + payload[7] + (payload[8] << 8) + (payload[9] << 16),
      };
    }

    if (chunk === "VP8 " && payload.length >= 10) {
      return {
        width: payload.readUInt16LE(6) & 0x3fff,
        height: payload.readUInt16LE(8) & 0x3fff,
      };
    }

    if (chunk === "VP8L" && payload.length >= 5) {
      const b0 = payload[1];
      const b1 = payload[2];
      const b2 = payload[3];
      const b3 = payload[4];
      return {
        width: 1 + (((b1 & 0x3f) << 8) | b0),
        height: 1 + (((b3 & 0xf) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
      };
    }

    offset += 8 + size + (size & 1);
  }

  return null;
}

function collectRoutes(root: string): RouteMeta[] {
  const privacySummary = `${site.name} siparişi WhatsApp ile alır. Sitede kart bilgisi toplanmaz. İletişim: ${site.phoneDisplay}. Ad, telefon ve teslim bilgisi yalnızca hazırlık ve teslim için kullanılır.`;
  const cookieSummary =
    "Vitrin, tarayıcının temel işleyişiyle açılır. Pazarlama çerezi, sepet çerezi veya izleme kaydı tutulmaz. Çerez tercihleri tarayıcı ayarından yönetilir.";
  const aboutSummary =
    "Bursa'nın Çiçekçisi, Bursa'da taze çiçek hazırlayan yerel bir atölyedir. Fotoğraflar kendi çekimlerimizdir. Teslim aynı gün ve dikkatli yapılır.";
  const contactSummary =
    "Sipariş ve teslim için WhatsApp ile yazın veya telefon edin. Hat 7/24 açıktır. Hizmet bölgesi Bursa ili. Teslim aynı gün planlanır.";
  const bursaSummary =
    "Bursa’nın on yedi ilçesine buket, orkide, kutu ve çelenk. Teslim aynı gün planlanır. Görükle, Nilüfer mahallesidir.";
  const customSummary =
    "Ölçü ve renge göre buket, kutu, orkide ve çelenk atölyede hazırlanır. Teslim Bursa ili içindedir.";
  const occasionSummary =
    "Doğum günü, teşekkür, hasta ziyareti, çelenk ve ofis orkidesi için Bursa teslimi. Çiçek atölyede taze hazırlanır.";
  const guideSummary =
    "Bursa çiçek gönderimi, WhatsApp siparişi, orkide, çelenk, kart notu ve aynı gün teslim üzerine atölye notları.";

  const routes: RouteMeta[] = [
    {
      path: "/",
      title: site.defaultTitle,
      description: site.defaultDescription,
      heading: homeHeading,
      summary: homeIntro,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }),
      links: categories.map((category) => ({
        path: `/magaza/${category.slug}`,
        label: category.name,
      })),
    },
    {
      path: "/magaza",
      title: `Mağaza · ${site.name}`,
      description: shopIntro,
      heading: "Mağaza",
      summary: shopIntro,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Mağaza", path: "/magaza" }),
    },
    {
      path: "/hakkimizda",
      title: `Hakkımızda · ${site.name}`,
      description: aboutSummary,
      heading: "Hakkımızda",
      summary: aboutSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }),
    },
    {
      path: "/iletisim",
      title: `İletişim · ${site.name}`,
      description: contactSummary,
      heading: "İletişim",
      summary: contactSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }),
    },
    {
      path: "/gizlilik-politikasi",
      title: `Gizlilik Politikası · ${site.name}`,
      description: privacySummary,
      heading: "Gizlilik Politikası",
      summary: privacySummary,
      crumbs: crumbs(
        { name: "Ana Sayfa", path: "/" },
        { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
      ),
    },
    {
      path: "/cerez-politikasi",
      title: `Çerez Politikası · ${site.name}`,
      description: cookieSummary,
      heading: "Çerez Politikası",
      summary: cookieSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Çerez Politikası", path: "/cerez-politikasi" }),
    },
    {
      path: "/bursa",
      title: `Bursa Çiçek Gönderimi · ${site.name}`,
      description: bursaSummary,
      heading: "Bursa çiçek gönderimi",
      summary: bursaSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Bursa Teslimatı", path: "/bursa" }),
    },
    {
      path: "/ozel-tasarim",
      title: `Özel Tasarım · ${site.name}`,
      description: customSummary,
      heading: "Özel tasarımlar",
      summary: customSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Özel Tasarım", path: "/ozel-tasarim" }),
    },
    {
      path: "/ozel-gunler",
      title: `Özel Günler · ${site.name}`,
      description: occasionSummary,
      heading: "Özel günler",
      summary: occasionSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Özel Günler", path: "/ozel-gunler" }),
    },
    {
      path: "/rehber",
      title: `Rehber · ${site.name}`,
      description: guideSummary,
      heading: "Rehber",
      summary: guideSummary,
      crumbs: crumbs({ name: "Ana Sayfa", path: "/" }, { name: "Rehber", path: "/rehber" }),
    },
  ];

  for (const category of categories) {
    routes.push({
      path: `/magaza/${category.slug}`,
      title: `${category.name} · ${site.name}`,
      description: category.description,
      heading: category.name,
      summary: category.description,
      crumbs: crumbs(
        { name: "Ana Sayfa", path: "/" },
        { name: "Mağaza", path: "/magaza" },
        { name: category.name, path: `/magaza/${category.slug}` },
      ),
    });
  }

  for (const area of [...getDistrictAreas(), ...getNeighborhoods()]) {
    const parent = area.parentSlug ? getServiceAreaBySlug(area.parentSlug) : undefined;
    routes.push({
      path: area.path,
      title: `${area.name} · ${site.name}`,
      description: area.description,
      heading: area.name,
      summary: plainSummary(area.body.join(" ")),
      crumbs: crumbs(
        { name: "Ana Sayfa", path: "/" },
        { name: "Bursa Teslimatı", path: "/bursa" },
        ...(parent ? [{ name: parent.shortName, path: parent.path }] : []),
        { name: area.shortName, path: area.path },
      ),
    });
  }

  for (const occasion of occasions) {
    routes.push({
      path: occasion.path,
      title: `${occasion.name} · ${site.name}`,
      description: occasion.description,
      heading: occasion.name,
      summary: occasion.body.join(" "),
      crumbs: crumbs(
        { name: "Ana Sayfa", path: "/" },
        { name: "Özel Günler", path: "/ozel-gunler" },
        { name: occasion.name, path: occasion.path },
      ),
    });
  }

  for (const guide of guides) {
    routes.push({
      path: guide.path,
      title: `${guide.name} · ${site.name}`,
      description: guide.description,
      heading: guide.name,
      summary: guide.body.join(" "),
      crumbs: crumbs(
        { name: "Ana Sayfa", path: "/" },
        { name: "Rehber", path: "/rehber" },
        { name: guide.name, path: guide.path },
      ),
    });
  }

  const productsFile = path.join(root, "src/config/products.ts");
  const shareDir = path.join(root, "dist", "paylasim");
  if (fs.existsSync(productsFile)) {
    const source = fs.readFileSync(productsFile, "utf8");
    const matches = source.matchAll(
      /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*file:\s*"([^"]+)"/g,
    );
    for (const match of matches) {
      const slug = match[1];
      const name = match[2];
      const categorySlug = match[3];
      const description = match[4];
      const file = match[5];
      const category = categories.find((item) => item.slug === categorySlug);
      const sourceImage = path.join(root, "src/assets/urunler", file);
      let image: OgImage | undefined;

      if (fs.existsSync(sourceImage)) {
        fs.mkdirSync(shareDir, { recursive: true });
        fs.copyFileSync(sourceImage, path.join(shareDir, `${slug}.webp`));
        const size = webpSize(sourceImage);
        image = {
          url: `${site.url}/paylasim/${slug}.webp`,
          width: size?.width,
          height: size?.height,
          alt: `${name}, Bursa teslim`,
        };
      }

      routes.push({
        path: `/urun/${slug}`,
        title: `${name} · ${site.name}`,
        description,
        heading: name,
        summary: description,
        image,
        crumbs: crumbs(
          { name: "Ana Sayfa", path: "/" },
          { name: "Mağaza", path: "/magaza" },
          ...(category ? [{ name: category.name, path: `/magaza/${category.slug}` }] : []),
          { name, path: `/urun/${slug}` },
        ),
      });
    }
  }

  return routes;
}

function imageTags(image: OgImage | undefined) {
  const fallback = `${site.url}${site.ogImagePath}`;
  if (!image) {
    return [`<meta property="og:image" content="${fallback}" />`];
  }

  const tags = [`<meta property="og:image" content="${escapeHtml(image.url)}" />`];
  if (image.width) tags.push(`<meta property="og:image:width" content="${image.width}" />`);
  if (image.height) tags.push(`<meta property="og:image:height" content="${image.height}" />`);
  if (image.alt) tags.push(`<meta property="og:image:alt" content="${escapeHtml(image.alt)}" />`);
  return tags;
}

function jsonLdTags(route: RouteMeta) {
  const blocks: unknown[] = [floristJsonLd()];

  if (route.path === "/") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    });
  }

  if (route.crumbs && route.crumbs.length > 0) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: route.crumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: pageUrl(item.path),
      })),
    });
  }

  if (route.path.startsWith("/urun/")) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: route.heading,
      description: route.description,
      image: route.image?.url ?? `${site.url}${site.ogImagePath}`,
      brand: { "@type": "Brand", name: site.name },
    });
  }

  return blocks.map(
    (block) =>
      `<script type="application/ld+json">${JSON.stringify(block).replaceAll("<", "\\u003c")}</script>`,
  );
}

function notFoundHtml() {
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Sayfa bulunamadı · ${escapeHtml(site.name)}</title>
    <style>
      body { margin: 0; background: #f7f3ee; color: #1c1917; font-family: Georgia, "Times New Roman", serif; }
      main { max-width: 36rem; margin: 0 auto; padding: 4.5rem 1.25rem; }
      a { color: inherit; }
    </style>
  </head>
  <body>
    <main>
      <h1>Sayfa bulunamadı</h1>
      <p>Bu adres sitede yok. Ana sayfa, mağaza veya Bursa teslimat sayfasından devam edin.</p>
      <p><a href="/">Ana sayfa</a> · <a href="/magaza/">Mağaza</a> · <a href="/bursa/">Bursa teslimatı</a></p>
    </main>
  </body>
</html>
`;
}

const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "DuckAssistBot",
  "YandexBot",
];

function robotsTxt() {
  const groups = ["*", ...aiCrawlers].map((agent) => `User-agent: ${agent}\nAllow: /\n`);
  return `${groups.join("\n")}\nSitemap: ${site.url}/sitemap.xml\n`;
}

function injectHead(template: string, route: RouteMeta) {
  const url = pageUrl(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html
    .replace(/<meta\s+name="description"[^>]*\/?>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*\/?>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]+"[^>]*\/?>\s*/gi, "");

  const tags = [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="${route.path.startsWith("/urun/") ? "product" : "website"}" />`,
    ...imageTags(route.image),
    `<meta property="og:locale" content="${site.locale}" />`,
  ];

  if (site.searchConsoleVerification) {
    tags.push(
      `<meta name="google-site-verification" content="${escapeHtml(site.searchConsoleVerification)}" />`,
    );
  }

  const headTags = [...tags, ...jsonLdTags(route)].join("\n    ");

  if (html.includes("<!--seo-head-->")) {
    html = html.replace("<!--seo-head-->", headTags);
  } else {
    html = html.replace("</head>", `    ${headTags}\n  </head>`);
  }

  return html;
}

function injectBody(template: string, route: RouteMeta) {
  const links = (route.links ?? [])
    .map(
      (link) =>
        `<a href="${escapeHtml(publicHref(link.path))}">${escapeHtml(link.label)}</a>`,
    )
    .join(" ");
  const nav = links ? `<nav aria-label="Kategoriler">${links}</nav>` : "";
  const block = `<div id="statik-ozet"><h1>${escapeHtml(route.heading)}</h1><p>${escapeHtml(route.summary)}</p>${nav}</div>`;

  if (template.includes('<div id="root">')) {
    return template.replace('<div id="root">', `${block}\n    <div id="root">`);
  }

  return template.replace("<body>", `<body>\n    ${block}`);
}

export function seoPrerenderPlugin(): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const root = path.resolve(".");
      const dist = path.join(root, "dist");
      const indexPath = path.join(dist, "index.html");
      if (!fs.existsSync(indexPath)) return;

      const hero = path.join(root, "src/assets/hero-bg.jpg");
      const ogDest = path.join(dist, "og-cover.jpg");
      if (fs.existsSync(hero)) {
        fs.copyFileSync(hero, ogDest);
      }

      const logo = path.join(root, "src/assets/logo.png");
      if (fs.existsSync(logo)) {
        fs.copyFileSync(logo, path.join(dist, "logo.png"));
      }

      const template = fs.readFileSync(indexPath, "utf8");
      const routes = collectRoutes(root);

      for (const route of routes) {
        const html = injectBody(injectHead(template, route), route);
        if (route.path === "/") {
          fs.writeFileSync(indexPath, html);
          continue;
        }
        const outDir = path.join(dist, route.path.slice(1));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html);
      }

      fs.writeFileSync(path.join(dist, "404.html"), notFoundHtml());

      const lastmod = new Date().toISOString().slice(0, 10);
      const seen = new Set<string>();
      const urls = routes
        .map((route) => {
          const loc = pageUrl(route.path);
          if (seen.has(loc)) {
            throw new Error(`Sitemap adresi yineleniyor: ${loc}`);
          }
          seen.add(loc);
          const filePath =
            route.path === "/"
              ? path.join(dist, "index.html")
              : path.join(dist, route.path.slice(1), "index.html");
          if (!fs.existsSync(filePath)) {
            throw new Error(`Sitemap adresi için sayfa yok: ${loc}`);
          }
          return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
        })
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
      fs.writeFileSync(path.join(dist, "robots.txt"), robotsTxt());
    },
  };
}
