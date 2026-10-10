import { cn } from "@/lib/utils";

type TrustHighlightsProps = {
  className?: string;
  compact?: boolean;
};

const items = [
  {
    title: "Yerel çiçekçi",
    text: "Bursa ili içinde atölye vitrini; fotoğraflar kendi çekimlerimizdir.",
    icon: LocalFloristIcon,
  },
  {
    title: "Taze çiçek",
    text: "Aranjmanı teslime yakın kurarız; yazın bekletmeyiz.",
    icon: FreshFlowerIcon,
  },
  {
    title: "Aynı gün teslim",
    text: "Bursa içinde aynı gün, zamanında ve dikkatli teslim ederiz.",
    icon: SameDayIcon,
  },
  {
    title: "WhatsApp sipariş",
    text: "Sepet veya üyelik açılmaz. Ürünü seçip yazmanız yeter.",
    icon: WhatsAppOrderIcon,
  },
] as const;

function LocalFloristIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 shrink-0 stroke-stone-800" fill="none" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 14c-2.2 1.2-3.5 3.2-3.5 5.2 0 .5.4 1 1 1h9"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 13v7" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 13c1.8-1.6 4.5-1.4 5.8.5 1 1.4.6 3.2-.7 4"
      />
      <circle cx="12" cy="7.2" r="2.2" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeWidth="1.5" d="M9.2 8.8C8 10 6.8 10.4 5.8 10M14.8 8.8c1.2 1.2 2.4 1.6 3.4 1.2" />
    </svg>
  );
}

function FreshFlowerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 shrink-0 stroke-stone-800" fill="none" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21V10" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14c-2.2-1-4-3.2-4-5.8 1.8.4 3.2 1.6 4 3.2 1-1.6 2.4-2.8 4-3.2 0 2.6-1.8 4.8-4 5.8Z" />
      <circle cx="12" cy="7" r="2" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeWidth="1.5" d="M7 20h10" />
    </svg>
  );
}

function SameDayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 shrink-0 stroke-stone-800" fill="none" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 16V8.5A1.5 1.5 0 0 1 4.5 7H14v9H3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 11h4.2L21 14.2V16h-7v-5Z" />
      <circle cx="6.5" cy="16.5" r="1.7" strokeWidth="1.5" />
      <circle cx="17.5" cy="16.5" r="1.7" strokeWidth="1.5" />
      <path strokeLinecap="round" strokeWidth="1.5" d="M16.2 6.2 18 4.4M18 4.4V6.5M18 4.4h2.1" />
    </svg>
  );
}

function WhatsAppOrderIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 shrink-0 stroke-stone-800" fill="none" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 18.5 6.2 15A7.5 7.5 0 1 1 9 19.2L5 18.5Z"
      />
      <path strokeLinecap="round" strokeWidth="1.5" d="M9.5 11h5M9.5 13.5h3.5" />
    </svg>
  );
}

export function TrustHighlights({ className, compact = false }: TrustHighlightsProps) {
  return (
    <section className={cn(compact ? "mt-10" : "py-12 md:py-16", className)}>
      <ul
        className={cn(
          "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
          compact ? "gap-2.5" : "gap-3 md:gap-4",
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="flex gap-3 rounded-2xl bg-white/80 px-4 py-4 shadow-[0_1px_0_rgba(28,25,23,0.04)] ring-1 ring-stone-200/80"
          >
            <item.icon />
            <div>
              <h3 className="text-[15px] font-medium text-stone-900">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
