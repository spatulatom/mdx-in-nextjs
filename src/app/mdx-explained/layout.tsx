import { ReactNode } from 'react';

export default function MdxExplainedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="mx-auto max-w-4xl px-6 py-12">{children}</article>
    </div>
  );
}
