import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/ecommerce.model';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group relative">
      
      <!-- Top badges & Wishlist button -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <div class="flex flex-col gap-1">
          @if (product.originalPrice && product.originalPrice > product.price) {
            <span class="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
              Sale
            </span>
          }
          @if (product.isBestSeller) {
            <span class="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
              Best Seller
            </span>
          }
        </div>

        <button 
          (click)="toggleWishlist()" 
          class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-rose-500 shadow-md hover:scale-110 transition-all"
          [class.text-rose-500]="isWishlisted()"
        >
          <svg class="w-5 h-5" [attr.fill]="isWishlisted() ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>

      <!-- Product Image -->
      <div class="relative h-52 bg-gray-50 overflow-hidden flex items-center justify-center">
        <img 
          [src]="product.image" 
          [alt]="product.name" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <!-- Product Details -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span class="uppercase tracking-wider font-semibold text-emerald-600">{{ product.brand }}</span>
            <div class="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-bold">
              <span>⭐</span>
              <span>{{ product.rating }}</span>
              <span class="text-gray-400 font-normal">({{ product.reviewCount }})</span>
            </div>
          </div>

          <h3 class="font-bold text-gray-900 text-base mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            {{ product.name }}
          </h3>

          <p class="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
            {{ product.description }}
          </p>
        </div>

        <!-- Price & Add to Cart -->
        <div class="flex items-center justify-between pt-3 border-t border-gray-100">
          <div class="flex flex-col">
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-black text-gray-900">\${{ product.price.toFixed(2) }}</span>
              @if (product.originalPrice && product.originalPrice > product.price) {
                <span class="text-xs text-gray-400 line-through">\${{ product.originalPrice.toFixed(2) }}</span>
              }
            </div>
            <span class="text-[10px] text-emerald-600 font-medium">In Stock ({{ product.stock }})</span>
          </div>

          <button 
            (click)="addToCart()" 
            class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  `
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  protected readonly cartService = inject(CartService);
  protected readonly wishlistService = inject(WishlistService);

  isWishlisted(): boolean {
    return this.wishlistService.isInWishlist(this.product.id);
  }

  toggleWishlist(): void {
    this.wishlistService.toggleWishlist(this.product);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}
