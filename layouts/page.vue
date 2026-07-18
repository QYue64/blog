<template>
  <main class="page-layout">
    <slot />
  </main>
</template>

<style scoped>
.page-layout {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  margin-inline: auto;
}

@media (max-width: 47.99rem) {
  .page-layout {
    width: min(100% - 2rem, 72rem);
  }
}
</style>
