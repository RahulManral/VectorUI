"use client";

import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  code: string;
  className?: string;
}

export function CopyButton({ code, className }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copy(code);
    if (success) {
      toast.success("Copied!", {
        description: "Code copied to clipboard.",
        duration: 2000,
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md",
        "border border-border bg-secondary/50 text-muted-foreground",
        "transition-colors hover:bg-secondary hover:text-foreground",
        className,
      )}
      aria-label="Copy code"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}