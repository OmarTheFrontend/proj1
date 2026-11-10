import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './cart.html'
})
export class CartComponent {
  protected readonly cartService = inject(CartService);

  protected couponCode = '';
  protected discountApplied = false;
  protected discountAmount = 0;
  protected isCheckingOut = false;
  protected orderCompleted = false;

  updateQuantity(productId: string, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  applyCoupon(event: Event): void {
    event.preventDefault();
    if (this.couponCode.trim().toUpperCase() === 'FRESH2026') {
      this.discountApplied = true;
      this.discountAmount = this.cartService.subtotal() * 0.20;
    } else {
      alert('Invalid coupon code. Try FRESH2026');
    }
  }

  checkout(): void {
    this.isCheckingOut = true;
    setTimeout(() => {
      this.isCheckingOut = false;
      this.orderCompleted = true;
      this.cartService.clearCart();
    }, 1500);
  }
}
