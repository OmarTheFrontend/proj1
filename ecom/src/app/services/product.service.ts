import { Injectable, signal, computed } from '@angular/core';
import { Product, Category, Brand, FilterState } from '../models/ecommerce.model';
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_BRANDS } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsSignal = signal<Product[]>(MOCK_PRODUCTS);
  private readonly categoriesSignal = signal<Category[]>(MOCK_CATEGORIES);
  private readonly brandsSignal = signal<Brand[]>(MOCK_BRANDS);

  readonly products = this.productsSignal.asReadonly();
  readonly categories = this.categoriesSignal.asReadonly();
  readonly brands = this.brandsSignal.asReadonly();

  readonly featuredProducts = computed(() => 
    this.productsSignal().filter(p => p.isFeatured)
  );

  readonly bestSellers = computed(() => 
    this.productsSignal().filter(p => p.isBestSeller)
  );

  getProductById(id: string): Product | undefined {
    return this.productsSignal().find(p => p.id === id);
  }

  getProductsByCategory(categorySlug: string): Product[] {
    return this.productsSignal().filter(p => p.category === categorySlug);
  }

  getProductsByBrand(brandName: string): Product[] {
    return this.productsSignal().filter(p => p.brand.toLowerCase() === brandName.toLowerCase());
  }
}
