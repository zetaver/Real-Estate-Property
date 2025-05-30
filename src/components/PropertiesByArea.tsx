import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Area {
  name: string;
  listings: string;
  image: string;
  properties?: number;
}

const areas: Area[] = [
  {
    name: "New York",
    listings: "25 listings",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    properties: 10
  },
  {
    name: "Jersey City",
    listings: "25 listings",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "The Heights",
    listings: "3 listings",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "New Jersey State",
    listings: "25 listings",
    image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "New York State",
    listings: "16 listings",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "Bayonne",
    listings: "5 listings",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "Greenville",
    listings: "17 listings",
    image: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "Manhattan",
    listings: "8 listings",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "Upper East Side",
    listings: "3 listings",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "Queens",
    listings: "4 listings",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "West Side",
    listings: "1 listing",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=600&q=80",
    properties: 2
  },
  {
    name: "West Village",
    listings: "1 listing",
    image: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=600&q=80",
    properties: 2
  }
];

export default function PropertiesByArea() {
  const navigate = useNavigate();

  const handleAreaClick = (area: Area) => {
    // Navigate to search results with area filter
    navigate('/search', { 
      state: { 
        area: area.name,
        properties: area.properties 
      }
    });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Properties by Area</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Highlight the best of your properties by using the List Category shortcode. You can
          list categories, types, cities, areas and states of your choice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleAreaClick(area)}
            >
              <img 
                src={area.image} 
                alt={area.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">{area.name}</h3>
                <p className="text-gray-200 text-sm">{area.listings}</p>
              </div>
              {area.properties && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-2 py-1 rounded-full">
                  {area.properties}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}