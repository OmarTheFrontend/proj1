import { Category, Brand, Product } from '../models/ecommerce.model';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Fresh Groceries',
    slug: 'groceries',
    description: 'Farm-fresh organic fruits, vegetables, and everyday greens.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    productCount: 12
  },
  {
    id: 'cat-2',
    name: 'Dairy & Breakfast',
    slug: 'dairy',
    description: 'Fresh milk, artisanal cheeses, butter, eggs, and breakfast cereals.',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80',
    productCount: 8
  },
  {
    id: 'cat-3',
    name: 'Snacks & Bakery',
    slug: 'snacks',
    description: 'Crispy chips, organic cookies, freshly baked breads, and treats.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    productCount: 10
  },
  {
    id: 'cat-4',
    name: 'Beverages & Juices',
    slug: 'beverages',
    description: 'Refreshing cold-pressed juices, sparkling waters, teas, and coffee.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
    productCount: 9
  },
  {
    id: 'cat-5',
    name: 'Beauty & Personal Care',
    slug: 'beauty',
    description: 'Natural skincare, organic shampoos, herbal soaps, and wellness.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    productCount: 7
  },
  {
    id: 'cat-6',
    name: 'Household & Cleaning',
    slug: 'household',
    description: 'Eco-friendly dish soaps, laundry detergents, and home essentials.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    productCount: 6
  }
];

export const MOCK_BRANDS: Brand[] = [
  {
    id: 'brand-1',
    name: 'FreshFarm',
    slug: 'freshfarm',
    logo: '🌿',
    productCount: 15
  },
  {
    id: 'brand-2',
    name: 'OrganicValley',
    slug: 'organicvalley',
    logo: '🥛',
    productCount: 10
  },
  {
    id: 'brand-3',
    name: 'NaturePure',
    slug: 'naturepure',
    logo: '🍏',
    productCount: 12
  },
  {
    id: 'brand-4',
    name: 'DailyBites',
    slug: 'dailybites',
    logo: '🍞',
    productCount: 8
  },
  {
    id: 'brand-5',
    name: 'VitaGlow',
    slug: 'vitaglow',
    logo: '✨',
    productCount: 7
  },
  {
    id: 'brand-6',
    name: 'CleanHome',
    slug: 'cleanhome',
    logo: '🛡️',
    productCount: 6
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Organic Hass Avocados (Pack of 3)',
    description: 'Creamy, nutrient-rich organic Hass avocados harvested at peak ripeness. Perfect for guacamole, salads, or toast.',
    price: 4.99,
    originalPrice: 6.50,
    rating: 4.8,
    reviewCount: 124,
    category: 'groceries',
    brand: 'FreshFarm',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    stock: 45,
    isFeatured: true,
    isBestSeller: true,
    tags: ['Organic', 'Fresh', 'Superfood']
  },
  {
    id: 'prod-2',
    name: 'Fresh Organic Whole Milk (1L)',
    description: 'Pure, pasteurized organic whole milk from grass-fed cows raised on sustainable pastures.',
    price: 2.89,
    originalPrice: 3.49,
    rating: 4.9,
    reviewCount: 98,
    category: 'dairy',
    brand: 'OrganicValley',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    stock: 30,
    isFeatured: true,
    isBestSeller: true,
    tags: ['Dairy', 'Organic', 'Calcium']
  },
  {
    id: 'prod-3',
    name: 'Artisan Sourdough Loaf',
    description: 'Slow-fermented artisan sourdough bread with a crispy crust and soft, chewy crumb. Baked fresh daily.',
    price: 4.50,
    originalPrice: 5.25,
    rating: 4.7,
    reviewCount: 82,
    category: 'snacks',
    brand: 'DailyBites',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
    stock: 18,
    isFeatured: true,
    isBestSeller: false,
    tags: ['Bakery', 'Artisan', 'Freshly Baked']
  },
  {
    id: 'prod-4',
    name: 'Cold-Pressed Green Power Juice (500ml)',
    description: 'A vibrant blend of kale, spinach, green apple, cucumber, and lemon. Packed with vitamins and antioxidants.',
    price: 5.99,
    originalPrice: 7.20,
    rating: 4.6,
    reviewCount: 65,
    category: 'beverages',
    brand: 'NaturePure',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    stock: 25,
    isFeatured: true,
    isBestSeller: true,
    tags: ['Juice', 'Detox', 'Vegan']
  },
  {
    id: 'prod-5',
    name: 'Organic Honeycrisp Apples (1kg)',
    description: 'Crisp, juicy, and perfectly sweet-tart Honeycrisp apples. Hand-picked from sustainable orchards.',
    price: 5.49,
    originalPrice: 6.99,
    rating: 4.9,
    reviewCount: 210,
    category: 'groceries',
    brand: 'NaturePure',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    stock: 60,
    isFeatured: false,
    isBestSeller: true,
    tags: ['Fruits', 'Fresh', 'Vitamins']
  },
  {
    id: 'prod-6',
    name: 'Greek Style Natural Yogurt (500g)',
    description: 'Thick, creamy, and protein-packed authentic Greek yogurt. Excellent for breakfast bowls or savory dips.',
    price: 3.75,
    originalPrice: 4.50,
    rating: 4.8,
    reviewCount: 140,
    category: 'dairy',
    brand: 'OrganicValley',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    stock: 22,
    isFeatured: false,
    isBestSeller: true,
    tags: ['Dairy', 'Protein', 'Probiotic']
  },
  {
    id: 'prod-7',
    name: 'Herbal Aloe & Vitamin E Shampoo (400ml)',
    description: 'Gentle, sulfate-free nourishing shampoo infused with organic aloe vera and Vitamin E for lustrous hair.',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.5,
    reviewCount: 54,
    category: 'beauty',
    brand: 'VitaGlow',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    stock: 15,
    isFeatured: true,
    isBestSeller: false,
    tags: ['Natural', 'Haircare', 'Cruelty-Free']
  },
  {
    id: 'prod-8',
    name: 'Eco-Friendly Plant Dishwash Liquid (750ml)',
    description: 'Powerful plant-based grease-cutting formula that is gentle on hands and 100% biodegradable.',
    price: 4.25,
    originalPrice: 5.00,
    rating: 4.7,
    reviewCount: 76,
    category: 'household',
    brand: 'CleanHome',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    stock: 40,
    isFeatured: false,
    isBestSeller: false,
    tags: ['Eco-Friendly', 'Cleaning', 'Non-Toxic']
  },
  {
    id: 'prod-9',
    name: 'Organic Chia Seeds (250g)',
    description: 'High-fiber superfood chia seeds rich in Omega-3 fatty acids. Ideal for puddings, smoothies, and baking.',
    price: 6.49,
    originalPrice: 7.99,
    rating: 4.8,
    reviewCount: 89,
    category: 'groceries',
    brand: 'FreshFarm',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80',
    stock: 35,
    isFeatured: false,
    isBestSeller: true,
    tags: ['Superfood', 'Omega-3', 'Organic']
  },
  {
    id: 'prod-10',
    name: 'Dark Chocolate Sea Salt Almond Cookies',
    description: 'Decadent gluten-free cookies made with single-origin dark chocolate, crunchy almonds, and a hint of sea salt.',
    price: 4.99,
    originalPrice: 5.99,
    rating: 4.9,
    reviewCount: 162,
    category: 'snacks',
    brand: 'DailyBites',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    stock: 28,
    isFeatured: true,
    isBestSeller: true,
    tags: ['Snack', 'Gluten-Free', 'Sweet']
  },
  {
    id: 'prod-11',
    name: 'Sparkling Organic Lemon Ginger Tonic (330ml)',
    description: 'Refreshing carbonated tonic infused with real Sicilian lemons and fiery organic ginger root extract.',
    price: 2.49,
    originalPrice: 3.00,
    rating: 4.6,
    reviewCount: 48,
    category: 'beverages',
    brand: 'NaturePure',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
    stock: 50,
    isFeatured: false,
    isBestSeller: false,
    tags: ['Beverage', 'Refreshing', 'Organic']
  },
  {
    id: 'prod-12',
    name: 'Radiant Botanical Facial Serum (30ml)',
    description: 'Nourishing facial oil with rosehip, jojoba, and vitamin C for a natural, glowing complexion.',
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviewCount: 115,
    category: 'beauty',
    brand: 'VitaGlow',
    image: 'https://images.unsplash.com/photo-1608248597359-f5383a8128ee?auto=format&fit=crop&w=600&q=80',
    stock: 12,
    isFeatured: true,
    isBestSeller: true,
    tags: ['Skincare', 'Organic', 'Anti-Aging']
  }
];
