import { afterNextRender, DOCUMENT, inject, Injectable, signal } from '@angular/core';

export type ThemeId = 'navy' | 'black' | 'purple' | 'light';

@Injectable({ providedIn: 'root' })
export class Appearance {
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<ThemeId>('navy');
  readonly theme = this.currentTheme.asReadonly();

  constructor() {
    afterNextRender(() => {
      try {
        const saved = this.document.defaultView?.localStorage.getItem('portfolio-bg-color');
        if (saved === 'navy' || saved === 'black' || saved === 'purple' || saved === 'light') {
          this.applyTheme(saved);
        } else {
          this.applyTheme('navy');
          if (saved) this.persistTheme('navy');
        }
      } catch {
        this.applyTheme('navy');
      }
    });
  }

  selectTheme(theme: ThemeId) {
    this.applyTheme(theme);
    this.persistTheme(theme);
  }

  private applyTheme(theme: ThemeId) {
    this.currentTheme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
  }

  private persistTheme(theme: ThemeId) {
    try {
      this.document.defaultView?.localStorage.setItem('portfolio-bg-color', theme);
    } catch {
      /* Selection still works without persistence. */
    }
  }
}
