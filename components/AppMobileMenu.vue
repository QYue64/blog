<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { externalLinks, siteNavigation } from '../composables/site'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const panel = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

watch(() => props.open, async (open) => {
  if (!open) { return }
  await nextTick()
  closeButton.value?.focus()
})

onKeyStroke('Escape', () => {
  if (props.open) { emit('close') }
})

const keepFocusInside = (event: KeyboardEvent) => {
  if (event.key !== 'Tab' || !panel.value) { return }
  const focusable = Array.from(panel.value.querySelectorAll<HTMLElement>('a, button'))
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="menu-fade">
      <div
        v-if="open"
        class="mobile-menu__backdrop"
        @click.self="emit('close')"
      >
        <aside
          id="site-menu"
          ref="panel"
          class="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="站点菜单"
          @keydown="keepFocusInside"
        >
          <div class="mobile-menu__header specimen-mono">
            <span>QYUE://MENU</span>
            <button
              ref="closeButton"
              type="button"
              aria-label="关闭站点菜单"
              @click="emit('close')"
            >
              CLOSE / ×
            </button>
          </div>

          <nav
            class="mobile-menu__navigation"
            aria-label="移动导航"
          >
            <NuxtLink
              v-for="(link, index) in siteNavigation"
              :key="link.to"
              :to="link.to"
              @click="emit('close')"
            >
              <span class="specimen-mono">0{{ index + 1 }}</span>
              <strong>{{ link.label }}</strong>
            </NuxtLink>
          </nav>

          <div class="mobile-menu__external">
            <a
              v-for="link in externalLinks"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }} ↗
            </a>
          </div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu__backdrop {
  position: fixed;
  z-index: 90;
  inset: 0;
  display: grid;
  justify-items: end;
  background: rgb(23 23 43 / 32%);
}

.mobile-menu {
  display: flex;
  width: min(100%, 28rem);
  height: 100%;
  flex-direction: column;
  padding: 1rem 1.25rem 2rem;
  border-left: 1px solid var(--specimen-ink);
  background: var(--specimen-ice);
  box-shadow: -9px 0 0 var(--specimen-violet);
}

.mobile-menu__header {
  display: flex;
  min-height: 4rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--specimen-ink);
  font-size: .75rem;
  font-weight: 750;
}

.mobile-menu__header button {
  min-height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
}

.mobile-menu__navigation {
  margin-top: 3rem;
}

.mobile-menu__navigation a {
  display: grid;
  grid-template-columns: 3rem 1fr;
  align-items: baseline;
  padding: 1rem 0;
  border-bottom: 1px solid var(--specimen-line);
  text-decoration: none;
}

.mobile-menu__navigation strong {
  font-size: clamp(2rem, 9vw, 3.2rem);
  letter-spacing: -.05em;
}

.mobile-menu__external {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: auto;
  font-family: var(--specimen-mono);
  font-size: .75rem;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 180ms ease;
}

.menu-fade-enter-active .mobile-menu,
.menu-fade-leave-active .mobile-menu {
  transition: transform 220ms ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-from .mobile-menu,
.menu-fade-leave-to .mobile-menu {
  transform: translateX(100%);
}
</style>
