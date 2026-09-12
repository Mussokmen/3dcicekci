import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/config/site";

type WhatsAppOrderButtonProps = {
  message: string;
  className?: string;
};

export function WhatsAppOrderButton({ message, className }: WhatsAppOrderButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center bg-stone-900 px-6 text-sm font-medium text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900",
        className,
      )}
    >
      WhatsApp’tan Sipariş Ver
    </a>
  );
}
