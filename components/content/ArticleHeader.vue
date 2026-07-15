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
      class="article-header__blob"
      aria-hidden="true"
    />

    <div class="article-header__copy">
      <div class="article-header__meta specimen-mono">
        <span>ENTRY / {{ number }}</span>
        <span>{{ date }}</span>
        <span>READ {{ String(minutes).padStart(2, '0') }}:00</span>
      </div>
      <h1>{{ page.title }}</h1>
      <p v-if="page.description">
        {{ page.description }}
      </p>
    </div>

    <SpecimenWindow
      title="ENTRY_META.DAT"
      tone="pink"
      class="article-header__window"
    >
      <dl>
        <div><dt>STATUS</dt><dd>PUBLIC</dd></div>
        <div><dt>FORMAT</dt><dd>NOTE</dd></div>
        <div><dt>TOPIC</dt><dd>{{ page.category || 'NOTE' }}</dd></div>
      </dl>
    </SpecimenWindow>
  </header>
</template>

<style scoped>
.article-header {
  position: relative;
  display: grid;
  width: min(100% - 2.5rem, 90rem);
  min-height: 27rem;
  grid-template-columns: minmax(0, 1fr) clamp(14rem, 20vw, 18rem);
  gap: clamp(2rem, 8vw, 8rem);
  align-items: center;
  padding: clamp(4rem, 8vw, 7rem) 0;
  margin-inline: auto;
  overflow: hidden;
}

.article-header__copy {
  position: relative;
  z-index: 2;
}

.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem 2rem;
  color: var(--specimen-violet);
  font-size: .72rem;
  font-weight: 750;
}

.article-header h1 {
  max-width: 24ch;
  margin: 1.5rem 0 0;
  font-size: clamp(2.75rem, 5.4vw, 5.4rem);
  letter-spacing: -.065em;
  line-height: .98;
}

.article-header__copy p {
  max-width: 48rem;
  margin: 1.5rem 0 0;
  color: var(--specimen-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.article-header__blob {
  position: absolute;
  z-index: 1;
  top: 28%;
  left: -6rem;
  width: clamp(14rem, 32vw, 29rem);
  height: 8rem;
  background: var(--specimen-lime);
  clip-path: polygon(0 20%, 82% 0, 100% 62%, 66% 100%, 8% 78%);
  transform: rotate(-2deg);
}

.article-header__window {
  position: relative;
  z-index: 3;
  transform: rotate(1deg);
}

.article-header__window dl {
  margin: 0;
}

.article-header__window div {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: .75rem;
}

.article-header__window dt,
.article-header__window dd {
  margin: 0;
}

.article-header__window dt {
  font-weight: 800;
}

@media (max-width: 63.99rem) {
  .article-header {
    min-height: 24rem;
    grid-template-columns: minmax(0, 1fr) 14rem;
    gap: 2rem;
  }
}

@media (max-width: 47.99rem) {
  .article-header {
    width: min(100% - 2rem, 90rem);
    min-height: auto;
    grid-template-columns: 1fr;
    padding: 3.5rem 0 4.5rem;
  }

  .article-header__meta {
    gap: .65rem 1rem;
    font-size: .64rem;
  }

  .article-header h1 {
    margin-top: 1.25rem;
    font-size: clamp(2.7rem, 13vw, 4.25rem);
  }

  .article-header__copy p {
    font-size: .95rem;
  }

  .article-header__blob {
    top: 8rem;
    left: -8rem;
    width: 22rem;
    height: 7rem;
  }

  .article-header__window {
    width: min(16rem, calc(100% - 2rem));
    justify-self: end;
  }
}
</style>
