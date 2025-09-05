import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://placehold.co/400x300?text=Modern+electronics+store+with+smartphones+tablets+laptops+displayed+on+sleek+white+shelves',
    productCount: 15
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://placehold.co/400x300?text=Stylish+clothing+boutique+with+trendy+fashion+items+hanging+on+modern+racks',
    productCount: 25
  },
  {
    id: 'home',
    name: 'Home & Garden',
    description: 'Everything for your home and garden',
    image: 'https://placehold.co/400x300?text=Beautiful+home+decor+items+and+garden+accessories+in+modern+setting',
    productCount: 20
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Athletic gear and fitness equipment',
    image: 'https://placehold.co/400x300?text=Modern+fitness+equipment+and+sports+gear+in+professional+gym+setting',
    productCount: 18
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: 'smartphone-pro-x1',
    name: 'Smartphone Pro X1',
    description: 'Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life. Features include 128GB storage, wireless charging, and water resistance.',
    price: 899,
    originalPrice: 999,
    image: 'https://placehold.co/600x600?text=Premium+smartphone+with+sleek+design+metallic+finish+on+modern+backdrop',
    category: 'electronics',
    stock: 25,
    rating: 4.8,
    reviews: 324,
    featured: true,
    tags: ['5g', 'smartphone', 'camera', 'wireless-charging']
  },
  {
    id: 'wireless-earbuds-elite',
    name: 'Wireless Earbuds Elite',
    description: 'Premium wireless earbuds with noise cancellation, premium sound quality, and 24-hour battery life with charging case.',
    price: 199,
    originalPrice: 249,
    image: 'https://placehold.co/600x600?text=Sleek+wireless+earbuds+in+charging+case+with+premium+minimalist+design',
    category: 'electronics',
    stock: 50,
    rating: 4.6,
    reviews: 198,
    featured: true,
    tags: ['wireless', 'audio', 'noise-cancellation']
  },
  {
    id: 'laptop-ultrabook-15',
    name: 'Ultrabook Laptop 15"',
    description: 'Lightweight laptop with powerful performance, 16GB RAM, 512GB SSD, and stunning 15-inch display. Perfect for work and entertainment.',
    price: 1299,
    image: 'https://placehold.co/600x600?text=Modern+ultrabook+laptop+open+displaying+colorful+screen+on+clean+desk',
    category: 'electronics',
    stock: 15,
    rating: 4.7,
    reviews: 89,
    featured: false,
    tags: ['laptop', 'ultrabook', 'ssd', '16gb']
  },
  {
    id: 'smart-watch-fitness',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking watch with heart rate monitor, GPS, sleep tracking, and 7-day battery life.',
    price: 299,
    originalPrice: 349,
    image: 'https://placehold.co/600x600?text=Modern+smartwatch+with+colorful+fitness+display+on+athletic+wrist',
    category: 'electronics',
    stock: 30,
    rating: 4.5,
    reviews: 156,
    featured: true,
    tags: ['smartwatch', 'fitness', 'gps', 'health']
  },

  // Clothing
  {
    id: 'premium-denim-jacket',
    name: 'Premium Denim Jacket',
    description: 'Classic denim jacket made from premium cotton with modern fit and timeless style. Perfect for casual and semi-formal occasions.',
    price: 89,
    originalPrice: 120,
    image: 'https://placehold.co/600x600?text=Stylish+denim+jacket+on+model+with+urban+street+fashion+background',
    category: 'clothing',
    stock: 40,
    rating: 4.4,
    reviews: 78,
    featured: true,
    tags: ['denim', 'jacket', 'casual', 'cotton']
  },
  {
    id: 'athletic-running-shoes',
    name: 'Athletic Running Shoes',
    description: 'High-performance running shoes with advanced cushioning, breathable mesh upper, and durable rubber outsole.',
    price: 129,
    image: 'https://placehold.co/600x600?text=Professional+running+shoes+with+modern+athletic+design+on+track+surface',
    category: 'clothing',
    stock: 60,
    rating: 4.6,
    reviews: 234,
    featured: true,
    tags: ['shoes', 'running', 'athletic', 'breathable']
  },
  {
    id: 'casual-cotton-tshirt',
    name: 'Casual Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt with modern fit and soft fabric. Available in multiple colors for everyday wear.',
    price: 24,
    originalPrice: 35,
    image: 'https://placehold.co/600x600?text=Comfortable+cotton+t+shirt+in+multiple+colors+hanging+on+modern+display',
    category: 'clothing',
    stock: 100,
    rating: 4.3,
    reviews: 167,
    featured: false,
    tags: ['tshirt', 'cotton', 'casual', 'comfortable']
  },

  // Home & Garden
  {
    id: 'ceramic-dinnerware-set',
    name: 'Ceramic Dinnerware Set',
    description: 'Elegant 16-piece ceramic dinnerware set with modern design. Includes plates, bowls, and mugs for 4 people. Dishwasher and microwave safe.',
    price: 79,
    originalPrice: 99,
    image: 'https://placehold.co/600x600?text=Elegant+ceramic+dinnerware+set+arranged+on+modern+dining+table+setting',
    category: 'home',
    stock: 25,
    rating: 4.5,
    reviews: 92,
    featured: true,
    tags: ['dinnerware', 'ceramic', 'dining', 'dishwasher-safe']
  },
  {
    id: 'indoor-plant-collection',
    name: 'Indoor Plant Collection',
    description: 'Set of 3 low-maintenance indoor plants perfect for home decoration. Includes pots and care instructions for beginners.',
    price: 45,
    image: 'https://placehold.co/600x600?text=Beautiful+indoor+plants+in+modern+pots+arranged+in+bright+home+interior',
    category: 'home',
    stock: 35,
    rating: 4.7,
    reviews: 128,
    featured: false,
    tags: ['plants', 'indoor', 'decoration', 'low-maintenance']
  },

  // Sports & Fitness
  {
    id: 'yoga-mat-premium',
    name: 'Premium Yoga Mat',
    description: 'High-quality non-slip yoga mat with extra thickness for comfort. Made from eco-friendly materials with excellent grip and durability.',
    price: 49,
    originalPrice: 69,
    image: 'https://placehold.co/600x600?text=Premium+yoga+mat+unrolled+in+peaceful+studio+setting+with+natural+lighting',
    category: 'sports',
    stock: 45,
    rating: 4.6,
    reviews: 186,
    featured: true,
    tags: ['yoga', 'mat', 'non-slip', 'eco-friendly']
  },
  {
    id: 'adjustable-dumbbells-set',
    name: 'Adjustable Dumbbells Set',
    description: 'Space-saving adjustable dumbbells with quick weight change system. Ranges from 5 to 50 pounds per dumbbell with secure locking mechanism.',
    price: 299,
    image: 'https://placehold.co/600x600?text=Professional+adjustable+dumbbells+in+modern+home+gym+with+weight+plates',
    category: 'sports',
    stock: 20,
    rating: 4.8,
    reviews: 94,
    featured: true,
    tags: ['dumbbells', 'adjustable', 'home-gym', 'strength-training']
  }
];

// Helper functions
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};