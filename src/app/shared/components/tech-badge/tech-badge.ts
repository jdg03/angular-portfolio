import { Component, input } from '@angular/core';
import { Technology } from '../../../core/models/technology.model';
import { SvgIconComponent } from '../svg-icon/svg-icon';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono tracking-tighter uppercase transition-colors"
          [class]="tech().class || 'border-outline-variant/30 text-on-surface bg-surface-container/50'">
      @if (tech().icon) {
        <app-svg-icon [name]="tech().icon" size="12" class="opacity-80"></app-svg-icon>
      }
      {{ tech().name }}
    </span>
  `
})
export class TechBadgeComponent {
  // Angular 19 Input Signal: strictly typed, read-only reactive signal input
  tech = input.required<Technology>();
}

