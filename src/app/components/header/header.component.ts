import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  styleUrl: './header.component.scss',
  template: `
    <header>
      <h1>ShopVibe</h1>
      <app-primary-button label="Cart" (buttonClicked)="handleClick()" />
    </header>
  `,
})
export class HeaderComponent {
  handleClick() {
    console.log('clicked');
  }
}
