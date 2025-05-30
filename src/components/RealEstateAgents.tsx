import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface Agent {
  name: string;
  title: string;
  image: string;
  description: string;
  listings: number;
  memberId?: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    pinterest?: string;
    instagram?: string;
    youtube?: string;
    vimeo?: string;
  };
}

const agents: Agent[] = [
  {
    name: "Lily Bicharm",
    title: "Realtor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    description: "Lily Bicharm is a dedicated and professional real estate agent who specializes in providin ...",
    listings: 4,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      pinterest: "#"
    }
  },
  {
    name: "Samuel Diesel",
    title: "Commercial Broker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    description: "With a genuine passion for helping clients find their dream homes, Samuel Diesel brings a ...",
    listings: 3,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      youtube: "#",
      vimeo: "#"
    }
  },
  {
    name: "Dennis Albo",
    title: "Member ID: 987654321",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    description: "With a sharp understanding of market trends and a strategic approach to negotiation, Denni ...",
    listings: 6,
    memberId: "987654321",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      pinterest: "#"
    }
  }
];

export default function RealEstateAgents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Real Estate Agents</h2>
        <p className="text-gray-600 text-center mb-12">
          With the "list agents shortcode" you can show your agents in any page, alongside
          with their contact details and link to their agent profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {agent.listings} listings
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                <p className="text-gray-600 mb-4">{agent.title}</p>
                <p className="text-gray-700 mb-6">{agent.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(agent.socialLinks).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <img 
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`}
                        alt={platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} />
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}