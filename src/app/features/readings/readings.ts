import { Component, computed, inject, input, signal, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ReadingsService } from '../../core/services/readings.service';
import { BookReading, ReadingStatus } from '../../core/models/reading.model';
import { BookCardComponent } from './book-card';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-readings',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './readings.html',
})
export class ReadingsComponent implements OnInit {
  readonly embedded = input(false);
  private readonly readingsService = inject(ReadingsService);
  private readonly translationService = inject(TranslationService);
  private readonly meta = inject(Meta);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;

  ngOnInit() {
    if (this.embedded()) return;
    this.meta.updateTag({
      name: 'description',
      content:
        'Mi biblioteca técnica personal. Libros y documentación técnica que leo para mantenerme al día con la industria y mejores prácticas.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'Biblioteca | José González' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Biblioteca técnica y lecturas profesionales de José González.',
    });
  }

  // Filtro activo de la UI ('ALL' | 'reading' | 'completed' | 'want-to-read')
  protected readonly activeFilter = signal<ReadingStatus | 'ALL'>('ALL');

  // Consulta asíncrona gestionada por TanStack Query
  protected readonly readingsQuery = injectQuery(() => ({
    queryKey: ['readings', this.lang()],
    queryFn: () =>
      new Promise<BookReading[]>((resolve, reject) => {
        this.readingsService.getReadings().subscribe({
          next: (data) => resolve(data),
          error: (err) => reject(err),
        });
      }),
  }));

  // Computed Signal: Recalcula y filtra la lista de libros de forma reactiva instantánea
  protected readonly filteredBooks = computed(() => {
    const filter = this.activeFilter();
    const queryData = this.readingsQuery.data();

    if (!queryData) return [];
    if (filter === 'ALL') return queryData;

    return queryData.filter((book) => book.status === filter);
  });

  // Toggle filter signal
  setFilter(filter: ReadingStatus | 'ALL') {
    this.activeFilter.set(filter);
  }
}
