import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../models/ecommerce.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent, FormsModule, CommonModule],
  templateUrl: './shop.html'
})
export class ShopComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly categories = this.productService.categories();
  protected readonly brands = this.productService.brands();

  // Filter states
  protected selectedCategory = signal<string>('');
  protected selectedBrand = signal<string>('');
  protected searchQuery = signal<string>('');
  protected sortBy = signal<'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'>('featured');
  protected maxPriceFilter = signal<number>(50);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory.set(params['category']);
      }
      if (params['brand']) {
        this.selectedBrand.set(params['brand']);
      }
      if (params['search']) {
        this.searchQuery.set(params['search']);
      }
    });
  }

  protected readonly filteredProducts = computed(() => {
    let list = this.productService.products();

    const cat = this.selectedCategory();
    if (cat) {
      list = list.filter(p => p.category === cat);
    }

    const brand = this.selectedBrand();
    if (brand) {
      list = list.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    }

    const search = this.searchQuery().toLowerCase().trim();
    if (search) {
      list = list.filter(p => 
        p.name.toLowerCase().includes(search) || 
        p.description.toLowerCase().includes(search) ||
        p.tags?.some(t => t.toLowerCase().includes(search))
      );
    }

    const maxPrice = this.maxPriceFilter();
    list = list.filter(p => p.price <= maxPrice);

    // Sorting
    const sort = this.sortBy();
    return [...list].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'newest') return b.id.localeCompare(a.id);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  });

  setCategory(slug: string): void {
    this.selectedCategory.set(this.selectedCategory() === slug ? '' : slug);
    this.updateQueryParams();
  }

  setBrand(name: string): void {
    this.selectedBrand.set(this.selectedBrand() === name ? '' : name);
    this.updateQueryParams();
  }

  clearFilters(): void {
    this.selectedCategory.set('');
    this.selectedBrand.set('');
    this.searchQuery.set('');
    this.maxPriceFilter.set(50);
    this.sortBy.set('featured');
    this.router.navigate(['/shop']);
  }

  private updateQueryParams(): void {
    const qParams: any = {};
    if (this.selectedCategory()) qParams['category'] = this.selectedCategory();
    if (this.selectedBrand()) qParams['brand'] = this.selectedBrand();
    if (this.searchQuery()) qParams['search'] = this.searchQuery();
    this.router.navigate(['/shop'], { queryParams: qParams, replaceUrl: true });
  }
}
