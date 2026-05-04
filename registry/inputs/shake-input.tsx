"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface ShakeInputProps {
  placeholder?: string;
  className?: string;
  validate?: (value: string) => boolean;
  errorMessage?: string;
}

export function ShakeInput({
  placeholder = "Enter email...",
  className,
  validate = (v) => v.includes("@"),
  errorMessage = "Please enter a valid email",
}: ShakeInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const controls = useAnimation();

  const handleBlur = () => {
    if (value.length > 0 && !validate(value)) {
      setError(true);
      controls.start({
        x: [0, -10, 10, -10, 10, -5, 5, 0],
        transition: { duration: 0.5 },
      });
    } else {
      setError(false);
    }
  };

  return (
    <div className={cn("w-full max-w-xs", className)}>
      <motion.div animate={controls}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-lg border bg-transparent px-3 py-3 text-sm",
            "outline-none transition-colors",
            error
              ? "border-red-500 ring-1 ring-red-500"
              : "border-border focus:border-foreground focus:ring-1 focus:ring-foreground",
          )}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center gap-1 text-xs text-red-500"
        >
          <AlertCircle className="h-3 w-3" />
          {errorMessage}
        </motion.p>
      )}
    </div>
  );
}

export const shakeInputCode = `"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface ShakeInputProps {
  placeholder?: string;
  className?: string;
  validate?: (value: string) => boolean;
  errorMessage?: string;
}

export function ShakeInput({
  placeholder = "Enter email...",
  className,
  validate = (v) => v.includes("@"),
  errorMessage = "Please enter a valid email",
}: ShakeInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const controls = useAnimation();

  const handleBlur = () => {
    if (value.length > 0 && !validate(value)) {
      setError(true);
      controls.start({
        x: [0, -10, 10, -10, 10, -5, 5, 0],
        transition: { duration: 0.5 },
      });
    } else {
      setError(false);
    }
  };

  return (
    <div className={cn("w-full max-w-xs", className)}>
      <motion.div animate={controls}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-lg border bg-transparent px-3 py-3 text-sm",
            "outline-none transition-colors",
            error
              ? "border-red-500 ring-1 ring-red-500"
              : "border-border focus:border-foreground focus:ring-1 focus:ring-foreground",
          )}
        />
      </motion.div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center gap-1 text-xs text-red-500"
        >
          <AlertCircle className="h-3 w-3" />
          {errorMessage}
        </motion.p>
      )}
    </div>
  );
}`;