import React, { useState, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/mockData';

const ProductList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    sizes: [] as string[],
    colors: [] as string[],
    onSale: false,
    newArrivals: false,
  });

  // Get search query from URL params
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  // Filter products based on category, search, and filters
  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    // Filter by category
    if (category && category !== 'all') {
      products = products.filter(product => product.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply filters
    products = products.filter(product => {
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some(size => product.sizes.includes(size))) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some(color => product.colors.includes(color))) {
        return false;
      }

      // Sale filter
      if (filters.onSale && !product.isSale) {
        return false;
      }

      // New arrivals filter
      if (filters.newArrivals && !product.isNew) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        return products.sort((a, b) => a.price - b.price);
      case 'price-high':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'newest':
      default:
        return products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
  }, [category, searchQuery, filters, sortBy]);

  // Get unique sizes and colors for filter options
  const allSizes = [...new Set(mockProducts.flatMap(p => p.sizes))];
  const allColors = [...new Set(mockProducts.flatMap(p => p.colors))];

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleFilter = (key: 'sizes' | 'colors', value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const getPageTitle = () => {
    if (searchQuery) {
      return `Search results for "${searchQuery}"`;
    }
    if (category) {
      return category.charAt(0).toUpperCase() + category.slice(1) + "'s Collection";
    }
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
            <p className="text-gray-600 mt-2">{filteredProducts.length} products found</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-white rounded-lg border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-600'} rounded-l-lg`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600'} rounded-r-lg`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 bg-white rounded-lg p-6 h-fit`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{filters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Size</h4>
              <div className="grid grid-cols-3 gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter('sizes', size)}
                    className={`p-2 text-sm border rounded ${
                      filters.sizes.includes(size)
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Color</h4>
              <div className="grid grid-cols-4 gap-2">
                {allColors.slice(0, 12).map((color) => (
                  <button
                    key={color}
                    onClick={() => toggleFilter('colors', color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      filters.colors.includes(color) ? 'border-gray-900' : 'border-gray-300'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase().includes('black') ? '#000' :
                                      color.toLowerCase().includes('white') ? '#fff' :
                                      color.toLowerCase().includes('blue') ? '#3B82F6' :
                                      color.toLowerCase().includes('red') ? '#EF4444' :
                                      color.toLowerCase().includes('green') ? '#10B981' :
                                      color.toLowerCase().includes('pink') ? '#EC4899' :
                                      color.toLowerCase().includes('purple') ? '#8B5CF6' :
                                      color.toLowerCase().includes('yellow') ? '#F59E0B' :
                                      color.toLowerCase().includes('gray') || color.toLowerCase().includes('grey') ? '#6B7280' :
                                      '#D1D5DB'
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Special Filters */}
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={(e) => handleFilterChange('onSale', e.target.checked)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="ml-2 text-sm text-gray-700">On Sale</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.newArrivals}
                  onChange={(e) => handleFilterChange('newArrivals', e.target.checked)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span className="ml-2 text-sm text-gray-700">New Arrivals</span>
              </label>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className={viewMode === 'list' ? 'flex' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;