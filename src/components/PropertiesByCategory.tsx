import React from 'react';

interface CategoryCard {
  title: string;
  image: string;
  listings: number;
}

const categories: CategoryCard[] = [
  {
    title: "Apartments",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    listings: 17
  },
  {
    title: "Condos",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    listings: 8
  },
  {
    title: "Duplexes",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    listings: 0
  },
  {
    title: "Houses",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    listings: 5
  },
  {
    title: "Offices",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    listings: 2
  },
  {
    title: "Villas",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    listings: 4
  }
];

export default function PropertiesByCategory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Properties by Category</h2>
        <p className="text-gray-600 text-center mb-12">
          Highlight the best of your properties by using the List Category shortcode. You can
          list specific properties categories, types, cities, areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-xl font-semibold mb-1">{category.title}</h3>
                <p className="text-gray-200">{category.listings} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}