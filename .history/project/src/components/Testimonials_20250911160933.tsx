import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Veterinarian, 15 years experience",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "I've been recommending Tinku & Co. to my clients for years. The science-backed formulations consistently deliver excellent health outcomes for pets of all ages.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      title: "Golden Retriever Owner",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "Max has been on Tinku & Co. for 2 years now. His coat is shinier, he has more energy, and our vet says his health markers are excellent!",
      rating: 5
    },
    {
      name: "James Chen",
      title: "Cat Parent to 3 Rescue Cats",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "All three of my cats love the taste, and I love seeing them healthy and active. The urinary health formula has been a game-changer for my senior cat.",
      rating: 5
    },
    {
      name: "Dr. Michael Thompson",
      title: "Animal Nutritionist",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "The research behind Tinku & Co.'s formulations is impressive. They truly understand the nutritional needs of pets at different life stages.",
      rating: 5
    },
    {
      name: "Lisa Park",
      title: "Dog Trainer & Breeder",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "I feed all my dogs Tinku & Co. The puppies develop beautifully, and the adult dogs maintain perfect body condition. Highly recommended!",
      rating: 5
    },
    {
      name: "Robert Williams",
      title: "Senior Dog Owner",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
      quote: "My 12-year-old Labrador acts like a puppy again since switching to the senior formula. The joint support ingredients really work!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-6">
            Real Results
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-8">
            From Happy Pets & Caring Families
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how tailored nutrition plans improved energy, coat shine, digestion, and overall wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Removed stats bar per request:
            50,000+ Happy Pets, 98% Satisfaction Rate, 5,000+ Vet Recommendations
        */}
      </div>
    </section>
  );
};

export default Testimonials;