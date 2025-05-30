import React from 'react';
import { MapPin, Bed, Bath, Square, Share2, Heart, Building, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const properties: Property[] = [
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
  },
  {
    id: 2,
    title: "Modern Condo for Sale",
    price: "150,000",
    location: "Manhattan, New York",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
    sqft: "200 ft²",
    description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
    agent: {
      name: "Michael Guthier",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Sales", "Open House"]
  },
  {
    id: 3,
    title: "Apartment with Subunits",
    price: "999",
    location: "Greenville, Jersey City",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 2,
    sqft: "1,900 ft²",
    description: "Sesame Street international co-productions are educational children's television set...",
    agent: {
      name: "Lora Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Rentals", "Active"]
  }
];

const propertyFilters = [
  { icon: Building, label: 'For Sale' },
  { icon: Home, label: 'Villas' },
  { icon: Building, label: 'Apartments' },
  { icon: Home, label: 'Houses' },
  { icon: Building, label: 'Condos' },
  { icon: Building, label: 'Retail' }
];

export default function LatestProperties() {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyId: number) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Properties</h2>
        <p className="text-gray-600 text-center mb-8">
          These are the latest properties in the Sales category. You can create the list using
          the "latest listing shortcode" and show items by specific categories.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {propertyFilters.map((filter, index) => (
            <button 
              key={index} 
              className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <filter.icon size={20} className="text-gray-600" />
              <span className="text-gray-700">{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handlePropertyClick(property.id)}
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {property.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tag === "Open House" ? "bg-green-600" : "bg-blue-600"
                      } text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle favorite
                    }}
                  >
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <button 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle share
                    }}
                  >
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

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Load More Listings
          </button>
        </div>
      </div>
    </section>
  );
}