"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotLoaderProps {
  className?: string;
}

export function DotLoader({ className }: DotLoaderProps) {
  const dots = Array.from({ length: 3 }, (_, i) => i);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {dots.map((i) => (
        <motion.div
          key={i}
          className="h-3 w-3 rounded-full bg-primary"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export const dotLoaderCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DotLoaderProps {
  className?: string;
}

export function DotLoader({ className }: DotLoaderProps) {
  const dots = Array.from({ length: 3 }, (_, i) => i);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {dots.map((i) => (
        <motion.div
          key={i}
          className="h-3 w-3 rounded-full bg-primary"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}`;