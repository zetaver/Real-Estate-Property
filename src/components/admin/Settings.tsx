import React from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* General Settings */}
          <section>
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue="Real Estate Admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue="Admin dashboard for real estate management"
                />
              </div>
            </div>
          </section>

          {/* Email Settings */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Email Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Host
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="smtp.example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Port
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="587"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Username
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* API Settings */}
          <section>
            <h2 className="text-lg font-semibold mb-4">API Settings</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Google Maps API Key
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stripe Public Key
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stripe Secret Key
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </section>

          <div className="pt-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Save size={20} />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}