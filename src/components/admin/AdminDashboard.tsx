import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import Overview from './Overview';
import Users from './Users';
import Properties from './Properties';
import Reports from './Reports';
import Notifications from './Notifications';
import Settings from './Settings';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications] = useState(6);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Overview />;
      case 'users':
        return <Users />;
      case 'properties':
        return <Properties />;
      case 'reports':
        return <Reports />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <AdminSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            notifications={notifications}
          />
          {renderContent()}
        </div>
      </div>
    </div>
  );
}