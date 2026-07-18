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
      <div class="logs-page__header-inner">
        <div
          class="logs-page__number specimen-mono"
          aria-hidden="true"
        >
          <strong>{{ String(articles.length).padStart(3, '0') }}</strong>
          <span>ENTRIES</span>
        </div>

        <div class="logs-page__copy">
          <h1 id="logs-title">
            <span>所有</span><span>记录。</span>
          </h1>
          <p>从最近一次实验往回翻：AI、自托管、Docker，以及值得保留下来的解决过程。</p>
          <div
            class="logs-page__topics specimen-mono"
            aria-label="文章主题"
          >
            <span>AI</span>
            <i aria-hidden="true">/</i>
            <span>HOMELAB</span>
            <i aria-hidden="true">/</i>
            <span>DEVOPS</span>
          </div>
        </div>

        <div
          class="logs-page__rail specimen-mono"
          aria-hidden="true"
        >
          <i />
          <span>QYUE://LOGS</span>
        </div>
      </div>
    </header>

    <div class="logs-page__registry">
      <div class="logs-page__registry-heading">
        <h2 class="anime-section-title">
          文章目录
        </h2>
        <p class="specimen-mono">
          {{ String(articles.length).padStart(3, '0') }} ENTRIES · NEWEST FIRST
        </p>
      </div>

      <div
        v-if="articles.length"
        class="logs-page__columns specimen-mono"
        aria-hidden="true"
      >
        <span>NO.</span>
        <span>ENTRY</span>
        <span>TOPIC</span>
        <span>PUBLISHED</span>
        <span>OPEN</span>
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

      <div
        v-if="articles.length"
        class="logs-page__end specimen-mono"
        aria-hidden="true"
      >
        <span>END / ARCHIVE_{{ String(articles.length).padStart(3, '0') }}</span>
        <i />
        <span>KEEP CURIOSITY ONLINE</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logs-page {
  padding: clamp(2.25rem, 4vw, 4rem) 0 clamp(1.5rem, 3vw, 3rem);
}

.logs-page__header {
  --header-cut: 2rem;

  padding: 1.5px;
  background: var(--specimen-ink);
  clip-path: polygon(
    var(--header-cut) 0,
    100% 0,
    100% calc(100% - var(--header-cut)),
    calc(100% - var(--header-cut)) 100%,
    0 100%,
    0 var(--header-cut)
  );
}

.logs-page__header-inner {
  position: relative;
  display: grid;
  min-height: clamp(22rem, 28vw, 25rem);
  grid-template-columns: minmax(13rem, .42fr) minmax(0, 1fr) 5.25rem;
  overflow: hidden;
  background: var(--specimen-white);
  clip-path: inherit;
}

.logs-page__header-inner::before {
  position: absolute;
  z-index: 0;
  right: -2rem;
  bottom: -2rem;
  width: 23rem;
  height: 19rem;
  background-image: radial-gradient(circle, rgb(108 92 231 / 34%) 1.2px, transparent 1.4px);
  background-size: 7px 7px;
  content: '';
  mask-image: linear-gradient(135deg, transparent 20%, #000 100%);
}

.logs-page__header-inner::after {
  position: absolute;
  z-index: 0;
  top: -2rem;
  right: 18%;
  width: 14rem;
  height: 10rem;
  background: repeating-linear-gradient(25deg, transparent 0 13px, rgb(108 92 231 / 31%) 14px 15px, transparent 16px 25px);
  clip-path: polygon(0 0, 100% 0, 100% 15%, 0 100%);
  content: '';
}

.logs-page__number,
.logs-page__copy,
.logs-page__rail {
  position: relative;
  z-index: 1;
}

.logs-page__number {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--specimen-line);
}

.logs-page__number strong {
  color: transparent;
  font-size: clamp(6.8rem, 13vw, 12.5rem);
  font-weight: 850;
  letter-spacing: -.1em;
  line-height: .8;
  -webkit-text-stroke: 1.5px rgb(108 92 231 / 68%);
}

.logs-page__number span {
  margin-top: 2rem;
  color: var(--specimen-violet);
  font-size: .72rem;
  font-weight: 800;
}

.logs-page__number::after {
  margin-top: 2.4rem;
  color: var(--specimen-pink);
  content: '///';
  font-family: var(--specimen-mono);
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: .06em;
  transform: skewX(-12deg);
}

.logs-page__copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: clamp(3rem, 6vw, 6rem);
}

.logs-page__copy h1 {
  margin: 0;
  font-size: clamp(4.3rem, 7.6vw, 7.8rem);
  font-weight: 900;
  letter-spacing: -.085em;
  line-height: .88;
}

.logs-page__copy h1 span + span {
  margin-left: .12em;
}

.logs-page__copy p {
  max-width: 42rem;
  margin: 2rem 0 0;
  color: var(--specimen-muted);
  font-size: clamp(.98rem, 1.25vw, 1.12rem);
  line-height: 1.8;
}

.logs-page__topics {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem .9rem;
  align-items: center;
  margin-top: 2rem;
  color: var(--specimen-violet);
  font-size: .76rem;
  font-weight: 800;
}

.logs-page__topics i {
  color: var(--specimen-pink);
  font-style: normal;
}

.logs-page__rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-left: 1px solid var(--specimen-line);
  color: var(--specimen-violet);
}

.logs-page__rail i {
  width: 1.65rem;
  aspect-ratio: 1;
  background: currentColor;
  clip-path: polygon(50% 0, 61% 38%, 100% 50%, 61% 62%, 50% 100%, 39% 62%, 0 50%, 39% 38%);
}

.logs-page__rail span {
  font-size: .7rem;
  font-weight: 800;
  writing-mode: vertical-rl;
}

.logs-page__registry {
  --logs-columns: 6.25rem minmax(0, 1fr) 10rem 9rem 2.5rem;

  margin-top: clamp(3.5rem, 5vw, 4.5rem);
}

.logs-page__registry-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.logs-page__registry-heading .anime-section-title {
  flex: 1;
}

.logs-page__registry-heading p {
  margin: 0 0 .1rem;
  color: var(--specimen-violet);
  font-size: .74rem;
  font-weight: 800;
  white-space: nowrap;
}

.logs-page__columns {
  display: grid;
  grid-template-columns: var(--logs-columns);
  gap: 1rem;
  padding: .8rem 1rem;
  border-top: 1.5px solid var(--specimen-ink);
  border-bottom: 1px solid var(--specimen-ink);
  color: var(--specimen-muted);
  font-size: .69rem;
  font-weight: 800;
}

.logs-page__columns span:nth-child(4) {
  text-align: right;
}

.logs-page__columns span:last-child {
  text-align: right;
}

.logs-page__empty {
  min-height: 16rem;
  padding: 3rem 0;
  color: var(--specimen-muted);
}

.logs-page__end {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  justify-content: center;
  padding-top: 2rem;
  color: var(--specimen-violet);
  font-size: .68rem;
  font-weight: 800;
}

.logs-page__end i {
  width: .9rem;
  aspect-ratio: 1;
  background: currentColor;
  clip-path: polygon(50% 0, 61% 38%, 100% 50%, 61% 62%, 50% 100%, 39% 62%, 0 50%, 39% 38%);
}

@media (max-width: 63.99rem) {
  .logs-page__header-inner {
    grid-template-columns: minmax(11rem, .34fr) minmax(0, 1fr) 4.5rem;
  }

  .logs-page__copy {
    padding: 3rem;
  }

  .logs-page__copy h1 {
    font-size: clamp(3.7rem, 8.5vw, 5.8rem);
  }

  .logs-page__registry {
    --logs-columns: 4.75rem minmax(0, 1fr) 8.5rem 2rem;
  }

  .logs-page__columns span:nth-child(3) {
    display: none;
  }
}

@media (max-width: 47.99rem) {
  .logs-page {
    padding-top: 2rem;
  }

  .logs-page__header {
    --header-cut: 1.2rem;
  }

  .logs-page__header-inner {
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .logs-page__copy {
    grid-row: 1;
    padding: 2.35rem 1.25rem 2rem;
  }

  .logs-page__copy h1 {
    font-size: clamp(3.8rem, 18vw, 5.4rem);
  }

  .logs-page__copy h1 span {
    display: block;
  }

  .logs-page__copy h1 span + span {
    margin-left: 0;
  }

  .logs-page__copy p {
    margin-top: 1.15rem;
    font-size: .92rem;
  }

  .logs-page__topics {
    margin-top: 1.25rem;
    font-size: .66rem;
  }

  .logs-page__number {
    min-height: 8.75rem;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1.25rem 1.75rem 1.25rem 1.25rem;
    border-top: 1px solid var(--specimen-line);
    border-right: 0;
  }

  .logs-page__number strong {
    font-size: clamp(6rem, 31vw, 8rem);
  }

  .logs-page__number span {
    margin-top: 0;
  }

  .logs-page__number::after {
    margin: 0 0 0 auto;
    font-size: 1.2rem;
  }

  .logs-page__rail {
    display: none;
  }

  .logs-page__registry-heading {
    display: block;
    margin-bottom: 1.25rem;
  }

  .logs-page__registry-heading p {
    margin-top: 1rem;
    font-size: .62rem;
  }

  .logs-page__columns {
    display: none;
  }

  .logs-page__end {
    justify-content: flex-start;
    gap: .75rem;
    font-size: .58rem;
  }

  .logs-page__end span:last-child {
    display: none;
  }
}

@media (max-width: 22rem) {
  .logs-page__number {
    gap: .75rem;
    padding-inline: 1rem;
  }

  .logs-page__number strong {
    font-size: 5.2rem;
  }

  .logs-page__number::after {
    display: none;
  }
}
</style>
