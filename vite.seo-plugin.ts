import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { categories } from "./src/config/categories.ts";
import { getDistrictAreas, getNeighborhoods } from "./src/config/areas.ts";
import { occasions } from "./src/config/occasions.ts";
import { guides } from "./src/config/guides.ts";
import { site } from "./src/config/site.ts";

type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function collectRoutes(root: string): RouteMeta[] {
  const routes: RouteMeta[] = [
    { path: "/", title: site.defaultTitle, description: site.defaultDescription },
    { path: "/magaza", title: `Mağaza · ${site.name}`, description: site.defaultDescription },
    {
      path: "/hakkimizda",
      title: `Hakkımızda · ${site.name}`,
      description: "Bursa'da atölyede hazırlanan buket, orkide ve hediye aranjmanları.",
    },
    {
      path: "/iletisim",
      title: `İletişim · ${site.name}`,
      description: "Bursa çiçek siparişi için WhatsApp üzerinden yazın. Hizmet bölgesi Bursa ili.",
    },
    {
      path: "/gizlilik-politikasi",
      title: `Gizlilik Politikası · ${site.name}`,
      description: site.defaultDescription,
    },
    {
      path: "/cerez-politikasi",
      title: `Çerez Politikası · ${site.name}`,
      description: site.defaultDescription,
    },
    {
      path: "/bursa",
      title: `Bursa Çiçek Gönderimi · ${site.name}`,
      description: "Bursa ili genelinde buket, orkide, kutu ve çelenk teslimi.",
    },
    {
      path: "/ozel-tasarim",
      title: `Özel Tasarım · ${site.name}`,
      description: "Bursa’da ölçü ve renge göre özel buket, kutu, orkide ve çelenk. WhatsApp sipariş.",
    },
    {
      path: "/ozel-gunler",
      title: `Özel Günler · ${site.name}`,
      description: "Doğum günü, teşekkür, hasta ziyareti, çelenk ve orkide için Bursa teslimi.",
    },
    {
      path: "/rehber",
      title: `Rehber · ${site.name}`,
      description: "Bursa çiçek gönderimi, WhatsApp sipariş, orkide ve çelenk hakkında kısa yazılar.",
    },
  ];

  for (const category of categories) {
    routes.push({
      path: `/magaza/${category.slug}`,
      title: `${category.name} · ${site.name}`,
      description: category.description,
    });
  }

  for (const area of [...getDistrictAreas(), ...getNeighborhoods()]) {
    routes.push({
      path: area.path,
      title: `${area.name} · ${site.name}`,
      description: area.description,
    });
  }

  for (const occasion of occasions) {
    routes.push({
      path: occasion.path,
      title: `${occasion.name} · ${site.name}`,
      description: occasion.description,
    });
  }

  for (const guide of guides) {
    routes.push({
      path: guide.path,
      title: `${guide.name} · ${site.name}`,
      description: guide.description,
    });
  }

  const productsFile = path.join(root, "src/config/products.ts");
  if (fs.existsSync(productsFile)) {
    const source = fs.readFileSync(productsFile, "utf8");
    const matches = source.matchAll(
      /slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"[^"]+",\s*description:\s*"([^"]+)"/g,
    );
    for (const match of matches) {
      routes.push({
        path: `/urun/${match[1]}`,
        title: `${match[2]} · ${site.name}`,
        description: match[3],
      });
    }
  }

  return routes;
}

function injectHead(template: string, route: RouteMeta) {
  const url = `${site.url}${route.path === "/" ? "/" : route.path}`;
  const image = `${site.url}${site.ogImagePath}`;
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
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${image}" />`,
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
        const html = injectHead(template, route);
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
        .map((route) => {
          const loc = `${site.url}${route.path === "/" ? "/" : route.path}`;
          return `  <url>\n    <loc>${escapeHtml(loc)}</loc>\n  </url>`;
        })
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

      const robots = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
      fs.writeFileSync(path.join(dist, "robots.txt"), robots);
    },
  };
}
