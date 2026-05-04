"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentWrapper } from "@/components/component-wrapper";
import { componentRegistry, getComponentBySlug } from "@/lib/registry-map";

import { ShimmerButton } from "@/registry/buttons/shimmer-button";
import { PulseButton } from "@/registry/buttons/pulse-button";
import { MagneticButton } from "@/registry/buttons/magnetic-button";
import { FloatingLabelInput } from "@/registry/inputs/floating-label-input";
import { ShakeInput } from "@/registry/inputs/shake-input";
import { GlowCard } from "@/registry/cards/glow-card";
import { TiltCard } from "@/registry/cards/tilt-card";
import { AnimatedToggle } from "@/registry/toggles/animated-toggle";
import { SpinnerLoader } from "@/registry/loaders/spinner-loader";
import { DotLoader } from "@/registry/loaders/dot-loader";
import { WaveLoader } from "@/registry/loaders/wave-loader";
import { BasicAlert } from "@/registry/alerts/basic-alert";
import { AnimatedAlert } from "@/registry/alerts/animated-alert";
import { AnimatedNavbar } from "@/registry/navigation/animated-navbar";
import { TabNavigation } from "@/registry/navigation/tab-navigation";
import { AnimatedContainer } from "@/registry/layouts/animated-container";
import { StaggeredList } from "@/registry/layouts/staggered-list";

const previewMap: Record<string, React.ReactNode> = {
  "shimmer-button": (
    <div className="flex justify-center">
      <ShimmerButton>Shimmer Effect</ShimmerButton>
    </div>
  ),
  "pulse-button": (
    <div className="flex justify-center">
      <PulseButton>Pulse Effect</PulseButton>
    </div>
  ),
  "magnetic-button": (
    <div className="flex justify-center">
      <MagneticButton>Hover & Drag Me</MagneticButton>
    </div>
  ),
  "floating-label-input": (
    <div className="flex justify-center">
      <FloatingLabelInput label="Your name" />
    </div>
  ),
  "shake-input": (
    <div className="flex justify-center">
      <ShakeInput placeholder="Enter email..." />
    </div>
  ),
  "glow-card": (
    <GlowCard className="w-full max-w-sm">
      <h4 className="text-lg font-semibold">Glow Card</h4>
      <p className="mt-2 text-sm text-muted-foreground">
        Move your mouse around to see the glow follow your cursor.
      </p>
    </GlowCard>
  ),
  "tilt-card": (
    <TiltCard className="w-full max-w-sm">
      <h4 className="text-lg font-semibold">Tilt Card</h4>
      <p className="mt-2 text-sm text-muted-foreground">
        Hover to experience a smooth 3D tilt effect.
      </p>
    </TiltCard>
  ),
  "animated-toggle": (
    <div className="flex items-center gap-3">
      <AnimatedToggle />
      <span className="text-sm text-muted-foreground">Toggle me</span>
    </div>
  ),
  "spinner-loader": (
    <div className="flex justify-center">
      <SpinnerLoader size="md" />
    </div>
  ),
  "dot-loader": (
    <div className="flex justify-center">
      <DotLoader />
    </div>
  ),
  "wave-loader": (
    <div className="flex justify-center">
      <WaveLoader />
    </div>
  ),
  "basic-alert": (
    <BasicAlert
      type="success"
      title="Success!"
      description="Your changes have been saved successfully."
    />
  ),
  "animated-alert": (
    <AnimatedAlert message="Operation completed successfully!" />
  ),
  "animated-navbar": (
    <div className="w-full">
      <AnimatedNavbar />
    </div>
  ),
  "tab-navigation": (
    <div className="w-full">
      <TabNavigation />
    </div>
  ),
  "animated-container": (
    <AnimatedContainer variant="fade">
      <p className="text-center text-sm text-muted-foreground">
        This container animates in when you view it
      </p>
    </AnimatedContainer>
  ),
  "staggered-list": (
    <StaggeredList items={["Item one", "Item two", "Item three"]} />
  ),
};

export default function ComponentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const entry = getComponentBySlug(slug);

  if (!entry) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Component Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The component &ldquo;{slug}&rdquo; doesn&apos;t exist yet.
        </p>
        <Link
          href="/components"
          className="mt-6 flex items-center gap-2 rounded-lg bg-primary
                     px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Components
        </Link>
      </div>
    );
  }

  // Find prev / next
  const currentIndex = componentRegistry.findIndex((c) => c.slug === slug);
  const prev =
    currentIndex > 0 ? componentRegistry[currentIndex - 1] : null;
  const next =
    currentIndex < componentRegistry.length - 1
      ? componentRegistry[currentIndex + 1]
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl"
    >
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/components"
          className="hover:text-foreground transition-colors"
        >
          Components
        </Link>
        <span>/</span>
        <span className="capitalize text-foreground">{entry.category}</span>
        <span>/</span>
        <span className="text-foreground">{entry.name}</span>
      </div>

      {/* Component */}
      <ComponentWrapper
        name={entry.name}
        description={entry.description}
        preview={previewMap[entry.slug]}
        code={entry.code}
      />

      {/* Installation snippet */}
      <div className="mb-12">
        <h3 className="mb-3 text-lg font-semibold">Installation</h3>
        <div
          className="rounded-lg border border-border bg-card/50 p-4
                      font-mono text-sm"
        >
          <p className="text-muted-foreground">
            {`// Copy the component into your project`}
          </p>
          <p className="mt-1">
            <span className="text-blue-400">cp</span>{" "}
            {`registry/${entry.category}/${entry.slug}.tsx`}{" "}
            <span className="text-muted-foreground">
              components/ui/{entry.slug}.tsx
            </span>
          </p>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/components/${prev.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground
                       transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {prev.name}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/components/${next.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground
                       transition-colors hover:text-foreground"
          >
            {next.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}