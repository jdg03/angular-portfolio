import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-surface-container-lowest border-t border-outline-variant/10 mt-auto">
      <div class="flex flex-col md:flex-row justify-between items-center py-12 px-gutter max-w-container-max mx-auto">
        <div class="mb-8 md:mb-0 text-center md:text-left">
          <div class="text-headline-lg font-display text-[28px] font-bold text-on-surface mb-2 tracking-tighter">
            José G.
          </div>
          <p class="text-body-md font-sans text-sm text-on-surface-variant">
            {{ ui.footCopy[lang()] }}
          </p>
        </div>
        <div class="flex gap-8">
          <a class="text-label-mono font-mono text-sm text-on-surface-variant hover:text-primary transition-colors active:underline" href="https://github.com/jdg03" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a class="text-label-mono font-mono text-sm text-on-surface-variant hover:text-primary transition-colors active:underline" href="https://www.linkedin.com/in/josé-david-gonzalez-702611302" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a class="text-label-mono font-mono text-sm text-on-surface-variant hover:text-primary transition-colors active:underline" href="https://github.com/jdg03/portfolio-angular" target="_blank" rel="noopener noreferrer">
            {{ ui.footSource[lang()] }}
          </a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
}
