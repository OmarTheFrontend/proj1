import { Injectable, signal, computed } from '@angular/core';
import { CartItem, Product } from '../models/ecommerce.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartItemsSignal = signal<CartItem[]>(this.loadInitialCart());

  readonly items = this.cartItemsSignal.asReadonly();

  readonly totalItemsCount = computed(() => 
    this.cartItemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly subtotal = computed(() => 
    this.cartItemsSignal().reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  );

  readonly shipping = computed(() => this.subtotal() > 50 || this.subtotal() === 0 ? 0 : 4.99);

  readonly total = computed(() => this.subtotal() + this.shipping());

  private loadInitialCart(): CartItem[] {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('freshcart_cart');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse cart from storage', e);
        }
      }
    }
    return [];
  }

  private saveCart(items: CartItem[]): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('freshcart_cart', JSON.stringify(items));
    }
  }

  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItemsSignal();
    const existingIndex = currentItems.findIndex(item => item.product.id === product.id);

    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = currentItems.map((item, idx) => 
        idx === existingIndex 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updated = [...currentItems, { product, quantity }];
    }

    this.cartItemsSignal.set(updated);
    this.saveCart(updated);
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const updated = this.cartItemsSignal().map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );

    this.cartItemsSignal.set(updated);
    this.saveCart(updated);
  }

  removeFromCart(productId: string): void {
    const updated = this.cartItemsSignal().filter(item => item.product.id !== productId);
    this.cartItemsSignal.set(updated);
    this.saveCart(updated);
  }

  clearCart(): void {
    this.cartItemsSignal.set([]);
    this.saveCart([]);
  }
}
