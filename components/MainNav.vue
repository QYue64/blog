<script setup lang="ts">
import { siteNavigation } from '../composables/site'
</script>

<template>
  <nav aria-label="主导航">
    <ul class="main-nav__list">
      <li
        v-for="link in siteNavigation"
        :key="link.to"
      >
        <NuxtLink :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav__list {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.4vw, 2.35rem);
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  position: relative;
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  font-family: var(--specimen-mono);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-decoration: none;
}

a::after {
  position: absolute;
  right: 0;
  bottom: .4rem;
  left: 0;
  height: 2px;
  background: var(--specimen-violet);
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

a:hover::after,
a:focus-visible::after,
a.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
