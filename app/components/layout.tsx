"use client";

import { Sidebar } from "@/components/sidebar";
import { MobileDrawer } from "@/components/mobile-drawer";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/entrance-animation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <div className="fixed inset-y-0 left-0 z-30 w-64">
          <div className="flex h-16 items-center gap-2 border-b border-border px-4">
            <Link href="/" className="flex items-center gap-2">
              <AnimatedLogo layoutId="dashboard-logo" />
            </Link>
          </div>
          <Sidebar className="h-[calc(100vh-4rem)]" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        {/* Top bar */}
        <header
          className="sticky top-0 z-20 flex h-16 items-center justify-between
                      border-b border-border bg-background/80 px-4
                      backdrop-blur-xl lg:px-8"
        >
          <div className="flex items-center gap-3">
            <MobileDrawer />
            <Link
              href="/"
              className="hidden items-center gap-1.5 text-sm
                         text-muted-foreground hover:text-foreground sm:flex"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
          </div>
          <ThemeToggle />
        </header>

        {/* Page content */}
        <main className="px-4 py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}