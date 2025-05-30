import React from 'react';
import { BarChart2, Home, User, Heart, Search, Inbox, LogOut, Plus } from 'lucide-react';
import { signOut } from '../../lib/auth';

interface UserSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profile: {
    first_name: string;
    avatar_url: string;
  };
  user: {
    email?: string;
  } | null;
  notifications: number;
}

export default function UserSidebar({ activeTab, setActiveTab, profile, user, notifications }: UserSidebarProps) {
  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    { icon: BarChart2, label: 'Dashboard', id: 'dashboard' },
    { icon: User, label: 'My Profile', id: 'profile' },
    { icon: Home, label: 'My Properties List', id: 'properties' },
    { icon: Plus, label: 'Add New Property', id: 'add-property' },
    { icon: Heart, label: 'Favorites', id: 'favorites' },
    { icon: Search, label: 'Saved Searches', id: 'searches' },
    { icon: BarChart2, label: 'My Invoices', id: 'invoices' },
    { icon: Inbox, label: 'Inbox', id: 'inbox', notifications },
    { icon: BarChart2, label: 'CRM', id: 'crm' },
    { icon: LogOut, label: 'Logout', id: 'logout' }
  ];

  return (
    <div className="w-64 flex-shrink-0">
      <div className="flex flex-col items-center mb-8">
        <img
          src={profile.avatar_url || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">Welcome back, {profile.first_name || user?.email?.split('@')[0] || 'User'}!</h2>
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
            {item.notifications && (
              <span className="bg-[#f97316] text-white text-sm px-2 py-0.5 rounded-full">
                {item.notifications}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}