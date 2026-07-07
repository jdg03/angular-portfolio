# Copia de Seguridad Completa de Supabase

Exportado el: 6/7/2026, 22:49:41

Este archivo contiene el respaldo completo de las tablas detectadas en tu base de datos de Supabase.

## Tabla: `books`

Registros totales: **3**

| id | title | autor | link | image | order_index | created_at | is_active | total_pages | pages_read |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Microservices Patterns | Chris Richardson | https://www.amazon.com/gp/product/1617294543 | https://m.media-amazon.com/images/I/612SvfNVfdL._SY385_.jpg | 1 | 2025-10-26T20:57:44.923781+00:00 | true | 300 | 100 |
| 2 | Clean Architecture: A Craftsman s Guide to Software Structure and Design | Robert C. Martin Series | https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164 | https://m.media-amazon.com/images/I/41fijVG5x7L._SY445_SX342_FMwebp_.jpg | 2 | 2025-10-26T20:57:44.923781+00:00 | true | 400 | 231 |
| 3 | Software Development From A to Z: A Deep Dive into all the Roles Involved in the Creation of Software | Olga Filipova | https://www.amazon.com/Software-Development-Roles-Involved-Creation/dp/148423944X  | https://m.media-amazon.com/images/I/61nAd1sbQVL._SY425_.jpg | 3 | 2025-10-26T20:57:44.923781+00:00 | true | 500 | 156 |


### Datos JSON (Tabla `books`)

```json
[
  {
    "id": 1,
    "title": "Microservices Patterns",
    "autor": "Chris Richardson",
    "link": "https://www.amazon.com/gp/product/1617294543",
    "image": "https://m.media-amazon.com/images/I/612SvfNVfdL._SY385_.jpg",
    "order_index": 1,
    "created_at": "2025-10-26T20:57:44.923781+00:00",
    "is_active": true,
    "total_pages": 300,
    "pages_read": 100
  },
  {
    "id": 2,
    "title": "Clean Architecture: A Craftsman s Guide to Software Structure and Design",
    "autor": "Robert C. Martin Series",
    "link": "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
    "image": "https://m.media-amazon.com/images/I/41fijVG5x7L._SY445_SX342_FMwebp_.jpg",
    "order_index": 2,
    "created_at": "2025-10-26T20:57:44.923781+00:00",
    "is_active": true,
    "total_pages": 400,
    "pages_read": 231
  },
  {
    "id": 3,
    "title": "Software Development From A to Z: A Deep Dive into all the Roles Involved in the Creation of Software",
    "autor": "Olga Filipova",
    "link": "https://www.amazon.com/Software-Development-Roles-Involved-Creation/dp/148423944X ",
    "image": "https://m.media-amazon.com/images/I/61nAd1sbQVL._SY425_.jpg",
    "order_index": 3,
    "created_at": "2025-10-26T20:57:44.923781+00:00",
    "is_active": true,
    "total_pages": 500,
    "pages_read": 156
  }
]
```

---

## Tabla: `projects`

Registros totales: **6**

| id | name | description | source_code_link | is_active |
| --- | --- | --- | --- | --- |
| 1 | Sistema de Inventario | Plataforma web para gestionar los productos de un taller, seguimiendo de compras y ventas, y dashboard interactivo como soporte para la toma de decisiones. | https://github.com/amos18g/taller | true |
| 2 | Sistema de Matrícula | Sistema de de matrícula para llevar el control de los estudiantes y expedientes estudiantiles. | https://github.com/jdg03/educaTodos | true |
| 3 | Blog informativo | Blog informativo para un bufete de abogados y panel administrativo para gestionar las entradas. | https://github.com/jdg03/angular-blog-app | true |
| 4 | Detector de lenguaje de señas | Proyecto de inteligencia artificial para reconocer gestos del lenguaje de señas mediante visión computacional y aprendizaje automático. | https://github.com/jdg03/python_tensorFlow_letterDetectorSignLanguage | true |
| 5 | Backend de Ecommerce web | Arquitectura del backend de un ecommerce wep, siguiendo patrones de clean arquitecture, CQRS, Mediator, Fluent Validation y autenticación con identity y JWT. | https://github.com/jdg03/aspnet-core-react-ecommerce | true |
| 6 | E-commerce web | Tienda viertual en linea con una interfaz minimalista, busquedas eficientes y panel administrativo, pensado para agilizar el proceso de compra para aquellos negocios que no tienen tienda fisica y que quieren exponer sus catalogos de una forma más profesional. | https://github.com/jdg03/ecommercce-MERN | true |


### Datos JSON (Tabla `projects`)

```json
[
  {
    "id": 1,
    "name": "Sistema de Inventario",
    "description": "Plataforma web para gestionar los productos de un taller, seguimiendo de compras y ventas, y dashboard interactivo como soporte para la toma de decisiones.",
    "source_code_link": "https://github.com/amos18g/taller",
    "is_active": true
  },
  {
    "id": 2,
    "name": "Sistema de Matrícula",
    "description": "Sistema de de matrícula para llevar el control de los estudiantes y expedientes estudiantiles.",
    "source_code_link": "https://github.com/jdg03/educaTodos",
    "is_active": true
  },
  {
    "id": 3,
    "name": "Blog informativo",
    "description": "Blog informativo para un bufete de abogados y panel administrativo para gestionar las entradas.",
    "source_code_link": "https://github.com/jdg03/angular-blog-app",
    "is_active": true
  },
  {
    "id": 4,
    "name": "Detector de lenguaje de señas",
    "description": "Proyecto de inteligencia artificial para reconocer gestos del lenguaje de señas mediante visión computacional y aprendizaje automático.",
    "source_code_link": "https://github.com/jdg03/python_tensorFlow_letterDetectorSignLanguage",
    "is_active": true
  },
  {
    "id": 5,
    "name": "Backend de Ecommerce web",
    "description": "Arquitectura del backend de un ecommerce wep, siguiendo patrones de clean arquitecture, CQRS, Mediator, Fluent Validation y autenticación con identity y JWT.",
    "source_code_link": "https://github.com/jdg03/aspnet-core-react-ecommerce",
    "is_active": true
  },
  {
    "id": 6,
    "name": "E-commerce web",
    "description": "Tienda viertual en linea con una interfaz minimalista, busquedas eficientes y panel administrativo, pensado para agilizar el proceso de compra para aquellos negocios que no tienen tienda fisica y que quieren exponer sus catalogos de una forma más profesional.",
    "source_code_link": "https://github.com/jdg03/ecommercce-MERN",
    "is_active": true
  }
]
```

---

## Tabla: `certifications`

Registros totales: **6**

| id | title | academy | description | link | image | order_index | created_at | is_active |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Base de datos de MySQL | INFOP | El curso de Base de Datos de MySQL está diseñado para que los participantes aprendan a administrar y manipular bases de datos de forma eficiente, mediante el uso de operaciones e instrucciones específicas. | https://drive.google.com/file/d/1u2NOWSYPDAbEDa6EQSZSUxz5eBrePW5m/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/mysql_infop.png | 1 | 2025-10-26T17:53:33.611087+00:00 | true |
| 3 | Python Essentials 1 | Cisco Networking Academy | Formación en programación con Python 3, centrada en el desarrollo de scripts funcionales, pensamiento algorítmico y uso eficiente de la Biblioteca Estándar. | https://drive.google.com/file/d/1gVbf2J_C_r_YoWW1_SUku6eL8CnUYu1O/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_cisco.png | 3 | 2025-10-26T17:53:33.611087+00:00 | true |
| 4 | Web Apis en Net Core | Udemy | Curso especializado en la construcción de soluciones backend mediante Web APIs en ASP.NET Core 9, aplicando metodologías de Clean Architecture y el patrón CQRS. Abarca el uso de tecnologías y librerías clave como Entity Framework, LINQ, Identity Core, JWT, FluentValidation y MediatR | https://drive.google.com/file/d/1gQQT8nlrsNGIYoIkBUboep938hkd9p5T/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/apis_udemy.png | 4 | 2025-10-26T17:53:33.611087+00:00 | true |
| 6 | JavaScript Essentials 1 | Cisco Networking Academy | Los asalariados conocen la sintaxis del núcleo de JavaScript; puede trabajar con variables, operadores, control de flujo y funciones; conocer los conceptos básicos del sistema de tipos de datos; pensar algorítmicamente y puede analizar problemas utilizando un aparato conceptual programático; y puede diseñar, desarrollar y mejorar programas JavaScript simples. | https://drive.google.com/file/d/1v6IgWC8JyjMlI4tGxnwVt5kWsjn2GpeY/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/javascript.png | 2 | 2025-11-04T06:01:56+00:00 | true |
| 2 | Programar en Python | INFOP | Introduce a uno de los lenguajes de programación más versátiles y demandados en la actualidad. Aprenderás a dominar su sintaxis y a aplicar las buenas prácticas de la industria para resolver problemas de manera eficiente. | https://drive.google.com/file/d/1yz2eeH0q9SSnCYWRWUcAIoaxy_cDmd9B/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_infop.png | 5 | 2025-10-26T17:53:33.611087+00:00 | true |
| 5 | Reconocimiento de excelencia académica | UNAH | Reconocimiento emitido por la Universidad Nacional Autónoma de Honduras a lo estudiantes con un índice destacado en la facultad de ingeniería. | https://drive.google.com/file/d/12OFaPzHzpX0RTNkVsRQfycLv_FFXFgHe/view?usp=sharing | https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/excelencia.png | 6 | 2025-10-26T17:53:33.611087+00:00 | true |


### Datos JSON (Tabla `certifications`)

```json
[
  {
    "id": 1,
    "title": "Base de datos de MySQL",
    "academy": "INFOP",
    "description": "El curso de Base de Datos de MySQL está diseñado para que los participantes aprendan a administrar y manipular bases de datos de forma eficiente, mediante el uso de operaciones e instrucciones específicas.",
    "link": "https://drive.google.com/file/d/1u2NOWSYPDAbEDa6EQSZSUxz5eBrePW5m/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/mysql_infop.png",
    "order_index": 1,
    "created_at": "2025-10-26T17:53:33.611087+00:00",
    "is_active": true
  },
  {
    "id": 3,
    "title": "Python Essentials 1",
    "academy": "Cisco Networking Academy",
    "description": "Formación en programación con Python 3, centrada en el desarrollo de scripts funcionales, pensamiento algorítmico y uso eficiente de la Biblioteca Estándar.",
    "link": "https://drive.google.com/file/d/1gVbf2J_C_r_YoWW1_SUku6eL8CnUYu1O/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_cisco.png",
    "order_index": 3,
    "created_at": "2025-10-26T17:53:33.611087+00:00",
    "is_active": true
  },
  {
    "id": 4,
    "title": "Web Apis en Net Core",
    "academy": "Udemy",
    "description": "Curso especializado en la construcción de soluciones backend mediante Web APIs en ASP.NET Core 9, aplicando metodologías de Clean Architecture y el patrón CQRS. Abarca el uso de tecnologías y librerías clave como Entity Framework, LINQ, Identity Core, JWT, FluentValidation y MediatR",
    "link": "https://drive.google.com/file/d/1gQQT8nlrsNGIYoIkBUboep938hkd9p5T/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/apis_udemy.png",
    "order_index": 4,
    "created_at": "2025-10-26T17:53:33.611087+00:00",
    "is_active": true
  },
  {
    "id": 6,
    "title": "JavaScript Essentials 1",
    "academy": "Cisco Networking Academy",
    "description": "Los asalariados conocen la sintaxis del núcleo de JavaScript; puede trabajar con variables, operadores, control de flujo y funciones; conocer los conceptos básicos del sistema de tipos de datos; pensar algorítmicamente y puede analizar problemas utilizando un aparato conceptual programático; y puede diseñar, desarrollar y mejorar programas JavaScript simples.",
    "link": "https://drive.google.com/file/d/1v6IgWC8JyjMlI4tGxnwVt5kWsjn2GpeY/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/javascript.png",
    "order_index": 2,
    "created_at": "2025-11-04T06:01:56+00:00",
    "is_active": true
  },
  {
    "id": 2,
    "title": "Programar en Python",
    "academy": "INFOP",
    "description": "Introduce a uno de los lenguajes de programación más versátiles y demandados en la actualidad. Aprenderás a dominar su sintaxis y a aplicar las buenas prácticas de la industria para resolver problemas de manera eficiente.",
    "link": "https://drive.google.com/file/d/1yz2eeH0q9SSnCYWRWUcAIoaxy_cDmd9B/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/python_infop.png",
    "order_index": 5,
    "created_at": "2025-10-26T17:53:33.611087+00:00",
    "is_active": true
  },
  {
    "id": 5,
    "title": "Reconocimiento de excelencia académica",
    "academy": "UNAH",
    "description": "Reconocimiento emitido por la Universidad Nacional Autónoma de Honduras a lo estudiantes con un índice destacado en la facultad de ingeniería.",
    "link": "https://drive.google.com/file/d/12OFaPzHzpX0RTNkVsRQfycLv_FFXFgHe/view?usp=sharing",
    "image": "https://ucdtitavxeziqrjktxie.supabase.co/storage/v1/object/public/images-portfolio/certifications/excelencia.png",
    "order_index": 6,
    "created_at": "2025-10-26T17:53:33.611087+00:00",
    "is_active": true
  }
]
```

---

