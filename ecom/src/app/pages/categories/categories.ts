import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Header -->
      <div>
        <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <a routerLink="/" class="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span class="text-emerald-600 font-semibold">Categories</span>
        </div>
        <h1 class="text-3xl font-black text-gray-900 tracking-tight">Product Categories</h1>
        <p class="text-sm text-gray-500 mt-1">Explore our wide variety of organic collections curated just for your wholesome kitchen.</p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (cat of categories; track cat.id) {
          <a [routerLink]="['/shop']" [queryParams]="{category: cat.slug}" class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden group flex flex-col transition-all duration-300">
            <div class="relative h-48 overflow-hidden bg-gray-100">
              <img [src]="cat.image" [alt]="cat.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span class="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                {{ cat.productCount }} Products
              </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">{{ cat.name }}</h3>
                <p class="text-xs text-gray-500 leading-relaxed">{{ cat.description }}</p>
              </div>
              <div class="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Browse Products</span>
                <span class="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        }
      </div>

    </div>
  `
})
export class CategoriesComponent {
  protected readonly productService = inject(ProductService);
  protected readonly categories = this.productService.categories();
}
