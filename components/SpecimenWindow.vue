<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  tone?: 'white' | 'pink'
}>(), {
  tone: 'white'
})
</script>

<template>
  <section
    class="specimen-window"
    :class="`is-${tone}`"
  >
    <header class="specimen-window__header">
      <span>{{ title }}</span>
      <span
        class="specimen-window__controls"
        aria-hidden="true"
      >— □ ×</span>
    </header>
    <div class="specimen-window__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.specimen-window {
  border: 1px solid var(--specimen-ink);
  background: var(--specimen-white);
  box-shadow: 7px 8px 0 var(--specimen-violet);
  font-family: var(--specimen-mono);
}

.specimen-window.is-pink {
  background: var(--specimen-pink);
  box-shadow: 7px 8px 0 var(--specimen-ink);
}

.specimen-window__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: .55rem .7rem;
  border-bottom: 1px solid var(--specimen-ink);
  font-size: .7rem;
  font-weight: 750;
  letter-spacing: .05em;
}

.specimen-window__controls {
  white-space: nowrap;
}

.specimen-window__body {
  padding: .85rem;
  font-size: .75rem;
  line-height: 1.6;
}
</style>
