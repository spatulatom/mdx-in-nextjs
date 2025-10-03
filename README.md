This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Key Routes to Explore

- `/` - Home page with search functionality
- `/mdx-example` - Simple MDX demonstration
- `/mdx-explained` - Comprehensive MDX pipeline documentation with styled content
- `/dashboard` - Parallel routes demo with analytics and team sections
- `/admin` - Admin dashboard with parallel user/admin views
- `/photos` - Photo gallery with intercepted routes (modal overlay)
- `/search/[query]` - Dynamic search results page

## Features Implemented

This project demonstrates modern Next.js App Router features and MDX integration. Here's what has been implemented (in order of addition):

1. **Project Setup**
   - Next.js 15 with App Router
   - TypeScript configuration
   - TailwindCSS integration
   - Turbopack for faster builds

2. **MDX Integration**
   - Setup with `@next/mdx` and `@mdx-js/loader`
   - Custom MDX components configuration
   - Support for both `.md` and `.mdx` file extensions
   - Frontmatter parsing with `remark-frontmatter` and `remark-mdx-frontmatter`
   - Professional styling for all MDX elements
   - Interactive code blocks with copy-to-clipboard functionality

3. **Basic MDX Pages**
   - `/mdx-example` - A simple MDX demonstration page
   - `/mdx-explained` - Comprehensive documentation on MDX pipeline

4. **Advanced Routing Patterns**
   - Dynamic routes with `/photos/[id]`
   - Search functionality with `/search/[query]`

5. **Parallel Routes**
   - Dashboard with parallel sections using `@analytics` and `@team` slots
   - Admin section with `@admin` and `@user` slots
   - Independent loading and rendering of each section
   - Synchronized URL-based rendering across slots:
     - Navigating to `/dashboard/settings` renders both the main settings page AND the team settings page (`@team/settings`)
     - This demonstrates how parallel routes respond to the same URL patterns
     - Slots without matching routes show their default content (fallback)
       - Note: While this example uses static routes, the true power of parallel routes becomes evident when combined with server-side rendering and Suspense:
     - Different sections can load independently at their own pace
     - Loading states can be shown for slow-loading sections without blocking faster ones
     - Each parallel route can have its own data fetching strategy and loading boundary

6. **Intercepted Routes**

7. **Intercepted Routes**
   - Modal implementation via route interception
   - Photos modal via `@modal/(.)([id])/page.tsx`
   - Maintains parent route context while showing modal overlay

8. **Client Components**
   - Modal component with keyboard handlers
   - Search input with navigation functionality
   - Autocomplete suggestions for search input
     - Real-time filtering as user types
     - Keyboard navigation (arrow keys, enter, escape)
     - Click selection of suggestions

9. **Slot-Based UI Architecture**
   - Default slot fallbacks
   - Nested parallel routes for complex UI structures

## MDX Styling & Customization

### Overview

This project includes a comprehensive MDX styling system that transforms plain Markdown into beautifully styled content. The styling is achieved through custom component mappings in `src/mdx-components.tsx`.

### Key Features

1. **Custom Component Mappings**
   - All HTML elements (h1-h6, p, ul, ol, code, pre, etc.) are mapped to styled React components
   - Automatic application across all MDX files without manual imports
   - Consistent styling throughout the documentation

2. **Interactive Code Blocks**
   - Copy-to-clipboard button in the top-right corner of every code block
   - Button appears with 70% opacity and becomes fully opaque on hover
   - "Copied!" confirmation message after successful copy
   - Client-side component for interactivity (`src/components/CodeBlock.tsx`)

3. **Typography & Spacing**
   - Professional heading hierarchy with proper sizing and margins
   - Optimal line-height and spacing for readability
   - Dark mode support with Tailwind CSS classes
   - Responsive layout with max-width container

4. **Frontmatter Support**
   - YAML frontmatter parsing for metadata (title, description, etc.)
   - Frontmatter is hidden from rendered output
   - Can be used for page metadata and SEO

### Dependencies Added

```json
{
  "dependencies": {
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "^15.5.2",
    "@types/mdx": "^2.0.13",
    "remark-frontmatter": "^5.0.0",
    "remark-mdx-frontmatter": "^5.0.0"
  }
}
```

**Dependency Breakdown:**

- `@next/mdx` - Next.js MDX integration plugin
- `@mdx-js/loader` - Webpack/Turbopack loader for MDX files
- `@mdx-js/react` - React integration for MDX
- `@types/mdx` - TypeScript types for MDX
- `remark-frontmatter` - Parses YAML frontmatter in MDX files
- `remark-mdx-frontmatter` - Exports frontmatter as JSX props

### Configuration Files

#### 1. `next.config.ts`

```typescript
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
```

#### 2. `src/mdx-components.tsx`

This file maps HTML elements to styled React components:

```typescript
import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from './components/CodeBlock';

export function useMDXComponents(components = {}): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-3 border-b pb-2">
        {children}
      </h2>
    ),
    pre: ({ children }) => (
      <CodeBlock>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
          {children}
        </pre>
      </CodeBlock>
    ),
    // ... more component mappings
  };
}
```

#### 3. `src/components/CodeBlock.tsx`

Client component for interactive code blocks:

```typescript
'use client';

import React, { useState, useRef } from 'react';

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    const codeElement = preRef.current?.querySelector('code');
    if (!codeElement) return;

    await navigator.clipboard.writeText(codeElement.textContent || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative" ref={preRef}>
      <button onClick={handleCopy} className="absolute right-2 top-2">
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {children}
    </div>
  );
}
```

#### 4. `src/app/mdx-explained/layout.tsx`

Layout wrapper for proper content centering:

```typescript
export default function MdxExplainedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </article>
    </div>
  );
}
```

### How It Works

1. **Automatic Component Injection**
   - Next.js automatically looks for `mdx-components.tsx` in the `src/` directory
   - During MDX compilation, your custom components replace default HTML elements
   - No manual imports needed in MDX files

2. **Styling Pipeline**

   ```
   MDX File → MDX Parser → Custom Components → Styled JSX → React → HTML
   ```

3. **Server vs Client Components**
   - MDX pages are **Server Components** by default (fast, SEO-friendly)
   - `CodeBlock` is a **Client Component** (needs interactivity)
   - Mix both types seamlessly

### Styled Elements

The following elements have custom styling:

- **Headings**: h1, h2, h3 with hierarchy and spacing
- **Paragraphs**: Optimal line-height and margins
- **Lists**: ul, ol with proper indentation
- **Code**: Inline code with background highlighting
- **Code Blocks**: Dark theme with syntax formatting and copy button
- **Links**: Styled with hover effects and external link handling
- **Blockquotes**: Left border and italic styling
- **Tables**: Bordered cells with header styling
- **Horizontal Rules**: Subtle dividers

### Example MDX Usage

```mdx
---
title: 'My Article'
description: 'Article description'
---

# Main Heading

This is a paragraph with **bold** and _italic_ text.

## Subheading

- List item one
- List item two

\`\`\`typescript
// Code block with copy button
const greeting = "Hello, MDX!";
\`\`\`

Inline `code` also works!
```

### Benefits

1. ✅ **Consistent Styling** - All MDX pages look professional automatically
2. ✅ **Better UX** - Copy buttons, proper spacing, readable typography
3. ✅ **Maintainable** - Change styling in one place, affects all pages
4. ✅ **Type-Safe** - Full TypeScript support
5. ✅ **Performance** - Server-side rendering, client components only where needed
6. ✅ **SEO-Friendly** - Pre-rendered HTML with proper semantic markup
