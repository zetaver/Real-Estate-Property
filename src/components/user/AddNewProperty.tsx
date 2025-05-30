import React, { useState } from 'react';
import { Bell, ChevronDown, Map, X, Plus } from 'lucide-react';

interface Package {
  name: string;
  listings_included: number;
  listings_remaining: number;
  featured_included: number;
  featured_remaining: number;
  images_per_listing: number;
  expires_at: string | null;
}

export default function AddNewProperty() {
  const [showPackages, setShowPackages] = useState(false);
  const [currentPackage] = useState<Package>({
    name: 'Free Membership',
    listings_included: 2,
    listings_remaining: 2,
    featured_included: 1,
    featured_remaining: 1,
    images_per_listing: 5,
    expires_at: null
  });

  const stats = [
    { label: 'Listings Included', value: currentPackage.listings_included },
    { label: 'Listings Remaining', value: currentPackage.listings_remaining },
    { label: 'Featured Included', value: currentPackage.featured_included },
    { label: 'Featured Remaining', value: currentPackage.featured_remaining },
    { label: 'Images / listing', value: currentPackage.images_per_listing }
  ];

  const interiorDetails = [
    'Equipped Kitchen',
    'Media Room',
    'Gym',
    'Laundry'
  ];

  const outdoorDetails = [
    'Back yard',
    'Garage Attached',
    'Basketball court',
    'Hot Bath',
    'Front yard',
    'Pool'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Package Info */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-gray-600">Your Current Package: </span>
              <span className="text-[#6366f1] font-medium">{currentPackage.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-[#f97316] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                6
              </span>
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowPackages(!showPackages)}
          className="mt-6 flex items-center gap-2 text-[#6366f1] font-medium"
        >
          See Available Packages and Payment Methods
          <ChevronDown className={`w-4 h-4 transition-transform ${showPackages ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Submit Property Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome</h1>
          <h2 className="text-4xl font-bold">Submit Property</h2>
        </div>

        <div className="bg-[#f97316] text-white p-4 rounded-lg mb-8">
          These fields are mandatory: Title, Property Media, Property Address
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Property Description</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    *Title (mandatory)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Description
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">b</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">i</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">b-quote</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">ins</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">ul</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">ol</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">li</button>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">close tags</button>
                  </div>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  ></textarea>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Property Price</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Price in $ (only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    After Price Label (ex: "/month")
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Before Price Label (ex: "from ")
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Second Price in $ (only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    After Second Price Label (ex: "/month")
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Before Second Price Label (ex: "from ")
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Yearly Tax Rate
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Homeowners Association Fee(monthly)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Select Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Category</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>None</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Listed In</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>None</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Listing Location</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">*Address</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">County / State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Neighborhood</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Zip</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Country</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>United States</option>
                  </select>
                </div>
                <div className="relative h-[300px] bg-gray-100 rounded-lg">
                  <div className="absolute top-2 left-2 flex gap-2">
                    <button className="px-4 py-1 bg-white rounded shadow">Map</button>
                    <button className="px-4 py-1 bg-white rounded shadow">Satellite</button>
                  </div>
                  <button className="absolute top-2 right-2 p-1 bg-white rounded shadow">
                    <X size={20} />
                  </button>
                  <div className="absolute bottom-2 right-2 flex flex-col gap-2">
                    <button className="p-1 bg-white rounded shadow">
                      <Plus size={20} />
                    </button>
                    <button className="p-1 bg-white rounded shadow">
                      <X size={20} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Latitude (for Google Maps)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Longitude (for Google Maps)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Google Street View - Camera Angle (value from 0 to 360)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="360"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Enable Google Street View</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Hide Map Marker</span>
                  </label>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Select Energy Class</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Energy Class</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>Select Energy Class (EU regulation)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Energy Index in kWh/m2a
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Listing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Size in ft² (*only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Lot Size in ft² (*only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Rooms (*only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Bedrooms (*only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Bathrooms (*only numbers)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Custom ID (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Garages (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Year Built (*numeric)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Garage Size (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Available from (*date)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Basement (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Extra Details (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Roofing (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Exterior Material (*text)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Structure Type</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>Not Available</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Floors No</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>Not Available</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Owner/Agent notes (*not visible on front end)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                ></textarea>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Select Property Status</h3>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Property Status</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                  <option>no status</option>
                </select>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Amenities and Features</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Interior Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interiorDetails.map((detail, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Outdoor Details</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {outdoorDetails.map((detail, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Media */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Listing Media</h3>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-gray-400">
                    Drag and Drop Images or
                  </div>
                  <button className="px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e6] transition-colors">
                    Select Media
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500 space-y-1 mt-4">
                <p>* At least 1 image is required for a valid submission.Minimum size is 500/500px. You can upload maximum 5 images</p>
                <p>** Double click on the image to select featured.</p>
                <p>*** Change images order with Drag & Drop.</p>
                <p>**** PDF files upload supported as well.</p>
                <p>***** Images might take longer to be processed.</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
              <div>
                <label className="flex items-center gap-2 mb-4">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-600">Use Floor Plans</span>
                </label>
                <button className="w-full px-6 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e6] transition-colors">
                  Add Another Plan
                </button>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Virtual Tour</h3>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Virtual Tour:</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                ></textarea>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Video Option</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Video from</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <option>vimeo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Embed Video Id:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}