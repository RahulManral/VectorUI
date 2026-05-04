"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  RectangleHorizontal,
  TextCursorInput,
  CreditCard,
  ToggleLeft,
  Loader,
  AlertTriangle,
  Navigation,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SidebarCategory {
  name: string;
  slug: string;
  icon: React.ElementType;
  items: { name: string; slug: string }[];
}

export const categories: SidebarCategory[] = [
  {
    name: "Buttons",
    slug: "buttons",
    icon: RectangleHorizontal,
    items: [
      { name: "Shimmer Button", slug: "shimmer-button" },
      { name: "Pulse Button", slug: "pulse-button" },
      { name: "Magnetic Button", slug: "magnetic-button" },
    ],
  },
  {
    name: "Inputs",
    slug: "inputs",
    icon: TextCursorInput,
    items: [
      { name: "Floating Label", slug: "floating-label-input" },
      { name: "Shake Input", slug: "shake-input" },
    ],
  },
  {
    name: "Cards",
    slug: "cards",
    icon: CreditCard,
    items: [
      { name: "Glow Card", slug: "glow-card" },
      { name: "Tilt Card", slug: "tilt-card" },
    ],
  },
  {
    name: "Toggles",
    slug: "toggles",
    icon: ToggleLeft,
    items: [{ name: "Animated Toggle", slug: "animated-toggle" }],
  },
  {
    name: "Loaders",
    slug: "loaders",
    icon: Loader,
    items: [
      { name: "Spinner Loader", slug: "spinner-loader" },
      { name: "Dot Loader", slug: "dot-loader" },
      { name: "Wave Loader", slug: "wave-loader" },
    ],
  },
  {
    name: "Alerts",
    slug: "alerts",
    icon: AlertTriangle,
    items: [
      { name: "Basic Alert", slug: "basic-alert" },
      { name: "Animated Alert", slug: "animated-alert" },
    ],
  },
  {
    name: "Navigation",
    slug: "navigation",
    icon: Navigation,
    items: [
      { name: "Animated Navbar", slug: "animated-navbar" },
      { name: "Tab Navigation", slug: "tab-navigation" },
    ],
  },
  {
    name: "Layouts",
    slug: "layouts",
    icon: LayoutGrid,
    items: [
      { name: "Animated Container", slug: "animated-container" },
      { name: "Staggered List", slug: "staggered-list" },
    ],
  },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
  buttons: true,
  inputs: true,
  cards: true,
  toggles: true,
  loaders: true,
  alerts: true,
  navigation: true,
  layouts: true,
  });

  const toggleCategory = (slug: string) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <nav
      className={cn(
        "flex h-full w-64 flex-col overflow-y-auto border-r border-border",
        "bg-background px-3 py-6",
        className,
      )}
    >
      <div className="mb-4 px-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Components
        </h2>
      </div>

      <div className="space-y-1">
        {categories.map((category) => {
          const isExpanded = expanded[category.slug] ?? false;
          const hasItems = category.items.length > 0;
          const Icon = category.icon;

          return (
            <div key={category.slug}>
              <button
                onClick={() => hasItems && toggleCategory(category.slug)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2",
                  "text-sm transition-colors",
                  hasItems
                    ? "hover:bg-secondary"
                    : "cursor-default text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="flex-1 text-left">{category.name}</span>
                {hasItems && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-muted-foreground transition-transform",
                      isExpanded && "rotate-180",
                    )}
                  />
                )}
                {!hasItems && (
                  <span
                    className="rounded-full bg-secondary px-1.5 py-0.5
                                text-[10px] text-muted-foreground"
                  >
                    Soon
                  </span>
                )}
              </button>

              {hasItems && isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-5 mt-1 space-y-0.5 border-l border-border pl-3"
                >
                  {category.items.map((item) => {
                    const href = `/components/${item.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={item.slug}
                        href={href}
                        className={cn(
                          "block rounded-md px-3 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-secondary text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}