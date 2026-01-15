// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import SidebarSwitcher from './components/SidebarSwitcher.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarSwitcher)
    })
  },
  enhanceApp({ app, router, siteData }) {
    //
  }
}
