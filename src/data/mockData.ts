import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    price: 1299,
    originalPrice: 1699,
    category: 'men',
    subcategory: 'shirts',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'White', 'Navy', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A premium cotton t-shirt with a modern fit. Perfect for everyday wear.',
    material: '100% Premium Cotton',
    care: 'Machine wash cold, tumble dry low',
    inStock: true,
    rating: 4.5,
    reviewCount: 127,
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    price: 3499,
    category: 'women',
    subcategory: 'dresses',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536620/pexels-photo-1536620.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Floral Pink', 'Ocean Blue', 'Sunset Orange'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Flowing summer dress perfect for any occasion. Lightweight and comfortable.',
    material: '95% Viscose, 5% Elastane',
    care: 'Hand wash recommended, dry flat',
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    isNew: true
  },
  {
    id: '3',
    name: 'Premium Denim Jacket',
    price: 4999,
    category: 'men',
    subcategory: 'jackets',
    images: [
      'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040174/pexels-photo-1040174.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Classic Blue', 'Dark Wash', 'Light Wash'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Timeless denim jacket crafted from premium denim for lasting style.',
    material: '100% Cotton Denim',
    care: 'Machine wash cold, hang dry',
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
  },
  {
    id: '4',
    name: 'Cozy Knit Sweater',
    price: 2799,
    originalPrice: 3499,
    category: 'women',
    subcategory: 'sweaters',
    images: [
      'https://images.pexels.com/photos/1536623/pexels-photo-1536623.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536624/pexels-photo-1536624.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Cream', 'Dusty Rose', 'Sage Green', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ultra-soft knit sweater perfect for chilly days. Relaxed fit.',
    material: '70% Wool, 30% Cashmere',
    care: 'Dry clean only',
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    isSale: true
  },
  {
    id: '5',
    name: 'Kids Colorful Hoodie',
    price: 1899,
    category: 'kids',
    subcategory: 'hoodies',
    images: [
      'https://images.pexels.com/photos/1536621/pexels-photo-1536621.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536622/pexels-photo-1536622.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Rainbow', 'Purple', 'Mint Green', 'Coral'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    description: 'Vibrant and comfortable hoodie designed for active kids.',
    material: '80% Cotton, 20% Polyester',
    care: 'Machine wash cold, tumble dry medium',
    inStock: true,
    rating: 4.4,
    reviewCount: 94,
    isNew: true
  },
  {
    id: '6',
    name: 'Tailored Business Blazer',
    price: 6999,
    category: 'women',
    subcategory: 'blazers',
    images: [
      'https://images.pexels.com/photos/1536625/pexels-photo-1536625.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536626/pexels-photo-1536626.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: ['Black', 'Navy', 'Charcoal', 'Camel'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sophisticated blazer perfect for professional settings.',
    material: '95% Wool, 5% Elastane',
    care: 'Dry clean only',
    inStock: true,
    rating: 4.9,
    reviewCount: 78,
  }
];

export const categories = [
  { id: 'men', name: 'Men', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'women', name: 'Women', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 'kids', name: 'Kids', image: 'https://images.pexels.com/photos/1536621/pexels-photo-1536621.jpeg?auto=compress&cs=tinysrgb&w=800' }
];