This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

6. **Intercepted Routes**
   - Modal implementation via route interception
   - Photos modal via `@modal/(.)([id])/page.tsx`
   - Maintains parent route context while showing modal overlay

7. **Client Components**
   - Modal component with keyboard handlers
   - Search input with navigation functionality
   - Autocomplete suggestions for search input
     - Real-time filtering as user types
     - Keyboard navigation (arrow keys, enter, escape)
     - Click selection of suggestions

8. **Slot-Based UI Architecture**
   - Default slot fallbacks
   - Nested parallel routes for complex UI structures
