"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedLogo } from "./entrance-animation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showLogo: boolean;
  className?: string;
}

export function Header({ showLogo, className }: HeaderProps) {
  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/50",
        "bg-background/80 backdrop-blur-xl",
        className,
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: showLogo ? 1 : 0, y: showLogo ? 0 : -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          {showLogo && <AnimatedLogo layoutId="main-logo" />}
        </Link>



        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/RahulManral/VectorUI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md
                       border border-border bg-secondary/50
                       transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            href="/components"
            className="hidden items-center gap-1.5 rounded-md bg-primary
                       px-4 py-2 text-sm font-medium text-primary-foreground
                       transition-opacity hover:opacity-90 sm:flex"
          >
            Get Started
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}