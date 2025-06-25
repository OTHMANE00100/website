import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-800">
                ATTMANE ZARKOUI
                <span className="text-orange-500 block text-sm font-medium">SHOP</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Home</a>
            <a href="#products" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Products</a>
            <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-800 transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Products</a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;