import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  styleUrl: './primary-button.component.scss',
  template: `
    <button [disabled]="isDisabled()" (click)="buttonClicked.emit()">
      {{ label() }}
    </button>
  `,
})
export class PrimaryButtonComponent {
  label = input('');
  isDisabled = input(false);

  buttonClicked = output();
}
