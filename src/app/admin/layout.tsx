"use client";

import Link from "next/link";
import { useState } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}

export default function AdminLayout({
  children,
  admin,
  user,
}: AdminLayoutProps) {
  const [userRole, setUserRole] = useState<"admin" | "user">("user");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <nav className="mb-8 bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Conditional Parallel Routes Demo
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-gray-700">Role:</span>
            <button
              onClick={() => setUserRole("user")}
              className={`px-3 py-1 rounded text-sm ${
                userRole === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              User
            </button>
            <button
              onClick={() => setUserRole("admin")}
              className={`px-3 py-1 rounded text-sm ${
                userRole === "admin"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Admin
            </button>
          </div>

          <div className="flex gap-2">
            <Link
              href="/admin"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/reports"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reports
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Back to Main
            </Link>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Conditional Role-based Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {userRole === "admin" ? "Admin Panel" : "User Panel"}
          </h2>
          <div className="border-2 border-dashed border-purple-200 rounded-lg p-4">
            {userRole === "admin" ? admin : user}
          </div>
        </div>

        {/* Always-visible section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            General Content
          </h2>
          <div className="border-2 border-dashed border-blue-200 rounded-lg p-4">
            {children}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          How Conditional Routes Work
        </h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-yellow-800 mb-2">
            <strong>Current Role:</strong> {userRole}
          </p>
          <ul className="text-yellow-800 space-y-1 text-sm">
            <li>• Toggle between User and Admin roles above</li>
            <li>• The left panel shows different content based on the role</li>
            <li>• In a real app, role would be determined server-side</li>
            <li>• Different parallel routes render based on conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
