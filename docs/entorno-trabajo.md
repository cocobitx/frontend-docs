# Entorno de trabajo
Las siguientes tecnologías han sido seleccionadas en función de criterios técnicos, priorizando estabilidad, seguridad, escalabilidad y eficiencia en el desarrollo.

---

### Sistema operativo
- **Linux**: Se utiliza Linux por su estabilidad, seguridad y bajo consumo de recursos. Proporciona mayor control del entorno, mejor integración con herramientas de desarrollo y un flujo de trabajo eficiente para proyectos modernos.

### Editor de codigo
Debido al alto consumo de recursos asociado a funcionalidades de inteligencia artificial, telemetrías y a la presencia de vulnerabilidades en muchas extensiones de editores populares, se ha decidido utilizar:
- **Zed (Open source)**: Desarrollado por el equipo original de Atom y creado en Rust, lo que reduce significativamente el impacto de vulnerabilidades en comparación con editores como VS Code, que dependen de Node.js.  Zed cuenta con un ecosistema de extensiones limitado pero suficiente, lo que permite programar en múltiples lenguajes manteniendo un entorno más seguro y liviano.

### Aplicaciones
- **Figma**: Herramienta ideal para crear el diseño de la interfaz de usuario, la cual constituye el punto de partida antes de iniciar el desarrollo.
- **Postman (opcional)**: Permite enviar solicitudes HTTP al servidor. En aplicaciones de gran tamaño, resulta conveniente realizar pruebas mediante una única petición externa en lugar de hacerlo directamente desde el entorno de desarrollo, lo que facilita la validación de respuestas y optimiza el uso de recursos.

### Documentación
La documentación es una parte fundamental del desarrollo, ya que ayuda a evitar confusiones dentro del equipo.Se adopta una documentación de tipo diccionario, donde se describe cada parte del código, como componentes, rutas, módulos, entre otros.

Cada documentación debe existir de forma independiente al proyecto principal. Para ello se utilizan las siguientes tecnologías:
- **Vitepress**: Documentación técnica del código
- **Storybook**: Documentación de componentes de interfaz (UI)

### Control de versiones
- **Git**: Control y gestión de versiones
- **Gitlab/Github**: Repositorio y plataforma de almacenamiento en la nube

### Runtime
- **NodeJS (v22.21.1)**: Se utiliza como entorno de ejecución para aplicaciones y herramientas de desarrollo basadas en JavaScript, garantizando compatibilidad con el ecosistema moderno, ejecución eficiente y soporte para flujos de trabajo frontend y backend.

### Gestor de dependencias
- **npm**

### Frameworks a usar
Las siguientes tecnologías permiten crear aplicaciones del lado del cliente para distintos entornos, sin restricciones de plataforma, priorizando rendimiento, escalabilidad y mantenibilidad.
- **Astro**: Generador de sitios estáticos y framework de renderizado enfocado en el rendimiento. Su responsabilidad principal es la entrega eficiente de contenido, minimizando la carga de JavaScript en el cliente.
- **NuxtJS**: Framework de alto nivel basado en Vue.js, orientado a la creación de aplicaciones web modernas con mejor rendimiento, SEO optimizado y una arquitectura más robusta en comparación con una SPA tradicional.
- **Vue3**: Framework progresivo que permite desarrollar aplicaciones web de forma flexible utilizando JavaScript o TypeScript. No requiere dependencias externas obligatorias, lo que lo convierte en una opción ideal para construir interfaces modernas y escalables.
- **Tauri**: Framework para el desarrollo de aplicaciones de escritorio utilizando tecnologías web (HTML, CSS y JavaScript). Ofrece un bajo nivel de configuración y compatibilidad multiplataforma (Windows, macOS y Linux).
- **Ionic**: Framework orientado al desarrollo de aplicaciones móviles multiplataforma (Android e iOS) mediante tecnologías web como HTML, CSS y JavaScript/TypeScript..

::: info
Se evaluara para emigrar de runtime y gestor de depencias a Bun y pnpm a
medida que se desarrolla los micro proyectos personales, se podra en prueba
la compatibilidad y el impacto en grandes proyectos.

NodeJS+npm -->  Bun+pnpm 
:::



