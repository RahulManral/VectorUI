"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  onClick,
}: ShimmerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-primary px-6 py-3",
        "text-sm font-medium text-primary-foreground",
        "transition-all hover:shadow-lg hover:shadow-primary/25",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer-slide
                    bg-gradient-to-r from-transparent via-white/20 to-transparent
                    group-hover:animate-shimmer-slide"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export const shimmerButtonCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  onClick,
}: ShimmerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-primary px-6 py-3",
        "text-sm font-medium text-primary-foreground",
        "transition-all hover:shadow-lg hover:shadow-primary/25",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer-slide
                    bg-gradient-to-r from-transparent via-white/20
                    to-transparent group-hover:animate-shimmer-slide"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}`;