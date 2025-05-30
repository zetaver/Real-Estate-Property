import React from 'react';
import { Bell, User, Home, DollarSign } from 'lucide-react';

interface Notification {
  id: number;
  type: 'user' | 'property' | 'payment';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'user',
    title: "New User Registration",
    message: "John Smith has registered as a new agent",
    time: "2 hours ago",
    isRead: false
  },
  {
    id: 2,
    type: 'property',
    title: "Property Listed",
    message: "New property listed in Manhattan",
    time: "5 hours ago",
    isRead: true
  },
  {
    id: 3,
    type: 'payment',
    title: "Payment Received",
    message: "Premium subscription payment received from Sarah Johnson",
    time: "1 day ago",
    isRead: true
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'user':
      return <User className="w-5 h-5" />;
    case 'property':
      return <Home className="w-5 h-5" />;
    case 'payment':
      return <DollarSign className="w-5 h-5" />;
    default:
      return <Bell className="w-5 h-5" />;
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'user':
      return 'bg-blue-100 text-blue-600';
    case 'property':
      return 'bg-green-100 text-green-600';
    case 'payment':
      return 'bg-purple-100 text-purple-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export default function Notifications() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-blue-600 hover:text-blue-800">
            Mark all as read
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 flex items-start gap-4 ${
                !notification.isRead ? 'bg-blue-50' : ''
              }`}
            >
              <div className={`p-2 rounded-lg ${getIconBackground(notification.type)}`}>
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-gray-600">{notification.message}</p>
                  </div>
                  <span className="text-sm text-gray-500">{notification.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}