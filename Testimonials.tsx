import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "ATTMANE ZARKOUI SHOP transformed our marketing strategy completely. The digital marketing masterclass increased our conversion rate by 340% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The brand strategy blueprint is phenomenal. It's like having a Fortune 500 marketing team at your fingertips. Absolutely worth every penny!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeHub Agency",
      avatar: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The social media growth toolkit helped us scale our clients' followers by 500% on average. The templates and strategies are top-notch!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "E-commerce Manager, ShopSmart",
      avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Email marketing automation suite boosted our email revenue by 280%. The workflows are incredibly effective and easy to implement.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with our premium marketing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="text-orange-500 mr-2" size={24} />
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;