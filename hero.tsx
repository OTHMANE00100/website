import React from 'react';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-orange-400">ATTMANE ZARKOUI</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Marketing Hub</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover premium marketing tools, services, and content to grow your brand and business with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
              Shop Now <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Zap className="text-orange-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Fast & Secure</h3>
              <p className="text-blue-100 text-sm">Lightning-fast checkout with Google Pay integration</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="text-orange-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Trusted Platform</h3>
              <p className="text-blue-100 text-sm">Secure transactions and premium quality guaranteed</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Award className="text-orange-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Expert Content</h3>
              <p className="text-blue-100 text-sm">Curated by marketing professionals and industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;