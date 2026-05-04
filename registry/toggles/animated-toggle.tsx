"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedToggleProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function AnimatedToggle({
  defaultChecked = false,
  onChange,
  className,
}: AnimatedToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative h-7 w-12 rounded-full p-0.5 transition-colors",
        checked ? "bg-primary" : "bg-secondary",
        className,
      )}
      aria-checked={checked}
      role="switch"
    >
      <motion.div
        className="h-6 w-6 rounded-full bg-white shadow-md"
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}

export const animatedToggleCode = `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedToggleProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function AnimatedToggle({
  defaultChecked = false,
  onChange,
  className,
}: AnimatedToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative h-7 w-12 rounded-full p-0.5 transition-colors",
        checked ? "bg-primary" : "bg-secondary",
        className,
      )}
      aria-checked={checked}
      role="switch"
    >
      <motion.div
        className="h-6 w-6 rounded-full bg-white shadow-md"
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}`;