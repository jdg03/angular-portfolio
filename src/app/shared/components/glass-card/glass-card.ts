import { Component } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [],
  template: `
    <div class="glass-card rounded-3xl p-8 group transition-all duration-500 hover:border-primary/30 h-full flex flex-col justify-between">
      <ng-content></ng-content>
    </div>
  `
})
export class GlassCardComponent {}
