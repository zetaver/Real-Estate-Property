import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

interface LatestProperty {
  title: string;
  price: string;
  image: string;
}

const latestProperties: LatestProperty[] = [
  {
    title: "Luxury House in Greenville",
    price: "$ 860,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=100&h=100"
  },
  {
    title: "Modern Condo for Sale",
    price: "$ 150,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=100&h=100"
  },
  {
    title: "Apartment with Subunits",
    price: "$ 999 / month",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=100&h=100"
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1829] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact us</h4>
            <address className="not-italic space-y-2">
              <p>3755 Commercial St SE Salem, Corner with Sunny Boulevard, 3755 Commercial OR 97302</p>
              <div className="flex items-center gap-2 mt-4">
                <Phone size={16} />
                <span>(305) 555-4446</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(305) 555-4555</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>youremail@gmail.com</span>
              </div>
              <p className="font-semibold text-white mt-2">WP RESIDENCE</p>
            </address>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white mb-6">Lists by Category</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <p>Apartments (17)</p>
                <p>Condos (8)</p>
                <p>Houses (5)</p>
                <p>Industrial (1)</p>
              </div>
              <div className="space-y-2">
                <p>Land (1)</p>
                <p>Offices (2)</p>
                <p>Retail (4)</p>
                <p>Villas (4)</p>
              </div>
            </div>
          </div>

          {/* Latest Properties */}
          <div>
            <h4 className="font-semibold text-white mb-6">Latest Properties</h4>
            <div className="space-y-4">
              {latestProperties.map((property, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h5 className="font-medium text-white">{property.title}</h5>
                    <p>{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-wrap justify-between items-center">
            <p>Copyright WP Estate. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Video Tutorial</a>
              <a href="#" className="hover:text-white transition-colors">Client Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}