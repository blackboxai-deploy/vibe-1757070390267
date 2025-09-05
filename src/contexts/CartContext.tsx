'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartState, CartItem, Product } from '@/types';

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        newItems = [...state.items, {
          product: action.payload.product,
          quantity: action.payload.quantity
        }];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.product.id !== action.payload);
      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0
      };

    case 'LOAD_CART':
      return {
        items: action.payload,
        total: calculateTotal(action.payload),
        itemCount: calculateItemCount(action.payload)
      };

    default:
      return state;
  }
};

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemQuantity = (productId: string): number => {
    const item = state.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const value: CartContextType = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};