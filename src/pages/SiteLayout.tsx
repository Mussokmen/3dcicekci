import { Outlet } from "react-router-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteLayout() {
  return (
    <div className="min-h-svh bg-[#f7f3ee] pt-14 text-stone-900">
      <SiteHeader />
      <div id="icerik" tabIndex={-1} className="outline-none">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}
