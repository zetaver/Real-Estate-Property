import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSearch() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="relative h-[600px]">
      <img 
        src="https://main.wpresidence.net/wp-content/uploads/2024/01/wpresidece-header.webp" 
        alt="Hero" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl px-4 text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-6">Find Your Dream Home</h1>
          <p className="text-xl">
            We are recognized for exceeding client expectations and delivering great results through dedication,
            ease of process, and extraordinary services to our worldwide clients.
          </p>
        </div>

        <div className="w-full max-w-6xl px-4">
          <div className="flex gap-2 mb-6">
            <button className="bg-white text-gray-800 px-8 py-2 rounded-t-lg">Sales</button>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-t-lg">Rentals</button>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-t-lg">Invest</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categories</label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 appearance-none">
                    <option>Property Category</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Commercial</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 appearance-none">
                    <option>Property City</option>
                    <option>New York</option>
                    <option>Jersey City</option>
                    <option>Manhattan</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Beds & Baths</label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 appearance-none">
                    <option>Beds | Baths</option>
                    <option>1 | 1</option>
                    <option>2 | 2</option>
                    <option>3 | 2</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <div className="relative">
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 appearance-none">
                    <option>Sale Price</option>
                    <option>$100k - $200k</option>
                    <option>$200k - $300k</option>
                    <option>$300k+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
            </div>
            <button 
              onClick={handleSearch}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
        <div className="space-y-2">
          <p className="text-sm font-semibold">28,000+ Buyers</p>
          <p className="text-sm font-semibold">5-Star Rated Theme</p>
          <p className="text-sm font-semibold">Lifetime Free Updates</p>
          <p className="text-sm font-semibold">No Extra Costs</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}