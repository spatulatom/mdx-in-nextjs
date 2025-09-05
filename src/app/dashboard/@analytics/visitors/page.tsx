export default function VisitorsPage() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Visitors Analytics</h3>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-900 mb-2">Visitor Statistics</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-lg font-bold text-green-600">67%</div>
            <div className="text-sm text-green-600">Returning</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">33%</div>
            <div className="text-sm text-green-600">New</div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-900 mb-2">Top Countries</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-green-800">🇺🇸 United States</span>
            <span className="text-green-600 font-semibold">45%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-800">🇬🇧 United Kingdom</span>
            <span className="text-green-600 font-semibold">20%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-800">🇨🇦 Canada</span>
            <span className="text-green-600 font-semibold">15%</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        This is a different view within the same analytics slot, demonstrating
        independent navigation within parallel routes.
      </p>
    </div>
  );
}
