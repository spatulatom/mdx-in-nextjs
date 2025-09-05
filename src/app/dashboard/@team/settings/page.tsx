export default function TeamSettingsPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Team Settings</h3>

      <div className="space-y-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Permissions</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="text-green-800">
                Allow team members to invite others
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" readOnly />
              <span className="text-green-800">
                Require admin approval for new projects
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="text-green-800">
                Enable project notifications
              </span>
            </label>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">Team Information</h4>
          <div className="space-y-2 text-green-800">
            <div>
              <strong>Team Size:</strong> 3 members
            </div>
            <div>
              <strong>Plan:</strong> Pro
            </div>
            <div>
              <strong>Created:</strong> January 2024
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        Team settings page demonstrating how slots can have deep navigation
        structures.
      </p>
    </div>
  );
}
