export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Active Projects</h3>

      <div className="space-y-3">
        <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
          <div className="font-medium text-green-900">
            MDX Documentation Site
          </div>
          <div className="text-sm text-green-700">Status: In Progress</div>
          <div className="text-sm text-green-600">Due: Next week</div>
        </div>
        <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
          <div className="font-medium text-blue-900">Parallel Routes Demo</div>
          <div className="text-sm text-blue-700">Status: Active</div>
          <div className="text-sm text-blue-600">Due: This week</div>
        </div>
        <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
          <div className="font-medium text-yellow-900">
            Performance Optimization
          </div>
          <div className="text-sm text-yellow-700">Status: Planning</div>
          <div className="text-sm text-yellow-600">Due: Next month</div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Projects view in the team slot - notice how this loads independently
        while analytics slot maintains its state.
      </p>
    </div>
  );
}
