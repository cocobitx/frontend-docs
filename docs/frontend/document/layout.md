# Elementos de layout

Es importante saber estructurar nuestro contenido html a nivel semantico, utilizando etiquetas semánticas adecuadas para mejorar la accesibilidad y la legibilidad del código.

## Etiquetas semánticas

Algunas de las etiquetas semánticas más comunes son:

- `<header>`: Define el encabezado de una página o sección.
- `<nav>`: Define una barra de navegación.
- `<main>`: Define el contenido principal de una página.
- `<section>`: Define una sección de contenido.
- `<article>`: Define un artículo autónomo.
- `<aside>`: Define contenido secundario relacionado con el contenido principal.
- `<footer>`: Define el pie de página de una página o sección.

#### `<header>`
representa el encabezado introductorio de un contenido, puede existir a nivel de página completa o dentro de secciones específicas.

```html:line-numbers
<section>
  <header>
    <h1>Plataforma de Hoteles</h1>
    <p>Encuentra el alojamiento ideal para tu viaje</p>
  </header>
  ...
<section>
```

```html:line-numbers
<body>
  <header>
    <nav>
      ...
    </nav>
  </header>
  ...
</body>
```
###### Buenas prácticas

- Usar `<header>` para introducir el contenido que sigue.
- Incluir encabezados (h1–h6) de forma jerárquica.
- Permitir múltiples `<header>` en una página si pertenecen a distintos bloques.
- Mantenerlo semántico, no solo visual.

###### Malas prácticas

- Usar `<header>` como contenedor genérico sin significado.
- Colocar contenido que no introduce nada (por ejemplo, solo un div vacío).
- Usar `<header>` como reemplazo de `<section>` o `<article>`.
- Incluir información que no corresponde al bloque que encabeza.

::: details Recomendación
`<header>` no es el encabezado visual, es el encabezado semántico del contenido al que pertenece. puede estar contenido únicamente en los siguientes elementos semánticos:
- `<body>`
- `<section>`
- `<article>`
- `<aside>`
- `<nav>`
:::

#### `<section>`

representa una sección temática de contenido dentro de una página. Se usa para agrupar contenido relacionado que comparte un mismo propósito o tema y que, normalmente, puede identificarse con un encabezado.

La etiqueta `<section>` introduce un tema, tiene su propio encabezado y puede existir de forma independiente dentro de una página.

```html:line-numbers
<section>
  <header>
    <h2>Artículo del curso</h2>
  </header> <-- Introduccion del contenido -->
  
  <p>Contenido principal del artículo.</p>

  <footer>
    <p>Autor: Sarah smith</p>
  </footer> <-- cierre del contenido -->
</section>
```

###### Buenas prácticas

- Usar `<section>` solo cuando el contenido tenga una relación temática clara.
- Incluir un encabezado (`<h1>`–`<h6>`) que describa la sección.
- Pensar cada `<section>` como una unidad lógica de contenido.
- Facilitar la accesibilidad y semántica del documento.

###### Malas prácticas

- Usar `<section>` solo para dar estilo visual.
- Crear `<section>` sin un tema definido ni encabezado.
- Anidar `<section>` innecesariamente sin justificación semántica.
- Reemplazar cualquier contenedor genérico por `<section>` sin criterio.

#### `<article>`

representa un artículo autónomo dentro de una página. Se usa para agrupar contenido relacionado que comparte un mismo propósito o tema y que, normalmente, puede identificarse con un encabezado.

La etiqueta `<article>` introduce un tema, tiene su propio encabezado y puede existir de forma independiente dentro de una página.

#### `<aside>`

representa contenido secundario relacionado con el contenido principal dentro de una página. Se usa para agrupar contenido relacionado que comparte un mismo propósito o tema y que, normalmente, puede identificarse con un encabezado.

La etiqueta `<aside>` introduce un tema, tiene su propio encabezado y puede existir de forma independiente dentro de una página.

#### `<footer>`

representa el pie de página de una página o sección dentro de una página. Se usa para agrupar contenido relacionado que comparte un mismo propósito o tema y que, normalmente, puede identificarse con un encabezado.

La etiqueta `<footer>` introduce un tema, tiene su propio encabezado y puede existir de forma independiente dentro de una página.
