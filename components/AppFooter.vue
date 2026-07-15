<script setup lang="ts">
import { externalLinks, siteNavigation } from '../composables/site'

const alpine = useAppConfig().alpine
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__identity">
      <span class="specimen-mono">© 2026 QYUE</span>
      <NuxtLink
        v-if="alpine.footer?.credits?.enabled"
        :to="alpine.footer.credits.repository"
        target="_blank"
      >
        {{ alpine.footer.credits.text }} ↗
      </NuxtLink>
    </div>

    <nav
      class="app-footer__navigation"
      aria-label="页脚导航"
    >
      <NuxtLink
        v-for="link in siteNavigation"
        :key="link.to"
        :to="link.to"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <div class="app-footer__external">
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
  </footer>
</template>

<style scoped>
.app-footer {
  display: grid;
  width: min(100% - 2.5rem, 90rem);
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  align-items: start;
  padding: 1.5rem 0 2.5rem;
  margin: clamp(5rem, 10vw, 9rem) auto 0;
  border-top: 1px solid var(--specimen-ink);
  font-family: var(--specimen-mono);
  font-size: .72rem;
  line-height: 1.6;
}

.app-footer__identity,
.app-footer__navigation,
.app-footer__external {
  display: flex;
  flex-wrap: wrap;
  gap: .65rem 1.15rem;
}

.app-footer a {
  text-decoration-thickness: 1px;
  text-underline-offset: .25rem;
}

@media (max-width: 47.99rem) {
  .app-footer {
    width: min(100% - 2rem, 90rem);
    grid-template-columns: 1fr;
  }
}
</style>
