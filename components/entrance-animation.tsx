"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Webhook  } from "lucide-react";

interface EntranceAnimationProps {
  onComplete: () => void;
}

export function EntranceAnimation({ onComplete }: EntranceAnimationProps) {
  const [phase, setPhase] = useState<"center" | "moving" | "done">("center");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("moving"), 800);
    const timer2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Glow effect behind logo */}
          <motion.div
            className="absolute h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}  
    </AnimatePresence>
  );
}

export function AnimatedLogo({
  isEntrance = false,
  layoutId = "main-logo",
}: {
  isEntrance?: boolean;
  layoutId?: string;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      className="flex items-center gap-2.5"
      initial={isEntrance ? { scale: 2, opacity: 0 } : undefined}
      animate={isEntrance ? { scale: 2, opacity: 1 } : { scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 1,
      }}
    >
      <motion.div
        className="flex h-8 w-8 items-center justify-center rounded-lg
                    border border-border bg-gradient-to-br from-primary/20
                    to-primary/5"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.4 }}
      >
        
        <Webhook className="h-6 w-6 text-primary" />
      </motion.div>
      <span className="text-lg font-bold tracking-tight text-foreground">
       VectorUI
      </span>
    </motion.div>
  );
}