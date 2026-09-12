import { useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  function onThumbKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (images.length < 2) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive((index) => (index + 1) % images.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive((index) => (index - 1 + images.length) % images.length);
    }
  }

  return (
    <div>
      <div className="overflow-hidden bg-stone-100">
        <img
          src={current}
          alt={`${name}, Bursa teslim`}
          width={800}
          height={1000}
          decoding="async"
          className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
        />
      </div>
      {images.length > 1 ? (
        <ul
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          onKeyDown={onThumbKeyDown}
          aria-label={`${name} görselleri`}
        >
          {images.map((image, index) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "size-16 overflow-hidden border bg-stone-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 md:size-20",
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
