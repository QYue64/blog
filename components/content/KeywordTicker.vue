<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div
    class="keyword-ticker specimen-mono"
    aria-label="主题关键词"
  >
    <div class="keyword-ticker__track">
      <div class="keyword-ticker__group">
        <span
          v-for="item in items"
          :key="item"
        >{{ item }}</span>
      </div>
      <div
        class="keyword-ticker__group"
        aria-hidden="true"
      >
        <span
          v-for="item in items"
          :key="item"
        >{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.keyword-ticker {
  overflow: hidden;
  border-top: 1px solid var(--specimen-ink);
  border-bottom: 1px solid var(--specimen-ink);
  color: var(--specimen-violet);
  font-size: .78rem;
  font-weight: 750;
}

.keyword-ticker__track,
.keyword-ticker__group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.keyword-ticker__track {
  width: max-content;
  animation: specimen-ticker 22s linear infinite;
}

.keyword-ticker__group span {
  display: inline-flex;
  min-width: 12rem;
  min-height: 3.35rem;
  align-items: center;
  justify-content: center;
}

.keyword-ticker__group span::after {
  margin-left: 3rem;
  content: '·';
}

@keyframes specimen-ticker {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .keyword-ticker__track {
    animation: none;
  }

  .keyword-ticker__group[aria-hidden='true'] {
    display: none;
  }
}
</style>
