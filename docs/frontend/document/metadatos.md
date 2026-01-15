# Metadatos

Los metadatos en HTML son información descriptiva del documento que no se muestra visualmente, pero que sirve para que navegadores, motores de búsqueda, redes sociales y otras herramientas entiendan cómo tratar el contenido. 

Estos van dentro de la etiqueta `<head>` y se define como `<meta>`

#### Intercepcion (navegador)

```html
<meta charset="UTF-8">
```

#### Responsive 

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
#### Informativo

```html
<meta name="copyright" content="Nombre 2026">
<meta name="designer" content="Nombre">
<meta name="publisher" content="Empresa">
```

#### Seo (usado por google)

```html
<meta name="description" content="descripcion del contenido">
<meta name="author" content="nombre">
<meta name="robots" content="index|noindex|follow|nofollow">
```

#### Multilenguaje

```html
<link rel="canonical" href="https://example.com/pagina">
<link rel="alternate" hreflang="es" href="https:/example.com/es">
<link rel="alternate" hreflang="en" href="https:/example.com/en">
```

#### Redes sociales (Open Graph)
Unicamente para previsualizar el contenido y publicar. <small>[visitar→](https://ogp.me/)</small>
```html
<meta property="og:title" content="Guía de HTML5">
<meta property="og:description" content="Aprende HTML5 moderno">
<meta property="og:image" content="https://site.com/preview-html5.png">
<meta property="og:url" content="https://site.com/html5-semantico">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Documentación Web Moderna">
```
#### seguridad / privacidad

```html
<meta http-equiv="Content-Security-Policy"
      content="
        default-src 'self';
        script-src 'self';
        style-src 'self';
        img-src 'self' data:;
        font-src 'self';
        connect-src 'self';
        frame-ancestors 'none';
        base-uri 'self';
        form-action 'self';
      ">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
```
#### Aplicación / PWA

```html
<meta name="theme-color" content="#0f172a">
<meta name="application-name" content="Documentación Web Moderna">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```