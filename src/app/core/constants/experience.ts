import { ExperienceItem } from '../models/experience.model';

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: { es: "Analista de aplicaciones junior", en: "Junior Applications Analyst" },
    company: "AGREGA",
    dateStart: { es: "Enero 2026", en: "January 2026" },
    dateEnd: { es: "Actualmente", en: "Present" },
    type: { es: "TIEMPO COMPLETO", en: "FULL-TIME" },
    modality: { es: "PRESENCIAL", en: "ON-SITE" },
    responsibilities: [
      {
        title: { es: "Agentes de IA y CI/CD", en: "AI Agents & CI/CD" },
        description: {
          es: "Desarrollo e integración de agentes impulsados por IA en herramientas internas y plataformas externas de clientes (como Microsoft Teams), utilizando Python, Docker y GitLab, bajo metodologías ágiles (Scrum) y CI/CD mediante pipelines en GitLab.",
          en: "Development and integration of AI-powered agents in internal tools and external client platforms (such as Microsoft Teams), using Python, Docker and GitLab, under agile methodologies (Scrum) and CI/CD via GitLab pipelines."
        },
        icon: "smart_toy",
        color: "primary"
      },
      {
        title: { es: "Nube y Despliegue", en: "Cloud & Deployment" },
        description: {
          es: "Mantenimiento y mejora de aplicaciones internas desarrolladas, incluyendo su despliegue en Google Cloud Run mediante contenedores.",
          en: "Maintenance and improvement of developed internal applications, including their deployment in Google Cloud Run using containers."
        },
        icon: "cloud",
        color: "primary"
      },
      {
        title: { es: "Automatización GCP", en: "GCP Automation" },
        description: {
          es: "Automatización de procesos mediante scripts para la interacción con servicios de Google Cloud (ej. gestión de buckets), optimizando flujos operativos y uso correcto de la IA para Potenciar el trabajo.",
          en: "Automation of processes using scripts for interaction with Google Cloud services (e.g., bucket management), optimizing operational workflows and correct use of AI to empower work."
        },
        icon: "settings_suggest",
        color: "tertiary"
      },
      {
        title: { es: "Soporte Técnico", en: "Technical Support" },
        description: {
          es: "Soporte técnico a usuarios internos y clientes a través de mesa de servicio, así como ejecución de tareas operativas y elaboración de reportes en excel.",
          en: "Technical support for internal users and clients through the service desk, as well as executing operational tasks and creating excel reports."
        },
        icon: "support_agent",
        color: "tertiary"
      },
      {
        title: { es: "Apoyo Comercial", en: "Sales Support" },
        description: {
          es: "Apoyo al área comercial en la explicación de soluciones tecnológicas a usuarios no técnicos.",
          en: "Support to the commercial area in explaining technological solutions to non-technical users."
        },
        icon: "co_present",
        color: "tertiary"
      },
      {
        title: { es: "Investigación I+D", en: "R&D Research" },
        description: {
          es: "Investigación y evaluación de nuevas tecnologías e infraestructuras (como Azure).",
          en: "Research and evaluation of new technologies and infrastructures (such as Azure)."
        },
        icon: "explore",
        color: "tertiary"
      }
    ],
    frontendTechs: ["PYTHON", "DOCKER", "GITLAB", "GOOGLE CLOUD", "AZURE"]
  },
  {
    title: { es: "Practicante de Desarrollo de Software", en: "Software Development Intern" },
    company: "BANHCAFE",
    dateStart: { es: "Febrero 2025", en: "February 2025" },
    dateEnd: { es: "Julio 2025", en: "July 2025" },
    type: { es: "TIEMPO COMPLETO", en: "FULL-TIME" },
    modality: { es: "HÍBRIDO", en: "HYBRID" },
    responsibilities: [
      {
        title: { es: "Requerimientos", en: "Requirements" },
        description: {
          es: "Levantamiento y análisis de requerimientos funcionales con usuarios internos para la optimización de procesos bancarios.",
          en: "Gathering and analysis of functional requirements with internal users to optimize banking processes."
        },
        icon: "assignment",
        color: "primary"
      },
      {
        title: { es: "Bases de Datos", en: "Databases" },
        description: {
          es: "Análisis y diseño de bases de datos relacionales, definiendo tablas, relaciones, restricciones y procedimientos almacenados.",
          en: "Analysis and design of relational databases, defining tables, relationships, constraints, and stored procedures."
        },
        icon: "database",
        color: "primary"
      },
      {
        title: { es: "Backend Engineering", en: "Backend Engineering" },
        description: {
          es: "Desarrollo de microservicios robustos para el módulo interno de seguros utilizando C# y el stack de .NET Core.",
          en: "Development of robust microservices for the internal insurance module using C# and the .NET Core stack."
        },
        icon: "terminal",
        color: "tertiary"
      },
      {
        title: { es: "Business Intelligence", en: "Business Intelligence" },
        description: {
          es: "Creación de consultas complejas en SQL Server para la generación de reportes estratégicos mediante Report Builder.",
          en: "Creation of complex queries in SQL Server for the generation of strategic reports using Report Builder."
        },
        icon: "query_stats",
        color: "tertiary"
      },
      {
        title: { es: "Desarrollo Frontend", en: "Frontend Development" },
        description: {
          es: "Creación de componentes web interactivos, responsivos y reutilizables utilizando HTML, CSS, React y Tailwind CSS.",
          en: "Creation of interactive, responsive, and reusable web components using HTML, CSS, React, and Tailwind CSS."
        },
        icon: "code",
        color: "tertiary"
      }
    ],
    frontendTechs: [".NET CORE", "C#", "SQL SERVER", "REACT"]
  }
];
