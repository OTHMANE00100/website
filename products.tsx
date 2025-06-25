import React from 'react';
import { ShoppingCart, Star, Eye } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Digital Marketing Masterclass",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 324,
      description: "Complete digital marketing course with proven strategies and real-world case studies.",
      category: "Course"
    },
    {
      id: 2,
      name: "Social Media Growth Toolkit",
      price: 79.99,
      originalPrice: 119.99,
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 156,
      description: "Professional templates, calendars, and analytics tools for social media success.",
      category: "Tools"
    },
    {
      id: 3,
      name: "Brand Strategy Blueprint",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5.0,
      reviews: 89,
      description: "Comprehensive brand development framework used by Fortune 500 companies.",
      category: "Strategy"
    },
    {
      id: 4,
      name: "Email Marketing Automation",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 245,
      description: "Advanced email sequences and automation workflows that convert.",
      category: "Automation"
    },
    {
      id: 5,
      name: "Content Creation Suite",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 178,
      description: "Premium templates, graphics, and content calendars for consistent marketing.",
      category: "Templates"
    },
    {
      id: 6,
      name: "Analytics & ROI Tracker",
      price: 249.99,
      originalPrice: 299.99,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 112,
      description: "Professional dashboard to track marketing performance and ROI across all channels.",
      category: "Analytics"
    }
  ];

  const handlePurchase = (productName: string, price: number) => {
    // This would integrate with Google Pay or other payment systems
    alert(`Initiating purchase for ${productName} - $${price}`);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium marketing tools and resources designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-200">
                    <Eye size={16} className="text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-800">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </div>
                </div>
                
                <button 
                  onClick={() => handlePurchase(product.name, product.price)}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;