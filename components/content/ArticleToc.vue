<script setup lang="ts">
interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

const props = defineProps<{
  links: TocLink[]
}>()

const activeId = ref('')
let observer: IntersectionObserver | null = null

const flattenLinks = (links: TocLink[]): TocLink[] => {
  return links.flatMap(link => [link, ...flattenLinks(link.children || [])])
}

const flatLinks = computed(() => flattenLinks(props.links))

onMounted(() => {
  activeId.value = flatLinks.value[0]?.id || ''
  const headings = Array.from(
    document.querySelectorAll<HTMLElement>('.article-layout__body h2[id], .article-layout__body h3[id]')
  )

  if (!headings.length) { return }

  observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)

    if (visible[0]?.target.id) {
      activeId.value = visible[0].target.id
    }
  }, {
    rootMargin: '-15% 0px -70% 0px'
  })

  headings.forEach(heading => observer?.observe(heading))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <aside
    v-if="flatLinks.length"
    class="article-toc"
    aria-label="文章目录"
  >
    <div class="article-toc__title">
      <span>本页目录</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
      >
        <path d="M16 1.5 19.6 12 30.5 16l-10.9 4L16 30.5 12.4 20 1.5 16l10.9-4L16 1.5Z" />
      </svg>
    </div>
    <nav>
      <a
        v-for="link in flatLinks"
        :key="link.id"
        :href="`#${link.id}`"
        :class="{ 'is-child': link.depth > 2 }"
        :aria-current="activeId === link.id ? 'location' : undefined"
        @click="activeId = link.id"
      >
        <span
          class="article-toc__mark specimen-mono"
          aria-hidden="true"
        >
          <svg
            v-if="activeId === link.id"
            viewBox="0 0 32 32"
          >
            <path d="M16 1.5 19.6 12 30.5 16l-10.9 4L16 30.5 12.4 20 1.5 16l10.9-4L16 1.5Z" />
          </svg>
          <span v-else>//</span>
        </span>
        {{ link.text }}
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.article-toc {
  position: sticky;
  top: 2rem;
  align-self: start;
  max-height: calc(100vh - 4rem);
  padding: 3rem 0 2rem clamp(1.25rem, 2.5vw, 2.5rem);
  overflow-y: auto;
}

.article-toc__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .75rem;
  padding: 0 0 .85rem;
  border-bottom: 1px solid rgb(108 92 231 / 50%);
  color: var(--specimen-ink);
  font-size: .95rem;
  font-weight: 800;
}

.article-toc__title svg {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  fill: var(--specimen-violet);
}

.article-toc nav {
  display: grid;
  gap: .15rem;
  margin-top: 1rem;
}

.article-toc a {
  display: grid;
  grid-template-columns: 1.2rem minmax(0, 1fr);
  gap: .6rem;
  align-items: start;
  padding: .58rem 0;
  color: var(--specimen-ink);
  font-size: .84rem;
  line-height: 1.5;
  text-decoration: none;
}

.article-toc__mark {
  display: inline-flex;
  height: 1.25rem;
  align-items: center;
  color: var(--specimen-pink);
  font-size: .72rem;
  font-weight: 850;
  letter-spacing: -.18em;
}

.article-toc__mark svg {
  width: .95rem;
  height: .95rem;
  fill: var(--specimen-violet);
}

.article-toc a.is-child {
  padding-left: .9rem;
  color: var(--specimen-muted);
  font-size: .78rem;
}

.article-toc a:hover,
.article-toc a:focus-visible,
.article-toc a[aria-current='location'] {
  color: var(--specimen-violet);
  font-weight: 750;
}

.article-toc a[aria-current='location'] {
  margin-left: -.85rem;
  padding-left: .65rem;
  border-left: 4px solid var(--specimen-violet);
}
</style>
