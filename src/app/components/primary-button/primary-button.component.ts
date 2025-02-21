import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  styleUrl: './primary-button.component.scss',
  template: ` <button (click)="buttonClicked.emit()">{{ label() }}</button> `,
})
export class PrimaryButtonComponent {
  label = input('');

  buttonClicked = output();
}
