import React from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "Agent",
    status: "active",
    joinDate: "2025-01-15",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "User",
    status: "active",
    joinDate: "2025-02-20",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
  }
];

export default function Users() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Users</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add New User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-medium text-gray-600">User</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Role</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Join Date</th>
                <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{user.role}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">{user.joinDate}</td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:text-blue-600">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-1">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}