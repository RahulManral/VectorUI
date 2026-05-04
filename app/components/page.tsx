"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ComponentWrapper } from "@/components/component-wrapper";
import { componentRegistry } from "@/lib/registry-map";
import { Suspense } from "react";

// Lazy load all components to reduce initial bundle
const ShimmerButton = dynamic(
  () => import("@/registry/buttons/shimmer-button").then(m => m.ShimmerButton),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const PulseButton = dynamic(
  () => import("@/registry/buttons/pulse-button").then(m => m.PulseButton),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const MagneticButton = dynamic(
  () => import("@/registry/buttons/magnetic-button").then(m => m.MagneticButton),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const FloatingLabelInput = dynamic(
  () => import("@/registry/inputs/floating-label-input").then(m => m.FloatingLabelInput),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const ShakeInput = dynamic(
  () => import("@/registry/inputs/shake-input").then(m => m.ShakeInput),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const GlowCard = dynamic(
  () => import("@/registry/cards/glow-card").then(m => m.GlowCard),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded animate-pulse" /> }
);
const TiltCard = dynamic(
  () => import("@/registry/cards/tilt-card").then(m => m.TiltCard),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded animate-pulse" /> }
);
const AnimatedToggle = dynamic(
  () => import("@/registry/toggles/animated-toggle").then(m => m.AnimatedToggle),
  { ssr: false, loading: () => <div className="h-8 bg-gray-200 rounded animate-pulse" /> }
);
const SpinnerLoader = dynamic(
  () => import("@/registry/loaders/spinner-loader").then(m => m.SpinnerLoader),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const DotLoader = dynamic(
  () => import("@/registry/loaders/dot-loader").then(m => m.DotLoader),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const WaveLoader = dynamic(
  () => import("@/registry/loaders/wave-loader").then(m => m.WaveLoader),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const BasicAlert = dynamic(
  () => import("@/registry/alerts/basic-alert").then(m => m.BasicAlert),
  { ssr: false, loading: () => <div className="h-20 bg-gray-200 rounded animate-pulse" /> }
);
const AnimatedAlert = dynamic(
  () => import("@/registry/alerts/animated-alert").then(m => m.AnimatedAlert),
  { ssr: false, loading: () => <div className="h-20 bg-gray-200 rounded animate-pulse" /> }
);
const AnimatedNavbar = dynamic(
  () => import("@/registry/navigation/animated-navbar").then(m => m.AnimatedNavbar),
  { ssr: false, loading: () => <div className="h-16 bg-gray-200 rounded animate-pulse" /> }
);
const TabNavigation = dynamic(
  () => import("@/registry/navigation/tab-navigation").then(m => m.TabNavigation),
  { ssr: false, loading: () => <div className="h-12 bg-gray-200 rounded animate-pulse" /> }
);
const AnimatedContainer = dynamic(
  () => import("@/registry/layouts/animated-container").then(m => m.AnimatedContainer),
  { ssr: false, loading: () => <div className="h-20 bg-gray-200 rounded animate-pulse" /> }
);
const StaggeredList = dynamic(
  () => import("@/registry/layouts/staggered-list").then(m => m.StaggeredList),
  { ssr: false, loading: () => <div className="h-32 bg-gray-200 rounded animate-pulse" /> }
);

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const groupedCategories = [
  { title: "Buttons", category: "buttons" },
  { title: "Inputs", category: "inputs" },
  { title: "Cards", category: "cards" },
  { title: "Toggles", category: "toggles" },
  { title: "Loaders", category: "loaders" },
  { title: "Alerts", category: "alerts" },
  { title: "Navigation", category: "navigation" },
  { title: "Layouts", category: "layouts" },
];

export default function ComponentsPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-4xl"
    >
      {/* Page header */}
      <motion.div variants={item} className="mb-10">
        <h1 className="text-3xl font-bold">Components</h1>
        <p className="mt-2 text-muted-foreground">
          Browse all animated components. Click &ldquo;Preview&rdquo; to see
          them live or &ldquo;Code&rdquo; to copy the source.
        </p>
      </motion.div>

      {/* Components by category */}
      {groupedCategories.map((group) => {
        const components = componentRegistry.filter(
          (c) => c.category === group.category,
        );
        if (components.length === 0) return null;

        return (
          <motion.section
            key={group.category}
            variants={item}
            className="mb-16"
          >
            <h2
              className="mb-6 border-b border-border pb-3 text-xl
                         font-semibold"
            >
              {group.title}
            </h2>
            {components.map((comp) => (
              <Suspense
                key={comp.slug}
                fallback={
                  <div className="mb-6 h-64 rounded-lg bg-gray-100 animate-pulse dark:bg-gray-800" />
                }
              >
                <ComponentWrapper
                  name={comp.name}
                  description={comp.description}
                  preview={previewMap[comp.slug]}
                  code={comp.code}
                />
              </Suspense>
            ))}
          </motion.section>
        );
      })}
    </motion.div>
  );
}