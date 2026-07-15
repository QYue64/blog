<script setup lang="ts">
import { getSiteBrand } from '../composables/site'

const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const siteBrand = computed(() => getSiteBrand(route.path))

const closeMenu = async (restoreFocus = true) => {
  menuOpen.value = false
  if (restoreFocus) {
    await nextTick()
    menuButton.value?.focus()
  }
}

watch(() => route.fullPath, () => closeMenu(false))
watch(menuOpen, (open) => {
  if (import.meta.client) {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})
</script>

<template>
  <header class="app-header">
    <NuxtLink
      class="app-header__brand specimen-mono"
      to="/"
    >
      {{ siteBrand }}
    </NuxtLink>

    <div class="app-header__actions">
      <div class="app-header__desktop-nav">
        <MainNav />
      </div>

      <button
        ref="menuButton"
        class="app-header__menu-button specimen-mono"
        type="button"
        aria-controls="site-menu"
        aria-label="打开站点菜单"
        :aria-expanded="menuOpen"
        @click="menuOpen = true"
      >
        <span>菜单</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </div>

    <AppMobileMenu
      :open="menuOpen"
      @close="closeMenu"
    />
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  z-index: 40;
  display: flex;
  width: min(100% - 2.5rem, 90rem);
  min-height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  border-bottom: 1px solid var(--specimen-ink);
}

.app-header__brand {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  font-size: .84rem;
  font-weight: 800;
  text-decoration: none;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2.35rem);
}

.app-header__menu-button {
  display: inline-flex;
  min-width: 44px;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: .65rem;
  border: 0;
  background: transparent;
  font-size: .75rem;
  font-weight: 700;
}

.app-header__menu-button svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-width: 1.8;
}

@media (max-width: 48rem) {
  .app-header {
    width: min(100% - 2rem, 90rem);
  }

  .app-header__desktop-nav {
    display: none;
  }

}
</style>
