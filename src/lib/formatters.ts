// Utility functions for formatting data

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatShortDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const formatReviewCount = (count: number): string => {
  if (count === 0) return 'No reviews';
  if (count === 1) return '1 review';
  return `${count} reviews`;
};

export const formatStock = (stock: number): string => {
  if (stock === 0) return 'Out of stock';
  if (stock <= 5) return `Only ${stock} left`;
  return 'In stock';
};

export const getStockStatus = (stock: number): 'out-of-stock' | 'low-stock' | 'in-stock' => {
  if (stock === 0) return 'out-of-stock';
  if (stock <= 5) return 'low-stock';
  return 'in-stock';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const generateOrderId = (): string => {
  return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
};

export const calculateDiscountPercentage = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

export const isOnSale = (originalPrice?: number, currentPrice?: number): boolean => {
  return !!(originalPrice && currentPrice && originalPrice > currentPrice);
};