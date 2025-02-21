import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-card',
  imports: [],
  styleUrl: './card.component.scss',
  template: `
    <div class="card">
      <h2>{{ product().title }}</h2>
    </div>
  `,
})
export class CardComponent {
  product = input.required<Product>();
}
