import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BookReading } from '../models/reading.model';
import { READINGS } from '../constants/readings';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {
  private readonly http = inject(HttpClient);

  // Reemplaza esta ID con el ID de tu Google Sheet cuando la tengas compartida.
  private readonly sheetId = '15LEP_cpLUcS8XJA9T-9JpUVUulGNOX79r7hIIegDnCs';

  // Obtiene los libros desde Google Sheets y los mapea al formato de la app.
  // Si falla o no está configurada, usa la lista local como fallback de inmediato.
  getReadings(): Observable<BookReading[]> {
    if (!this.sheetId || this.sheetId.includes('placeholder')) {
      console.log('Google Sheets ID no configurada. Usando datos locales de respaldo.');
      return of(READINGS);
    }

    const url = `https://docs.google.com/spreadsheets/d/${this.sheetId}/gviz/tq?tqx=out:json&sheet=libros`;

    return this.http.get(url, { responseType: 'text' }).pipe(
      map(response => this.parseGoogleSheet(response)),
      catchError((error) => {
        console.warn('Error al obtener datos de Google Sheets, usando respaldo local:', error);
        return of(READINGS);
      })
    );
  }

  private parseGoogleSheet(rawText: string): BookReading[] {
    const match = rawText.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
    if (!match) {
      throw new Error('Formato de respuesta de Google Sheets no válido');
    }

    const json = JSON.parse(match[1]);
    const table = json.table;
    if (!table || !table.rows) {
      return [];
    }

    // Extraemos las etiquetas de las columnas (ej: "title", "author", "pages_read")
    const cols = table.cols.map((c: any) => (c.label || '').trim().toLowerCase());

    return table.rows
      .map((r: any) => {
        const rowData: any = {};
        if (r.c) {
          r.c.forEach((cell: any, index: number) => {
            const colName = cols[index];
            if (colName) {
              rowData[colName] = cell ? cell.v : null;
            }
          });
        }
        return rowData;
      })
      // Filtramos filas que no estén activas o no tengan título
      .filter((b: any) => b.title && (b.is_active === undefined || b.is_active === true || b.is_active === 'TRUE' || b.is_active === 1))
      .map((b: any) => {
        const pagesRead = Number(b.pages_read || 0);
        const totalPages = Number(b.total_pages || 0);
        let progress = 100;
        
        if (totalPages > 0) {
          progress = Math.min(100, Math.max(0, Math.round((pagesRead / totalPages) * 100)));
        } else if (b.progress !== undefined && b.progress !== null) {
          progress = Number(b.progress);
        }

        // Map de imágenes de portadas (soporta locales y externas)
        let cover = b.image || '';
        if (cover === 'https://m.media-amazon.com/images/I/61nAd1sbQVL._SY425_.jpg') {
          cover = '/books/software-development-az.jpg';
        } else if (cover === 'https://m.media-amazon.com/images/I/612SvfNVfdL._SY385_.jpg') {
          cover = '/books/microservices-patterns.jpg';
        } else if (cover === 'https://m.media-amazon.com/images/I/41fijVG5x7L._SY445_SX342_FMwebp_.jpg') {
          cover = '/books/clean-architecture.jpg';
        }

        // Procesa tags si vienen separados por comas
        let tags: string[] = ['Tecnología'];
        if (b.tags) {
          if (typeof b.tags === 'string') {
            tags = b.tags.split(',').map((t: string) => t.trim());
          } else if (Array.isArray(b.tags)) {
            tags = b.tags;
          }
        }

        return {
          id: b.id ? Number(b.id) : Math.random(),
          title: b.title,
          author: b.author || b.autor || '',
          coverImage: cover,
          link: b.link || '',
          progress,
          totalPages,
          pagesRead,
          description: b.description || 'Lectura técnica recomendada para desarrollo de software y bases de datos.',
          status: b.status || (progress === 100 ? 'completed' : progress > 0 ? 'reading' : 'want-to-read'),
          tags
        };
      });
  }
}

