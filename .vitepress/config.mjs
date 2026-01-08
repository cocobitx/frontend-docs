import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "frontend",
  description: "guía práctica sobre tecnologías de frontend, estructura de carpetas, arquitectura y buenas prácticas de desarrollo",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo_v2.png' }],
    ['script', {}, `
      localStorage.setItem('vitepress-theme-appearance', 'light');
    `]
  ],
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
    outline: [2, 3],
    docFooter: {
      prev: 'Página anterior',
      next: 'Siguiente página'
    },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Documentación', link: '/entorno-trabajo' },
      {
        text: 'Css3',
        items: [
          { text: 'Box shadow', link: 'https://box-shadow.dev/' },
          { text: 'Box shadow gradients', link: 'https://alvarotrigo.com/shadow-gradients/' },
          { text: 'clipath', link: 'https://bennettfeely.com/clippy/' },
          { text: 'Buttons animations', link: 'https://www.cattocss.com/' },
          { text: 'Transitions style', link: 'https://www.transition.style' },
          { text: 'Loaders', link: 'https://cssloaders.github.io/' },
          { text: 'Animatiss', link: 'https://xsgames.co/animatiss/' },
          { text: 'AnimistaCss', link: 'https://animista.net/' },
          { text: 'HoverCss', link: 'https://ianlunn.github.io/Hover/' },
          { text: 'Components Css', link: 'https://uiverse.io/' },
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'AnimeJS', link: 'https://animejs.com/' },
          { text: 'Motion', link: 'https://motion.dev/' }
        ]
      },
      {
        text: 'Iconos',
        items: [
          { text: 'tabler', link: 'https://tabler-icons.io/' },
          { text: 'iconstack', link: 'https://iconstack.io/' },
        ]
      },
      {
        text: 'Recursos',
        items: [
          { text: 'devchallenge', link: 'https://devchallenges.io/' },
          { text: 'frontendmentor', link: 'https://www.frontendmentor.io/' },
          { text: 'collect ui', link: 'https://collectui.com/designs' },
          { text: 'devdocs', link: 'https://devdocs.io/' },
          { text: 'roadmap', link: 'https://roadmap.sh/frontend' },
          { text: 'code image', link: 'https://app.codeimage.dev' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Menu',
        items: [
          { text: 'Entorno de trabajo', link: '/entorno-trabajo' },
          { text: 'Niveles de aplicación', link: '/nivel-aplicacion' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cocobitx' }
    ]
  }
})
