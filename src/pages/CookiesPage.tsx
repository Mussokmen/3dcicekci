import { Seo } from "@/components/Seo";

export function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Seo
        title="Çerez Politikası"
        description="Site, vitrini göstermek için temel tarayıcı işleyişine dayanır. Pazarlama amaçlı izleme çerezi veya sepet çerezi kullanmayız."
        path="/cerez-politikasi"
      />
      <h1 className="text-4xl tracking-tight text-stone-900">Çerez Politikası</h1>
      <p className="mt-6 text-base leading-relaxed text-stone-600">
        Site, vitrini göstermek için temel tarayıcı işleyişine dayanır. Pazarlama amaçlı izleme çerezi
        veya sepet çerezi kullanmayız. Tarayıcınızın kendi ayarlarından çerezleri yönetebilirsiniz.
      </p>
    </main>
  );
}
