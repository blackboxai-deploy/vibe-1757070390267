import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopHub - Your Online Shopping Destination',
  description: 'Discover amazing products at great prices. Shop electronics, clothing, home goods, and more with fast shipping and excellent customer service.',
  keywords: 'shopping, ecommerce, electronics, clothing, home goods, online store',
  authors: [{ name: 'ShopHub Team' }],
  creator: 'ShopHub',
  publisher: 'ShopHub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ShopHub - Your Online Shopping Destination',
    description: 'Discover amazing products at great prices with fast shipping.',
    url: 'https://localhost:3000',
    siteName: 'ShopHub',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=ShopHub+Online+Store+Social+Media+Cover+Image',
        width: 1200,
        height: 630,
        alt: 'ShopHub Online Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopHub - Your Online Shopping Destination',
    description: 'Discover amazing products at great prices with fast shipping.',
    images: ['https://placehold.co/1200x630?text=ShopHub+Online+Store+Social+Media+Cover+Image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ShopHub',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}