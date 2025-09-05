'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice, formatRating, calculateDiscountPercentage, isOnSale } from '@/lib/formatters';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const { addToCart, getItemQuantity } = useCart();
  const itemQuantity = getItemQuantity(product.id);
  const showSale = isOnSale(product.originalPrice, product.price);
  const discountPercent = showSale && product.originalPrice ? 
    calculateDiscountPercentage(product.originalPrice, product.price) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.stock <= 0) {
      toast.error('This product is out of stock');
      return;
    }
    
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-200 ${className}`}>
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {showSale && (
              <Badge 
                variant="destructive" 
                className="absolute top-2 left-2 z-10"
              >
                -{discountPercent}%
              </Badge>
            )}
            {product.featured && (
              <Badge 
                variant="secondary" 
                className="absolute top-2 right-2 z-10"
              >
                Featured
              </Badge>
            )}
            {product.stock <= 5 && product.stock > 0 && (
              <Badge 
                variant="outline" 
                className="absolute bottom-2 left-2 z-10 bg-background/90"
              >
                Only {product.stock} left
              </Badge>
            )}
            {product.stock === 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                <Badge variant="destructive">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>
        </Link>
      </CardHeader>

      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-xs text-muted-foreground line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-xs font-medium ml-1">
                  {formatRating(product.rating)}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">
                {formatPrice(product.price)}
              </span>
              {showSale && product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full"
          size="sm"
        >
          {product.stock === 0 ? (
            'Out of Stock'
          ) : itemQuantity > 0 ? (
            `In Cart (${itemQuantity})`
          ) : (
            'Add to Cart'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};