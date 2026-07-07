import { Component, inject } from '@angular/core';
import { TECHNOLOGIES } from '../../core/constants/technologies';
import { Technology } from '../../core/models/technology.model';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon';
import { TranslationService, TranslatedText } from '../../core/services/translation.service';

// Enriched Technology interface supporting brand watermarks and didactical tooltips
interface EnrichedTechnology extends Technology {
  useCase: TranslatedText; // Didactical practical use case
  glowClass: string;       // Custom corporate brand outline border/glow shadow on hover
  brandColorClass: string; // Background color class for the internal blurred watermark orb
}

interface TechGroup {
  nombre: TranslatedText;
  items: EnrichedTechnology[];
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './technologies.html'
})
export class TechnologiesComponent {
  private readonly translationService = inject(TranslationService);
  protected readonly ui = this.translationService.ui;
  protected readonly lang = this.translationService.lang;
  protected readonly translate = (text: any) => this.translationService.translate(text);

  // Strongly-typed structured groups without "principal" or "progress" attributes
  protected readonly techGroups: TechGroup[] = [
    {
      nombre: { es: "Desarrollo Frontend", en: "Frontend Development" },
      items: [
        {
          ...TECHNOLOGIES.ANGULAR,
          useCase: {
            es: 'Desarrollo de SPAs reactivas y modulares utilizando Signals de Angular 19',
            en: 'Development of reactive and modular SPAs using Angular 19 Signals'
          },
          glowClass: 'hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]',
          brandColorClass: 'bg-red-500'
        },
        {
          ...TECHNOLOGIES.REACT,
          useCase: {
            es: 'Componentes dinámicos altamente interactivos y aplicaciones web de gran escala',
            en: 'Highly interactive dynamic components and large-scale web applications'
          },
          glowClass: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
          brandColorClass: 'bg-cyan-500'
        },
        {
          ...TECHNOLOGIES.HTML,
          useCase: {
            es: 'Estructuración semántica web moderna, SEO técnico inicial y accesibilidad (WAI-ARIA).',
            en: 'Modern semantic web structuring, initial technical SEO, and accessibility (WAI-ARIA).'
          },
          glowClass: 'hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]',
          brandColorClass: 'bg-orange-500'
        },
        {
          ...TECHNOLOGIES.CSS,
          useCase: {
            es: 'Estilado avanzado, maquetación flexbox/grid, animaciones y responsive design.',
            en: 'Advanced styling, flexbox/grid layout, animations, and responsive design.'
          },
          glowClass: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          brandColorClass: 'bg-blue-500'
        },
        {
          ...TECHNOLOGIES.TAILWIND,
          useCase: {
            es: 'Maquetación semántica veloz y sistemas de diseño adaptables y responsivos',
            en: 'Rapid semantic layout and adaptive, responsive design systems'
          },
          glowClass: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]',
          brandColorClass: 'bg-sky-500'
        }
      ]
    },
    {
      nombre: { es: "Desarrollo Backend", en: "Backend Development" },
      items: [
        {
          ...TECHNOLOGIES.NODEJS,
          useCase: {
            es: 'Desarrollo de microservicios rápidos, APIs RESTful asíncronas y de alto rendimiento',
            en: 'Development of fast microservices, asynchronous and high-performance RESTful APIs'
          },
          glowClass: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
          brandColorClass: 'bg-emerald-500'
        },
        {
          ...TECHNOLOGIES.SPRING,
          useCase: {
            es: 'Construcción de APIs robustas corporativas empleando inyección de dependencias y Spring MVC',
            en: 'Construction of robust corporate APIs using dependency injection and Spring MVC'
          },
          glowClass: 'hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]',
          brandColorClass: 'bg-green-500'
        },
        {
          ...TECHNOLOGIES.NET,
          useCase: {
            es: 'APIs corporativas escalables bajo patrones Clean Architecture, CQRS y Mediator',
            en: 'Scalable corporate APIs under Clean Architecture, CQRS, and Mediator patterns'
          },
          glowClass: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]',
          brandColorClass: 'bg-indigo-500'
        }
      ]
    },
    {
      nombre: { es: "Lenguajes de programación", en: "Programming Languages" },
      items: [
        {
          ...TECHNOLOGIES.CSHARP,
          useCase: {
            es: 'Lógica empresarial fuertemente tipada y orientada a objetos en entornos .NET Core',
            en: 'Strongly typed and object-oriented business logic in .NET Core environments'
          },
          glowClass: 'hover:border-purple-600/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)]',
          brandColorClass: 'bg-purple-600'
        },
        {
          ...TECHNOLOGIES.JAVA,
          useCase: {
            es: 'Desarrollo de lógica transaccional, POO pura y sistemas backend corporativos robustos',
            en: 'Development of transactional logic, pure OOP, and robust corporate backend systems'
          },
          glowClass: 'hover:border-red-600/40 hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]',
          brandColorClass: 'bg-red-600'
        },
        {
          ...TECHNOLOGIES.JAVASCRIPT,
          useCase: {
            es: 'Programación asíncrona avanzada, manipulación del DOM y arquitecturas modernas ES6+',
            en: 'Advanced asynchronous programming, DOM manipulation, and modern ES6+ architectures'
          },
          glowClass: 'hover:border-yellow-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]',
          brandColorClass: 'bg-yellow-500'
        },
        {
          ...TECHNOLOGIES.PYTHON,
          useCase: {
            es: 'Modelos de inteligencia artificial, desarrollo de APIs con FastAPI, visión computacional con TensorFlow y automatizaciones',
            en: 'Artificial intelligence models, API development with FastAPI, computer vision with TensorFlow, and automations'
          },
          glowClass: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          brandColorClass: 'bg-blue-500'
        }
      ]
    },
    {
      nombre: { es: "Bases de Datos", en: "Databases" },
      items: [
        {
          ...TECHNOLOGIES.SQLSERVER,
          useCase: {
            es: 'Diseño de bases de datos relacionales, triggers y optimización de procedimientos almacenados',
            en: 'Relational database design, triggers, and stored procedure optimization'
          },
          glowClass: 'hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]',
          brandColorClass: 'bg-red-500'
        },
        {
          ...TECHNOLOGIES.POSTGRES,
          useCase: {
            es: 'Bases de datos relacionales avanzadas, modelado relacional complejo, optimización de queries y procedimientos.',
            en: 'Advanced relational databases, complex relational modeling, query and procedure optimization.'
          },
          glowClass: 'hover:border-blue-600/40 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]',
          brandColorClass: 'bg-blue-600'
        },
        {
          ...TECHNOLOGIES.MONGODB,
          useCase: {
            es: 'Bases de datos no relacionales (NoSQL) de documentos flexibles JSON/BSON',
            en: 'Non-relational databases (NoSQL) of flexible JSON/BSON documents'
          },
          glowClass: 'hover:border-emerald-600/40 hover:shadow-[0_0_25px_rgba(5,150,105,0.25)]',
          brandColorClass: 'bg-emerald-600'
        }
      ]
    },
    {
      nombre: { es: "Herramientas", en: "Tools" },
      items: [
        {
          ...TECHNOLOGIES.GITHUB,
          useCase: {
            es: 'Control de versiones, flujos de trabajo en equipo, ramas GitFlow e integración continua básica.',
            en: 'Version control, team workflows, GitFlow branches, and basic continuous integration.'
          },
          glowClass: 'hover:border-slate-400/40 hover:shadow-[0_0_25px_rgba(148,163,184,0.25)]',
          brandColorClass: 'bg-slate-400'
        },
        {
          ...TECHNOLOGIES.GITLAB,
          useCase: {
            es: 'Integración y despliegue continuos (CI/CD pipelines), control de versiones y gestión ágil de proyectos.',
            en: 'Continuous integration and deployment (CI/CD pipelines), version control, and agile project management.'
          },
          glowClass: 'hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]',
          brandColorClass: 'bg-orange-500'
        },
        {
          ...TECHNOLOGIES.DOCKER,
          useCase: {
            es: 'Contenedores aislados y despliegue consistente de microservicios e infraestructuras.',
            en: 'Isolated containers and consistent deployment of microservices and infrastructures.'
          },
          glowClass: 'hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(96,165,250,0.25)]',
          brandColorClass: 'bg-blue-400'
        },
        {
          ...TECHNOLOGIES.VSCODE,
          useCase: {
            es: 'Editor de código ágil, personalizable con extensiones para depuración y desarrollo rápido.',
            en: 'Agile, highly customizable code editor with extensions for debugging and rapid development.'
          },
          glowClass: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          brandColorClass: 'bg-blue-500'
        },
        {
          ...TECHNOLOGIES.VS,
          useCase: {
            es: 'IDE potente e integral para desarrollo y depuración avanzada de soluciones .NET, C# y C++.',
            en: 'Powerful and comprehensive IDE for advanced development and debugging of .NET, C#, and C++ solutions.'
          },
          glowClass: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
          brandColorClass: 'bg-purple-500'
        },
        {
          ...TECHNOLOGIES.NOTION,
          useCase: {
            es: 'Gestión del conocimiento, documentación técnica, notas de reuniones y planificación ágil.',
            en: 'Knowledge management, technical documentation, meeting notes, and agile planning.'
          },
          glowClass: 'hover:border-neutral-400/40 hover:shadow-[0_0_25px_rgba(163,163,163,0.25)]',
          brandColorClass: 'bg-neutral-400'
        }
      ]
    },
    {
      nombre: { es: "Computación en la Nube", en: "Cloud Computing" },
      items: [
        {
          ...TECHNOLOGIES.GCP,
          useCase: {
            es: 'Despliegues serverless en Cloud Run, Cloud Functions, bases de datos gestionadas en Cloud SQL, almacenamiento NoSQL en Firestore y buckets de Google Cloud Storage.',
            en: 'Serverless deployments on Cloud Run, Cloud Functions, managed databases in Cloud SQL, NoSQL storage in Firestore, and Google Cloud Storage buckets.'
          },
          glowClass: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          brandColorClass: 'bg-blue-500'
        },
        {
          ...TECHNOLOGIES.AZURE,
          useCase: {
            es: 'Despliegue y escalabilidad de aplicaciones mediante Azure App Services e integración de inteligencia artificial conversacional con Azure Bot Services.',
            en: 'App deployment and scalability using Azure App Services and conversational AI integration with Azure Bot Services.'
          },
          glowClass: 'hover:border-sky-600/40 hover:shadow-[0_0_25px_rgba(3,105,161,0.25)]',
          brandColorClass: 'bg-sky-600'
        }
      ]
    }
  ];
}
