export default function DashboardSettingsPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Dashboard Settings</h3>

      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">
          Parallel Routes Behavior
        </h4>
        <p className="text-purple-800 text-sm">
          Notice how when you navigate to this settings page, the parallel route
          slots (analytics and team) either show their default content or
          maintain their previous state depending on the navigation type.
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Display Options</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="text-gray-800">Show analytics panel</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="text-gray-800">Show team panel</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" readOnly />
              <span className="text-gray-800">Auto-refresh data</span>
            </label>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Notifications</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="text-gray-800">Email notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" readOnly />
              <span className="text-gray-800">Push notifications</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>Try this:</strong> Navigate between different analytics and
          team pages, then come back to this settings page to see how Next.js
          maintains the state of each parallel route slot.
        </p>
      </div>
    </div>
  );
}
