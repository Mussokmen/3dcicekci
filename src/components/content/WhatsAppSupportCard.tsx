import { buildWhatsAppUrl, generalWhatsAppMessage, site } from "@/config/site";
import { cn } from "@/lib/utils";

type WhatsAppSupportCardProps = {
  className?: string;
  message?: string;
};

export function WhatsAppSupportCard({ className, message }: WhatsAppSupportCardProps) {
  const href = buildWhatsAppUrl(message ?? generalWhatsAppMessage());

  return (
    <aside
      className={cn(
        "rounded-2xl bg-emerald-50/80 p-6 ring-1 ring-emerald-900/10 md:p-7",
        className,
      )}
    >
      <h2 className="text-lg font-medium text-stone-900">WhatsApp hattı</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-600">
        Sipariş ve teslim soruları için yazın. Form yoktur; 7/24 açığız. Saat aralığı ve teslimat
        ücreti WhatsApp’ta kesinleşir.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#128C7E] px-5 text-sm font-medium text-white transition-colors hover:bg-[#0f7a6e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 sm:w-auto"
      >
        WhatsApp’tan yaz
      </a>
      <p className="mt-4 rounded-xl bg-white/80 px-4 py-3 text-sm text-stone-600">{site.hoursDisplay}</p>
    </aside>
  );
}
