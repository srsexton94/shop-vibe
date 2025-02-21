import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
import { ProductsListComponent } from './pages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  styleUrl: './app.component.scss',
  template: `
    <app-header />
    <app-products-list />
  `,
})
export class AppComponent {}
