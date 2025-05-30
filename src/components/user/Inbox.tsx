import React from 'react';
import { Mail, Star, Trash2 } from 'lucide-react';

interface Message {
  id: number;
  from: {
    name: string;
    email: string;
    avatar: string;
  };
  subject: string;
  preview: string;
  date: string;
  isStarred: boolean;
  isRead: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    from: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    subject: "Interested in Greenville Property",
    preview: "Hi, I'm interested in the property you listed in Greenville. Is it still available?",
    date: "2025-03-24",
    isStarred: false,
    isRead: false
  }
];

export default function Inbox() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-4xl font-bold">Inbox</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {messages.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`p-6 flex items-start gap-4 hover:bg-gray-50 cursor-pointer ${
                  !message.isRead ? 'bg-blue-50' : ''
                }`}
              >
                <img
                  src={message.from.avatar}
                  alt={message.from.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold">{message.from.name}</h3>
                      <p className="text-sm text-gray-500">{message.from.email}</p>
                    </div>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <h4 className="font-medium mb-1">{message.subject}</h4>
                  <p className="text-sm text-gray-600 truncate">{message.preview}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-yellow-500">
                    <Star size={20} className={message.isStarred ? "text-yellow-500 fill-current" : ""} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Mail size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Your inbox is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}