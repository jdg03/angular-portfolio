import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CREDENTIALS } from '../../core/constants/credentials';
import { CredentialProvider } from '../../core/models/credential.model';
import { TranslationService } from '../../core/services/translation.service';
import { BadgeArtwork } from '../../shared/components/badge-artwork/badge-artwork';

@Component({
  selector: 'app-credentials',
  imports: [DatePipe, BadgeArtwork],
  templateUrl: './credentials.html',
  styleUrl: './credentials.css',
})
export class Credentials {
  private readonly translation = inject(TranslationService);
  protected readonly ui = this.translation.ui;
  protected readonly lang = this.translation.lang;
  protected readonly activeProvider = signal<CredentialProvider | 'all'>('all');
  protected readonly filters = [
    { id: 'all', label: 'credentialsAll' },
    { id: 'google-skills', label: 'credentialsGoogle' },
    { id: 'microsoft-learn', label: 'credentialsMicrosoft' },
  ] as const;
  protected readonly filteredCredentials = computed(() =>
    CREDENTIALS.filter(
      (badge) => this.activeProvider() === 'all' || badge.provider === this.activeProvider(),
    ),
  );
  protected readonly countFor = (provider: CredentialProvider | 'all') =>
    CREDENTIALS.filter((badge) => provider === 'all' || badge.provider === provider).length;
}
