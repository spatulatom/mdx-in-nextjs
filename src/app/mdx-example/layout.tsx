export default function MDXExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="prose max-w-none p-6">{children}</section>;
}
