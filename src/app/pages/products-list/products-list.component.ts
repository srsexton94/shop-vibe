import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { CardComponent } from '../../components';

@Component({
  selector: 'app-products-list',
  imports: [CardComponent],
  styleUrl: './products-list.component.scss',
  template: `
    <ul>
      @for (product of products(); track product.id) {
      <app-card [product]="product" />
      }
    </ul>
  `,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Backpack',
      price: 109.95,
      image: 'https://m.media-amazon.com/images/I/81WjalMN8mL.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'T-shirt',
      price: 22.3,
      image:
        'https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Jacket',
      price: 55.99,
      image: 'https://m.media-amazon.com/images/I/61ERl8U2SRL._AC_UY1000_.jpg',
      stock: 5,
    },
  ]);
}
