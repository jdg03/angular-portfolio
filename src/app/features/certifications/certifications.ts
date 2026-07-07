import { Component, signal } from '@angular/core';
import { CERTIFICATIONS } from '../../core/constants/certifications';
import { Certification } from '../../core/models/certification.model';
import { CertificationCardComponent } from './certification-card';

import { inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CertificationCardComponent],
  templateUrl: './certifications.html'
})
export class CertificationsComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;

  // Reactive signal loading the active certifications sorted by priority/order_index
  protected readonly certificationsList = signal<Certification[]>(
    CERTIFICATIONS
      .filter(c => c.is_active)
      .sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0))
  );
}
