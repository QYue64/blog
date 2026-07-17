<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'
import { getArticleEntries, getHomeFeed, sortArticles } from '../../utils/articles'
import { externalLinks, keywords } from '../../composables/site'

const { data } = await useAsyncData('home-specimen-articles', () => {
  return queryContent('/articles').find()
})

const articles = computed(() => {
  const entries = getArticleEntries((data.value || []) as ArticleRecord[])
  return sortArticles(entries)
})
const feed = computed(() => getHomeFeed(articles.value, 3))
</script>

<template>
  <div class="home-specimen">
    <HomeSpecimenHero />
    <KeywordTicker :items="keywords" />

    <section
      class="home-specimen__featured"
      aria-label="最新文章"
    >
      <h2 class="anime-section-title">
        最新文章
      </h2>
      <ArticleLogList
        v-if="feed.featured"
        :articles="[feed.featured]"
        variant="featured"
      />
    </section>

    <ArticleLogList
      v-if="feed.recent.length"
      class="home-specimen__recent"
      :articles="feed.recent"
      variant="compact"
      title="最近记录"
    />

    <div class="home-specimen__outro">
      <section
        id="about"
        class="home-specimen__about"
      >
        <span class="specimen-mono">ABOUT / QYUE</span>
        <h2>把解决问题的过程，留在网上。</h2>
        <p>记录折腾与思考，沉淀可以再次复用的方法。</p>
        <NuxtLink to="/articles">
          查看所有记录 →
        </NuxtLink>
      </section>

      <section
        id="links"
        class="home-specimen__links"
      >
        <span class="specimen-mono">LINKS / OUTBOUND</span>
        <h2>一些有用的站点与项目。</h2>
        <div>
          <a
            v-for="link in externalLinks"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }} ↗
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-specimen__featured {
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  padding-top: clamp(5rem, 9vw, 9rem);
  margin: 0 auto;
}

.home-specimen__featured :deep(.article-log-list) {
  margin-top: 1.5rem;
}

.home-specimen__recent {
  margin-top: clamp(5rem, 9vw, 8rem);
}

.home-specimen__outro {
  display: grid;
  width: min(calc(100% - (var(--page-gutter) * 2)), var(--page-width));
  grid-template-columns: 1fr 1fr;
  margin: clamp(5rem, 10vw, 9rem) auto 0;
  border: 1.5px solid var(--specimen-ink);
  box-shadow: 8px 8px 0 var(--specimen-violet-soft);
}

.home-specimen__about,
.home-specimen__links {
  min-height: 20rem;
  padding: clamp(2rem, 5vw, 4.5rem);
}

.home-specimen__about {
  border-right: 1px solid var(--specimen-ink);
  background: var(--specimen-white);
}

.home-specimen__links {
  position: relative;
  overflow: hidden;
  background: var(--specimen-violet);
  color: #fff;
}

.home-specimen__links::after {
  position: absolute;
  right: -3rem;
  bottom: -4rem;
  width: 13rem;
  height: 13rem;
  border: 1px solid rgb(255 255 255 / 54%);
  border-radius: 50%;
  content: '';
}

.home-specimen__outro .specimen-mono {
  color: inherit;
  font-size: .72rem;
  font-weight: 750;
}

.home-specimen__outro h2 {
  max-width: 18ch;
  margin: 1.4rem 0 1rem;
  font-size: clamp(2rem, 3.4vw, 3.65rem);
  letter-spacing: -.06em;
  line-height: 1.02;
}

.home-specimen__outro p {
  max-width: 34rem;
  color: var(--specimen-muted);
  line-height: 1.8;
}

.home-specimen__links h2 {
  color: #fff;
}

.home-specimen__outro a {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  font-family: var(--specimen-mono);
  font-size: .74rem;
  font-weight: 700;
  text-underline-offset: .3rem;
}

.home-specimen__links div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem 1.5rem;
  margin-top: 2rem;
}

.home-specimen__links a {
  position: relative;
  z-index: 1;
  color: #fff;
}

@media (max-width: 47.99rem) {
  .home-specimen__outro {
    width: calc(100% - 2rem);
    grid-template-columns: 1fr;
  }

  .home-specimen__about {
    border-right: 0;
    border-bottom: 1px solid var(--specimen-ink);
  }

  .home-specimen__about,
  .home-specimen__links {
    min-height: auto;
    padding: 2.5rem 1.25rem;
  }
}
</style>
