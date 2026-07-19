import { Injectable, signal } from '@angular/core';

export interface TranslatedText {
  es: string;
  en: string;
}

export type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly langSignal = signal<Lang>(
    (() => {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        return (localStorage.getItem('portfolio-lang') as Lang) || 'es';
      }
      return 'es';
    })()
  );

  readonly lang = this.langSignal.asReadonly();

  // Helper method to resolve translations reactively
  translate(text: string | TranslatedText | undefined): string {
    if (!text) return '';
    if (typeof text === 'string') return text;
    return text[this.langSignal()] || text.es || '';
  }

  setLanguage(lang: Lang) {
    this.langSignal.set(lang);
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('portfolio-lang', lang);
    }
  }

  toggleLanguage() {
    this.setLanguage(this.langSignal() === 'es' ? 'en' : 'es');
  }

  // Central dictionary for static UI labels
  readonly ui = {
    // Nav links
    navInicio: { es: 'Inicio', en: 'Home' },
    navExperiencia: { es: 'Experiencia', en: 'Experience' },
    navProyectos: { es: 'Proyectos', en: 'Projects' },
    navTecnologias: { es: 'Tecnologías', en: 'Tech Stack' },
    navCertificaciones: { es: 'Certificaciones', en: 'Certifications' },
    navLecturas: { es: 'Lecturas', en: 'Readings' },

    // Hero Section
    heroAvailable: { es: 'Disponible para nuevos proyectos', en: 'Available for new projects' },
    heroGreet: { es: '¡Hola! Soy', en: "Hi! I'm" },
    heroRole: { es: 'Ingeniero en Sistemas', en: 'Systems Engineer' },
    heroDesc: {
      es: 'Ingeniero en sistemas con conocimientos en desarrollo de software, bases de datos y computación en la nube. Mi objetivo es aportar al crecimiento tecnológico de la empresa mediante el desarrollo de soluciones eficientes, seguras y bien estructuradas.',
      en: 'Systems Engineer with knowledge in software development, databases, and cloud computing. My goal is to contribute to the technological growth of the company by developing efficient, secure, and well-structured solutions.'
    },

    // Experience Section
    expBadge: { es: 'Trayectoria Profesional', en: 'Professional Journey' },
    expTitle: { es: 'Experiencia', en: 'Experience' },
    expDesc: {
      es: 'Trayectoria técnica enfocada en el desarrollo de microservicios, gestión de bases de datos y creación de interfaces escalables.',
      en: 'Technical career focused on microservices development, database management, and building scalable interfaces.'
    },
    expResponsibilities: { es: 'Responsabilidades', en: 'Responsibilities' },
    expTechsUsed: { es: 'Tecnologías utilizadas', en: 'Technologies used' },

    // Projects Section
    projBadge: { es: 'Portafolio Técnico', en: 'Technical Portfolio' },
    projTitle: { es: 'Proyectos', en: 'Projects' },
    projDesc: {
      es: 'Galería de soluciones de ingeniería y desarrollo. Filtra para explorar por tecnologías clave.',
      en: 'Gallery of engineering and development solutions. Filter to explore by key technologies.'
    },
    projFilterAll: { es: 'Todos', en: 'All' },
    projEmpty: {
      es: 'No se encontraron proyectos con esta tecnología.',
      en: 'No projects were found with this technology.'
    },
    projBtnCode: { es: 'Código', en: 'Code' },
    projBtnDemo: { es: 'Ver Demo', en: 'Live Demo' },

    // Technologies Section
    techBadge: { es: 'Habilidades', en: 'Skills' },
    techTitle: { es: 'Tecnologías', en: 'Technologies' },
    techDesc: {
      es: 'Tecnologías con las que he trabajado de forma práctica. Pasa el cursor sobre los iconos para explorar los casos de uso.',
      en: 'Technologies I have worked with in practice. Hover over the icons to explore their use cases.'
    },

    // Certifications Section
    certBadge: { es: 'Credenciales Oficiales', en: 'Official Credentials' },
    certTitle: { es: 'Certificaciones', en: 'Certifications' },
    certDesc: {
      es: 'Diplomas y reconocimientos que respaldan mi formación profesional continua.',
      en: 'Diplomas and achievements that support my continuous professional training.'
    },
    certExpand: { es: 'Leer más', en: 'Read more' },
    certCollapse: { es: 'Leer menos', en: 'Read less' },
    certVerify: { es: 'Ver certificado oficial', en: 'Verify official certificate' },

    // Readings Section
    readBadge: { es: 'Biblioteca Personal', en: 'Personal Library' },
    readTitle: { es: 'Lecturas', en: 'Readings' },
    readDesc: {
      es: 'Libros y documentación técnica que leo para mantenerme al día con la industria y mejores prácticas.',
      en: 'Books and technical documentation I read to stay up-to-date with industry and best practices.'
    },
    readFilterAll: { es: 'Todos', en: 'All' },
    readFilterReading: { es: 'Leyendo', en: 'Reading' },
    readFilterCompleted: { es: 'Completados', en: 'Completed' },
    readFilterWant: { es: 'Por Leer', en: 'Want to Read' },
    readLoading: { es: 'Cargando biblioteca...', en: 'Loading library...' },
    readEmpty: {
      es: 'No hay libros en esta categoría.',
      en: 'No books found in this category.'
    },
    readErrorTitle: { es: 'Error de Sincronización', en: 'Sync Error' },
    readErrorDesc: { es: 'No se pudo cargar la biblioteca técnica en este momento. Inténtelo más tarde.', en: 'Could not load the technical library at this time. Please try again later.' },
    readProgress: { es: 'Progreso:', en: 'Progress:' },
    readProgressComplete: { es: 'Completado', en: 'Completed' },

    // Background Switcher
    bgSwitcherTitle: { es: 'Colores de Fondo', en: 'Background Colors' },
    bgBlack: { es: 'Negro Puro', en: 'Pure Black' },
    bgNavy: { es: 'Azul Profundo', en: 'Deep Navy' },
    bgBurgundy: { es: 'Borgoña Oscuro', en: 'Dark Burgundy' },

    // Footer
    footCopy: { es: '© 2026 Systems Engineer Portfolio.', en: '© 2026 Systems Engineer Portfolio.' },
    footSource: { es: 'Código Fuente', en: 'Source Code' }
  };
}
