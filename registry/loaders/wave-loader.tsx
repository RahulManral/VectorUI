"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveLoaderProps {
  className?: string;
}

export function WaveLoader({ className }: WaveLoaderProps) {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className={cn("flex items-end gap-1", className)}>
      {bars.map((i) => (
        <motion.div
          key={i}
          className="h-8 w-1.5 rounded-full bg-primary"
          animate={{
            height: [20, 40, 20],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export const waveLoaderCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveLoaderProps {
  className?: string;
}

export function WaveLoader({ className }: WaveLoaderProps) {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className={cn("flex items-end gap-1", className)}>
      {bars.map((i) => (
        <motion.div
          key={i}
          className="h-8 w-1.5 rounded-full bg-primary"
          animate={{
            height: [20, 40, 20],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}`;