import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">LUXE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/category/men" className="text-gray-700 hover:text-gray-900 transition-colors">
              Men
            </Link>
            <Link to="/category/women" className="text-gray-700 hover:text-gray-900 transition-colors">
              Women
            </Link>
            <Link to="/category/kids" className="text-gray-700 hover:text-gray-900 transition-colors">
              Kids
            </Link>
            <Link to="/new-arrivals" className="text-gray-700 hover:text-gray-900 transition-colors">
              New Arrivals
            </Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 transition-colors font-semibold">
              Sale
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account" className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/wishlist" className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-700 hover:text-gray-900 transition-colors relative">
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="pb-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <Link
                to="/category/men"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/category/women"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/category/kids"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                to="/new-arrivals"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                to="/sale"
                className="block px-3 py-2 text-red-600 hover:text-red-700 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Sale
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center justify-around pt-4 border-t border-gray-200 mt-4">
                <Link
                  to="/account"
                  className="flex flex-col items-center p-2 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-6 w-6" />
                  <span className="text-xs mt-1">Account</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex flex-col items-center p-2 text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="h-6 w-6" />
                  <span className="text-xs mt-1">Wishlist</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex flex-col items-center p-2 text-gray-700 relative"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span className="text-xs mt-1">Cart</span>
                  {itemCount > 0 && (
                    <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;