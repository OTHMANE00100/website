import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              ATTMANE ZARKOUI
              <span className="text-orange-500 block text-lg">SHOP</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted marketing hub for premium tools, services, and content. 
              Empowering businesses to grow and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-orange-500 mr-3" size={16} />
                <span className="text-gray-300">info@attmanezarkoui.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-500 mr-3" size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-orange-500 mr-3" size={16} />
                <span className="text-gray-300">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ATTMANE ZARKOUI SHOP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;