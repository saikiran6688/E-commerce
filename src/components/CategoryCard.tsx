import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, className = '' }) => {
  return (
    <Link to={`/category/${id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-white text-sm opacity-90 group-hover:opacity-100 transition-opacity">
              Explore Collection
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;