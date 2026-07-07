import { Project } from '../models/project.model';
import { TAGS } from './tags';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: { es: "Sistema de Inventario", en: "Inventory System" },
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/inventorySystem/imagen6.png",
    description: {
      es: "Plataforma web para gestionar los productos de un taller, seguimiento de compras y ventas, y dashboard interactivo como soporte para la toma de decisiones.",
      en: "Web platform to manage workshop products, purchase and sales tracking, and an interactive dashboard to support decision making."
    },
    github: "https://github.com/amos18g/taller",
    technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.SUPABASE],
    is_active: false,
  },
  {
    id: 2,
    title: { es: "Sistema de Matrícula", en: "Enrollment System" },
    image: "/projects/matricula1.webp",
    description: {
      es: "Sistema de matrícula para llevar el control de los estudiantes y expedientes estudiantiles.",
      en: "Enrollment system to keep control of students and student records."
    },
    github: "https://github.com/jdg03/educaTodos",
    technologies: [TAGS.SQLSERVER, TAGS.NODEJS, TAGS.REACT, TAGS.TAILWIND],
    is_active: false,
  },
  {
    id: 3,
    title: { es: "Blog informativo", en: "Informative Blog" },
    image: "/projects/blog1.webp",
    description: {
      es: "Blog informativo para un bufete de abogados donde los clientes pueden buscar información sobre trámites legales junto con panel administrativo para gestionar las entradas.",
      en: "Informative blog for a law firm where clients can search for information on legal procedures, along with an admin panel to manage posts."
    },
    github: "https://github.com/jdg03/angular-blog-app",
    technologies: [TAGS.ANGULAR, TAGS.TAILWIND, TAGS.FIREBASE],
    is_active: false,
  },
  {
    id: 4,
    title: { es: "Detector de lenguaje de señas", en: "Sign Language Detector" },
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/signLanguageDetector/imagen2.PNG",
    description: {
      es: "Proyecto de inteligencia artificial para reconocer gestos del lenguaje de señas mediante visión computacional y aprendizaje automático.",
      en: "Artificial intelligence project to recognize sign language gestures using computer vision and machine learning."
    },
    github: "https://github.com/jdg03/python_tensorFlow_letterDetectorSignLanguage",
    technologies: [TAGS.PYTHON, TAGS.TENSORFLOW],
    is_active: false,
  },
  {
    id: 5,
    title: { es: "Backend de E-commerce", en: "E-commerce Backend" },
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/ecommerceAspNet/Imagen1.png",
    description: {
      es: "Arquitectura del backend de un ecommerce web, siguiendo patrones de clean architecture, CQRS, Mediator, Fluent Validation y autenticación con identity y JWT.",
      en: "Backend architecture of a web e-commerce, following clean architecture patterns, CQRS, Mediator, Fluent Validation, and authentication with Identity and JWT."
    },
    github: "https://github.com/jdg03/aspnet-core-react-ecommerce",
    technologies: [TAGS.SQLSERVER, TAGS.NET, TAGS.JWT],
    is_active: false,
  },
  {
    id: 7,
    title: { es: "E-commerce web", en: "Web E-commerce" },
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/projects/ecommerceMERN/imagen1.png",
    description: {
      es: "Tienda virtual en línea con una interfaz minimalista, búsquedas eficientes y panel administrativo, pensado para agilizar el proceso de compra sobre todo aquellos negocios que no tienen tienda física y que quieren exponer sus catálogos de una forma más profesional.",
      en: "Online virtual store with a minimalist interface, efficient searches, and admin panel, designed to streamline the purchasing process especially for businesses without a physical store that want to expose their catalogs professionally."
    },
    github: "https://github.com/jdg03/ecommercce-MERN",
    technologies: [TAGS.TypeScript, TAGS.REACT, TAGS.NODEJS, TAGS.Mongo],
    link: "https://portfolio-jose-gonzalez.vercel.app/",
    is_active: false,
  },
  {
    id: 6,
    title: { es: "Portafolio con animaciones 3D", en: "3D Animated Portfolio" },
    image: "/projects/porfolio.webp",
    description: {
      es: "Portafolio web con animaciones 3d usando librerías como motion y three.js",
      en: "Web portfolio with 3D animations using libraries like Motion and Three.js"
    },
    github: "",
    technologies: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE],
    link: "https://portfolio-jose-gonzalez.vercel.app/",
    is_active: true,
  },
];
