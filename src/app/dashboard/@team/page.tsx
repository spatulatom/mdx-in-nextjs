import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        <Link
          href="/dashboard"
          className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
        >
          Members
        </Link>
        <Link
          href="/dashboard/projects"
          className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
        >
          Projects
        </Link>
        <Link
          href="/dashboard/settings"
          className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
        >
          Settings
        </Link>
      </div>

      <h3 className="font-semibold text-gray-800">Team Members</h3>

      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <div className="font-medium text-green-900">John Doe</div>
            <div className="text-sm text-green-700">Frontend Developer</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <div className="font-medium text-green-900">Jane Smith</div>
            <div className="text-sm text-green-700">Backend Developer</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <div className="font-medium text-green-900">Mike Wilson</div>
            <div className="text-sm text-green-700">UI Designer</div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        This content is rendered in the <code>@team</code> parallel route slot.
      </p>
    </div>
  );
}
