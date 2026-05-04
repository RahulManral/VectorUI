"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PulseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PulseButton({
  children,
  className,
  onClick,
}: PulseButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative rounded-lg bg-primary px-6 py-3 text-sm font-medium",
        "text-primary-foreground",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse rings */}
      <motion.span
        className="absolute inset-0 rounded-lg border-2 border-primary"
        animate={{
          scale: [1, 1.4],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-lg border-2 border-primary"
        animate={{
          scale: [1, 1.4],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export const pulseButtonCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PulseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PulseButton({
  children,
  className,
  onClick,
}: PulseButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative rounded-lg bg-primary px-6 py-3 text-sm font-medium",
        "text-primary-foreground",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-lg border-2 border-primary"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-lg border-2 border-primary"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}`;