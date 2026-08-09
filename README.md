# Portfolio Angular 19

Portafolio personal migrado de Astro a Angular 19, siguiendo la metodología **Spec-First** con documentación de decisiones arquitectónicas.

## Stack

- **Angular 19** — Standalone Components, Signals, Control Flow (`@if`, `@for`, `@defer`)
- **Vite + esbuild** — Compilación y HMR ultra-rápido
- **Tailwind CSS 4** — Estilos utility-first
- **TanStack Query** — Estado asíncrono con signals
- **pnpm** — Gestor de paquetes
- **Vitest** — Testing unitario

## Comandos

```bash
pnpm install        # Instalar dependencias
pnpm run dev        # Servidor de desarrollo (http://localhost:4200)
pnpm run build      # Build de producción
pnpm run test       # Ejecutar tests
pnpm run lint       # Linter
```

## Estructura

```
src/app/
├── core/              # Services, Guards, Interceptors (globales)
├── shared/            # Componentes, Directivas, Pipes reutilizables
├── features/          # Secciones del portafolio
│   ├── landing/       # Hero & Bento Grid
│   ├── experience/    # Línea de tiempo laboral
│   ├── projects/      # Galería de proyectos
│   ├── tech-stack/    # Mosaico de tecnologías
│   ├── certifications/
│   └── readings/      # Sección interactiva de lecturas
├── app.config.ts      # Proveedores globales
├── app.component.ts   # Componente raíz
└── app.routes.ts      # Definición de rutas
```

## Documentación del Proyecto

- **Decisiones arquitectónicas:** Ver `../decisions.md`
- **Especificaciones técnicas:** Ver `../specs/`
- **Diseños Stitch:** Ver `../DESING/`

## Generar Componentes

```bash
ng generate component component-name
ng generate --help    # Ver todos los schematics disponibles
```
