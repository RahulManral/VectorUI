import { ShimmerButton, shimmerButtonCode } from "@/registry/buttons/shimmer-button";
import { PulseButton, pulseButtonCode } from "@/registry/buttons/pulse-button";
import { MagneticButton, magneticButtonCode } from "@/registry/buttons/magnetic-button";
import { FloatingLabelInput, floatingLabelInputCode } from "@/registry/inputs/floating-label-input";
import { ShakeInput, shakeInputCode } from "@/registry/inputs/shake-input";
import { GlowCard, glowCardCode } from "@/registry/cards/glow-card";
import { TiltCard, tiltCardCode } from "@/registry/cards/tilt-card";
import { AnimatedToggle, animatedToggleCode } from "@/registry/toggles/animated-toggle";
import { SpinnerLoader, spinnerLoaderCode } from "@/registry/loaders/spinner-loader";
import { DotLoader, dotLoaderCode } from "@/registry/loaders/dot-loader";
import { WaveLoader, waveLoaderCode } from "@/registry/loaders/wave-loader";
import { BasicAlert, basicAlertCode } from "@/registry/alerts/basic-alert";
import { AnimatedAlert, animatedAlertCode } from "@/registry/alerts/animated-alert";
import { AnimatedNavbar, animatedNavbarCode } from "@/registry/navigation/animated-navbar";
import { TabNavigation, tabNavigationCode } from "@/registry/navigation/tab-navigation";
import { AnimatedContainer, animatedContainerCode } from "@/registry/layouts/animated-container";
import { StaggeredList, staggeredListCode } from "@/registry/layouts/staggered-list";
import { ReactNode } from "react";

export interface ComponentEntry {
  name: string;
  slug: string;
  description: string;
  category: string;
  preview: ReactNode;
  code: string;
}

export const componentRegistry: ComponentEntry[] = [
  // Buttons
  {
    name: "Shimmer Button",
    slug: "shimmer-button",
    description: "A button with a moving shimmer highlight effect on hover.",
    category: "buttons",
    preview: null,
    code: shimmerButtonCode,
  },
  {
    name: "Pulse Button",
    slug: "pulse-button",
    description: "A button with radiating pulse ring animations.",
    category: "buttons",
    preview: null,
    code: pulseButtonCode,
  },
  {
    name: "Magnetic Button",
    slug: "magnetic-button",
    description: "A button that follows the cursor with a magnetic spring effect.",
    category: "buttons",
    preview: null,
    code: magneticButtonCode,
  },
  // Inputs
  {
    name: "Floating Label Input",
    slug: "floating-label-input",
    description: "An input where the label animates from placeholder to a floating label on focus.",
    category: "inputs",
    preview: null,
    code: floatingLabelInputCode,
  },
  {
    name: "Shake Input",
    slug: "shake-input",
    description: "An input that shakes with an error message on invalid input.",
    category: "inputs",
    preview: null,
    code: shakeInputCode,
  },
  // Cards
  {
    name: "Glow Card",
    slug: "glow-card",
    description: "A card with a radial glow that follows the mouse cursor.",
    category: "cards",
    preview: null,
    code: glowCardCode,
  },
  {
    name: "Tilt Card",
    slug: "tilt-card",
    description: "A card with a 3D tilt effect driven by mouse position.",
    category: "cards",
    preview: null,
    code: tiltCardCode,
  },
  // Toggles
  {
    name: "Animated Toggle",
    slug: "animated-toggle",
    description: "A smooth spring-animated toggle switch.",
    category: "toggles",
    preview: null,
    code: animatedToggleCode,
  },
  // Loaders
  {
    name: "Spinner Loader",
    slug: "spinner-loader",
    description: "A rotating spinner loading animation.",
    category: "loaders",
    preview: null,
    code: spinnerLoaderCode,
  },
  {
    name: "Dot Loader",
    slug: "dot-loader",
    description: "Animated dots that scale and fade in sequence.",
    category: "loaders",
    preview: null,
    code: dotLoaderCode,
  },
  {
    name: "Wave Loader",
    slug: "wave-loader",
    description: "Animated bars that wave up and down.",
    category: "loaders",
    preview: null,
    code: waveLoaderCode,
  },
  // Alerts
  {
    name: "Basic Alert",
    slug: "basic-alert",
    description: "Customizable alert component with different types (info, success, warning, error).",
    category: "alerts",
    preview: null,
    code: basicAlertCode,
  },
  {
    name: "Animated Alert",
    slug: "animated-alert",
    description: "Auto-closing animated success alert with smooth animations.",
    category: "alerts",
    preview: null,
    code: animatedAlertCode,
  },
  // Navigation
  {
    name: "Animated Navbar",
    slug: "animated-navbar",
    description: "Animated navigation bar with active pill indicator.",
    category: "navigation",
    preview: null,
    code: animatedNavbarCode,
  },
  {
    name: "Tab Navigation",
    slug: "tab-navigation",
    description: "Smooth tab navigation with animated underline.",
    category: "navigation",
    preview: null,
    code: tabNavigationCode,
  },
  // Layouts
  {
    name: "Animated Container",
    slug: "animated-container",
    description: "Container with multiple animation variants (fade, slide, scale, blur).",
    category: "layouts",
    preview: null,
    code: animatedContainerCode,
  },
  {
    name: "Staggered List",
    slug: "staggered-list",
    description: "List items that animate in with a staggered effect.",
    category: "layouts",
    preview: null,
    code: staggeredListCode,
  },
];

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return componentRegistry.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: string): ComponentEntry[] {
  return componentRegistry.filter((c) => c.category === category);
}