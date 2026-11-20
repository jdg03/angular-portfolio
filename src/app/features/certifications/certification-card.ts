import { Component, input, signal, inject } from '@angular/core';
import { Certification } from '../../core/models/certification.model';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  templateUrl: './certification-card.html',
})
export class CertificationCardComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Angular 19 Input Signal: reactive and strongly typed
  certification = input.required<Certification>();

  // Local signal to track whether the description is expanded or collapsed
  protected readonly isExpanded = signal<boolean>(false);

  // Toggle expanded state
  toggleExpanded() {
    this.isExpanded.update((prev) => !prev);
  }
}
