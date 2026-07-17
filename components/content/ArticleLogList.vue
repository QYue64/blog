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
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
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
  gap: 1rem;
  border-bottom: 1.5px solid var(--specimen-ink);
}

h2 {
  display: flex;
  flex: 1;
  align-items: center;
  gap: .8rem;
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.65rem);
  font-weight: 850;
  letter-spacing: -.065em;
  line-height: 1;
}

h2::before {
  width: 1.15rem;
  height: 1.15rem;
  flex: 0 0 auto;
  background: var(--specimen-violet);
  clip-path: polygon(50% 0, 61% 38%, 100% 50%, 61% 62%, 50% 100%, 39% 62%, 0 50%, 39% 38%);
  content: '';
}

.article-log-list__header a {
  min-height: 44px;
  font-size: .7rem;
}

@media (max-width: 47.99rem) {
  .article-log-list {
    width: calc(100% - 2rem);
  }

  .article-log-list__header a {
    display: none;
  }
}
</style>
