import React from 'react';
import { Search, Trash2, Bell } from 'lucide-react';

interface SavedSearch {
  id: number;
  name: string;
  criteria: {
    location: string;
    propertyType: string;
    priceRange: string;
    beds: string;
    baths: string;
  };
  notifications: boolean;
  lastUpdated: string;
}

const savedSearches: SavedSearch[] = [
  {
    id: 1,
    name: "Manhattan Apartments",
    criteria: {
      location: "Manhattan, NY",
      propertyType: "Apartment",
      priceRange: "$200,000 - $500,000",
      beds: "2+",
      baths: "1+"
    },
    notifications: true,
    lastUpdated: "2025-03-24"
  }
];

export default function SavedSearches() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-4xl font-bold">Saved Searches</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        {savedSearches.length > 0 ? (
          <div className="space-y-6">
            {savedSearches.map((search) => (
              <div key={search.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{search.name}</h3>
                    <p className="text-sm text-gray-500">Last updated: {search.lastUpdated}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                      <Bell size={20} className={search.notifications ? "text-blue-600" : ""} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-red-600 transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span> {search.criteria.location}
                  </div>
                  <div>
                    <span className="font-medium">Property Type:</span> {search.criteria.propertyType}
                  </div>
                  <div>
                    <span className="font-medium">Price Range:</span> {search.criteria.priceRange}
                  </div>
                  <div>
                    <span className="font-medium">Beds:</span> {search.criteria.beds}
                  </div>
                  <div>
                    <span className="font-medium">Baths:</span> {search.criteria.baths}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">You haven't saved any searches yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}