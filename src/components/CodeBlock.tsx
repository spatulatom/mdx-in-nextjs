'use client';

import React, { useState, useRef } from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;

    const codeElement = preRef.current.querySelector('code');
    if (!codeElement) return;

    // Get the text content and remove extra whitespace at start/end
    const code = codeElement.textContent || '';

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      // Reset the "Copied!" state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="group relative" ref={preRef}>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-70 transition-all hover:bg-gray-600 hover:opacity-100"
        aria-label="Copy code to clipboard"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {children}
    </div>
  );
}
