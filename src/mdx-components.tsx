// src/mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components = {}): MDXComponents {
  return {
    // Your custom component mappings go here
    ...components,
  };
}
