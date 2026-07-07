import { BookReading } from '../models/reading.model';

export const READINGS: BookReading[] = [
  {
    id: 1,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    description: "Una guía excepcional para comprender los principios, arquitecturas y compromisos detrás de los sistemas de datos modernos (bases de datos, procesamiento en lotes, streaming, escalabilidad).",
    coverImage: "/books/ddia.png",
    progress: 65,
    rating: 5,
    status: "reading",
    startDate: "2026-03-01",
    tags: ["Sistemas Distribuidos", "Bases de Datos", "Arquitectura"]
  },
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    description: "El libro fundamental para aprender a escribir código limpio, legible y altamente mantenible, aplicando principios SOLID y buenas prácticas del día a día.",
    coverImage: "/books/clean-code.jpg",
    progress: 100,
    rating: 5,
    status: "completed",
    startDate: "2025-09-10",
    endDate: "2025-11-15",
    tags: ["Buenas Prácticas", "Artesanía de Software", "SOLID"]
  },
  {
    id: 3,
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas & Andrew Hunt",
    description: "Una colección de consejos prácticos y lecciones invaluables sobre la carrera del desarrollador de software, que abarcan desde el desarrollo personal hasta la arquitectura técnica.",
    coverImage: "/books/pragmatic-programmer.jpg",
    progress: 100,
    rating: 4,
    status: "completed",
    startDate: "2025-01-15",
    endDate: "2025-03-20",
    tags: ["Desarrollo Profesional", "Metodologías", "Productividad"]
  },
  {
    id: 4,
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    description: "Un compendio clásico sobre patrones de diseño específicos para aplicaciones empresariales, mapeando soluciones para persistencia de datos, distribución y concurrencia.",
    coverImage: "/books/patterns.jpg",
    progress: 10,
    status: "want-to-read",
    tags: ["Patrones de Diseño", "Arquitectura", "Backend"]
  }
];
