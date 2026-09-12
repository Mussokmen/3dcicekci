import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { categories } from "@/config/categories";
import { buildWhatsAppUrl, generalWhatsAppMessage } from "@/config/site";
import { cn } from "@/lib/utils";

const whatsappHref = buildWhatsAppUrl(generalWhatsAppMessage());

const navItems = [
  { to: "/", label: "Ana Sayfa", end: true },
  { to: "/magaza", label: "Mağaza", end: true },
  ...categories.map((category) => ({
    to: `/magaza/${category.slug}`,
    label: category.name,
    end: true,
  })),
  { to: "/bursa", label: "Bursa", end: false },
  { to: "/rehber", label: "Rehber", end: false },
] as const;

function isNavActive(to: string, pathname: string, end?: boolean) {
  if (to === "/magaza") {
    return pathname === "/magaza" || pathname.startsWith("/urun/");
  }
  if (to === "/bursa") {
    return pathname === "/bursa" || pathname.startsWith("/bursa/");
  }
  if (end) return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

function navLinkClass(active: boolean) {
  return cn(
    "relative py-1 text-[13px] tracking-[0.01em] transition-colors duration-200",
    active
      ? "text-stone-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-stone-900/70"
      : "text-stone-600 hover:text-stone-900",
  );
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const elevated = scrolled || menuOpen || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        elevated
          ? menuOpen
            ? "border-stone-200 bg-[#faf8f5]"
            : "border-stone-200/70 bg-[#faf8f5]/85 shadow-[0_1px_12px_rgba(41,37,36,0.06)] backdrop-blur-md"
          : "border-white/40 bg-white/45 backdrop-blur-[6px]",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl min-w-0 items-center justify-between gap-4 overflow-x-clip px-4 md:px-6">
        <Link
          to="/"
          className="flex min-w-0 max-w-[calc(100%-3.25rem)] items-center"
          aria-label="Ana Sayfa"
        >
          <BrandLogo className="h-11 w-auto max-h-11 max-w-full object-contain object-left md:h-12 md:max-h-12" />
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-end gap-x-3 whitespace-nowrap md:flex lg:gap-x-4"
          aria-label="Ana menü"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={() => navLinkClass(isNavActive(item.to, pathname, item.end))}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 shrink-0 items-center rounded-full bg-stone-900 px-3.5 text-[12px] font-medium tracking-wide text-white transition-colors hover:bg-stone-800"
          >
            WhatsApp'tan Sipariş
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-stone-800 md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-200",
                menuOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-200",
                menuOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        inert={!menuOpen}
        className={cn(
          "absolute inset-x-0 top-full z-50 max-h-[min(70svh,28rem)] overflow-x-clip overflow-y-auto border-b border-stone-200 bg-[#faf8f5] shadow-[0_10px_28px_rgba(41,37,36,0.12)] backdrop-blur-none transition-[opacity,transform] duration-200 ease-out md:hidden",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <nav className="min-w-0" aria-label="Mobil menü">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={() =>
                  cn(
                    "rounded-md px-2 py-2.5 text-sm",
                    isNavActive(item.to, pathname, item.end)
                      ? "bg-stone-900/5 text-stone-900"
                      : "text-stone-600 hover:text-stone-900",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-4 text-sm font-medium text-white"
            >
              WhatsApp'tan Sipariş
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
