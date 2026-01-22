# <span style="display: flex;"><img src="/check.png" style="width: 38px; height: 38px; margin-right:10px"> Metadatos y encabezado</span>

Los metadatos en HTML son información descriptiva del documento que no se muestra visualmente, pero que sirve para que navegadores, motores de búsqueda, redes sociales y otras herramientas entiendan cómo tratar el contenido. 

Estos van dentro de la etiqueta `<head>` y se define como `<meta>`

### Intercepcion (navegador)

Su función es indicar al navegador que el contenido del archivo HTML está codificado en UTF-8, lo que permite mostrar correctamente caracteres especiales como letras con tilde (á, é, í), la ñ, signos, y símbolos de distintos idiomas.

```html
<meta charset="UTF-8">
```

### Responsive 

Su función principal es permitir que el diseño se adapte correctamente a pantallas pequeñas, evitando que el navegador reduzca o escale el contenido de forma automática.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
### Informativo

Los metadatos informativos unicamente seran visibles para el desarrollador, esto no afecta el SEO, solo es informacion extra del documento.

```html
<meta name="copyright" content="Nombre 2026">
<meta name="designer" content="Nombre">
<meta name="publisher" content="Empresa">
```

### Seo (usado por google)
los metadatos de SEO sirven para describir y controlar cómo los motores de búsqueda interpretan la página.

```html
<meta name="description" content="descripcion del contenido">
<meta name="author" content="nombre">
<meta name="robots" content="index|noindex|follow|nofollow">
```
- description: Se usa en el snippet de resultados de búsqueda.
- robots: Indica a los buscadores qué pueden hacer con la página, su contenido puede ser `index`, `noindex`, `follow`, `nofollow`

### Seo Multilenguaje

Cuando un buscador (como Google) ya encontró tu página, necesita saber qué URL mostrarle a cada usuario. Gracias a hreflang, cuando alguien escribe en el buscador, Google elige automáticamente la versión correcta de tu página para mostrar en los resultados.

Tú le dices eso con estas etiquetas:

```html
<-- version princpal -->
<link rel="canonical" href="https://example.com/pagina">

<link rel="alternate" hreflang="fr" href="https:/example.com/fr">
<link rel="alternate" hreflang="en" href="https:/example.com/en">
```
Lo que Google guarda internamente es algo como:
- Esta página tiene la misma versión en frances → /fr/
- Esta página tiene la misma versión en inglés → /en/

esto no ocurre en tiempo real en tu web. Ocurre en el buscador, al decidir qué enlace mostrar en los resultados.

![Hreflang](/hreflang.png)



### Redes sociales (Open Graph)
es un protocolo que sirve para controlar cómo se muestra una página web cuando se comparte en redes sociales. <small>[visitar→](https://ogp.me/)</small>

```html
<meta property="og:title" content="Guía de HTML5">
<meta property="og:description" content="Aprende HTML5 moderno">
<meta property="og:image" content="https://site.com/preview-html5.png">
<meta property="og:url" content="https://site.com/html5-semantico">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Documentación Web Moderna">
```
![og](/og.png)

### seguridad / privacidad

Estos no son solo descriptivos, sino que instruyen al navegador sobre cómo comportarse para proteger al usuario, aunque es válido ponerlas en el HTML, lo ideal es configurarlas en las cabeceras HTTP de tu servidor.

```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```

- `X-Content-Type-Options: nosniff`: Esta etiqueta evita que el navegador intente "adivinar" el tipo de contenido de un archivo (MIME sniffing). Sin esto, un atacante podría subir un archivo de texto .txt que contiene código malicioso de JavaScript. Si el navegador "sniffea" el archivo y decide ejecutarlo como un script, el atacante logra un XSS.

- `X-Frame-Options: DENY`: Esta es la defensa principal contra el Clickjacking. Un atacante podría cargar tu sitio web dentro de un `<iframe>` invisible sobre una página maliciosa. El usuario cree que está haciendo clic en un botón de "Ganaste un premio", pero en realidad está haciendo clic en "Eliminar cuenta" o "Transferir dinero" dentro de tu sitio.

- `Referrer-Policy: strict-origin-when-cross-origin`: Controla cuánta información de la URL de origen se comparte cuando el usuario navega hacia otro sitio. Si tu URL contiene datos privados (ej. misitio.com/ajustes/usuario?token=123), al hacer clic en un enlace externo, ese sitio recibiría la URL completa en la cabecera Referer, robando el token.

### Aplicación / PWA

Estos le dicen al navegador que no estás en una "pestaña común", lo que afecta la privacidad visual 

```html
<meta name="theme-color" content="#0f172a">
<meta name="application-name" content="web html5">
```

- `theme-color`: Define el color de la barra de estado del sistema.
- `application-name`: Especifica el nombre que el sistema debe mostrar junto al icono en el escritorio o menú de aplicaciones.


### Orden de encabezado
El orden del encabezado con lleva a las mejores prácticas de SEO, accesibilidad y rendimiento.

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-Frame-Options" content="DENY">
  <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Título de la página</title>
  <meta name="description" content="Descripción clara">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://example.com">

  <link rel="alternate" hreflang="es" href="https://example.com/es">
  <link rel="alternate" hreflang="en" href="https://example.com/en">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Título">
  <meta property="og:description" content="Descripción">
  <meta property="og:image" content="https://example.com/img.jpg">
  <meta property="og:url" content="https://example.com">

  <script type="application/ld+json">
  { 
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Título de la página"
  }
  </script>

  <meta name="theme-color" content="#ffffff">
  <link rel="icon" href="/favicon.ico">

  <link rel="stylesheet" href="/css/main.css">
  <script src="/js/app.js" defer></script>
</head>
```