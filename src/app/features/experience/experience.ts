import { Component, inject, signal } from '@angular/core';
import { EXPERIENCE } from '../../core/constants/experience';
import { TranslationService } from '../../core/services/translation.service';
@Component({ selector: 'app-experience', templateUrl: './experience.html' })
export class ExperienceComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = this.translationService.translate.bind(this.translationService);
  protected readonly experiences = signal(EXPERIENCE);
}
