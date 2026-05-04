"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs?: TabItem[];
  onTabChange?: (tabId: string) => void;
}

export function TabNavigation({
  tabs = [
    { id: "tab1", label: "Overview" },
    { id: "tab2", label: "Settings" },
    { id: "tab3", label: "Activity" },
  ],
  onTabChange,
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="flex gap-2 border-b border-border">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "relative px-4 py-3 text-sm font-medium transition-colors",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              />
            )}
            {tab.label}
          </motion.button>
        );
      })}
    </div>
  );
}

export const tabNavigationCode = `"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs?: TabItem[];
  onTabChange?: (tabId: string) => void;
}

export function TabNavigation({
  tabs = [
    { id: "tab1", label: "Overview" },
    { id: "tab2", label: "Settings" },
    { id: "tab3", label: "Activity" },
  ],
  onTabChange,
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="flex gap-2 border-b border-border">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "relative px-4 py-3 text-sm font-medium transition-colors",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              />
            )}
            {tab.label}
          </motion.button>
        );
      })}
    </div>
  );
}`;