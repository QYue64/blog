<template>
  <main class="page-layout">
    <slot />
  </main>
</template>

<style scoped>
.page-layout {
  width: min(100% - 2.5rem, 72rem);
  margin-inline: auto;
}

@media (max-width: 47.99rem) {
  .page-layout {
    width: min(100% - 2rem, 72rem);
  }
}
</style>
