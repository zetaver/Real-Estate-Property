import React from 'react';
import { Users, Phone, Mail, MessageSquare } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'lead' | 'prospect' | 'customer';
  lastContact: string;
  avatar: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 123-4567",
    status: "lead",
    lastContact: "2025-03-24",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
  }
];

export default function CRM() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-4xl font-bold">CRM</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {contacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Contact</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Last Contact</th>
                  <th className="text-right py-4 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-sm text-gray-500">{contact.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        contact.status === 'lead' ? 'bg-blue-100 text-blue-800' :
                        contact.status === 'prospect' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">{contact.lastContact}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-gray-500 hover:text-blue-600">
                          <Phone size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-600">
                          <Mail size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-600">
                          <MessageSquare size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">No contacts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}