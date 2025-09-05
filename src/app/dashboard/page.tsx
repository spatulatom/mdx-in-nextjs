export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        Welcome to the Dashboard!
      </h3>
      <p className="text-gray-600">
        This page demonstrates Next.js Parallel Routes. Notice how the analytics
        and team sections are rendered simultaneously using slots.
      </p>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-900">
          How Parallel Routes Work:
        </h4>
        <ul className="mt-2 text-purple-800 space-y-1">
          <li>
            • <code>@analytics</code> and <code>@team</code> are parallel route
            slots
          </li>
          <li>• They&apos;re passed as props to the layout component</li>
          <li>• Each slot can have its own navigation and state</li>
          <li>• Slots don&apos;t affect the URL structure</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800">
          <strong>Try navigating to:</strong>
        </p>
        <ul className="mt-2 text-blue-700 space-y-1">
          <li>
            • <code>/dashboard/settings</code> - See how slots maintain state
            during navigation
          </li>
          <li>• Different analytics and team pages independently</li>
        </ul>
      </div>
    </div>
  );
}
