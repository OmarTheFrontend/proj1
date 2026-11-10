import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, CommonModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  protected readonly productService = inject(ProductService);
  
  protected readonly categories = this.productService.categories();
  protected readonly featuredProducts = this.productService.featuredProducts();
  protected readonly bestSellers = this.productService.bestSellers();
}
