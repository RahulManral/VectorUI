"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { EntranceAnimation, AnimatedLogo } from "@/components/entrance-animation";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function HomePage() {
  const [animationDone, setAnimationDone] = useState(false);

  const handleComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  return (
    <LayoutGroup>
      {/* Entrance overlay with centered logo */}
      {!animationDone && <EntranceAnimation onComplete={handleComplete} />}

      {/* Centered logo during entrance */}
      {!animationDone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <AnimatedLogo isEntrance layoutId="main-logo" />
        </div>
      )}

      {/* Main page content */}
      <div className="min-h-screen">
        <Header showLogo={animationDone} />
        <Hero show={animationDone} />

        {/* Footer */}
        {animationDone && (
          <footer className="border-t border-border">
            <div
              className="mx-auto flex max-w-7xl items-center justify-between
                          px-6 py-8"
            >
              <p className="text-sm text-muted-foreground">
                © 2026 VectorUI. Built using Next.js and Framer
                Motion.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/RahulManral/VectorUI"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </LayoutGroup>
  );
}