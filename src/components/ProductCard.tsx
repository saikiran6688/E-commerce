import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {product.isNew && (
              <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">NEW</span>
            )}
            {product.isSale && (
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
              inWishlist 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white bg-opacity-90 text-gray-600 hover:bg-opacity-100'
            }`}
          >
            <Heart 
              className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} 
            />
          </button>

          {/* Quick View on hover */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Quick View
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex items-center mt-3 space-x-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
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
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;