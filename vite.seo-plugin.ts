import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { categories } from "./src/config/categories.ts";
import { getDistrictAreas, getNeighborhoods } from "./src/config/areas.ts";
import { occasions } from "./src/config/occasions.ts";
import { guides } from "./src/config/guides.ts";
import { homeHeading, homeIntro, pageUrl, shopIntro, site } from "./src/config/site.ts";

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

type RouteMeta = {
  path: string;
  title: string;
  description: string;
  heading: string;
  summary: string;
  image?: OgImage;
  links?: RouteLink[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function publicHref(routePath: string) {
  const prefix = process.env.GITHUB_PAGES === "true" ? "/3dcicekci" : "";
  if (routePath === "/" || routePath === "") return `${prefix}/`;
  const normalized = routePath.startsWith("/") ? routePath : `/${routePath}`;
  const slashed = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${prefix}${slashed}`;
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
  const privacySummary = `${site.name} vitrininde sipariş, fiyat ve ödeme WhatsApp üzerinden yürür. Site kart bilgisi almaz. İletişim: ${site.phoneDisplay}.`;
  const cookieSummary =
    "Site, vitrini göstermek için temel tarayıcı işleyişine dayanır. Pazarlama amaçlı izleme çerezi veya sepet çerezi kullanmayız.";
  const aboutSummary = "Bursa'da atölyede hazırlanan buket, orkide ve hediye aranjmanları.";
  const contactSummary =
    "Bursa çiçek siparişi için WhatsApp üzerinden yazın. Hizmet bölgesi Bursa ili. Saat aralığı ve teslimat ücreti WhatsApp’ta kesinleşir.";
  const bursaSummary = "Bursa ili genelinde buket, orkide, kutu ve çelenk teslimi.";
  const customSummary =
    "Bursa’da ölçü ve renge göre özel buket, kutu, orkide ve çelenk. WhatsApp sipariş.";
  const occasionSummary = "Doğum günü, teşekkür, hasta ziyareti, çelenk ve orkide için Bursa teslimi.";
  const guideSummary =
    "Bursa çiçek gönderimi, WhatsApp sipariş, orkide ve çelenk hakkında kısa yazılar.";

  const routes: RouteMeta[] = [
    {
      path: "/",
      title: site.defaultTitle,
      description: site.defaultDescription,
      heading: homeHeading,
      summary: homeIntro,
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
    },
    {
      path: "/hakkimizda",
      title: `Hakkımızda · ${site.name}`,
      description: aboutSummary,
      heading: "Hakkımızda",
      summary: aboutSummary,
    },
    {
      path: "/iletisim",
      title: `İletişim · ${site.name}`,
      description: contactSummary,
      heading: "İletişim",
      summary: contactSummary,
    },
    {
      path: "/gizlilik-politikasi",
      title: `Gizlilik Politikası · ${site.name}`,
      description: privacySummary,
      heading: "Gizlilik Politikası",
      summary: privacySummary,
    },
    {
      path: "/cerez-politikasi",
      title: `Çerez Politikası · ${site.name}`,
      description: cookieSummary,
      heading: "Çerez Politikası",
      summary: cookieSummary,
    },
    {
      path: "/bursa",
      title: `Bursa Çiçek Gönderimi · ${site.name}`,
      description: bursaSummary,
      heading: "Bursa çiçek gönderimi",
      summary: bursaSummary,
    },
    {
      path: "/ozel-tasarim",
      title: `Özel Tasarım · ${site.name}`,
      description: customSummary,
      heading: "Özel tasarımlar",
      summary: customSummary,
    },
    {
      path: "/ozel-gunler",
      title: `Özel Günler · ${site.name}`,
      description: occasionSummary,
      heading: "Özel günler",
      summary: occasionSummary,
    },
    {
      path: "/rehber",
      title: `Rehber · ${site.name}`,
      description: guideSummary,
      heading: "Rehber",
      summary: guideSummary,
    },
  ];

  for (const category of categories) {
    routes.push({
      path: `/magaza/${category.slug}`,
      title: `${category.name} · ${site.name}`,
      description: category.description,
      heading: category.name,
      summary: category.description,
    });
  }

  for (const area of [...getDistrictAreas(), ...getNeighborhoods()]) {
    routes.push({
      path: area.path,
      title: `${area.name} · ${site.name}`,
      description: area.description,
      heading: area.name,
      summary: area.description,
    });
  }

  for (const occasion of occasions) {
    routes.push({
      path: occasion.path,
      title: `${occasion.name} · ${site.name}`,
      description: occasion.description,
      heading: occasion.name,
      summary: occasion.description,
    });
  }

  for (const guide of guides) {
    routes.push({
      path: guide.path,
      title: `${guide.name} · ${site.name}`,
      description: guide.description,
      heading: guide.name,
      summary: guide.description,
    });
  }

  const productsFile = path.join(root, "src/config/products.ts");
  const shareDir = path.join(root, "dist", "paylasim");
  if (fs.existsSync(productsFile)) {
    const source = fs.readFileSync(productsFile, "utf8");
    const matches = source.matchAll(
      /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"[^"]+",\s*description:\s*"([^"]+)",\s*file:\s*"([^"]+)"/g,
    );
    for (const match of matches) {
      const slug = match[1];
      const name = match[2];
      const description = match[3];
      const file = match[4];
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

  const headTags = tags.join("\n    ");

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

      fs.copyFileSync(indexPath, path.join(dist, "404.html"));

      const urls = routes
        .map((route) => `  <url>\n    <loc>${escapeHtml(pageUrl(route.path))}</loc>\n  </url>`)
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
      fs.writeFileSync(path.join(dist, "robots.txt"), robots);
    },
  };
}
