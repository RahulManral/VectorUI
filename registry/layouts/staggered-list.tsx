"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredListProps {
  items: string[];
  className?: string;
}

export function StaggeredList({ items, className }: StaggeredListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("space-y-2", className)}
    >
      {items.map((listItem, idx) => (
        <motion.li
          key={idx}
          variants={item}
          className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-3"
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm">{listItem}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export const staggeredListCode = `"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredListProps {
  items: string[];
  className?: string;
}

export function StaggeredList({ items, className }: StaggeredListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("space-y-2", className)}
    >
      {items.map((listItem, idx) => (
        <motion.li
          key={idx}
          variants={item}
          className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-3"
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm">{listItem}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}`;