import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="overflow-hidden bg-stone-100">
        <img
          src={current}
          alt={name}
          className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
        />
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 flex gap-2">
          {images.map((image, index) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "size-16 overflow-hidden border bg-stone-100 transition-opacity md:size-20",
                  index === active ? "border-stone-900" : "border-transparent opacity-70 hover:opacity-100",
                )}
                aria-label={`${name} görsel ${index + 1}`}
                aria-pressed={index === active}
              >
                <img src={image} alt="" className="size-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
