import Link from "next/link";

interface PhotosLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function PhotosLayout({ children, modal }: PhotosLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <nav className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Photos Gallery - Intercepted Routes Demo
        </h1>
        <div className="flex gap-4">
          <Link
            href="/photos"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Gallery
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Dashboard
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Back to Main
          </Link>
        </div>
      </nav>

      {/* Main content */}
      {children}

      {/* Modal slot - only renders when a modal route is active */}
      {modal}
    </div>
  );
}
