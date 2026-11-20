import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';
import { Appearance, ThemeId } from '../../../../core/services/appearance';

interface ThemeOption {
  id: ThemeId;
  name: { es: string; en: string };
  preview: string;
}
@Component({ selector: 'app-background-switcher', templateUrl: './background-switcher.html' })
export class BackgroundSwitcherComponent {
  private readonly appearance = inject(Appearance);
  protected readonly lang = inject(TranslationService).lang;
  protected readonly colorOptions: readonly ThemeOption[] = [
    { id: 'navy', name: { es: 'Azul oscuro', en: 'Dark blue' }, preview: '#172b49' },
    { id: 'purple', name: { es: 'Morado oscuro', en: 'Dark purple' }, preview: '#39254c' },
    { id: 'black', name: { es: 'Carbón', en: 'Charcoal' }, preview: '#101318' },
    { id: 'light', name: { es: 'Claro', en: 'Light' }, preview: '#f2f5fa' },
  ];
  protected readonly activeColor = computed(
    () => this.colorOptions.find((option) => option.id === this.appearance.theme())!,
  );

  selectColor(option: ThemeOption) {
    this.appearance.selectTheme(option.id);
  }
}
