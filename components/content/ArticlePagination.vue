<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'

defineProps<{
  previous?: ArticleRecord | null
  next?: ArticleRecord | null
}>()
</script>

<template>
  <nav
    class="article-pagination"
    aria-label="文章翻页"
  >
    <NuxtLink
      v-if="previous"
      :to="previous._path"
      class="article-pagination__item"
    >
      <span class="specimen-mono">← 上一篇</span>
      <strong>{{ previous.title }}</strong>
    </NuxtLink>
    <div
      v-else
      class="article-pagination__item is-empty"
    >
      <span class="specimen-mono">← 上一篇</span>
      <strong>暂无更多文章</strong>
    </div>

    <NuxtLink
      v-if="next"
      :to="next._path"
      class="article-pagination__item is-next"
    >
      <span class="specimen-mono">下一篇 →</span>
      <strong>{{ next.title }}</strong>
    </NuxtLink>
    <div
      v-else
      class="article-pagination__item is-next is-empty"
    >
      <span class="specimen-mono">下一篇 →</span>
      <strong>暂无更多文章</strong>
    </div>
  </nav>
</template>

<style scoped>
.article-pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: clamp(4rem, 9vw, 8rem);
  border: 1px solid var(--specimen-ink);
}

.article-pagination__item {
  display: grid;
  min-width: 0;
  min-height: 8rem;
  align-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  color: var(--specimen-ink);
  text-decoration: none;
}

.article-pagination__item + .article-pagination__item {
  border-left: 1px solid var(--specimen-ink);
}

.article-pagination__item span {
  color: var(--specimen-violet);
  font-size: .7rem;
  font-weight: 750;
}

.article-pagination__item strong {
  font-size: 1rem;
  line-height: 1.45;
}

.article-pagination__item.is-next {
  text-align: right;
}

.article-pagination__item:not(.is-empty):hover,
.article-pagination__item:not(.is-empty):focus-visible {
  background: var(--specimen-pink);
}

.article-pagination__item.is-empty {
  color: var(--specimen-muted);
}

@media (max-width: 35rem) {
  .article-pagination {
    grid-template-columns: 1fr;
  }

  .article-pagination__item + .article-pagination__item {
    border-top: 1px solid var(--specimen-ink);
    border-left: 0;
  }
}
</style>
