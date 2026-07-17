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
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path d="M16 1.5 19.6 12 30.5 16l-10.9 4L16 30.5 12.4 20 1.5 16l10.9-4L16 1.5Z" />
      </svg>
      <span>{{ siteBrand }}</span>
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
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  min-height: 5.25rem;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  border-bottom: 1px solid rgb(23 23 43 / 72%);
}

.app-header__brand {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: .75rem;
  font-size: .96rem;
  font-weight: 850;
  letter-spacing: -.015em;
  text-decoration: none;
}

.app-header__brand svg {
  width: 1.65rem;
  height: 1.65rem;
  fill: var(--specimen-violet);
  transition: transform 220ms ease;
}

.app-header__brand:hover svg {
  transform: rotate(45deg);
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2.35rem);
}

.app-header__menu-button {
  display: none;
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
    width: calc(100% - 2rem);
    min-height: 4.5rem;
  }

  .app-header__desktop-nav {
    display: none;
  }

  .app-header__menu-button {
    display: inline-flex;
  }

}
</style>
