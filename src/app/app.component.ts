import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  styleUrl: './app.component.scss',
  template: ` <app-header /> `,
})
export class AppComponent {
}
