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
    <template v-if="variant === 'featured'">
      <span class="article-log-row__featured-copy">
        <span class="article-log-row__meta specimen-mono">
          {{ article.category || 'NOTE' }} / {{ date }} / {{ minutes }} MIN
        </span>
        <strong>{{ article.title }}</strong>
        <span
          v-if="article.description"
          class="article-log-row__description"
        >
          {{ article.description }}
        </span>
        <span class="article-log-row__read">
          阅读记录
          <svg
            aria-hidden="true"
            viewBox="0 0 32 16"
          >
            <path d="M1 8h28M22 1l7 7-7 7" />
          </svg>
        </span>
      </span>

      <span class="article-log-row__media">
        <img
          src="/images/anime/qyue-feature.webp"
          alt="月夜下在电脑前整理技术记录的动漫角色"
          width="1672"
          height="941"
        >
      </span>
    </template>

    <template v-else>
      <span class="article-log-row__number specimen-mono">{{ number }}</span>

      <span class="article-log-row__content">
        <strong>{{ article.title }}</strong>
      </span>

      <span class="article-log-row__category specimen-mono">
        {{ article.category || 'NOTE' }}
      </span>

      <span class="article-log-row__date specimen-mono">
        {{ date }}
      </span>

      <span
        class="article-log-row__arrow"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 16">
          <path d="M1 8h28M22 1l7 7-7 7" />
        </svg>
      </span>
    </template>

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
  grid-template-columns: 4.5rem minmax(0, 1fr) 10rem 8.5rem 2rem;
  gap: 1rem;
  align-items: center;
  min-height: 4.75rem;
  padding: .85rem 1rem;
  border-bottom: 1px solid var(--specimen-line);
  color: var(--specimen-ink);
  text-decoration: none;
  transition: background 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.article-log-row:hover,
.article-log-row:focus-visible {
  background: var(--specimen-coral-soft);
}

.article-log-row__number {
  color: var(--specimen-ink);
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-weight: 850;
  letter-spacing: -.08em;
}

.article-log-row__number::after {
  display: inline-block;
  width: 1.8rem;
  height: 2px;
  margin-left: .75rem;
  background: var(--specimen-pink);
  content: '';
  transform: rotate(-55deg);
  vertical-align: .45rem;
}

.article-log-row__content {
  min-width: 0;
}

.article-log-row__content strong {
  display: block;
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  letter-spacing: -.02em;
  line-height: 1.3;
}

.article-log-row__description {
  display: -webkit-box;
  max-width: 48rem;
  margin-top: 1.2rem;
  overflow: hidden;
  color: var(--specimen-muted);
  font-size: .94rem;
  line-height: 1.75;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
  transition: transform 180ms ease;
}

.article-log-row__arrow svg,
.article-log-row__read svg {
  width: 2rem;
  height: 1rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 1.6;
}

.article-log-row:hover .article-log-row__arrow,
.article-log-row:focus-visible .article-log-row__arrow {
  transform: translateX(.3rem);
}

.article-log-row.is-featured {
  display: grid;
  min-height: 24rem;
  grid-template-columns: minmax(0, 1.12fr) minmax(24rem, .88fr);
  gap: 0;
  padding: 0;
  border: 1.5px solid var(--specimen-ink);
  background: #fff;
  box-shadow: 8px 8px 0 var(--specimen-violet-soft);
  clip-path: polygon(0 0, calc(100% - 1.3rem) 0, 100% 1.3rem, 100% 100%, 1.3rem 100%, 0 calc(100% - 1.3rem));
}

.article-log-row.is-featured:hover,
.article-log-row.is-featured:focus-visible {
  background: #fff;
  box-shadow: 4px 4px 0 var(--specimen-violet-soft);
  transform: translate(4px, 4px);
}

.article-log-row__featured-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(2rem, 4vw, 4.2rem);
}

.article-log-row__featured-copy strong {
  max-width: 19ch;
  margin-top: 1rem;
  font-size: clamp(2rem, 3.4vw, 3.7rem);
  letter-spacing: -.06em;
  line-height: 1.02;
}

.article-log-row__meta {
  color: var(--specimen-violet);
  font-size: .73rem;
  font-weight: 800;
}

.article-log-row__read {
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: .35rem;
  margin-top: 1.5rem;
  border-bottom: 2px solid var(--specimen-violet);
  color: var(--specimen-violet);
  font-weight: 800;
}

.article-log-row__media {
  min-width: 0;
  overflow: hidden;
  border-left: 1.5px solid var(--specimen-ink);
}

.article-log-row__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 52% center;
  transition: transform 500ms cubic-bezier(.2, .7, .2, 1);
}

.article-log-row.is-featured:hover .article-log-row__media img,
.article-log-row.is-featured:focus-visible .article-log-row__media img {
  transform: scale(1.035);
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
  .article-log-row {
    grid-template-columns: 3.6rem minmax(0, 1fr) 7rem 1.5rem;
  }

  .article-log-row.is-featured {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, .8fr);
  }

  .article-log-row__category {
    display: none;
  }
}

@media (max-width: 47.99rem) {
  .article-log-row {
    grid-template-columns: 2.6rem minmax(0, 1fr) auto;
    gap: .65rem;
    min-height: 4rem;
    padding: .85rem 0;
  }

  .article-log-row.is-featured {
    min-height: 0;
    grid-template-columns: 1fr;
    padding: 0;
  }

  .article-log-row__date {
    display: none;
  }

  .article-log-row__arrow {
    grid-column: 3;
    grid-row: 1;
  }

  .article-log-row__number {
    font-size: 1.2rem;
  }

  .article-log-row__number::after {
    display: none;
  }

  .article-log-row__featured-copy {
    padding: 2rem 1.4rem;
  }

  .article-log-row__featured-copy strong {
    font-size: 2rem;
  }

  .article-log-row__media {
    aspect-ratio: 16 / 10;
    border-top: 1.5px solid var(--specimen-ink);
    border-left: 0;
  }
}
</style>
