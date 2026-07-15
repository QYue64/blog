<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'
import {
  estimateReadingMinutes,
  formatArticleDate,
  getArticleNumber
} from '../../utils/articles'

const props = withDefaults(defineProps<{
  article: ArticleRecord
  fallback: number
  variant?: 'featured' | 'compact' | 'full'
}>(), {
  variant: 'compact'
})

const number = computed(() => getArticleNumber(props.article, props.fallback))
const minutes = computed(() => estimateReadingMinutes(props.article.body))
const date = computed(() => formatArticleDate(props.article.date))
</script>

<template>
  <NuxtLink
    class="article-log-row"
    :class="`is-${variant}`"
    :to="article._path"
  >
    <span class="article-log-row__number specimen-mono">{{ number }}</span>

    <span class="article-log-row__content">
      <strong>{{ article.title }}</strong>
      <span
        v-if="variant === 'featured' && article.description"
        class="article-log-row__description"
      >
        {{ article.description }}
      </span>
    </span>

    <span class="article-log-row__category specimen-mono">
      {{ article.category || 'NOTE' }}
    </span>

    <span class="article-log-row__date specimen-mono">
      {{ variant === 'featured' ? `READ ${String(minutes).padStart(2, '0')}:00` : date }}
    </span>

    <span
      class="article-log-row__arrow"
      aria-hidden="true"
    >→</span>

    <span
      v-if="variant === 'full'"
      class="article-log-row__preview specimen-mono"
      aria-hidden="true"
    >
      PREVIEW_{{ number }}.LOG<br>
      {{ article.description || article.title }}
    </span>
  </NuxtLink>
</template>

<style scoped>
.article-log-row {
  position: relative;
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr) 10rem 8.5rem 1.5rem;
  gap: 1rem;
  align-items: center;
  min-height: 4.25rem;
  padding: .8rem 1rem;
  border-bottom: 1px solid var(--specimen-line);
  color: var(--specimen-ink);
  text-decoration: none;
  transition: background 180ms ease, color 180ms ease;
}

.article-log-row:hover,
.article-log-row:focus-visible {
  background: var(--specimen-pink);
}

.article-log-row__number {
  color: var(--specimen-violet);
  font-size: .78rem;
  font-weight: 800;
}

.article-log-row__content {
  min-width: 0;
}

.article-log-row__content strong {
  display: block;
  font-size: clamp(.95rem, 1.5vw, 1.1rem);
  letter-spacing: -.02em;
  line-height: 1.3;
}

.article-log-row__description {
  display: block;
  max-width: 50rem;
  margin-top: .65rem;
  color: var(--specimen-muted);
  font-size: .9rem;
  line-height: 1.65;
}

.article-log-row__category,
.article-log-row__date {
  color: var(--specimen-muted);
  font-size: .68rem;
  line-height: 1.45;
}

.article-log-row__date {
  text-align: right;
}

.article-log-row__arrow {
  color: var(--specimen-violet);
  font-size: 1.25rem;
  transition: transform 180ms ease;
}

.article-log-row:hover .article-log-row__arrow,
.article-log-row:focus-visible .article-log-row__arrow {
  transform: translateX(.3rem);
}

.article-log-row.is-featured {
  grid-template-columns: 5.5rem minmax(0, 1fr) 10rem 8rem 2rem;
  min-height: 9.5rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  border-top: 3px solid var(--specimen-ink);
  border-bottom: 3px solid var(--specimen-ink);
}

.article-log-row.is-featured .article-log-row__number {
  font-size: clamp(1.6rem, 4vw, 3rem);
}

.article-log-row.is-featured .article-log-row__content strong {
  max-width: 28ch;
  font-size: clamp(1.5rem, 3.4vw, 3rem);
  letter-spacing: -.05em;
  line-height: 1.02;
}

.article-log-row__preview {
  position: absolute;
  z-index: 5;
  top: 65%;
  right: 16%;
  display: none;
  width: 16rem;
  padding: 1rem;
  border: 1px solid var(--specimen-ink);
  background: var(--specimen-pink);
  box-shadow: 7px 8px 0 var(--specimen-ink);
  color: var(--specimen-ink);
  font-size: .68rem;
  line-height: 1.65;
  transform: rotate(1deg);
}

@media (hover: hover) and (min-width: 64rem) {
  .article-log-row.is-full:hover .article-log-row__preview,
  .article-log-row.is-full:focus-visible .article-log-row__preview {
    display: block;
  }
}

@media (max-width: 63.99rem) {
  .article-log-row,
  .article-log-row.is-featured {
    grid-template-columns: 3rem minmax(0, 1fr) 7rem 1.5rem;
  }

  .article-log-row__category {
    display: none;
  }
}

@media (max-width: 47.99rem) {
  .article-log-row,
  .article-log-row.is-featured {
    grid-template-columns: 2.6rem minmax(0, 1fr) auto;
    gap: .65rem;
    min-height: 4rem;
    padding: .85rem 0;
  }

  .article-log-row.is-featured {
    padding: 1.5rem 0;
  }

  .article-log-row__date {
    display: none;
  }

  .article-log-row__arrow {
    grid-column: 3;
    grid-row: 1;
  }

  .article-log-row.is-featured .article-log-row__number {
    font-size: 1.2rem;
  }

  .article-log-row.is-featured .article-log-row__content strong {
    font-size: 1.55rem;
  }
}
</style>
