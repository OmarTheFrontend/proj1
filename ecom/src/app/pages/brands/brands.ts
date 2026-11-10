import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Header -->
      <div>
        <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <a routerLink="/" class="hover:text-emerald-600">Home</a>
          <span>/</span>
          <span class="text-emerald-600 font-semibold">Partner Brands</span>
        </div>
        <h1 class="text-3xl font-black text-gray-900 tracking-tight">Trusted Organic Brands</h1>
        <p class="text-sm text-gray-500 mt-1">We partner with the world's finest sustainable farmers and organic producers.</p>
      </div>

      <!-- Brands Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (brand of brands; track brand.id) {
          <a [routerLink]="['/shop']" [queryParams]="{brand: brand.name}" class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl group flex items-center gap-6 transition-all duration-300">
            <div class="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-bold shadow-inner group-hover:scale-110 transition-transform">
              {{ brand.logo }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">{{ brand.name }}</h3>
              <p class="text-xs text-gray-500 mt-1">{{ brand.productCount }} Certified Products</p>
            </div>
            <div class="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform">
              →
            </div>
          </a>
        }
      </div>

    </div>
  `
})
export class BrandsComponent {
  protected readonly productService = inject(ProductService);
  protected readonly brands = this.productService.brands();
}
