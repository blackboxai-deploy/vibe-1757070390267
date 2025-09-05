import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">ShopHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted online shopping destination. Discover amazing products at great prices with fast, reliable shipping.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <span className="sr-only">Facebook</span>
                📘
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <span className="sr-only">Twitter</span>
                🐦
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <span className="sr-only">Instagram</span>
                📷
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <span className="sr-only">LinkedIn</span>
                💼
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Products
              </Link>
              <Link href="/products?category=electronics" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Electronics
              </Link>
              <Link href="/products?category=clothing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Clothing
              </Link>
              <Link href="/products?category=home" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home & Garden
              </Link>
              <Link href="/products?category=sports" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sports & Fitness
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/shipping" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="/track-order" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Track Your Order
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest deals and product updates.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button type="submit" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ShopHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">We accept:</p>
            <div className="flex space-x-1">
              <div className="h-6 w-10 bg-muted rounded border flex items-center justify-center text-xs">
                💳
              </div>
              <div className="h-6 w-10 bg-muted rounded border flex items-center justify-center text-xs">
                🏦
              </div>
              <div className="h-6 w-10 bg-muted rounded border flex items-center justify-center text-xs">
                💰
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};