"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  variant?: "fade" | "slide" | "scale" | "blur";
  className?: string;
}

export function AnimatedContainer({
  children,
  variant = "fade",
  className,
}: AnimatedContainerProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(4px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(4px)" },
    },
  };

  const selected = variants[variant];

  return (
    <motion.div
      initial={selected.initial}
      animate={selected.animate}
      exit={selected.exit}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("rounded-lg border border-border bg-card p-6", className)}
    >
      {children}
    </motion.div>
  );
}

export const animatedContainerCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  variant?: "fade" | "slide" | "scale" | "blur";
  className?: string;
}

export function AnimatedContainer({
  children,
  variant = "fade",
  className,
}: AnimatedContainerProps) {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
    blur: {
      initial: { opacity: 0, filter: "blur(4px)" },
      animate: { opacity: 1, filter: "blur(0px)" },
      exit: { opacity: 0, filter: "blur(4px)" },
    },
  };

  const selected = variants[variant];

  return (
    <motion.div
      initial={selected.initial}
      animate={selected.animate}
      exit={selected.exit}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("rounded-lg border border-border bg-card p-6", className)}
    >
      {children}
    </motion.div>
  );
}`;
