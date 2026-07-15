<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'

withDefaults(defineProps<{
  articles: ArticleRecord[]
  title?: string
  variant?: 'featured' | 'compact' | 'full'
}>(), {
  title: '',
  variant: 'compact'
})
</script>

<template>
  <section
    class="article-log-list"
    :class="`is-${variant}`"
  >
    <header
      v-if="title"
      class="article-log-list__header"
    >
      <h2>{{ title }}</h2>
      <NuxtLink
        class="specimen-mono"
        to="/articles"
      >
        VIEW_ALL / 010 →
      </NuxtLink>
    </header>

    <div class="article-log-list__rows">
      <ArticleLogRow
        v-for="(article, index) in articles"
        :key="article._path"
        :article="article"
        :fallback="articles.length - index"
        :variant="variant"
      />
    </div>
  </section>
</template>

<style scoped>
.article-log-list {
  width: min(100% - 2.5rem, 90rem);
  margin-inline: auto;
}

.article-log-list.is-featured {
  width: 100%;
}

.article-log-list.is-full {
  width: 100%;
}

.article-log-list__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--specimen-ink);
}

h2 {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  letter-spacing: -.05em;
}

.article-log-list__header a {
  min-height: 44px;
  font-size: .7rem;
}

@media (max-width: 47.99rem) {
  .article-log-list {
    width: min(100% - 2rem, 90rem);
  }
}
</style>
