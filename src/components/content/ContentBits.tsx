import { Link } from "react-router-dom";
import { faqs, type FaqItem } from "@/config/faqs";

export function FaqList({ items = faqs }: { items?: FaqItem[] }) {
  return (
    <dl className="mt-8 space-y-6">
      {items.map((item) => (
        <div key={item.question}>
          <dt className="text-base font-medium text-stone-900">{item.question}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-stone-600 md:text-base">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}

type WhatsAppCtaProps = {
  href: string;
  label?: string;
};

export function WhatsAppCta({ href, label = "WhatsApp’tan Sipariş Ver" }: WhatsAppCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 items-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white hover:bg-stone-800"
    >
      {label}
    </a>
  );
}

export function CategoryLinks({ slugs }: { slugs: string[] }) {
  const labels: Record<string, string> = {
    buketler: "Buketler",
    "karisik-buketler": "Karışık Buketler",
    orkideler: "Orkideler",
    kutular: "Kutular",
    celenkler: "Çelenkler",
  };

  return (
    <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {slugs.map((slug) => (
        <Link key={slug} to={`/magaza/${slug}`} className="text-stone-800 underline-offset-4 hover:underline">
          {labels[slug] ?? slug}
        </Link>
      ))}
    </p>
  );
}
