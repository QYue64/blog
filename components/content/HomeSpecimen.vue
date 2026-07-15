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
  margin-top: 0;
}

.home-specimen__recent {
  margin-top: clamp(4rem, 8vw, 7rem);
}

.home-specimen__outro {
  display: grid;
  width: min(100% - 2.5rem, 90rem);
  grid-template-columns: 1fr 1fr;
  margin: clamp(5rem, 10vw, 9rem) auto 0;
  border-top: 1px solid var(--specimen-ink);
  border-bottom: 1px solid var(--specimen-ink);
}

.home-specimen__about,
.home-specimen__links {
  min-height: 20rem;
  padding: clamp(2rem, 5vw, 4.5rem);
}

.home-specimen__about {
  border-right: 1px solid var(--specimen-ink);
}

.home-specimen__outro .specimen-mono {
  color: var(--specimen-violet);
  font-size: .72rem;
  font-weight: 750;
}

.home-specimen__outro h2 {
  max-width: 18ch;
  margin: 1.4rem 0 1rem;
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: -.06em;
  line-height: 1.02;
}

.home-specimen__outro p {
  max-width: 34rem;
  color: var(--specimen-muted);
  line-height: 1.8;
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

@media (max-width: 47.99rem) {
  .home-specimen__outro {
    width: min(100% - 2rem, 90rem);
    grid-template-columns: 1fr;
  }

  .home-specimen__about {
    border-right: 0;
    border-bottom: 1px solid var(--specimen-ink);
  }

  .home-specimen__about,
  .home-specimen__links {
    min-height: auto;
    padding: 2.5rem 0;
  }
}
</style>
