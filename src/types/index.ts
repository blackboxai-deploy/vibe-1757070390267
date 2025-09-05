// Core types for the e-commerce application

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone?: string;
  joinDate: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: User['address'];
  orderDate: string;
  estimatedDelivery?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  search?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'name' | 'newest';
}