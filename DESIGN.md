---
name: "Portafolio de José González"
description: "Perfil profesional compacto, azul predeterminado y temas claro/oscuro, con trabajo y aprendizaje reales."
colors:
  badge-canvas: "#fff"
  page: "#0b1220"
  panel: "#101a2b"
  sidebar: "#0e1828"
  raised: "#1c2b41"
  border: "#2b3d58"
  text: "#f0f3f5"
  muted: "#b0b9c5"
  subtle: "#949eac"
  accent: "#96caff"
  accent-ink: "#10233d"
  accent-hover: "#c4e0ff"
  nav-active: "#1e3553"
  nav-hover: "#1d2e45"
  cover: "#1d3654"
  project: "#152238"
  book: "#142137"
  tag-border: "#3c506c"
  tag-text: "#b3becb"
  filter-selected: "#2a333e"
  filter-selected-text: "#e9f0f5"
typography:
  credential-metadata:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.65
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(25px, 2.4vw, 30px)"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "17px"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "14px"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "12px"
    fontWeight: 750
    lineHeight: 1.65
rounded:
  tag: "5px"
  control: "8px"
  card: "12px"
  rail: "14px"
  panel: "16px"
spacing:
  grid-unit: "8px"
  card-gap: "14px"
  mobile-margin: "16px"
  gutter: "24px"
  panel-inset: "28px"
  workspace-inset: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
  nav-active:
    backgroundColor: "{colors.nav-active}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "10px 12px"
  tag:
    textColor: "{colors.tag-text}"
    rounded: "{rounded.tag}"
    padding: "2px 7px"
  project-card:
    backgroundColor: "{colors.project}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
  book-card:
    backgroundColor: "{colors.book}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "15px"
---

# Design System: Portafolio de José González

## Overview

**Creative North Star: "Un perfil de trabajo propio"**

Un portafolio que se recorre como un perfil de desarrollador: identidad clara, navegación persistente y contenido profesional compacto. Azul, acentos coherentes con cada tema y una portada de arquitectura cloud construyen una identidad personal; los proyectos y las lecturas aportan color mediante sus imágenes originales.

Este documento captura la implementación del 23 de octubre de 2026. Todos los valores normativos son decisiones de este portafolio, extraídas de `src/styles.css` y sus plantillas. La referencia daily.dev inspira la composición; no se copian su identidad ni sus datos. La evidencia medida en `.artifacts/daily-reference.json` registra una pila que comienza con Helvetica Neue y superficies oscuras; Montserrat, la menta y las dimensiones siguientes son elecciones propias. Las capturas `profile-desktop.png` y `profile-mobile.png` de `.artifacts/` corroboran el resultado.

**Key Characteristics:**

- Densidad de perfil, con listas y divisores finos.
- Contraste por superficies y jerarquía tipográfica.
- Acento de cada tema reservado a acciones, estados y pequeños detalles de identidad.
- Contenido real, español/inglés y controles semánticos.

## Colors

### Temas seleccionables

Acentos: carbón menta `#a6e3cb`, azul celeste `#96caff`, morado lavanda `#ceb5fa` y claro con azul `#245ca8`. Botones, enlaces, selección, foco, progreso, avatar y letras de empresa consumen variables semánticas del tema. Los tokens Tailwind primary también se vinculan a esas variables; no introducir valores de acento fijos en componentes.

El selector «Apariencia» vive al pie de la navegación; en móvil aparece dentro del menú. Cada tema define su propio acento, contraste, hover, foco y avatar, además de fondos, paneles, bordes, portada y tarjetas mediante `html[data-theme]`. La preferencia se conserva en `localStorage` bajo `portfolio-bg-color`, reutilizando los identificadores anteriores.

| Tema | Identificador | Fondo | Panel | Acento |
|---|---|---|---|---|
| Azul oscuro (predeterminado) | `navy` | `#0b1220` | `#101a2b` | `#96caff` |
| Morado oscuro | `purple` | `#14101e` | `#1b1528` | `#ceb5fa` |
| Carbón | `black` | `#101318` | `#11161c` | `#a6e3cb` |
| Claro | `light` | `#f2f5fa` | `#ffffff` | `#245ca8` |

Montserrat sustituye a Manrope como prueba solicitada por el usuario. Los tokens del frontmatter describen el tema azul predeterminado; las variantes completas están en `src/styles.css` y en la extensión `themes` del sidecar.

### Primary

El **celeste del tema azul** (`accent`) identifica la acción de contacto, enlaces destacados, navegación activa, progreso y foco. `accent-ink` mantiene legibilidad sobre la acción sólida; `accent-hover` expresa su respuesta al puntero. `nav-active` permite señalar ubicación sin convertir toda la fila en un bloque brillante.

### Neutral

El **azul nocturno base** (`page`) sostiene la página. `panel` agrupa perfil y contexto; `sidebar` separa la navegación; `raised` destaca controles secundarios. `border` delimita secciones y superficies. `text`, `muted` y `subtle` organizan títulos, descripciones y metadatos, respectivamente. Los fondos `project` y `book` distinguen tarjetas sin introducir sombras.

La portada cambia con la apariencia: azul usa `/covers/cloud-architecture-corporate.png`; carbón con acento verde usa `/covers/agent-architecture-corporate-green.png`, una arquitectura de agentes inspirada en la referencia aportada; morado usa `/covers/event-architecture-corporate-purple.png`, un diagrama orientado a eventos con componentes nombrados, consumidores, cola de errores y observabilidad; claro usa el SVG animado de la propuesta 3 (Web Animations API): Code, Tests, Build, Artifact, Deploy, Monitor y Feedback, con etiquetas siempre en inglés. La imagen `/covers/cloud-architecture-light.png` se conserva como referencia estática del laboratorio. Las cuatro miden 851 × 315 y mantienen su proporción completa en escritorio y móvil. El servicio `Appearance` comparte el tema entre selector y portada y restaura la preferencia guardada. Las imágenes y marcas tecnológicas conservan sus colores; sus colores no se convierten en nuevos acentos globales.

**The Accent Has a Job Rule.** Cada uso del acento debe identificar una acción, un estado o una firma de identidad; no rellenar espacio.

## Typography

**Display Font:** Montserrat, con respaldo sans-serif. **Body Font:** la misma familia. Los iconos Material Symbols Outlined no sustituyen etiquetas; las marcas tecnológicas usan los SVG existentes.

La familia única mantiene continuidad entre identidad y datos. La jerarquía combina títulos compactos con texto abierto, sin grandes titulares publicitarios. Los roles y valores normativos figuran en el frontmatter.

- **Display:** nombre del perfil; tamaño fluido.
- **Headline:** encabezados de sección.
- **Title:** proyectos, experiencia y bloques de contenido.
- **Body:** lectura general. La presentación personal amplía el interlineado a (1.85) y limita la línea a (72ch).
- **Label:** acción principal; navegación y metadatos tienen ajustes locales de (10–13px). No escalar todos los textos pequeños al tamaño del cuerpo: preservar su función y contraste.

## Layout

En escritorio, la barra fija ocupa (222px). El espacio de trabajo tiene márgenes interiores de (32px); el contenido se limita a (1320px), dentro de un espacio de trabajo máximo de (1620px). La cuadrícula del perfil combina una columna flexible y una columna contextual de (282px), separadas por (22px). La cabecera de ruta mide (76px).

El perfil agrupa sus secciones en una superficie continua: interiores de (28px), separadores y bloques verticales de (27px). Proyectos y libros usan dos columnas y el espacio `card-gap`; las tecnologías usan tres columnas. La biblioteca puede vivir bajo el perfil o en `/lecturas`.

| Condición CSS | Adaptación implementada |
| --- | --- |
| Desde 1840px | Centrar el espacio de trabajo y reservar la barra mediante padding. |
| Hasta 1200px | Barra de 198px, contexto de 248px, separación de 18px, interiores de 24px; tecnologías en dos columnas y libros en una. |
| Hasta 1050px | Contexto debajo del perfil, en dos columnas; tecnologías vuelven a tres. |
| Hasta 760px | Barra superior sticky de 64px y menú desplegable; margen exterior móvil; ocultar columna contextual; anclas con margen de 80px. |
| Hasta 480px | Proyectos en una columna; tecnologías en dos; controles principales con altura mínima de 44px. |

Son condiciones inclusivas tal como aparecen en CSS; no reinterpretarlas como un conjunto genérico de breakpoints de framework.

## Elevation & Depth

No se usan sombras, vidrio ni halos en las superficies actuales. La profundidad procede de diferencias tonales, bordes de (1px), agrupación y superposición del monograma sobre la portada. El foco tiene contorno del acento de (2px) y separación de (4px); debe permanecer visible sobre cualquier superficie.

**The Tonal Depth Rule.** Separar contenido con tono y borde antes de introducir efectos de elevación.

## Shapes

Las superficies son rectángulos suavizados: `panel` para el perfil, `rail` para contexto y `card` para proyectos y libros. Controles y etiquetas usan radios menores según el frontmatter. Los círculos pequeños comunican estado; no son métricas sociales.

La firma combina diagonales, círculos concéntricos y símbolos de código en SVG. El monograma JG ocupa (94px) con radio de (25px), borde del color del panel de (6px) y superposición de (37px); en móvil pasa a (84px) y radio de (23px). Es una inicial diseñada, no una fotografía.

## Components

### Credenciales y Biblioteca

La sección «Credenciales» presenta las ocho badges aportadas por el usuario y filtros por Google Skills/Microsoft Learn. Las imágenes originales permanecen en public/badges; BadgeArtwork aplica un encuadre CSS medido por imagen dentro de un contenedor de proporción 1.1. No se estiran, regeneran ni modifican las credenciales. La galería usa tres columnas, dos a partir de 650px y una bajo 360px. Las tarjetas enlazan a la imagen original; no son enlaces de verificación oficial. La columna lateral muestra cuatro destacadas en dos columnas y un enlace al conjunto. La sección antes llamada Lecturas ahora se presenta como Biblioteca/Library, conservando /lecturas y #lecturas.


### Buttons

Compactos, con texto y un icono opcional. La acción principal es sólida; el botón secundario usa superficie elevada y borde. Su altura mínima es (40px), ampliada a (44px) hasta 480px. Los enlaces de texto siguen siendo enlaces; las acciones de filtro siguen siendo botones.

Color, fondo y borde transicionan en (160ms ease). El foco aplica el contorno global. No se implementan desplazamientos ni escalado al pasar el puntero. `prefers-reduced-motion: reduce` elimina transiciones y desplazamiento suave.

### Chips and filters

Las etiquetas son informativas: borde fino, tipografía de (10px) y relleno compacto. Los filtros son botones independientes con `aria-pressed`, fondo seleccionado `filter-selected` y texto `filter-selected-text`. Su altura pasa de (36px) a (44px) en móvil hasta 760px. No usar color como única señal de selección.

### Cards / Containers

Proyectos: vista previa a color en una franja compacta de altura `clamp(128px, 11vw, 176px)`, imagen completa con `object-fit: contain` y relleno de 8px; contenido flexible, etiquetas al final y acciones separadas por borde. Su interior es de (15px), con ajustes responsive existentes. Libros: portada vertical, título, autor, descripción y progreso nativo de (4px) acompañado por porcentaje y páginas cuando existen. No aplicar desaturación a capturas o portadas.

### Navigation

Filas con icono y etiqueta, altura mínima de (44px), texto de (13px) y estado actual comunicado también con `aria-current`. El hover aclara superficie y texto. En móvil el botón expone `aria-expanded` y `aria-controls`; el menú se despliega bajo la barra y cierra al navegar. Conservar cambio de idioma y enlace para saltar al contenido.

### Details and counts

Experiencia y tecnologías usan `details`/`summary`: expansión nativa, foco visible y contenido accesible por teclado. La flecha gira al abrir donde se muestra. Los contadores derivan de los datos y resultados filtrados. Los estados vacíos y de carga usan la misma paleta, con mensajes traducidos. No existe un patrón de campo de texto en esta superficie; documentarlo cuando se implemente uno.

## Do's and Don'ts

### Do:

- **Do** reutilizar Montserrat, superficies del tema y acentos funcionales.
- **Do** conservar imágenes a color, contenido real y monograma JG.
- **Do** mantener foco visible, etiquetas accesibles y equivalencia español/inglés.
- **Do** verificar anclas, filtros y expansión por teclado en escritorio y móvil.

### Don't:

- **Don't** copiar datos, fotografía o métricas sociales del perfil de referencia.
- **Don't** añadir partículas, halos, vidrio ni desaturación de imágenes.
- **Don't** convertir cada entrada de experiencia o credencial en una tarjeta elevada.
- **Don't** tratar los valores medidos de daily.dev como tokens de este portafolio.

El selector presenta azul, morado, carbón y claro, en ese orden. El tema claro declara `color-scheme: light` y remapea también texto, metadatos, etiquetas y selección. Las preferencias antiguas `burgundy` o inválidas se migran a `navy`; las preferencias vigentes se respetan.

## Laboratorio de portadas animadas

La ruta `/laboratorio/portadas` permite comparar tres interpretaciones CI/CD antes de elegir la portada final. Conserva Montserrat y los tokens del tema en el comparador; el lienzo vectorial claro es parte de la propuesta para el tema blanco, con fondo #f5f8fd, nodos blancos, texto #17345e y acento #245ca8. El encabezado del laboratorio usa 24–36px, como una superficie de comparación independiente.

Las variantes son Secuencia esencial (CSS), Pruebas en paralelo (GSAP/MotionPath) y Ciclo de entrega (Web Animations API). Los SVG usan viewBox 851 × 315 y etiquetas ES/EN. El flujo se comunica con indicadores sobre las conexiones y activación temporal de etapas. Se mantienen visibles los nodos en el estado estático. No se representan ejecuciones ni métricas reales.

Hay selección por botones, pausa, reinicio y ampliación horizontal contenida para móvil. La animación se detiene fuera del viewport, al ocultar la pestaña o al solicitar reducción de movimiento. El comparador no cambia la portada del perfil; es una ruta lazy y noindex. GSAP solo se descarga al elegir su variante. La paleta del lienzo se mantiene igual entre propuestas para comparar diseño y movimiento.

El comparador respeta inicialmente la reducción de movimiento del dispositivo, pero permite reproducir o reiniciar voluntariamente la vista previa. Una opción vuelve a la preferencia del dispositivo; la excepción se limita al SVG y dura solo durante la visita.

La portada clara incluye un control traducido de pausa/reproducción. En móvil el control se coloca bajo el SVG para conservar las etiquetas despejadas. El SVG mantiene viewBox 851 × 315; el contenedor móvil incluye además el espacio del control. Se respeta inicialmente la reducción de movimiento, con activación voluntaria mediante Reproducir. Los otros temas conservan sus imágenes.

Las portadas cloud azul, eventos morada y agentes verde se regeneraron siguiendo la imagen CI/CD corporativa: fondo blanco/gris, módulos blancos, bordes finos, texto oscuro y color reservado a conectores, iconos y pequeños matices. Sustituyen los fondos completamente teñidos; las variantes anteriores permanecen archivadas en Ideas/portadas. La portada clara animada seleccionada no cambia.

Las portadas raster corporativas se sirven ahora con srcset: WebP de 851 y 2061px de ancho, elegidos por tamaño y densidad de pantalla. Se reutilizan los originales de 2061 × 763 sin ampliación artificial. WebP a calidad 94; PNG previos preservados como respaldo. Las copias grandes pesan aproximadamente 83–106KB, frente a 227–242KB de los PNG anteriores de 851px. La proporción visible continúa siendo 851/315.

## Flujos sobre las portadas originales

Las portadas azul, morada y verde usan ArchitectureCover: una copia exacta del WebP responsive original como base y una capa SVG transparente con mensajes y contornos de activación. No se redibujan ni sustituyen las ilustraciones aprobadas. Rutas y perímetros se midieron en coordenadas 851 × 315 para mantener el alineamiento al cambiar tamaño o densidad.

Las copias viven en public/covers/animated/{cloud,events,agents}-{small,large}.webp; los originales se conservan. Los controles Ver original / Ver flujo permiten compararlas dentro de la misma portada. Pausa y reproducción se aplican al motor nativo; hay opt-in cuando el dispositivo reduce movimiento. La animación espera a que se cargue la imagen correspondiente, se suspende fuera de pantalla o pestaña oculta y se cancela al cambiar de tema o mostrar el original. No descarga GSAP. El tema claro conserva su CI/CD vectorial.

Los controles se agrupan debajo de la ilustración para evitar tapar módulos o etiquetas, también en escritorio. Se mantienen textos e iconos en inglés dentro de las imágenes; los controles siguen el idioma de la interfaz.

La portada del perfil reproduce automáticamente el flujo sin controles. En escritorio su altura es clamp(160px, 28vh, 280px); el arte completo conserva su proporción y se centra sin recortes. Los originales se conservan localmente e ignoran en Git; las copias de public/covers/animated siguen siendo parte de la aplicación.

Los proyectos se exploran en una única fila horizontal con scroll snap nativo, tarjetas de hasta 330 px y un fragmento de la siguiente visible cuando hay espacio. Filtros por tecnología y flechas de 44 px comparten la cabecera; al filtrar se vuelve al inicio. Las descripciones se conservan completas y la vista previa de 144 px aparece tras las tecnologías. No hay avance automático. Teclado, scroll táctil y enfoque de enlaces permiten recorrer la colección.
