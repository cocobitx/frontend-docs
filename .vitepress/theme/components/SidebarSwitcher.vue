<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vitepress'

const router = useRouter()
const route = useRoute()

/* estado */
const open = ref(false)
const currentKey = ref(null)
const dropdownRef = ref(null)

/* secciones (NO páginas) */
const options = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: `<svg stroke="#1d5dff" width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 22L17 22" stroke="#1d5dff"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="#1d5dff"  />
          <path d="M9 10.5L11 12.5L15 8.5" stroke="#1d5dff"   stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    base: '/frontend/',
    redirect: '/frontend/entorno-trabajo'
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1d5dff" class="bi bi-database" viewBox="0 0 16 16">
        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
      </svg>`,
    base: '/backend/',
    redirect: '/backend/intro'
  }
]

/* opción activa */
const current = computed(() =>
  options.find(o => o.key === currentKey.value) ?? options[0]
)

/* sincronizar por ruta */
watch(
  () => route.path,
  (path) => {
    const match = options.find(o => path.startsWith(o.base))
    if (match) currentKey.value = match.key
  },
  { immediate: true }
)

/* toggle dropdown */
function toggle() {
  open.value = !open.value
}

/* seleccionar sección */
function select(option) {
  currentKey.value = option.key
  open.value = false
  router.go(option.redirect)
}

function handleClickOutside(e) {
  if (!dropdownRef.value) return
  if (!dropdownRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleClickOutside, true)
})

</script>

<template>
  <div ref="dropdownRef" class="sidebar-select">
    <!-- seleccionado -->
    <div class="selected" @click.stop="toggle">
      <span class="icon" v-html="current.icon"></span>
      <span class="label">{{ current.label }}</span>
      <span class="caret">
        <svg width="18px" height="18px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </span>
    </div>

    <!-- dropdown -->
    <ul v-show="open" class="dropdown">
      <li
        v-for="opt in options"
        :key="opt.key"
        :class="{ active: opt.key === currentKey }"
        @click="select(opt)"
      >
        <span class="icon" v-html="opt.icon"></span>
        <span class="label">{{ opt.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar-select {
  margin-top: 10px;
  position: relative;
}

.sidebar-select .selected {
  background-color: white;
  padding: 6px 8px;
  border: 1px solid #e2e2e2;
  border-radius: 9px;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 8px;
  cursor: pointer;
}

.sidebar-select .selected:hover{
  border-color: var(--vp-c-brand-1);
}

.sidebar-select .icon {
  padding: 4px;
  border-radius: 7px;
  color: white!important;
  border: 1px solid #e2e2e2;
}

.caret {
  margin-left: auto;
  opacity: 0.6;
}

.dropdown {
  margin-top: 6px;
  background: white;
  border-radius: 9px;
  padding: 4px;
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1);
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
}

.dropdown li {
  transition: all 0.2s;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 8px;
  padding: 6px;
  cursor: pointer;
  border-radius: 6px;
}

.dropdown li:hover {
  background-color: #f3f3f3;
}

.dropdown li.active {
  color: #1d5dff!important;
}

</style>
