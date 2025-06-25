import React from 'react';
import { Target, TrendingUp, Users, Megaphone, BarChart3, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive marketing strategies tailored to your business goals and target audience.",
      features: ["Market Analysis", "Competitor Research", "Goal Setting", "Action Plans"]
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Data-driven approaches to maximize your marketing ROI and accelerate business growth.",
      features: ["Conversion Rate Optimization", "A/B Testing", "Performance Tracking", "Scale Strategies"]
    },
    {
      icon: Users,
      title: "Audience Development",
      description: "Build and engage your target audience across multiple channels and platforms.",
      features: ["Audience Research", "Persona Development", "Community Building", "Engagement Strategies"]
    },
    {
      icon: Megaphone,
      title: "Brand Promotion",
      description: "Amplify your brand message and increase visibility across digital and traditional channels.",
      features: ["Brand Messaging", "Content Strategy", "PR & Outreach", "Campaign Management"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analysis to measure performance and optimize strategies.",
      features: ["Data Analytics", "Performance Reports", "ROI Tracking", "Strategic Insights"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Stay ahead of the curve with cutting-edge marketing technologies and methodologies.",
      features: ["Trend Analysis", "Technology Integration", "Creative Solutions", "Future Planning"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Marketing <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing solutions to help your business thrive in today's competitive landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-2xl mb-6">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;