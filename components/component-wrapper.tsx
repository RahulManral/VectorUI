"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Code2 } from "lucide-react";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

export function ComponentWrapper({
  name,
  description,
  preview,
  code,
}: ComponentWrapperProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Tab switcher */}
      <div className="mb-4 flex items-center gap-1 rounded-lg border border-border bg-secondary/30 p-1 w-fit">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "relative flex items-center gap-1.5 rounded-md px-3 py-1.5",
              "text-sm transition-colors",
              tab === t
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab === t && (
              <motion.div
                layoutId={`tab-${name}`}
                className="absolute inset-0 rounded-md bg-secondary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {t === "preview" ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <Code2 className="h-3.5 w-3.5" />
              )}
              {t === "preview" ? "Preview" : "Code"}
            </span>
          </button>
        ))}
      </div>

      {/* Content area */}
      {tab === "preview" ? (
        <div
          className="flex min-h-[200px] items-center justify-center rounded-lg
                      border border-border bg-card/50 p-8"
        >
          {preview}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  );
}