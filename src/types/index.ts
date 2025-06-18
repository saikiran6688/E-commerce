export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  material: string;
  care: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  type: 'home' | 'work';
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  orderDate: string;
  estimatedDelivery: string;
}