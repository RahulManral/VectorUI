"use client";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

interface AnimatedAlertProps {
  message: string;
  autoClose?: number;
}

export function AnimatedAlert({
  message,
  autoClose = 5000,
}: AnimatedAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => setIsOpen(false), autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
      </motion.div>
      <p className="flex-1 text-sm font-medium text-green-900 dark:text-green-100">
        {message}
      </p>
      <button
        onClick={() => setIsOpen(false)}
        className="rounded hover:opacity-75"
      >
        <X className="h-4 w-4 text-green-600 dark:text-green-400" />
      </button>
    </motion.div>
  );
}

export const animatedAlertCode = `"use client";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

interface AnimatedAlertProps {
  message: string;
  autoClose?: number;
}

export function AnimatedAlert({
  message,
  autoClose = 5000,
}: AnimatedAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => setIsOpen(false), autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
      </motion.div>
      <p className="flex-1 text-sm font-medium text-green-900 dark:text-green-100">
        {message}
      </p>
      <button
        onClick={() => setIsOpen(false)}
        className="rounded hover:opacity-75"
      >
        <X className="h-4 w-4 text-green-600 dark:text-green-400" />
      </button>
    </motion.div>
  );
}`;