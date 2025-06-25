import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    image: string;
  } | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, product }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'google'>('card');

  if (!isOpen || !product) return null;

  const handleGooglePay = () => {
    // This would integrate with actual Google Pay API
    alert('Google Pay integration would be implemented here with proper credentials');
  };

  const handleCardPayment = () => {
    // This would integrate with Stripe or similar payment processor
    alert('Card payment processing would be implemented here');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Secure Checkout</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Product Summary */}
          <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-800">${product.price}</p>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('google')}
                className={`w-full p-4 border-2 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 ${
                  paymentMethod === 'google'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Smartphone className="text-gray-700" size={24} />
                <span className="font-semibold">Google Pay</span>
              </button>
              
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 border-2 rounded-lg flex items-center justify-center gap-3 transition-all duration-200 ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="text-gray-700" size={24} />
                <span className="font-semibold">Credit/Debit Card</span>
              </button>
            </div>
          </div>

          {/* Payment Form */}
          {paymentMethod === 'card' && (
            <div className="mb-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={paymentMethod === 'google' ? handleGooglePay : handleCardPayment}
              className="flex-1 py-3 px-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Pay ${product.price}
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              🔒 Secure payment powered by industry-standard encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;