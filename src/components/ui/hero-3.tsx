"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  "inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-red-500 text-white font-semibold shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75";

const secondaryCtaClass =
  "inline-flex items-center justify-center px-8 py-2.5 rounded-full border border-border bg-card/50 text-foreground font-semibold shadow-lg backdrop-blur-sm transition-colors hover:bg-card/80 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75";

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

  return (
    <section
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col overflow-hidden text-center",
        className,
      )}
    >
      <div className="relative z-20 flex shrink-0 flex-col items-center px-4 pt-5 md:pt-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
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
          className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
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
          className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

      <div className="relative z-10 flex min-h-0 w-full flex-1 items-center overflow-hidden">
        <motion.div
          className="flex w-max gap-5"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 75,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              to={item.href}
              className="relative aspect-[3/4] h-40 md:h-56 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
