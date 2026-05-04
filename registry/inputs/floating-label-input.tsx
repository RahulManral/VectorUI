"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  className?: string;
}

export function FloatingLabelInput({
  label,
  type = "text",
  className,
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  return (
    <div className={cn("relative w-full max-w-xs", className)}>
      <motion.label
        className="pointer-events-none absolute left-3 text-muted-foreground"
        animate={{
          top: isActive ? "0px" : "50%",
          y: isActive ? "-50%" : "-50%",
          scale: isActive ? 0.8 : 1,
          color: focused
            ? "hsl(var(--foreground))"
            : "hsl(var(--muted-foreground))",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className={cn(isActive && "bg-background px-1 text-xs")}>
          {label}
        </span>
      </motion.label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "w-full rounded-lg border bg-transparent px-3 py-3 text-sm",
          "outline-none transition-colors",
          focused
            ? "border-foreground ring-1 ring-foreground"
            : "border-border",
        )}
      />
    </div>
  );
}

export const floatingLabelInputCode = `"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  className?: string;
}

export function FloatingLabelInput({
  label,
  type = "text",
  className,
}: FloatingLabelInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  return (
    <div className={cn("relative w-full max-w-xs", className)}>
      <motion.label
        className="pointer-events-none absolute left-3 text-muted-foreground"
        animate={{
          top: isActive ? "0px" : "50%",
          y: isActive ? "-50%" : "-50%",
          scale: isActive ? 0.8 : 1,
          color: focused
            ? "hsl(var(--foreground))"
            : "hsl(var(--muted-foreground))",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className={cn(isActive && "bg-background px-1 text-xs")}>
          {label}
        </span>
      </motion.label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          "w-full rounded-lg border bg-transparent px-3 py-3 text-sm",
          "outline-none transition-colors",
          focused
            ? "border-foreground ring-1 ring-foreground"
            : "border-border",
        )}
      />
    </div>
  );
}`;