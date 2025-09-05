export default function UserSlotPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-blue-800">👤 User Dashboard</h3>

      <div className="space-y-3">
        <div className="p-3 bg-blue-50 rounded border">
          <div className="font-medium text-blue-900">My Profile</div>
          <div className="text-blue-700 text-sm">
            Update your personal information
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded border">
          <div className="font-medium text-blue-900">My Projects</div>
          <div className="text-blue-700 text-sm">
            View and manage your projects
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded border">
          <div className="font-medium text-blue-900">Activity Log</div>
          <div className="text-blue-700 text-sm">
            Recent activity and notifications
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded border">
          <div className="font-medium text-blue-900">Settings</div>
          <div className="text-blue-700 text-sm">
            Customize your preferences
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded border border-blue-200">
        <p className="text-blue-800 text-sm">
          <strong>User Access:</strong> Limited to personal dashboard and
          projects.
        </p>
      </div>
    </div>
  );
}
