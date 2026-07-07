import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookReading } from '../models/reading.model';
import { READINGS } from '../constants/readings';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {
  private readonly supabaseUrl = 'https://ucdtitavxeziqrjktxie.supabase.co';
  private readonly supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZHRpdGF2eGV6aXFyamt0eGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0NDkzNTQsImV4cCI6MjA3NzAyNTM1NH0.h_YUMe3q70Dnq_P3XDBw6vDpcjKv7nY0TUBThKso3z0';
  private readonly supabase: SupabaseClient = createClient(this.supabaseUrl, this.supabaseKey);

  // Obtiene los libros directamente desde Supabase y los mapea al formato de la app.
  // Si falla (por ejemplo, si se suspende la base de datos), usa la lista local como fallback.
  getReadings(): Observable<BookReading[]> {
    const promise = this.supabase
      .from('books')
      .select('*')
      .eq('is_active', true)
      .order('order_index', { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error('Error fetching books from Supabase:', error);
          throw error;
        }
        return (data || []).map((b: any) => {
          const pagesRead = b.pages_read || 0;
          const totalPages = b.total_pages || 0;
          let progress = 100;
          if (totalPages > 0) {
            progress = Math.min(100, Math.max(0, Math.round((pagesRead / totalPages) * 100)));
          } else if (b.progress !== undefined) {
            progress = b.progress;
          }
          
          return {
            id: b.id,
            title: b.title,
            author: b.autor,
            coverImage: b.image,
            link: b.link,
            progress,
            totalPages,
            pagesRead,
            description: b.description || 'Lectura técnica recomendada para desarrollo de software y bases de datos.',
            status: b.status || (progress === 100 ? 'completed' : progress > 0 ? 'reading' : 'want-to-read'),
            tags: b.tags || ['Tecnología']
          };
        });
      });

    return from(promise).pipe(
      catchError((error) => {
        console.warn('Supabase error, falling back to local readings data:', error);
        return of(READINGS);
      })
    );
  }
}

