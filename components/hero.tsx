"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.473.597.614.957.142.36.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
];

const codeLines = [
  `import { motion } from "framer-motion";`,
  ``,
  `export function FadeIn({ children }) {`,
  `  return (`,
  `    <motion.div`,
  `      initial={{ opacity: 0, y: 20 }}`,
  `      animate={{ opacity: 1, y: 0 }}`,
  `      transition={{ duration: 0.5 }}`,
  `    >`,
  `      {children}`,
  `    </motion.div>`,
  `  );`,
  `}`,
];

function AnimatedCodeBlock() {
  const [displayedChars, setDisplayedChars] = useState(0);
  const fullText = codeLines.join("\n");
  const totalChars = fullText.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const type = () => {
      setDisplayedChars((prev) => {
        if (prev >= totalChars) {
          // Pause then restart
          timeoutRef.current = setTimeout(() => {
            setDisplayedChars(0);
          }, 3000);
          return prev;
        }
        return prev + 1;
      });
    };

    const interval = setInterval(type, 35);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [totalChars]);

  // Build visible text character by character
  const visibleText = fullText.slice(0, displayedChars);
  const visibleLines = visibleText.split("\n");

  return (
    <div
      className="mx-auto max-w-2xl overflow-hidden rounded-xl border
                 border-border bg-secondary/30 shadow-2xl"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <div className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-muted-foreground">
          fade-in.tsx
        </span>
      </div>

      {/* Code content - fixed height */}
      <div className="h-[340px] overflow-hidden p-6 font-mono text-sm leading-6">
        {codeLines.map((line, lineIndex) => {
          const lineStart = codeLines
            .slice(0, lineIndex)
            .reduce((acc, l) => acc + l.length + 1, 0);
          const lineEnd = lineStart + line.length;
          const charsVisible = Math.max(
            0,
            Math.min(line.length, displayedChars - lineStart)
          );
          const isCurrentLine =
            displayedChars >= lineStart && displayedChars < lineEnd;

          return (
            <div key={lineIndex} className="flex">
              <span className="mr-4 inline-block w-5 text-right text-muted-foreground/40 select-none">
                {lineIndex + 1}
              </span>
              <span className="text-foreground/90">
                {line.slice(0, charsVisible)}
              </span>
              {isCurrentLine && displayedChars < totalChars && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block h-[18px] w-[2px] bg-primary"
                />
              )}
            </div>
          );
        })}
        {/* Show cursor at end when done typing */}
        {displayedChars >= totalChars && (
          <div className="flex">
            <span className="mr-4 inline-block w-5" />
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block h-[18px] w-[2px] bg-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <motion.section
      className="relative mx-auto max-w-7xl px-6 pb-24 pt-16"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2">
        <div
          className="h-full w-full opacity-20 dark:opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--primary) / 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="mx-auto max-w-4xl text-center text-4xl font-bold
                   tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Animate your UI with{" "}
        <span
          className="bg-gradient-to-r from-primary via-primary/80
                     to-primary/60 bg-clip-text text-transparent"
        >
          smooth style
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="mx-auto mt-6 max-w-2xl text-center text-lg
                   text-muted-foreground"
      >
        A collection of beautifully crafted, animated React components. Copy and
        paste into your apps. Built with Tailwind CSS, Framer Motion, and
        TypeScript.
      </motion.p>

      {/* Tech Stack */}
      <motion.div
        variants={item}
        className="mt-8 flex items-center justify-center gap-4"
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-1.5 rounded-md border border-border
                       bg-secondary/30 px-3 py-1.5 text-xs text-muted-foreground
                       transition-colors hover:text-foreground"
          >
            {tech.icon}
            {tech.name}
          </div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <Link
          href="/components"
          className="group flex items-center gap-2 rounded-lg bg-primary
                     px-6 py-3 text-sm font-medium text-primary-foreground
                     transition-all hover:opacity-90"
        >
          Get Started
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="/components"
          className="flex items-center gap-2 rounded-lg border border-border
                     bg-secondary/50 px-6 py-3 text-sm font-medium
                     transition-colors hover:bg-secondary"
        >
          Browse Components
        </Link>
      </motion.div>

      {/* Animated Code Block */}
      <motion.div variants={item} className="mt-8">
        <AnimatedCodeBlock />
      </motion.div>
    </motion.section>
  );
}