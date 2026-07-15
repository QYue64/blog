<script setup lang="ts">
import type { ArticleRecord } from '../utils/articles'
import {
  estimateReadingMinutes,
  getAdjacentArticles,
  getArticleEntries,
  getArticleNumber,
  sortArticles
} from '../utils/articles'

const { page, toc } = useContent()
const route = useRoute()

const { data } = await useAsyncData('article-navigation', () => {
  return queryContent('/articles').find()
})

const articles = computed(() => {
  const entries = getArticleEntries((data.value || []) as ArticleRecord[])
  return sortArticles(entries)
})
const current = computed(() => page.value as ArticleRecord)
const number = computed(() => getArticleNumber(current.value, articles.value.length))
const minutes = computed(() => estimateReadingMinutes(current.value.body))
const adjacent = computed(() => getAdjacentArticles(articles.value, route.path))

if (page.value) {
  const links: Array<{ rel: string, href: string }> = []
  const meta: Array<{ property: string, content: string }> = []

  if (page.value.cover) {
    meta.push({ property: 'og:image', content: page.value.cover })
  }
  if (page.value.canonical) {
    links.push({ rel: 'canonical', href: page.value.canonical })
  }

  useHead({ meta, link: links })
}
</script>

<template>
  <div class="article-shell">
    <ReadingProgress />
    <article
      v-if="current?._path"
      class="article-layout"
    >
      <ArticleHeader
        :page="current"
        :number="number"
        :minutes="minutes"
      />

      <div class="article-layout__grid">
        <aside class="article-layout__back">
          <NuxtLink to="/articles">
            ← 返回所有记录
          </NuxtLink>
        </aside>

        <div class="article-layout__body prose">
          <slot />
          <ArticlePagination v-bind="adjacent" />
        </div>

        <ArticleToc
          class="article-layout__toc"
          :links="toc?.links || []"
        />
      </div>
    </article>
  </div>
</template>

<style scoped>
.article-layout {
  border-top: 1px solid var(--specimen-ink);
}

.article-layout__grid {
  display: grid;
  width: min(100%, 90rem);
  grid-template-columns: 7rem minmax(0, 68ch) 11rem;
  justify-content: center;
  margin-inline: auto;
  border-top: 1px solid var(--specimen-ink);
  border-bottom: 1px solid var(--specimen-ink);
}

.article-layout__back {
  padding: 2.5rem 1rem;
  border-right: 1px solid var(--specimen-ink);
}

.article-layout__back a {
  position: sticky;
  top: 2.5rem;
  display: block;
  color: var(--specimen-violet);
  font-family: var(--specimen-mono);
  font-size: .72rem;
  font-weight: 750;
  line-height: 1.6;
  text-decoration: none;
}

.article-layout__body {
  min-width: 0;
  padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3.5rem) clamp(4rem, 8vw, 7rem);
}

.article-layout__toc {
  border-left: 1px solid var(--specimen-ink);
}

.article-layout__body :deep(h1) {
  display: none;
}

.article-layout__body :deep(h2),
.article-layout__body :deep(h3),
.article-layout__body :deep(h4) {
  scroll-margin-top: 3rem;
  color: var(--specimen-ink);
  letter-spacing: -.035em;
  line-height: 1.25;
}

.article-layout__body :deep(h2) {
  margin: 3.5rem 0 1.25rem;
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
}

.article-layout__body :deep(h3) {
  margin: 2.5rem 0 1rem;
  font-size: clamp(1.35rem, 2.4vw, 1.8rem);
}

.article-layout__body :deep(p),
.article-layout__body :deep(li) {
  color: var(--specimen-ink);
  font-size: 1rem;
  line-height: 1.85;
}

.article-layout__body :deep(p) {
  margin: 1.2rem 0;
}

.article-layout__body :deep(ul),
.article-layout__body :deep(ol) {
  padding-left: 1.5rem;
}

.article-layout__body :deep(a) {
  color: var(--specimen-violet);
  text-decoration-thickness: 1px;
  text-underline-offset: .24em;
}

.article-layout__body :deep(blockquote) {
  padding: .25rem 0 .25rem 1.25rem;
  margin: 1.75rem 0;
  border-left: 5px solid var(--specimen-lime);
  color: var(--specimen-muted);
}

.article-layout__body :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin-block: 2rem;
  border: 1px solid var(--specimen-line);
}

.article-layout__body :deep(table) {
  display: block;
  max-width: 100%;
  margin-block: 2rem;
  overflow-x: auto;
  border-collapse: collapse;
}

.article-layout__body :deep(th),
.article-layout__body :deep(td) {
  padding: .75rem;
  border: 1px solid var(--specimen-line);
}

@media (max-width: 63.99rem) {
  .article-layout__grid {
    width: min(100% - 2.5rem, 58rem);
    grid-template-columns: 7rem minmax(0, 68ch);
  }

  .article-layout__toc {
    display: none;
  }
}

@media (max-width: 47.99rem) {
  .article-layout__grid {
    width: min(100% - 2rem, 58rem);
    grid-template-columns: minmax(0, 1fr);
  }

  .article-layout__back {
    padding: 1.25rem 0;
    border-right: 0;
    border-bottom: 1px solid var(--specimen-ink);
  }

  .article-layout__back a {
    position: static;
    min-height: 44px;
  }

  .article-layout__body {
    padding: 2.5rem 0 4rem;
  }
}
</style>
