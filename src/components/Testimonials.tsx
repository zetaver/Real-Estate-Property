import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Dana Gilmore",
    role: "developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96",
    content: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating: 5
  },
  {
    name: "Susan Barkley",
    role: "happy seller",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96",
    content: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating: 5
  },
  {
    name: "Lisa Simpson",
    role: "happy buyer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=96&h=96",
    content: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating: 5
  },
  {
    name: "Sara Loreley",
    role: "buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96",
    content: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating: 5
  },
  {
    name: "Virginia Wolf",
    role: "happy seller",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96",
    content: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating: 5
  },
  {
    name: "Jessica Fowley",
    role: "happy buyer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=96&h=96",
    content: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-gray-600 text-center mb-12">
          Publish the best of your client testimonials and let the world know what a great
          agent or real estate agency you are. Testimonials build trust.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}