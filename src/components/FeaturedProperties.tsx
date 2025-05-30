import React from 'react';
import { MapPin, Bed, Bath, Square, Share2, Heart } from 'lucide-react';

interface FeaturedProperty {
  id: number;
  title: string;
  price: string;
  location: string;
  mainImage: string;
  galleryImages: string[];
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

const featuredProperties: FeaturedProperty[] = [
  {
    id: 1,
    title: "Villa on Washington Avenue",
    price: "150,000",
    location: "Manhattan, New York",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ],
    beds: 5,
    baths: 3,
    sqft: "250 ft²",
    description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay ...",
    agent: {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Active"]
  },
  {
    id: 2,
    title: "Luxury villa in Rego Park",
    price: "420,000",
    location: "Queens, New York",
    mainImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b46f668?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687126-c7171b46f668?auto=format&fit=crop&w=800&q=80"
    ],
    beds: 3,
    baths: 2,
    sqft: "150 ft²",
    description: "Just steps away from QM2 express bus to Manhattan and local buses, onl ...",
    agent: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Active"]
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Properties</h2>
        <p className="text-gray-600 text-center mb-12">
          Here are two listings displayed with the featured property shortcode, which you
          can use when you have some special properties to present.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={property.mainImage} 
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
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                    <Heart size={20} className="text-gray-600" />
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
              <div className="grid grid-cols-4 gap-1 p-1">
                {property.galleryImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}