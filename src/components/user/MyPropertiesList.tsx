import React, { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';

interface Package {
  name: string;
  listings_included: number;
  listings_remaining: number;
  featured_included: number;
  featured_remaining: number;
  images_per_listing: number;
  expires_at: string | null;
}

export default function MyPropertiesList() {
  const [showPackages, setShowPackages] = useState(false);
  const [currentPackage] = useState<Package>({
    name: 'Free Membership',
    listings_included: 2,
    listings_remaining: 2,
    featured_included: 1,
    featured_remaining: 1,
    images_per_listing: 5,
    expires_at: null
  });

  const stats = [
    { label: 'Listings Included', value: currentPackage.listings_included },
    { label: 'Listings Remaining', value: currentPackage.listings_remaining },
    { label: 'Featured Included', value: currentPackage.featured_included },
    { label: 'Featured Remaining', value: currentPackage.featured_remaining },
    { label: 'Images / listing', value: currentPackage.images_per_listing }
  ];

  const propertyStatuses = [
    'All',
    'Published',
    'Disabled',
    'Expired',
    'Draft',
    'Waiting For Approval'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Package Info */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-gray-600">Your Current Package: </span>
              <span className="text-[#6366f1] font-medium">{currentPackage.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-[#f97316] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                6
              </span>
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowPackages(!showPackages)}
          className="mt-6 flex items-center gap-2 text-[#6366f1] font-medium"
        >
          See Available Packages and Payment Methods
          <ChevronDown className={`w-4 h-4 transition-transform ${showPackages ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Properties List */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <h2 className="text-4xl font-bold">My Properties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-10">
              <option>Order By</option>
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Price High to Low</option>
              <option>Price Low to High</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-10">
              <option>Filter By Status</option>
              {propertyStatuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search a listing"
              className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg"
            />
            <button className="px-6 py-2.5 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e6] transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-medium text-gray-600">Property</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Category</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Price</th>
                <th className="text-left py-4 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-8 px-4 text-gray-500" colSpan={5}>
                  You don't have any properties!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}