import { Outlet } from "react-router-dom";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { site } from "@/config/site";

export function ShopLayout() {
  return (
    <div className="min-h-svh bg-[#f7f3ee] text-stone-900">
      <ShopHeader />
      <Outlet />
      <footer className="border-t border-stone-200/80 px-4 py-8 text-center text-xs text-stone-500">
        {site.name}
      </footer>
    </div>
  );
}
