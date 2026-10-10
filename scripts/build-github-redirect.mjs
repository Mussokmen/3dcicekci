import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "github-pages-redirect");
const origin = "https://bursacicekcisi.com";
const oldPrefix = "/3dcicekci";

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function quotedPaths(rel) {
  return [...read(rel).matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function slugs(rel, pattern) {
  return [...read(rel).matchAll(pattern)].map((match) => match[1]);
}

const paths = new Set([
  "/",
  "/magaza",
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/bursa",
  "/ozel-tasarim",
  "/ozel-gunler",
  "/rehber",
  ...quotedPaths("src/config/areas.ts"),
  ...quotedPaths("src/config/guides.ts"),
  ...quotedPaths("src/config/occasions.ts"),
  ...slugs("src/config/categories.ts", /slug:\s*"([^"]+)"/g).map((slug) => `/magaza/${slug}`),
  ...slugs("src/config/nilufer-mahalleleri.ts", /slug:\s*"([^"]+)"/g).map((slug) => `/bursa/${slug}`),
  ...slugs("src/config/products.ts", /slug:\s*"([^"]+)"/g).map((slug) => `/urun/${slug}`),
]);

function targetFor(routePath) {
  if (routePath === "/" || routePath === "") return `${origin}/`;
  const normalized = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return `${origin}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

function page(target) {
  const safe = target.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  const js = JSON.stringify(target);
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Yönlendiriliyor</title>
    <link rel="canonical" href="${safe}" />
    <meta http-equiv="refresh" content="0; url=${safe}" />
    <script>location.replace(${js});</script>
  </head>
  <body>
    <p><a href="${safe}">bursacicekcisi.com</a> adresine yönlendiriliyorsunuz.</p>
  </body>
</html>
`;
}

function writeRoute(routePath) {
  const target = targetFor(routePath);
  const file =
    routePath === "/"
      ? path.join(out, "index.html")
      : path.join(out, routePath.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(target));
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const routePath of paths) writeRoute(routePath);

const fallback = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Yönlendiriliyor</title>
    <link rel="canonical" href="${origin}/" />
    <script>
      (function () {
        var path = location.pathname;
        var prefix = ${JSON.stringify(oldPrefix)};
        if (path === prefix || path === prefix + "/") path = "/";
        else if (path.indexOf(prefix + "/") === 0) path = path.slice(prefix.length);
        if (!path.startsWith("/")) path = "/" + path;
        if (path.length > 1 && !path.endsWith("/")) path += "/";
        var target = ${JSON.stringify(origin)} + path + location.search + location.hash;
        var link = document.querySelector("link[rel=canonical]");
        if (link) link.href = target;
        var meta = document.createElement("meta");
        meta.httpEquiv = "refresh";
        meta.content = "0; url=" + target;
        document.head.appendChild(meta);
        location.replace(target);
      })();
    </script>
  </head>
  <body>
    <p><a href="${origin}/">bursacicekcisi.com</a> adresine yönlendiriliyorsunuz.</p>
  </body>
</html>
`;
fs.writeFileSync(path.join(out, "404.html"), fallback);
console.log("redirect pages", paths.size);
