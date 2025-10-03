// src/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import { CodeBlock } from './components/CodeBlock';

export function useMDXComponents(components = {}): MDXComponents {
  return {
    // Headings with proper styling
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 border-b pb-2 text-3xl font-semibold text-gray-800 dark:text-gray-200">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),

    // Paragraphs with spacing
    p: ({ children }) => (
      <p className="my-4 text-base leading-7 text-gray-700 dark:text-gray-300">{children}</p>
    ),

    // Lists with proper styling
    ul: ({ children }) => (
      <ul className="my-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,

    // Code blocks with copy button
    pre: ({ children }) => (
      <CodeBlock>
        <pre className="relative my-6 overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 p-4 text-gray-100 dark:bg-gray-950">
          {children}
        </pre>
      </CodeBlock>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-800 px-2 py-1 font-mono text-sm text-gray-100">
        {children}
      </code>
    ),

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-blue-500 pl-4 text-gray-600 italic dark:text-gray-400">
        {children}
      </blockquote>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:underline dark:text-blue-400"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),

    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-gray-100">{children}</strong>
    ),

    // Tables
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold dark:border-gray-700 dark:bg-gray-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{children}</td>
    ),

    // Horizontal rule
    hr: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,

    ...components,
  };
}
