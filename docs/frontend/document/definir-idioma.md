# Definir idioma

En HTML5, es una buena práctica obligatoria para SEO y accesibilidad definir el idioma principal del documento mediante el atributo `lang` en la etiqueta `<html>`, Este atributo:

- Indica el idioma principal del contenido.
- Ayuda a los motores de búsqueda a indexar correctamente la página.
- Mejora la accesibilidad para lectores de pantalla y tecnologías asistivas.

Cada documento HTML debe tener un único idioma principal.


```html{2}:line-numbers {1}
<!DOCTYPE html>
<html lang="es">
  <head></head>
  <body></body>
</html>
``` 
### Contenido con múltiples idiomas dentro de una página
Si una página contiene fragmentos de texto en otros idiomas, no se debe cambiar el idioma del documento completo.
En su lugar, se utiliza el atributo `lang` en los elementos específicos que lo requieran.

```html{5,6}:line-numbers {1}
<!DOCTYPE html>
<html lang="es">
  <head></head>
  <body>
    <p lang="en">Hello</p>
    <p lang="fr">Bonjour</p>
  </body>
</html>
``` 
Esto permite a los buscadores y lectores de pantalla interpretar correctamente cada fragmento sin afectar el idioma principal del documento.

### Sitios web multilenguaje

En un sitio multilenguaje, el idioma del documento debe cambiar según el idioma activo de la página.
Existen dos enfoques comunes para lograrlo.

1. Cambio dinámico del atributo `lang`
Este método es frecuente en frameworks que renderizan contenido dinámico.

      ```html
      <html lang="{app.locale}">...</html>
      ``` 
      
      ::: details Consideraciones SEO
      Google procesa una página siguiendo estos pasos:
      
      Descarga el HTML inicial. -> Renderiza la página. -> Analiza el DOM final.
      :::
      
      Si durante el renderizado el atributo termina como `<html lang="es">...</html>` Google lo reconocerá correctamente solo si el HTML final se genera en el servidor.
      
      Cuando el idioma se cambia exclusivamente del lado del cliente (CSR), Google puede recibir un HTML inicial sin el idioma definido correctamente. Solución recomendada es usar SSR (Server-Side Rendering) para que el idioma llegue definido desde el HTML inicial.

2. Definición del idioma por URL
Este método requiere más mantenimiento y espacio en servidor, pero es el más sólido a nivel SEO.

    ```bash
    example.com/en/
    example.com/es/
    example.com/fr/
    ``` 

