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
          <NuxtLink
            to="/articles"
            aria-label="返回所有文章"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 16"
            >
              <path d="M8 1 1 8l7 7M1 8h30" />
            </svg>
            <span>返回所有记录</span>
          </NuxtLink>
        </aside>

        <div class="article-layout__body prose">
          <slot />
          <ArticlePagination
            v-bind="adjacent"
            :number="number"
          />
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
.article-shell {
  position: relative;
  overflow: clip;
}

.article-shell::before {
  position: absolute;
  z-index: -1;
  top: 46rem;
  bottom: 10rem;
  left: 0;
  width: clamp(5rem, 12vw, 11rem);
  background-image: radial-gradient(circle, rgb(108 92 231 / 18%) 1px, transparent 1.4px);
  background-size: 7px 7px;
  content: '';
  mask-image: linear-gradient(90deg, #000, transparent), linear-gradient(0deg, transparent, #000 20%, #000 80%, transparent);
  pointer-events: none;
}

.article-layout {
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.article-layout__grid {
  display: grid;
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  grid-template-columns: minmax(9rem, .87fr) minmax(0, 55rem) minmax(13rem, 1fr);
  justify-content: center;
  margin: 0 auto;
}

.article-layout__back {
  min-width: 0;
  padding: 3rem clamp(1rem, 2vw, 2rem) 0 0;
}

.article-layout__back a {
  position: sticky;
  top: 3rem;
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: .75rem;
  color: var(--specimen-violet);
  font-size: .86rem;
  font-weight: 760;
  line-height: 1.6;
  text-decoration: none;
}

.article-layout__back svg {
  width: 2rem;
  flex: 0 0 auto;
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 1.5;
  transition: transform 180ms ease;
}

.article-layout__back a:hover svg,
.article-layout__back a:focus-visible svg {
  transform: translateX(-.3rem);
}

.article-layout__body {
  min-width: 0;
  padding: clamp(3.5rem, 6vw, 5.5rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 8vw, 7rem);
  border-right: 1px solid rgb(108 92 231 / 42%);
  border-left: 1px solid rgb(108 92 231 / 42%);
  background: var(--specimen-white);
  box-shadow: 0 18px 40px rgb(53 43 125 / 7%);
}

.article-layout__toc {
  min-width: 0;
}

.article-layout__body :deep(h1) {
  display: none;
}

.article-layout__body :deep(h2),
.article-layout__body :deep(h3),
.article-layout__body :deep(h4) {
  scroll-margin-top: 3rem;
  color: var(--specimen-ink);
  font-family: var(--specimen-sans);
  letter-spacing: -.035em;
  line-height: 1.25;
}

.article-layout__body :deep(h2) {
  display: flex;
  align-items: center;
  gap: .9rem;
  margin: 4.5rem 0 1.4rem;
  font-size: clamp(1.65rem, 3vw, 2.2rem);
  font-weight: 850;
}

.article-layout__body :deep(h2::before) {
  color: var(--specimen-pink);
  content: '//';
  font-family: var(--specimen-mono);
  font-size: .9em;
  font-weight: 850;
  letter-spacing: -.18em;
}

.article-layout__body :deep(h2::after) {
  height: 1px;
  flex: 1;
  background: rgb(108 92 231 / 55%);
  content: '';
}

.article-layout__body :deep(h3) {
  margin: 3rem 0 1rem;
  padding-left: 1rem;
  border-left: 4px solid var(--specimen-violet);
  font-size: clamp(1.3rem, 2.4vw, 1.65rem);
}

.article-layout__body :deep(p),
.article-layout__body :deep(li) {
  color: var(--specimen-ink);
  font-family: var(--specimen-serif);
  font-size: 1.075rem;
  line-height: 1.85;
}

.article-layout__body :deep(p) {
  margin: 1.25rem 0;
}

.article-layout__body :deep(ul),
.article-layout__body :deep(ol) {
  padding-left: 1.7rem;
  margin-block: 1.25rem;
}

.article-layout__body :deep(li + li) {
  margin-top: .35rem;
}

.article-layout__body :deep(a) {
  color: var(--specimen-violet);
  font-weight: 650;
  text-decoration-thickness: 1.5px;
  text-underline-offset: .24em;
}

.article-layout__body :deep(h2 a),
.article-layout__body :deep(h3 a),
.article-layout__body :deep(h4 a) {
  color: inherit;
  text-decoration: none;
}

.article-layout__body :deep(blockquote) {
  position: relative;
  padding: 1rem 1.25rem 1rem 3.5rem;
  margin: 2rem 0;
  border: 1px solid rgb(108 92 231 / 45%);
  border-left: 5px solid var(--specimen-violet);
  background: linear-gradient(90deg, var(--specimen-violet-soft), #fff 65%);
}

.article-layout__body :deep(blockquote::before) {
  position: absolute;
  top: 1.25rem;
  left: 1.15rem;
  width: 1.15rem;
  height: 1.15rem;
  background: var(--specimen-violet);
  clip-path: polygon(50% 0, 61% 38%, 100% 50%, 61% 62%, 50% 100%, 39% 62%, 0 50%, 39% 38%);
  content: '';
}

.article-layout__body :deep(blockquote p) {
  margin: 0;
  color: var(--specimen-ink);
  font-size: .98rem;
  line-height: 1.75;
}

.article-layout__body :deep(code:not(pre code)) {
  padding: .12em .34em;
  border-bottom: 1px solid rgb(108 92 231 / 55%);
  background: var(--specimen-violet-soft);
  color: #4f3fd0;
  font-family: var(--specimen-mono);
  font-size: .86em;
}

.article-layout__body :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin-block: 2.5rem;
  border: 1px solid rgb(108 92 231 / 40%);
  box-shadow: 8px 8px 0 var(--specimen-violet-soft);
}

.article-layout__body :deep(table) {
  width: 100%;
  margin-block: 2.25rem;
  border-collapse: collapse;
  font-size: .94rem;
}

.article-layout__body :deep(th),
.article-layout__body :deep(td) {
  padding: .72rem 1rem;
  border: 0;
  border-bottom: 1px solid var(--specimen-line);
  color: var(--specimen-ink);
  font-family: var(--specimen-sans);
  text-align: left;
}

.article-layout__body :deep(th) {
  border-top: 2px solid var(--specimen-violet);
  border-bottom-color: var(--specimen-violet);
  font-weight: 800;
}

.article-layout__body :deep(hr) {
  position: relative;
  height: 1.5rem;
  margin: 3.5rem 0;
  border: 0;
  background: linear-gradient(var(--specimen-line), var(--specimen-line)) left center / calc(50% - 2.5rem) 1px no-repeat,
    linear-gradient(var(--specimen-line), var(--specimen-line)) right center / calc(50% - 2.5rem) 1px no-repeat;
}

.article-layout__body :deep(hr::after) {
  position: absolute;
  inset: 50% auto auto 50%;
  color: var(--specimen-violet);
  content: '✦';
  font-size: 1.4rem;
  line-height: 1;
  transform: translate(-50%, -50%);
}

@media (max-width: 63.99rem) {
  .article-layout__grid {
    width: min(calc(100% - 2.5rem), 60rem);
    grid-template-columns: 8rem minmax(0, 1fr);
  }

  .article-layout__toc {
    display: none;
  }
}

@media (max-width: 47.99rem) {
  .article-layout__grid {
    width: calc(100% - 2rem);
    grid-template-columns: minmax(0, 1fr);
  }

  .article-layout__back {
    padding: 1rem 0;
  }

  .article-layout__back a {
    position: static;
  }

  .article-layout__body {
    padding: 2.75rem 1.25rem 4rem;
    border: 1px solid rgb(108 92 231 / 42%);
    clip-path: polygon(1.1rem 0, 100% 0, 100% calc(100% - 1.1rem), calc(100% - 1.1rem) 100%, 0 100%, 0 1.1rem);
  }

  .article-layout__body :deep(h2) {
    align-items: flex-start;
    margin-top: 3.5rem;
    font-size: 1.55rem;
  }

  .article-layout__body :deep(h2::after) {
    display: none;
  }

  .article-layout__body :deep(p),
  .article-layout__body :deep(li) {
    font-size: 1rem;
  }

  .article-layout__body :deep(table) {
    display: block;
    max-width: 100%;
    overflow-x: auto;
  }

  .article-layout__body :deep(th),
  .article-layout__body :deep(td) {
    min-width: 8rem;
  }
}
</style>
