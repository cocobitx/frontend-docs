# Estuctura de carpetas

### P/P Web Applications (Vue3)
::: code-group

```md [general]
🗂️ Scaffolding
├── 🗂️ cypress
├── 🗂️ node_modules
├── 🗂️ public
├── 🗂️ src
│   ├── 🗂️ assets
│   ├── 🗂️ core
│   ├── 🗂️ modules
│   ├── 🗂️ shared
│   ├── 🗂️ store
│   ├── env.js
│   └── main.js
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── cypress.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js


``` 

```md [core]
🗂️ core
├── 🗂️ bootstrap
│   ├── 🗂️ components
│   ├── App.vue
│   ├── app.router.js
│   └── app.test.js
├── 🗂️ guards
├── 🗂️ http
├── 🗂️ i18n
└── 🗂️ interceptos
``` 

```md [modules]
🗂️ modules
├── 🗂️ auth
│   ├── 🗂️ components
│   ├── 🗂️ composables
│   ├── 🗂️ submodules
│   ├── AuthLayout.vue
│   ├── auth.routes.js
│   └── auth.test.js
└──  🗂️ home
```

```md [shared]
🗂️ shared
├── 🗂️ components
├── 🗂️ composables
├── 🗂️ directives
└── 🗂️ utils
```
:::

#### Descripcion del contenido
Solo mencionare los puntos importantes de la estructura de carpetas, lo demas se identificara facilmente

##### core/
Esta carpeta es la principal de la aplicacion, es donde se define configuraciones globales y el despliegue de la app
- bootstrap: Inicio de la aplicacion
- guards: son protecciones de rutas, permite bloquear rutas que no esten autorizadas.
- http: configuracion fetch(..) para ser usado  y enviar peticiones como: http.get(url);  http.post(url, data); con esto evita la repeticion de codigo y lo vuelve mas legible y facil de usar en toda la app.
- i18n: Archivos de configuracion multilenguaje. cada archivo tendra su lenguaje y vocabulacion de cada frase/palabra, es, en ,jp...etc
- interceptores: Permite interceptar cada request y response, validar cada peticion antes de llegar al cliente, funciona como un protector antes de enviar al servidor y antes de recibir una respuesta el cliente. Puede validar tokens. agregar headers en cada peticion, errores. etc

![Interceptores](/interceptors.png)