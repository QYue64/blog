<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'
import { formatArticleDate } from '../../utils/articles'

const props = defineProps<{
  page: ArticleRecord
  number: string
  minutes: number
}>()

const date = computed(() => formatArticleDate(props.page.date))
</script>

<template>
  <header class="article-header">
    <div
      class="article-header__number specimen-mono"
      aria-hidden="true"
    >
      {{ number }}
    </div>

    <div class="article-header__copy">
      <h1>{{ page.title }}</h1>
      <p v-if="page.description">
        {{ page.description }}
      </p>
      <div class="article-header__meta specimen-mono">
        <span>ENTRY {{ number }}</span>
        <span>{{ date }}</span>
        <span>{{ minutes }} MIN</span>
      </div>
    </div>

    <div class="article-header__category specimen-mono">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path d="M16 1.5 19.6 12 30.5 16l-10.9 4L16 30.5 12.4 20 1.5 16l10.9-4L16 1.5Z" />
      </svg>
      <span>{{ page.category || 'NOTE' }}</span>
    </div>
  </header>
</template>

<style scoped>
.article-header {
  position: relative;
  display: grid;
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  min-height: 27rem;
  grid-template-columns: clamp(13rem, 20vw, 18.5rem) minmax(0, 1fr) 5.5rem;
  align-items: stretch;
  margin: 3rem auto 0;
  overflow: hidden;
  border: 1px solid rgb(108 92 231 / 45%);
  background: #fff;
  clip-path: polygon(2.5rem 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% calc(100% - 2.5rem), calc(100% - 2.5rem) 100%, 2.5rem 100%, 0 calc(100% - 2.5rem), 0 2.5rem);
}

.article-header::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 13rem;
  height: 10rem;
  background-image: radial-gradient(circle, rgb(108 92 231 / 22%) 1px, transparent 1.4px);
  background-size: 7px 7px;
  content: '';
  mask-image: linear-gradient(135deg, transparent 15%, #000 100%);
  pointer-events: none;
}

.article-header__number {
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-family: var(--specimen-sans);
  font-size: clamp(8rem, 13vw, 12.75rem);
  font-weight: 850;
  letter-spacing: -.13em;
  line-height: 1;
  -webkit-text-stroke: 1.5px rgb(108 92 231 / 48%);
}

.article-header__copy {
  position: relative;
  z-index: 2;
  align-self: center;
  padding: 3.25rem clamp(1.5rem, 3.5vw, 3.5rem);
}

.article-header__copy::after {
  position: absolute;
  right: 2.5rem;
  bottom: -1.75rem;
  color: var(--specimen-pink);
  content: '///';
  font-family: var(--specimen-mono);
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: -.18em;
}

.article-header h1 {
  max-width: 24ch;
  margin: 0;
  font-size: clamp(3rem, 4.3vw, 4.25rem);
  font-weight: 880;
  letter-spacing: -.07em;
  line-height: 1.02;
}

.article-header__copy p {
  max-width: 50rem;
  margin: 1.5rem 0 0;
  color: var(--specimen-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem 1.75rem;
  margin-top: 2.25rem;
  color: var(--specimen-ink);
  font-size: .72rem;
  font-weight: 750;
}

.article-header__meta span:not(:last-child)::after {
  margin-left: 1.75rem;
  color: var(--specimen-pink);
  content: '/';
}

.article-header__category {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  padding: 2rem 1.2rem;
  border-left: 1px solid rgb(108 92 231 / 45%);
  color: var(--specimen-violet);
  font-size: .74rem;
  font-weight: 800;
  letter-spacing: .07em;
  writing-mode: vertical-rl;
}

.article-header__category svg {
  width: 1.25rem;
  height: 1.25rem;
  flex: 0 0 auto;
  fill: currentColor;
}

@media (max-width: 63.99rem) {
  .article-header {
    min-height: 25rem;
    grid-template-columns: 8.5rem minmax(0, 1fr) 4.5rem;
  }

  .article-header__number {
    font-size: 8rem;
  }

  .article-header h1 {
    font-size: clamp(2.65rem, 5.8vw, 3.75rem);
  }
}

@media (max-width: 47.99rem) {
  .article-header {
    width: calc(100% - 2rem);
    min-height: auto;
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
    clip-path: polygon(1.35rem 0, 100% 0, 100% calc(100% - 1.35rem), calc(100% - 1.35rem) 100%, 0 100%, 0 1.35rem);
  }

  .article-header__number {
    position: absolute;
    z-index: 0;
    top: .5rem;
    right: 1rem;
    font-size: 7rem;
    opacity: .5;
  }

  .article-header__copy {
    padding: 6.5rem 1.35rem 2.5rem;
  }

  .article-header__copy::after {
    display: none;
  }

  .article-header h1 {
    font-size: clamp(2.35rem, 11vw, 3.6rem);
    line-height: 1.04;
  }

  .article-header__copy p {
    font-size: .94rem;
  }

  .article-header__meta {
    gap: .65rem 1rem;
    margin-top: 1.75rem;
    font-size: .64rem;
  }

  .article-header__meta span:not(:last-child)::after {
    margin-left: 1rem;
  }

  .article-header__category {
    min-height: 3.75rem;
    flex-direction: row;
    justify-content: flex-start;
    padding: .75rem 1.35rem;
    border-top: 1px solid rgb(108 92 231 / 45%);
    border-left: 0;
    writing-mode: horizontal-tb;
  }
}
</style>
