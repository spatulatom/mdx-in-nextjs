export default function AdminSlotPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-red-800">🔐 Admin Controls</h3>

      <div className="space-y-3">
        <button className="w-full p-3 bg-red-100 text-red-800 rounded hover:bg-red-200 text-left">
          👥 Manage Users
        </button>
        <button className="w-full p-3 bg-red-100 text-red-800 rounded hover:bg-red-200 text-left">
          🛠️ System Settings
        </button>
        <button className="w-full p-3 bg-red-100 text-red-800 rounded hover:bg-red-200 text-left">
          📊 Analytics Dashboard
        </button>
        <button className="w-full p-3 bg-red-100 text-red-800 rounded hover:bg-red-200 text-left">
          🚨 Security Logs
        </button>
      </div>

      <div className="bg-red-50 p-3 rounded border border-red-200">
        <p className="text-red-800 text-sm">
          <strong>Admin Features:</strong> Full system access with
          administrative privileges.
        </p>
      </div>
    </div>
  );
}
