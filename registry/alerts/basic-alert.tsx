"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BasicAlertProps {
  type?: "info" | "success" | "warning" | "error";
  title: string;
  description?: string;
  closeable?: boolean;
}

export function BasicAlert({
  type = "info",
  title,
  description,
  closeable = true,
}: BasicAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400",
      text: "text-blue-900 dark:text-blue-100",
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      icon: "text-green-600 dark:text-green-400",
      text: "text-green-900 dark:text-green-100",
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950",
      border: "border-amber-200 dark:border-amber-800",
      icon: "text-amber-600 dark:text-amber-400",
      text: "text-amber-900 dark:text-amber-100",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      icon: "text-red-600 dark:text-red-400",
      text: "text-red-900 dark:text-red-100",
    },
  };

  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  };

  const Icon = icons[type];
  const style = styles[type];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        "rounded-lg border p-4",
        style.bg,
        style.border,
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 flex-shrink-0", style.icon)} />
        <div className="flex-1">
          <h3 className={cn("font-semibold", style.text)}>{title}</h3>
          {description && (
            <p className={cn("mt-1 text-sm", style.text)}>
              {description}
            </p>
          )}
        </div>
        {closeable && (
          <button
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex-shrink-0 rounded hover:opacity-75",
              style.text,
            )}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export const basicAlertCode = `"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BasicAlertProps {
  type?: "info" | "success" | "warning" | "error";
  title: string;
  description?: string;
  closeable?: boolean;
}

export function BasicAlert({
  type = "info",
  title,
  description,
  closeable = true,
}: BasicAlertProps) {
  const [isOpen, setIsOpen] = useState(true);

  const styles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400",
      text: "text-blue-900 dark:text-blue-100",
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      icon: "text-green-600 dark:text-green-400",
      text: "text-green-900 dark:text-green-100",
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950",
      border: "border-amber-200 dark:border-amber-800",
      icon: "text-amber-600 dark:text-amber-400",
      text: "text-amber-900 dark:text-amber-100",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      icon: "text-red-600 dark:text-red-400",
      text: "text-red-900 dark:text-red-100",
    },
  };

  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  };

  const Icon = icons[type];
  const style = styles[type];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        "rounded-lg border p-4",
        style.bg,
        style.border,
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 flex-shrink-0", style.icon)} />
        <div className="flex-1">
          <h3 className={cn("font-semibold", style.text)}>{title}</h3>
          {description && (
            <p className={cn("mt-1 text-sm", style.text)}>
              {description}
            </p>
          )}
        </div>
        {closeable && (
          <button
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex-shrink-0 rounded hover:opacity-75",
              style.text,
            )}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}`;
