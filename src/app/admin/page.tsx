export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        Welcome to the Admin Demo
      </h3>
      <p className="text-gray-600">
        This demonstrates conditional parallel routes based on user roles.
      </p>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-900">Features Demonstrated:</h4>
        <ul className="mt-2 text-blue-800 space-y-1">
          <li>• Conditional rendering based on user role</li>
          <li>• Dynamic slot selection in layout</li>
          <li>• Role-based access patterns</li>
          <li>• Client-side role switching (demo only)</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-green-50 rounded-lg">
        <p className="text-green-800">
          <strong>Try this:</strong> Switch between User and Admin roles to see
          how different parallel route slots are rendered conditionally.
        </p>
      </div>
    </div>
  );
}
