<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import type { ArticleRecord } from '../../utils/articles'
import { sortArticles } from '../../utils/articles'

const props = withDefaults(defineProps<{
  path?: string
}>(), {
  path: 'articles'
})

const { data } = await useAsyncData(`articles-list-${props.path}`, () => {
  return queryContent(withTrailingSlash(props.path)).find()
})

const articles = computed(() => sortArticles((data.value || []) as ArticleRecord[]))
</script>

<template>
  <section
    class="logs-page"
    aria-labelledby="logs-title"
  >
    <header class="logs-page__header">
      <div class="logs-page__copy">
        <h1 id="logs-title">
          <span>所有</span><span>记录。</span>
        </h1>
        <p>从最近一次实验往回翻：AI、自托管、Docker，以及值得保留下来的解决过程。</p>
      </div>

      <div
        class="logs-page__blob specimen-mono"
        aria-hidden="true"
      >
        {{ String(articles.length).padStart(3, '0') }}
      </div>
    </header>

    <div class="logs-page__meta specimen-mono">
      <span>SORT / NEWEST_FIRST</span>
      <span>{{ String(articles.length).padStart(3, '0') }} ENTRIES</span>
    </div>

    <ArticleLogList
      v-if="articles.length"
      :articles="articles"
      variant="full"
    />
    <p
      v-else
      class="logs-page__empty specimen-mono"
    >
      NO_ENTRIES / 暂无文章
    </p>
  </section>
</template>

<style scoped>
.logs-page {
  padding: 2rem 0 clamp(5rem, 10vw, 9rem);
}

.logs-page__header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 3rem;
  align-items: center;
}

.logs-page__copy h1 {
  margin: 0;
  font-size: clamp(4rem, 7vw, 5.5rem);
  letter-spacing: -.075em;
  line-height: .92;
}

.logs-page__copy h1 span + span {
  margin-left: .12em;
}

.logs-page__copy p {
  max-width: 35rem;
  margin: 1.25rem 0 0;
  color: var(--specimen-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.logs-page__blob {
  display: grid;
  width: clamp(9rem, 16vw, 10rem);
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid var(--specimen-ink);
  border-radius: 50%;
  background: var(--specimen-lime);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 850;
  letter-spacing: .02em;
}

.logs-page__meta {
  display: flex;
  gap: clamp(2rem, 8vw, 7rem);
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--specimen-ink);
  border-bottom: 1px solid var(--specimen-ink);
  color: var(--specimen-violet);
  font-size: .72rem;
  font-weight: 750;
}

.logs-page__empty {
  min-height: 16rem;
  padding: 3rem 0;
  color: var(--specimen-muted);
}

@media (max-width: 47.99rem) {
  .logs-page {
    padding-top: 3.5rem;
  }

  .logs-page__header {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .logs-page__copy h1 {
    font-size: clamp(4rem, 22vw, 5.5rem);
  }

  .logs-page__copy h1 span {
    display: block;
  }

  .logs-page__copy h1 span + span {
    margin-left: 0;
  }

  .logs-page__copy p {
    margin-top: 1.5rem;
    font-size: .95rem;
  }

  .logs-page__blob {
    width: 8.5rem;
    justify-self: end;
    margin-top: -1rem;
    font-size: 3rem;
  }

  .logs-page__meta {
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
    font-size: .62rem;
  }
}
</style>
