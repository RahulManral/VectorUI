"use client";

import { motion } from "framer-motion";
import { Blocks, Component, Palette, Clock } from "lucide-react";

const cards = [
  {
    title: "Primitives",
    description: "Core animated building blocks",
    icon: Blocks,
    count: "12+",
    color: "from-blue-500/20 to-cyan-500/20",
    delay: 0,
  },
  {
    title: "Components",
    description: "Ready-to-use UI components",
    icon: Component,
    count: "24+",
    color: "from-purple-500/20 to-pink-500/20",
    delay: 0.5,
  },
  {
    title: "Icons",
    description: "Animated icon collection",
    icon: Palette,
    count: "48+",
    color: "from-orange-500/20 to-red-500/20",
    delay: 1,
  },
  {
    title: "Coming Soon",
    description: "More components on the way",
    icon: Clock,
    count: "∞",
    color: "from-green-500/20 to-emerald-500/20",
    delay: 1.5,
  },
];

export function PreviewCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          className="group relative overflow-hidden rounded-xl border
                     border-border bg-card p-6 transition-colors
                     hover:border-primary/30"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.delay,
          }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Background gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.color}
                        opacity-0 transition-opacity group-hover:opacity-100`}
          />

          <div className="relative">
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center
                          rounded-lg border border-border bg-secondary/50"
            >
              <card.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {card.description}
            </p>
            <div
              className="mt-4 inline-flex rounded-full border border-border
                          bg-secondary/50 px-2.5 py-0.5 text-xs font-medium
                          text-muted-foreground"
            >
              {card.count} items
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}