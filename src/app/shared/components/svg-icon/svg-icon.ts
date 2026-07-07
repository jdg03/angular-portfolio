import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  templateUrl: './svg-icon.html',
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }
  `]
})
export class SvgIconComponent {
  // Angular 19 Input Signals
  name = input.required<string>();
  size = input<string>('16'); // Tamaño por defecto en px
}
