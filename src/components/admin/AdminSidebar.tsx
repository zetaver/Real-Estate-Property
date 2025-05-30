import React from 'react';
import { LayoutDashboard, Users, Home, Settings, FileText, Bell, LogOut } from 'lucide-react';
import { signOut } from '../../lib/auth';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: number;
}

export default function AdminSidebar({ activeTab, setActiveTab, notifications }: AdminSidebarProps) {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'Users', id: 'users' },
    { icon: Home, label: 'Properties', id: 'properties' },
    { icon: FileText, label: 'Reports', id: 'reports' },
    { icon: Bell, label: 'Notifications', id: 'notifications', badge: notifications },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: LogOut, label: 'Logout', id: 'logout' }
  ];

  return (
    <div className="w-64 flex-shrink-0">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => item.id === 'logout' ? handleSignOut() : setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'bg-[#6366f1] text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-[#f97316] text-white text-sm px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}