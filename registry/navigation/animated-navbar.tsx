"use client";

import { motion } from "framer-motion";
import { Home, Settings, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

interface AnimatedNavbarProps {
  items?: NavItem[];
  className?: string;
}

export function AnimatedNavbar({
  items = [
    { label: "Home", icon: Home, active: true },
    { label: "Settings", icon: Settings },
    { label: "Profile", icon: User },
  ],
  className,
}: AnimatedNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      className={cn(
        "flex items-center justify-between rounded-full border border-border",
        "bg-card/50 backdrop-blur-md px-6 py-3",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className="h-8 w-8 rounded-full bg-primary"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-semibold">Animate UI</span>
      </div>

      {/* Desktop menu */}
      <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIndex;

          return (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-4 py-2",
                "transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-border p-2 md:hidden"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </motion.nav>
  );
}

export const animatedNavbarCode = `"use client";

import { motion } from "framer-motion";
import { Home, Settings, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

interface AnimatedNavbarProps {
  items?: NavItem[];
  className?: string;
}

export function AnimatedNavbar({
  items = [
    { label: "Home", icon: Home, active: true },
    { label: "Settings", icon: Settings },
    { label: "Profile", icon: User },
  ],
  className,
}: AnimatedNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      className={cn(
        "flex items-center justify-between rounded-full border border-border",
        "bg-card/50 backdrop-blur-md px-6 py-3",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className="h-8 w-8 rounded-full bg-primary"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-semibold">Animate UI</span>
      </div>

      <div className="hidden flex-1 items-center justify-center gap-2 md:flex">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIndex;

          return (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-4 py-2",
                "transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-border p-2 md:hidden"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </motion.nav>
  );
}`
;