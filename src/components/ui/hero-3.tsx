"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  className?: string;
}

const primaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 sm:w-auto sm:px-8";

const secondaryCtaClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full border border-stone-300 bg-white/95 px-6 py-2.5 text-sm font-semibold text-stone-900 shadow-md backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 sm:w-auto sm:px-8";

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
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

  return (
    <section className={cn("relative flex w-full flex-col text-center", className)}>
      <div className="relative z-20 flex flex-col items-center px-4 pt-2">
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
          className="text-2xl font-bold tracking-tighter text-foreground md:text-3xl"
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
          className="mt-3 flex w-full max-w-sm flex-col items-stretch justify-center gap-2 pb-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
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
    </section>
  );
};
