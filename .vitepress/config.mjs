import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Softdocs",
  description: "guía práctica sobre tecnologías de frontend, estructura de carpetas, arquitectura y buenas prácticas de desarrollo",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo_v2.png' }],
    ['script', {}, `
      localStorage.setItem('vitepress-theme-appearance', 'light');
    `]
  ],
  appearance: false,
  themeConfig: {
    logo: '/logo_v2.png',
    search: {
      provider: 'local',
      options: {
        placeholder: 'Buscar documentación'
      }
    },
    colorMode: 'light',
    outlineTitle: 'En esta página',
    outline: [3, 4],
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página'
    },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/frontend/entorno-trabajo' },
    ],
    sidebar: {
      '/frontend/': [
        {
          text: 'Menu...',
          items: [
            { text: 'Entorno de trabajo', link: '/frontend/entorno-trabajo' },
            { text: 'Tipos de aplicaciones', link: '/frontend/tipo-aplicacion' },
            { text: 'Arquitectura modular', link: '/frontend/arquitectura-modular' },
            { text: 'Estructura de carpetas', link: '/frontend/estructura-carpeta' },
            { text: 'Practicas de SEO', link: '/frontend/seo' },
            { 
              text: 'Estructura del documento', 
              collapsible: true,
              collapsed: false,
              items: [
                { text: 'Definir idioma', link: '/frontend/document/definir-idioma' },
                { text: 'Metadatos', link: '/frontend/document/metadatos' },
                { text: 'Orden del encabezado', link: '/frontend/document/orden-encabezado' },
              ]
            }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Menu...',
          items: [
            { text: 'intro', link: '/backend/intro' },
          ]
        }
      ]
    }
    // sidebar: [
    //   {
    //     text: 'Menu',
    //     items: [
    //       { text: 'Entorno de trabajo', link: '/entorno-trabajo' },
    //       { text: 'Tipos de aplicaciones', link: '/tipo-aplicacion' },
    //       { text: 'Arquitectura modular', link: '/arquitectura-modular' },
    //       { text: 'Estructura de carpetas', link: '/estructura-carpeta' },
    //       { text: 'Practicas de SEO', link: '/seo' },
    //       { 
    //         text: 'Estructura del documento', 
    //         collapsible: true,
    //         collapsed: false,
    //         items: [
    //           { text: 'Definir idioma', link: '/document/definir-idioma' },
    //           { text: 'Metadatos', link: '/document/metadatos' },
    //           { text: 'Orden del encabezado', link: '/document/orden-encabezado' },
    //         ]
    //       },
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/cocobitx' }
    // ]
  }
})
