import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-16 bg-[#1B2B3F] text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Contact us today if you'd like to know more
          </h2>
          <p className="text-gray-300">
            about how we help buy, sell or rent your home
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
          <h3 className="text-gray-800 text-xl font-semibold text-center mb-2">
            Schedule a meeting with our team
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Our experts and developers would love to contribute
            their expertise and insights to your real estate plans.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}