import { ComponentType } from "react";

export interface RegistryEntry {
  name: string;
  description: string;
  category: string;
  slug: string;
  component: ComponentType;
  code: string;
}

export const registry: Record<string, RegistryEntry> = {};

export function registerComponent(entry: RegistryEntry) {
  registry[entry.slug] = entry;
}