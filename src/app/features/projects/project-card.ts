import { Component, input, inject } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [GlassCardComponent, SvgIconComponent],
  templateUrl: './project-card.html'
})
export class ProjectCardComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Angular 19 Input Signal: reactive, read-only and strictly typed
  project = input.required<Project>();
}
