import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AboutPage } from "@/pages/AboutPage";
import { BursaAreaPage, BursaIndexPage } from "@/pages/BursaPages";
import { ContactPage } from "@/pages/ContactPage";
import { CookiesPage } from "@/pages/CookiesPage";
import { CustomDesignPage } from "@/pages/CustomDesignPage";
import { GuideDetailPage, GuideIndexPage } from "@/pages/GuidePages";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { OccasionDetailPage, OccasionIndexPage } from "@/pages/OccasionPages";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ShopCategoryPage } from "@/pages/ShopCategoryPage";
import { ShopPage } from "@/pages/ShopPage";
import { SiteLayout } from "@/pages/SiteLayout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<SiteLayout />}>
          <Route path="/magaza" element={<ShopPage />} />
          <Route path="/magaza/:categorySlug" element={<ShopCategoryPage />} />
          <Route path="/urun/:slug" element={<ProductDetailPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
          <Route path="/cerez-politikasi" element={<CookiesPage />} />
          <Route path="/bursa" element={<BursaIndexPage />} />
          <Route path="/bursa/:areaSlug" element={<BursaAreaPage />} />
          <Route path="/ozel-tasarim" element={<CustomDesignPage />} />
          <Route path="/ozel-gunler" element={<OccasionIndexPage />} />
          <Route path="/ozel-gunler/:occasionSlug" element={<OccasionDetailPage />} />
          <Route path="/rehber" element={<GuideIndexPage />} />
          <Route path="/rehber/:guideSlug" element={<GuideDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
