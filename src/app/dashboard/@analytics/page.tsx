import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <Link
          href="/dashboard"
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
        >
          Overview
        </Link>
        <Link
          href="/dashboard/page-views"
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
        >
          Page Views
        </Link>
        <Link
          href="/dashboard/visitors"
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
        >
          Visitors
        </Link>
      </div>

      <h3 className="font-semibold text-gray-800">Analytics Overview</h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded">
          <div className="text-2xl font-bold text-blue-600">1,234</div>
          <div className="text-sm text-blue-600">Page Views</div>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <div className="text-2xl font-bold text-green-600">567</div>
          <div className="text-sm text-green-600">Unique Visitors</div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        This content is rendered in the <code>@analytics</code> parallel route
        slot.
      </p>
    </div>
  );
}
