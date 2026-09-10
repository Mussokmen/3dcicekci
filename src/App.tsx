import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ShopCategoryPage } from "@/pages/ShopCategoryPage";
import { ShopLayout } from "@/pages/ShopLayout";
import { ShopPage } from "@/pages/ShopPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ShopLayout />}>
          <Route path="/magaza" element={<ShopPage />} />
          <Route path="/magaza/:categorySlug" element={<ShopCategoryPage />} />
          <Route path="/urun/:slug" element={<ProductDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
