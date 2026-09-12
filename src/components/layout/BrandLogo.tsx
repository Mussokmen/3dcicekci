import logo from "@/assets/logo.png";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt={site.name}
      width={927}
      height={400}
      decoding="async"
      className={cn(
        "h-11 w-auto max-w-[14rem] object-contain object-left mix-blend-multiply md:h-12 md:max-w-[16rem]",
        className,
      )}
    />
  );
}
