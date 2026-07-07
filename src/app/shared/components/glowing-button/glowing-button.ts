import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-glowing-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './glowing-button.html'
})
export class GlowingButtonComponent {
  // Angular 19 Input Signals
  variant = input<'primary' | 'secondary'>('primary');
  link = input<string | null>(null);
  icon = input<string | null>(null);

  // Computed Signal: automatically recalculates if the link is external
  protected readonly isExternal = computed(() => {
    const path = this.link();
    if (!path) return false;
    return path.startsWith('http') || path.startsWith('https') || path.startsWith('mailto:') || path.startsWith('#');
  });

  // Styled button class definitions for desktop-premium feels
  protected readonly primaryClasses = 'group relative inline-flex items-center justify-center px-8 py-4 bg-on-surface text-surface rounded-full font-display font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(210,187,255,0.4)] cursor-pointer w-full sm:w-auto';
  protected readonly secondaryClasses = 'inline-flex items-center justify-center px-8 py-4 bg-transparent border border-outline-variant/30 text-on-surface rounded-full font-display font-bold hover:bg-surface-variant/50 transition-all duration-300 cursor-pointer w-full sm:w-auto';
}
