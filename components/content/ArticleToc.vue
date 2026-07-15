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
    <div class="article-toc__title specimen-mono">
      <span>ON_THIS_PAGE</span>
      <span aria-hidden="true">≡</span>
    </div>
    <nav>
      <a
        v-for="link in flatLinks"
        :key="link.id"
        :href="`#${link.id}`"
        :class="{ 'is-child': link.depth > 2 }"
        :aria-current="activeId === link.id ? 'location' : undefined"
      >
        {{ link.text }}
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.article-toc {
  position: sticky;
  top: 2.5rem;
  align-self: start;
  padding: 2rem 0 2rem 1.5rem;
}

.article-toc__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  color: var(--specimen-muted);
  font-size: .68rem;
  font-weight: 750;
}

.article-toc nav {
  display: grid;
  gap: .35rem;
}

.article-toc a {
  position: relative;
  display: block;
  padding: .7rem .5rem .7rem 1rem;
  color: var(--specimen-muted);
  font-size: .8rem;
  line-height: 1.5;
  text-decoration: none;
}

.article-toc a::before {
  position: absolute;
  top: .65rem;
  bottom: .65rem;
  left: 0;
  width: 2px;
  background: var(--specimen-line);
  content: '';
}

.article-toc a.is-child {
  padding-left: 1.75rem;
  font-size: .75rem;
}

.article-toc a:hover,
.article-toc a:focus-visible,
.article-toc a[aria-current='location'] {
  color: var(--specimen-violet);
}

.article-toc a[aria-current='location']::before {
  width: 4px;
  background: var(--specimen-violet);
}
</style>
