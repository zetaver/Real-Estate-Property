import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Share2 } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  description: string;
  agent: {
    name: string;
    image: string;
  };
  tags: string[];
}

const favoriteProperties: Property[] = [
  {
    id: 1,
    title: "Luxury House in Greenville",
    price: "860,000",
    location: "Greenville, Jersey City",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 4,
    sqft: "190 ft²",
    description: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
    agent: {
      name: "John Collins",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Sales", "Active"]
  }
];

export default function Favorites() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-4xl font-bold">Favorites</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {property.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Heart size={20} className="text-red-500 fill-current" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-blue-600 text-xl font-bold mb-4">$ {property.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{property.description}</p>
                  <div className="flex items-center gap-4 text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Bed size={18} />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={18} />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square size={18} />
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img 
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-600 text-sm">{property.agent.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">You haven't added any properties to your favorites yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}