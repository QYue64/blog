# 雀雀博客“数字标本室”前端重设计实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不改变现有文章正文、文章 URL 和静态发布流程的前提下，把雀雀博客完整重构为浅色“数字标本室”视觉系统。

**Architecture:** 保留 Nuxt Content 的 document-driven 路由，让主题层负责数据整理与展示。文章排序、编号、阅读时间和上下篇关系集中到纯函数工具中；首页、日志索引和阅读页由小型 Vue 组件组合，统一使用 CSS 变量和无障碍交互约束。

**Tech Stack:** Nuxt 3、Vue 3、Nuxt Content 2、Pinceau/主题 tokens、TypeScript、Vitest、Browser/IAB、Image Gen。

---

## 文件结构

### 新建

- `docs/superpowers/concepts/digital-specimen-home.png`：最终首页视觉基准。
- `docs/superpowers/concepts/digital-specimen-content.png`：文章索引和阅读页视觉基准。
- `vitest.config.ts`：纯函数测试配置。
- `tests/articles.test.ts`：排序、编号、阅读时间、首页数据和上下篇测试。
- `tests/content-contract.test.ts`：文章 frontmatter 和内容路由契约测试。
- `tests/site.test.ts`：站点导航与外部链接契约测试。
- `utils/articles.ts`：文章数据纯函数。
- `composables/site.ts`：品牌文案、导航、关键词和外部链接。
- `components/AppMobileMenu.vue`：移动端菜单及焦点管理。
- `components/SpecimenWindow.vue`：标本窗口基础组件。
- `components/content/HomeSpecimen.vue`：首页数据编排。
- `components/content/HomeSpecimenHero.vue`：首页首屏。
- `components/content/KeywordTicker.vue`：关键词横向带。
- `components/content/ArticleLogList.vue`：日志列表容器。
- `components/content/ArticleLogRow.vue`：日志行与悬停预览。
- `components/content/ReadingProgress.vue`：阅读进度条。
- `components/content/ArticleHeader.vue`：文章页头。
- `components/content/ArticleToc.vue`：桌面目录和当前章节状态。
- `components/content/ArticlePagination.vue`：上一篇和下一篇。
- `components/content/ProsePre.vue`：浅色代码块与复制按钮。

### 修改

- `package.json`、`pnpm-lock.yaml`：加入测试脚本与依赖。
- `nuxt.config.ts`：中文语言和固定浅色主题。
- `tokens.config.ts`、`assets/main.css`：数字标本室 tokens 和全局样式。
- `components/AppHeader.vue`、`components/MainNav.vue`、`components/AppFooter.vue`、`components/AppLayout.vue`、`components/AppLoadingBar.vue`：站点外壳重设计。
- `components/DocumentDrivenNotFound.vue`：中文 404 与新视觉。
- `components/content/ArticlesList.vue`：保留 MDC API，内部改用日志列表。
- `layouts/page.vue`、`layouts/article.vue`：索引和阅读布局。
- `.starters/default/app.config.ts`：中文站点元信息。
- `.starters/default/content/1.index.md`、`.starters/default/content/2.articles.md`：调用新首页和索引组件。
- `.starters/default/content/articles/*.md`：只补充 `category`，不改正文和 URL。

### 删除

- `components/ColorModeSwitch.vue`：项目明确不提供深色主题。
- `components/content/ArticlesListItem.vue`：由 `ArticleLogRow` 取代。

---

### Task 1：生成并确认最终视觉基准

**Files:**
- Create: `docs/superpowers/concepts/digital-specimen-home.png`
- Create: `docs/superpowers/concepts/digital-specimen-content.png`

- [ ] **Step 1：调用视觉实现技能**

读取并遵循 `build-web-apps:frontend-app-builder` 与 `imagegen`。将已批准的设计规格作为不可变约束，不重新发明页面结构或文案。

- [ ] **Step 2：生成首页概念图**

使用以下完整提示生成 1440×900 首页概念图：

```text
为中文个人技术博客“雀雀博客”生成一张 1440×900 的高保真网页设计图。设计方向名为“数字标本室”，仅浅色主题。背景 #EDF4FF，文字 #172030，有机酸性绿色块 #C9FF5C，紫色强调 #7656EF，粉色窗口 #FFB8DB。顶部文字品牌必须是“QYUE://HOME”，导航必须是“文章 / 关于 / 链接 / 菜单”。首屏主标题必须逐字呈现“好奇心，有自己的 homepage.”，使用超大无衬线中文标题和少量衬线斜体英文。包含 NOW.TXT 与 STATUS 两个带 1px 墨色边框和硬阴影的漂浮窗口，不能遮挡标题。下方必须出现关键词横条、最新文章“用 Cloudflare Worker 将 HTTP 地址转为 HTTPS”、三条最近记录、about 区域和外部链接区。不要深色背景、玻璃拟态、渐变、通用圆角卡片网格、英雄区眉题或徽章。界面文字与控件应可由 HTML/CSS 原生实现。
```

- [ ] **Step 3：生成内容页概念图**

使用以下完整提示生成文章索引与阅读页组合概念图：

```text
延续“数字标本室”首页的完全相同设计系统，生成一张 1440×1200 的网页设计图，上半部分是文章索引 QYUE://LOGS，下半部分是文章阅读页 QYUE://ENTRY_010。索引必须是开放的数据日志列表，不是卡片网格，显示编号、中文标题、分类和日期。阅读页必须有顶部紫色进度条、酸性绿标题图形、粉色元数据窗口、左侧返回区、中间约 68ch 的稳定正文、右侧目录、浅色代码块和上下篇导航。正文区域禁止漂浮、视差和深色代码背景。移动端收敛逻辑应能从桌面结构中明确推断。保持 #EDF4FF / #172030 / #C9FF5C / #7656EF / #FFB8DB 色板。
```

- [ ] **Step 4：保存并检查概念图**

把生成结果保存到上述两个路径。分别使用 `view_image` 检查文字层级、色板、窗口位置、列表结构和正文宽度；任何文字不可读、页面被裁切或布局偏离规格时重新生成，不通过裁切旧图补救。

- [ ] **Step 5：取得用户确认**

向用户展示两张概念图。用户确认前不写实现代码；若要求修改，重新生成对应整张页面。

- [ ] **Step 6：提交视觉基准**

```bash
git add docs/superpowers/concepts/digital-specimen-home.png docs/superpowers/concepts/digital-specimen-content.png
git commit -m "docs: 添加数字标本室视觉基准"
```

---

### Task 2：建立测试环境和文章数据纯函数

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `vitest.config.ts`
- Create: `tests/articles.test.ts`
- Create: `utils/articles.ts`

- [ ] **Step 1：安装测试依赖并补充脚本**

运行：

```bash
pnpm add -Dw vitest@1.2.2 happy-dom@13.3.8
```

在 `package.json` 的 `scripts` 中加入：

```json
"test": "vitest run",
"test:watch": "vitest"
```

创建 `vitest.config.ts`：

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.ts']
  }
})
```

- [ ] **Step 2：先写文章工具的失败测试**

创建 `tests/articles.test.ts`：

```ts
import { describe, expect, it } from 'vitest'
import {
  calculateReadingProgress,
  estimateReadingMinutes,
  formatArticleDate,
  getAdjacentArticles,
  getArticleNumber,
  getHomeFeed,
  sortArticles
} from '../utils/articles'

const articles = [
  { _id: 'articles:08-old.md', _path: '/articles/old', title: '旧文章', date: '2024-01-01' },
  { _id: 'articles:10-new.md', _path: '/articles/new', title: '新文章', date: '2026-01-01' },
  { _id: 'articles:09-middle.md', _path: '/articles/middle', title: '中间文章', date: '2025-01-01' }
]

describe('文章数据工具', () => {
  it('按日期倒序排序并保持原数组不变', () => {
    const sorted = sortArticles(articles)
    expect(sorted.map(article => article._path)).toEqual([
      '/articles/new',
      '/articles/middle',
      '/articles/old'
    ])
    expect(articles[0]._path).toBe('/articles/old')
  })

  it('缺少日期时排在最后，同日按 _id 倒序', () => {
    const sorted = sortArticles([
      { _id: 'articles:01-a.md', _path: '/a', title: 'A', date: '2026-01-01' },
      { _id: 'articles:02-b.md', _path: '/b', title: 'B', date: '2026-01-01' },
      { _id: 'articles:03-c.md', _path: '/c', title: 'C' }
    ])
    expect(sorted.map(article => article._path)).toEqual(['/b', '/a', '/c'])
  })

  it('从文件名前缀生成稳定的三位编号', () => {
    expect(getArticleNumber(articles[1], 2)).toBe('010')
    expect(getArticleNumber({ _path: '/articles/no-prefix', title: '无编号' }, 2)).toBe('002')
  })

  it('同时估算中英文阅读时间且最少一分钟', () => {
    expect(estimateReadingMinutes({ children: [{ value: '短文本 hello world' }] })).toBe(1)
    const longText = `${'中'.repeat(800)} ${'word '.repeat(220)}`
    expect(estimateReadingMinutes({ value: longText })).toBe(3)
  })

  it('使用中文日期并安全处理缺失日期', () => {
    expect(formatArticleDate('2026-01-01')).toBe('2026年1月1日')
    expect(formatArticleDate()).toBe('UNDATED')
    expect(formatArticleDate('invalid')).toBe('UNDATED')
  })

  it('首页拆出一篇重点文章和指定数量最近文章', () => {
    const feed = getHomeFeed(sortArticles(articles), 2)
    expect(feed.featured?._path).toBe('/articles/new')
    expect(feed.recent.map(article => article._path)).toEqual(['/articles/middle', '/articles/old'])
  })

  it('使用相同排序关系计算上一篇和下一篇', () => {
    const adjacent = getAdjacentArticles(sortArticles(articles), '/articles/middle')
    expect(adjacent.previous?._path).toBe('/articles/old')
    expect(adjacent.next?._path).toBe('/articles/new')
  })

  it('把滚动位置限制在 0 到 100', () => {
    expect(calculateReadingProgress(0, 1000, 500)).toBe(0)
    expect(calculateReadingProgress(250, 1000, 500)).toBe(50)
    expect(calculateReadingProgress(900, 1000, 500)).toBe(100)
  })
})
```

- [ ] **Step 3：运行测试并确认失败**

运行：

```bash
pnpm test -- tests/articles.test.ts
```

预期：FAIL，提示无法找到 `../utils/articles`。

- [ ] **Step 4：实现最小文章工具**

创建 `utils/articles.ts`：

```ts
export interface ArticleRecord {
  _id?: string
  _path: string
  title: string
  date?: string
  description?: string
  category?: string
  body?: unknown
}

const getTimestamp = (date?: string) => {
  if (!date) { return 0 }
  const timestamp = new Date(date).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export const sortArticles = <T extends ArticleRecord>(articles: T[]) => {
  return [...articles].sort((first, second) => {
    const dateDifference = getTimestamp(second.date) - getTimestamp(first.date)
    if (dateDifference !== 0) { return dateDifference }
    return (second._id || '').localeCompare(first._id || '')
  })
}

export const getArticleNumber = (article: Pick<ArticleRecord, '_id' | '_path' | 'title'>, fallback: number) => {
  const source = article._id || article._path
  const match = source.match(/(?:^|[:/])(\d+)[.-]/)
  return (match?.[1] || String(fallback)).padStart(3, '0')
}

const collectText = (value: unknown): string => {
  if (typeof value === 'string') { return value }
  if (Array.isArray(value)) { return value.map(collectText).join(' ') }
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).map(collectText).join(' ')
  }
  return ''
}

export const estimateReadingMinutes = (body: unknown) => {
  const text = collectText(body)
  const chineseCount = text.match(/[\u3400-\u9fff]/g)?.length || 0
  const englishCount = text.replace(/[\u3400-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g)?.length || 0
  return Math.max(1, Math.ceil(chineseCount / 400 + englishCount / 220))
}

export const formatArticleDate = (date?: string) => {
  if (!date || Number.isNaN(new Date(date).getTime())) { return 'UNDATED' }
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export const getHomeFeed = <T extends ArticleRecord>(articles: T[], recentLimit = 3) => ({
  featured: articles[0] || null,
  recent: articles.slice(1, recentLimit + 1)
})

export const getAdjacentArticles = <T extends ArticleRecord>(articles: T[], currentPath: string) => {
  const index = articles.findIndex(article => article._path === currentPath)
  if (index < 0) { return { previous: null, next: null } }
  return {
    previous: articles[index + 1] || null,
    next: articles[index - 1] || null
  }
}

export const calculateReadingProgress = (scrollTop: number, scrollHeight: number, clientHeight: number) => {
  const scrollable = scrollHeight - clientHeight
  if (scrollable <= 0) { return 0 }
  return Math.min(100, Math.max(0, Math.round((scrollTop / scrollable) * 100)))
}
```

- [ ] **Step 5：运行测试并确认通过**

```bash
pnpm test -- tests/articles.test.ts
```

预期：8 tests passed。

- [ ] **Step 6：提交**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts tests/articles.test.ts utils/articles.ts
git commit -m "test: 添加文章数据工具测试"
```

---

### Task 3：锁定内容契约、中文语言和浅色模式

**Files:**
- Create: `tests/content-contract.test.ts`
- Modify: `nuxt.config.ts`
- Modify: `.starters/default/app.config.ts`
- Modify: `.starters/default/content/1.index.md`
- Modify: `.starters/default/content/2.articles.md`
- Modify: `.starters/default/content/articles/*.md`

- [ ] **Step 1：写内容契约失败测试**

创建 `tests/content-contract.test.ts`：

```ts
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const articlesDirectory = resolve('.starters/default/content/articles')
const articleFiles = readdirSync(articlesDirectory).filter(file => file.endsWith('.md')).sort()

describe('博客内容契约', () => {
  it('每篇文章保留唯一数字前缀并包含分类', () => {
    const prefixes = articleFiles.map(file => file.match(/^(\d+)-/)?.[1])
    expect(prefixes.every(Boolean)).toBe(true)
    expect(new Set(prefixes).size).toBe(articleFiles.length)

    for (const file of articleFiles) {
      const content = readFileSync(resolve(articlesDirectory, file), 'utf8')
      expect(content).toMatch(/^---[\s\S]*\ncategory: .+[\s\S]*\n---/)
    }
  })

  it('首页和文章页调用新的内容组件', () => {
    expect(readFileSync(resolve('.starters/default/content/1.index.md'), 'utf8')).toContain('::home-specimen')
    expect(readFileSync(resolve('.starters/default/content/2.articles.md'), 'utf8')).toContain('::articles-list')
  })
})
```

- [ ] **Step 2：运行测试并确认失败**

```bash
pnpm test -- tests/content-contract.test.ts
```

预期：FAIL，文章缺少 `category`，首页缺少 `::home-specimen`。

- [ ] **Step 3：补充分类元数据**

只在 frontmatter 中加入以下字段，不修改正文：

```text
01-allinoneplan.md                  category: HOMELAB
02-hypervdda.md                     category: VIRTUALIZATION
03-wallpaper240823.md               category: VISUAL ARCHIVE
04-dockernote.md                    category: CONTAINERS
05-p2pmove.md                       category: NETWORKING
06-sysctlconfig.md                  category: LINUX
07-airport.md                       category: LINKS
08-openclaw-deploy.md               category: AI / DEPLOY
09-chinese-openclaw-products.md     category: AI / TOOLS
10-cloudflare-worker-https-forward.md category: INFRASTRUCTURE
```

- [ ] **Step 4：改写页面入口 Markdown**

`.starters/default/content/1.index.md`：

```md
---
title: 首页
layout: default
head:
  title: 雀雀博客
description: 雀雀的个人技术日志，记录 AI、自托管、DevOps 与数字生活。
---

::home-specimen
::
```

`.starters/default/content/2.articles.md`：

```md
---
title: 所有记录
layout: page
head:
  title: 所有记录 · 雀雀博客
---

::articles-list{path="articles"}
::
```

- [ ] **Step 5：固定中文和浅色模式**

在 `nuxt.config.ts` 中把 `lang` 改为 `zh-CN`，并把 `colorMode` 改为：

```ts
colorMode: {
  preference: 'light',
  fallback: 'light',
  classSuffix: ''
}
```

在 `.starters/default/app.config.ts` 中使用：

```ts
title: '雀雀博客',
description: '雀雀的个人技术日志，记录 AI、自托管、DevOps 与数字生活。'
```

- [ ] **Step 6：运行契约和回归测试**

```bash
pnpm test
```

预期：全部测试通过。

- [ ] **Step 7：提交**

```bash
git add nuxt.config.ts .starters/default/app.config.ts .starters/default/content tests/content-contract.test.ts
git commit -m "content: 补充数字标本室内容元数据"
```

---

### Task 4：实现站点常量、全局 tokens 和应用外壳

**Files:**
- Create: `tests/site.test.ts`
- Create: `composables/site.ts`
- Create: `components/AppMobileMenu.vue`
- Create: `components/SpecimenWindow.vue`
- Modify: `tokens.config.ts`
- Modify: `assets/main.css`
- Modify: `components/AppHeader.vue`
- Modify: `components/MainNav.vue`
- Modify: `components/AppFooter.vue`
- Modify: `components/AppLayout.vue`
- Modify: `components/AppLoadingBar.vue`
- Delete: `components/ColorModeSwitch.vue`

- [ ] **Step 1：写站点常量失败测试**

创建 `tests/site.test.ts`：

```ts
import { describe, expect, it } from 'vitest'
import { externalLinks, keywords, siteNavigation } from '../composables/site'

describe('站点导航', () => {
  it('只暴露已批准的主导航', () => {
    expect(siteNavigation).toEqual([
      { label: '文章', to: '/articles' },
      { label: '关于', to: '/#about' },
      { label: '链接', to: '/#links' }
    ])
  })

  it('保留四个现有外部入口', () => {
    expect(externalLinks.map(link => link.label)).toEqual(['笔记', 'AI', 'DSM', 'Terminal'])
    expect(externalLinks.every(link => link.target === '_blank')).toBe(true)
  })

  it('关键词来自真实内容主题', () => {
    expect(keywords).toEqual(['AI', 'HOMELAB', 'DOCKER', 'OPENCLAW', 'CLOUDFLARE', 'NOTES'])
  })
})
```

- [ ] **Step 2：运行测试并确认失败**

```bash
pnpm test -- tests/site.test.ts
```

预期：FAIL，缺少 `composables/site.ts`。

- [ ] **Step 3：实现站点常量**

创建 `composables/site.ts`：

```ts
export const siteNavigation = [
  { label: '文章', to: '/articles' },
  { label: '关于', to: '/#about' },
  { label: '链接', to: '/#links' }
]

export const externalLinks = [
  { label: '笔记', href: 'https://memo.witque.cn:8888/', target: '_blank' },
  { label: 'AI', href: 'https://queai.de', target: '_blank' },
  { label: 'DSM', href: 'https://qnas.dsmynas.com:5001/', target: '_blank' },
  { label: 'Terminal', href: 'https://tunnel.witque.cn:8888/', target: '_blank' }
]

export const keywords = ['AI', 'HOMELAB', 'DOCKER', 'OPENCLAW', 'CLOUDFLARE', 'NOTES']
```

- [ ] **Step 4：定义设计 tokens**

在 `tokens.config.ts` 的 `alpine` 下加入并替换颜色：

```ts
specimen: {
  ice: '#EDF4FF',
  ink: '#172030',
  lime: '#C9FF5C',
  violet: '#7656EF',
  pink: '#FFB8DB',
  muted: '#596578',
  line: '#9BA7BA'
},
body: {
  backgroundColor: { initial: '#EDF4FF', dark: '#EDF4FF' },
  color: { initial: '#172030', dark: '#172030' }
}
```

把 `assets/main.css` 改为统一的全局合同：

```css
:root {
  color-scheme: light;
  --specimen-ice: #edf4ff;
  --specimen-ink: #172030;
  --specimen-lime: #c9ff5c;
  --specimen-violet: #7656ef;
  --specimen-pink: #ffb8db;
  --specimen-muted: #596578;
  --specimen-line: #9ba7ba;
  --specimen-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --specimen-sans: Inter, "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  --specimen-serif: Georgia, "Songti SC", "STSong", serif;
}

html { scroll-behavior: smooth; }
body { margin: 0; background: var(--specimen-ice); color: var(--specimen-ink); font-family: var(--specimen-sans); }
::selection { background: var(--specimen-pink); color: var(--specimen-ink); }
:focus-visible { outline: 3px solid var(--specimen-violet); outline-offset: 4px; }
.specimen-mono { font-family: var(--specimen-mono); letter-spacing: .04em; text-transform: uppercase; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
```

- [ ] **Step 5：实现窗口基础组件**

创建 `components/SpecimenWindow.vue`：

```vue
<script setup lang="ts">
defineProps<{ title: string, tone?: 'white' | 'pink' }>()
</script>

<template>
  <section class="specimen-window" :class="`is-${tone || 'white'}`">
    <header><span>{{ title }}</span><span aria-hidden="true">×</span></header>
    <div class="specimen-window__body"><slot /></div>
  </section>
</template>

<style scoped>
.specimen-window { border: 1px solid var(--specimen-ink); background: rgb(255 255 255 / 87%); box-shadow: 7px 8px 0 var(--specimen-violet); font-family: var(--specimen-mono); }
.specimen-window.is-pink { background: var(--specimen-pink); box-shadow: 7px 8px 0 var(--specimen-ink); }
header { display: flex; justify-content: space-between; padding: .55rem .65rem; border-bottom: 1px solid var(--specimen-ink); font-size: .7rem; font-weight: 700; }
.specimen-window__body { padding: .7rem; font-size: .75rem; line-height: 1.55; }
</style>
```

- [ ] **Step 6：实现 Header、MainNav 和移动菜单**

`MainNav.vue` 只渲染 `siteNavigation`；`AppHeader.vue` 负责 `QYUE://HOME`、桌面导航和菜单按钮；`AppMobileMenu.vue` 接收 `open`，发出 `close`，并包含 `siteNavigation` 与 `externalLinks`。必须满足以下接口：

```vue
<!-- AppMobileMenu.vue -->
<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const closeButton = ref<HTMLButtonElement | null>(null)

watch(() => props.open, async (open) => {
  if (!open) { return }
  await nextTick()
  closeButton.value?.focus()
})

onKeyStroke('Escape', () => props.open && emit('close'))
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="mobile-menu" role="dialog" aria-modal="true" aria-label="站点菜单">
      <button ref="closeButton" type="button" aria-label="关闭菜单" @click="emit('close')">CLOSE / ×</button>
      <NuxtLink v-for="link in siteNavigation" :key="link.to" :to="link.to" @click="emit('close')">{{ link.label }}</NuxtLink>
      <a v-for="link in externalLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
    </div>
  </Teleport>
</template>
```

菜单按钮触控区域至少 44×44px；路由变化后关闭菜单；背景禁止滚动。

- [ ] **Step 7：实现 Footer、Layout 和加载条**

- Footer 删除色彩模式开关，显示 `© 2026 QYUE`、备案和四个外部链接。
- AppLayout 保持 `AppLoadingBar → AppHeader → slot → AppFooter` 顺序。
- 加载条改为 `background: var(--specimen-violet)`，高度 4px。
- 删除 `components/ColorModeSwitch.vue`。

- [ ] **Step 8：运行测试、lint 和构建**

```bash
pnpm test
pnpm lint
pnpm generate
```

预期：全部命令退出码为 0。

- [ ] **Step 9：提交**

```bash
git add composables/site.ts tests/site.test.ts tokens.config.ts assets/main.css components
git commit -m "feat: 实现数字标本室应用外壳"
```

---

### Task 5：实现首页和共享文章日志组件

**Files:**
- Create: `components/content/HomeSpecimen.vue`
- Create: `components/content/HomeSpecimenHero.vue`
- Create: `components/content/KeywordTicker.vue`
- Create: `components/content/ArticleLogList.vue`
- Create: `components/content/ArticleLogRow.vue`

- [ ] **Step 1：扩展首页数据失败测试**

在 `tests/articles.test.ts` 增加：

```ts
it('首页文章不足时不会产生空日志行', () => {
  const feed = getHomeFeed([articles[1]], 3)
  expect(feed.featured?._path).toBe('/articles/new')
  expect(feed.recent).toEqual([])
})
```

- [ ] **Step 2：运行测试并确认通过现有实现覆盖边界**

```bash
pnpm test -- tests/articles.test.ts
```

预期：9 tests passed。若失败，只修复 `getHomeFeed`，不开始写 Vue 组件。

- [ ] **Step 3：实现首页编排组件**

创建 `components/content/HomeSpecimen.vue`：

```vue
<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'
import { getHomeFeed, sortArticles } from '../../utils/articles'

const { data } = await useAsyncData('home-specimen-articles', () => queryContent('/articles').find())
const articles = computed(() => sortArticles((data.value || []) as ArticleRecord[]))
const feed = computed(() => getHomeFeed(articles.value, 3))
</script>

<template>
  <div class="home-specimen">
    <HomeSpecimenHero />
    <KeywordTicker :items="keywords" />
    <ArticleLogList v-if="feed.featured" :articles="[feed.featured]" variant="featured" />
    <ArticleLogList :articles="feed.recent" variant="compact" title="最近记录" />
    <section id="about" class="home-specimen__about">
      <h2>把解决问题的过程，留在网上。</h2>
      <p>这里记录 AI、自托管、DevOps 和数字生活中的具体实验。</p>
    </section>
    <section id="links" class="home-specimen__links">
      <h2>LINKS / OUTBOUND</h2>
      <a v-for="link in externalLinks" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.label }} ↗</a>
    </section>
  </div>
</template>
```

- [ ] **Step 4：实现首屏和关键词带**

`HomeSpecimenHero.vue` 的可见文案固定为：

```vue
<template>
  <section class="specimen-hero" aria-labelledby="home-title">
    <div class="specimen-hero__blob" aria-hidden="true" />
    <div class="specimen-hero__copy">
      <h1 id="home-title">好奇心，<br>有自己的 <em>homepage.</em></h1>
      <p class="specimen-mono">AI · HOMELAB · DEVOPS</p>
    </div>
    <SpecimenWindow title="NOW.TXT" class="specimen-hero__now">正在研究如何让 AI 工具真正融入日常工作流。</SpecimenWindow>
    <SpecimenWindow title="STATUS" tone="pink" class="specimen-hero__status">BUILDING<br>DOCUMENTING<br>SHARING</SpecimenWindow>
  </section>
</template>
```

`KeywordTicker.vue` 重复一次传入数组用于无缝滚动，并把重复副本标记 `aria-hidden="true"`。CSS 动画名为 `specimen-ticker`，持续 22s；减少动态效果时停止在初始位置。

- [ ] **Step 5：实现日志列表和日志行**

`ArticleLogList.vue` 接口：

```ts
defineProps<{
  articles: ArticleRecord[]
  title?: string
  variant?: 'featured' | 'compact' | 'full'
}>()
```

`ArticleLogRow.vue` 必须使用 `getArticleNumber`、`estimateReadingMinutes` 和 `formatArticleDate`；根元素是整行可点击的 `NuxtLink`，显示标题、`category || 'NOTE'`、日期。缺少日期时显示 `UNDATED`，缺少描述时不渲染摘要元素。`featured` 变体额外显示已有描述和 `READ XX:00`。悬停与 `:focus-visible` 使用同一粉色反馈，预览窗口仅在支持 hover 的桌面设备出现。

- [ ] **Step 6：按视觉基准完成首页 CSS**

使用以下固定布局值作为实现起点：

```css
.specimen-hero { min-height: 34rem; position: relative; padding: clamp(4rem, 9vw, 8rem) 0 4rem; }
.specimen-hero h1 { max-width: 12ch; margin: 0; font-size: clamp(3.5rem, 8vw, 7.5rem); line-height: .88; letter-spacing: -.075em; }
.specimen-hero em { color: var(--specimen-violet); font-family: var(--specimen-serif); font-weight: 400; }
.specimen-hero__blob { position: absolute; width: 30rem; aspect-ratio: 1; right: -12rem; top: -14rem; border-radius: 45% 55% 31% 69%; background: var(--specimen-lime); }
.home-specimen__about, .home-specimen__links { border-top: 3px solid var(--specimen-ink); padding-block: clamp(3rem, 8vw, 7rem); }
@media (max-width: 47.99rem) {
  .specimen-hero { min-height: 42rem; }
  .specimen-hero__now, .specimen-hero__status { position: absolute; max-width: 10rem; }
}
```

把概念图当作最终几何基准，逐段截图修正窗口位置、首屏高度和下一段露出比例。

- [ ] **Step 7：浏览器检查首页**

启动：

```bash
pnpm dev
```

使用 Browser/IAB 检查 1440×900 和 390×844：首页首屏、窗口不遮挡、横向带、最新文章、最近记录、about、links、键盘焦点和减少动态效果。

- [ ] **Step 8：提交**

```bash
git add components/content/HomeSpecimen.vue components/content/HomeSpecimenHero.vue components/content/KeywordTicker.vue components/content/ArticleLogList.vue components/content/ArticleLogRow.vue
git commit -m "feat: 实现数字标本室首页"
```

---

### Task 6：重构文章索引页

**Files:**
- Modify: `components/content/ArticlesList.vue`
- Modify: `layouts/page.vue`
- Delete: `components/content/ArticlesListItem.vue`

- [ ] **Step 1：保留 MDC API 并切换数据视图**

把 `ArticlesList.vue` 改为：

```vue
<script setup lang="ts">
import type { ArticleRecord } from '../../utils/articles'
import { sortArticles } from '../../utils/articles'
import { withTrailingSlash } from 'ufo'

const props = withDefaults(defineProps<{ path?: string }>(), { path: 'articles' })
const { data } = await useAsyncData(`articles-list-${props.path}`, () => queryContent(withTrailingSlash(props.path)).find())
const articles = computed(() => sortArticles((data.value || []) as ArticleRecord[]))
</script>

<template>
  <section class="logs-page" aria-labelledby="logs-title">
    <header class="logs-page__header">
      <div class="logs-page__blob" aria-hidden="true">{{ String(articles.length).padStart(3, '0') }}</div>
      <h1 id="logs-title">所有<br>记录。</h1>
      <p>从最近一次实验往回翻：AI、自托管、Docker，以及值得保留下来的解决过程。</p>
    </header>
    <div class="logs-page__meta specimen-mono"><span>SORT / NEWEST_FIRST</span><span>{{ articles.length }} ENTRIES</span></div>
    <ArticleLogList v-if="articles.length" :articles="articles" variant="full" />
    <p v-else class="logs-page__empty">NO_ENTRIES / 暂无文章</p>
  </section>
</template>
```

- [ ] **Step 2：实现索引布局**

`layouts/page.vue` 保持语义主区域并提供容器类：

```vue
<template><main class="page-layout"><slot /></main></template>

<style scoped>
.page-layout { width: min(100% - 2rem, 72rem); margin-inline: auto; }
</style>
```

文章行桌面网格使用 `3rem minmax(0, 1fr) 10rem 7rem`，移动端改为 `2.5rem minmax(0, 1fr) auto` 并隐藏分类列。

- [ ] **Step 3：删除旧卡片组件并检查引用**

删除 `components/content/ArticlesListItem.vue`，运行：

```bash
rg -n "ArticlesListItem" . --glob '!node_modules/**'
```

预期：无输出。

- [ ] **Step 4：运行自动检查和浏览器检查**

```bash
pnpm test
pnpm lint
pnpm generate
```

使用 Browser/IAB 验证 `/articles` 的桌面日志列、移动行布局、悬停预览、键盘聚焦和无内容降级。

- [ ] **Step 5：提交**

```bash
git add components/content/ArticlesList.vue components/content/ArticleLogList.vue components/content/ArticleLogRow.vue layouts/page.vue
git rm components/content/ArticlesListItem.vue
git commit -m "feat: 重构文章日志索引"
```

---

### Task 7：实现文章阅读体验

**Files:**
- Create: `components/content/ReadingProgress.vue`
- Create: `components/content/ArticleHeader.vue`
- Create: `components/content/ArticleToc.vue`
- Create: `components/content/ArticlePagination.vue`
- Create: `components/content/ProsePre.vue`
- Modify: `layouts/article.vue`

- [ ] **Step 1：补充阅读工具边界测试**

在 `tests/articles.test.ts` 增加：

```ts
it('当前路径不存在时上下篇都为空', () => {
  expect(getAdjacentArticles(sortArticles(articles), '/missing')).toEqual({ previous: null, next: null })
})

it('没有可滚动内容时进度为零', () => {
  expect(calculateReadingProgress(100, 500, 500)).toBe(0)
})
```

- [ ] **Step 2：运行测试并确认通过现有实现覆盖边界**

```bash
pnpm test -- tests/articles.test.ts
```

预期：11 tests passed。

- [ ] **Step 3：实现阅读进度组件**

```vue
<!-- ReadingProgress.vue -->
<script setup lang="ts">
import { calculateReadingProgress } from '../../utils/articles'

const progress = ref(0)
const update = () => {
  const root = document.documentElement
  progress.value = calculateReadingProgress(root.scrollTop, root.scrollHeight, root.clientHeight)
}
onMounted(() => { update(); window.addEventListener('scroll', update, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', update))
</script>

<template><div class="reading-progress" aria-hidden="true"><span :style="{ width: `${progress}%` }" /></div></template>

<style scoped>
.reading-progress { position: fixed; inset: 0 0 auto; height: 4px; background: rgb(118 86 239 / 15%); z-index: 100; }
.reading-progress span { display: block; height: 100%; background: var(--specimen-violet); }
</style>
```

- [ ] **Step 4：实现文章页头和目录**

`ArticleHeader.vue` 接收 `page`、`number`、`minutes`，输出 `QYUE://ENTRY_XXX`、中文日期、标题和粉色元数据窗口。`ArticleToc.vue` 接收 Nuxt Content TOC links；用 `IntersectionObserver` 观察正文 `h2[id], h3[id]`，并对当前链接设置 `aria-current="location"`。TOC 无链接时组件返回空模板。

组件接口固定为：

```ts
// ArticleHeader.vue
defineProps<{ page: ArticleRecord, number: string, minutes: number }>()

// ArticleToc.vue
interface TocLink { id: string, text: string, depth: number, children?: TocLink[] }
defineProps<{ links: TocLink[] }>()
```

- [ ] **Step 5：实现浅色代码块**

创建 `ProsePre.vue`：

```vue
<script setup lang="ts">
const props = defineProps<{ code?: string, language?: string, filename?: string }>()
const copied = ref(false)

const copy = async () => {
  if (!props.code) { return }
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    window.setTimeout(() => { copied.value = false }, 1600)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="prose-pre">
    <div class="prose-pre__bar specimen-mono">
      <span>{{ filename || language || 'CODE' }}</span>
      <button type="button" @click="copy">{{ copied ? 'COPIED' : 'COPY' }}</button>
    </div>
    <pre><slot /></pre>
  </div>
</template>

<style scoped>
.prose-pre { margin-block: 1.5rem; border: 1px solid var(--specimen-ink); background: #fff; overflow: hidden; }
.prose-pre__bar { display: flex; justify-content: space-between; align-items: center; padding: .65rem .8rem; border-bottom: 1px solid var(--specimen-ink); background: var(--specimen-pink); font-size: .72rem; font-weight: 700; }
button { min-width: 44px; min-height: 44px; font: inherit; }
pre { margin: 0; padding: 1rem; overflow-x: auto; line-height: 1.7; }
</style>
```

- [ ] **Step 6：实现上下篇组件**

`ArticlePagination.vue` 接收 `previous` 和 `next`。存在文章时输出 `NuxtLink`，不存在时输出非交互文本 `暂无更多文章`。上一篇使用排序结果中的较旧文章，下一篇使用较新文章。

- [ ] **Step 7：组合文章布局**

`layouts/article.vue` 的脚本主干：

```ts
import type { ArticleRecord } from '../utils/articles'
import { estimateReadingMinutes, getAdjacentArticles, getArticleNumber, sortArticles } from '../utils/articles'

const { page, toc } = useContent()
const route = useRoute()
const { data } = await useAsyncData('article-navigation', () => queryContent('/articles').find())
const articles = computed(() => sortArticles((data.value || []) as ArticleRecord[]))
const current = computed(() => page.value as ArticleRecord)
const number = computed(() => getArticleNumber(current.value, articles.value.length))
const minutes = computed(() => estimateReadingMinutes(current.value.body))
const adjacent = computed(() => getAdjacentArticles(articles.value, route.path))
```

模板顺序固定为：

```vue
<ReadingProgress />
<article class="article-layout">
  <ArticleHeader :page="current" :number="number" :minutes="minutes" />
  <div class="article-layout__grid">
    <aside class="article-layout__back"><NuxtLink to="/articles">← 返回所有记录</NuxtLink></aside>
    <div class="article-layout__body prose"><slot /><ArticlePagination v-bind="adjacent" /></div>
    <ArticleToc class="article-layout__toc" :links="toc?.links || []" />
  </div>
</article>
```

桌面网格使用 `7rem minmax(0, 68ch) 11rem`，正文列居中；小于 64rem 时隐藏目录，小于 48rem 时改成单列。

- [ ] **Step 8：运行自动检查和浏览器检查**

```bash
pnpm test
pnpm lint
pnpm generate
```

使用 Browser/IAB 打开至少两篇文章，验证进度、目录、锚点、代码复制、上下篇、移动端代码横向滚动和无目录降级。

- [ ] **Step 9：提交**

```bash
git add components/content/ReadingProgress.vue components/content/ArticleHeader.vue components/content/ArticleToc.vue components/content/ArticlePagination.vue components/content/ProsePre.vue layouts/article.vue tests/articles.test.ts
git commit -m "feat: 实现数字标本室阅读体验"
```

---

### Task 8：完成中文降级页、响应式和无障碍收尾

**Files:**
- Modify: `components/DocumentDrivenNotFound.vue`
- Modify: `components/AppHeader.vue`
- Modify: `components/AppMobileMenu.vue`
- Modify: `components/content/HomeSpecimenHero.vue`
- Modify: `components/content/ArticleLogRow.vue`
- Modify: `components/content/ArticleToc.vue`
- Modify: `assets/main.css`

- [ ] **Step 1：重做 404**

404 可见文案固定为：

```text
QYUE://404
这条记录不存在。
返回首页 →
```

使用酸性绿色块和一个粉色 `NOT_FOUND` 窗口，不显示英文旧文案。

- [ ] **Step 2：执行键盘和语义检查**

逐项确认：

```text
Header 菜单按钮：aria-expanded、aria-controls
移动菜单：role=dialog、aria-modal=true、Esc 关闭、打开时焦点进入、关闭时焦点回到触发按钮
日志行：整行一个链接，不嵌套链接
目录：当前章节 aria-current=location
装饰 blob：aria-hidden=true
外部链接：target=_blank + rel=noopener noreferrer
触控控件：最小 44×44px
```

- [ ] **Step 3：执行响应式检查**

使用 Browser/IAB 分别检查：

```text
1440×900：完整首屏、三列阅读页、日志四列
1024×768：导航不碰撞、阅读目录可隐藏
768×1024：菜单切换正确、窗口不遮挡
390×844：单列日志、单列正文、无横向溢出
```

- [ ] **Step 4：执行减少动态效果检查**

在浏览器启用 `prefers-reduced-motion: reduce`，确认关键词带停止、有机图形和窗口不再循环移动，但内容顺序不改变。

- [ ] **Step 5：运行全部自动检查**

```bash
pnpm test
pnpm lint
pnpm generate
```

预期：全部退出码为 0。

- [ ] **Step 6：提交**

```bash
git add components/DocumentDrivenNotFound.vue components/AppHeader.vue components/AppMobileMenu.vue components/content assets/main.css
git commit -m "fix: 完善响应式与无障碍体验"
```

---

### Task 9：最终视觉忠实度与发布前验证

**Files:**
- Verify: `docs/superpowers/concepts/digital-specimen-home.png`
- Verify: `docs/superpowers/concepts/digital-specimen-content.png`
- Verify: `.starters/default/.output/public/`

- [ ] **Step 1：生成生产构建**

```bash
pnpm test
pnpm lint
pnpm generate
```

记录三个命令的退出码和测试数量；任何失败都必须修复后重新运行完整命令。

- [ ] **Step 2：检查静态路由**

启动静态预览：

```bash
pnpm preview
```

检查 `/`、`/articles`、10 个现有文章 URL 和不存在的路径。所有现有文章应返回可读页面，不应发生路由变化。

- [ ] **Step 3：捕获实现截图**

使用 Browser/IAB 捕获：

```text
首页 1440×900
文章索引 1440×900
文章详情 1440×1200
首页 390×844
文章详情 390×844
```

把最终桌面截图保存在临时 QA 目录，比较完成后删除临时截图。

- [ ] **Step 4：执行强制图像对比**

同一次 QA 中分别用 `view_image` 查看：

```text
概念首页 vs 实现首页
概念内容页 vs 实现索引和文章页
```

至少逐项记录并修复：可见文案、首屏构图、字体比例、色板、窗口边框和硬阴影、列表结构、正文宽度、间距、移动端收敛。可修复偏差未清零前不得交付。

- [ ] **Step 5：执行首屏文案差异检查**

允许文案只有：

```text
QYUE://HOME
文章 / 关于 / 链接 / 菜单
好奇心，有自己的 homepage.
AI · HOMELAB · DEVOPS
NOW.TXT
正在研究如何让 AI 工具真正融入日常工作流。
STATUS
BUILDING / DOCUMENTING / SHARING
```

删除任何未批准的眉题、徽章、指标、按钮或解释性文案。

- [ ] **Step 6：检查 Git 状态并提交最终修正**

```bash
git status --short
git diff --check
```

只保留本任务相关改动；删除临时 QA 产物。若有视觉修正：

```bash
git add assets components composables layouts utils .starters/default tests
git commit -m "fix: 对齐数字标本室视觉基准"
```

- [ ] **Step 7：最终交付记录**

交付信息必须包含：概念图路径、Browser/IAB 验证方式、`view_image` 对比结果、检查视口、至少五个对比点、首屏文案差异结果、剩余有意偏差和核心交互验证结果。
