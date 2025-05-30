import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { getCurrentUser } from '../../lib/auth';
import UserSidebar from './UserSidebar';
import MyPropertiesList from './MyPropertiesList';
import AddNewProperty from './AddNewProperty';

interface Profile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  mobile: string;
  skype: string;
  avatar_url: string;
  role: string;
  social_links: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    pinterest: string;
    website: string;
  };
}

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState<Profile>(() => {
    const user = getCurrentUser();
    return {
      first_name: '',
      last_name: '',
      email: user?.email || '',
      phone: '',
      mobile: '',
      skype: '',
      avatar_url: '',
      role: user?.role || 'user',
      social_links: {
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        pinterest: '',
        website: ''
      }
    };
  });
  const [notifications] = useState(3);
  const user = getCurrentUser();

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      social_links: {
        ...prev.social_links,
        [platform]: value
      }
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'properties':
        return <MyPropertiesList />;
      case 'add-property':
        return <AddNewProperty />;
      default:
        return (
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">My Profile</h1>
            </div>

            {/* Profile Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.first_name}
                      onChange={(e) => handleInputChange('first_name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.last_name}
                      onChange={(e) => handleInputChange('last_name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skype
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.skype}
                      onChange={(e) => handleInputChange('skype', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.facebook}
                      onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      X - Twitter URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.twitter}
                      onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.linkedin}
                      onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Instagram URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.instagram}
                      onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pinterest URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.pinterest}
                      onChange={(e) => handleSocialLinkChange('pinterest', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website URL (without http)
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      value={profile.social_links.website}
                      onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Photo */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Photo</h2>
                <div className="flex items-start gap-8">
                  <div>
                    <img
                      src={profile.avatar_url || 'https://via.placeholder.com/200'}
                      alt="Profile"
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Upload size={20} />
                      Upload Profile Image
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      *minimum 500px x 500px
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => {
                    localStorage.setItem('profile', JSON.stringify(profile));
                  }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <UserSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            profile={profile}
            user={user}
            notifications={notifications}
          />

          {/* Main Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}