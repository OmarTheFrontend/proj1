import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/ecommerce.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <a routerLink="/" class="hover:text-emerald-600">Home</a>
            <span>/</span>
            <span class="text-emerald-600 font-semibold">My Wishlist</span>
          </div>
          <h1 class="text-3xl font-black text-gray-900 tracking-tight">Saved Wishlist</h1>
          <p class="text-sm text-gray-500 mt-1">Items you have bookmarked for future purchases.</p>
        </div>
        @if (wishlistService.items().length > 0) {
          <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-4 py-2 rounded-xl">
            {{ wishlistService.count() }} Saved Items
          </span>
        }
      </div>

      <!-- Wishlist Grid -->
      @if (wishlistService.items().length > 0) {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of wishlistService.items(); track item.product.id) {
            <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative group">
              
              <!-- Remove button -->
              <button 
                (click)="removeItem(item.product.id)" 
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-gray-400 hover:text-rose-500 flex items-center justify-center shadow z-10 transition-colors"
                title="Remove from wishlist"
              >
                ✕
              </button>

              <!-- Image -->
              <div class="relative h-48 bg-gray-50 overflow-hidden flex items-center justify-center">
                <img [src]="item.product.image" [alt]="item.product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>

              <!-- Content -->
              <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600">{{ item.product.brand }}</span>
                  <h3 class="font-bold text-gray-900 text-base mb-1 line-clamp-1">{{ item.product.name }}</h3>
                  <div class="flex items-baseline gap-2 mb-4">
                    <span class="text-base font-black text-gray-900">\${{ item.product.price.toFixed(2) }}</span>
                    @if (item.product.originalPrice && item.product.originalPrice > item.product.price) {
                      <span class="text-xs text-gray-400 line-through">\${{ item.product.originalPrice.toFixed(2) }}</span>
                    }
                  </div>
                </div>

                <button 
                  (click)="moveToCart(item.product)" 
                  class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Move to Cart</span>
                  <span>🛒</span>
                </button>
              </div>

            </div>
          }
        </div>
      } @else {
        <div class="bg-white p-16 rounded-3xl border border-gray-100 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div class="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto">
            💖
          </div>
          <h2 class="text-xl font-black text-gray-950">Your Wishlist is Empty</h2>
          <p class="text-xs text-gray-500 leading-relaxed">
            You haven't added any favorite products to your wishlist yet. Explore our shop and click the heart icon on any item you love!
          </p>
          <div class="pt-2">
            <a routerLink="/shop" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-8 py-3.5 rounded-xl shadow transition-colors">
              Explore Shop Now
            </a>
          </div>
        </div>
      }

    </div>
  `
})
export class WishlistComponent {
  protected readonly wishlistService = inject(WishlistService);
  protected readonly cartService = inject(CartService);

  removeItem(productId: string): void {
    this.wishlistService.removeFromWishlist(productId);
  }

  moveToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.wishlistService.removeFromWishlist(product.id);
  }
}
