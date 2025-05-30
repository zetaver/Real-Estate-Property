import React from 'react';
import { MapPin, Bed, Bath, Square, Share2, Heart } from 'lucide-react';

interface Property {
  title: string;
  price: string;
  period: string;
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
    title: "Apartment with Subunits",
    price: "999",
    period: "month",
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
  },
  {
    title: "New York Studio Apartment",
    price: "2,000",
    period: "year",
    location: "Manhattan, New York",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    beds: 1,
    baths: 1,
    sqft: "120 ft²",
    description: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
    agent: {
      name: "Green Reality",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Rentals", "Active"]
  },
  {
    title: "Luxury Home in Manhattan",
    price: "450",
    period: "month",
    location: "Manhattan, New York",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 3,
    sqft: "120 ft²",
    description: "Just steps away from QM2 express bus to Manhattan and local buses, only minutes from the t...",
    agent: {
      name: "Green Reality",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Rentals", "Open House"]
  }
];

export default function PropertiesForRent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Properties for Rent</h2>
        <p className="text-gray-600 text-center mb-12">
          These are the latest properties in the Sales category. You can create the list using
          the "latest listing shortcode" and show items by specific categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <Heart size={20} className="text-gray-600" />
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
                <p className="text-blue-600 text-xl font-bold mb-4">
                  ${property.price} / {property.period}
                </p>
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