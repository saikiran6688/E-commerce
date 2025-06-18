import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, total, itemCount, removeFromCart, updateQuantity } = useCart();

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/"
            className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Cart Items ({itemCount})
                </h2>

                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 pb-6 border-b border-gray-200 last:border-b-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <span>Color: {item.selectedColor}</span>
                          <span>Size: {item.selectedSize}</span>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(index.toString(), item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index.toString(), item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">
                              {formatPrice(item.product.price * item.quantity)}
                            </div>
                            {item.product.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                {formatPrice(item.product.originalPrice * item.quantity)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(index.toString())}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {total >= 1999 ? 'Free' : formatPrice(199)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">{formatPrice(Math.round(total * 0.18))}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      {formatPrice(total + (total >= 1999 ? 0 : 199) + Math.round(total * 0.18))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-gray-900 text-white py-3 px-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md font-semibold hover:bg-gray-50 transition-colors text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {total < 1999 && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                  <p className="text-sm text-yellow-800">
                    Add {formatPrice(1999 - total)} more to get free shipping!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;