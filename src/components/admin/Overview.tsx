import React from 'react';
import { Users, Home, DollarSign, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    icon: Users
  },
  {
    title: 'Active Properties',
    value: '567',
    change: '+8.2%',
    trend: 'up',
    icon: Home
  },
  {
    title: 'Total Revenue',
    value: '$89,432',
    change: '-3.1%',
    trend: 'down',
    icon: DollarSign
  },
  {
    title: 'Monthly Growth',
    value: '23.5%',
    change: '+5.4%',
    trend: 'up',
    icon: TrendingUp
  }
];

export default function Overview() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className={`flex items-center ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUp size={16} className="mr-1" />
                ) : (
                  <ArrowDown size={16} className="mr-1" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard widgets here */}
    </div>
  );
}