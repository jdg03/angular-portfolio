import { Component, computed, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ReadingsService } from '../../core/services/readings.service';
import { BookReading, ReadingStatus } from '../../core/models/reading.model';
import { BookCardComponent } from './book-card';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-readings',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './readings.html'
})
export class ReadingsComponent {
  private readonly readingsService = inject(ReadingsService);
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;

  // Filtro activo de la UI ('ALL' | 'reading' | 'completed' | 'want-to-read')
  protected readonly activeFilter = signal<ReadingStatus | 'ALL'>('ALL');

  // Consulta asíncrona gestionada por TanStack Query
  protected readonly readingsQuery = injectQuery(() => ({
    queryKey: ['readings'],
    queryFn: () => new Promise<BookReading[]>((resolve, reject) => {
      this.readingsService.getReadings().subscribe({
        next: (data) => resolve(data),
        error: (err) => reject(err)
      });
    })
  }));

  // Computed Signal: Recalcula y filtra la lista de libros de forma reactiva instantánea
  protected readonly filteredBooks = computed(() => {
    const filter = this.activeFilter();
    const queryData = this.readingsQuery.data();

    if (!queryData) return [];
    if (filter === 'ALL') return queryData;

    return queryData.filter(book => book.status === filter);
  });

  // Estilos de los botones de filtrado
  protected readonly activeFilterClasses = 'px-4 py-2 rounded-lg bg-primary text-background font-sans text-[10px] font-bold tracking-wide shadow-[0_0_12px_rgba(210,187,255,0.3)] transition-all cursor-pointer';
  protected readonly inactiveFilterClasses = 'px-4 py-2 rounded-lg bg-surface-container border border-outline-variant/10 text-on-surface-variant font-sans text-[10px] font-semibold tracking-wide hover:text-white hover:border-primary/30 transition-all cursor-pointer';

  // Toggle filter signal
  setFilter(filter: ReadingStatus | 'ALL') {
    this.activeFilter.set(filter);
  }
}
