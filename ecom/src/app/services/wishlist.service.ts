import { Injectable, signal, computed } from '@angular/core';
import { Product, WishlistItem } from '../models/ecommerce.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly wishlistSignal = signal<WishlistItem[]>(this.loadInitialWishlist());

  readonly items = this.wishlistSignal.asReadonly();

  readonly count = computed(() => this.wishlistSignal().length);

  private loadInitialWishlist(): WishlistItem[] {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('freshcart_wishlist');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse wishlist from storage', e);
        }
      }
    }
    return [];
  }

  private saveWishlist(items: WishlistItem[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('freshcart_wishlist', JSON.stringify(items));
    }
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistSignal().some(item => item.product.id === productId);
  }

  toggleWishlist(product: Product): void {
    const current = this.wishlistSignal();
    const exists = current.some(item => item.product.id === product.id);

    let updated: WishlistItem[];
    if (exists) {
      updated = current.filter(item => item.product.id !== product.id);
    } else {
      updated = [...current, { product, addedAt: new Date() }];
    }

    this.wishlistSignal.set(updated);
    this.saveWishlist(updated);
  }

  removeFromWishlist(productId: string): void {
    const updated = this.wishlistSignal().filter(item => item.product.id !== productId);
    this.wishlistSignal.set(updated);
    this.saveWishlist(updated);
  }
}
