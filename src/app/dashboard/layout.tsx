import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}

export default function DashboardLayout({
  children,
  analytics,
  team,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <nav className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Parallel Routes Dashboard
        </h1>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Dashboard Home
          </Link>
          <Link
            href="/dashboard/settings"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Settings
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Back to Main
          </Link>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Analytics Slot */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Analytics (@analytics slot)
          </h2>
          <div className="border-2 border-dashed border-blue-200 rounded-lg p-4">
            {analytics}
          </div>
        </div>

        {/* Team Slot */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Team (@team slot)
          </h2>
          <div className="border-2 border-dashed border-green-200 rounded-lg p-4">
            {team}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Main Content (children)
        </h2>
        <div className="border-2 border-dashed border-purple-200 rounded-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
