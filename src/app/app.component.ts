import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrl: './app.component.scss',
  template: `
    <h1>Hello {{ title }}!</h1>
  `
})
export class AppComponent {
  title = 'ShopVibe';
}
