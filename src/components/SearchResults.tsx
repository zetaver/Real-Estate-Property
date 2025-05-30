import React, { useState, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Share2, Heart, Camera, ChevronDown, Search, List, Map as MapIcon, X, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Luxury House in Greenville",
    price: "860,000",
    location: "Greenville, Jersey City",
    coordinates: { lat: 40.7178, lng: -74.0431 },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    beds: 5,
    baths: 6,
    sqft: "190 ft²",
    description: "This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Val...",
    agent: {
      name: "John Collins",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Sales", "Active"],
    photos: 6
  },
  {
    id: 2,
    title: "Modern Condo for Sale",
    price: "950,000",
    location: "Manhattan, New York",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    beds: 2,
    baths: 2,
    sqft: "200 ft²",
    description: "Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood...",
    agent: {
      name: "Michael Suther",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Sales", "Open House"],
    photos: 6
  },
  {
    id: 3,
    title: "Luxury Apartment",
    price: "770,000",
    location: "Jersey City",
    coordinates: { lat: 40.7282, lng: -74.0776 },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    beds: 3,
    baths: 2,
    sqft: "180 ft²",
    description: "Beautiful apartment in the heart of Jersey City...",
    agent: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Featured", "Sales"],
    photos: 4
  },
  {
    id: 4,
    title: "Modern Studio",
    price: "500,000",
    location: "Upper East Side, Manhattan",
    coordinates: { lat: 40.7736, lng: -73.9566 },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    beds: 1,
    baths: 1,
    sqft: "120 ft²",
    description: "Cozy studio in the prestigious Upper East Side...",
    agent: {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
    },
    tags: ["Sales"],
    photos: 3
  }
];

const center = {
  lat: 40.7128,
  lng: -74.0060
};

const ITEMS_PER_PAGE = 2;

export default function SearchResults() {
  const location = useLocation();
  const areaFilter = location.state?.area;
  const [showMap, setShowMap] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyANknUQVh3DDInGVZxKpCF413Itn74fyK0'
  });

  useEffect(() => {
    if (areaFilter) {
      const filtered = properties.filter(property => 
        property.location.includes(areaFilter)
      );
      setFilteredProperties(filtered);
      setCurrentPage(1);
    } else {
      setFilteredProperties(properties);
    }
  }, [areaFilter]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapStyles = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]
    }
  ];

  const handleMarkerClick = (property) => {
    setActiveMarker(property.id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      {areaFilter && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700">{areaFilter}</span>
            </div>
          </div>
        </div>
      )}

      {/* Search Filters */}
      <div className="sticky top-0 z-20 bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Location Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                defaultValue="Location"
              />
            </div>

            {/* Radius Slider */}
            <div className="w-48">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none">
                <option>Radius: 10 miles</option>
              </select>
            </div>

            {/* Property Type Buttons */}
            <div className="flex gap-2">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Sales</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">Rentals</button>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">Invest</button>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Property Category</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Property County</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Property City</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Property Area</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>0+ bd/0+ ba</option>
            </select>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Sale Price</option>
            </select>
          </div>

          <button className="text-blue-600 mt-4">More Search Options</button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Map View */}
        {showMap && (
          <div className="sticky top-[200px] w-full md:w-1/2 h-[calc(100vh-200px)]">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={center}
                zoom={13}
                options={{
                  styles: mapStyles,
                  fullscreenControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  zoomControl: false
                }}
              >
                {filteredProperties.map((property) => (
                  <Marker
                    key={property.id}
                    position={property.coordinates}
                    onClick={() => handleMarkerClick(property)}
                    label={{
                      text: `$${property.price}`,
                      className: 'bg-green-500 text-white px-2 py-1 rounded text-sm',
                      color: 'white'
                    }}
                  >
                    {activeMarker === property.id && (
                      <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                        <div className="p-2">
                          <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-48 h-32 object-cover mb-2 rounded"
                          />
                          <h3 className="font-medium">{property.title}</h3>
                          <p className="text-sm text-gray-600">{property.location}</p>
                          <p className="text-blue-600 font-medium">${property.price}</p>
                          <div className="flex gap-2 text-sm text-gray-500 mt-1">
                            <span>{property.beds} bd</span>
                            <span>{property.baths} ba</span>
                            <span>{property.sqft}</span>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
              </GoogleMap>
            ) : (
              <div>Loading map...</div>
            )}
          </div>
        )}

        {/* Search Results */}
        {(!showMap || (showMap && window.innerWidth >= 768)) && (
          <div className={`w-full ${showMap ? 'md:w-1/2' : ''} p-6`}>
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Advanced Search ({filteredProperties.length})</h2>
                  <p className="text-gray-600 mt-1">
                    Search Parameters: For: Sales, Property Price between $ 0 and $ 1500000
                  </p>
                </div>
                <div className="relative">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg appearance-none pr-10">
                    <option>Default</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {paginatedProperties.map((property) => (
                <div 
                  key={property.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
                  onClick={() => setSelectedProperty(property)}
                >
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
                          className={`px-3 py-1 rounded-full text-sm text-white ${
                            tag === "Featured" ? "bg-green-600" : 
                            tag === "Open House" ? "bg-green-600" : 
                            tag === "Sales" ? "bg-blue-600" : 
                            tag === "Active" ? "bg-blue-600" : "bg-blue-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded">
                        <Camera size={16} />
                        <span>{property.photos}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <img 
                          src={property.agent.image}
                          alt={property.agent.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-600 text-sm">{property.agent.name}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:text-blue-600">
                          <Share2 size={20} />
                        </button>
                        <button className="p-2 hover:text-blue-600">
                          <Heart size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === index + 1
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile View Toggle */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <div className="flex bg-white rounded-full shadow-lg">
          <button
            onClick={() => setShowMap(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${!showMap ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            <List size={20} />
            <span>Listings</span>
          </button>
          <button
            onClick={() => setShowMap(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full ${showMap ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
          >
            <MapIcon size={20} />
            <span>Map View</span>
          </button>
        </div>
      </div>
    </div>
  );
}