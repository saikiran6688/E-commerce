import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LUXE</h3>
            <p className="text-gray-600 mb-4">
              Discover premium fashion with our curated collection of timeless pieces for men, women, and kids.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/men" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Kids Collection
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-600 hover:text-gray-900 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Sale Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers and new arrivals.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 LUXE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;