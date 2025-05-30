import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Share2, Heart, Camera, Video, Phone, Mail, Calendar, Car, ChevronDown, ChevronUp, Plus, Minus, Navigation, Printer as Print, X } from 'lucide-react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function PropertyDetail() {
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyANknUQVh3DDInGVZxKpCF413Itn74fyK0'
  });

  // This would typically come from an API/database
  const property = {
    id: 1,
    title: "Apartment with Subunits",
    price: "999",
    period: "month",
    location: "City center no 8, Jersey City, Greenville",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b46f668?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687126-c7171b46f668?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1600607687166-c7171b46f668?auto=format&fit=crop&w=1200&h=800"
    ],
    beds: 5,
    baths: 2,
    garages: 20,
    sqft: "1,900",
    yearBuilt: 2000,
    lastUpdated: "December 23, 2023",
    coordinates: {
      lat: 40.7178,
      lng: -74.0431
    },
    agent: {
      name: "Lora Smith",
      memberId: "987654321",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96"
    },
    tags: ["Rentals", "Apartments"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/apartments" className="text-gray-500 hover:text-gray-700">Apartments</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {property.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-3xl font-bold text-blue-600">
                $ {property.price} <span className="text-lg">/ {property.period}</span>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Heart size={20} />
                  <span>Favorite</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <Print size={20} />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="relative">
              <img 
                src={property.galleryImages[selectedImage]} 
                alt={property.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                  <Camera size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                  <MapPin size={20} />
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                  Active
                </span>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      selectedImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full"
                onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : property.galleryImages.length - 1))}
              >
                <ChevronDown className="rotate-90" size={20} />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full"
                onClick={() => setSelectedImage(prev => (prev < property.galleryImages.length - 1 ? prev + 1 : 0))}
              >
                <ChevronDown className="-rotate-90" size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-4">
              {property.galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-video rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Updated On:</div>
                    <div className="font-medium">{property.lastUpdated}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bed size={20} className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                    <div className="font-medium">{property.beds}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                    <div className="font-medium">{property.baths}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={20} className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Garages</div>
                    <div className="font-medium">{property.garages}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Square size={20} className="text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Sq Ft</div>
                    <div className="font-medium">{property.sqft}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setShowVideo(!showVideo)}
              >
                <div className="flex items-center gap-2">
                  <Video size={20} />
                  <span className="font-semibold">Video</span>
                </div>
                {showVideo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {showVideo && (
                <div className="p-6 pt-0">
                  <iframe
                    src="https://player.vimeo.com/video/284436243?api=1&player_id=player_1"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between"
                onClick={() => setShowMap(!showMap)}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span className="font-semibold">Map</span>
                </div>
                {showMap ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {showMap && isLoaded && (
                <div className="relative h-[400px]">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <button className="px-4 py-2 bg-white rounded shadow">Map</button>
                    <button className="px-4 py-2 bg-white rounded shadow">Satellite</button>
                  </div>
                  <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded shadow">
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
                    <button className="p-2 bg-white rounded shadow">
                      <Plus size={20} />
                    </button>
                    <button className="p-2 bg-white rounded shadow">
                      <Minus size={20} />
                    </button>
                    <button className="p-2 bg-white rounded shadow">
                      <Navigation size={20} />
                    </button>
                  </div>
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={property.coordinates}
                    zoom={15}
                  >
                    <Marker position={property.coordinates} />
                  </GoogleMap>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{property.agent.name}</h3>
                  <p className="text-sm text-gray-500">Member ID: {property.agent.memberId}</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Request Info
                </button>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Schedule a tour
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">Schedule a showing?</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue={`I'm interested in [ ${property.title} ]`}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Email
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Call
                  </button>
                  <button
                    type="button"
                    className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Currency Selector */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">Change Currency</h3>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>

            {/* Measurement Selector */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">Change Measurement</h3>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Square Feet</option>
                <option>Square Meters</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}