<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'

defineProps<{
  number: string
  previous?: ArticleRecord | null
  next?: ArticleRecord | null
}>()
</script>

<template>
  <nav
    class="article-pagination"
    aria-label="文章翻页"
  >
    <div class="article-pagination__end specimen-mono">
      <span>END</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path d="M16 1.5 19.6 12 30.5 16l-10.9 4L16 30.5 12.4 20 1.5 16l10.9-4L16 1.5Z" />
      </svg>
      <span>ENTRY_{{ number }}</span>
    </div>

    <div class="article-pagination__grid">
      <NuxtLink
        v-if="previous"
        :to="previous._path"
        class="article-pagination__item"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 40"
        >
          <path d="M21 2 3 20l18 18" />
        </svg>
        <span class="article-pagination__copy">
          <span class="specimen-mono">上一篇</span>
          <strong>{{ previous.title }}</strong>
        </span>
      </NuxtLink>
      <div
        v-else
        class="article-pagination__item is-empty"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 40"
        >
          <path d="M21 2 3 20l18 18" />
        </svg>
        <span class="article-pagination__copy">
          <span class="specimen-mono">上一篇</span>
          <strong>暂无更多文章</strong>
        </span>
      </div>

      <NuxtLink
        v-if="next"
        :to="next._path"
        class="article-pagination__item is-next"
      >
        <span class="article-pagination__copy">
          <span class="specimen-mono">下一篇</span>
          <strong>{{ next.title }}</strong>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 40"
        >
          <path d="m3 2 18 18L3 38" />
        </svg>
      </NuxtLink>
      <div
        v-else
        class="article-pagination__item is-next is-empty"
      >
        <span class="article-pagination__copy">
          <span class="specimen-mono">下一篇</span>
          <strong>暂无更多文章</strong>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 40"
        >
          <path d="m3 2 18 18L3 38" />
        </svg>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.article-pagination {
  margin-top: clamp(4rem, 9vw, 8rem);
}

.article-pagination__end {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .85rem;
  margin-bottom: 1.1rem;
  color: var(--specimen-violet);
  font-size: .75rem;
  font-weight: 800;
}

.article-pagination__end::before,
.article-pagination__end::after {
  height: 1px;
  flex: 1;
  background: rgb(108 92 231 / 55%);
  content: '';
}

.article-pagination__end svg {
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
}

.article-pagination__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .85rem;
}

.article-pagination__item {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 7.5rem;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: 1.1rem;
  align-items: center;
  padding: 1.4rem 1.6rem;
  overflow: hidden;
  background: var(--specimen-violet);
  color: var(--specimen-ink);
  clip-path: polygon(0 0, calc(100% - 1.6rem) 0, 100% 1.6rem, 100% 100%, 0 100%);
  text-decoration: none;
  isolation: isolate;
}

.article-pagination__item::before {
  position: absolute;
  z-index: -1;
  inset: 1px;
  background: var(--specimen-white);
  clip-path: inherit;
  content: '';
  transition: background 180ms ease;
}

.article-pagination__copy {
  position: relative;
  z-index: 1;
  display: grid;
  gap: .55rem;
}

.article-pagination__copy > span {
  color: var(--specimen-violet);
  font-size: .7rem;
  font-weight: 800;
}

.article-pagination__item strong {
  font-size: .98rem;
  line-height: 1.45;
}

.article-pagination__item svg {
  position: relative;
  z-index: 1;
  width: 1.2rem;
  height: 2rem;
  fill: none;
  stroke: var(--specimen-pink);
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 1.8;
  transition: transform 180ms ease;
}

.article-pagination__item.is-next {
  grid-template-columns: minmax(0, 1fr) 2rem;
  clip-path: polygon(1.6rem 0, 100% 0, 100% 100%, 0 100%, 0 1.6rem);
  text-align: right;
}

.article-pagination__item.is-next svg {
  justify-self: end;
}

.article-pagination__item:not(.is-empty):hover::before,
.article-pagination__item:not(.is-empty):focus-visible::before {
  background: var(--specimen-coral-soft);
}

.article-pagination__item:not(.is-empty):hover svg,
.article-pagination__item:not(.is-empty):focus-visible svg {
  transform: translateX(-.25rem);
}

.article-pagination__item.is-next:not(.is-empty):hover svg,
.article-pagination__item.is-next:not(.is-empty):focus-visible svg {
  transform: translateX(.25rem);
}

.article-pagination__item.is-empty {
  color: var(--specimen-muted);
}

@media (max-width: 35rem) {
  .article-pagination__grid {
    grid-template-columns: 1fr;
  }

  .article-pagination__item {
    min-height: 7rem;
    padding-inline: 1.25rem;
  }
}
</style>
