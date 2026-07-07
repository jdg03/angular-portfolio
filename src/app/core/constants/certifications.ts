import { Certification } from '../models/certification.model';

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: { es: "Base de datos de MySQL", en: "MySQL Database" },
    academy: "INFOP",
    description: {
      es: "El curso de Base de Datos de MySQL está diseñado para que los participantes aprendan a administrar y manipular bases de datos de forma eficiente, mediante el uso de operaciones e instrucciones específicas.",
      en: "The MySQL Database course is designed for participants to learn how to manage and manipulate databases efficiently, through the use of specific operations and statements."
    },
    link: "https://drive.google.com/file/d/1u2NOWSYPDAbEDa6EQSZSUxz5eBrePW5m/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/mysql_infop.png",
    order_index: 1,
    created_at: "2025-10-26 17:53:33.611087+00",
    is_active: true,
  },
  {
    id: 2,
    title: { es: "Programar en Python", en: "Programming in Python" },
    academy: "INFOP",
    description: {
      es: "Introduce a uno de los lenguajes de programación más versátiles y demandados en la actualidad. Aprenderás a dominar su sintaxis y a aplicar las buenas prácticas de la industria para resolver problemas de manera eficiente.",
      en: "Introduces one of the most versatile and in-demand programming languages today. You will learn to master its syntax and apply industry best practices to solve problems efficiently."
    },
    link: "https://drive.google.com/file/d/1yz2eeH0q9SSnCYWRWUcAIoaxy_cDmd9B/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_infop.png",
    order_index: 5,
    created_at: "2025-10-26 17:53:33.611087+00",
    is_active: true,
  },
  {
    id: 3,
    title: { es: "Python Essentials 1", en: "Python Essentials 1" },
    academy: "Cisco Networking Academy",
    description: {
      es: "Formación en programación con Python 3, centrada en el desarrollo de scripts funcionales, pensamiento algorítmico y uso eficiente de la Biblioteca Estándar.",
      en: "Training in programming with Python 3, focused on the development of functional scripts, algorithmic thinking, and efficient use of the Standard Library."
    },
    link: "https://drive.google.com/file/d/1gVbf2J_C_r_YoWW1_SUku6eL8CnUYu1O/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_cisco.png",
    order_index: 3,
    created_at: "2025-10-26 17:53:33.611087+00",
    is_active: true,
  },
  {
    id: 4,
    title: { es: "Web Apis en Net Core", en: "Web APIs in .NET Core" },
    academy: "Udemy",
    description: {
      es: "Curso especializado en la construcción de soluciones backend mediante Web APIs en ASP.NET Core 9, aplicando metodologías de Clean Architecture y el patrón CQRS. Abarca el uso de tecnologías y librerías clave como Entity Framework, LINQ, Identity Core, JWT, FluentValidation y MediatR.",
      en: "Specialized course in building backend solutions through Web APIs in ASP.NET Core 9, applying Clean Architecture methodologies and the CQRS pattern. It covers the use of key technologies and libraries such as Entity Framework, LINQ, Identity Core, JWT, FluentValidation, and MediatR."
    },
    link: "https://drive.google.com/file/d/1gQQT8nlrsNGIYoIkBUboep938hkd9p5T/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/apis_udemy.png",
    order_index: 4,
    created_at: "2025-10-26 17:53:33.611087+00",
    is_active: true,
  },
  {
    id: 5,
    title: { es: "Reconocimiento de excelencia académica", en: "Academic Excellence Recognition" },
    academy: "UNAH",
    description: {
      es: "Reconocimiento emitido por la Universidad Nacional Autónoma de Honduras a los estudiantes con un índice destacado en la facultad de ingeniería.",
      en: "Recognition issued by the National Autonomous University of Honduras to students with an outstanding GPA in the Faculty of Engineering."
    },
    link: "https://drive.google.com/file/d/12OFaPzHzpX0RTNkVsRQfycLv_FFXFgHe/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/excelencia.png",
    order_index: 6,
    created_at: "2025-10-26 17:53:33.611087+00",
    is_active: true,
  },
  {
    id: 6,
    title: { es: "JavaScript Essentials 1", en: "JavaScript Essentials 1" },
    academy: "Cisco Networking Academy",
    description: {
      es: "Conocimiento de la sintaxis del núcleo de JavaScript; variables, operadores, control de flujo, funciones y conceptos básicos del sistema de tipos. Pensamiento algorítmico y resolución de problemas de forma programática.",
      en: "Knowledge of basic JavaScript syntax; variables, operators, flow control, functions, and core type system concepts. Algorithmic thinking and problem solving programmatically."
    },
    link: "https://drive.google.com/file/d/1v6IgWC8JyjMlI4tGxnwVt5kWsjn2GpeY/view?usp=sharing",
    image: "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/javascript.png",
    order_index: 2,
    created_at: "2025-11-04 06:01:56+00",
    is_active: true,
  },
];
