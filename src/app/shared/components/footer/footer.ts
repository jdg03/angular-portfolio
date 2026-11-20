import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
@Component({
  selector: 'app-footer',
  template: `<footer class="site-footer">
    <span>© 2026 José González</span
    ><a href="https://github.com/jdg03/portfolio-angular" target="_blank" rel="noopener noreferrer"
      >{{ ui.footSource[lang()] }} <span aria-hidden="true">↗</span></a
    >
  </footer>`,
})
export class FooterComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
}
