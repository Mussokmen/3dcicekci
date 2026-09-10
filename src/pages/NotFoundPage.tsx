import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function NotFoundPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-[#f7f3ee] px-4 text-center">
      <Seo title="Sayfa bulunamadı" path="/404" />
      <h1 className="text-3xl tracking-tight text-stone-900">Sayfa bulunamadı</h1>
      <Link to="/" className="mt-6 text-sm text-stone-600 underline-offset-4 hover:underline">
        Ana sayfaya dön
      </Link>
    </main>
  );
}
