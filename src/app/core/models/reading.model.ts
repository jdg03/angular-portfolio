export type ReadingStatus = 'reading' | 'completed' | 'want-to-read';

export interface BookReading {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  progress: number; // 0 to 100
  rating?: number;  // 1 to 5 stars
  status: ReadingStatus;
  startDate?: string;
  endDate?: string;
  tags?: string[];
  totalPages?: number;
  pagesRead?: number;
}
