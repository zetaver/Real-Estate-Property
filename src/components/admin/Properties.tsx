import React from 'react';
import { MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  status: 'active' | 'pending' | 'sold';
  type: string;
  agent: {
    name: string;
    avatar: string;
  };
  image: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Villa in Manhattan",
    location: "Manhattan, NY",
    price: "$1,200,000",
    status: "active",
    type: "Villa",
    agent: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Brooklyn, NY",
    price: "$450,000",
    status: "pending",
    type: "Apartment",
    agent: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&h=150"
  }
];

export default function Properties() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Properties</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add New Property
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-medium text-gray-600">Property</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Type</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Agent</th>
                <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {properties.map((property) => (
                <tr key={property.id}>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-12 h-12 rounded-lg object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium">{property.title}</div>
                        <div className="text-sm text-gray-500">{property.location}</div>
                        <div className="text-sm font-medium text-blue-600">{property.price}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{property.type}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'active' ? 'bg-green-100 text-green-800' :
                      property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span>{property.agent.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:text-blue-600">
                        <Eye size={18} />
                      </button>
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