import React, { useState } from 'react';
import { Heart, Mail, Phone, User, Facebook, Twitter, Linkedin, Youtube, Instagram, Building2, X, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1B2B3F] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Favorites</span>
            </a>
            <a href="mailto:contact@mail.com" className="flex items-center space-x-2 hover:text-gray-300">
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@mail.com</span>
            </a>
            <a href="tel:+1408167234" className="flex items-center space-x-2 hover:text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 408 167 1234</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Zeta Estate</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Demos</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Lists</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Property</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Pages</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Elements</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Search</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:800-555-6789" className="hidden lg:flex items-center gap-2 text-gray-700">
                <Phone size={18} />
                <span>800-555-6789</span>
              </a>
              <button 
                onClick={() => setIsAuthModalOpen(true)} 
                className="text-gray-700 hover:text-blue-600"
              >
                <User size={20} />
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Add Listing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}