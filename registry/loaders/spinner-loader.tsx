"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpinnerLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SpinnerLoader({
  size = "md",
  className,
}: SpinnerLoaderProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <motion.div
      className={cn(sizes[size], "relative", className)}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-primary" />
    </motion.div>
  );
}

export const spinnerLoaderCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpinnerLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SpinnerLoader({
  size = "md",
  className,
}: SpinnerLoaderProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <motion.div
      className={cn(sizes[size], "relative", className)}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-primary border-r-primary" />
    </motion.div>
  );
}`;