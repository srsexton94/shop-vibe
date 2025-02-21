import { Component, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-card',
  imports: [PrimaryButtonComponent],
  styleUrl: './card.component.scss',
  template: `
    <div class="card">
      <img [src]="product().image" [alt]="product().title" />
      <div class="content">
        <h2>{{ product().title }}</h2>
        <p>{{ '$' + product().price.toFixed(2) }}</p>
        <app-primary-button label="Add to cart" />
      </div>
    </div>
  `,
})
export class CardComponent {
  product = input.required<Product>();
}
