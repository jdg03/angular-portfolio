import { Component, input, inject } from '@angular/core';
import { BookReading } from '../../core/models/reading.model';
import { GlassCardComponent } from '../../shared/components/glass-card/glass-card';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [GlassCardComponent],
  templateUrl: './book-card.html'
})
export class BookCardComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Angular 19 Input Signal reactiva
  book = input.required<BookReading>();
}
