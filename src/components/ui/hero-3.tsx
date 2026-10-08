"use client";

import React, { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

interface MarqueeItem {
  src: string;
  href: string;
  alt: string;
}

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  images: MarqueeItem[];
  className?: string;
}

const primaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 sm:w-auto sm:px-8";

const secondaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-stone-300 bg-white/95 px-6 py-2.5 text-sm font-semibold text-stone-900 shadow-md backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 sm:w-auto sm:px-8";

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => true);
  const stripImages = reduceMotion ? images : duplicatedImages;

  return (
    <section
      className={cn(
        "relative flex w-full flex-col overflow-hidden text-center",
        className,
      )}
    >
      <div className="relative z-20 flex shrink-0 flex-col items-center px-4 pt-1 md:pt-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-2 hidden rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm md:inline-block"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-2xl font-bold tracking-tighter text-foreground md:text-4xl"
        >
          {typeof title === "string" ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-2 max-w-xl rounded-2xl bg-white/80 px-3 py-2 text-sm leading-relaxed text-stone-800 md:text-base"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="mt-3 flex w-full max-w-sm flex-col items-stretch justify-center gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
        >
          <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={ctaHref} className={primaryCtaClass}>
              {ctaText}
            </Link>
          </motion.div>
          <motion.a
            href={secondaryCtaHref}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={secondaryCtaClass}
          >
            {secondaryCtaText}
          </motion.a>
        </motion.div>
      </div>

      <div className="relative z-10 mt-4 w-full overflow-hidden pb-3 md:mt-6 md:pb-4">
        {reduceMotion ? (
          <div className="flex gap-4 overflow-x-auto px-4 pb-1">
            {stripImages.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative aspect-[3/4] h-36 flex-shrink-0 md:h-48"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full rounded-2xl object-cover shadow-md"
                />
              </Link>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max gap-5"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 75,
              repeat: Infinity,
            }}
          >
            {stripImages.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                to={item.href}
                className="relative aspect-[3/4] h-36 flex-shrink-0 md:h-48"
                style={{
                  rotate: `${index % 2 === 0 ? -2 : 5}deg`,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full rounded-2xl object-cover shadow-md"
                />
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
